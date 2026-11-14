/**
 * Uploads the Worker's place pages (npm run places:worker → worker-dist) to its R2 bucket, changing only what
 * changed: each file's MD5 is compared with the object's ETag, new or changed files are put, and objects no
 * longer in the folder are deleted. Uses the Cloudflare API with CLOUDFLARE_API_TOKEN (Workers R2 Storage
 * edit) and CLOUDFLARE_ACCOUNT_ID, the same secrets as the Worker deploy.
 *
 *   node scripts/sync-places-r2.mjs <bucket> [folder=worker-dist]
 */
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

const [bucket, folder = "worker-dist"] = process.argv.slice(2);
const { CLOUDFLARE_API_TOKEN: token, CLOUDFLARE_ACCOUNT_ID: account } = process.env;
if (!bucket || !token || !account) {
  console.error("Usage: CLOUDFLARE_API_TOKEN=… CLOUDFLARE_ACCOUNT_ID=… node scripts/sync-places-r2.mjs <bucket> [folder]");
  process.exit(1);
}
const api = `https://api.cloudflare.com/client/v4/accounts/${account}/r2/buckets/${bucket}/objects`;
const auth = { authorization: `Bearer ${token}` };
const root = resolve(folder);

async function call(url, options = {}, attempts = 4) {
  for (let attempt = 1; ; attempt += 1) {
    const response = await fetch(url, { ...options, headers: { ...auth, ...options.headers } });
    if (response.ok) return response;
    if (attempt === attempts || (response.status < 500 && response.status !== 429)) throw new Error(`${options.method ?? "GET"} ${url}: ${response.status} ${await response.text()}`);
    await new Promise((done) => setTimeout(done, 500 * 2 ** attempt));
  }
}

const local = new Map();
(function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith(".html")) local.set(relative(root, path).split(sep).join("/"), path);
  }
})(root);

const remote = new Map();
for (let cursor = ""; ;) {
  const page = await (await call(`${api}?per_page=1000${cursor ? `&cursor=${encodeURIComponent(cursor)}` : ""}`)).json();
  for (const object of page.result) remote.set(object.key, { etag: object.etag.replace(/"/g, ""), size: object.size });
  cursor = page.result_info?.cursor;
  if (!page.result_info?.is_truncated || !cursor) break;
}

const uploads = [];
let bytes = 0;
for (const [key, path] of local) {
  const body = readFileSync(path);
  bytes += body.length;
  const md5 = createHash("md5").update(body).digest("hex");
  if (remote.get(key)?.etag !== md5) uploads.push([key, body]);
}
const deletions = [...remote.keys()].filter((key) => !local.has(key));

async function pool(items, job, size = 16) {
  let next = 0;
  await Promise.all(Array.from({ length: size }, async () => { while (next < items.length) await job(items[next++]); }));
}
let done = 0;
await pool(uploads, async ([key, body]) => {
  await call(`${api}/${key.split("/").map(encodeURIComponent).join("/")}`, { method: "PUT", body, headers: { "content-type": "text/html; charset=utf-8" } });
  if (++done % 1000 === 0) console.log(`  uploaded ${done} of ${uploads.length}`);
});
await pool(deletions, (key) => call(`${api}/${key.split("/").map(encodeURIComponent).join("/")}`, { method: "DELETE" }));
console.log(`R2 ${bucket}: ${local.size} pages (${(bytes / 1048576).toFixed(0)} MB stored), ${uploads.length} uploaded, ${deletions.length} deleted, ${local.size - uploads.length} unchanged.`);

/**
 * Uploads the Worker's place pages (npm run places:worker → worker-dist) to its R2 bucket, changing only what
 * changed: each file's MD5 is compared with the object's ETag, new or changed files are put, and objects no
 * longer in the folder are deleted.
 *
 * It talks to R2's S3-compatible endpoint, which has no per-user request limit (the Cloudflare REST API
 * allows about 1,200 requests in 5 minutes, far too few for 20,000 pages). The S3 keys come from the same
 * CLOUDFLARE_API_TOKEN secret (Workers R2 Storage edit) as the Worker deploy: the key id is the token's id
 * and the secret is the SHA-256 of the token. CLOUDFLARE_ACCOUNT_ID names the account.
 *
 *   node scripts/sync-places-r2.mjs <bucket> [folder=worker-dist]
 */
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { AwsClient } from "aws4fetch";

const [bucket, folder = "worker-dist"] = process.argv.slice(2);
const { CLOUDFLARE_API_TOKEN: token, CLOUDFLARE_ACCOUNT_ID: account } = process.env;
if (!bucket || !token || !account) {
  console.error("Usage: CLOUDFLARE_API_TOKEN=… CLOUDFLARE_ACCOUNT_ID=… node scripts/sync-places-r2.mjs <bucket> [folder]");
  process.exit(1);
}
const root = resolve(folder);

/** The token's id: a user token verifies at /user/tokens, an account token at /accounts/<id>/tokens. */
async function tokenId() {
  for (const url of ["https://api.cloudflare.com/client/v4/user/tokens/verify", `https://api.cloudflare.com/client/v4/accounts/${account}/tokens/verify`]) {
    const body = await (await fetch(url, { headers: { authorization: `Bearer ${token}` } })).json();
    if (body.success && body.result?.id) return body.result.id;
  }
  throw new Error("CLOUDFLARE_API_TOKEN could not be verified: it must be an API token with R2 edit rights");
}

const s3 = new AwsClient({ accessKeyId: await tokenId(), secretAccessKey: createHash("sha256").update(token).digest("hex"), service: "s3", region: "auto" });
const endpoint = `https://${account}.r2.cloudflarestorage.com/${bucket}`;
const objectUrl = (key) => `${endpoint}/${key.split("/").map(encodeURIComponent).join("/")}`;

async function call(url, options = {}, attempts = 5) {
  for (let attempt = 1; ; attempt += 1) {
    let response;
    try { response = await s3.fetch(url, options); } catch (error) { if (attempt === attempts) throw error; }
    if (response?.ok) return response;
    if (response && (attempt === attempts || (response.status < 500 && response.status !== 429))) throw new Error(`${options.method ?? "GET"} ${url}: ${response.status} ${await response.text()}`);
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

// ListObjectsV2, 1,000 keys a page; an object's ETag is the MD5 of its body.
const remote = new Map();
for (let token = ""; ;) {
  const xml = await (await call(`${endpoint}?list-type=2&max-keys=1000${token ? `&continuation-token=${encodeURIComponent(token)}` : ""}`)).text();
  for (const [, key, etag] of xml.matchAll(/<Contents>[\s\S]*?<Key>([^<]*)<\/Key>[\s\S]*?<ETag>([^<]*)<\/ETag>[\s\S]*?<\/Contents>/g)) {
    remote.set(key.replace(/&amp;/g, "&"), etag.replace(/&quot;|"/g, ""));
  }
  token = /<IsTruncated>true<\/IsTruncated>/.test(xml) ? (xml.match(/<NextContinuationToken>([^<]*)<\/NextContinuationToken>/)?.[1] ?? "") : "";
  if (!token) break;
}

const uploads = [];
let bytes = 0;
for (const [key, path] of local) {
  const body = readFileSync(path);
  bytes += body.length;
  if (remote.get(key) !== createHash("md5").update(body).digest("hex")) uploads.push([key, body]);
}
const deletions = [...remote.keys()].filter((key) => !local.has(key));

async function pool(items, job, size = 32) {
  let next = 0;
  await Promise.all(Array.from({ length: size }, async () => { while (next < items.length) await job(items[next++]); }));
}
let done = 0;
await pool(uploads, async ([key, body]) => {
  await call(objectUrl(key), { method: "PUT", body, headers: { "content-type": "text/html; charset=utf-8" } });
  if (++done % 2000 === 0) console.log(`  uploaded ${done} of ${uploads.length}`);
});
await pool(deletions, (key) => call(objectUrl(key), { method: "DELETE" }));
console.log(`R2 ${bucket}: ${local.size} pages (${(bytes / 1048576).toFixed(0)} MB stored), ${uploads.length} uploaded, ${deletions.length} deleted, ${local.size - uploads.length} unchanged.`);

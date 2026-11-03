#!/usr/bin/env node
/**
 * Tells IndexNow (Bing, Yandex, Seznam, Naver and the other engines that share it) which URLs changed.
 *
 *   npm run indexnow -- <url-or-path> [...]       submit these URLs
 *   npm run indexnow -- --due 2026-11-19          submit every guide whose publishAt is that day, in
 *                                                 English and every locale where it is indexable
 *   add --dry-run to print the request instead of sending it
 *
 * The key is the file public/<key>.txt, which the export serves at the site root (IndexNow checks it
 * there before accepting a submission). Only URLs on this site's host (CNAME) are accepted. Run it
 * after a deploy is live, never before: an engine that fetches a URL early sees the old page.
 * docs/growth/MEASUREMENT.md has the routine.
 */
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH = 10_000;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const dueIndex = args.indexOf("--due");
const due = dueIndex === -1 ? undefined : args[dueIndex + 1];
const given = args.filter((arg, index) => !arg.startsWith("--") && !(dueIndex !== -1 && index === dueIndex + 1));
const fail = (message) => { console.error(message); process.exit(1); };
const unknown = args.filter((arg) => arg.startsWith("--") && !["--dry-run", "--due"].includes(arg));
if (unknown.length) fail(`Unknown option: ${unknown.join(" ")}`);
if (dueIndex !== -1 && given.length) fail("Use --due or a list of URLs, not both.");

const realDay = (day) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day ?? "")) return false;
  const date = new Date(`${day}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === day;
};
if (dueIndex !== -1 && !realDay(due)) fail("--due needs a real date: --due YYYY-MM-DD");
if (dueIndex === -1 && given.length === 0) fail("Usage: npm run indexnow -- [--dry-run] (--due YYYY-MM-DD | <url-or-path> ...)");

const host = readFileSync(resolve(root, "CNAME"), "utf8").trim();
const site = `https://${host}`;

// The key file: public/<key>.txt containing exactly <key>.
const keys = readdirSync(resolve(root, "public"))
  .filter((name) => /^[a-zA-Z0-9-]{8,128}\.txt$/.test(name))
  .filter((name) => readFileSync(resolve(root, "public", name), "utf8").trim() === name.replace(/\.txt$/, ""));
if (keys.length !== 1) fail(`Expected one IndexNow key file in public/ (<key>.txt holding the key), found ${keys.length}.`);
const key = keys[0].replace(/\.txt$/, "");
const keyLocation = `${site}/${key}.txt`;

/** Every indexable language edition of the guides published on `day`. */
async function dueUrls(day) {
  // The route manifest is built for one day; pin it to the publish day so those guides exist in it.
  process.env.BUILD_DATE = day;
  const { allArticles } = await import(resolve(root, "lib/site.ts"));
  const { exportRoutes } = await import(resolve(root, "lib/routes.ts"));
  const slugs = new Set(allArticles.filter((article) => article.publishAt === day).map((article) => article.slug));
  return exportRoutes()
    .filter((route) => route.kind === "guide" && route.indexable && slugs.has(route.pageKey.replace(/^guide:/, "")))
    .map((route) => `${site}${route.path}`);
}

const urls = [...new Set(due ? await dueUrls(due) : given.map((value) => (value.startsWith("/") ? `${site}${value}` : value)))];
const foreign = urls.filter((url) => !url.startsWith(`${site}/`));
if (foreign.length) fail(`Not on ${site}:\n${foreign.join("\n")}`);
if (!urls.length) { console.log(due ? `No guide publishes on ${due}; nothing to submit.` : "Nothing to submit."); process.exit(0); }

// IndexNow rejects a submission when the key file is not live, so say so before sending.
const live = await fetch(keyLocation).then(async (response) => response.ok && (await response.text()).trim() === key).catch(() => false);
if (!live) {
  const message = `The key file ${keyLocation} is not live yet (deploy it first).`;
  if (!dryRun) fail(message);
  console.warn(`Warning: ${message}`);
}

for (let start = 0; start < urls.length; start += BATCH) {
  const urlList = urls.slice(start, start + BATCH);
  const body = { host, key, keyLocation, urlList };
  if (dryRun) {
    console.log(`Dry run: would POST ${urlList.length} URLs to ${ENDPOINT}`);
    console.log(JSON.stringify(body, null, 2));
    continue;
  }
  const response = await fetch(ENDPOINT, { method: "POST", headers: { "content-type": "application/json; charset=utf-8" }, body: JSON.stringify(body) });
  // 200: received. 202: received, key validation pending. Anything else is an error.
  if (response.status !== 200 && response.status !== 202) fail(`IndexNow answered ${response.status} ${response.statusText}: ${await response.text()}`);
  console.log(`IndexNow accepted ${urlList.length} URLs (${response.status}).`);
}

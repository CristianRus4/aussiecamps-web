#!/usr/bin/env node
/**
 * Smoke test for the live site, run after every deploy: `npm run smoke:live`.
 *
 * Checks what a deploy can break without failing the build:
 * - home, one English guide, one localised guide, sitemap.xml and robots.txt answer 200;
 * - each HTML page names itself as canonical and carries the robots meta its sitemap entry implies;
 * - the GA4 measurement ID is on the page once one is configured (and no analytics loads before);
 * - every App Store link carries `pt` and a well-formed `ct` once a provider token is configured;
 * - every URL in docs/growth/ranking-urls.txt (the pages Search Console shows earning clicks or
 *   impressions) still answers 200 and is self-canonical.
 *
 * Options:
 *   --base <origin>   test another origin (for example a local server over pages-dist); canonicals are
 *                     still expected to name https://aussiecamps.app
 *   --no-ranking      skip the ranking-URL list
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { APP_STORE_URL, APPLE_PROVIDER_TOKEN, GA_MEASUREMENT_ID, SITE_URL } from "../lib/site.ts";
import { CAMPAIGN_TOKEN_MAX, campaignTokenPattern } from "../lib/app-store.ts";

const root = resolve(import.meta.dirname, "..");
const args = process.argv.slice(2);
const base = (args.includes("--base") ? args[args.indexOf("--base") + 1] : SITE_URL).replace(/\/$/, "");
const failures = [];
const passed = [];
const fail = (url, message) => failures.push(`${url}: ${message}`);

async function get(path) {
  const url = `${base}${path}`;
  for (let attempt = 1; ; attempt += 1) {
    try {
      const response = await fetch(url, { redirect: "manual", headers: { "user-agent": "AussieCamps smoke test" }, signal: AbortSignal.timeout(20_000) });
      return { url, status: response.status, body: await response.text() };
    } catch (error) {
      if (attempt === 3) return { url, status: 0, body: "", error };
    }
  }
}

const attribute = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
const pathOf = (url) => new URL(url).pathname;

/** One HTML page: status, canonical, robots and the instrumentation the constants promise. */
async function checkPage(path, { indexable } = {}) {
  const page = await get(path);
  if (page.status !== 200) return fail(page.url, `status ${page.status}${page.error ? ` (${page.error.message})` : ""}`);
  const html = page.body;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== `${SITE_URL}${path}`) fail(page.url, `canonical is ${canonical ?? "missing"}`);
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  if (!robots) fail(page.url, "robots meta missing");
  else if (indexable === true && !robots.startsWith("index")) fail(page.url, `in the sitemap but robots is "${robots}"`);
  if (GA_MEASUREMENT_ID) {
    if (!html.includes(`"${GA_MEASUREMENT_ID}"`) || !html.includes('data-static-keep="analytics"')) fail(page.url, "GA4 bootstrap missing");
  } else if (/googletagmanager\.com/.test(html)) fail(page.url, "analytics present although no measurement ID is configured");
  for (const [tag] of html.matchAll(/<a\b[^>]*href="https:\/\/apps\.apple\.com[^"]*"[^>]*>/g)) {
    const href = new URL(attribute(tag, "href").replace(/&amp;/g, "&"));
    if (!attribute(tag, "data-cta")) fail(page.url, `store link without data-cta: ${href}`);
    if (!APPLE_PROVIDER_TOKEN) {
      if (`${href.origin}${href.pathname}${href.search}` !== APP_STORE_URL) fail(page.url, `store link carries parameters with no provider token: ${href}`);
      continue;
    }
    const ct = href.searchParams.get("ct") ?? "";
    if (href.searchParams.get("pt") !== APPLE_PROVIDER_TOKEN) fail(page.url, `store link has the wrong pt: ${href}`);
    if (!campaignTokenPattern.test(ct) || ct.length > CAMPAIGN_TOKEN_MAX) fail(page.url, `store link has a bad ct: ${ct}`);
  }
  passed.push(page.url);
}

/** Every <loc> in the sitemap, following a sitemap index one level down. */
async function sitemapUrls() {
  const index = await get("/sitemap.xml");
  if (index.status !== 200) { fail(index.url, `status ${index.status}`); return []; }
  passed.push(index.url);
  const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
  if (!/<sitemapindex/.test(index.body)) return locs(index.body);
  const urls = [];
  for (const child of locs(index.body)) {
    const sitemap = await get(pathOf(child));
    if (sitemap.status !== 200) { fail(sitemap.url, `status ${sitemap.status}`); continue; }
    passed.push(sitemap.url);
    urls.push(...locs(sitemap.body));
  }
  return urls;
}

const robots = await get("/robots.txt");
if (robots.status !== 200) fail(robots.url, `status ${robots.status}`);
else if (!/^Sitemap: https:\/\/aussiecamps\.app\/sitemap\.xml$/m.test(robots.body)) fail(robots.url, "no Sitemap line for /sitemap.xml");
else passed.push(robots.url);

const listed = (await sitemapUrls()).map(pathOf);
const englishGuide = listed.find((path) => /^\/guides\/[^/]+\/$/.test(path));
const localeGuide = listed.find((path) => /^\/[a-z]{2}(?:-[a-z]+)?\/guides\/[^/]+\/$/.test(path));
if (!englishGuide) fail(`${base}/sitemap.xml`, "lists no English guide");
if (!localeGuide) fail(`${base}/sitemap.xml`, "lists no localised guide");
for (const path of ["/", englishGuide, localeGuide].filter(Boolean)) await checkPage(path, { indexable: true });

const rankingFile = resolve(root, "docs/growth/ranking-urls.txt");
if (!args.includes("--no-ranking") && existsSync(rankingFile)) {
  const ranking = readFileSync(rankingFile, "utf8").split("\n").map((line) => line.trim()).filter((line) => line.startsWith(SITE_URL)).map(pathOf);
  const queue = [...new Set(ranking)];
  await Promise.all(Array.from({ length: 6 }, async () => { while (queue.length) await checkPage(queue.shift()); }));
  console.log(`Ranking URLs checked: ${ranking.length}`);
}

console.log(`Smoke test against ${base}: ${passed.length} passed, ${failures.length} failed.`);
console.log(`GA4: ${GA_MEASUREMENT_ID || "not configured"} · App Store provider token: ${APPLE_PROVIDER_TOKEN ? "configured" : "not configured"}`);
if (failures.length) {
  for (const failure of failures) console.error(`FAIL ${failure}`);
  process.exit(1);
}

#!/usr/bin/env node
/**
 * Search-engine audit of the static export (pages-dist), run by `npm run check` after the export.
 *
 * It reads what GitHub Pages will actually serve, not the source, and fails on anything that makes
 * Google distrust hreflang or canonicals, or that drops a URL Search Console shows earning traffic:
 *
 * - every hreflang set is reciprocal: each listed page exists, is indexable, names itself as
 *   canonical and lists exactly the same set back;
 * - a noindexed page lists no alternates, and is never listed as one;
 * - every canonical on this site ends in / or .html, and an indexable page is its own canonical;
 * - the sitemaps list exactly the indexable exported pages;
 * - every page's robots meta agrees with the route manifest's `indexable`;
 * - <html lang> matches lib/locales.json (en-AU for English);
 * - every URL in docs/growth/ranking-urls.txt (clicks or 20+ impressions) is exported and
 *   self-canonical, and every URL in docs/growth/url-baseline.txt is still exported. GitHub Pages
 *   cannot redirect, so a dropped URL is a 404.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { SITE_URL } from "../lib/site.ts";
import { exportRoutes } from "../lib/routes.ts";
import { englishLocale, htmlLang, locales } from "../lib/locales.ts";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "pages-dist");
if (!existsSync(dist)) {
  console.error("pages-dist is missing: run `npm run build:pages` first.");
  process.exit(1);
}
const failures = new Set();
const fail = (message) => failures.add(message);

/** A served URL (https://aussiecamps.app/de/guides/x/) to its file in pages-dist. */
const fileFor = (url) => {
  const path = new URL(url).pathname;
  return resolve(dist, path.slice(1), /\.[a-z0-9]+$/i.test(path) ? "" : "index.html");
};
const urlFor = (name) => `${SITE_URL}/${name.replace(/(^|\/)index\.html$/, "$1")}`;
const attribute = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"))?.[1]?.replace(/&amp;/g, "&");

const pages = new Map();
for (const name of readdirSync(dist, { recursive: true }).filter((file) => file.endsWith(".html")).sort()) {
  if (name === "404.html") continue;
  const html = readFileSync(resolve(dist, name), "utf8");
  const head = html.slice(0, html.indexOf("</head>"));
  const canonical = attribute(head.match(/<link rel="canonical"[^>]*>/)?.[0] ?? "", "href");
  const robots = attribute(head.match(/<meta name="robots"[^>]*>/)?.[0] ?? "", "content") ?? "";
  const alternates = new Map([...head.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"\s*\/?>/gi)].map((match) => [match[1], match[2]]));
  const lang = html.match(/<html lang="([^"]*)"/)?.[1];
  const url = urlFor(name);
  pages.set(url, { name, url, canonical, robots, alternates, lang, indexable: robots.startsWith("index") && canonical === url });
}

const langBySegment = new Map(locales.map((entry) => [entry.segment, entry.htmlLang]));
for (const page of pages.values()) {
  const { name, url, canonical, robots, alternates, lang } = page;
  // The /download/ redirect stub is noindex and names the App Store listing as canonical.
  if (name === "download/index.html") continue;
  if (!canonical) fail(`${url}: no canonical`);
  else if (canonical.startsWith(SITE_URL) && !/(\/|\.html)$/.test(canonical)) fail(`${url}: canonical ${canonical} must end in / or .html`);
  if (robots.startsWith("index") && canonical !== url) fail(`${url}: indexable but its canonical is ${canonical}`);
  const segment = new URL(url).pathname.split("/")[1];
  const expectedLang = langBySegment.get(segment) ?? englishLocale.htmlLang;
  if (lang !== expectedLang) fail(`${url}: <html lang="${lang}">, expected ${expectedLang}`);
  if (!alternates.size) continue;
  if (!page.indexable) fail(`${url}: lists hreflang alternates but is not indexable`);
  if (![...alternates.values()].includes(url)) fail(`${url}: its hreflang set does not include itself`);
  if (!alternates.has("x-default")) fail(`${url}: hreflang set has no x-default`);
  for (const [tag, href] of alternates) {
    const other = pages.get(href);
    if (!other) { fail(`${url}: hreflang ${tag} points at ${href}, which is not exported`); continue; }
    if (!other.indexable) fail(`${url}: hreflang ${tag} points at ${href}, which is noindex or not self-canonical`);
    const same = other.alternates.size === alternates.size && [...alternates].every(([key, value]) => other.alternates.get(key) === value);
    if (!same) fail(`${url}: hreflang set is not reciprocated by ${href}`);
  }
}

// Robots meta agrees with the manifest, and every manifest page was exported.
for (const route of exportRoutes()) {
  if (route.kind === "crawler") continue;
  const page = pages.get(`${SITE_URL}${route.path}`);
  if (!page) { fail(`${route.path}: in the route manifest but not exported`); continue; }
  if (page.indexable !== route.indexable) fail(`${route.path}: manifest says indexable=${route.indexable}, the page says robots "${page.robots}" with canonical ${page.canonical}`);
  if (page.lang !== htmlLang(route.locale)) fail(`${route.path}: <html lang="${page.lang}"> does not match ${route.locale}`);
}

// The sitemaps list exactly the indexable pages.
const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const index = readFileSync(resolve(dist, "sitemap.xml"), "utf8");
if (!/<sitemapindex/.test(index)) fail("sitemap.xml is not a sitemap index");
const listed = new Set();
for (const sitemap of locs(index)) {
  const file = fileFor(sitemap);
  if (!existsSync(file)) { fail(`sitemap index lists ${sitemap}, which is not exported`); continue; }
  for (const url of locs(readFileSync(file, "utf8"))) {
    if (listed.has(url)) fail(`${url} is listed in more than one sitemap`);
    listed.add(url);
  }
}
const indexable = new Set([...pages.values()].filter((page) => page.indexable).map((page) => page.url));
for (const url of listed) if (!indexable.has(url)) fail(`sitemap lists ${url}, which is not an indexable exported page`);
for (const url of indexable) if (!listed.has(url)) fail(`${url} is indexable but missing from the sitemaps`);

// URLs that must never disappear.
const urlList = (file) => (existsSync(resolve(root, file)) ? readFileSync(resolve(root, file), "utf8").split("\n").map((line) => line.trim()).filter((line) => line.startsWith(SITE_URL)) : []);
const ranking = urlList("docs/growth/ranking-urls.txt");
for (const url of ranking) {
  const page = pages.get(url);
  if (!page) fail(`ranking URL ${url} is no longer exported`);
  else if (page.canonical !== url) fail(`ranking URL ${url} names ${page.canonical} as canonical`);
}
const baseline = urlList("docs/growth/url-baseline.txt");
for (const url of baseline) if (!existsSync(fileFor(url))) fail(`baseline URL ${url} is no longer exported`);

if (failures.size) {
  console.error(`SEO audit failed with ${failures.size} problem(s):`);
  for (const failure of [...failures].slice(0, 80)) console.error(`- ${failure}`);
  if (failures.size > 80) console.error(`- … and ${failures.size - 80} more`);
  process.exit(1);
}
const withAlternates = [...pages.values()].filter((page) => page.alternates.size).length;
console.log(`SEO audit passed: ${pages.size} pages, ${indexable.size} indexable and in the sitemaps, ${withAlternates} with reciprocal hreflang, ${ranking.length} ranking URLs and ${baseline.length} baseline URLs still served.`);

#!/usr/bin/env node
/**
 * Validates the JSON-LD on every exported HTML page (pages-dist) against the schema.org shapes the
 * site uses, and fails on anything Google would reject or that would be fake data.
 *
 * - Every block parses, has an @context of https://schema.org, and no @id repeats on one page.
 * - Organization and WebSite: name, url; Organization a logo.
 * - MobileApplication / SoftwareApplication: name, operatingSystem, applicationCategory, a free
 *   offer; never aggregateRating or review (the site has no ratings of its own to declare).
 * - Article: headline (at most 110 characters), image, author, publisher, ISO datePublished and
 *   dateModified, modified not before published, neither in the future.
 * - BreadcrumbList: positions 1..n in order, a name on each, absolute item URLs on this site in their
 *   canonical form (trailing slash or .html), the last crumb being the page's own canonical.
 * - FAQPage: at least one Question, each with a name and an acceptedAnswer text.
 * - Any url, @id or item on this site uses the canonical form.
 *
 * Usage: node scripts/check-structured-data.mjs [pages-dist]
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dist = process.argv[2] ?? join(root, "pages-dist");
const host = readFileSync(join(root, "CNAME"), "utf8").trim();
const site = `https://${host}`;
const today = new Date().toISOString().slice(0, 10);

if (!existsSync(dist)) { console.error(`No export at ${dist}: run npm run build && npm run export first.`); process.exit(1); }

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith(".html")) files.push(path);
  }
})(dist);

const errors = [];
const counts = {};
const iso = (value) => typeof value === "string" && /^\d{4}-\d{2}-\d{2}(T[\d:.]+(Z|[+-]\d{2}:\d{2})?)?$/.test(value);
const filled = (value) => typeof value === "string" && value.trim().length > 0;
const canonicalForm = (url) => {
  if (typeof url !== "string" || !url.startsWith(site)) return true;
  const path = url.slice(site.length).replace(/#.*$/, "") || "/";
  return path.endsWith("/") || /\.[a-z0-9]+$/i.test(path);
};

function nodesOf(value) {
  if (Array.isArray(value)) return value.flatMap(nodesOf);
  if (!value || typeof value !== "object") return [];
  const own = value["@type"] ? [value] : [];
  return [...own, ...Object.values(value).flatMap(nodesOf)];
}
const typesOf = (node) => [node["@type"]].flat();

for (const file of files) {
  const html = readFileSync(file, "utf8");
  if (/http-equiv="refresh"/i.test(html)) continue;
  const page = "/" + relative(dist, file).replace(/index\.html$/, "");
  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  const fail = (message) => errors.push(`${page}: ${message}`);
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
  const ids = new Map();
  for (const text of blocks) {
    let data;
    try { data = JSON.parse(text); } catch { fail("JSON-LD does not parse"); continue; }
    if (data["@context"] !== "https://schema.org") fail(`@context is ${data["@context"]}`);
    for (const node of nodesOf(data)) {
      for (const type of typesOf(node)) counts[type] = (counts[type] ?? 0) + 1;
      if (node["@id"] && Object.keys(node).length > 2) {
        const seen = ids.get(node["@id"]);
        if (seen && seen !== JSON.stringify(node)) fail(`@id ${node["@id"]} describes two different nodes`);
        ids.set(node["@id"], JSON.stringify(node));
      }
      for (const key of ["url", "@id", "item", "mainEntityOfPage"]) if (!canonicalForm(node[key])) fail(`${typesOf(node)} ${key} not canonical: ${node[key]}`);
      const types = typesOf(node);
      if (types.includes("Organization") || types.includes("WebSite")) {
        if (!filled(node.name) || !filled(node.url)) fail(`${types} needs name and url`);
        if (types.includes("Organization") && !node.logo) fail("Organization needs a logo");
      }
      if (types.includes("MobileApplication") || types.includes("SoftwareApplication")) {
        for (const key of ["name", "operatingSystem", "applicationCategory"]) if (!filled(node[key])) fail(`app needs ${key}`);
        if (!node.offers || node.offers.price === undefined) fail("app needs an offer with a price");
        if (node.aggregateRating || node.review) fail("app declares a rating or review: the site has none of its own");
      }
      if (types.includes("Article")) {
        if (!filled(node.headline)) fail("Article needs a headline");
        else if (node.headline.length > 110) fail(`Article headline is ${node.headline.length} characters (over 110)`);
        if (!node.image) fail("Article needs an image");
        if (!node.author || !node.publisher) fail("Article needs author and publisher");
        if (!iso(node.datePublished) || !iso(node.dateModified)) fail(`Article dates not ISO: ${node.datePublished} / ${node.dateModified}`);
        else {
          if (node.dateModified.slice(0, 10) < node.datePublished.slice(0, 10)) fail(`Article modified ${node.dateModified} before published ${node.datePublished}`);
          if (node.datePublished.slice(0, 10) > today || node.dateModified.slice(0, 10) > today) fail("Article dated in the future");
        }
      }
      if (types.includes("BreadcrumbList")) {
        const items = node.itemListElement ?? [];
        if (!items.length) fail("BreadcrumbList is empty");
        items.forEach((crumb, index) => {
          if (crumb.position !== index + 1) fail(`breadcrumb ${index + 1} has position ${crumb.position}`);
          if (!filled(crumb.name)) fail(`breadcrumb ${index + 1} has no name`);
          const item = typeof crumb.item === "string" ? crumb.item : crumb.item?.["@id"];
          if (item !== undefined && !String(item).startsWith(site)) fail(`breadcrumb ${index + 1} item is not an absolute URL on this site: ${item}`);
        });
        const last = items.at(-1);
        const lastItem = typeof last?.item === "string" ? last.item : last?.item?.["@id"];
        if (canonical && lastItem && lastItem !== canonical) fail(`last breadcrumb ${lastItem} is not the canonical ${canonical}`);
      }
      if (types.includes("FAQPage")) {
        const questions = node.mainEntity ?? [];
        if (!questions.length) fail("FAQPage has no questions");
        for (const question of questions) if (!filled(question.name) || !filled(question.acceptedAnswer?.text)) fail("FAQ question without a name or answer");
      }
    }
  }
}

const summary = Object.entries(counts).sort(([a], [b]) => a.localeCompare(b)).map(([type, count]) => `${type} ${count}`).join(", ");
if (errors.length) {
  const unique = [...new Set(errors)];
  console.error(unique.slice(0, 60).join("\n"));
  if (unique.length > 60) console.error(`... and ${unique.length - 60} more`);
  console.error(`Structured data check failed: ${unique.length} problems in ${files.length} pages.`);
  process.exit(1);
}
console.log(`Structured data check passed: ${files.length} pages. ${summary}.`);

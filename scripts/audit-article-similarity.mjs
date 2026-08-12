import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("similarity-audit", Date.now().toString());
const { default: worker } = await import(workerUrl.href);
const sources = await Promise.all(["../lib/site.ts", "../lib/expanded-articles.ts"].map((path) => readFile(new URL(path, import.meta.url), "utf8")));
const slugs = sources.flatMap((source) => [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };

function plain(value) {
  return value.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, " ").trim();
}

function normal(value) {
  return plain(value).toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
}

function shingles(value, size = 5) {
  const words = normal(value).split(" ");
  return new Set(Array.from({ length: Math.max(0, words.length - size + 1) }, (_, index) => words.slice(index, index + size).join(" ")));
}

function jaccard(left, right) {
  const a = shingles(left), b = shingles(right);
  if (!a.size || !b.size) return 0;
  let overlap = 0;
  for (const item of a) if (b.has(item)) overlap += 1;
  return overlap / (a.size + b.size - overlap);
}

const articles = [];
for (const slug of slugs) {
  const response = await worker.fetch(new Request(`https://audit.local/guides/${slug}`, { headers: { accept: "text/html" } }), env, ctx);
  assert.equal(response.status, 200, slug);
  const html = await response.text();
  const editorial = html.match(/<section class="editorial-opening">([\s\S]*?)<\/section>/)?.[1] ?? "";
  const paragraphs = [...editorial.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((match) => plain(match[1]));
  assert.equal(paragraphs.length, 10, `${slug} must expose ten editorial paragraphs`);
  articles.push({ slug, paragraphs });
}

const exact = new Map();
for (const article of articles) for (const paragraph of article.paragraphs) {
  const key = normal(paragraph);
  const previous = exact.get(key);
  assert.equal(previous, undefined, `Exact paragraph duplication: ${previous} and ${article.slug}: ${paragraph}`);
  exact.set(key, article.slug);
}

for (let leftIndex = 0; leftIndex < articles.length; leftIndex += 1) {
  for (let rightIndex = leftIndex + 1; rightIndex < articles.length; rightIndex += 1) {
    const left = articles[leftIndex], right = articles[rightIndex];
    let highlySimilar = 0;
    for (const a of left.paragraphs) for (const b of right.paragraphs) if (jaccard(a, b) >= 0.72) highlySimilar += 1;
    assert.equal(highlySimilar, 0, `Near-duplicate editorial prose: ${left.slug} and ${right.slug}`);
  }
}

console.log(`Similarity audit passed across ${articles.length} articles and ${exact.size} editorial paragraphs.`);

import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { startProdServer } from "vinext/server/prod-server";

/**
 * Guards against the failure mode where articles are written from a sentence template and only the
 * place names change ("the useful decisions around <Town> are about timing, access ...").
 *
 * A plain Jaccard comparison does not catch that: swapping proper nouns moves enough shingles to sit
 * under any sane threshold while the prose is still visibly identical to a reader. So this audit
 * compares two things — the raw prose, and a *skeleton* with proper nouns and numbers masked out.
 * Two articles sharing a skeleton sentence is the signal that matters.
 */

const libDirectory = new URL("../lib/", import.meta.url);
const sources = await Promise.all((await readdir(libDirectory)).filter((name) => name === "site.ts" || name === "expanded-articles.ts").map((name) => readFile(new URL(name, libDirectory), "utf8")));
const slugs = sources.flatMap((source) => [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
const routes = slugs.map((slug) => `/guides/${slug}`);

const { server, port } = await startProdServer({ port: 0, host: "127.0.0.1", outDir: "dist", noCompression: true, purpose: "prerender" });

const plain = (value) => value.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&#x2F;/g, "/").replace(/\s+/g, " ").trim();
const normal = (value) => plain(value).toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();

/**
 * Ordinary words that legitimately start a sentence. Everything else that is capitalised is treated
 * as a name, wherever it appears — masking only mid-sentence would let "Christchurch gives ..." and
 * "Gisborne gives ..." look like different sentences, which is exactly the case we need to catch.
 */
const sentenceStarters = new Set("a an and as at be before but by check do dont each every for from get give go how if in is it its keep know leave make most no not on once one or plan read set so start stay take that the their then there these they this those to treat two use used using what when where which who why with without you your".split(" "));

/** Mask proper nouns, numbers and currency so a reused template collapses onto one skeleton. */
function skeleton(value) {
  return plain(value)
    // Strip macrons and other diacritics first so Ōpōtiki and Wānaka mask as cleanly as Haast.
    .normalize("NFD").replace(/\p{M}/gu, "")
    .replace(/\$\s?[\d,.]+/g, "#")
    .replace(/\b\d[\d,.]*\b/gu, "#")
    .replace(/\p{Lu}[\p{L}'’-]*/gu, (word) => (sentenceStarters.has(word.toLowerCase()) ? word : "•"))
    .toLowerCase().replace(/[^a-z0-9•# ]/g, "").replace(/\s+/g, " ")
    // A multi-word place name must reduce to the same token as a single-word one, or
    // "around Te Anau" and "around Wānaka" would look like different sentences.
    .replace(/•(\s+•)+/g, "•").replace(/#(\s+#)+/g, "#").trim();
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
for (const route of routes) {
  const response = await fetch(`http://127.0.0.1:${port}${route}`, { headers: { accept: "text/html" } });
  assert.equal(response.status, 200, route);
  const html = await response.text();
  const full = html.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<aside/)?.[1] ?? "";
  // The end-of-article download CTA is shared site furniture, not article prose.
  const body = full
    .replace(/<div class="article-end-cta">[\s\S]*$/, "")
    // Fixed legal/currency disclaimers are shared furniture too.
    .replace(/<p class="price-table-disclaimer">[\s\S]*?<\/p>/g, "")
    .replace(/<section class="sources">[\s\S]*?<\/section>/g, "");
  const paragraphs = [...body.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((match) => plain(match[1])).filter((paragraph) => paragraph.split(" ").length >= 12);
  assert.ok(paragraphs.length >= 4, `${route} must publish at least four substantial prose paragraphs`);
  // Every section heading must have prose beneath it, not just a tips box.
  for (const section of body.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/g)) {
    const inner = section[1];
    if (!/<h2/.test(inner) || /place-chips|price-table|sources/.test(inner)) continue;
    assert.match(inner, /<p[ >]/, `${route} has a heading with no prose under it`);
  }
  articles.push({ route, paragraphs });
}

// 1. No paragraph may appear verbatim in two articles.
const exact = new Map();
for (const article of articles) for (const paragraph of article.paragraphs) {
  const key = normal(paragraph);
  const previous = exact.get(key);
  assert.equal(previous, undefined, `Exact paragraph duplication between ${previous} and ${article.route}: ${paragraph.slice(0, 90)}...`);
  exact.set(key, article.route);
}

// 2. No *sentence skeleton* may be shared across articles — this is the template check.
const skeletons = new Map();
for (const article of articles) {
  for (const paragraph of article.paragraphs) {
    for (const sentence of plain(paragraph).split(/(?<=[.!?])\s+/)) {
      if (sentence.split(" ").length < 9) continue;
      const key = skeleton(sentence);
      if (key.split(" ").length < 8) continue;
      const previous = skeletons.get(key);
      assert.equal(previous, undefined, `Templated sentence reused between ${previous} and ${article.route}.\n  Skeleton: ${key.slice(0, 110)}\n  Text: ${sentence.slice(0, 110)}`);
      skeletons.set(key, article.route);
    }
  }
}

// 3. Whole-article prose must not be near-identical.
for (let leftIndex = 0; leftIndex < articles.length; leftIndex += 1) {
  for (let rightIndex = leftIndex + 1; rightIndex < articles.length; rightIndex += 1) {
    const left = articles[leftIndex], right = articles[rightIndex];
    let highlySimilar = 0;
    for (const a of left.paragraphs) for (const b of right.paragraphs) if (jaccard(a, b) >= 0.5) highlySimilar += 1;
    assert.equal(highlySimilar, 0, `Near-duplicate prose between ${left.route} and ${right.route}`);
  }
}


// Depth report. Templated filler used to disguise how short some articles are; this surfaces it
// instead. Not a build failure, because the fix is writing, not code.
const thin = articles.map((article) => ({ route: article.route, words: article.paragraphs.reduce((total, paragraph) => total + paragraph.split(" ").length, 0) })).filter((article) => article.words < 400).sort((a, b) => a.words - b.words);
if (thin.length) {
  console.log(`\nDepth report: ${thin.length} of ${articles.length} articles are under 400 words of body prose.`);
  console.log(thin.slice(0, 10).map((article) => `  ${String(article.words).padStart(4)}w  ${article.route}`).join("\n"));
  if (thin.length > 10) console.log(`  ... and ${thin.length - 10} more`);
}

console.log(`Similarity audit passed: ${articles.length} articles, ${exact.size} paragraphs, ${skeletons.size} distinct sentence skeletons, no templated reuse.`);
await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));

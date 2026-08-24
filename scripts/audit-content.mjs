import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const files = ["lib/source-strings.ts", "lib/site.ts", "lib/expanded-articles.ts", "app/page.tsx", "app/guides/page.tsx", "app/tools/page.tsx", "app/support/page.tsx", "components/footer.tsx", "components/guide-article.tsx"];
const content = (await Promise.all(files.map((file) => readFile(resolve(root, file), "utf8")))).join("\n");
const slugs = [...content.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
assert.ok(slugs.length >= 40, `Expected at least 40 articles, found ${slugs.length}`);
assert.equal(new Set(slugs).size, slugs.length, "Article slugs must be unique");
assert.doesNotMatch(content, /\u2014/, "Em dashes are prohibited");
// An escaped \u2014 renders as an em dash just the same, so the literal escape is banned too.
assert.doesNotMatch(content, /\\u2014/, "Escaped em dashes are prohibited");
assert.doesNotMatch(content, /not available yet|these names are intentionally|the website does not|editorial landscape image|realistic itinerary/i, "Internal or generic copy found");
assert.doesNotMatch(content, /https:\/\/images\.unsplash\.com/i, "Remote article images are prohibited");
// Copy must address travellers, not the developer building the page.
assert.doesNotMatch(content, /this (section|page|guide|article) (explains|describes|shows|covers|will)|here goes|lorem ipsum|placeholder text|TODO|FIXME|coming soon|sample text/i, "Developer-facing or placeholder copy found");
/**
 * Translation contract. Road trip guides are deliberately English-only, so a locale file must never
 * carry one. Everything else may be partial while a translation is in progress: lib/localized.ts
 * falls back to the English source per key, so a half-finished file renders as a mix rather than as
 * blank text. What is present, though, has to be well-formed.
 */
const roadTripSlugs = new Set([...content.matchAll(/slug:\s*"([^"]+)"[\s\S]{0,400}?category:\s*"Road trips"/g)].map((match) => match[1]));
assert.ok(roadTripSlugs.size >= 15, `Expected the road trip guides to be found, got ${roadTripSlugs.size}`);
for (const locale of ["de", "es", "fr", "it", "nl", "pt"]) {
  const file = JSON.parse(await readFile(resolve(root, `lib/translations/${locale}.json`), "utf8"));
  for (const key of ["ui", "pages", "articles"]) assert.ok(file[key] && typeof file[key] === "object", `${locale}.json is missing its ${key} object`);
  assert.doesNotMatch(JSON.stringify(file), /\u2014/, `${locale} contains an em dash`);
  for (const slug of roadTripSlugs) assert.ok(!file.articles[slug], `${locale} carries ${slug}, but road trips stay English-only`);
  for (const [slug, article] of Object.entries(file.articles)) {
    assert.ok(slugs.includes(slug), `${locale} translates ${slug}, which is not an article on this site`);
    assert.ok(article.sections?.length, `${locale}/${slug} must contain translated sections`);
    for (const section of article.sections) assert.ok(section.body?.length, `${locale}/${slug} has a section with no translated prose`);
  }
}

const translatedCount = Object.keys(JSON.parse(await readFile(resolve(root, "lib/translations/de.json"), "utf8")).articles).length;
console.log(`Content audit passed with ${slugs.length} unique articles, ${slugs.length - roadTripSlugs.size} translatable, ${translatedCount} translated so far.`);

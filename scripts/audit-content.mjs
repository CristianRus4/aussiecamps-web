import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const files = ["lib/site.ts", "app/page.tsx", "app/guides/page.tsx", "app/support/page.tsx", "components/footer.tsx", "components/guide-article.tsx"];
const content = (await Promise.all(files.map((file) => readFile(resolve(root, file), "utf8")))).join("\n");
const slugs = [...content.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
assert.ok(slugs.length >= 40, `Expected at least 40 articles, found ${slugs.length}`);
assert.equal(new Set(slugs).size, slugs.length, "Article slugs must be unique");
assert.doesNotMatch(content, /\u2014/, "Em dashes are prohibited");
assert.doesNotMatch(content, /not available yet|these names are intentionally|the website does not|editorial landscape image|realistic itinerary/i, "Internal or generic copy found");
assert.doesNotMatch(content, /https:\/\/images\.unsplash\.com/i, "Remote article images are prohibited");
console.log(`Content audit passed with ${slugs.length} unique articles.`);

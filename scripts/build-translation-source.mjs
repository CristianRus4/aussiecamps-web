/**
 * Writes lib/translations/en.json — the complete English source a translator works from.
 *
 * Everything a locale can override lives in one file with the same shape as de.json/es.json/…:
 *
 *   { "ui": { … }, "pages": { support, privacy, terms }, "articles": { "<slug>": { … } } }
 *
 * Translate the values, keep every key and every array position, save the result as
 * lib/translations/<code>.json, and the site picks it up on the next build. Partial files are fine:
 * lib/localized.ts falls back to the English value for anything a locale has not supplied.
 *
 * Road trip guides are deliberately absent — they stay English-only (see lib/localized.ts).
 *
 * Run:  node --experimental-strip-types scripts/build-translation-source.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { uiStrings, staticPages } from "../lib/source-strings.ts";
import { translatableArticles } from "../lib/localized.ts";

const forTranslation = (article) => ({
  title: article.title,
  description: article.description,
  region: article.region,
  imageAlt: article.imageAlt,
  intro: article.intro,
  sections: article.sections.map((part) => ({ heading: part.heading, body: part.body, tips: part.tips ?? [] })),
  faq: (article.faq ?? []).map(([question, answer]) => [question, answer]),
  sources: (article.sources ?? []).map((source) => ({ label: source.label })),
  priceTable: article.priceTable ? { note: article.priceTable.note, rows: article.priceTable.rows.map((row) => ({ label: row.label, unit: row.unit ?? "" })) } : null,
});

const source = {
  locale: "en",
  ui: uiStrings,
  pages: staticPages,
  articles: Object.fromEntries(translatableArticles.map((article) => [article.slug, forTranslation(article)])),
};

const output = resolve("lib/translations");
await mkdir(output, { recursive: true });
await writeFile(resolve(output, "en.json"), `${JSON.stringify(source, null, 2)}\n`);
console.log(`en.json: ${Object.keys(uiStrings).length} ui strings, 3 static pages, ${translatableArticles.length} articles`);

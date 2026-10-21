import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
// Guides that live one module per page (Can I, drive and cost pages) are articles too.
const moduleDirs = ["lib/can-i", "lib/drives", "lib/costs"];
const moduleFiles = (await Promise.all(moduleDirs.map((dir) => readdir(resolve(root, dir)).then((names) => names.filter((name) => name.endsWith(".ts")).map((name) => `${dir}/${name}`), () => [])))).flat();
const files = [...moduleFiles, "lib/source-strings.ts", "lib/site.ts", "lib/expanded-articles.ts", "app/page.tsx", "app/guides/page.tsx", "app/tools/page.tsx", "app/support/page.tsx", "components/footer.tsx", "components/guide-article.tsx"];
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
 * Translation contract.
 *
 * Every guide is published in every locale, road trips included; ones a locale has not translated
 * completely are served whole in English, noindex. A locale file must never hold a translation the
 * site cannot use without saying so: incomplete or structurally stale guides are listed below (and
 * fail under --strict), and a live locale must translate its whole interface.
 */
const args = process.argv.slice(2);
const strict = args.includes("--strict");
const onlyLocale = args.includes("--locale") ? args[args.indexOf("--locale") + 1] : undefined;
const { localeCodes, fullyTranslatedSlugs, isStaticPageTranslated, isTranslated, translationProgress } = await import("../lib/localized.ts");
const { localeEntry } = await import("../lib/locales.ts");
const { reviewKeys } = await import("../lib/source-strings.ts");
// Scheduled guides included: one with a bad date must fail now, not on the morning it publishes.
const { allArticles: articles } = await import("../lib/site.ts");
const { translationSourceText } = await import("../lib/translation-source.ts");
const { leaves, staleSummary } = await import("./translations-stamp.mjs");
assert.ok(!onlyLocale || localeCodes.includes(onlyLocale), `Unknown locale: ${onlyLocale}`);
assert.ok(!strict || onlyLocale, "--strict needs --locale <code>");

// Translators work from en.json, so it must say exactly what the English site says.
assert.equal(await readFile(resolve(root, "lib/translations/en.json"), "utf8"), translationSourceText(), "lib/translations/en.json is stale: run `npm run translations:source`");

// Price tables are dated in ISO form and rendered in each reader's own date format.
for (const article of articles) if (article.priceTable) assert.match(article.priceTable.asOf, /^\d{4}-\d{2}-\d{2}$/, `${article.slug}: priceTable.asOf must be YYYY-MM-DD`);

/**
 * Number and brand parity, unit by unit. A translation may reword anything, but an amount of money
 * must keep its value (A$2.08 may become "2,08 A$", never "2,80 A$"), and the product name must
 * appear as often as in the English. English amounts are the numbers next to $, A$, AU$, NZ$, US$,
 * AUD or NZD, including both ends of a range; each must appear among the translation's numbers,
 * read with either decimal convention. When the English gives its amounts in digits, every currency
 * amount in the translation must likewise appear in the English. (English that spells an amount out,
 * "eighty dollars", cannot be compared that way, so a translation writing 80 AUD is accepted.)
 *
 * The product name may not be dropped. A translation that names it more often than the English (for
 * "the app") passes by default and fails under --strict, so the translator aligns it.
 */
const MARK = String.raw`(?:A\$|AU\$|NZ\$|US\$|\$|AUD|NZD)`;
const NUM = String.raw`\d[\d.,   ]*\d|\d`;
// A range joiner: a dash or tilde, or a word such as "to", "bis", "tot" standing alone.
const JOIN = String.raw`\s*[–\-～〜~至]\s*|\s+(?:to|bis|tot|tot en met|à|a|até|e|og|och|til|do|až|und)\s+`;
const RANGE = String.raw`(?:${NUM})(?:${JOIN}(?:${NUM}))?`;
const amountPatterns = [new RegExp(String.raw`${MARK}\s?(${RANGE})`, "g"), new RegExp(String.raw`(${RANGE})\s?${MARK}`, "g")];
function readings(raw) {
  const text = raw.replace(/[   ]/g, "").replace(/[.,]$/, "");
  const values = new Set();
  for (const decimal of [".", ","]) {
    const number = Number(decimal === "." ? text.replace(/,/g, "") : text.replace(/\./g, "").replace(",", "."));
    if (Number.isFinite(number)) values.add(number);
  }
  return values;
}
function amounts(text) {
  const found = [];
  for (const pattern of amountPatterns) for (const match of text.matchAll(pattern)) for (const part of match[1].split(new RegExp(JOIN))) if (/\d/.test(part)) found.push(readings(part));
  return found.filter((values) => values.size);
}
const numbers = (text) => new Set([...text.matchAll(new RegExp(NUM, "g"))].flatMap((match) => [...readings(match[0])]));
const brandCount = (text) => (text.match(/AussieCamps/g) ?? []).length;
const englishLeaves = new Map(leaves(JSON.parse(await readFile(resolve(root, "lib/translations/en.json"), "utf8"))).map((leaf) => [leaf.key, leaf.value]));
/** Compared unit by unit only where the structure matches: an incomplete or stale guide or page is
 * served in English anyway, and its strings may sit at shifted positions. */
function parityProblems(file, completeSlugs, completePages) {
  const problems = [];
  for (const { key, value, path } of leaves(file)) {
    const english = englishLeaves.get(key);
    if (key === "locale" || english === undefined || !value.trim()) continue;
    if (path[0] === "articles" && !completeSlugs.has(path[1])) continue;
    if (path[0] === "pages" && !completePages.has(path[1])) continue;
    const have = numbers(value);
    for (const amount of amounts(english)) if (![...amount].some((reading) => have.has(reading))) problems.push(`${key}: amount ${[...amount][0]} from the English is missing or changed`);
    const englishNumbers = numbers(english);
    if (amounts(english).length) for (const amount of amounts(value)) if (![...amount].some((reading) => englishNumbers.has(reading))) problems.push(`${key}: amount ${[...amount][0]} is not in the English`);
    if (brandCount(value) < brandCount(english) || (strict && brandCount(value) !== brandCount(english))) problems.push(`${key}: "AussieCamps" appears ${brandCount(value)} times, ${brandCount(english)} in the English`);
  }
  return problems;
}

const summary = [];
const stale = [];
const staleness = [];
for (const locale of localeCodes) {
  if (onlyLocale && locale !== onlyLocale) continue;
  const entry = localeEntry(locale);
  const file = JSON.parse(await readFile(resolve(root, `lib/translations/${locale}.json`), "utf8"));
  for (const key of ["ui", "pages", "articles"]) assert.ok(file[key] && typeof file[key] === "object", `${locale}.json is missing its ${key} object`);
  assert.doesNotMatch(JSON.stringify(file), /—/, `${locale} contains an em dash`);
  if (entry.status === "live") assert.ok(isTranslated(locale), `${locale} is live but its interface is not fully translated; finish the ui strings or set it back to draft in lib/locales.json`);
  // Testimonials are never translated into a language that does not show them.
  if (!entry.reviews) for (const key of reviewKeys) assert.ok(!file.ui[key], `${locale} translates the testimonial ${key}, but testimonials are not translated into new languages`);
  const parity = parityProblems(file, new Set(fullyTranslatedSlugs(locale)), new Set(["support", "privacy", "terms"].filter((kind) => isStaticPageTranslated(locale, kind))));
  assert.deepEqual(parity, [], `${locale} changes amounts or the product name:\n- ${parity.join("\n- ")}`);
  const complete = new Set(fullyTranslatedSlugs(locale));
  for (const slug of Object.keys(file.articles)) {
    assert.ok(slugs.includes(slug), `${locale} translates ${slug}, which is not an article on this site`);
    if (complete.has(slug)) continue;
    assert.ok(!strict, `${locale}/${slug} is in the translation file but is incomplete or structurally stale, so the site falls back to English for it. Finish it or remove it.`);
    stale.push(`${locale}/${slug}`);
  }
  for (const kind of Object.keys(file.pages)) {
    if (isStaticPageTranslated(locale, kind)) continue;
    assert.ok(!strict, `${locale} pages.${kind} is incomplete or structurally stale, so the site serves the English ${kind} page. Finish it or remove it.`);
    stale.push(`${locale}/pages.${kind}`);
  }
  const progress = translationProgress(locale);
  summary.push(`${locale}${entry.status === "draft" ? " (draft)" : ""} ${progress.ui}/${progress.uiTotal} ui, ${progress.articles}/${progress.articlesTotal} guides, ${progress.pages}/3 pages`);
  const stamps = staleSummary(locale);
  if (stamps.stamped || stamps.translated) staleness.push(`${locale} ${stamps.stale.length} stale, ${stamps.stamped} stamped, ${stamps.unstamped} unstamped`);
  if (strict) assert.deepEqual(stamps.stale, [], `${locale} has translations whose English changed since they were stamped; re-translate them or run \`npm run translations:invalidate -- --locale ${locale}\``);
}

console.log(`Content audit passed with ${slugs.length} unique articles, all translatable.`);
console.log(`Translations: ${summary.join(" · ")}`);
console.log(`Stale strings (English changed since the translation was stamped): ${staleness.join(" · ") || "none stamped yet"}`);
if (stale.length) {
  console.log(`Incomplete or structurally stale translations (served in English, noindex, until re-translated): ${stale.length}`);
  for (const entry of stale) console.log(`- ${entry}`);
}

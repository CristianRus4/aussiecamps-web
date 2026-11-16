#!/usr/bin/env node
/**
 * Moves the year in page titles forward (2026 → 2027 by default), in English and every locale.
 *
 * People search "… 2027" from December, so a guide titled "Camping Fees Australia 2026" should say
 * 2027 by then. Only the year that labels the page changes:
 *
 *   - English: string-literal title fields (`title`, `metaTitle`, `ogTitle`, `h1`, `shortTitle`, …) in
 *     lib/**\/*.ts, and the same keys in lib/translations/en.json and lib/translations/hubs/en.json.
 *     A year is left alone when it is part of a season or range (2026-27, 2026/27, 2025–2026), comes
 *     after a season or holiday word ("Winter Camping 2026", "Christmas 2026"), a month ("June 2026")
 *     or a word that makes it a date or deadline ("from 2026", "since 2026", "checked in 2026").
 *   - Locales: a title-like string changes only when its English counterpart (same key) carries the
 *     new year on its own, i.e. English decides whether a title's year is the page's year. The locale
 *     year changes unless it sits in a range, and the suffix grammar follows it (Turkish 2026'da →
 *     2027'de, Hungarian 2026-ban → 2027-ben, 2026-os → 2027-es, Finnish 2026:ssa → 2027:ssä).
 *   - Stamps (lib/translations/meta/<code>.json): a changed string whose stamp was current is
 *     restamped, so a year bump never marks a translation stale.
 *
 * Never touched: slugs, ids, URLs, related lists, dates, publishAt, bodies, descriptions, FAQs, prices.
 * Rule-based and idempotent, so it can run again on main after other branches merge.
 *
 *   node scripts/bump-title-year.mjs --dry-run      print every change, write nothing
 *   node scripts/bump-title-year.mjs                write the changes
 *   node scripts/bump-title-year.mjs --from 2026 --to 2027
 *
 * Afterwards: npm run translations:source && npm run content:check
 */
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const args = process.argv.slice(2);
const option = (name, fallback) => (args.includes(name) ? args[args.indexOf(name) + 1] : fallback);
const dryRun = args.includes("--dry-run");
const FROM = String(option("--from", "2026"));
const TO = String(option("--to", String(Number(FROM) + 1)));
if (!/^\d{4}$/.test(FROM) || !/^\d{4}$/.test(TO)) throw new Error("--from and --to take four-digit years");

/** Keys whose value is a page's title, wherever the site stores one. */
const TITLE_KEYS = ["title", "metaTitle", "seoTitle", "ogTitle", "twitterTitle", "h1", "shortTitle", "cardTitle", "navTitle", "indexTitle"];
const isTitleKey = (key) => TITLE_KEYS.includes(key);

const RANGE = "[-‐‑‒–—/〜～~]";
/** A year standing on its own: not part of 2026-27, 2026/27, 2025–2026, 20261 or 12026. */
const standalone = (year) => new RegExp(`(?<!\\d\\s*${RANGE}\\s*)(?<!\\d)${year}(?!\\d)(?!\\s*${RANGE}\\s*\\d)`, "gu");

const MONTHS = "jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?";
/** English words before a year that make it a season, a holiday, a date or a deadline, not the page's year. */
const NOT_PAGE_YEAR = [
  new RegExp(`\\b(?:summer|winter|autumn|fall|spring|wet season|dry season|snow season|school holidays|christmas|easter|new year'?s(?: eve| day)?)\\s+(?:[\\w'&-]+\\s+)?$`, "i"),
  new RegExp(`\\b(?:${MONTHS})\\.?\\s+(?:\\d{1,2}(?:st|nd|rd|th)?,?\\s+)?$`, "i"),
  /\b(?:from|since|until|till|before|after|by|effective|starting|starts|started|as of|checked(?: in)?|updated(?: in)?|in force(?: from)?)\s+$/i,
];

/** English: the title with its page year moved on, and the years it left on purpose. */
function bumpEnglish(text) {
  const kept = [];
  const next = text.replace(standalone(FROM), (match, offset) => {
    const before = text.slice(0, offset);
    if (NOT_PAGE_YEAR.some((rule) => rule.test(before))) {
      kept.push(text);
      return match;
    }
    return TO;
  });
  return { next, kept };
}

// --- Suffixes that follow the year's last spoken word -------------------------------------------
const lastDigit = (year) => Number(year.at(-1));
// Turkish: [vowel class, voiceless final consonant] of the last word of 1…9 (bir iki üç dört beş altı yedi sekiz dokuz).
const TR = { 1: ["e", "i", false], 2: ["e", "i", false], 3: ["e", "ü", true], 4: ["e", "ü", true], 5: ["e", "i", true], 6: ["a", "ı", false], 7: ["e", "i", false], 8: ["e", "i", false], 9: ["a", "u", false] };
// Hungarian: [back?, rounded front?, adjective ending] of egy kettő három négy öt hat hét nyolc kilenc.
const HU = { 1: ["front", "es"], 2: ["round", "es"], 3: ["back", "as"], 4: ["front", "es"], 5: ["round", "ös"], 6: ["back", "os"], 7: ["front", "es"], 8: ["back", "as"], 9: ["front", "es"] };
// Finnish: back or front vowel harmony of yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän.
const FI = { 1: "front", 2: "back", 3: "back", 4: "front", 5: "front", 6: "back", 7: "front", 8: "back", 9: "front" };

function turkishSuffix(suffix) {
  const [, , fromHard] = TR[lastDigit(FROM)] ?? [];
  const [toA, toI, toHard] = TR[lastDigit(TO)] ?? [];
  if (!toA) return suffix;
  let out = suffix.replace(/[ae]/g, toA).replace(/[ıiuü]/g, toI);
  // Consonant assimilation of the locative/ablative: 2026'da but 2025'te.
  if (fromHard !== toHard) out = out.replace(/^[dt](?=[ae])/, toHard ? "t" : "d");
  return out;
}

function hungarianSuffix(suffix) {
  const [to, adjective] = HU[lastDigit(TO)] ?? [];
  if (!to) return suffix;
  if (/^[aoeö]s(.*)$/.test(suffix)) return adjective + suffix.slice(2);
  const pairs = [["ban", "ben"], ["ba", "be"], ["ra", "re"], ["ról", "ről"], ["ból", "ből"], ["tól", "től"], ["nak", "nek"], ["val", "vel"], ["tal", "tel"], ["nál", "nél"], ["hoz", "hez", "höz"], ["on", "en", "ön"]];
  for (const forms of pairs) {
    const index = forms.indexOf(suffix);
    if (index === -1) continue;
    return to === "back" ? forms[0] : to === "round" && forms[2] ? forms[2] : forms[1];
  }
  return suffix;
}

function finnishSuffix(suffix) {
  const to = FI[lastDigit(TO)];
  if (!to) return suffix;
  const back = { "ä": "a", "ö": "o", "y": "u" };
  const front = { a: "ä", o: "ö", u: "y" };
  return suffix.replace(/[aouäöy]/g, (vowel) => (to === "back" ? back[vowel] ?? vowel : front[vowel] ?? vowel));
}

/** Locale: every standalone year moves on, with the grammar glued to it. */
function bumpLocale(text, locale) {
  let next = text.replace(standalone(FROM), TO);
  if (next === text) return next;
  if (locale === "tr") next = next.replace(new RegExp(`${TO}(['’])([a-zçğıöşü]+)`, "gu"), (_, mark, suffix) => `${TO}${mark}${turkishSuffix(suffix)}`);
  if (locale === "hu") next = next.replace(new RegExp(`${TO}-([a-záéíóöőúüű]+)`, "gu"), (_, suffix) => `${TO}-${hungarianSuffix(suffix)}`);
  if (locale === "fi") next = next.replace(new RegExp(`${TO}:([a-zäöå]+)`, "gu"), (_, suffix) => `${TO}:${finnishSuffix(suffix)}`);
  return next;
}

// --- Files --------------------------------------------------------------------------------------
const changes = [];
const keptOnPurpose = [];
const writes = new Map();
const write = (path, text) => writes.set(path, text);
const rel = (path) => relative(root, path);

/** Every string leaf of a JSON document, keyed like the translation engine (`articles.<slug>.title`). */
function leaves(value) {
  const out = [];
  const visit = (node, path) => {
    if (typeof node === "string") out.push({ key: path.map((part, index) => (typeof part === "number" ? `[${part}]` : `${index ? "." : ""}${part}`)).join(""), path, value: node });
    else if (Array.isArray(node)) node.forEach((child, index) => visit(child, [...path, index]));
    else if (node && typeof node === "object") for (const [key, child] of Object.entries(node)) visit(child, [...path, key]);
  };
  visit(value, []);
  return out;
}
const lastKey = (leaf) => leaf.path.at(-1);

/** Replace whole JSON string values in place, so a file keeps its own layout. */
function editJson(path, text, edits) {
  let out = text;
  for (const { key, from, to } of edits) {
    const needle = `${JSON.stringify(key)}: ${JSON.stringify(from)}`;
    const count = out.split(needle).length - 1;
    if (count === 0) throw new Error(`${rel(path)}: could not find ${needle}`);
    out = out.split(needle).join(`${JSON.stringify(key)}: ${JSON.stringify(to)}`);
  }
  JSON.parse(out);
  return out;
}

// 1. English in TypeScript sources: `title: "…"` and the other title keys, as plain string literals.
function tsFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return name === "translations" ? [] : tsFiles(path);
    return /\.tsx?$/.test(name) ? [path] : [];
  });
}
const literal = new RegExp(`(?<![\\w.])(${TITLE_KEYS.join("|")})(\\s*:\\s*)(["'\`])((?:\\\\.|(?!\\3)[^\\\\\\n])*)\\3`, "g");
for (const path of [...tsFiles(join(root, "lib")), ...tsFiles(join(root, "app")), ...tsFiles(join(root, "components"))]) {
  const text = readFileSync(path, "utf8");
  if (!text.includes(FROM)) continue;
  const next = text.replace(literal, (whole, key, colon, quote, body) => {
    if (quote === "`" && body.includes("${")) return whole;
    const { next: bumped, kept } = bumpEnglish(body);
    kept.forEach((title) => keptOnPurpose.push({ file: rel(path), title }));
    if (bumped === body) return whole;
    changes.push({ file: rel(path), locale: "en", key, from: body, to: bumped });
    return `${key}${colon}${quote}${bumped}${quote}`;
  });
  if (next !== text) write(path, next);
}

// 2. Translation documents: en.json is the English gate, every other locale follows it.
const hash = (text) => createHash("sha1").update(text).digest("hex").slice(0, 12);
const ownYear = (text) => standalone(TO).test(text);
const locales = JSON.parse(readFileSync(join(root, "lib/locales.json"), "utf8")).map((entry) => entry.code).filter((code) => code !== "en");

for (const dir of [join(root, "lib/translations"), join(root, "lib/translations/hubs")]) {
  const enPath = join(dir, "en.json");
  if (!existsSync(enPath)) continue;
  const enText = readFileSync(enPath, "utf8");
  const enLeaves = leaves(JSON.parse(enText)).filter((leaf) => isTitleKey(lastKey(leaf)));
  const enEdits = [];
  const englishNow = new Map();
  const englishBefore = new Map();
  for (const leaf of enLeaves) {
    const { next, kept } = bumpEnglish(leaf.value);
    kept.forEach((title) => keptOnPurpose.push({ file: rel(enPath), title }));
    englishBefore.set(leaf.key, leaf.value);
    englishNow.set(leaf.key, next);
    if (next !== leaf.value) {
      enEdits.push({ key: lastKey(leaf), from: leaf.value, to: next });
      changes.push({ file: rel(enPath), locale: "en", key: leaf.key, from: leaf.value, to: next });
    }
  }
  if (enEdits.length) write(enPath, editJson(enPath, enText, enEdits));

  const isMain = dir.endsWith("translations");
  for (const code of locales) {
    const path = join(dir, `${code}.json`);
    if (!existsSync(path)) continue;
    const text = readFileSync(path, "utf8");
    const edits = [];
    const changedKeys = new Map();
    for (const leaf of leaves(JSON.parse(text))) {
      if (!isTitleKey(lastKey(leaf)) || !leaf.value.includes(FROM)) continue;
      const english = englishNow.get(leaf.key);
      if (english === undefined || !ownYear(english)) continue;
      const next = bumpLocale(leaf.value, code);
      if (next === leaf.value) {
        keptOnPurpose.push({ file: rel(path), title: leaf.value, why: `the ${FROM} here is part of a range` });
        continue;
      }
      edits.push({ key: lastKey(leaf), from: leaf.value, to: next });
      changedKeys.set(leaf.key, next);
      changes.push({ file: rel(path), locale: code, key: leaf.key, from: leaf.value, to: next });
    }
    if (edits.length) write(path, editJson(path, text, edits));

    // 3. Stamps: a string whose stamp matched its English before the bump stays current after it.
    const metaPath = join(dir, "meta", `${code}.json`);
    if (!isMain || !existsSync(metaPath)) continue;
    const meta = JSON.parse(readFileSync(metaPath, "utf8"));
    const original = new Map(leaves(JSON.parse(text)).map((leaf) => [leaf.key, leaf.value]));
    const current = new Map(leaves(JSON.parse(writes.get(path) ?? text)).map((leaf) => [leaf.key, leaf.value]));
    let restamped = 0;
    for (const [key, english] of englishNow) {
      const stamp = meta.leaves[key];
      const translation = current.get(key);
      if (!stamp || translation === undefined) continue;
      const fresh = `${hash(english)}:${hash(translation)}`;
      if (stamp === fresh) continue;
      // Current before the bump: the stamp's English differs from today's only by this year (so a
      // guide whose English moved on earlier, by hand, is caught up too) and its translation is the
      // one that was here. A translation still showing the old year in a range stays stale.
      const [enHash, trHash] = stamp.split(":");
      const englishWas = new Set([english, englishBefore.get(key), english.replace(standalone(TO), FROM)].map(hash));
      const translationFollows = !translation.includes(FROM) || ownYear(translation);
      if (englishWas.has(enHash) && trHash === hash(original.get(key)) && translationFollows) {
        meta.leaves[key] = fresh;
        restamped += 1;
      }
    }
    if (restamped) write(metaPath, `${JSON.stringify(meta, null, 2)}\n`);
  }
}

// --- Report -------------------------------------------------------------------------------------
for (const change of changes) console.log(`${change.locale.padEnd(7)} ${change.file}  ${change.key}\n        - ${change.from}\n        + ${change.to}`);
const perLocale = {};
for (const change of changes) if (!change.file.endsWith("en.json") || change.locale !== "en") perLocale[change.locale] = (perLocale[change.locale] ?? 0) + 1;
const seen = new Set();
const kept = keptOnPurpose.filter((entry) => !seen.has(entry.title) && seen.add(entry.title));
if (kept.length) {
  console.log(`\nLeft on purpose (${kept.length}):`);
  for (const entry of kept) console.log(`  ${entry.file}: ${entry.title}${entry.why ? ` (${entry.why})` : ""}`);
}
console.log(`\n${dryRun ? "Would change" : "Changed"} ${changes.length} title(s) in ${writes.size} file(s): ${Object.entries(perLocale).map(([code, count]) => `${code} ${count}`).join(", ") || "none"}.`);
if (!dryRun) for (const [path, text] of writes) writeFileSync(path, text);

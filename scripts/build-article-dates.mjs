#!/usr/bin/env node
/**
 * Records when each guide was first published and last rewritten, from git history.
 *
 * Google wants a date on an Article, and for the cost guides freshness is part of the ranking rather
 * than decoration. Hand-typed dates drift the moment an article is edited and invented ones would be
 * a fabricated signal, so both come from the commits that actually changed the guide's own text.
 *
 * "Its own text" matters: several guides share one source file, and that file also holds constants.
 * Dating by file would move every guide in it whenever an unrelated line changed. So each commit is
 * inspected, the article's own block is extracted from that revision, and only a commit that changed
 * that block counts as a modification.
 *
 * Translations are dated the same way. For every locale file in lib/locales.json, each commit that
 * touched lib/translations/<code>.json is read and each guide's translation hashed; a guide's locale
 * date is the day its current translation was committed. That is the `dateModified` and sitemap
 * `lastmod` of the localised guide, so re-translating one guide does not re-date the other sixty-nine,
 * and an English edit does not pretend the translation changed.
 *
 * Output: { "<slug>": { "published": "YYYY-MM-DD", "modified": "YYYY-MM-DD", "locales": { "de": "YYYY-MM-DD" } } }
 *
 * Runs before every build (`prebuild`), so CI needs the full history (fetch-depth: 0). Uncommitted
 * changes are dated today.
 */
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const OUT = join(ROOT, "lib/article-dates.json");

const git = (...args) => execFileSync("git", args, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
const day = (iso) => iso.slice(0, 10);

const contentDir = join(ROOT, "lib/content");
const files = existsSync(contentDir)
  ? readdirSync(contentDir).filter((name) => name.endsWith(".ts")).map((name) => `lib/content/${name}`)
  : ["lib/expanded-articles.ts", "lib/site.ts"];

/**
 * Every article's source, keyed by slug: from its own `slug: "…"` to the start of the next one, or
 * for the last article to the end of the array, so code after the list does not re-date it.
 */
function blocks(source) {
  const found = [...source.matchAll(/slug:\s*"([^"]+)"/g)];
  const result = new Map();
  found.forEach((match, index) => {
    const arrayEnd = source.indexOf("\n]", match.index);
    const end = index + 1 < found.length ? found[index + 1].index : arrayEnd === -1 ? source.length : arrayEnd;
    result.set(match[1], createHash("sha1").update(source.slice(match.index, end)).digest("hex"));
  });
  return result;
}

const dates = {};
for (const file of files) {
  // Oldest first, so the first revision containing a slug is its publication.
  const commits = git("log", "--reverse", "--format=%H %aI", "--", file).trim().split("\n").filter(Boolean);
  const seen = new Map();
  for (const line of commits) {
    const [hash, iso] = line.split(" ");
    let source;
    try { source = git("show", `${hash}:${file}`); } catch { continue; }
    for (const [slug, digest] of blocks(source)) {
      const previous = seen.get(slug);
      if (!previous) seen.set(slug, { published: day(iso), modified: day(iso), digest });
      else if (previous.digest !== digest) { previous.modified = day(iso); previous.digest = digest; }
    }
  }
  for (const [slug, entry] of seen) dates[slug] = { published: entry.published, modified: entry.modified };
}

const today = new Date().toISOString().slice(0, 10);
const digest = (value) => createHash("sha1").update(JSON.stringify(value)).digest("hex");
const registry = JSON.parse(readFileSync(join(ROOT, "lib/locales.json"), "utf8"));
let datedTranslations = 0;
for (const { code } of registry) {
  const file = `lib/translations/${code}.json`;
  if (!existsSync(join(ROOT, file))) continue;
  const commits = git("log", "--reverse", "--format=%H %aI", "--", file).trim().split("\n").filter(Boolean);
  const seen = new Map();
  for (const line of commits) {
    const [hash, iso] = line.split(" ");
    let translations;
    try { translations = JSON.parse(git("show", `${hash}:${file}`)).articles ?? {}; } catch { continue; }
    for (const [slug, translation] of Object.entries(translations)) {
      const hashOf = digest(translation);
      if (seen.get(slug)?.digest !== hashOf) seen.set(slug, { date: day(iso), digest: hashOf });
    }
  }
  const current = JSON.parse(readFileSync(join(ROOT, file), "utf8")).articles ?? {};
  for (const [slug, translation] of Object.entries(current)) {
    if (!dates[slug]) continue;
    const committed = seen.get(slug);
    const date = committed && committed.digest === digest(translation) ? committed.date : today;
    dates[slug].locales = { ...dates[slug].locales, [code]: date };
    datedTranslations += 1;
  }
}

writeFileSync(OUT, JSON.stringify(Object.fromEntries(Object.entries(dates).sort()), null, 2) + "\n");
console.log(`article dates: ${Object.keys(dates).length} guides, ${datedTranslations} translations`);

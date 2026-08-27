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
 * Run `npm run articles:dates` after adding or rewriting a guide.
 */
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const OUT = join(ROOT, "lib/article-dates.json");

const git = (...args) => execFileSync("git", args, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
const day = (iso) => iso.slice(0, 10);

const contentDir = join(ROOT, "lib/content");
const files = existsSync(contentDir)
  ? readdirSync(contentDir).filter((name) => name.endsWith(".ts")).map((name) => `lib/content/${name}`)
  : ["lib/expanded-articles.ts", "lib/site.ts"];

/** Every article's source, keyed by slug: from its own `slug: "…"` to the start of the next one. */
function blocks(source) {
  const found = [...source.matchAll(/slug:\s*"([^"]+)"/g)];
  const result = new Map();
  found.forEach((match, index) => {
    const end = index + 1 < found.length ? found[index + 1].index : source.length;
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

writeFileSync(OUT, JSON.stringify(Object.fromEntries(Object.entries(dates).sort()), null, 2) + "\n");
console.log(`article dates: ${Object.keys(dates).length} guides`);

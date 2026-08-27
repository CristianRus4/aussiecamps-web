#!/usr/bin/env node
/**
 * Turns the image attribution notes in docs/ into data the site can render.
 *
 * Every article photo comes from Wikimedia Commons under a Creative Commons licence, and the
 * attribution has to be somewhere a reader can reach. It used to be a link from every article to
 * this repository on GitHub, which sent a follow link off-site from all 456 article pages and asked
 * the reader to go and read a markdown table on a code host. The same records now build /credits.
 *
 * Two note formats exist across the two sites, so both are parsed: a pipe table whose columns are
 * identified by their headings, and a `## slug` heading followed by a bullet list.
 *
 * Run `npm run images:credits` after adding or replacing an article image.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const DOCS = join(ROOT, "docs");
const OUT = join(ROOT, "lib/image-credits.json");

const cells = (line) => line.split("|").slice(1, -1).map((cell) => cell.trim());
const link = (markdown) => markdown?.match(/\]\((https?:[^)]+)\)/)?.[1] ?? markdown?.match(/https?:\/\/\S+/)?.[0];
const plain = (markdown) => (markdown ?? "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/[`*]/g, "").replace(/\\/g, "").trim();

/** Canonical deed URL for a licence named the way Commons names it. */
function licenceLink(licence) {
  const match = /^CC\s+(BY(?:-[A-Z]{2})*)\s+([\d.]+)/i.exec(licence ?? "");
  if (!match) return undefined;
  return `https://creativecommons.org/licenses/${match[1].toLowerCase()}/${match[2]}/`;
}

const credits = new Map();
// A row without a source URL is one of the app's own screenshots, which still belongs in the list.
const record = (row) => { if (row.slug && (row.sourceUrl || row.creator)) credits.set(row.slug, row); };

for (const name of readdirSync(DOCS).filter((file) => /image-sources/i.test(file) && file.endsWith(".md"))) {
  const source = readFileSync(join(DOCS, name), "utf8");
  const lines = source.split("\n");

  // Format one: a pipe table. Columns are found by their heading rather than by position, because
  // the two sites' tables carry different columns in different orders.
  let columns = null;
  for (const line of lines) {
    if (!line.trim().startsWith("|")) { columns = null; continue; }
    const parts = cells(line);
    if (/^\s*-+\s*$/.test(parts[0] ?? "")) continue;
    const heading = parts.map((cell) => cell.toLowerCase());
    if (heading.some((cell) => cell.startsWith("article"))) {
      const find = (...names) => heading.findIndex((cell) => names.some((name) => cell.includes(name)));
      columns = {
        slug: find("article"),
        subject: find("subject", "file", "photo"),
        creator: find("creator", "author"),
        licence: find("licence", "license"),
        licenceUrl: heading.findIndex((cell) => cell.includes("licence url") || cell.includes("license url")),
        source: find("source"),
      };
      continue;
    }
    if (!columns) continue;
    const at = (index) => (index >= 0 ? parts[index] : undefined);
    const licence = plain(at(columns.licence));
    record({
      slug: plain(at(columns.slug)),
      subject: plain(at(columns.subject)),
      creator: plain(at(columns.creator)),
      licence,
      licenceUrl: link(at(columns.licenceUrl)) ?? licenceLink(licence),
      sourceUrl: link(at(columns.source)),
    });
  }

  // Format two: `## slug` followed by `- Key: value` lines.
  for (const block of source.split(/\n## /).slice(1)) {
    const [heading, ...rest] = block.split("\n");
    const slug = plain(heading);
    if (!slug || slug.includes(" ")) continue;
    const field = (label) => rest.find((line) => line.trim().toLowerCase().startsWith(`- ${label}:`))?.split(":").slice(1).join(":");
    const licenceField = field("licence") ?? field("license");
    record({
      slug,
      subject: plain(field("subject")),
      creator: plain(field("creator")),
      licence: plain(licenceField),
      licenceUrl: link(licenceField) ?? licenceLink(plain(licenceField)),
      sourceUrl: link(field("source")),
    });
  }
}

const rows = [...credits.values()].sort((a, b) => a.slug.localeCompare(b.slug));
writeFileSync(OUT, JSON.stringify(rows, null, 2) + "\n");
console.log(`image credits: ${rows.length} photographs`);

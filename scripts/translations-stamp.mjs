#!/usr/bin/env node
/**
 * Finds translations whose English has changed since they were written.
 *
 * The completeness gate (`isArticleComplete`) checks structure only: an English edit that keeps
 * every count the same never marks a translation stale. So each locale keeps a stamp file,
 * lib/translations/meta/<code>.json, recording for every translated string a hash of the English it
 * was translated from (and of the translation itself).
 *
 *   npm run translations:stamp -- --locale de
 *       Stamp every translated string that is new or whose translation changed since its last stamp.
 *       A string whose English changed but whose translation did not keeps its old stamp, so it stays
 *       stale until it is actually re-translated. Add --all after reviewing the whole file to accept
 *       every current translation as up to date.
 *   npm run translations:invalidate -- --locale de
 *       Blank every stale string in de.json (and drop its stamp), so the translation engine lists it
 *       as untranslated again. A guide with a blanked string falls back to English until redone.
 *
 * `npm run content:check` prints the stale count per locale. Keys use the translation engine's leaf
 * format (`articles.<slug>.sections[0].body[1]`). Only the locale's own translation thread runs these.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const hash = (text) => createHash("sha1").update(text).digest("hex").slice(0, 12);
let directory = resolve(root, "lib/translations");
/** Point the functions below at another translations directory (tests use a temporary copy). */
export const useTranslationsDirectory = (path) => { directory = path; };
const localePath = (code) => resolve(directory, `${code}.json`);
const metaPath = (code) => resolve(directory, "meta", `${code}.json`);

/** Every string in a translation document, keyed the way the translation engine keys it. */
export function leaves(value) {
  const out = [];
  const visit = (node, path) => {
    if (typeof node === "string") out.push({ key: path.map((part, index) => (typeof part === "number" ? `[${part}]` : `${index ? "." : ""}${part}`)).join(""), path, value: node });
    else if (Array.isArray(node)) node.forEach((child, index) => visit(child, [...path, index]));
    else if (node && typeof node === "object") for (const [key, child] of Object.entries(node)) visit(child, [...path, key]);
  };
  visit(value, []);
  return out;
}

const english = () => new Map(leaves(JSON.parse(readFileSync(localePath("en"), "utf8"))).map((leaf) => [leaf.key, leaf.value]));
const readMeta = (code) => (existsSync(metaPath(code)) ? JSON.parse(readFileSync(metaPath(code), "utf8")) : { locale: code, leaves: {} });
const translated = (code) => leaves(JSON.parse(readFileSync(localePath(code), "utf8"))).filter((leaf) => leaf.key !== "locale" && leaf.value.trim());

/** Stamped strings whose English changed while the translation stayed the same. */
export function staleSummary(code) {
  const source = english();
  const { leaves: stamps } = readMeta(code);
  const current = translated(code);
  const stale = [];
  let stamped = 0;
  for (const leaf of current) {
    const stamp = stamps[leaf.key];
    if (!stamp) continue;
    stamped += 1;
    const [enHash, trHash] = stamp.split(":");
    const now = source.get(leaf.key);
    if (trHash === hash(leaf.value) && (now === undefined || enHash !== hash(now))) stale.push(leaf.key);
  }
  return { translated: current.length, stamped, unstamped: current.length - stamped, stale };
}

export function stamp(code, all = false) {
  const source = english();
  const meta = readMeta(code);
  const next = {};
  let changed = 0;
  for (const leaf of translated(code)) {
    const en = source.get(leaf.key);
    if (en === undefined) continue;
    const previous = meta.leaves[leaf.key];
    const fresh = `${hash(en)}:${hash(leaf.value)}`;
    // Keep an old stamp only when the translation is untouched: then a changed English stays stale.
    if (previous && !all && previous.split(":")[1] === hash(leaf.value)) next[leaf.key] = previous;
    else next[leaf.key] = fresh;
    if (next[leaf.key] !== previous) changed += 1;
  }
  mkdirSync(resolve(directory, "meta"), { recursive: true });
  writeFileSync(metaPath(code), `${JSON.stringify({ locale: code, leaves: Object.fromEntries(Object.entries(next).sort(([a], [b]) => a.localeCompare(b))) }, null, 2)}\n`);
  return changed;
}

export function invalidate(code) {
  const { stale } = staleSummary(code);
  if (!stale.length) return 0;
  const document = JSON.parse(readFileSync(localePath(code), "utf8"));
  const byKey = new Map(leaves(document).map((leaf) => [leaf.key, leaf.path]));
  for (const key of stale) {
    const path = byKey.get(key);
    let node = document;
    for (const part of path.slice(0, -1)) node = node[part];
    node[path.at(-1)] = "";
  }
  writeFileSync(localePath(code), `${JSON.stringify(document, null, 2)}\n`);
  const meta = readMeta(code);
  for (const key of stale) delete meta.leaves[key];
  writeFileSync(metaPath(code), `${JSON.stringify(meta, null, 2)}\n`);
  return stale.length;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  const code = args.includes("--locale") ? args[args.indexOf("--locale") + 1] : undefined;
  const registry = JSON.parse(readFileSync(resolve(root, "lib/locales.json"), "utf8")).map((entry) => entry.code);
  if (!code || !registry.includes(code)) {
    console.error(`Usage: npm run translations:${args.includes("--invalidate") ? "invalidate" : "stamp"} -- --locale <${registry.join("|")}>`);
    process.exit(1);
  }
  if (args.includes("--invalidate")) {
    const count = invalidate(code);
    console.log(`${code}: blanked ${count} stale string(s); run the translation engine to re-translate them.`);
  } else {
    const changed = stamp(code, args.includes("--all"));
    const summary = staleSummary(code);
    console.log(`${code}: ${changed} stamp(s) written; ${summary.stamped} stamped, ${summary.stale.length} stale, ${summary.unstamped} unstamped.`);
  }
}

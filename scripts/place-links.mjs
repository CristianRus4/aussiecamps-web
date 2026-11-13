/**
 * Writes place-pages.json: the app's place id to its page on this site, so the app can share a place as
 * its web page and open an incoming https://aussiecamps.app/places/… link (Universal Links, see
 * public/.well-known/apple-app-site-association).
 *
 *   {"AU00002": "/places/new-south-wales/bents-basin-state-conservation-area/", …}
 *
 * Keys are the app's `Site.Id`, values the page path with its trailing slash, sorted by id.
 *
 *   npm run places:links -- --out <file>     from lib/data/places.json (run scripts/decrypt-places.mjs first)
 *   PLACE_PAGES_OUT=<file> npm run places:export   also written at the end of every export
 *
 * The output path is always explicit (--out, or PLACE_PAGES_OUT): without one nothing is written. Its
 * future default is the app's bundled copy, $CAMPING_APP_DATA/Aussie/Resources/place-pages.json, once
 * the app lane owns that file.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** The map for a list of exported places (the `places` of lib/data/places.json). */
export function placePages(places) {
  const entries = places.map((place) => [place.id, `/places/${place.stateSlug}/${place.slug}/`]);
  const seen = new Set();
  for (const [id] of entries) {
    if (seen.has(id)) throw new Error(`Place id ${id} has two pages`);
    seen.add(id);
  }
  return Object.fromEntries(entries.sort(([a], [b]) => a.localeCompare(b)));
}

/** Writes the map to `out`; returns the number of places in it. */
export function writePlacePages(places, out) {
  const map = placePages(places);
  mkdirSync(dirname(resolve(out)), { recursive: true });
  writeFileSync(resolve(out), `${JSON.stringify(map, null, 1)}\n`);
  return Object.keys(map).length;
}

/** `--out <file>`, `--out=<file>` or PLACE_PAGES_OUT. */
export function placePagesOut(argv = process.argv.slice(2)) {
  const index = argv.findIndex((arg) => arg === "--out" || arg.startsWith("--out="));
  if (index === -1) return process.env.PLACE_PAGES_OUT || undefined;
  return argv[index].includes("=") ? argv[index].slice("--out=".length) : argv[index + 1];
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const out = placePagesOut();
  if (!out) {
    console.error("Give the output path: npm run places:links -- --out <file> (or PLACE_PAGES_OUT=<file>).");
    process.exit(1);
  }
  const { places } = JSON.parse(readFileSync(resolve(repo, "lib/data/places.json"), "utf8"));
  if (!places.length) {
    console.error("lib/data/places.json has no places: run node scripts/decrypt-places.mjs first.");
    process.exit(1);
  }
  console.log(`Wrote ${writePlacePages(places, out)} place pages to ${out}.`);
}

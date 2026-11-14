/**
 * Writes place-pages.json: every app place id to its page on this site, so the app can share any place as
 * its web page and open an incoming https://aussiecamps.app/places/… link (Universal Links, see
 * public/.well-known/apple-app-site-association).
 *
 *   {"AU00002": "/places/new-south-wales/murphys-glen-campground/", …}
 *
 * Keys are the app's `Site.Id`, values the page path with its trailing slash, sorted by id. It covers the
 * full pages (lib/data/places.json), the small pages (lib/data/place-stubs.json) and the duplicate records
 * of a place (`aliases`), which share its page.
 *
 *   npm run places:links [-- --out <file>]   from the decrypted data (run scripts/decrypt-places.mjs first)
 *   npm run places:export                    also written at the end of every export
 *
 * It goes into the app's bundle, $CAMPING_APP_DATA/Aussie/Resources/place-pages.json, unless --out or
 * PLACE_PAGES_OUT names another file. The app repo commits it; this script never does.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const appRepo = resolve(process.env.CAMPING_APP_DATA ?? "/Users/cristian/Developer/Apps/AppStore/Camping");

/** The map for the full and the small pages. */
export function placePages(...lists) {
  const map = new Map();
  for (const place of lists.flat()) {
    const path = `/places/${place.stateSlug}/${place.slug}/`;
    for (const id of [place.id, ...(place.aliases ?? [])]) {
      if (map.has(id)) throw new Error(`Place id ${id} has two pages: ${map.get(id)} and ${path}`);
      map.set(id, path);
    }
  }
  return Object.fromEntries([...map].sort(([a], [b]) => a.localeCompare(b)));
}

/** Writes the map to `out`; returns the number of ids in it. */
export function writePlacePages(places, stubs, out) {
  const map = placePages(places, stubs);
  mkdirSync(dirname(resolve(out)), { recursive: true });
  writeFileSync(resolve(out), `${JSON.stringify(map, null, 1)}\n`);
  return Object.keys(map).length;
}

/** `--out <file>`, `--out=<file>`, PLACE_PAGES_OUT, or the app's bundled copy. */
export function placePagesOut(argv = process.argv.slice(2)) {
  const index = argv.findIndex((arg) => arg === "--out" || arg.startsWith("--out="));
  if (index !== -1) return argv[index].includes("=") ? argv[index].slice("--out=".length) : argv[index + 1];
  return process.env.PLACE_PAGES_OUT || resolve(appRepo, "Aussie/Resources/place-pages.json");
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const read = (file) => existsSync(resolve(repo, file)) ? JSON.parse(readFileSync(resolve(repo, file), "utf8")).places : [];
  const places = read("lib/data/places.json");
  const stubs = read("lib/data/place-stubs.json");
  if (!places.length) {
    console.error("lib/data/places.json has no places: run node scripts/decrypt-places.mjs first.");
    process.exit(1);
  }
  const out = placePagesOut();
  console.log(`Wrote ${writePlacePages(places, stubs, out)} place ids (${places.length} full pages, ${stubs.length} small pages) to ${out}.`);
}

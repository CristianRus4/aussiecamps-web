/**
 * Writes lib/data/hub-place-paths.json: the place page of every place a dump point or rest area hub
 * lists, by app id, so the hub can link each one (components/hubs/hub-page.tsx). Those places are in
 * lib/data/place-stubs.json, which is too large to load in the page build and is not in the repository
 * in plain form; this small map of public page paths is. Runs before every build, after
 * scripts/decrypt-places.mjs. Without the place data (no key on this machine) the committed file stays.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => (existsSync(resolve(repo, path)) ? JSON.parse(readFileSync(resolve(repo, path), "utf8")) : { places: [] });
const pages = new Map([...read("lib/data/places.json").places, ...read("lib/data/place-stubs.json").places].flatMap((place) => [place.id, ...(place.aliases ?? [])].map((id) => [id, `/places/${place.stateSlug}/${place.slug}`])));
const out = resolve(repo, "lib/data/hub-place-paths.json");
if (pages.size === 0) {
  console.log("hub place paths: no place data here, keeping the committed file.");
} else {
  const listed = read("lib/data/hubs.json").hubs.filter((hub) => !hub.kind.startsWith("camping")).flatMap((hub) => hub.places.map((place) => place.id));
  const paths = Object.fromEntries([...new Set(listed)].sort().flatMap((id) => (pages.has(id) ? [[id, pages.get(id)]] : [])));
  const text = `${JSON.stringify(paths, null, 1)}\n`;
  if (!existsSync(out) || readFileSync(out, "utf8") !== text) writeFileSync(out, text);
  console.log(`hub place paths: ${Object.keys(paths).length} of ${new Set(listed).size} listed places have a page.`);
}

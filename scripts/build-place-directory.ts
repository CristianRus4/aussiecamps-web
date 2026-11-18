/**
 * Writes lib/data/place-directory.json: what the page build needs to know about the listings by type
 * (lib/place-directory.ts) that scripts/export-place-pages.tsx renders for the Worker. The extra places
 * (lib/data/place-stubs.json) are too large to load in the page build and are not in the repository in
 * plain form; this small file of public page paths is:
 *
 *   states   every state with a place, its name and the listings it has, in listing order
 *   indexed  the Worker's indexable pages, for the sitemap: the listings that are on and their extra place
 *            pages with enough facts
 *
 * Runs before every build, after scripts/decrypt-places.mjs. Without the place data (no key on this
 * machine) the committed file stays. Fails when a listing's slug is also a place's slug in that state.
 */
import assert from "node:assert/strict";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { isIndexedExtra, isListed, listingOf, listingPath, listings } from "../lib/place-directory";

type Row = { slug: string; type: string; stateSlug: string; stateName: string; state: string } & Parameters<typeof isIndexedExtra>[0];
const repo = resolve(import.meta.dirname, "..");
const read = (path: string): { exportedAt: string | null; places: Row[] } => (existsSync(resolve(repo, path)) ? JSON.parse(readFileSync(resolve(repo, path), "utf8")) : { exportedAt: null, places: [] });
const full = read("lib/data/places.json"), extra = read("lib/data/place-stubs.json");
const out = resolve(repo, "lib/data/place-directory.json");

if (extra.places.length === 0) {
  console.log("place directory: no place data here, keeping the committed file.");
} else {
  const all = [...full.places, ...extra.places];
  const states = new Map<string, { slug: string; name: string; code: string; listings: Set<string> }>();
  for (const place of all) {
    const listing = listingOf(place.type);
    const state = states.get(place.stateSlug) ?? states.set(place.stateSlug, { slug: place.stateSlug, name: place.stateName, code: place.state, listings: new Set() }).get(place.stateSlug)!;
    if (listing && isListed(place)) state.listings.add(listing.slug);
  }
  const slugs = new Set(all.map((place) => `${place.stateSlug}/${place.slug}`));
  for (const state of states.values()) for (const slug of state.listings) assert.ok(!slugs.has(`${state.slug}/${slug}`), `/places/${state.slug}/${slug}/ is both a place and a listing: give the listing another slug in lib/place-directory.ts`);
  const indexedPlaces = extra.places.filter(isIndexedExtra);
  const indexedListings = listings.filter((listing) => listing.indexed).flatMap((listing) => [...states.values()]
    .filter((state) => indexedPlaces.some((place) => place.stateSlug === state.slug && listing.types.includes(place.type))).map((state) => listingPath(state.slug, listing)));
  const data = {
    asOf: extra.exportedAt,
    states: [...states.values()].sort((a, b) => a.name.localeCompare(b.name)).map((state) => ({ slug: state.slug, name: state.name, code: state.code, listings: listings.map((listing) => listing.slug).filter((slug) => state.listings.has(slug)) })),
    indexed: [...indexedListings, ...indexedPlaces.map((place) => `/places/${place.stateSlug}/${place.slug}/`).sort()],
  };
  const text = `${JSON.stringify(data, null, 1)}\n`;
  if (!existsSync(out) || readFileSync(out, "utf8") !== text) writeFileSync(out, text);
  console.log(`place directory: ${data.states.reduce((sum, state) => sum + state.listings.length, 0)} listings in ${data.states.length} states, ${data.indexed.length} indexable Worker pages.`);
}

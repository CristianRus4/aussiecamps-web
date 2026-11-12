/**
 * How many English pages link to each guide, counting each linking page once: other guides (prose links
 * and Related guides), the camping hubs, the places state pages and the place pages. The guides index,
 * header and footer are left out, since they link everything.
 *
 *   npm run -s links:report -- [--since YYYY-MM-DD] [--min 2] [--list]
 *
 * Prints the guides published on or after --since (default 2026-11-09) that have fewer than --min
 * inbound pages, first without the place pages and then with them.
 */
import { articles, isScheduled } from "@/lib/site";
import { relatedGuides, linkedSlugs } from "@/lib/related";
import { articleDates } from "@/lib/article-dates";
import { builtHubs } from "@/lib/hubs/gate";
import { hubGuides } from "@/lib/hubs/regions";
import { places, placeStates } from "@/lib/places";
import { placeGuides } from "@/lib/place-guides";

const arg = (name: string, fallback: string) => { const index = process.argv.indexOf(name); return index > 0 ? process.argv[index + 1] : fallback; };
const since = arg("--since", "2026-11-09");
const min = Number(arg("--min", "2"));

const inbound = new Map<string, Set<string>>(articles.map((article) => [article.slug, new Set()]));
const fromPlaces = new Map<string, Set<string>>(articles.map((article) => [article.slug, new Set()]));
const add = (map: Map<string, Set<string>>, slug: string, page: string) => { if (!isScheduled(slug)) map.get(slug)?.add(page); };

for (const article of articles) {
  for (const other of relatedGuides(article)) add(inbound, other.slug, `guide:${article.slug}`);
  for (const slug of linkedSlugs(article)) add(inbound, slug, `guide:${article.slug}`);
}
for (const hub of builtHubs) {
  add(inbound, hub.rulesGuide, `hub:${hub.id}`);
  for (const slug of hubGuides(hub.state, "camping", hub.rulesGuide)) add(inbound, slug, `hub:${hub.id}`);
}
for (const state of placeStates) {
  const hub = builtHubs.find((candidate) => candidate.id === `camping/${state.slug}`);
  if (hub) for (const slug of hubGuides(hub.state, "camping", hub.rulesGuide)) add(inbound, slug, `places:${state.slug}`);
}
for (const place of places) for (const slug of placeGuides(place)) add(fromPlaces, slug, `place:${place.stateSlug}/${place.slug}`);

const fresh = articles.filter((article) => (articleDates(article.slug)?.published ?? "9999") >= since);
const weak = (withPlaces: boolean) => fresh.filter((article) => inbound.get(article.slug)!.size + (withPlaces ? fromPlaces.get(article.slug)!.size : 0) < min);
const placePages = places.filter((place) => placeGuides(place).length >= 3).length;

console.log(`Guides published since ${since}: ${fresh.length}`);
console.log(`Place pages with 3 or more guide links: ${placePages} of ${places.length}`);
console.log(`Fewer than ${min} inbound pages, guides and hubs only: ${weak(false).length}`);
console.log(`Fewer than ${min} inbound pages, with the place pages: ${weak(true).length}`);
if (process.argv.includes("--list")) for (const article of weak(false)) console.log(`  ${inbound.get(article.slug)!.size} + ${fromPlaces.get(article.slug)!.size} places  ${article.slug}`);

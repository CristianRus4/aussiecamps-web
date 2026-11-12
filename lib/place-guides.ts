import { articles, type Article } from "@/lib/site";
import { distanceKm, places, placeStates, type Place, type PlaceState } from "@/lib/places";
import { hubGuides } from "@/lib/hubs/regions";

/**
 * The links between the place pages and the guides, both ways, decided from the data and never page by
 * page: a guide's region names its state, and the names in its `places` list (and a park in its title)
 * pin it to the place pages they match. A place page links the guides pinned near it, the guides that
 * fit its type and its state's guides; a guide about one state shows five of that state's places.
 */
const norm = (text: string) => text.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/\([^)]*\)/g, " ")
  .replace(/['’]/g, "").replace(/[^a-z0-9]+/g, " ").trim();

const stateNames: [string, RegExp][] = [
  ["NSW", /\bNew South Wales\b|\bNSW\b/], ["VIC", /\bVictoria/], ["QLD", /\bQueensland/], ["WA", /\bWestern Australia/],
  ["SA", /\bSouth Australia/], ["NT", /\bNorthern Territory/], ["TAS", /\bTasmania/], ["ACT", /\bthe ACT\b|^ACT\b|\bAustralian Capital Territory\b/],
];
/** Regions that name no state but lie in known ones. */
const regionStates: Record<string, string[]> = {
  Kimberley: ["WA"], Nullarbor: ["SA", "WA"], "Australian Alps": ["NSW", "VIC", "ACT"], "East Coast": ["NSW", "QLD"],
  "Southern Coast": ["VIC", "SA"], Outback: ["SA", "NT"], "South-east Australia": ["NSW", "VIC"],
};

/** The states a guide's region covers: none for a guide about all of Australia. */
export const guideStates = (article: Pick<Article, "region">) =>
  regionStates[article.region] ?? stateNames.filter(([, pattern]) => pattern.test(article.region)).map(([code]) => code);

/** A name without the words every park or camp shares: "Lake Eildon National Park" is "lake eildon". */
const generic = /\b(?:national park|state forest|state park|conservation park|conservation area|regional park|recreation area|nature reserve|reserve|campground|camping area|caravan park|holiday park|tourist park|cypal|aboriginal land)\b/g;
const key = (text: string) => norm(text).replace(generic, " ").replace(/\s+/g, " ").trim();

/**
 * The place pages a guide names, in the states its region covers: a name in its `places` list that is a
 * place's name, park or town, or that a place's name starts with ("Mitchell Falls" for Mitchell Falls
 * Campground), and any place named in full in its title.
 */
export function guideAnchors(article: Article): Place[] {
  const states = guideStates(article);
  if (states.length === 0) return [];
  const names = new Set(article.places.map(key).filter((name) => name.length >= 5));
  const title = ` ${norm(article.title)} `;
  return places.filter((place) => {
    if (!states.includes(place.state)) return false;
    const name = key(place.name);
    return names.has(name) || [...names].some((entry) => name.startsWith(`${entry} `))
      || (place.park !== null && names.has(key(place.park))) || (place.locality !== null && names.has(key(place.locality)))
      || (norm(place.name).includes(" ") && title.includes(` ${norm(place.name)} `));
  });
}
const anchored = articles.map((article) => ({ article, anchors: guideAnchors(article) })).filter((entry) => entry.anchors.length > 0);

/** Guides pinned within `radius` km of a point, nearest first. */
function guidesNear(point: { lat: number; lng: number }, radius: number) {
  return anchored.map(({ article, anchors }) => ({ article, km: Math.min(...anchors.map((anchor) => distanceKm(point, anchor))) }))
    .filter((entry) => entry.km <= radius).sort((a, b) => a.km - b.km).map((entry) => entry.article.slug);
}

const live = new Set(articles.map((article) => article.slug));
const rulesSlug: Record<string, string> = { ACT: "act", NSW: "new-south-wales", NT: "northern-territory", QLD: "queensland", SA: "south-australia", TAS: "tasmania", VIC: "victoria", WA: "western-australia" };
/** The state's camping rules guide, which the place page links from its questions instead. */
export const rulesGuideFor = (state: string) => `camping-rules-${rulesSlug[state] ?? ""}`;

/** Guides that fit what kind of place it is. */
function typeGuides(place: Place): string[] {
  const list: string[] = [];
  if (place.pets === 1) list.push("camping-with-dogs-australia");
  if (place.vehicle === "4wd" || place.vehicle === "high-clearance-4wd") list.push("4wd-basics-hire-vehicles-australia", "can-i-drive-a-2wd-hire-campervan-on-4wd-roads-in-australia");
  if (place.type === "holiday_park") list.push("holiday-park-prices-australia-2026", "powered-vs-unpowered-sites-australia", "best-family-holiday-parks-australia");
  else if (place.type === "campground") {
    if (/\bstate forest\b/i.test(place.park ?? "")) list.push("can-i-camp-in-a-state-forest-in-australia");
    if (/\bnational park\b/i.test(place.park ?? "")) list.push("can-i-camp-in-a-national-park-without-booking-in-australia");
    list.push("choosing-campsite-australia", "camping-fees-australia-2026");
  } else list.push("can-i-camp-in-a-national-park-without-booking-in-australia", "can-i-fly-a-drone-while-camping-in-australia");
  return list.filter((slug) => live.has(slug)).slice(0, 2);
}

const MAX_GUIDES = 6;
const placeCache = new Map<Place, string[]>();
/** The guides a place page links to: up to three pinned near it, two for its type, then its state's. */
export function placeGuides(place: Place): string[] {
  const cached = placeCache.get(place);
  if (cached) return cached;
  const rules = rulesGuideFor(place.state);
  const picks = [...new Set([
    ...guidesNear(place, 60).slice(0, 3),
    ...typeGuides(place),
    ...hubGuides(place.state, "camping", rules),
  ])].filter((slug) => slug !== rules && live.has(slug)).slice(0, MAX_GUIDES);
  placeCache.set(place, picks);
  return picks;
}

/** Guides pinned to a park hub's own campgrounds, for its guide list. */
export const hubLocalGuides = (points: { lat: number; lng: number }[]) =>
  [...new Set(points.flatMap((point) => guidesNear(point, 15)))].slice(0, 3);

const byPhotos = (list: Place[]) => [...list].sort((a, b) => b.photoCount - a.photoCount || a.name.localeCompare(b.name));
/**
 * Five places for a guide clearly about one state, best-photographed first: those it names or that lie
 * within 30 km of them, then within 100 km, then the nearest others (or the state's best-photographed
 * when it is about the whole state and names none). A guide about more than one
 * state, or all of Australia, gets none.
 */
export function guidePlaces(article: Article): { state: PlaceState; places: Place[] } | undefined {
  const states = guideStates(article);
  if (states.length !== 1) return undefined;
  const state = placeStates.find((candidate) => candidate.code === states[0]);
  if (!state || state.places.length < 5) return undefined;
  const anchors = anchored.find((entry) => entry.article.slug === article.slug)?.anchors ?? [];
  // A guide that names none of the state's places shows them only when it is about the whole state.
  if (anchors.length === 0 && !article.slug.includes(state.slug)) return undefined;
  const away = (place: Place) => Math.min(...anchors.map((anchor) => distanceKm(anchor, place)));
  const within = (radius: number) => byPhotos(state.places.filter((place) => away(place) <= radius));
  const rest = anchors.length ? [...state.places].sort((a, b) => away(a) - away(b)) : byPhotos(state.places);
  // Two pages can share a name (one place listed twice by its sources); a row shows each name once.
  const names = new Set<string>();
  const picks = [...within(30), ...within(100), ...rest].filter((place) => !names.has(place.name) && names.add(place.name));
  return { state, places: picks.slice(0, 5) };
}

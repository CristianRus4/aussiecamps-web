/**
 * The places directory's listings by type: which app types each listing holds, and which listings and
 * place pages search engines may index. The one place to change either (docs/places-cloudflare.md).
 *
 * Every place has a page (lib/places.ts). A visitor reaches each one from /places/: the state page links
 * a listing per type, `/places/<state>/<listing>/`, and the listing links every place of its types in that
 * state, the full listings and the extra places alike. The listings are rendered with the extra place pages
 * by scripts/export-place-pages.tsx and served from R2 by the Worker, not by GitHub Pages.
 *
 * `indexed` is the per-type switch for search engines: a listing that is on is indexable and in the
 * sitemap, and so is each of its extra place pages that passes `hasEnoughFacts`. Everything else is
 * noindex. Every type the app has must be in one listing here: the build fails on a new type, so nobody
 * lists data before its source and licence are checked (lib/data/hubs.meta.json, the records' `credit`).
 *
 * No imports: scripts/build-place-directory.ts and scripts/export-place-pages.tsx read this with tsx.
 */
export type Listing = { slug: string; title: string; types: string[]; indexed: boolean };

export const listings: Listing[] = [
  { slug: "campgrounds", title: "Campgrounds", types: ["campground"], indexed: false },
  { slug: "holiday-parks", title: "Holiday parks", types: ["holiday_park"], indexed: false },
  { slug: "parks-and-reserves", title: "Parks and reserves", indexed: false, types: ["national_park", "state_park", "regional_park", "recreation_area",
    "conservation_area", "nature_reserve", "wildlife_reserve", "scenic_reserve", "marine_park", "aboriginal_area"] },
  { slug: "walking-tracks", title: "Walking tracks", types: ["walking_track"], indexed: false },
  { slug: "historic-sites", title: "Historic sites", types: ["historic_site"], indexed: false },
  { slug: "rest-areas", title: "Rest areas", types: ["roadside_rest_area"], indexed: false },
  { slug: "dump-points", title: "Dump points", types: ["public_dump_point"], indexed: true },
  { slug: "toilets", title: "Public toilets", types: ["public_facility"], indexed: false },
  { slug: "water", title: "Water filling points", types: ["water_facility"], indexed: false },
  { slug: "stays", title: "Stays", indexed: false, types: ["hotel_resort", "roofed_accommodation", "self_contained", "house", "retreat", "studio_apartment",
    "farm_station_stay", "chalet_villa_cottage", "motel", "bed_breakfast", "cabin_hut", "backpacker_hostel", "lodging", "houseboat"] },
  { slug: "tours", title: "Tours", types: ["tour"], indexed: false },
  { slug: "activities", title: "Activities", types: ["activity"], indexed: false },
];

/** Types that get no listing, no link and no indexing, whatever their page (none in Australia). */
export const unlisted: Record<string, string> = {};

const byType = new Map(listings.flatMap((listing) => listing.types.map((type) => [type, listing] as const)));

/** The listing a place's type belongs to; undefined for an unlisted type. Throws on a type nobody has checked. */
export function listingOf(type: string): Listing | undefined {
  if (type in unlisted) return undefined;
  const listing = byType.get(type);
  if (!listing) throw new Error(`Place type "${type}" is in no listing: check its source and licence, then add it to a listing or to \`unlisted\` in lib/place-directory.ts`);
  return listing;
}

/**
 * Whether a place is listed: its type has a listing and the record names its source (`credit`). A record with
 * no credit has no clear source and stays out (every Australian record has one).
 */
export const isListed = (place: { type: string; credit?: string | null }) => Boolean(listingOf(place.type)) && Boolean(place.credit?.trim());

export const listingPath = (stateSlug: string, listing: Pick<Listing, "slug">) => `/places/${stateSlug}/${listing.slug}/`;

type Facts = {
  type: string; typeName?: string; credit?: string | null; name: string; locality: string | null; lat: number; lng: number; closed?: boolean;
  amenities: string[]; activities: string[]; fee: string | null; sites: number | null; bookingRequired: boolean | null;
  pets?: number | null; maxVehicleLength?: number | null;
};

/**
 * Enough for a search engine: a name, a locality, coordinates and at least one facility or fact. A facility
 * that only repeats the type ("Dump Point" at a dump point) is not one. A closed place never is.
 */
export function hasEnoughFacts(place: Facts) {
  const facilities = place.amenities.filter((amenity) => amenity.toLowerCase() !== (place.typeName ?? "").toLowerCase());
  const facts = facilities.length > 0 || place.activities.length > 0 || Boolean(place.fee) || place.sites != null || place.bookingRequired != null
    || place.pets != null || place.maxVehicleLength != null;
  return Boolean(place.name.trim() && place.locality?.trim() && Number.isFinite(place.lat) && Number.isFinite(place.lng) && !place.closed && facts);
}

/** Whether an extra place page (lib/data/place-stubs.json) is indexable: its listing is on and it has enough facts. */
export const isIndexedExtra = (place: Facts) => isListed(place) && Boolean(listingOf(place.type)?.indexed) && hasEnoughFacts(place);

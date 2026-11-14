import placesFile from "./data/places.json";
import { builtHubs } from "@/lib/hubs/gate";
import { hubPath } from "@/lib/hubs/pages";
import { sitePath } from "@/lib/site";

/**
 * The place pages: one page per campground, holiday park and national park in the first rollout, built
 * from the app's own database by scripts/export-places.mjs. The data arrives encrypted (this repository
 * is public) and is decrypted before the build by scripts/decrypt-places.mjs; without the key the site
 * builds with no place pages. Server components only: nothing here may reach a client bundle.
 */
export type PlaceType = "campground" | "holiday_park" | "national_park" | "state_park" | "regional_park" | "recreation_area" | "conservation_area"
  | "nature_reserve" | "wildlife_reserve" | "scenic_reserve" | "marine_park" | "aboriginal_area" | "historic_site" | "walking_track";
export type Place = {
  id: string; slug: string; type: PlaceType; name: string;
  state: string; stateSlug: string; stateName: string;
  park: string | null; locality: string | null; lat: number; lng: number;
  description: string; descriptionMore: boolean;
  amenities: string[]; amenityCount: number;
  fee: string | null; pets: number | null; sites: number | null;
  bookingRequired: boolean | null; maxVehicleLength: number | null;
  activities: string[]; activityCount: number;
  road: "sealed" | "unsealed" | "mixed" | null;
  vehicle: "2wd" | "4wd" | "high-clearance-4wd" | "walk-in" | null;
  weather: "all-weather" | "dry-only" | "4wd-when-wet" | "snow-chains" | null;
  photos: string[]; heroWidth: number; photoCount: number; credit: string;
  booking: string | null; checkIn: string | null; checkOut: string | null; stars: number | null;
  /** Other app ids of the same place (a second source's record); they share this page. */
  aliases?: string[];
};

const file = placesFile as unknown as { exportedAt: string | null; places: Place[] };
export const places: Place[] = file.places;
export const placesAsOf = file.exportedAt;

export const typeLabels: Record<PlaceType, { one: string; many: string }> = {
  campground: { one: "Campground", many: "Campgrounds" },
  holiday_park: { one: "Holiday park", many: "Holiday parks" },
  national_park: { one: "National park", many: "National parks" },
  state_park: { one: "State park", many: "State parks" },
  regional_park: { one: "Regional park", many: "Regional parks" },
  recreation_area: { one: "Recreation area", many: "Recreation areas" },
  conservation_area: { one: "Conservation area", many: "Conservation areas" },
  nature_reserve: { one: "Nature reserve", many: "Nature reserves" },
  wildlife_reserve: { one: "Wildlife reserve", many: "Wildlife reserves" },
  scenic_reserve: { one: "Scenic reserve", many: "Scenic reserves" },
  marine_park: { one: "Marine park", many: "Marine parks" },
  aboriginal_area: { one: "Aboriginal area", many: "Aboriginal areas" },
  historic_site: { one: "Historic site", many: "Historic sites" },
  walking_track: { one: "Walking track", many: "Walking tracks" },
};
export const placeTypes = (Object.keys(typeLabels) as PlaceType[]).filter((type) => places.some((place) => place.type === type));

export type PlaceState = { slug: string; name: string; code: string; places: Place[] };
export const placeStates: PlaceState[] = [...new Map(places.map((place) => [place.stateSlug, place])).values()]
  .map((place) => ({ slug: place.stateSlug, name: place.stateName, code: place.state, places: places.filter((other) => other.stateSlug === place.stateSlug) }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const placesPath = () => sitePath("/places");
export const placeStatePath = (state: { slug: string }) => sitePath(`/places/${state.slug}`);
export const placePath = (place: Place) => sitePath(`/places/${place.stateSlug}/${place.slug}`);
export const placeById = new Map(places.map((place) => [`${place.stateSlug}/${place.slug}`, place]));

/** Great-circle distance between two places, in kilometres. */
export const distanceKm = (a: Pick<Place, "lat" | "lng">, b: Pick<Place, "lat" | "lng">) => {
  const rad = Math.PI / 180, dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
};
/** The closest other pages, within 150 km, nearest first. */
export function nearbyPlaces(place: Place, count = 6) {
  return places.filter((other) => other !== place).map((other) => ({ place: other, km: distanceKm(place, other) }))
    .filter((entry) => entry.km <= 150).sort((a, b) => a.km - b.km).slice(0, count);
}

/** The park's data hub, when the site has one, for a campground inside a national park. */
export function parkHubPath(place: Place) {
  if (!place.park) return undefined;
  const id = `camping/${place.stateSlug}/${place.park.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  const hub = builtHubs.find((candidate) => candidate.id === id);
  return hub ? hubPath(hub) : undefined;
}
export function stateHubPath(state: { slug: string }) {
  const hub = builtHubs.find((candidate) => candidate.id === `camping/${state.slug}`);
  return hub ? hubPath(hub) : undefined;
}

export const feeLabel = (fee: string | null) => /^free$/i.test(fee ?? "") ? "Free" : /^paid$/i.test(fee ?? "") ? "Fees apply" : undefined;
/** A place's photo, loaded straight from its source as the app does (checked by scripts/export-places.mjs). */
export const photoUrl = (url: string) => url;

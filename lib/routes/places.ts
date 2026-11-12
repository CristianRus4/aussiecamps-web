import type { ExportRoute } from "@/lib/routes";
import { placePath, places, placesAsOf, placesPath, placeStatePath, placeStates } from "@/lib/places";

/**
 * The places directory, one page per state and one per place, in English. Every place in the export
 * passed its quality bar (photos and a real description), so every page is indexable. Nothing is
 * routed when the build has no place data.
 */
export function placeRoutes(): ExportRoute[] {
  if (places.length === 0) return [];
  const lastmod = placesAsOf ?? undefined;
  return [
    { path: placesPath(), locale: "en", kind: "places", indexable: true, pageKey: "places", lastmod },
    ...placeStates.map((state) => ({ path: placeStatePath(state), locale: "en" as const, kind: "places" as const, indexable: true, pageKey: `places:${state.slug}`, lastmod })),
    ...places.map((place) => ({ path: placePath(place), locale: "en" as const, kind: "place" as const, indexable: true, pageKey: `place:${place.stateSlug}/${place.slug}`, lastmod })),
  ];
}

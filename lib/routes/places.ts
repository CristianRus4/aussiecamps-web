import type { ExportRoute } from "@/lib/routes";
import { directoryAsOf, directoryStates, indexedWorkerPaths, listingPaths, placePath, places, placesAsOf, placesPath, placeStatePath, placeStates } from "@/lib/places";

/**
 * The places directory, one page per state and one per place, in English. Every place in the export
 * passed its quality bar (photos and a real description), so every page is indexable. A state with only
 * extra places (Norfolk Island) has a noindex state page that links its listings. Nothing is routed when
 * the build has no place data.
 */
export function placeRoutes(): ExportRoute[] {
  if (places.length === 0) return [];
  const lastmod = placesAsOf ?? undefined;
  return [
    { path: placesPath(), locale: "en", kind: "places", indexable: true, pageKey: "places", lastmod },
    ...directoryStates.map((state) => ({ path: placeStatePath(state), locale: "en" as const, kind: "places" as const, indexable: placeStates.includes(state), pageKey: `places:${state.slug}`, lastmod })),
    ...places.map((place) => ({ path: placePath(place), locale: "en" as const, kind: "place" as const, indexable: true, pageKey: `place:${place.stateSlug}/${place.slug}`, lastmod })),
  ];
}

/**
 * The Worker's indexable pages (lib/place-directory.ts: the listings that are on and their place pages with
 * enough facts), for the English sitemap only. They are not in the Pages export, so they are not routes.
 */
export function workerSitemapRoutes(): ExportRoute[] {
  if (places.length === 0) return [];
  return indexedWorkerPaths.map((path) => ({ path, locale: "en" as const, kind: listingPaths.includes(path) ? "places" as const : "place" as const, indexable: true, pageKey: `worker:${path}`, lastmod: directoryAsOf ?? undefined }));
}

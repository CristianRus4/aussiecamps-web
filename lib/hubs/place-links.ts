import paths from "@/lib/data/hub-place-paths.json";
import { sitePath } from "@/lib/site";
import type { Hub } from "./gate";

const pagePaths = paths as Record<string, string>;

/**
 * The places a dump point or rest area hub lists, each linking to its place page. The pages are the
 * ones the Cloudflare Worker serves (docs/places-cloudflare.md); lib/data/hub-place-paths.json maps the
 * app ids to them (scripts/build-hub-place-paths.mjs). A place without a page is left out.
 */
export const hubPlaceLinks = (hub: Hub) => hub.places.flatMap((place) => {
  const path = pagePaths[place.id];
  const where = place.locality ?? place.park;
  return path ? [{ href: sitePath(path), label: where && !place.name.includes(where) ? `${place.name}, ${where}` : place.name }] : [];
});

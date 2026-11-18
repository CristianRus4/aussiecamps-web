import paths from "@/lib/data/hub-place-paths.json";
import { sitePath } from "@/lib/site";
import { placeListingPath, stateListings } from "@/lib/places";
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

/**
 * The last link of a dump point or rest area hub's list: every place of that type in the state, the
 * listing by type (lib/place-directory.ts). English, like the listing, on the translated hubs too.
 */
export function hubListingLink(hub: Hub) {
  const [section, slug] = hub.id.split("/");
  const listing = stateListings({ slug }).find((candidate) => candidate.slug === section);
  return listing ? [{ href: placeListingPath({ slug }, listing), label: `All ${listing.title.toLowerCase()} in ${hub.stateName}` }] : [];
}

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { smartBannerContent } from "@/lib/app-store";
import { homeOgImage } from "@/lib/seo";
import { isCampingType, photoUrl, placeListingPath, placePath, placesPath, placeStatePath, placeStates, typeLabel, type Place, type PlaceState } from "@/lib/places";
import type { Listing } from "@/lib/place-directory";
import { placeDescription } from "@/lib/places-copy";

/** English only, so no hreflang; every place page in the export is indexable (lib/routes/places.ts). */
const robots = { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" as const, "max-snippet": -1 } };
/** The places without a full listing (rest areas, dump points, stays, tours, thin pages): noindex, out of the sitemaps. */
const noindex = { index: false, follow: true };
type Image = { url: string; alt: string; width?: number; height?: number; type?: string };
const og = (title: string, description: string, path: string, image?: Image) => ({
  type: "website" as const, siteName: "AussieCamps", locale: "en_AU", title, description, url: `${SITE_URL}${path}`,
  images: [image ?? { ...homeOgImage, alt: "AussieCamps" }],
});
/** The Twitter/X card of a page: the same title, description and image as its Open Graph, so a link looks the same everywhere. */
const social = (card: ReturnType<typeof og>) => ({ openGraph: card, twitter: { card: "summary_large_image" as const, title: card.title, description: card.description, images: card.images } });

/**
 * A place's link-preview photo: its first one when that is a JPEG or PNG. X, WhatsApp and iMessage often show
 * an empty card for a WebP (and the photos with no file extension, whose type is unknown), so those and
 * places without photos fall back to the universal image.
 */
export function previewPhoto(place: Place): Image | undefined {
  const first = place.photos[0] && photoUrl(place.photos[0]);
  if (!first) return undefined;
  let url: URL;
  try { url = new URL(first); } catch { return undefined; }
  const extension = url.pathname.match(/\.(jpe?g|png)$/i)?.[1].toLowerCase();
  if (!extension || url.protocol !== "https:") return undefined;
  return { url: url.href, alt: place.name, type: extension === "png" ? "image/png" : "image/jpeg" };
}

export function placeMetadata(place: Place): Metadata {
  const where = place.park ?? place.locality;
  // The words people search with: "<name> camping" for a campground, "<name>" with booking for a park
  // you book, and camping plus things to do for a national, state or regional park.
  const title = place.type === "holiday_park" ? `${place.name}: photos, facilities and booking`
    : place.type === "campground" ? `${place.name} camping: photos, facilities and fees${where && !place.name.includes(where) && place.name.length + where.length < 30 ? ` (${where})` : ""}`
    : place.type === "walking_track" ? `${place.name}: walk, photos and what to know`
    : place.type === "historic_site" ? `${place.name}: history, photos and visiting`
    : place.type === "marine_park" ? `${place.name}: photos, camping and things to do on the water`
    : !isCampingType(place.type) ? `${place.name}: ${typeLabel(place).one.toLowerCase()} in ${[place.locality, place.stateName].filter(Boolean).join(", ")}`
    : `${place.name}: camping, photos and things to do`;
  const description = placeDescription(place);
  // The banner hands the app this page's URL, which it opens as the place (Universal Links).
  const other = { "apple-itunes-app": smartBannerContent("en", `${SITE_URL}${placePath(place)}`) };
  return { title, description, alternates: { canonical: placePath(place) }, ...social(og(title, description, placePath(place), previewPhoto(place))), robots: place.indexable === false ? noindex : robots, other };
}

export function placeStateMetadata(state: PlaceState): Metadata {
  // A state with only extra places (Norfolk Island) has no full listing to show: noindex, like those places.
  if (!placeStates.includes(state)) {
    const title = `Places in ${state.name}`;
    const description = `Places in ${state.name} in AussieCamps, by type.`;
    return { title, description, alternates: { canonical: placeStatePath(state) }, ...social(og(title, description, placeStatePath(state))), robots: noindex };
  }
  const title = `Campgrounds, holiday parks and national parks in ${state.name}`;
  const description = `Campgrounds, holiday parks and national parks in ${state.name}, with photos, facilities, fees and holiday parks you can book.`;
  return { title, description, alternates: { canonical: placeStatePath(state) }, ...social(og(title, description, placeStatePath(state))), robots };
}

/** A listing by type (`/places/<state>/<listing>/`, lib/place-directory.ts), rendered for the Worker. */
export function placeListingMetadata(state: PlaceState, listing: Listing, indexable: boolean): Metadata {
  const path = placeListingPath(state, listing);
  const title = `${listing.title} in ${state.name}`;
  const description = `${listing.title} in ${state.name} in AussieCamps, on the map and from A to Z.`;
  return { title, description, alternates: { canonical: path }, ...social(og(title, description, path)), robots: indexable ? robots : noindex, other: { "apple-itunes-app": smartBannerContent("en") } };
}

export function placesMetadata(): Metadata {
  const title = "Campgrounds, holiday parks and national parks across Australia";
  const description = "Search campgrounds, holiday parks and national parks by state or type, with photos, facilities, fees and holiday parks you can book.";
  return { title, description, alternates: { canonical: placesPath() }, ...social(og(title, description, placesPath())), robots };
}

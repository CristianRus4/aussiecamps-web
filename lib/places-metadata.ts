import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { smartBannerContent } from "@/lib/app-store";
import { homeOgImage } from "@/lib/seo";
import { photoUrl, placePath, placesPath, placeStatePath, typeLabels, type Place, type PlaceState } from "@/lib/places";
import { placeDescription } from "@/lib/places-copy";

/** English only, so no hreflang; every place page in the export is indexable (lib/routes/places.ts). */
const robots = { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" as const, "max-snippet": -1 } };
const og = (title: string, description: string, path: string, image?: string) => ({
  type: "website" as const, siteName: "AussieCamps", locale: "en_AU", title, description, url: `${SITE_URL}${path}`,
  images: [image ? { url: image.startsWith("http") ? image : `${SITE_URL}${image}`, alt: title } : { ...homeOgImage, alt: "AussieCamps" }],
});

export function placeMetadata(place: Place): Metadata {
  const type = typeLabels[place.type].one.toLowerCase();
  const where = place.park ?? place.locality;
  // The words people search with: "<name> camping" for a campground, "<name>" with booking for a park
  // you book, and camping plus things to do for a national, state or regional park.
  const title = place.type === "holiday_park" ? `${place.name}: photos, facilities and booking`
    : place.type === "campground" ? `${place.name} camping: photos, facilities and fees${where && !place.name.includes(where) && place.name.length + where.length < 30 ? ` (${where})` : ""}`
    : place.type === "walking_track" ? `${place.name}: walk, photos and what to know`
    : place.type === "historic_site" ? `${place.name}: history, photos and visiting`
    : place.type === "marine_park" ? `${place.name}: photos, camping and things to do on the water`
    : `${place.name}: camping, photos and things to do`;
  const description = placeDescription(place);
  void type;
  // The banner hands the app this page's URL, which it opens as the place (Universal Links).
  const other = { "apple-itunes-app": smartBannerContent("en", `${SITE_URL}${placePath(place)}`) };
  return { title, description, alternates: { canonical: placePath(place) }, openGraph: og(title, description, placePath(place), place.photos[0] && photoUrl(place.photos[0])), robots, other };
}

export function placeStateMetadata(state: PlaceState): Metadata {
  const title = `Campgrounds, holiday parks and national parks in ${state.name}`;
  const description = `Campgrounds, holiday parks and national parks in ${state.name}, with photos, facilities, fees and holiday parks you can book.`;
  return { title, description, alternates: { canonical: placeStatePath(state) }, openGraph: og(title, description, placeStatePath(state)), robots };
}

export function placesMetadata(): Metadata {
  const title = "Campgrounds, holiday parks and national parks across Australia";
  const description = "Search campgrounds, holiday parks and national parks by state or type, with photos, facilities, fees and holiday parks you can book.";
  return { title, description, alternates: { canonical: placesPath() }, openGraph: og(title, description, placesPath()), robots };
}

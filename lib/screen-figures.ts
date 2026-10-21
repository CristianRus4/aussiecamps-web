import manifest from "@/lib/image-manifest.json";
import type { Article } from "@/lib/site";

/**
 * Screenshot figures: one image of AussieCamps inside the section about the app, in the listicles and
 * comparison guides. Each image is a pre-rendered 1600x900 WebP (scripts/make-screen-figure.sh): the
 * brand gradient with a centred iPhone screenshot and its own soft shadow, in public/images/screens/.
 *
 * The article literals stay untouched: `allArticles` in lib/site.ts runs `applyScreenFigures`, which
 * sets `figure` on the matching section. `section` is the zero-based index into the guide's
 * `sections`. `alt` is English only: a translated page uses that locale's section heading as the alt
 * (lib/localized.ts), so nothing here enters lib/translations/en.json. docs/growth/screen-figures.md
 * lists the figures and how to add one. The same module exists on both sites (docs/PARITY.md).
 */
export type ScreenFigure = { slug: string; section: number; src: string; alt: string };

export const screenFigures: readonly ScreenFigure[] = [
  { slug: "wikicamps-alternatives", section: 2, src: "/images/screens/wikicamps-alternatives.webp", alt: "AussieCamps on iPhone: the Cape Le Grand National Park page with its facilities and rules" },
  { slug: "campermate-alternatives", section: 2, src: "/images/screens/campermate-alternatives.webp", alt: "AussieCamps on iPhone: the Ikara-Flinders Ranges National Park page with its park details" },
  { slug: "best-fuel-price-apps-australia", section: 9, src: "/images/screens/best-fuel-price-apps-australia.webp", alt: "AussieCamps on iPhone: the Adelaide to Uluru road trip on the map, with the weather along the route" },
  { slug: "best-road-trip-planner-apps-australia", section: 1, src: "/images/screens/best-road-trip-planner-apps-australia.webp", alt: "AussieCamps on iPhone: the Perth to Broome road trip on the map, with the forecast along the way" },
  { slug: "best-free-camping-apps-australia", section: 1, src: "/images/screens/best-free-camping-apps-australia.webp", alt: "AussieCamps on iPhone: the Lucky Bay Campground page with its amenities and features" },
  { slug: "best-caravan-rv-apps-australia", section: 1, src: "/images/screens/best-caravan-rv-apps-australia.webp", alt: "AussieCamps on iPhone: the Cape Hillsborough National Park amenities, with Caravan Sites listed under Vehicles and RVs" },
  { slug: "best-apps-working-holiday-australia", section: 1, src: "/images/screens/best-apps-working-holiday-australia.webp", alt: "AussieCamps on iPhone: the RAC Cable Beach Holiday Park page in Broome, with its Book now button" },
  { slug: "best-weather-apps-camping-australia", section: 8, src: "/images/screens/best-weather-apps-camping-australia.webp", alt: "AussieCamps on iPhone: the Blue Mountains National Park page with photos and a 7-day forecast from Apple Weather" },
  { slug: "best-money-saving-travel-apps-australia", section: 1, src: "/images/screens/best-money-saving-travel-apps-australia.webp", alt: "AussieCamps on iPhone: the Coffin Bay National Park page with its features and reported prices per night and per vehicle" },
  { slug: "hipcamp-alternatives", section: 2, src: "/images/screens/hipcamp-alternatives.webp", alt: "AussieCamps on iPhone: the Mount Buffalo National Park page in Victoria with its description and amenities" },
  { slug: "camps-australia-wide-alternatives", section: 2, src: "/images/screens/camps-australia-wide-alternatives.webp", alt: "AussieCamps on iPhone: the Ikara-Flinders Ranges National Park page with its amenities and features, including Camping and Caravan Sites, and its reported prices" },
  { slug: "best-apps-lap-of-australia", section: 2, src: "/images/screens/best-apps-lap-of-australia.webp", alt: "AussieCamps on iPhone: the Guides list with the Tasmania camping loop, the Darwin, Kakadu and Litchfield camping loop and the Adelaide to Uluru outback route" },
  { slug: "best-dump-point-toilet-apps-australia", section: 2, src: "/images/screens/best-dump-point-toilet-apps-australia.webp", alt: "AussieCamps on iPhone: the Mount Field National Park page in Tasmania with its facilities, including Picnic Tables, Toilets and a Visitor Centre" },
  { slug: "best-national-park-apps-australia", section: 2, src: "/images/screens/best-national-park-apps-australia.webp", alt: "AussieCamps on iPhone: the Grampians (Gariwerd) National Park page in Victoria with its description and amenities, including an accessible toilet and a lookout" },
  { slug: "exploroz-alternatives", section: 2, src: "/images/screens/exploroz-alternatives.webp", alt: "AussieCamps on iPhone: the Mungo National Park page in New South Wales with its description and amenities" },
  { slug: "best-camping-app-australia", section: 1, src: "/images/screens/best-camping-app-australia.webp", alt: "AussieCamps on iPhone: the Karijini National Park page with its amenities and features" },
  { slug: "can-i-camp-on-the-beach-in-australia", section: 6, src: "/images/screens/can-i-camp-on-the-beach-in-australia.webp", alt: "AussieCamps on iPhone: the Cape Conran Coastal Park page in Victoria, with its description of camping among the banksias and wild ocean beaches, and its facilities" },
  { slug: "can-i-drive-on-the-beach-in-australia", section: 8, src: "/images/screens/can-i-drive-on-the-beach-in-australia.webp", alt: "AussieCamps on iPhone: a park page with reported entry fees per person and per vehicle and a photo of a 4WD parked on a white-sand beach" },
  { slug: "can-i-camp-in-a-national-park-without-booking-in-australia", section: 6, src: "/images/screens/can-i-camp-in-a-national-park-without-booking-in-australia.webp", alt: "AussieCamps on iPhone: a campground page with three reported camping prices and a photo of caravans camped above the sea" },
  { slug: "can-i-collect-firewood-while-camping-in-australia", section: 7, src: "/images/screens/can-i-collect-firewood-while-camping-in-australia.webp", alt: "AussieCamps on iPhone: the Ikara-Flinders Ranges National Park page, with camping and shelter facilities, Campfires Allowed under Rules, and reported prices" },
  { slug: "can-i-fly-a-drone-while-camping-in-australia", section: 6, src: "/images/screens/can-i-fly-a-drone-while-camping-in-australia.webp", alt: "AussieCamps on iPhone: a national park page with a Rules list showing No Dogs, a Car Park, and reported camping and per-person and per-vehicle prices" },
  { slug: "can-i-fish-without-a-licence-while-camping-in-australia", section: 8, src: "/images/screens/can-i-fish-without-a-licence-while-camping-in-australia.webp", alt: "AussieCamps on iPhone: a park page with a photo of a person fishing from a beach and a 7-day forecast" },
  { slug: "can-i-use-a-generator-at-a-campsite-in-australia", section: 7, src: "/images/screens/can-i-use-a-generator-at-a-campsite-in-australia.webp", alt: "AussieCamps on iPhone: a coastal park page with Showers and Toilets under facilities, Boat Ramp and Car Park under Vehicles and RVs, and a photo of a woman and a child on a beach" },
  { slug: "can-i-stay-overnight-at-a-rest-area-in-australia", section: 7, src: "/images/screens/can-i-stay-overnight-at-a-rest-area-in-australia.webp", alt: "AussieCamps on iPhone: the Seal Bay page in South Australia, with Shelter, Visitor Centre and Toilets under facilities, Barbecue Facilities, and Car Park under Vehicles and RVs" },
  { slug: "can-i-camp-on-aboriginal-land-without-a-permit", section: 7, src: "/images/screens/can-i-camp-on-aboriginal-land-without-a-permit.webp", alt: "AussieCamps on iPhone: the Mungo National Park page in New South Wales, with a description mentioning Aboriginal history and an Amenities and features list showing a Lookout and a Visitor Centre" },
  { slug: "can-i-take-a-campervan-or-caravan-on-the-spirit-of-tasmania", section: 8, src: "/images/screens/can-i-take-a-campervan-or-caravan-on-the-spirit-of-tasmania.webp", alt: "AussieCamps on iPhone: the Mount Field National Park page in Tasmania, with Accessible Toilet, Picnic Tables, Toilets and Visitor Centre among its amenities" },
  { slug: "can-i-camp-on-private-land-or-a-farm-in-australia", section: 7, src: "/images/screens/can-i-camp-on-private-land-or-a-farm-in-australia.webp", alt: "AussieCamps on iPhone: the Grampians (Gariwerd) National Park page in Victoria, with its description and an Amenities and features list showing a Lookout" },
  { slug: "can-i-take-alcohol-into-restricted-areas-on-an-outback-road-trip", section: 7, src: "/images/screens/can-i-take-alcohol-into-restricted-areas-on-an-outback-road-trip.webp", alt: "AussieCamps on iPhone: the Adelaide to Uluru outback camping route guide, with a trip length of 10 to 12 days, what to plan around and what to book ahead" },
  { slug: "wet-season-camping-top-end-northern-wa", section: 8, src: "/images/screens/wet-season-camping-top-end-northern-wa.webp", alt: "AussieCamps on iPhone: the Litchfield National Park page in the Northern Territory with its photos and a 7-day forecast from Apple Weather" },
  { slug: "christmas-summer-camping-australia-2026-27", section: 7, src: "/images/screens/christmas-summer-camping-australia-2026-27.webp", alt: "AussieCamps on iPhone: the BIG4 Rainbow Beach Holiday Park page in Queensland with its address, hours and Book now button" },
  { slug: "sydney-to-melbourne-drive", section: 8, src: "/images/screens/sydney-to-melbourne-drive.webp", alt: "AussieCamps on iPhone: the Blue Mountains camping weekend road trip on the map, with the route, dump points and the weather forecast along it" },
  { slug: "brisbane-to-sydney-drive", section: 7, src: "/images/screens/brisbane-to-sydney-drive.webp", alt: "AussieCamps on iPhone: the Brisbane to Cape Tribulation camping route on the map, with the weather forecast below it" },
  { slug: "melbourne-to-brisbane-drive", section: 7, src: "/images/screens/melbourne-to-brisbane-drive.webp", alt: "AussieCamps on iPhone: a saved Brisbane to Cape Tribulation road trip collection showing 24 places, the furthest distance between places of 1,175 km, 9 places to stay and 15 other places" },
  { slug: "sydney-to-adelaide-drive", section: 8, src: "/images/screens/sydney-to-adelaide-drive.webp", alt: "AussieCamps on iPhone: the Collections screen with the Want to visit, Visited, Pins and All saved lists and saved collections for the Brisbane to Cape Tribulation, Perth to Broome and Blue Mountains road trips" },
  { slug: "melbourne-to-canberra-drive", section: 8, src: "/images/screens/melbourne-to-canberra-drive.webp", alt: "AussieCamps on iPhone: the Blue Mountains camping weekend road trip guide, with its trip length of 2 nights, what to plan around and what to book ahead" },
  { slug: "brisbane-to-byron-bay-drive", section: 7, src: "/images/screens/brisbane-to-byron-bay-drive.webp", alt: "AussieCamps on iPhone: the Walgun Cape Byron State Conservation Area page in New South Wales, with its description of the lighthouse and walking tracks, its Lighthouse Road address and its reported prices" },
  { slug: "darwin-to-alice-springs-drive", section: 8, src: "/images/screens/darwin-to-alice-springs-drive.webp", alt: "AussieCamps on iPhone: the Darwin, Kakadu and Litchfield camping loop on the map around Darwin, with the 7-day weather forecast below it" },
  { slug: "cairns-to-darwin-drive", section: 7, src: "/images/screens/cairns-to-darwin-drive.webp", alt: "AussieCamps on iPhone: the Darwin, Kakadu and Litchfield camping loop road trip guide, with its trip length of 7 days, the dry season to plan around and the park pass to book ahead" },
  { slug: "perth-to-exmouth-drive", section: 7, src: "/images/screens/perth-to-exmouth-drive.webp", alt: "AussieCamps on iPhone: the Perth to Broome camping road trip guide, with its trip length of 14 to 21 days, the fuel range between towns to plan around and the Save all mentioned places button" },
  { slug: "broome-to-darwin-drive", section: 7, src: "/images/screens/broome-to-darwin-drive.webp", alt: "AussieCamps on iPhone: the Karijini National Park place page in Western Australia, with a notes field, a 7-day weather forecast and the useful places nearby" },
  { slug: "campervan-hire-cost-australia-2026", section: 7, src: "/images/screens/campervan-hire-cost-australia-2026.webp", alt: "AussieCamps on iPhone: the Brisbane to Cape Tribulation camping route saved as a collection, with 24 places, 9 places to stay and a furthest distance between places of 1,175 km" },
  { slug: "buying-a-campervan-australia-working-holiday", section: 7, src: "/images/screens/buying-a-campervan-australia-working-holiday.webp", alt: "AussieCamps on iPhone: the Collections screen with Liked, Starred, Want to visit, Visited, Pins and All saved, and saved camping road trip guides underneath" },
  { slug: "selling-a-campervan-australia-before-you-leave", section: 5, src: "/images/screens/selling-a-campervan-australia-before-you-leave.webp", alt: "AussieCamps on iPhone: the Jervis Bay National Park page in New South Wales, with its description and an Amenities and features list showing a Lookout" },
  { slug: "working-holiday-road-trip-budget-australia-2026", section: 7, src: "/images/screens/working-holiday-road-trip-budget-australia-2026.webp", alt: "AussieCamps on iPhone: the Discovery Parks Byron Bay holiday park page in New South Wales, with its address, a Paid label and a Book now button" },
  { slug: "campervan-vs-caravan-australia", section: 6, src: "/images/screens/campervan-vs-caravan-australia.webp", alt: "AussieCamps on iPhone: part of the Seal Bay page in South Australia, with Barbecue Facilities and a Vehicles and RVs section listing Car Park, above its photos and weather" },
  { slug: "powered-vs-unpowered-sites-australia", section: 6, src: "/images/screens/powered-vs-unpowered-sites-australia.webp", alt: "AussieCamps on iPhone: the BIG4 Whitsunday Islands Holiday Park page in Queensland, with its address, opening hours, a Paid label, a Book now button and its description" },
  { slug: "adelaide-to-melbourne-drive", section: 7, src: "/images/screens/adelaide-to-melbourne-drive.webp", alt: "AussieCamps on iPhone: the Grampians National Park place page in Victoria, with photos, a notes field and a 7-day weather forecast" },
  { slug: "brisbane-to-cairns-drive", section: 7, src: "/images/screens/brisbane-to-cairns-drive.webp", alt: "AussieCamps on iPhone: the Cape Hillsborough National Park place page in Queensland, with activities, facilities, rules, caravan sites and photos" },
  { slug: "perth-to-albany-drive", section: 7, src: "/images/screens/perth-to-albany-drive.webp", alt: "AussieCamps on iPhone: the Cape Le Grand National Park place page in Western Australia, with a notes field, a 7-day weather forecast and Lucky Bay under useful places nearby" },
  { slug: "perth-to-margaret-river-drive", section: 7, src: "/images/screens/perth-to-margaret-river-drive.webp", alt: "AussieCamps on iPhone: a Western Australia road trip guide with a trip summary card, an orange route line and place markers on the map, and a 7-day weather forecast" },
  { slug: "sydney-to-canberra-drive", section: 6, src: "/images/screens/sydney-to-canberra-drive.webp", alt: "AussieCamps on iPhone: the Jervis Bay National Park place page in New South Wales, with photos, a notes field, a 7-day weather forecast and useful places nearby" },
  { slug: "melbourne-to-mildura-drive", section: 6, src: "/images/screens/melbourne-to-mildura-drive.webp", alt: "AussieCamps on iPhone: the Mungo National Park place page in New South Wales, with a visitor centre facility, photos, a notes field and a weather forecast" },
  { slug: "townsville-to-mount-isa-drive", section: 6, src: "/images/screens/townsville-to-mount-isa-drive.webp", alt: "AussieCamps on iPhone: the Cape Hillsborough National Park place page in Queensland, with a camping photo, a park description and amenities and features including a lookout, walking tracks and camping" },
];

const images = manifest as Record<string, unknown>;

/**
 * Returns `list` with each figure set on its section. Throws, so the build fails at module load like
 * assertPublishAt, when a section is used twice, a slug is listed twice (one figure per guide), a slug
 * is unknown, a section index is out of range, the image has no lib/image-manifest.json entry, or
 * the alt is empty.
 */
export function applyScreenFigures<T extends Pick<Article, "slug" | "sections">>(list: T[], figures: readonly ScreenFigure[] = screenFigures): T[] {
  const bySlug = new Map<string, ScreenFigure>();
  for (const figure of figures) {
    const listed = bySlug.get(figure.slug);
    if (listed?.section === figure.section) throw new Error(`screen-figures: section ${figure.section} of "${figure.slug}" has two figures`);
    if (listed) throw new Error(`screen-figures: "${figure.slug}" is listed twice`);
    const article = list.find((item) => item.slug === figure.slug);
    if (!article) throw new Error(`screen-figures: unknown guide slug "${figure.slug}"`);
    if (!Number.isInteger(figure.section) || figure.section < 0 || figure.section >= article.sections.length) {
      throw new Error(`screen-figures: section ${figure.section} is out of range for "${figure.slug}" (${article.sections.length} sections)`);
    }
    if (!images[figure.src]) throw new Error(`screen-figures: no image-manifest entry for "${figure.src}". Run \`npm run images:manifest\`.`);
    if (!figure.alt.trim()) throw new Error(`screen-figures: "${figure.slug}" needs alt text`);
    bySlug.set(figure.slug, figure);
  }
  return list.map((article) => {
    const figure = bySlug.get(article.slug);
    if (!figure) return article;
    return {
      ...article,
      sections: article.sections.map((part, index) => (index === figure.section ? { ...part, figure: { src: figure.src, alt: figure.alt } } : part)),
    };
  });
}

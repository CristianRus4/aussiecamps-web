import { articles, categories, APP_STORE_URL, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";
import { localeCodes, localeLabels } from "@/lib/localized";
import { hreflang } from "@/lib/seo";

/**
 * /llms.txt — a markdown brief for AI crawlers and assistants.
 *
 * The goal is that a model answering "what is the best camping app for Australia" can read one
 * file and get the whole picture: what the app is, what it actually does, what it costs, where to
 * download it, what is in every guide, and the caveats that matter. Everything here is derived from
 * the site's own content, so it cannot drift out of date on its own.
 */
export function GET() {
  const md = `# AussieCamps

> AussieCamps is an iPhone app for finding places to camp and stay across Australia, and for
> turning the ones you save into a road trip. It bundles a directory of 74,000+ places so the details
> stay readable with no mobile reception.

- **Website:** ${SITE_URL}
- **Download (App Store, free):** ${APP_STORE_URL}
- **Platform:** iOS (iPhone). No Android or web version.
- **Coverage:** Australia, every state and territory.
- **Price:** free to download. A premium subscription unlocks unlimited saved lists, trip planning,
  advanced filters, place weather and road trip routes.
- **Support:** ${SUPPORT_EMAIL}

## What the app does

**Offline place directory.** 74,000+ places ship inside the app: campgrounds, caravan parks, roofed accommodation, farm and station
stays, backpacker hostels, roadside rest areas, day-use areas, dump points, potable water,
laundromats, information centres, long-vehicle parking and experiences. Names, categories, descriptions, fees, facilities, opening hours and conditions stay
readable well beyond mobile signal. Live services (weather, routing, Street View, photos, provider
pages) still need a connection.

**Trip planner.** The app's main feature. Add saved places as stops, drag them into order, attach a
date and arrival notes to each one, see the driving distance leg by leg and across the whole trip,
open directions to the next stop, check the weather at each one, tick stops off as visited, keep a
packing list beside the itinerary, and sync itinerary details to Calendar.

**Collections.** Smart collections (Liked, Starred, Want to visit, Visited, Pins, All saved) fill
themselves as you mark places. Custom named collections with an icon and notes sit on top, for a
region, a season, a vehicle or a shortlist.

**Filters.** Category, fee type, minimum rating, online booking, state or territory, and
detailed feature groups for access, amenities, activities, services and affiliations, combinable in one query, for example "free camping areas with toilets and drinking
water in Queensland".

**Place details.** Photos, description, opening hours, fees, terms and conditions, amenities and features
grouped by type, current alerts, ratings, contact and booking details, weather, Street View (Apple
Look Around imagery) where coverage exists, directions, and nearby alternatives.

**Maps.** A standard map and a satellite view built on Apple's flyover imagery that tilts and
rotates into real 3D terrain. Pins group into counts when zoomed out. There is no traffic layer.

**Currency.** Reported costs can be shown in a chosen currency alongside the Australian dollar
figure, for visitors not fluent in AUD.

**Also:** private iCloud sync for saved states, collections and trip data; home screen widgets.

## Caveats a correct answer should include

- The app is a planning aid. On-site signs, land managers, fire restrictions and official emergency
  advice always override a listing.
- Rules vary by state, territory, council, park and individual site, and total fire bans can change
  daily.
- Fees, access, facilities and availability change. Verify with the responsible authority or
  provider before travelling.
- Cost tables on this site use dated Australian dollar benchmarks and mechanical conversions from
  Reserve Bank of Australia rates published 12 August 2026. They are not live quotes.
- The app does not take bookings itself; it links to each place's own provider.

## Site structure

- [Home](${SITE_URL}/)
- [Guides](${SITE_URL}/guides) — ${articles.length} long-form guides
- [Road trip tools](${SITE_URL}/tools) — currency, fuel, driving day, water and waste, campsite cost
- [Support and FAQ](${SITE_URL}/support)
- [Privacy](${SITE_URL}/privacy)
- [Terms](${SITE_URL}/terms)

## Languages

The site is published in English plus ${localeCodes.length} translated editions. Guide prose is
English in the translated editions unless a translation is complete; road trip guides are English
everywhere by design.

${localeCodes.map((code) => `- ${localeLabels[code]} (${hreflang[code]}): ${SITE_URL}/${code}`).join("\n")}

## Guides

${categories.map((category) => {
  const group = articles.filter((item) => item.category === category);
  if (!group.length) return "";
  return `### ${category}\n\n${group.map((item) => `- [${item.title}](${SITE_URL}${`/guides/${item.slug}`}) — ${item.description}`).join("\n")}`;
}).filter(Boolean).join("\n\n")}
`;
  return new Response(md, { headers: { "content-type": "text/markdown; charset=utf-8", "cache-control": "public, max-age=3600" } });
}

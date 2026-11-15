import type { Article } from "@/lib/site";
import g_two_week_campervan_itinerary_sydney_brisbane, { faq as faq_g_two_week_campervan_itinerary_sydney_brisbane } from "@/lib/costs/two-week-campervan-itinerary-sydney-brisbane";
import g_one_week_campervan_itinerary_sydney_byron_bay, { faq as faq_g_one_week_campervan_itinerary_sydney_byron_bay } from "@/lib/costs/one-week-campervan-itinerary-sydney-byron-bay";
import g_ten_day_campervan_itinerary_cairns_tropical_north, { faq as faq_g_ten_day_campervan_itinerary_cairns_tropical_north } from "@/lib/costs/ten-day-campervan-itinerary-cairns-tropical-north";
import g_east_coast_vs_west_coast_australia_campervan, { faq as faq_g_east_coast_vs_west_coast_australia_campervan } from "@/lib/costs/east-coast-vs-west-coast-australia-campervan";
import g_cairns_to_cape_york_camping_route, { faq as faq_g_cairns_to_cape_york_camping_route } from "@/lib/costs/cairns-to-cape-york-camping-route";
import g_hobart_bay_of_fires_freycinet_camping_week, { faq as faq_g_hobart_bay_of_fires_freycinet_camping_week } from "@/lib/costs/hobart-bay-of-fires-freycinet-camping-week";
import g_melbourne_gippsland_wilsons_promontory_camping_loop, { faq as faq_g_melbourne_gippsland_wilsons_promontory_camping_loop } from "@/lib/costs/melbourne-gippsland-wilsons-promontory-camping-loop";
import g_mornington_peninsula_phillip_island_camping_weekend, { faq as faq_g_mornington_peninsula_phillip_island_camping_weekend } from "@/lib/costs/mornington-peninsula-phillip-island-camping-weekend";
import g_grampians_camping_weekend_from_melbourne, { faq as faq_g_grampians_camping_weekend_from_melbourne } from "@/lib/costs/grampians-camping-weekend-from-melbourne";
import g_snowy_mountains_kosciuszko_camping_road_trip, { faq as faq_g_snowy_mountains_kosciuszko_camping_road_trip } from "@/lib/costs/snowy-mountains-kosciuszko-camping-road-trip";
import g_tasmania_west_coast_road_trip_strahan_cradle_mountain, { faq as faq_g_tasmania_west_coast_road_trip_strahan_cradle_mountain } from "@/lib/costs/tasmania-west-coast-road-trip-strahan-cradle-mountain";
import g_eyre_peninsula_coastal_camping_route, { faq as faq_g_eyre_peninsula_coastal_camping_route } from "@/lib/costs/eyre-peninsula-coastal-camping-route";

/** Guides added by the aus-b4 lane: road trips and loops, A-to-B drives and activity guides. Each lives in lib/costs/<slug>.ts or lib/drives/<slug>.ts. */
export const b4Articles: Article[] = [g_two_week_campervan_itinerary_sydney_brisbane, g_one_week_campervan_itinerary_sydney_byron_bay, g_ten_day_campervan_itinerary_cairns_tropical_north, g_east_coast_vs_west_coast_australia_campervan, g_cairns_to_cape_york_camping_route, g_hobart_bay_of_fires_freycinet_camping_week, g_melbourne_gippsland_wilsons_promontory_camping_loop, g_mornington_peninsula_phillip_island_camping_weekend, g_grampians_camping_weekend_from_melbourne, g_snowy_mountains_kosciuszko_camping_road_trip, g_tasmania_west_coast_road_trip_strahan_cradle_mountain, g_eyre_peninsula_coastal_camping_route];
export const b4Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_two_week_campervan_itinerary_sydney_brisbane.slug]: faq_g_two_week_campervan_itinerary_sydney_brisbane,
  [g_one_week_campervan_itinerary_sydney_byron_bay.slug]: faq_g_one_week_campervan_itinerary_sydney_byron_bay,
  [g_ten_day_campervan_itinerary_cairns_tropical_north.slug]: faq_g_ten_day_campervan_itinerary_cairns_tropical_north,
  [g_east_coast_vs_west_coast_australia_campervan.slug]: faq_g_east_coast_vs_west_coast_australia_campervan,
  [g_cairns_to_cape_york_camping_route.slug]: faq_g_cairns_to_cape_york_camping_route,
  [g_hobart_bay_of_fires_freycinet_camping_week.slug]: faq_g_hobart_bay_of_fires_freycinet_camping_week,
  [g_melbourne_gippsland_wilsons_promontory_camping_loop.slug]: faq_g_melbourne_gippsland_wilsons_promontory_camping_loop,
  [g_mornington_peninsula_phillip_island_camping_weekend.slug]: faq_g_mornington_peninsula_phillip_island_camping_weekend,
  [g_grampians_camping_weekend_from_melbourne.slug]: faq_g_grampians_camping_weekend_from_melbourne,
  [g_snowy_mountains_kosciuszko_camping_road_trip.slug]: faq_g_snowy_mountains_kosciuszko_camping_road_trip,
  [g_tasmania_west_coast_road_trip_strahan_cradle_mountain.slug]: faq_g_tasmania_west_coast_road_trip_strahan_cradle_mountain,
  [g_eyre_peninsula_coastal_camping_route.slug]: faq_g_eyre_peninsula_coastal_camping_route,
};

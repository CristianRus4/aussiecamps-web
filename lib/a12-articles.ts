import type { Article } from "@/lib/site";
import g_best_campsite_booking_apps_australia, { faq as faq_g_best_campsite_booking_apps_australia } from "@/lib/costs/best-campsite-booking-apps-australia";
import g_best_hiking_bushwalking_apps_australia, { faq as faq_g_best_hiking_bushwalking_apps_australia } from "@/lib/costs/best-hiking-bushwalking-apps-australia";
import g_snow_chains_winter_driving_australia, { faq as faq_g_snow_chains_winter_driving_australia } from "@/lib/costs/snow-chains-winter-driving-australia";
import g_wet_weather_camping_australia, { faq as faq_g_wet_weather_camping_australia } from "@/lib/costs/wet-weather-camping-australia";
import g_campervan_vs_car_and_tent_australia, { faq as faq_g_campervan_vs_car_and_tent_australia } from "@/lib/costs/campervan-vs-car-and-tent-australia";
import g_two_week_australia_trip_cost, { faq as faq_g_two_week_australia_trip_cost } from "@/lib/costs/two-week-australia-trip-cost";
import g_wine_regions_campervan_australia, { faq as faq_g_wine_regions_campervan_australia } from "@/lib/costs/wine-regions-campervan-australia";
import g_wildlife_encounters_campervan_australia, { faq as faq_g_wildlife_encounters_campervan_australia } from "@/lib/costs/wildlife-encounters-campervan-australia";
import g_river_crossing_floodway_safety_australia, { faq as faq_g_river_crossing_floodway_safety_australia } from "@/lib/costs/river-crossing-floodway-safety-australia";

/** Guides added by the A12 lane: AussieCamps versions of KiwiCamping guides it lacked. Each lives in lib/costs/<slug>.ts. */
export const a12Articles: Article[] = [g_best_campsite_booking_apps_australia, g_best_hiking_bushwalking_apps_australia, g_snow_chains_winter_driving_australia, g_wet_weather_camping_australia, g_campervan_vs_car_and_tent_australia, g_two_week_australia_trip_cost, g_wine_regions_campervan_australia, g_wildlife_encounters_campervan_australia, g_river_crossing_floodway_safety_australia];
export const a12Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_best_campsite_booking_apps_australia.slug]: faq_g_best_campsite_booking_apps_australia,
  [g_best_hiking_bushwalking_apps_australia.slug]: faq_g_best_hiking_bushwalking_apps_australia,
  [g_snow_chains_winter_driving_australia.slug]: faq_g_snow_chains_winter_driving_australia,
  [g_wet_weather_camping_australia.slug]: faq_g_wet_weather_camping_australia,
  [g_campervan_vs_car_and_tent_australia.slug]: faq_g_campervan_vs_car_and_tent_australia,
  [g_two_week_australia_trip_cost.slug]: faq_g_two_week_australia_trip_cost,
  [g_wine_regions_campervan_australia.slug]: faq_g_wine_regions_campervan_australia,
  [g_wildlife_encounters_campervan_australia.slug]: faq_g_wildlife_encounters_campervan_australia,
  [g_river_crossing_floodway_safety_australia.slug]: faq_g_river_crossing_floodway_safety_australia,
};

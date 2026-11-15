import type { Article } from "@/lib/site";
import g_two_week_campervan_itinerary_sydney_brisbane, { faq as faq_g_two_week_campervan_itinerary_sydney_brisbane } from "@/lib/costs/two-week-campervan-itinerary-sydney-brisbane";
import g_one_week_campervan_itinerary_sydney_byron_bay, { faq as faq_g_one_week_campervan_itinerary_sydney_byron_bay } from "@/lib/costs/one-week-campervan-itinerary-sydney-byron-bay";
import g_ten_day_campervan_itinerary_cairns_tropical_north, { faq as faq_g_ten_day_campervan_itinerary_cairns_tropical_north } from "@/lib/costs/ten-day-campervan-itinerary-cairns-tropical-north";
import g_east_coast_vs_west_coast_australia_campervan, { faq as faq_g_east_coast_vs_west_coast_australia_campervan } from "@/lib/costs/east-coast-vs-west-coast-australia-campervan";

/** Guides added by the aus-b4 lane: road trips and loops, A-to-B drives and activity guides. Each lives in lib/costs/<slug>.ts or lib/drives/<slug>.ts. */
export const b4Articles: Article[] = [g_two_week_campervan_itinerary_sydney_brisbane, g_one_week_campervan_itinerary_sydney_byron_bay, g_ten_day_campervan_itinerary_cairns_tropical_north, g_east_coast_vs_west_coast_australia_campervan];
export const b4Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_two_week_campervan_itinerary_sydney_brisbane.slug]: faq_g_two_week_campervan_itinerary_sydney_brisbane,
  [g_one_week_campervan_itinerary_sydney_byron_bay.slug]: faq_g_one_week_campervan_itinerary_sydney_byron_bay,
  [g_ten_day_campervan_itinerary_cairns_tropical_north.slug]: faq_g_ten_day_campervan_itinerary_cairns_tropical_north,
  [g_east_coast_vs_west_coast_australia_campervan.slug]: faq_g_east_coast_vs_west_coast_australia_campervan,
};

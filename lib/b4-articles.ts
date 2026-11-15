import type { Article } from "@/lib/site";
import g_two_week_campervan_itinerary_sydney_brisbane, { faq as faq_g_two_week_campervan_itinerary_sydney_brisbane } from "@/lib/costs/two-week-campervan-itinerary-sydney-brisbane";
import g_one_week_campervan_itinerary_sydney_byron_bay, { faq as faq_g_one_week_campervan_itinerary_sydney_byron_bay } from "@/lib/costs/one-week-campervan-itinerary-sydney-byron-bay";

/** Guides added by the aus-b4 lane: road trips and loops, A-to-B drives and activity guides. Each lives in lib/costs/<slug>.ts or lib/drives/<slug>.ts. */
export const b4Articles: Article[] = [g_two_week_campervan_itinerary_sydney_brisbane, g_one_week_campervan_itinerary_sydney_byron_bay];
export const b4Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_two_week_campervan_itinerary_sydney_brisbane.slug]: faq_g_two_week_campervan_itinerary_sydney_brisbane,
  [g_one_week_campervan_itinerary_sydney_byron_bay.slug]: faq_g_one_week_campervan_itinerary_sydney_byron_bay,
};

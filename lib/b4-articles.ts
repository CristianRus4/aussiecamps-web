import type { Article } from "@/lib/site";
import g_two_week_campervan_itinerary_sydney_brisbane, { faq as faq_g_two_week_campervan_itinerary_sydney_brisbane } from "@/lib/costs/two-week-campervan-itinerary-sydney-brisbane";

/** Guides added by the aus-b4 lane: road trips and loops, A-to-B drives and activity guides. Each lives in lib/costs/<slug>.ts or lib/drives/<slug>.ts. */
export const b4Articles: Article[] = [g_two_week_campervan_itinerary_sydney_brisbane];
export const b4Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_two_week_campervan_itinerary_sydney_brisbane.slug]: faq_g_two_week_campervan_itinerary_sydney_brisbane,
};

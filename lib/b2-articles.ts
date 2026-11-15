import type { Article } from "@/lib/site";
import g_national_park_campsites_sell_out_summer_australia, { faq as faq_g_national_park_campsites_sell_out_summer_australia } from "@/lib/costs/national-park-campsites-sell-out-summer-australia";
import g_new_years_eve_summer_festival_camping_australia_2026_27, { faq as faq_g_new_years_eve_summer_festival_camping_australia_2026_27 } from "@/lib/costs/new-years-eve-summer-festival-camping-australia-2026-27";
import g_best_apps_tasmania_road_trip, { faq as faq_g_best_apps_tasmania_road_trip } from "@/lib/costs/best-apps-tasmania-road-trip";

/** Guides added by the B2 lane (November 2026): summer pages, general topics, app guides and free camping by area. Each lives in lib/costs/<slug>.ts. */
export const b2Articles: Article[] = [g_national_park_campsites_sell_out_summer_australia, g_new_years_eve_summer_festival_camping_australia_2026_27, g_best_apps_tasmania_road_trip];
export const b2Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_national_park_campsites_sell_out_summer_australia.slug]: faq_g_national_park_campsites_sell_out_summer_australia,
  [g_new_years_eve_summer_festival_camping_australia_2026_27.slug]: faq_g_new_years_eve_summer_festival_camping_australia_2026_27,
  [g_best_apps_tasmania_road_trip.slug]: faq_g_best_apps_tasmania_road_trip,
};

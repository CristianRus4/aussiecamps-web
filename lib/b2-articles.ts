import type { Article } from "@/lib/site";
import g_national_park_campsites_sell_out_summer_australia, { faq as faq_g_national_park_campsites_sell_out_summer_australia } from "@/lib/costs/national-park-campsites-sell-out-summer-australia";

/** Guides added by the B2 lane (November 2026): summer pages, general topics, app guides and free camping by area. Each lives in lib/costs/<slug>.ts. */
export const b2Articles: Article[] = [g_national_park_campsites_sell_out_summer_australia];
export const b2Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_national_park_campsites_sell_out_summer_australia.slug]: faq_g_national_park_campsites_sell_out_summer_australia,
};

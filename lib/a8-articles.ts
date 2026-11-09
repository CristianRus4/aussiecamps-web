import type { Article } from "@/lib/site";
import g_free_camping_near_shepparton_goulburn_valley, { faq as faq_g_free_camping_near_shepparton_goulburn_valley } from "@/lib/costs/free-camping-near-shepparton-goulburn-valley";

/** Guides added by the A8 growth lane. Each lives in lib/costs/<slug>.ts. */
export const a8Articles: Article[] = [g_free_camping_near_shepparton_goulburn_valley];
export const a8Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_free_camping_near_shepparton_goulburn_valley.slug]: faq_g_free_camping_near_shepparton_goulburn_valley,
};

import type { Article } from "@/lib/site";
import g_free_camping_near_sydney, { faq as faq_g_free_camping_near_sydney } from "@/lib/costs/free-camping-near-sydney";
import g_free_camping_near_melbourne, { faq as faq_g_free_camping_near_melbourne } from "@/lib/costs/free-camping-near-melbourne";
import g_free_camping_near_brisbane, { faq as faq_g_free_camping_near_brisbane } from "@/lib/costs/free-camping-near-brisbane";

/** Guides added by the A4 growth lane (free camping near cities, powered sites, regional WA and gear). Each lives in lib/costs/<slug>.ts. */
export const a4Articles: Article[] = [g_free_camping_near_sydney, g_free_camping_near_melbourne, g_free_camping_near_brisbane];
export const a4Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_free_camping_near_sydney.slug]: faq_g_free_camping_near_sydney,
  [g_free_camping_near_melbourne.slug]: faq_g_free_camping_near_melbourne,
  [g_free_camping_near_brisbane.slug]: faq_g_free_camping_near_brisbane,
};

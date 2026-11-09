import type { Article } from "@/lib/site";
import g_free_camping_near_sydney, { faq as faq_g_free_camping_near_sydney } from "@/lib/costs/free-camping-near-sydney";
import g_free_camping_near_melbourne, { faq as faq_g_free_camping_near_melbourne } from "@/lib/costs/free-camping-near-melbourne";
import g_free_camping_near_brisbane, { faq as faq_g_free_camping_near_brisbane } from "@/lib/costs/free-camping-near-brisbane";
import g_free_camping_near_perth, { faq as faq_g_free_camping_near_perth } from "@/lib/costs/free-camping-near-perth";
import g_free_camping_near_adelaide, { faq as faq_g_free_camping_near_adelaide } from "@/lib/costs/free-camping-near-adelaide";
import g_free_camping_near_cairns, { faq as faq_g_free_camping_near_cairns } from "@/lib/costs/free-camping-near-cairns";
import g_free_camping_near_darwin, { faq as faq_g_free_camping_near_darwin } from "@/lib/costs/free-camping-near-darwin";
import g_free_camping_near_canberra, { faq as faq_g_free_camping_near_canberra } from "@/lib/costs/free-camping-near-canberra";

/** Guides added by the A4 growth lane (free camping near cities, powered sites, regional WA and gear). Each lives in lib/costs/<slug>.ts. */
export const a4Articles: Article[] = [g_free_camping_near_sydney, g_free_camping_near_melbourne, g_free_camping_near_brisbane, g_free_camping_near_perth, g_free_camping_near_adelaide, g_free_camping_near_cairns, g_free_camping_near_darwin, g_free_camping_near_canberra];
export const a4Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_free_camping_near_sydney.slug]: faq_g_free_camping_near_sydney,
  [g_free_camping_near_melbourne.slug]: faq_g_free_camping_near_melbourne,
  [g_free_camping_near_brisbane.slug]: faq_g_free_camping_near_brisbane,
  [g_free_camping_near_perth.slug]: faq_g_free_camping_near_perth,
  [g_free_camping_near_adelaide.slug]: faq_g_free_camping_near_adelaide,
  [g_free_camping_near_cairns.slug]: faq_g_free_camping_near_cairns,
  [g_free_camping_near_darwin.slug]: faq_g_free_camping_near_darwin,
  [g_free_camping_near_canberra.slug]: faq_g_free_camping_near_canberra,
};

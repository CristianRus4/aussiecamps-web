import type { Article } from "@/lib/site";
import g_tanami_track_camping_guide, { faq as faq_g_tanami_track_camping_guide } from "@/lib/costs/tanami-track-camping-guide";
import g_oodnadatta_track_camping_guide, { faq as faq_g_oodnadatta_track_camping_guide } from "@/lib/costs/oodnadatta-track-camping-guide";

/** Guides added by the A7 growth lane (outback tracks and remote parks). Each lives in lib/costs/<slug>.ts. */
export const a7Articles: Article[] = [g_oodnadatta_track_camping_guide, g_tanami_track_camping_guide];
export const a7Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_oodnadatta_track_camping_guide.slug]: faq_g_oodnadatta_track_camping_guide,
  [g_tanami_track_camping_guide.slug]: faq_g_tanami_track_camping_guide,
};

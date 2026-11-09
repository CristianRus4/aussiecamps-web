import type { Article } from "@/lib/site";
import g_free_camping_broken_hill, { faq as faq_g_free_camping_broken_hill } from "@/lib/costs/free-camping-broken-hill";
import g_free_camping_coober_pedy, { faq as faq_g_free_camping_coober_pedy } from "@/lib/costs/free-camping-coober-pedy";
import g_free_camping_longreach, { faq as faq_g_free_camping_longreach } from "@/lib/costs/free-camping-longreach";
import g_free_camping_echuca, { faq as faq_g_free_camping_echuca } from "@/lib/costs/free-camping-echuca";
import g_free_camping_jervis_bay, { faq as faq_g_free_camping_jervis_bay } from "@/lib/costs/free-camping-jervis-bay";
import g_free_camping_batemans_bay, { faq as faq_g_free_camping_batemans_bay } from "@/lib/costs/free-camping-batemans-bay";
import g_free_camping_margaret_river, { faq as faq_g_free_camping_margaret_river } from "@/lib/costs/free-camping-margaret-river";
import g_free_camping_exmouth, { faq as faq_g_free_camping_exmouth } from "@/lib/costs/free-camping-exmouth";
import g_free_camping_savannah_way, { faq as faq_g_free_camping_savannah_way } from "@/lib/costs/free-camping-savannah-way";
import g_free_camping_queensland_outback, { faq as faq_g_free_camping_queensland_outback } from "@/lib/costs/free-camping-queensland-outback";
import g_camping_near_uluru, { faq as faq_g_camping_near_uluru } from "@/lib/costs/camping-near-uluru";
import g_kgari_fraser_island_camping_permits, { faq as faq_g_kgari_fraser_island_camping_permits } from "@/lib/costs/kgari-fraser-island-camping-permits";

/** Guides added by the A5 growth lane (free camping and permits in small towns and outback places). Each lives in lib/costs/<slug>.ts. */
export const a5Articles: Article[] = [g_free_camping_broken_hill, g_free_camping_coober_pedy, g_free_camping_longreach, g_free_camping_echuca, g_free_camping_jervis_bay, g_free_camping_batemans_bay, g_free_camping_margaret_river, g_free_camping_exmouth, g_free_camping_savannah_way, g_free_camping_queensland_outback, g_camping_near_uluru, g_kgari_fraser_island_camping_permits];
export const a5Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_free_camping_broken_hill.slug]: faq_g_free_camping_broken_hill,
  [g_free_camping_coober_pedy.slug]: faq_g_free_camping_coober_pedy,
  [g_free_camping_longreach.slug]: faq_g_free_camping_longreach,
  [g_free_camping_echuca.slug]: faq_g_free_camping_echuca,
  [g_free_camping_jervis_bay.slug]: faq_g_free_camping_jervis_bay,
  [g_free_camping_batemans_bay.slug]: faq_g_free_camping_batemans_bay,
  [g_free_camping_margaret_river.slug]: faq_g_free_camping_margaret_river,
  [g_free_camping_exmouth.slug]: faq_g_free_camping_exmouth,
  [g_free_camping_savannah_way.slug]: faq_g_free_camping_savannah_way,
  [g_free_camping_queensland_outback.slug]: faq_g_free_camping_queensland_outback,
  [g_camping_near_uluru.slug]: faq_g_camping_near_uluru,
  [g_kgari_fraser_island_camping_permits.slug]: faq_g_kgari_fraser_island_camping_permits,
};

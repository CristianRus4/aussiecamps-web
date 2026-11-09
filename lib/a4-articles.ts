import type { Article } from "@/lib/site";
import g_free_camping_near_sydney, { faq as faq_g_free_camping_near_sydney } from "@/lib/costs/free-camping-near-sydney";
import g_free_camping_near_melbourne, { faq as faq_g_free_camping_near_melbourne } from "@/lib/costs/free-camping-near-melbourne";
import g_free_camping_near_brisbane, { faq as faq_g_free_camping_near_brisbane } from "@/lib/costs/free-camping-near-brisbane";
import g_free_camping_near_perth, { faq as faq_g_free_camping_near_perth } from "@/lib/costs/free-camping-near-perth";
import g_free_camping_near_adelaide, { faq as faq_g_free_camping_near_adelaide } from "@/lib/costs/free-camping-near-adelaide";
import g_free_camping_near_cairns, { faq as faq_g_free_camping_near_cairns } from "@/lib/costs/free-camping-near-cairns";
import g_free_camping_near_darwin, { faq as faq_g_free_camping_near_darwin } from "@/lib/costs/free-camping-near-darwin";
import g_free_camping_near_canberra, { faq as faq_g_free_camping_near_canberra } from "@/lib/costs/free-camping-near-canberra";
import g_powered_campsites_australia_by_state, { faq as faq_g_powered_campsites_australia_by_state } from "@/lib/costs/powered-campsites-australia-by-state";
import g_esperance_camping_guide, { faq as faq_g_esperance_camping_guide } from "@/lib/costs/esperance-camping-guide";
import g_karijini_national_park_camping, { faq as faq_g_karijini_national_park_camping } from "@/lib/costs/karijini-national-park-camping";
import g_kalbarri_coral_coast_camping, { faq as faq_g_kalbarri_coral_coast_camping } from "@/lib/costs/kalbarri-coral-coast-camping";
import g_byron_noosa_gold_coast_campervan_rules, { faq as faq_g_byron_noosa_gold_coast_campervan_rules } from "@/lib/costs/byron-noosa-gold-coast-campervan-rules";
import g_campervan_holiday_with_kids_australia, { faq as faq_g_campervan_holiday_with_kids_australia } from "@/lib/costs/campervan-holiday-with-kids-australia";
import g_rest_areas_western_australia_south_australia, { faq as faq_g_rest_areas_western_australia_south_australia } from "@/lib/costs/rest-areas-western-australia-south-australia";
import g_buying_camping_gear_australia, { faq as faq_g_buying_camping_gear_australia } from "@/lib/costs/buying-camping-gear-australia";

/** Guides added by the A4 growth lane (free camping near cities, powered sites, regional WA and gear). Each lives in lib/costs/<slug>.ts. */
export const a4Articles: Article[] = [g_free_camping_near_sydney, g_free_camping_near_melbourne, g_free_camping_near_brisbane, g_free_camping_near_perth, g_free_camping_near_adelaide, g_free_camping_near_cairns, g_free_camping_near_darwin, g_free_camping_near_canberra, g_powered_campsites_australia_by_state, g_esperance_camping_guide, g_karijini_national_park_camping, g_kalbarri_coral_coast_camping, g_byron_noosa_gold_coast_campervan_rules, g_campervan_holiday_with_kids_australia, g_rest_areas_western_australia_south_australia, g_buying_camping_gear_australia];
export const a4Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_free_camping_near_sydney.slug]: faq_g_free_camping_near_sydney,
  [g_free_camping_near_melbourne.slug]: faq_g_free_camping_near_melbourne,
  [g_free_camping_near_brisbane.slug]: faq_g_free_camping_near_brisbane,
  [g_free_camping_near_perth.slug]: faq_g_free_camping_near_perth,
  [g_free_camping_near_adelaide.slug]: faq_g_free_camping_near_adelaide,
  [g_free_camping_near_cairns.slug]: faq_g_free_camping_near_cairns,
  [g_free_camping_near_darwin.slug]: faq_g_free_camping_near_darwin,
  [g_free_camping_near_canberra.slug]: faq_g_free_camping_near_canberra,
  [g_powered_campsites_australia_by_state.slug]: faq_g_powered_campsites_australia_by_state,
  [g_esperance_camping_guide.slug]: faq_g_esperance_camping_guide,
  [g_karijini_national_park_camping.slug]: faq_g_karijini_national_park_camping,
  [g_kalbarri_coral_coast_camping.slug]: faq_g_kalbarri_coral_coast_camping,
  [g_byron_noosa_gold_coast_campervan_rules.slug]: faq_g_byron_noosa_gold_coast_campervan_rules,
  [g_campervan_holiday_with_kids_australia.slug]: faq_g_campervan_holiday_with_kids_australia,
  [g_rest_areas_western_australia_south_australia.slug]: faq_g_rest_areas_western_australia_south_australia,
  [g_buying_camping_gear_australia.slug]: faq_g_buying_camping_gear_australia,
};

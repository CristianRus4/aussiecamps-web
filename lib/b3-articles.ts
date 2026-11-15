import type { Article } from "@/lib/site";
import g_wilsons_promontory_camping, { faq as faq_g_wilsons_promontory_camping } from "@/lib/costs/wilsons-promontory-camping";
import g_bushwalking_camp_rules_etiquette_australia, { faq as faq_g_bushwalking_camp_rules_etiquette_australia } from "@/lib/costs/bushwalking-camp-rules-etiquette-australia";
import g_easy_overnight_bushwalks_huts_families, { faq as faq_g_easy_overnight_bushwalks_huts_families } from "@/lib/costs/easy-overnight-bushwalks-huts-families";
import g_best_multi_day_walks_australia_2026_27, { faq as faq_g_best_multi_day_walks_australia_2026_27 } from "@/lib/costs/best-multi-day-walks-australia-2026-27";

/** Multi-day walk, park and city camping guides added by the aus-b3 lane. Each lives in lib/costs/<slug>.ts. */
export const b3Articles: Article[] = [g_best_multi_day_walks_australia_2026_27, g_easy_overnight_bushwalks_huts_families, g_bushwalking_camp_rules_etiquette_australia, g_wilsons_promontory_camping];
export const b3Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_best_multi_day_walks_australia_2026_27.slug]: faq_g_best_multi_day_walks_australia_2026_27,
  [g_easy_overnight_bushwalks_huts_families.slug]: faq_g_easy_overnight_bushwalks_huts_families,
  [g_bushwalking_camp_rules_etiquette_australia.slug]: faq_g_bushwalking_camp_rules_etiquette_australia,
  [g_wilsons_promontory_camping.slug]: faq_g_wilsons_promontory_camping,
};

import type { Article } from "@/lib/site";
import g_campfire_cooking_damper_australia, { faq as faq_g_campfire_cooking_damper_australia } from "@/lib/costs/campfire-cooking-damper-australia";
import g_easy_camping_breakfasts_australia, { faq as faq_g_easy_camping_breakfasts_australia } from "@/lib/costs/easy-camping-breakfasts-australia";
import g_camper_trailer_guide_australia, { faq as faq_g_camper_trailer_guide_australia } from "@/lib/costs/camper-trailer-guide-australia";

/** Guides added by the A9 growth lane (camp cooking and trailers). Each lives in lib/costs/<slug>.ts. */
export const a9Articles: Article[] = [g_campfire_cooking_damper_australia, g_easy_camping_breakfasts_australia, g_camper_trailer_guide_australia];
export const a9Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_campfire_cooking_damper_australia.slug]: faq_g_campfire_cooking_damper_australia,
  [g_easy_camping_breakfasts_australia.slug]: faq_g_easy_camping_breakfasts_australia,
  [g_camper_trailer_guide_australia.slug]: faq_g_camper_trailer_guide_australia,
};

import type { Article } from "@/lib/site";
import g_campfire_cooking_damper_australia, { faq as faq_g_campfire_cooking_damper_australia } from "@/lib/costs/campfire-cooking-damper-australia";

/** Guides added by the A9 growth lane (camp cooking and trailers). Each lives in lib/costs/<slug>.ts. */
export const a9Articles: Article[] = [g_campfire_cooking_damper_australia];
export const a9Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_campfire_cooking_damper_australia.slug]: faq_g_campfire_cooking_damper_australia,
};

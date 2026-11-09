import type { Article } from "@/lib/site";
import g_safe_swimming_queensland_crocodiles_stingers, { faq as faq_g_safe_swimming_queensland_crocodiles_stingers } from "@/lib/costs/safe-swimming-queensland-crocodiles-stingers";
import g_stargazing_camps_northern_territory, { faq as faq_g_stargazing_camps_northern_territory } from "@/lib/costs/stargazing-camps-northern-territory";
import g_glow_worm_caves_camping_australia, { faq as faq_g_glow_worm_caves_camping_australia } from "@/lib/costs/glow-worm-caves-camping-australia";
import g_free_camping_near_shepparton_goulburn_valley, { faq as faq_g_free_camping_near_shepparton_goulburn_valley } from "@/lib/costs/free-camping-near-shepparton-goulburn-valley";

/** Guides added by the A8 growth lane. Each lives in lib/costs/<slug>.ts. */
export const a8Articles: Article[] = [g_free_camping_near_shepparton_goulburn_valley, g_glow_worm_caves_camping_australia, g_stargazing_camps_northern_territory, g_safe_swimming_queensland_crocodiles_stingers];
export const a8Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_free_camping_near_shepparton_goulburn_valley.slug]: faq_g_free_camping_near_shepparton_goulburn_valley,
  [g_glow_worm_caves_camping_australia.slug]: faq_g_glow_worm_caves_camping_australia,
  [g_stargazing_camps_northern_territory.slug]: faq_g_stargazing_camps_northern_territory,
  [g_safe_swimming_queensland_crocodiles_stingers.slug]: faq_g_safe_swimming_queensland_crocodiles_stingers,
};

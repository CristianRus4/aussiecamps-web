import type { Article } from "@/lib/site";
import g_free_camping_broken_hill, { faq as faq_g_free_camping_broken_hill } from "@/lib/costs/free-camping-broken-hill";
import g_free_camping_coober_pedy, { faq as faq_g_free_camping_coober_pedy } from "@/lib/costs/free-camping-coober-pedy";

/** Guides added by the A5 growth lane (free camping and permits in small towns and outback places). Each lives in lib/costs/<slug>.ts. */
export const a5Articles: Article[] = [g_free_camping_broken_hill, g_free_camping_coober_pedy];
export const a5Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_free_camping_broken_hill.slug]: faq_g_free_camping_broken_hill,
  [g_free_camping_coober_pedy.slug]: faq_g_free_camping_coober_pedy,
};

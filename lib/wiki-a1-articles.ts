import type { Article } from "@/lib/site";
import g_is_wikicamps_free, { faq as faq_g_is_wikicamps_free } from "@/lib/costs/is-wikicamps-free";

/** Guides added by the wiki-a1 growth lane: WikiCamps switcher articles 1 to 5. Each lives in lib/costs/<slug>.ts. */
export const wikiA1Articles: Article[] = [g_is_wikicamps_free];
export const wikiA1Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_is_wikicamps_free.slug]: faq_g_is_wikicamps_free,
};

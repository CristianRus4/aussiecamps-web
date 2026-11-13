import type { Article } from "@/lib/site";
import g_is_wikicamps_free, { faq as faq_g_is_wikicamps_free } from "@/lib/costs/is-wikicamps-free";
import g_is_wikicamps_worth_it, { faq as faq_g_is_wikicamps_worth_it } from "@/lib/costs/is-wikicamps-worth-it";
import g_wikicamps_vs_aussiecamps, { faq as faq_g_wikicamps_vs_aussiecamps } from "@/lib/costs/wikicamps-vs-aussiecamps";
import g_wikicamps_for_pc, { faq as faq_g_wikicamps_for_pc } from "@/lib/costs/wikicamps-for-pc";
import g_wikicamps_login_account, { faq as faq_g_wikicamps_login_account } from "@/lib/costs/wikicamps-login-account";

/** Guides added by the wiki-a1 growth lane: WikiCamps switcher articles 1 to 5. Each lives in lib/costs/<slug>.ts. */
export const wikiA1Articles: Article[] = [g_is_wikicamps_free, g_is_wikicamps_worth_it, g_wikicamps_vs_aussiecamps, g_wikicamps_for_pc, g_wikicamps_login_account];
export const wikiA1Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_is_wikicamps_free.slug]: faq_g_is_wikicamps_free,
  [g_is_wikicamps_worth_it.slug]: faq_g_is_wikicamps_worth_it,
  [g_wikicamps_vs_aussiecamps.slug]: faq_g_wikicamps_vs_aussiecamps,
  [g_wikicamps_for_pc.slug]: faq_g_wikicamps_for_pc,
  [g_wikicamps_login_account.slug]: faq_g_wikicamps_login_account,
};

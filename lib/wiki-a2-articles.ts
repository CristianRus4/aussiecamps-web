import type { Article } from "@/lib/site";
import g_wikicamps_trip_planner_alternative, { faq as faq_g_wikicamps_trip_planner_alternative } from "@/lib/costs/wikicamps-trip-planner-alternative";

/** WikiCamps switcher guides added by the wiki-a2 lane (articles 6 to 10 of the switcher plan). Each lives in lib/costs/<slug>.ts. */
export const wikiA2Articles: Article[] = [g_wikicamps_trip_planner_alternative];
export const wikiA2Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_wikicamps_trip_planner_alternative.slug]: faq_g_wikicamps_trip_planner_alternative,
};

import type { Article } from "@/lib/site";
import g_wikicamps_trip_planner_alternative, { faq as faq_g_wikicamps_trip_planner_alternative } from "@/lib/costs/wikicamps-trip-planner-alternative";
import g_does_wikicamps_work_offline, { faq as faq_g_does_wikicamps_work_offline } from "@/lib/costs/does-wikicamps-work-offline";
import g_moving_from_wikicamps, { faq as faq_g_moving_from_wikicamps } from "@/lib/costs/moving-from-wikicamps";
import g_share_camping_trip_aussiecamps, { faq as faq_g_share_camping_trip_aussiecamps } from "@/lib/costs/share-camping-trip-aussiecamps";
import g_free_camps_missing_wikicamps, { faq as faq_g_free_camps_missing_wikicamps } from "@/lib/costs/free-camps-missing-wikicamps";

/** WikiCamps switcher guides added by the wiki-a2 lane (articles 6 to 10 of the switcher plan). Each lives in lib/costs/<slug>.ts. */
export const wikiA2Articles: Article[] = [g_wikicamps_trip_planner_alternative, g_does_wikicamps_work_offline, g_moving_from_wikicamps, g_share_camping_trip_aussiecamps, g_free_camps_missing_wikicamps];
export const wikiA2Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_wikicamps_trip_planner_alternative.slug]: faq_g_wikicamps_trip_planner_alternative,
  [g_does_wikicamps_work_offline.slug]: faq_g_does_wikicamps_work_offline,
  [g_moving_from_wikicamps.slug]: faq_g_moving_from_wikicamps,
  [g_share_camping_trip_aussiecamps.slug]: faq_g_share_camping_trip_aussiecamps,
  [g_free_camps_missing_wikicamps.slug]: faq_g_free_camps_missing_wikicamps,
};

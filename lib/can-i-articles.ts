import type { Article } from "@/lib/site";
import page1, { faq as faq1 } from "@/lib/can-i/can-i-camp-on-the-beach-in-australia";
import page2, { faq as faq2 } from "@/lib/can-i/can-i-drive-on-the-beach-in-australia";
import page3, { faq as faq3 } from "@/lib/can-i/can-i-camp-in-a-national-park-without-booking-in-australia";
import page4, { faq as faq4 } from "@/lib/can-i/can-i-collect-firewood-while-camping-in-australia";
import page5, { faq as faq5 } from "@/lib/can-i/can-i-fly-a-drone-while-camping-in-australia";
import page6, { faq as faq6 } from "@/lib/can-i/can-i-fish-without-a-licence-while-camping-in-australia";
import page7, { faq as faq7 } from "@/lib/can-i/can-i-use-a-generator-at-a-campsite-in-australia";
import page8, { faq as faq8 } from "@/lib/can-i/can-i-stay-overnight-at-a-rest-area-in-australia";
import page9, { faq as faq9 } from "@/lib/can-i/can-i-camp-on-aboriginal-land-without-a-permit";
import page10, { faq as faq10 } from "@/lib/can-i/can-i-take-a-campervan-or-caravan-on-the-spirit-of-tasmania";
import page11, { faq as faq11 } from "@/lib/can-i/can-i-camp-on-private-land-or-a-farm-in-australia";
import page12, { faq as faq12 } from "@/lib/can-i/can-i-take-alcohol-into-restricted-areas-on-an-outback-road-trip";
import page13, { faq as faq13 } from "@/lib/can-i/can-i-camp-in-a-state-forest-in-australia";
import page14, { faq as faq14 } from "@/lib/can-i/can-i-sleep-in-a-campervan-in-the-city-in-australia";
import page15, { faq as faq15 } from "@/lib/can-i/can-i-drive-a-2wd-hire-campervan-on-4wd-roads-in-australia";

/**
 * "Can I...?" answer pages. Each page lives in lib/can-i/<slug>.ts and exports its article (default)
 * and its FAQ. They are listed here in publish order; lib/site.ts spreads `canIArticles` into the
 * written guides and attaches `canIFaqs` by slug.
 */
export const canIArticles: Article[] = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15];
export const canIFaqs: Record<string, readonly (readonly [string, string])[]> = {
  [page1.slug]: faq1,
  [page2.slug]: faq2,
  [page3.slug]: faq3,
  [page4.slug]: faq4,
  [page5.slug]: faq5,
  [page6.slug]: faq6,
  [page7.slug]: faq7,
  [page8.slug]: faq8,
  [page9.slug]: faq9,
  [page10.slug]: faq10,
  [page11.slug]: faq11,
  [page12.slug]: faq12,
  [page13.slug]: faq13,
  [page14.slug]: faq14,
  [page15.slug]: faq15,
};

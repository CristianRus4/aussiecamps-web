import type { Article } from "@/lib/site";
import page1, { faq as faq1 } from "@/lib/costs/campervan-hire-cost-australia-2026";
import page2, { faq as faq2 } from "@/lib/costs/buying-a-campervan-australia-working-holiday";
import page3, { faq as faq3 } from "@/lib/costs/selling-a-campervan-australia-before-you-leave";
import page4, { faq as faq4 } from "@/lib/costs/working-holiday-road-trip-budget-australia-2026";
import page5, { faq as faq5 } from "@/lib/costs/campervan-vs-caravan-australia";
import page6, { faq as faq6 } from "@/lib/costs/powered-vs-unpowered-sites-australia";
import page7, { faq as faq7 } from "@/lib/costs/holiday-park-prices-australia-2026";
import page8, { faq as faq8 } from "@/lib/costs/first-two-weeks-working-holiday-australia";
import page9, { faq as faq9 } from "@/lib/costs/bushfire-safety-camping-australia";
import page10, { faq as faq10 } from "@/lib/costs/school-holidays-australia-2027";
import page11, { faq as faq11 } from "@/lib/costs/petrol-diesel-prices-australia-2026";
import page12, { faq as faq12 } from "@/lib/costs/toll-roads-australia-hire-car-campervan";
import freeNsw, { faq as faqFreeNsw } from "@/lib/costs/free-camping-new-south-wales";

/**
 * Campervan hire, buying, selling, budget, comparison, price and season-planning guides. Each page lives
 * in lib/costs/<slug>.ts and exports its article (default) and its FAQ. They are listed here in the
 * order they were written; lib/site.ts spreads `costsArticles` into the written guides and attaches
 * `costsFaqs` by slug.
 */
export const costsArticles: Article[] = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, freeNsw];
export const costsFaqs: Record<string, readonly (readonly [string, string])[]> = {
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
  [freeNsw.slug]: faqFreeNsw,
};

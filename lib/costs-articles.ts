import type { Article } from "@/lib/site";
import page1, { faq as faq1 } from "@/lib/costs/campervan-hire-cost-australia-2026";
import page2, { faq as faq2 } from "@/lib/costs/buying-a-campervan-australia-working-holiday";

/**
 * Campervan hire, buying, selling, budget and comparison guides. Each page lives in lib/costs/<slug>.ts
 * and exports its article (default) and its FAQ. They are listed here in publish order; lib/site.ts
 * spreads `costsArticles` into the written guides and attaches `costsFaqs` by slug.
 */
export const costsArticles: Article[] = [page1, page2];
export const costsFaqs: Record<string, readonly (readonly [string, string])[]> = {
  [page1.slug]: faq1,
  [page2.slug]: faq2,
};

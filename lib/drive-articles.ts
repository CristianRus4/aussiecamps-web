import type { Article } from "@/lib/site";
import page1, { faq as faq1 } from "@/lib/drives/sydney-to-melbourne-drive";

/**
 * City-to-city drive guides. Each page lives in lib/drives/<slug>.ts and exports its article (default)
 * and its FAQ. They are listed here in publish order; lib/site.ts spreads `driveArticles` into the
 * written guides and attaches `driveFaqs` by slug.
 */
export const driveArticles: Article[] = [page1];
export const driveFaqs: Record<string, readonly (readonly [string, string])[]> = {
  [page1.slug]: faq1,
};

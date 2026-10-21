import type { Article } from "@/lib/site";

/**
 * "Can I...?" answer pages. Each page lives in lib/can-i/<slug>.ts and exports its article (default)
 * and its FAQ. They are listed here in publish order; lib/site.ts spreads `canIArticles` into the
 * written guides and attaches `canIFaqs` by slug.
 */
export const canIArticles: Article[] = [];
export const canIFaqs: Record<string, readonly (readonly [string, string])[]> = {};

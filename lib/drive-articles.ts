import type { Article } from "@/lib/site";

/**
 * City-to-city drive guides. Each page lives in lib/drives/<slug>.ts and exports its article (default)
 * and its FAQ. They are listed here in publish order; lib/site.ts spreads `driveArticles` into the
 * written guides and attaches `driveFaqs` by slug.
 */
export const driveArticles: Article[] = [];
export const driveFaqs: Record<string, readonly (readonly [string, string])[]> = {};

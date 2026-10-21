import type { Article } from "@/lib/site";
import page1, { faq as faq1 } from "@/lib/drives/sydney-to-melbourne-drive";
import page2, { faq as faq2 } from "@/lib/drives/brisbane-to-sydney-drive";
import page3, { faq as faq3 } from "@/lib/drives/melbourne-to-brisbane-drive";
import page4, { faq as faq4 } from "@/lib/drives/sydney-to-adelaide-drive";
import page5, { faq as faq5 } from "@/lib/drives/melbourne-to-canberra-drive";
import page6, { faq as faq6 } from "@/lib/drives/brisbane-to-byron-bay-drive";
import page7, { faq as faq7 } from "@/lib/drives/darwin-to-alice-springs-drive";
import page8, { faq as faq8 } from "@/lib/drives/cairns-to-darwin-drive";
import page9, { faq as faq9 } from "@/lib/drives/perth-to-exmouth-drive";
import page10, { faq as faq10 } from "@/lib/drives/broome-to-darwin-drive";
import page11, { faq as faq11 } from "@/lib/drives/adelaide-to-melbourne-drive";
import page12, { faq as faq12 } from "@/lib/drives/brisbane-to-cairns-drive";
import page13, { faq as faq13 } from "@/lib/drives/sydney-to-canberra-drive";
import page14, { faq as faq14 } from "@/lib/drives/perth-to-albany-drive";
import page15, { faq as faq15 } from "@/lib/drives/perth-to-margaret-river-drive";

import page19, { faq as faq19 } from "@/lib/drives/melbourne-to-mildura-drive";
import page20, { faq as faq20 } from "@/lib/drives/townsville-to-mount-isa-drive";

/**
 * City-to-city drive guides. Each page lives in lib/drives/<slug>.ts and exports its article (default)
 * and its FAQ. They are listed here in publish order; lib/site.ts spreads `driveArticles` into the
 * written guides and attaches `driveFaqs` by slug.
 */
export const driveArticles: Article[] = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page19, page20];
export const driveFaqs: Record<string, readonly (readonly [string, string])[]> = {
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
  [page19.slug]: faq19,
  [page20.slug]: faq20,
};

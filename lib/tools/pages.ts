import type { Metadata } from "next";
import productFacts from "../data/product-facts.json";
import { SITE_URL, sitePath } from "../site";
import { isTranslated, routedLocales, type LocaleCode } from "../localized";
import { localeRoot } from "../locales";
import { alternatesFor, ogLocale } from "../seo";
import { smartBannerContent } from "../app-store";
import { toolKeys, toolStrings, uiStrings, type ToolKey, type UiKey } from "../source-strings";
import { isToolTranslated, toolCopy } from "./strings";

/** The guides each tool page sends readers to (and which should link back to it). */
export const toolGuides: Record<ToolKey, string[]> = {
  "fuel-cost-calculator": ["australia-road-trip-fuel-cost-2026", "road-trip-fuel-planning-australia", "campervan-road-trip-budget-australia"],
  "drive-time-calculator": ["australia-road-trip-fatigue-wildlife-safety", "road-trip-fuel-planning-australia", "driving-in-australia-road-rules-visitors"],
  "campsite-cost-calculator": ["camping-fees-australia-2026", "accommodation-costs-australia-2026", "campervan-road-trip-budget-australia"],
  "currency-converter": ["australia-travel-cost-2026", "australia-grocery-prices-2026", "eating-out-australia-prices-2026"],
  "water-tank-calculator": ["camping-water-planning", "dump-points-australia-guide", "campervan-road-trip-budget-australia"],
};

/** Official sources behind a tool's default figures. */
export const toolSources: Partial<Record<ToolKey, { label: string; url: string }[]>> = {
  "fuel-cost-calculator": [{ label: "Australian Government Fuel Plan statistics", url: "https://fuelplan.gov.au/fuel-statistics" }],
  "currency-converter": [{ label: "Reserve Bank of Australia exchange rates", url: "https://www.rba.gov.au/statistics/frequency/exchange-rates.html" }],
};

/** The ui keys that name each calculator, already translated for every published locale. */
export const toolEyebrow: Record<ToolKey, UiKey> = {
  "fuel-cost-calculator": "fuelEyebrow", "drive-time-calculator": "driveEyebrow", "campsite-cost-calculator": "campEyebrow",
  "currency-converter": "currencyEyebrow", "water-tank-calculator": "tankEyebrow",
};

export const toolPath = (tool: ToolKey, locale: "en" | LocaleCode) => sitePath(`${localeRoot(locale)}/tools/${tool}`);
export const toolPageKey = (tool: ToolKey) => `tools/${tool}`;

/** A localised tool page enters search only when the locale is live and this tool is translated. */
export const isToolIndexable = (tool: ToolKey, locale: "en" | LocaleCode) =>
  locale === "en" || (routedLocales.includes(locale) && isTranslated(locale) && isToolTranslated(locale, tool));

/** Fills {dumpPoints}, {water}, {restAreas} and {campgrounds} from the app data. */
export function fillCounts(text: string, intl: string) {
  const totals = productFacts.totals as Record<string, number>;
  return text.replace(/\{([a-zA-Z]+)\}/g, (match, key: string) => (key in totals ? new Intl.NumberFormat(intl).format(totals[key]) : match));
}

export function toolMetadata(tool: ToolKey, locale: "en" | LocaleCode): Metadata {
  const { copy } = toolCopy(locale, tool);
  const indexable = isToolIndexable(tool, locale);
  const path = toolPath(tool, locale);
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    // hreflang only on an indexable edition, and only once a second language edition is indexable.
    alternates: { canonical: path, languages: indexable ? alternatesFor(toolPageKey(tool)) : undefined },
    openGraph: {
      type: "website", siteName: "AussieCamps", locale: ogLocale(locale),
      title: copy.metaTitle, description: copy.metaDescription, url: `${SITE_URL}${path}`, images: [{ url: "/images/aussie-og.webp", alt: "AussieCamps" }],
    },
    robots: { index: indexable, follow: true, googleBot: { index: indexable, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    // The root layout's banner carries the English campaign; a localised page reports its own.
    other: { "apple-itunes-app": smartBannerContent(locale) },
  };
}

export const toolsIndexMetadata = { title: toolStrings.index.metaTitle, description: toolStrings.index.metaDescription };
export { toolKeys, uiStrings };

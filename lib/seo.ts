import { APP_ID, APP_STORE_URL, SITE_URL, sitePath } from "@/lib/site";
import { articleDates, translationDate } from "@/lib/article-dates";
import { englishLocale, htmlLang, liveLocales, localeEntry, localeRoot, type LocaleCode } from "@/lib/locales";
import { routesFor } from "@/lib/routes";

export const defaultHreflang = englishLocale.hreflang[0];
export const defaultOgLocale = englishLocale.og;
/** The Open Graph locale of a language edition. */
export const ogLocale = (code: LocaleCode | "en") => (code === "en" ? englishLocale.og : localeEntry(code).og);
/** Open Graph alternates for a page: every other live language. */
export const ogAlternates = (code: LocaleCode | "en") => [englishLocale.og, ...liveLocales.map((other) => localeEntry(other).og)].filter((og) => og !== ogLocale(code));

/**
 * The hreflang set for one page, from the route manifest.
 *
 * Only language editions that are indexable are listed: English, plus every live locale where this
 * page is complete (its translation passes the completeness gate). x-default is English. Google only
 * honours hreflang when every listed page lists the others back, and a noindexed page must never be
 * an alternate, so every page derives its set from the same list and a noindexed page emits none.
 * A page with no other language edition returns undefined, as there is nothing to declare.
 *
 * Paths are relative to the site root; Next resolves them against metadataBase.
 */
export function alternatesFor(pageKey: string): Record<string, string> | undefined {
  const editions = routesFor(pageKey).filter((route) => route.indexable && route.kind !== "crawler");
  if (editions.length < 2) return undefined;
  const tags: Record<string, string> = {};
  for (const route of editions) {
    const codes = route.locale === "en" ? [...englishLocale.hreflang] : localeEntry(route.locale).hreflang;
    for (const code of codes) tags[code] = route.path;
  }
  const english = editions.find((route) => route.locale === "en");
  if (english) tags["x-default"] = english.path;
  return tags;
}

export { APP_ID };
const LOGO = `${SITE_URL}/images/aussiecamps-app-icon.png`;
const SCREENSHOT = `${SITE_URL}/images/aussie-og.webp`;

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "AussieCamps",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: LOGO },
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "AussieCamps",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: [englishLocale.htmlLang, ...liveLocales.map(htmlLang)],
};

/**
 * The app itself, described once. `MobileApplication` is what Google reads for app rich results, and
 * the free `offers` block is what stops it being treated as paid. No rating is declared: inventing
 * one would be a fabricated review signal.
 */
const application = {
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#app`,
  name: "AussieCamps",
  // Keep this identical to the App Store listing name once the app is published.
  alternateName: "AussieCamps: Australia Camping Map",
  operatingSystem: "iOS",
  applicationCategory: "TravelApplication",
  applicationSubCategory: "Camping and road trip planner",
  url: SITE_URL,
  installUrl: APP_STORE_URL,
  downloadUrl: APP_STORE_URL,
  screenshot: SCREENSHOT,
  image: LOGO,
  inLanguage: [englishLocale.htmlLang, ...liveLocales.map(htmlLang)],
  availableOnDevice: "iPhone",
  countriesSupported: "AU",
  publisher: { "@id": `${SITE_URL}/#organization` },
  offers: { "@type": "Offer", price: "0", priceCurrency: "AUD", availability: "https://schema.org/InStock" },
  featureList: [
    "Offline directory of 74,000+ Australian places",
    "Campgrounds, caravan parks, roofed accommodation, rest areas, dump points and potable water",
    "Filters for fee, amenities, access, state, rating and online booking",
    "Smart and custom collections",
    "Multi-stop road trip planner with distance, directions, dates and notes",
    "Weather on every place and every trip stop",
    "Standard, satellite and 3D maps with Street View",
    "Reported costs converted into your own currency",
  ],
};

/**
 * The homepage graph: who publishes the site, what the site is, what the app is, and the FAQ.
 *
 * Seven language editions render this, so the node identifiers matter. The publisher, the website
 * and the app are one thing each however many languages describe them, and they keep one `@id` so
 * the graph does not claim seven organisations. The page and its FAQ are genuinely per-language, so
 * they are identified by the URL they are on. Previously every locale emitted `#faq` and a different
 * `description` under the same identifiers, which asks Google to reconcile seven contradictory
 * copies of one node.
 */
export function homeSchema(
  description: string,
  faqs: readonly (readonly [string, string])[],
  page: { url?: string; inLanguage?: string } = {},
) {
  const url = page.url ?? `${SITE_URL}/`;
  const inLanguage = page.inLanguage ?? englishLocale.htmlLang;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      application,
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "AussieCamps",
        description,
        inLanguage,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#app` },
        primaryImageOfPage: { "@type": "ImageObject", url: SCREENSHOT },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
    ],
  };
}

/** Markup-free text for structured data: translated prose may carry `<a data-guide>` link markup. */
const plain = (text: string) => text.replace(/<[^>]+>/g, "");

/**
 * A guide, with the breadcrumb Google needs to show the trail under the result.
 *
 * `locale` is the edition being rendered: it sets `inLanguage`, the breadcrumb (that language's home
 * and guide index, with `guidesLabel` as the middle crumb's name) and `dateModified`, which for a
 * translation is the day the translation itself last changed.
 */
export function articleSchema(
  item: { slug: string; title: string; description: string; image: string; imageAlt: string; places: string[]; category: string; faq?: readonly (readonly [string, string])[]; sections?: { heading: string; body: string[] }[] },
  url: string,
  { locale = "en", guidesLabel = "Guides" }: { locale?: LocaleCode | "en"; guidesLabel?: string } = {},
) {
  const inLanguage = htmlLang(locale);
  const dates = articleDates(item.slug);
  const modified = locale === "en" ? dates?.modified : translationDate(item.slug, locale) ?? dates?.modified;
  const root = localeRoot(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "Article",
        headline: item.title,
        description: item.description,
        inLanguage,
        image: { "@type": "ImageObject", url: `${SITE_URL}${item.image}`, caption: item.imageAlt },
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
        // From git history, not hand-typed: see scripts/build-article-dates.mjs.
        ...(dates && { datePublished: dates.published, dateModified: modified }),
        about: item.places,
        articleSection: item.category,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      // The guide's own two questions. The same array renders the visible FAQ below the article, so
      // the markup can never say something the page does not.
      ...(item.faq?.length ? [{
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage,
        mainEntity: item.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      }] : []),
      // An app guide teaches a task in the app, so its sections are genuinely steps. Route and
      // rules guides are not tasks and get no HowTo.
      ...(item.category === "App guides" && item.sections?.length ? [{
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name: item.title,
        description: item.description,
        inLanguage,
        step: item.sections.map((section, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: section.heading,
          text: plain(section.body[0]),
          url: `${url}#step-${index + 1}`,
        })),
      }] : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: locale === "en" ? "Home" : "AussieCamps", item: `${SITE_URL}${sitePath(root || "/")}` },
          { "@type": "ListItem", position: 2, name: guidesLabel, item: `${SITE_URL}${sitePath(`${root}/guides`)}` },
          { "@type": "ListItem", position: 3, name: item.title, item: url },
        ],
      },
    ],
  };
}

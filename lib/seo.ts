import { APP_STORE_URL, SITE_URL } from "@/lib/site";
import { localeCodes, type LocaleCode } from "@/lib/localized";

/** The BCP 47 tag each locale directory is published under. */
export const hreflang: Record<LocaleCode, string> = { de: "de-DE", es: "es-ES", fr: "fr-FR", it: "it-IT", nl: "nl-NL", pt: "pt-PT" };
export const ogLocale: Record<LocaleCode, string> = { de: "de_DE", es: "es_ES", fr: "fr_FR", it: "it_IT", nl: "nl_NL", pt: "pt_PT" };
export const defaultHreflang = "en-AU";
export const defaultOgLocale = "en_AU";

/**
 * The reciprocal hreflang set for one page, given its path below the locale root.
 *
 * Every page exists in every language, so each one advertises all seven URLs plus x-default. Google
 * only honours hreflang when the references are reciprocal, which is why this is generated from one
 * place rather than written per page.
 */
export function seoLanguageTags(path: string): Record<string, string> {
  const english = path || "/";
  return {
    [defaultHreflang]: english,
    ...Object.fromEntries(localeCodes.map((code) => [hreflang[code], `/${code}${path}`])),
    "x-default": english,
  };
}

export const APP_ID = "6748379680";
const LOGO = `${SITE_URL}/images/aussiecamps-app-icon.png`;
const SCREENSHOT = `${SITE_URL}/images/aussie-hero.webp`;

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
  inLanguage: [defaultHreflang, ...localeCodes.map((code) => hreflang[code])],
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
  alternateName: "AussieCamps: Australia Camping Map",
  operatingSystem: "iOS",
  applicationCategory: "TravelApplication",
  applicationSubCategory: "Camping and road trip planner",
  url: SITE_URL,
  installUrl: APP_STORE_URL,
  downloadUrl: APP_STORE_URL,
  screenshot: SCREENSHOT,
  image: LOGO,
  inLanguage: [defaultHreflang, ...localeCodes.map((code) => hreflang[code])],
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

/** The homepage graph: who publishes the site, what the site is, what the app is, and the FAQ. */
export function homeSchema(description: string, faqs: readonly (readonly [string, string])[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      { ...website, description },
      application,
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
    ],
  };
}

/** A guide, with the breadcrumb Google needs to show the trail under the result. */
export function articleSchema(item: { slug: string; title: string; description: string; image: string; imageAlt: string; places: string[]; category: string }, url: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "Article",
        headline: item.title,
        description: item.description,
        image: { "@type": "ImageObject", url: `${SITE_URL}${item.image}`, caption: item.imageAlt },
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
        about: item.places,
        articleSection: item.category,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
          { "@type": "ListItem", position: 3, name: item.title, item: url },
        ],
      },
    ],
  };
}

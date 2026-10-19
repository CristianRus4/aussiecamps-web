import registry from "./locales.json";
import { localeCodes, type LocaleCode } from "./translations/index";

/**
 * The site's languages, read from lib/locales.json, the only place a language is declared.
 *
 * - `code` names the translation file (lib/translations/<code>.json) and the engine target.
 * - `segment` is the URL directory (/de/, /zh-hans/).
 * - `htmlLang` is the <html lang> of that locale's pages; `hreflang` lists every tag its pages are
 *   advertised under (Simplified Chinese serves zh-Hans, zh-CN and zh-SG from one URL).
 * - `og` is the Open Graph locale, `intl` the Intl locale for dates and money, `engine` the
 *   translation engine's variety, `script` latin or cjk (typography, reading time).
 * - `status`: `live` locales are built, exported, listed in the sitemap, hreflang and language
 *   switcher. `draft` locales are none of those; set LOCALES_PREVIEW=1 to render them in dev.
 * - `reviews`: whether the home page shows the traveller testimonials. Testimonials are never
 *   translated into a new language, so a locale without them neither shows nor translates them.
 *
 * Only the orchestrator flips a status. A live locale must translate the whole `ui` namespace, which
 * `npm run content:check` enforces.
 */
export type LocaleStatus = "live" | "draft";
export type LocaleScript = "latin" | "cjk";
export type LocaleEntry = {
  code: LocaleCode;
  segment: string;
  label: string;
  htmlLang: string;
  hreflang: string[];
  og: string;
  intl: string;
  engine: string;
  script: LocaleScript;
  status: LocaleStatus;
  reviews: boolean;
};

export { localeCodes, type LocaleCode };

export const locales = registry as LocaleEntry[];
const byCode = new Map(locales.map((entry) => [entry.code, entry]));
export const localeEntry = (code: LocaleCode): LocaleEntry => byCode.get(code)!;

/** The English source edition: served from the site root. */
export const englishLocale = { code: "en", segment: "", label: "English", htmlLang: "en-AU", hreflang: ["en-AU"], og: "en_AU", intl: "en-AU", script: "latin" as LocaleScript } as const;

/** Draft locales render only when previewing (`LOCALES_PREVIEW=1 npm run dev`). */
export const previewDrafts = process.env.LOCALES_PREVIEW === "1";

/** Locales that are live: exported, in the sitemap, hreflang and the language switcher. */
export const liveLocales: LocaleCode[] = localeCodes.filter((code) => localeEntry(code).status === "live");
/** Locales that have routes in this build: the live ones, plus drafts when previewing. */
export const routedLocales: LocaleCode[] = previewDrafts ? [...localeCodes] : liveLocales;

export const isLocaleCode = (value: string): value is LocaleCode => byCode.has(value as LocaleCode);
/** The locale a URL directory belongs to, if that locale has routes in this build. */
export const routedLocaleForSegment = (segment: string): LocaleCode | undefined =>
  routedLocales.find((code) => localeEntry(code).segment === segment);
/** The URL directory of a locale, `/de` or `/zh-hans`; English is the root. */
export const localeRoot = (code: LocaleCode | "en") => (code === "en" ? "" : `/${localeEntry(code).segment}`);
/** The Intl locale used to format dates, numbers and money for a locale. */
export const intlLocale = (code: LocaleCode | "en") => (code === "en" ? englishLocale.intl : localeEntry(code).intl);
export const htmlLang = (code: LocaleCode | "en") => (code === "en" ? englishLocale.htmlLang : localeEntry(code).htmlLang);
export const localeScript = (code: LocaleCode | "en"): LocaleScript => (code === "en" ? "latin" : localeEntry(code).script);

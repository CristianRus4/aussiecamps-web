import { translationFiles } from "./translations/index";
import { liveLocales, localeCodes, localeEntry, localeScript, routedLocaleForSegment, routedLocales, type LocaleCode } from "./locales";
import { consentStrings, reviewKeys, staticPages, uiStrings, type ConsentKey, type ConsentStrings, type StaticPage, type StaticPageKind, type UiStrings } from "./source-strings";
import { allArticles, articles, categories, type Article, type ArticleCategory, type ArticleSection } from "./site";

export { liveLocales, localeCodes, routedLocales, type LocaleCode };
export const localeLabel = (code: LocaleCode) => localeEntry(code).label;

/**
 * Every guide is translatable, road trips included. The list is kept as a switch in case a category
 * ever needs to stay English again: a category listed here is left out of en.json, and a locale serves
 * those guides whole in English.
 */
export const untranslatedCategories: ArticleCategory[] = [];
/** Every guide a locale publishes. Untranslated ones are served whole, in English. */
export const localeArticles = articles;
/**
 * The guides a translator is asked for, scheduled ones included: a translation can be ready before
 * its guide goes live (it is published with it), and en.json does not change on a publish day.
 */
export const translatableArticles = allArticles.filter((item) => !untranslatedCategories.includes(item.category));
export const localeCategories = categories;

type TranslatedSection = { heading?: string; body?: string[]; tips?: string[]; table?: { caption?: string; head?: string[]; rows?: string[][] } };
type TranslatedArticle = {
  title?: string; description?: string; category?: string; region?: string; imageAlt?: string; intro?: string;
  sections?: TranslatedSection[]; sources?: { label?: string }[]; faq?: [string, string][];
  priceTable?: null | { note?: string; rows?: { label?: string; unit?: string }[] };
};
type TranslationFile = {
  locale?: string;
  ui?: Partial<Record<keyof UiStrings, string>>;
  consent?: Partial<Record<ConsentKey, string>>;
  articles?: Record<string, TranslatedArticle>;
  pages?: Partial<Record<StaticPageKind, StaticPage>>;
};

const files = translationFiles as Record<LocaleCode, TranslationFile>;

/** A route segment that names a locale with routes in this build (live, or a draft when previewing). */
export const isLocale = (value: string): value is LocaleCode => routedLocaleForSegment(value) === value;

/**
 * Nothing is ever shown half-translated. That is the whole point of the three checks below.
 *
 * The failure this prevents is real and was live on this site: the English guides were rewritten and
 * expanded — one article went from three sections to seven — after their translations were
 * generated. Matching translation to English by position then put German paragraphs under unrelated
 * English headings and appended four untranslated sections underneath. A reader got a page that was
 * neither one language nor the other.
 *
 * So a translation counts only when it is *complete and structurally identical* to the English it
 * translates. Anything short of that is treated as absent, and the reader gets clean English.
 */
const filled = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;

/** A section table translates completely or not at all: same shape, every cell filled. */
function isTableComplete(english: ArticleSection["table"], translated: TranslatedSection["table"]): boolean {
  if (!english) return true;
  if (!translated || !filled(translated.caption)) return false;
  if (translated.head?.length !== english.head.length || !translated.head.every(filled)) return false;
  if (translated.rows?.length !== english.rows.length) return false;
  return english.rows.every((row, index) => translated.rows![index]?.length === row.length && translated.rows![index].every(filled));
}

export function isArticleComplete(article: Article, item: TranslatedArticle | undefined): boolean {
  if (!item) return false;
  if (![item.title, item.description, item.region, item.imageAlt, item.intro].every(filled)) return false;
  if (item.sections?.length !== article.sections.length) return false;
  const sectionsMatch = article.sections.every((section, index) => {
    const translated = item.sections![index];
    if (!filled(translated?.heading)) return false;
    if (translated.body?.length !== section.body.length || !translated.body.every(filled)) return false;
    const tips = section.tips ?? [];
    if (!isTableComplete(section.table, translated.table)) return false;
    return (translated.tips?.length ?? 0) === tips.length && (translated.tips ?? []).every(filled);
  });
  if (!sectionsMatch) return false;
  const faq = article.faq ?? [];
  if ((item.faq?.length ?? 0) !== faq.length || !(item.faq ?? []).every((pair) => pair.every(filled))) return false;
  const sources = article.sources ?? [];
  if ((item.sources?.length ?? 0) !== sources.length || !(item.sources ?? []).every((source) => filled(source.label))) return false;
  if (!article.priceTable) return true;
  const table = item.priceTable;
  return !!table && filled(table.note) && table.rows?.length === article.priceTable.rows.length
    && table.rows.every((row, index) => filled(row.label) && (filled(row.unit) || !article.priceTable!.rows[index].unit));
}

function isPageComplete(kind: StaticPageKind, page: StaticPage | undefined): boolean {
  const english = staticPages[kind];
  if (!page || !filled(page.title) || !filled(page.lede)) return false;
  if (english.effective && !filled(page.effective)) return false;
  if (page.sections?.length !== english.sections.length) return false;
  return english.sections.every((section, index) => {
    const translated = page.sections[index];
    return filled(translated?.heading) && translated.paragraphs?.length === section.paragraphs.length && translated.paragraphs.every(filled);
  });
}

/**
 * A locale is published only when **every** UI string is translated. A partial UI would put a German
 * hero above an English FAQ. Guides have a separate per-article indexability check below, so a
 * translated UI never makes an untranslated English article compete with the English site.
 */
export const isTranslated = (locale: LocaleCode) => {
  const overrides = files[locale].ui ?? {};
  return requiredUiKeys(locale).every((key) => filled(overrides[key]));
};

/** Every `ui` key a locale must translate: all of them, less the testimonials where it shows none. */
export function requiredUiKeys(locale: LocaleCode): (keyof UiStrings)[] {
  const keys = Object.keys(uiStrings) as (keyof UiStrings)[];
  return localeEntry(locale).reviews ? keys : keys.filter((key) => !reviewKeys.includes(key));
}
/** Routed locales whose interface is complete: the ones search engines may index. Every live locale
 * must be one of them (`npm run content:check` fails otherwise); a previewed draft usually is not. */
export const publishedLocales = routedLocales.filter(isTranslated);

/** A localised guide is indexable only when its complete article has been translated. */
export function isArticleTranslated(locale: LocaleCode, slug: string) {
  const article = localeArticles.find((item) => item.slug === slug);
  return !!article && isArticleComplete(article, files[locale].articles?.[slug]);
}

/** A localised support, privacy or terms page is indexable only when its translation is complete. */
export function isStaticPageTranslated(locale: LocaleCode, kind: StaticPageKind) {
  return isPageComplete(kind, files[locale].pages?.[kind]);
}

/** How much of a locale is done, for the content audit and the build log. */
export function translationProgress(locale: LocaleCode) {
  const overrides = files[locale].ui ?? {};
  const translatedArticles = files[locale].articles ?? {};
  return {
    ui: requiredUiKeys(locale).filter((key) => filled(overrides[key])).length,
    uiTotal: requiredUiKeys(locale).length,
    articles: translatableArticles.filter((article) => isArticleComplete(article, translatedArticles[article.slug])).length,
    articlesTotal: translatableArticles.length,
    pages: (["support", "privacy", "terms"] as StaticPageKind[]).filter((kind) => isPageComplete(kind, files[locale].pages?.[kind])).length,
    consent: Object.keys(consentStrings).filter((key) => filled(files[locale].consent?.[key as ConsentKey])).length,
    consentTotal: Object.keys(consentStrings).length,
  };
}

/** English wherever the locale file has not supplied a value yet. */
export function getTranslation(locale: LocaleCode): UiStrings {
  const overrides = files[locale].ui ?? {};
  return Object.fromEntries(Object.entries(uiStrings).map(([key, english]) => [key, overrides[key as keyof UiStrings] || english])) as UiStrings;
}

/**
 * The consent bar strings. Unlike `ui`, each one falls back to English on its own and none of them
 * gates publishing, so the bar can ship before every language has translated it.
 */
export function getConsentStrings(locale: LocaleCode | "en"): ConsentStrings {
  const overrides = locale === "en" ? {} : files[locale].consent ?? {};
  return Object.fromEntries(Object.entries(consentStrings).map(([key, english]) => [key, overrides[key as ConsentKey] || english])) as ConsentStrings;
}

export function getPage(locale: LocaleCode, kind: StaticPageKind): StaticPage {
  const translated = files[locale].pages?.[kind];
  // Complete or English. A partly translated legal page is worse than an English one.
  return isPageComplete(kind, translated) ? translated! : staticPages[kind];
}

/**
 * Every guide, in the best language available for it.
 *
 * A guide whose translation is complete is returned translated. A guide with no translation, or one
 * whose translation is incomplete or structurally stale, is returned **whole and untouched in
 * English**. What never happens is the third thing: a single article rendered as a mixture of two
 * languages, which is what this site shipped before `isArticleComplete` existed.
 */
export function localizedArticles(locale: LocaleCode): Article[] {
  const translated = files[locale].articles ?? {};
  const cjk = localeScript(locale) === "cjk";
  return localeArticles.map((article) => {
    const item = translated[article.slug];
    if (!isArticleComplete(article, item)) return article;
    const localized: Article = {
      ...article,
      title: item!.title!,
      description: item!.description!,
      region: item!.region!,
      imageAlt: item!.imageAlt!,
      intro: item!.intro!,
      sections: article.sections.map((section, index) => ({
        heading: item!.sections![index].heading!,
        body: item!.sections![index].body!,
        tips: section.tips ? item!.sections![index].tips : undefined,
        table: section.table ? item!.sections![index].table as ArticleSection["table"] : undefined,
        // The screenshot stays; its alt becomes this locale's heading, so no English reaches the page.
        ...(section.figure && { figure: { src: section.figure.src, alt: item!.sections![index].heading! } }),
      })),
      faq: article.faq?.map((_, index) => item!.faq![index]),
      sources: article.sources?.map((source, index) => ({ ...source, label: item!.sources![index].label! })),
      priceTable: article.priceTable ? {
        ...article.priceTable,
        note: item!.priceTable!.note!,
        rows: article.priceTable.rows.map((row, index) => ({ ...row, label: item!.priceTable!.rows![index].label!, unit: item!.priceTable!.rows![index].unit || row.unit })),
      } : undefined,
    };
    // Word counts mean nothing in Chinese or Japanese, so CJK reading time comes from characters.
    return cjk ? { ...localized, readTime: cjkReadingMinutes(localized) } : localized;
  });
}

/** Characters per minute for CJK prose, a common silent-reading rate for Japanese and Chinese. */
const CJK_CHARACTERS_PER_MINUTE = 500;
function cjkReadingMinutes(article: Article): number {
  const text = [
    article.intro,
    ...article.sections.flatMap((part) => [part.heading, ...part.body, ...(part.tips ?? []), ...(part.table ? [part.table.caption, ...part.table.head, ...part.table.rows.flat()] : [])]),
    ...(article.priceTable ? [article.priceTable.note, ...article.priceTable.rows.map((row) => `${row.label}${row.unit ?? ""}`)] : []),
  ].join("").replace(/<[^>]+>/g, "");
  const characters = text.match(/[\p{L}\p{N}]/gu)?.length ?? 0;
  return Math.max(1, Math.round(characters / CJK_CHARACTERS_PER_MINUTE));
}

/** Slugs whose translation is complete, for the content audit and the build log. */
export const fullyTranslatedSlugs = (locale: LocaleCode) => {
  const translated = files[locale].articles ?? {};
  return translatableArticles.filter((article) => isArticleComplete(article, translated[article.slug])).map((article) => article.slug);
};

const categoryKeys = { "Road trips": "roadTrips", "Camping guides": "campingGuides", "Rules & safety": "rulesSafety", "Trip planning": "tripPlanning", "Costs & budget": "costsBudget", "App guides": "appGuides" } as const;

export const localizedCategories = (locale: LocaleCode) => {
  const ui = getTranslation(locale);
  return localeCategories.map((category) => ({ source: category, label: ui[categoryKeys[category]] }));
};

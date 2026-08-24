import de from "./translations/de.json";
import es from "./translations/es.json";
import fr from "./translations/fr.json";
import it from "./translations/it.json";
import nl from "./translations/nl.json";
import pt from "./translations/pt.json";
import { staticPages, uiStrings, type StaticPage, type StaticPageKind, type UiStrings } from "./source-strings";
import { articles, categories, type Article, type ArticleCategory } from "./site";

export const localeCodes = ["de", "es", "fr", "it", "nl", "pt"] as const;
export type LocaleCode = (typeof localeCodes)[number];
export const localeLabels: Record<LocaleCode, string> = { de: "Deutsch", es: "Español", fr: "Français", it: "Italiano", nl: "Nederlands", pt: "Português" };

/**
 * Road trips are deliberately English-only. They are long, heavily place-specific and lose more in
 * translation than they gain, so `translatableArticles` — rules and safety, camping guides, trip
 * planning, costs and budget, app guides — is what a translator is asked for and what a localised
 * /guides/ index lists.
 */
export const untranslatedCategories: ArticleCategory[] = ["Road trips"];
export const translatableArticles = articles.filter((item) => !untranslatedCategories.includes(item.category));
export const translatableCategories = categories.filter((category) => !untranslatedCategories.includes(category));

type TranslatedSection = { heading?: string; body?: string[]; tips?: string[] };
type TranslatedArticle = {
  title?: string; description?: string; category?: string; region?: string; imageAlt?: string; intro?: string;
  sections?: TranslatedSection[]; sources?: { label?: string }[];
  priceTable?: null | { note?: string; rows?: { label?: string; unit?: string }[] };
};
type TranslationFile = {
  locale?: string;
  ui?: Partial<Record<keyof UiStrings, string>>;
  articles?: Record<string, TranslatedArticle>;
  pages?: Partial<Record<StaticPageKind, StaticPage>>;
};

const files: Record<LocaleCode, TranslationFile> = { de, es, fr, it, nl, pt } as unknown as Record<LocaleCode, TranslationFile>;

export const isLocale = (value: string): value is LocaleCode => localeCodes.includes(value as LocaleCode);

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

function isArticleComplete(article: Article, item: TranslatedArticle | undefined): boolean {
  if (!item) return false;
  if (![item.title, item.description, item.region, item.imageAlt, item.intro].every(filled)) return false;
  if (item.sections?.length !== article.sections.length) return false;
  const sectionsMatch = article.sections.every((section, index) => {
    const translated = item.sections![index];
    if (!filled(translated?.heading)) return false;
    if (translated.body?.length !== section.body.length || !translated.body.every(filled)) return false;
    const tips = section.tips ?? [];
    return (translated.tips?.length ?? 0) === tips.length && (translated.tips ?? []).every(filled);
  });
  if (!sectionsMatch) return false;
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
 * hero above an English FAQ, which is the same defect as a half-translated guide. Until then its
 * pages still build and render — wholly in English — but they stay out of the sitemap, out of the
 * footer language switcher and are marked noindex, so an untranslated scaffold never competes with
 * the English site. Filling lib/translations/<code>.json in is the only switch there is.
 */
export const isTranslated = (locale: LocaleCode) => {
  const overrides = files[locale].ui ?? {};
  return Object.keys(uiStrings).every((key) => filled(overrides[key as keyof UiStrings]));
};
export const publishedLocales = localeCodes.filter(isTranslated);

/** How much of a locale is done, for the content audit and the build log. */
export function translationProgress(locale: LocaleCode) {
  const overrides = files[locale].ui ?? {};
  const translatedArticles = files[locale].articles ?? {};
  return {
    ui: Object.keys(uiStrings).filter((key) => filled(overrides[key as keyof UiStrings])).length,
    uiTotal: Object.keys(uiStrings).length,
    articles: translatableArticles.filter((article) => isArticleComplete(article, translatedArticles[article.slug])).length,
    articlesTotal: translatableArticles.length,
    pages: (["support", "privacy", "terms"] as StaticPageKind[]).filter((kind) => isPageComplete(kind, files[locale].pages?.[kind])).length,
  };
}

/** English wherever the locale file has not supplied a value yet. */
export function getTranslation(locale: LocaleCode): UiStrings {
  const overrides = files[locale].ui ?? {};
  return Object.fromEntries(Object.entries(uiStrings).map(([key, english]) => [key, overrides[key as keyof UiStrings] || english])) as UiStrings;
}

export function getPage(locale: LocaleCode, kind: StaticPageKind): StaticPage {
  const translated = files[locale].pages?.[kind];
  // Complete or English. A partly translated legal page is worse than an English one.
  return isPageComplete(kind, translated) ? translated! : staticPages[kind];
}

/**
 * The guides a locale actually publishes: only those whose translation is complete. An article with
 * a missing or structurally stale translation is not listed, and `generateStaticParams` never builds
 * a URL for it, so the localised path 404s rather than serving a mixture.
 */
export function localizedArticles(locale: LocaleCode): Article[] {
  const translated = files[locale].articles ?? {};
  return translatableArticles.flatMap((article) => {
    const item = translated[article.slug];
    if (!isArticleComplete(article, item)) return [];
    return [{
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
      })),
      sources: article.sources?.map((source, index) => ({ ...source, label: item!.sources![index].label! })),
      priceTable: article.priceTable ? {
        ...article.priceTable,
        note: item!.priceTable!.note!,
        rows: article.priceTable.rows.map((row, index) => ({ ...row, label: item!.priceTable!.rows![index].label!, unit: item!.priceTable!.rows![index].unit || row.unit })),
      } : undefined,
    }];
  });
}

const categoryKeys = { "Road trips": "roadTrips", "Camping guides": "campingGuides", "Rules & safety": "rulesSafety", "Trip planning": "tripPlanning", "Costs & budget": "costsBudget", "App guides": "appGuides" } as const;

export const localizedCategories = (locale: LocaleCode) => {
  const ui = getTranslation(locale);
  return translatableCategories.map((category) => ({ source: category, label: ui[categoryKeys[category]] }));
};

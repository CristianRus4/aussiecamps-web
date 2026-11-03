import { translationFiles } from "./translations/index";
import { answerCtaStrings, type AnswerCtaKey } from "./source-strings";

/** The pages that carry a download line under their opening answer. Drive guides share one line. */
const guideKeys: Record<string, AnswerCtaKey> = {
  "alcohol-coffee-drink-prices-australia": "alcohol-coffee-drink-prices-australia",
  "best-camping-app-australia": "best-camping-app-australia",
  "brisbane-to-sydney-drive": "drive-guide",
  "sydney-to-adelaide-drive": "drive-guide",
};
const toolKeys: Record<string, AnswerCtaKey> = {
  "drive-time-calculator": "drive-time-calculator",
  "fuel-cost-calculator": "fuel-cost-calculator",
};

const files = translationFiles as unknown as Record<string, { answerCta?: Partial<Record<AnswerCtaKey, string>> }>;

/**
 * The line for one page, in the language its body is rendered in: English when the page body is
 * English (including an English fallback on a localised URL), the translation when the body is
 * translated, and nothing when the body is translated but this line is not yet.
 */
function line(key: AnswerCtaKey | undefined, locale: string, translatedBody: boolean): string | undefined {
  if (!key) return undefined;
  if (locale === "en" || !translatedBody) return answerCtaStrings[key];
  return files[locale]?.answerCta?.[key]?.trim() || undefined;
}

export const guideAnswerCta = (slug: string, locale: string, translatedBody: boolean) => line(guideKeys[slug], locale, translatedBody);
export const toolAnswerCta = (tool: string, locale: string, translatedBody: boolean) => line(toolKeys[tool], locale, translatedBody);

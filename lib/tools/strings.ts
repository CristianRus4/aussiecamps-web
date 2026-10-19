import { translationFiles } from "../translations/index";
import { toolKeys, toolStrings, type ToolCopy, type ToolKey } from "../source-strings";

/**
 * The `tools` namespace with English fallback.
 *
 * A locale file may carry `tools: { common, tools: { "<tool>": … } }` shaped like `toolStrings`. A tool
 * page uses the translation only when that tool and the shared `common` block are complete and
 * structurally identical to the English; otherwise the whole page body is English and noindex. Nothing
 * is shown half-translated, the same rule lib/localized.ts applies to guides.
 */
type ToolTranslation = { common?: Partial<Record<keyof typeof toolStrings.common, string>>; tools?: Partial<Record<ToolKey, Partial<ToolCopy>>> };
const files = translationFiles as unknown as Record<string, { tools?: ToolTranslation }>;

export const isToolKey = (value: string): value is ToolKey => (toolKeys as readonly string[]).includes(value);

const filled = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;
const sameList = (english: readonly string[], translated: unknown) =>
  Array.isArray(translated) && translated.length === english.length && translated.every(filled);

function isCopyComplete(english: ToolCopy, translated: Partial<ToolCopy> | undefined): translated is ToolCopy {
  if (!translated) return false;
  const scalars: (keyof ToolCopy)[] = ["metaTitle", "metaDescription", "title", "intro", "formulaNote", "ctaTitle", "ctaText"];
  if (!scalars.every((key) => filled(translated[key]))) return false;
  if (!sameList(english.formula, translated.formula) || !sameList(english.example, translated.example) || !sameList(english.assumptions, translated.assumptions)) return false;
  // Placeholders must survive translation, or the page would print a literal {dumpPoints}.
  const placeholders = (text: string) => (text.match(/\{[a-zA-Z]+\}/g) ?? []).sort().join();
  if (placeholders(english.ctaText) !== placeholders(translated.ctaText ?? "")) return false;
  return Array.isArray(translated.faq) && translated.faq.length === english.faq.length && translated.faq.every((pair) => Array.isArray(pair) && pair.length === 2 && pair.every(filled));
}

function isCommonComplete(translated: ToolTranslation["common"]) {
  return !!translated && (Object.keys(toolStrings.common) as (keyof typeof toolStrings.common)[]).every((key) => filled(translated[key]));
}

/** True when a locale has finished this tool's strings and the shared ones. English is always complete. */
export function isToolTranslated(locale: string, tool: ToolKey): boolean {
  if (locale === "en") return true;
  const translation = files[locale]?.tools;
  return isCommonComplete(translation?.common) && isCopyComplete(toolStrings.tools[tool], translation?.tools?.[tool]);
}

/** The copy a tool page renders in this locale: the complete translation, or English throughout. */
export function toolCopy(locale: string, tool: ToolKey): { common: typeof toolStrings.common; copy: ToolCopy; translated: boolean } {
  if (locale !== "en" && isToolTranslated(locale, tool)) {
    const translation = files[locale]!.tools!;
    return { common: translation.common as typeof toolStrings.common, copy: translation.tools![tool] as ToolCopy, translated: true };
  }
  return { common: toolStrings.common, copy: toolStrings.tools[tool], translated: locale === "en" };
}

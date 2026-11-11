import { translationFiles } from "./translations/index";
import { introCtaStrings, type IntroCtaSlug } from "./source-strings";

const files = translationFiles as unknown as Record<string, { introCta?: Partial<Record<IntroCtaSlug, string>> }>;

/** Exactly one `<a>…</a>` with text in it, and no other markup. */
const shape = /^([^<>]*)<a>([^<>]+)<\/a>([^<>]*)$/;

/** The sentence split around its link, or undefined when it is not one well-formed `<a>…</a>`. */
export function splitIntroCta(text: string): { before: string; link: string; after: string } | undefined {
  const match = shape.exec(text.trim());
  return match ? { before: match[1], link: match[2], after: match[3] } : undefined;
}

/**
 * A guide's app sentence in the language its body is rendered in: English when the body is English
 * (including an English fallback on a localised URL), the translation when the body is translated,
 * and nothing when the body is translated but this sentence is not yet. It is never part of a guide's
 * completeness check (lib/localized.ts), so a missing sentence can never drop a translated guide.
 */
export function guideIntroCta(slug: string, locale: string, translatedBody: boolean): string | undefined {
  if (!(slug in introCtaStrings)) return undefined;
  if (locale === "en" || !translatedBody) return introCtaStrings[slug as IntroCtaSlug];
  return files[locale]?.introCta?.[slug as IntroCtaSlug]?.trim() || undefined;
}

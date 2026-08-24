export const defaultLocale = "en-AU" as const;

/**
 * The site's language plan. `path` is the URL segment a locale is served under, and whether a locale
 * is actually live is decided at build time by `isTranslated` in lib/localized.ts — a locale goes
 * live the moment lib/translations/<path>.json carries translated UI strings.
 */
export const locales = [
  { code: "en-AU", path: "", label: "English" },
  { code: "de-DE", path: "de", label: "Deutsch" },
  { code: "fr-FR", path: "fr", label: "Français" },
  { code: "es-ES", path: "es", label: "Español" },
  { code: "it-IT", path: "it", label: "Italiano" },
  { code: "nl-NL", path: "nl", label: "Nederlands" },
  { code: "pt-PT", path: "pt", label: "Português" },
] as const;

export const translationRules = {
  neverTranslate: ["AussieCamps"],
  preserveExactly: ["Uluṟu", "K'gari", "Ikara", "Tjoritja", "Kakadu", "Namadgi"],
  sourceTone: "Plain Australian English, practical, warm and specific",
  /** Road trip guides stay English-only; see untranslatedCategories in lib/localized.ts. */
  untranslatedCategories: ["Road trips"],
} as const;

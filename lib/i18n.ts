export const defaultLocale = "en-AU" as const;

export const locales = [
  { code: "en-AU", label: "English (Australia)", active: true },
  { code: "en-NZ", label: "English (New Zealand)", active: false },
  { code: "de-DE", label: "Deutsch", active: false },
  { code: "fr-FR", label: "Français", active: false },
  { code: "es-ES", label: "Español", active: false },
  { code: "it-IT", label: "Italiano", active: false },
  { code: "nl-NL", label: "Nederlands", active: false },
  { code: "pt-PT", label: "Português", active: false },
] as const;

export const translationRules = {
  neverTranslate: ["AussieCamps"],
  preserveExactly: ["Uluṟu", "K'gari", "Ikara", "Tjoritja", "Kakadu", "Namadgi"],
  sourceTone: "Plain Australian English, practical, warm and specific",
} as const;

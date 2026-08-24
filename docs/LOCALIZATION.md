# Localization

Australian English is the source language. Locale configuration lives in `lib/i18n.ts`; the running
implementation lives in `lib/localized.ts`, and the step-by-step process a translator follows is in
[TRANSLATIONS.md](TRANSLATIONS.md).

Live locale routes, one URL prefix each:

- `de-DE` at `/de`
- `fr-FR` at `/fr`
- `es-ES` at `/es`
- `it-IT` at `/it`
- `nl-NL` at `/nl`
- `pt-PT` at `/pt`

Road trip guides are deliberately excluded from every locale and stay English-only. Everything else
is translatable: UI copy, the support, privacy and terms pages, and the rules, camping, planning,
cost and app guides.

## Never translate

- AussieCamps
- App Store
- Official organisation names when no official translated name exists
- Registered campground, park and business names

## Preserve carefully

Traditional place names, including Uluṟu, K'gari, Ikara and Tjoritja, must keep their correct spelling and diacritics. Do not replace them with older colonial names unless context requires both and the responsible authority uses both.

## Translation workflow

1. `npm run translations:source` writes `lib/translations/en.json`, the complete English source.
2. Translate the values, keeping every key and array position. Save as `lib/translations/<code>.json`.
3. `npm run check` verifies the file and the locale routes.

Nothing is ever rendered half-translated. Every guide is published in every locale: one whose
translation is complete and structurally identical to the English is served translated, and any
other is served whole in English. A locale is published only when every UI string is translated, and
stays `noindex` and absent from `sitemap.xml` and the footer language switcher until then.

Article slugs stay in English. Titles, descriptions, Open Graph copy and `hreflang` are generated
from the locale file, so no route needs editing by hand.

## Tone in translation

Preserve the meaning and usefulness, not English word order. Use the ordinary camping and caravan vocabulary of the target market. Keep distances in kilometres and temperatures in Celsius. Explain Australian systems that an international traveller may not know, such as total fire bans, state quarantine zones and national park booking permits.

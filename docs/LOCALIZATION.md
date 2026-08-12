# Localization plan

Australian English is the source language. Locale configuration lives in `lib/i18n.ts`.

Planned first-wave locales:

- `en-NZ`
- `de-DE`
- `fr-FR`
- `es-ES`
- `it-IT`
- `nl-NL`
- `pt-PT`

## Never translate

- AussieCamps
- App Store
- Official organisation names when no official translated name exists
- Registered campground, park and business names

## Preserve carefully

Traditional place names, including Uluṟu, K'gari, Ikara and Tjoritja, must keep their correct spelling and diacritics. Do not replace them with older colonial names unless context requires both and the responsible authority uses both.

## Translation workflow

1. Extract public strings from components and `lib/site.ts` into locale JSON files.
2. Keep English values as the required fallback.
3. Generate locale routes under `/<locale>/...`.
4. Create reciprocal `hreflang` links and an `x-default` entry for every translated route.
5. Localise title, description, Open Graph copy, structured data and visible content together.
6. Keep article slugs in English for the first release unless the entire locale uses translated slugs consistently.
7. Fail the build when a published locale is missing a required key.
8. Review all legal and state-rule translations with a native speaker.

## Tone in translation

Preserve the meaning and usefulness, not English word order. Use the ordinary camping and caravan vocabulary of the target market. Keep distances in kilometres and temperatures in Celsius. Explain Australian systems that an international traveller may not know, such as total fire bans, state quarantine zones and national park booking permits.

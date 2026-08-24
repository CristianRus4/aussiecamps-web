# Translating the AussieCamps site

Six languages are wired up: **de, es, fr, it, nl, pt**. Each is served from its own URL prefix
(`/de`, `/es`, …) and covers the home page, `/guides`, every translatable guide, `/tools`,
`/support`, `/privacy` and `/terms`.

## What gets translated

Everything **except the road trip guides**. Those stay English-only: they are long, heavily
place-specific and lose more in translation than they gain. Concretely, a translator receives:

- all UI copy (navigation, hero, features, planner, FAQ, footer, tools, article chrome)
- the support, privacy and terms pages
- every guide in **Rules & safety**, **Camping guides**, **Trip planning**, **Costs & budget** and
  **App guides**

The rule lives in one place, `untranslatedCategories` in `lib/localized.ts`. Nothing else needs
changing to move a category in or out.

## The workflow

1. Regenerate the English source:

   ```bash
   npm run translations:source
   ```

   That writes `lib/translations/en.json` — every translatable string on the site, in the exact
   shape a locale file uses.

2. Translate the **values**. Keep every key and every array position exactly as it is; the site
   matches translations to English by position, so a merged or dropped array item shifts the rest.

3. Save the result as `lib/translations/<code>.json` (`de.json`, `es.json`, …).

4. `npm run check`. The content audit verifies the file is well-formed, carries no road trip and
   translates nothing that is not an article on this site.

## Nothing is ever shown half-translated

This is the one rule the site enforces hardest, because the opposite shipped once: the English
guides were rewritten and expanded — one went from three sections to seven — *after* their
translations were generated. Matching by position then put translated paragraphs under unrelated
English headings and appended four untranslated sections underneath.

So a translation counts only when it is **complete and structurally identical** to the English it
translates: same number of sections, same number of paragraphs and tips in each, every one filled
in. Anything short of that is treated as absent:

- an incomplete guide is **not listed** on the localised `/guides` index and its localised URL
  **404s** — the reader gets the complete English guide instead
- an incomplete support/privacy/terms page renders in English
- a locale with an incomplete UI is not published at all (see below)

You can still deliver in stages — finish the UI, then guides one at a time. Just finish whatever you
start: a guide is either wholly translated or absent. `npm run check` fails if a translation file
contains a guide the site cannot render, and tells you which one.

### Whenever the English changes

If an English guide gains a section or a paragraph, its existing translations become structurally
stale and stop rendering until they are updated. That is deliberate — it is exactly the failure
above, caught at build time instead of in front of a reader. Re-run `npm run translations:source`
and re-translate the affected guide.

## When a locale goes live

A locale is published once **every** UI string is translated. A partial UI would put a translated
hero above an English FAQ, which is the same defect as a half-translated guide.

Until then its pages still build and render — wholly in English — but they are marked `noindex`,
kept out of `sitemap.xml` and hidden from the footer language switcher, so an untranslated scaffold
never competes with the English site for the same search terms. There is no flag to flip: filling
the file in is the switch.

`npm run check` prints the progress of every locale:

```
Translations: de 86/186 ui, 0/43 guides, 2/3 pages · es 86/186 ui, ...
```

## House rules

- **Never translate the product name.** `AussieCamps` stays as written.
- **No em dashes.** The content audit rejects them in both English and translated copy.
- Prices stay in AUD. The multi-currency table converts mechanically and its column headers are
  currency codes, which are not translated.
- Place names, park names and official body names stay in their original form.

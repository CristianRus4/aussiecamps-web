# Translating the AussieCamps site

Languages are declared in one place, `lib/locales.json`: code, URL segment, label, `<html lang>`,
hreflang tags, Open Graph locale, Intl locale, engine variety, script (latin or cjk), status and
whether the home page shows the testimonials (`reviews`). After editing it, run
`npm run locales:sync`, which regenerates the import barrel (`lib/translations/index.ts`) and the
engine's targets in `docs/translation.config.json`. `npm run content:check` fails if either is stale.

- **live** locales (de, es, fr, it, nl, pt, da, sv, nb, zh-hant) are built, exported, in the sitemaps, hreflang and the
  footer language list. A live locale must translate its whole interface.
- **draft** locales (ja, ko, zh-hans, cs, pl) are not exported at all. Preview
  them with `LOCALES_PREVIEW=1 npm run dev`. Only the orchestrator flips a status.

Each locale is served from its own URL prefix (`/de/`, `/zh-hans/`, …) and covers the home page,
`/guides/`, every guide, `/tools/`, `/support/`, `/privacy/` and `/terms/`.

## What gets translated

Everything, road trips included:

- all UI copy (navigation, hero, features, planner, FAQ, footer, tools, article chrome). A locale
  with `reviews: false` does not translate the testimonials (`review*` keys) and does not show them;
- the consent bar (`consent`, see below);
- the support, privacy and terms pages;
- every guide.

`untranslatedCategories` in `lib/localized.ts` is empty; listing a category there would take its
guides out of `en.json` again.

### Links inside guides

Guide paragraphs in `en.json` carry the site's contextual links as markup:
`… mixing <a data-guide="is-free-camping-legal-australia">free camps</a> and …`. Keep the tag and
its slug exactly and put it around the natural phrase in your language. The site turns it into a link
to that guide in your language; everything else in the string is escaped. A translation without the
markup still renders, with the English link choice applied to it.

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

- an incomplete guide is served **whole, in English**, at its localised URL for visitors, but is
  marked `noindex` and kept out of `sitemap.xml` until translated. Every guide is available in
  every language; the ones not yet translated simply read in English
- an incomplete support/privacy/terms page renders in English
- a locale with an incomplete UI is not published at all (see below)

You can still deliver in stages — finish the UI, then guides one at a time. Just finish whatever you
start: a guide is either wholly translated or absent. `npm run check` fails if a translation file
contains a guide the site cannot render, and tells you which one.

### Whenever the English changes

If an English guide gains a section, a paragraph, a source or a table, its existing translations
become structurally stale and the page falls back to English (noindex, out of the sitemap) until
they are updated. That is deliberate: it is exactly the failure above, caught before a reader sees
it.

Content and translation work happen in parallel, so a stale translation does not fail
`npm run content:check`: it is listed under "Incomplete or structurally stale translations" with the
locale and slug. A translation thread checks its own locale strictly before handing off:

```bash
npx tsx scripts/audit-content.mjs --strict --locale de
```

which fails on any guide in `de.json` that is not complete. Re-run `npm run translations:source`
and re-translate the listed guides.

### Stale translations: stamps

Structure alone cannot tell that a paragraph's English was reworded. After each batch, stamp your
locale:

```bash
npm run translations:stamp -- --locale de       # record the English each string was translated from
npm run translations:invalidate -- --locale de  # blank every string whose English changed since
```

Stamps live in `lib/translations/meta/<code>.json` (owned by the locale's translation thread). A
string whose translation changed is re-stamped; one whose English changed while the translation did
not stays stale until it is re-translated (`--all` accepts the whole file after a full review).
`npm run content:check` prints the stale count per locale, and `--strict --locale <code>` fails on
any.

### Numbers and the product name

`content:check` compares every complete unit with its English: each money amount (after $, A$, AU$,
NZ$, AUD or NZD) must keep its value in the translation, written in either decimal style, and
"AussieCamps" must not disappear. Under `--strict`, the product name must appear exactly as often as
in the English.

### Section tables

A guide section can carry a small table (`table: { caption, head, rows }`). It is translated with
the section: the caption, every header cell and every row cell, keeping the same number of rows and
cells. A translated section without its table, or with a different shape, makes the guide
incomplete.

### Consent bar strings

The analytics consent bar has its own namespace, `consent`, next to `ui` in each locale file. Unlike
`ui`, it never gates publishing: every string falls back to English on its own. Translate it with
the rest of the locale; nothing goes offline while it is missing.

## When a locale goes live

A live locale must have **every** UI string translated (less the testimonials when `reviews` is
false); `npm run content:check` fails otherwise. A partial UI would put a translated
hero above an English FAQ, which is the same defect as a half-translated guide.

Each page then has its own gate: a guide needs a complete article translation, and support, privacy
and terms a complete page translation, before that localised page gets an `index` robots tag, a
sitemap entry (`/sitemaps/<segment>.xml`, dated by the translation's own last commit) and a place in
the page's hreflang set. Until then it still builds and renders, wholly in English, marked `noindex`,
out of the sitemaps and out of hreflang, and the footer language list links to that language's home
instead. Every one of these decisions comes from the route manifest (`lib/routes.ts`), and
`npm run seo:audit` checks the exported pages against it.

`npm run check` prints the progress of every locale:

```
Translations: de 86/186 ui, 0/43 guides, 2/3 pages · es 86/186 ui, ...
```

## House rules

- **Never translate the product name.** `AussieCamps` stays as written.
- **No em dashes.** The content audit rejects them in both English and translated copy.
- Prices stay in AUD. The multi-currency table converts mechanically and its column headers are
  currency codes, which are not translated.
- Place names, park names and official body names stay in their original form. That includes
  state and territory names (New South Wales, Western Australia, Northern Territory, Tasmania…),
  which the engine protects. Only the country itself uses each language's form (Australien,
  Australie, Austrália), from the glossary.

## Engine integration

The shared engine audits nested website catalogs, ordered article structures,
SEO fields, links, markup, and complete-page translation gates. Product names,
Australian place names, official bodies, and AUD references are protected by
project rules.

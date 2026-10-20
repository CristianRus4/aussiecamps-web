# Screenshot figures in the app guides

Each listicle and comparison guide shows one image of AussieCamps inside the section about the app: a
pre-rendered 1600x900 WebP with the brand gradient (`#1e2b18 -> #6f873c`) and a centred iPhone screenshot
with its own soft shadow. KiwiCamping has the same feature with the same names, code and design
(docs/PARITY.md).

## Figures

Section is the zero-based index into the guide's `sections` (the page anchor is `#step-<section + 1>`),
followed by that section's heading. Source screenshots are in `~/Marketing/Camping/Inbox/App-kit-AussieCamps-screens/`.

| Slug | Section | Source screenshot | Alt |
|---|---|---|---|
| wikicamps-alternatives | 2 (1. AussieCamps: the official-data alternative for iPhone) | aussiecamps_place-detail_cape-le-grand-np_top.png | AussieCamps on iPhone: the Cape Le Grand National Park page with its facilities and rules |
| campermate-alternatives | 2 (1. AussieCamps: park agency data and a trip plan on iPhone) | aussiecamps_place-detail_flinders-ranges-np_top.png | AussieCamps on iPhone: the Ikara-Flinders Ranges National Park page with its park details |
| best-fuel-price-apps-australia | 9 (Fuel is the biggest cost you can plan) | aussiecamps_guides_adelaide-to-uluru_map.png | AussieCamps on iPhone: the Adelaide to Uluru road trip on the map, with the weather along the route |
| best-road-trip-planner-apps-australia | 1 (1. AussieCamps: plan where you will stop and sleep) | aussiecamps_guides_perth-to-broome_map.png | AussieCamps on iPhone: the Perth to Broome road trip on the map, with the forecast along the way |
| best-free-camping-apps-australia | 1 (1. AussieCamps: official camping data, with the Pass) | aussiecamps_place-detail_lucky-bay_top.png | AussieCamps on iPhone: the Lucky Bay Campground page with its amenities and features |
| best-camping-app-australia | 1 (1. AussieCamps: best for official data and trip planning on iPhone) | aussiecamps_place-detail_karijini-np_top.png | AussieCamps on iPhone: the Karijini National Park page with its amenities and features |

`best-fuel-price-apps-australia` is the one exception to "the section whose heading names AussieCamps":
no heading of that guide names the app, so its figure sits in "Fuel is the biggest cost you can plan", whose
body names AussieCamps trips. The heading test in `tests/rendered-html.test.mjs` lists it as the exception.
`best-camping-app-australia` is published; the others are scheduled and show their figure from their publish date.

## How it works

- `lib/screen-figures.ts` lists `screenFigures: readonly ScreenFigure[]` (`{ slug, section, src, alt }`).
  `applyScreenFigures(list, figures = screenFigures)` runs where `allArticles` is built (`lib/site.ts`) and
  sets `figure: ArticleFigure` (`{ src, alt }`) on the matching section, so the article literals stay
  untouched. At module load it throws (prefix `screen-figures:`) on a section used twice, a slug listed
  twice (one figure per guide), an unknown slug, an out-of-range section, an image missing from
  `lib/image-manifest.json` or an empty alt.
- `components/guide-article.tsx` (English) and `components/localized-site.tsx` (locale pages) render
  `GuideFigure` from `components/site-image.tsx` after the section's paragraphs and before its table or
  tips: `<figure class="guide-figure">` with an `<img>` carrying the manifest's width, height and srcset,
  lazy loading and async decoding. No caption, no link.
- `sizes` follows the measured prose column: `(max-width: 600px) calc(100vw - 94px), (max-width: 900px)
  calc(100vw - 149px), (max-width: 1162px) calc(100vw - 497px), 665px` (281px wide at 375, 651px at 800,
  503px at 1000, 665px from 1162). At 900px and below `.article-layout` is `minmax(0, 1fr)`, so a wide
  table cannot stretch the column past a phone screen.
- `.guide-figure` CSS is identical on both sites: margin only, the img full width. Corners are square,
  like the hero image, through the global `border-radius: 0 !important` reset on both sites.
- Figures are not translated text, so nothing enters `lib/translations/en.json` or `isArticleComplete`.
  A translated page keeps the image and uses that locale's section heading as the alt; an untranslated
  locale falls back to the English guide and its English alt.
- `tests/rendered-html.test.mjs` checks the validation errors, that no figure reaches the translation
  source, that each figure sits in the section naming the app (one per guide), and that the English,
  translated and fallback exports carry the figure with the expected alt.

## Adding one

1. Pick the app screenshot (a full-size iPhone PNG) and the guide's section that names AussieCamps.
2. Render it (zsh and ImageMagick 7):
   `scripts/make-screen-figure.sh <screenshot.png> public/images/screens/<slug>.webp '#1e2b18' '#6f873c'`.
   It writes `<slug>.webp` (1600x900) and `<slug>-800.webp` for the srcset.
3. Run `npm run images:manifest` so `lib/image-manifest.json` lists the image and its variant.
4. Add a row to `screenFigures` in `lib/screen-figures.ts`: `{ slug, section, src: "/images/screens/<slug>.webp", alt }`,
   with the alt written as "AussieCamps on iPhone: …" and saying only what the screenshot shows. Add it to the table above.
5. Run `npm run check`.

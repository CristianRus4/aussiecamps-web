# Screenshot figures in the app guides

Each listicle and comparison guide shows one image of AussieCamps inside the section about the app:
a pre-rendered 1600x900 WebP with the brand gradient (#1e2b18 to #6f873c) and a centred iPhone
screenshot with a soft shadow. KiwiCamping has the same feature with the same names and design
(docs/PARITY.md).

The figure sits after the section's paragraphs and before its table or tips, with no caption and no
link. It is not copy: nothing about it enters `lib/translations/en.json` or `isArticleComplete`. A
translated page keeps the image and uses that language's section heading as the alt text.

## Figures

Sections are zero-based indexes into the guide's `sections` (the page anchor is `#step-<section + 1>`).
Screenshots come from `~/Marketing/Camping/Inbox/App-kit-AussieCamps-screens/`.

| Slug | Section | Source screenshot | Alt |
|---|---|---|---|
| wikicamps-alternatives | 2 (1. AussieCamps: the official-data alternative for iPhone) | aussiecamps_place-detail_cape-le-grand-np_top.png | AussieCamps on iPhone: the Cape Le Grand National Park page with its facilities and rules |
| campermate-alternatives | 2 (1. AussieCamps: park agency data and a trip plan on iPhone) | aussiecamps_place-detail_flinders-ranges-np_top.png | AussieCamps on iPhone: the Ikara-Flinders Ranges National Park page with its park details |
| best-fuel-price-apps-australia | 9 (Fuel is the biggest cost you can plan) | aussiecamps_guides_adelaide-to-uluru_map.png | AussieCamps on iPhone: the Adelaide to Uluru road trip on the map, with the weather along the route |
| best-road-trip-planner-apps-australia | 1 (1. AussieCamps: plan where you will stop and sleep) | aussiecamps_guides_perth-to-broome_map.png | AussieCamps on iPhone: the Perth to Broome road trip on the map, with the forecast along the way |
| best-free-camping-apps-australia | 1 (1. AussieCamps: official camping data, with the Pass) | aussiecamps_place-detail_lucky-bay_top.png | AussieCamps on iPhone: the Lucky Bay Campground page with its amenities and features |
| best-camping-app-australia | 1 (1. AussieCamps: best for official data and trip planning on iPhone) | aussiecamps_place-detail_karijini-np_top.png | AussieCamps on iPhone: the Karijini National Park page with its amenities and features |

A scheduled guide (with a future `publishAt`) carries its figure but is not exported until it publishes.

## Adding one

1. Render the image (zsh and ImageMagick 7):
   `scripts/make-screen-figure.sh <screenshot.png> public/images/screens/<slug>.webp '#1e2b18' '#6f873c'`.
   It writes `<slug>.webp` (1600x900) and `<slug>-800.webp` for the srcset.
2. Run `npm run images:manifest` so `lib/image-manifest.json` lists the image and its variant.
3. Add a row to `screenFigures` in `lib/screen-figures.ts`: `{ slug, section, src: "/images/screens/<slug>.webp", alt }`.
   Pick the section whose heading names AussieCamps. Write the alt as "AussieCamps on iPhone: …", saying what the screen shows.
4. Run `npm run check`. The build fails on an unknown slug, a section out of range, a missing manifest entry or
   two figures in one section; the rendered-html tests check the exported English and translated pages.

# AussieCamps site blueprint

## Site jobs

The site presents the Australian camping app, helps travellers plan practical
trips, and earns discovery through useful, source-backed content. It does not
replace official alerts or guarantee that a place is open, legal, safe,
bookable, accessible, or suitable for a particular vehicle.

## Technical architecture

- React 19 and Next-compatible routing rendered through Vinext/Vite
- TypeScript and Tailwind CSS
- Content from `lib/site.ts`, `lib/expanded-articles.ts`, and related modules
- Static export to `pages-dist`
- GitHub Pages deployment from `main`, at the custom-domain root
- Committed translation JSON and local licensed article imagery
- Build-time content, similarity, asset, and rendered-page audits

Primary commands:

```bash
npm ci
npm run dev
npm run check
npm run build:pages
```

Do not hand-edit `pages-dist`. Change source content, routes, translations, or
assets and regenerate the export.

## Content topology

- Product homepage with workflow, coverage, screenshots, routes,
  testimonials, FAQ, and App Store handoff
- Long-form road-trip, camping, rules/safety, planning, cost, and app guides
- Currency and trip-cost tools
- Support, privacy, and terms
- Sitemap, robots, canonical/alternate metadata, structured data, and `llms.txt`
- Six localized editions in addition to Australian English

Article entries carry URL, metadata, category, image, prose, named places,
related reading, and official sources. AUD benchmark tables are converted
mechanically into supported currencies. Keep volatile benchmarks dated.

## Product boundary

The site may describe verified current capabilities: a large bundled Australian
place database, nineteen regional categories, map/list exploration, search,
filters, offline core place details, collections, ordered trips, trip tasks,
weather and reported fees where available, widgets, and in-app road-trip routes.

It must not turn “74,000+ bundled places” into “every campsite,” imply live map
tiles or alerts are offline, or promise current availability. Counts such as
74,000+ places and 4,000+ accommodation options are versioned claims that must
be recalculated when the app database or category definitions change.

## Localization architecture

Localized routes use `/de`, `/fr`, `/es`, `/it`, `/nl`, and `/pt`. UI, support,
legal, tools, and non-road-trip guide categories are translatable; road-trip
guides remain English-only. Structurally incomplete guide translations fall
back wholly to English, remain `noindex`, and stay out of the sitemap.

Generate the English source with:

```bash
npm run translations:source
```

Preserve **AussieCamps**, registered names, Traditional place names and
diacritics, official organization names, URLs, kilometres, Celsius, and the
safety meaning of source content.

## Data and trust boundaries

The site is statically exported and should not collect the app's user library,
trips, location, account, or purchase state. Tool inputs should remain local to
the browser unless a future collection path is intentionally designed and
documented. The app's bundled SQLite catalogue, Core Data/CloudKit library, and
RevenueCat state are separate systems.

Official agencies and live notices outrank the app catalogue and editorial
content. Image and research source records establish provenance, not continuing
accuracy.

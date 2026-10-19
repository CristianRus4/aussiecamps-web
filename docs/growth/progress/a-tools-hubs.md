# A-tools-hubs progress

Branch `growth/a-tools-hubs`. Edited only by the A-tools-hubs thread.

## Done

### M1: app data export (no routes)
- `scripts/export-app-data.mjs` (`npm run data:export`).
  - Reads `Scraper/data/australia_db.sqlite`, the DB the release app ships (see `CampingPlacesDatabase.swift:90`). `Aussie/Resources/aussie_db.sqlite` is the legacy bought snapshot and is never read.
  - Copies the DB to a temp dir, opens the copy read-only, and writes only inside `lib/data/`.
  - The licence map fails closed. BookEasy is excluded.
  - Output is deterministic. Dates are kept while the source SHA-256 is unchanged.
- Outputs:
  - `lib/data/product-facts.json`: per-state and total counts, the free/Pass boundary, and Pass counts by type. Partner counts are never included.
  - `lib/data/hubs.json`: 169 hub candidates.
  - `lib/data/hubs.meta.json`: provenance and attributions.
  - `lib/data/hubs.prose-check.json`: stamp from the description-overlap check.
- `lib/hubs/gate.ts`: the quality gate, shared by the audit and (later) by routes and pages. `lib/hubs/prose.json` holds hand-written hub prose (empty for now).
- `scripts/audit-hubs.mjs`, chained into `content:check`. It checks:
  - shape;
  - licences, plus no partner data, descriptions or images;
  - grounding of numbers and proper nouns;
  - the prose stamp;
  - the gate summary.
- `/credits` has a "Data sources" section built from `hubs.meta.json`.

### Licence verification (2026-10-19, read from each source's own terms)
- **cc-by-4.0:** NSW NPWS, Parks Victoria, Main Roads WA (Road Stopping Places), Queensland TMR (Roadside amenities service), Transport for NSW.
- **facts-only:**
  - National Public Toilet Map: personal, non-commercial use only.
  - RADAR: licence not specified.
  - DEECA: the DataVic entry is CC BY 4.0, but the layer we read isn't confirmed to be that dataset.
  - DBCA: private and non-commercial use only.
  - QPWS, Tasmania PWS, NT and ACT: their terms couldn't be read (403).
  - SA: CC BY 3.0 AU, not 4.0.
- **exclude:** BookEasy.

### M2: tools split (handed off)
- `/tools/` stays the index under a new title and links each calculator to its own page.
- Five pages at `/tools/<tool>/` (`app/tools/[tool]/page.tsx`), built from `components/tools/tool-page.tsx`. Each has an H1, the formula, a worked example, assumptions, FAQs (FAQPage), BreadcrumbList, guide links, sources and a `data-cta="tool"` CTA.
- Locale pages at `/<locale>/tools/<tool>/` (`app/[locale]/tools/[tool]/page.tsx`). Each is English, `lang="en"` and noindex until `tools.common` and `tools.tools.<tool>` are complete (`lib/tools/strings.ts`).
- Copy lives in the new `tools` namespace (`toolStrings` in `lib/source-strings.ts`) and is emitted into `en.json` under `tools`.
- `lib/tools/calc.ts` holds one inline `data-static-tools` script per page, which:
  - formats with `Intl` in the page language;
  - fires `tool_used` once per tool;
  - matches the server-rendered default exactly.
- `lib/routes/tools.ts` provides `toolRoutes()`. The sitemap includes the indexable tool pages.

### M3: data hubs (handed off)
- **Pages:**
  - Hubs: `/camping/<state>/`, `/camping/<state>/<park>/`, `/dump-points/<state>/` and `/rest-areas/<state>/`.
  - Indexes: `/camping/`, `/dump-points/` and `/rest-areas/`.
  - Built from `components/hubs/*` and registered as `hubRoutes()` in the manifest.
- **Map:** a static SVG dot map over a simplified Natural Earth 1:50m outline (`lib/data/au-outline.json`, from `scripts/build-au-outline.mjs`).
- **Prose:** `lib/hubs/prose.json` holds 22 hubs of grounded prose, 275 to 376 words each. The grounding check lives in `lib/hubs/grounding.ts` and is enforced by `scripts/audit-hubs.mjs`.
- **Exporter changes:**
  - title-cases ALL-CAPS source names;
  - never lists placeholder names.
- **Gate change:** a hub with fewer than 5 named places is noindex.
- **Gate result:**
  - 169 candidates and 92 built.
  - 21 indexable: camping NSW, VIC, QLD, WA and TAS; parks K'gari, Cooloola and Rinyirru; dump points in 7 states; rest areas in 6 states.
  - 71 noindex.

### Rebased onto foundation M2 (growth/a-foundation 43a8667)
- `toolRoutes` and `hubRoutes` are registered in `lib/routes.ts`.
- `tools` is added to `lib/translation-source.ts`, so `en.json` carries the namespace.
- Footer `pageKey`, `alternatesFor`, `routedLocales`, `intlLocale` and `htmlLang` are in use.
- Localised tool pages set their own Smart App Banner campaign.

## Next
- When i18n threads translate `tools.common` and `tools.tools.<tool>`, the locale tool pages go indexable automatically.
- Localised hubs come later, once Search Console shows the English hubs are indexed.
- To publish more hubs: write grounded prose into `lib/hubs/prose.json`, then re-run `npm run data:export` where the app repo exists. The description check has to re-stamp.

## Notes for the orchestrator
- Merge order: foundation M2 first, then this branch. It is rebased on top of it.
- Reciprocal links are wanted from these guides to the tool pages:
  - `australia-road-trip-fuel-cost-2026`
  - `road-trip-fuel-planning-australia`
  - `camping-fees-australia-2026`
  - `camping-water-planning`
  - `dump-points-australia-guide`
  - `australia-road-trip-fatigue-wildlife-safety`
- Reciprocal links are wanted from the `camping-rules-<state>` guides and `dump-points-australia-guide` to the hubs.

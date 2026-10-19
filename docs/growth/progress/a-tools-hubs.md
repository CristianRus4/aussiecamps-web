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

## Next
- **M2:** tools split into an index plus 5 tool pages, with a `tools` namespace in `lib/source-strings.ts` and `lib/routes/tools.ts`.
- **M3:**
  - the Natural Earth outline;
  - hub components and pages;
  - prose for the hubs that can pass the gate;
  - `lib/routes/hubs.ts`.

## Blockers / notes for the orchestrator
- The exporter (`scripts/export-github-pages.mjs`) builds its route list by regex and won't export new route types. Hubs and tool pages need foundation M2's route manifest, or an exporter hook, before they deploy.
- `tests/rendered-html.test.mjs` asserts that `/tools` contains "Currency converter", "Fuel calculator", `data-static-tools` and `120.0 L · A$249.60`. The `/tools/` index keeps those.

# A-foundation progress

Thread: A-foundation (Kai) · repo aussiecamps-web · branch `growth/a-foundation`.

## Status
- Baseline `npm run check` on untouched main (f0e8041): green (34s). No pre-existing failure.

## M1 Instrumentation + CI gate
- [x] CI gate (`check` = content:check, build, export, test, similarity, assets; pages.yml fetch-depth 0)
- [x] lib/app-store.ts campaign links, data-cta on every CTA, data-* on <main>
- [x] GA4 + Consent Mode v2 inline script (lib/analytics.ts), exporter keeps data-static-keep
- [x] Consent bar (`consent` namespace, English fallback), footer "Privacy choices"
- [x] Smart App Banner affiliate-data
- [x] Build-time SVG QR (qrcode), PNG removed
- [x] Privacy page "Website analytics" section (English privacy now renders from staticPages.privacy)
- [x] scripts/smoke-live.mjs (`--base` for a local server; checks docs/growth/ranking-urls.txt too)
- [x] Tests over pages-dist (scripts, data-cta, ct format, schema installUrl clean, banner, consent)
- [x] Extra (agreed with A-content): stale translations warn by default, fail with `--strict --locale`; section tables (`ArticleSection.table`) gated and localised
- [x] Extra: incomplete locale support/privacy/terms are noindex and out of the sitemap

## M2 i18n platform
Not started.

## Blockers / notes for the orchestrator
- None yet.

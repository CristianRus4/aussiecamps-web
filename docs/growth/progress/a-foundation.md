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

M1 merged into main (941350e line, 2026-10-19).

## M2 i18n platform
- [x] 1 Registry lib/locales.json (+ `reviews`), 15 locales: 6 live, 9 draft (ja, ko, zh-hans, zh-hant, da, sv, nb, cs, pl); empty draft files; LOCALES_PREVIEW=1
- [x] 2 `npm run locales:sync` (barrel + engine config, `--check` in content:check); hardcoded lists removed; lib/i18n.ts deleted (preserveExactly -> protectedTerms); test for leftover lists
- [x] 3 Route manifest lib/routes.ts + lib/routes/{pages,guides,crawlers}.ts; exporter, sitemaps and generateStaticParams read it; exporter under tsx renders through dist/server
- [x] 4 Translate everything (untranslatedCategories = [], en.json has all 70 guides, road-trip rule and test removed)
- [x] 5 alternatesFor(pageKey) from the manifest; privacy/terms now reciprocal; noindex pages emit none
- [x] 6 Schema inLanguage (Article, FAQPage, HowTo, WebPage), localised BreadcrumbList, trailing-slash fix, translation dateModified
- [x] 7 build-article-dates.mjs: per-locale dates from git (prebuild); sitemap index + /sitemaps/<seg>.xml with translation lastmod
- [x] 8 selectLinks / markGuideLinks / renderGuideLinks; en.json carries `<a data-guide>`; English output identical (test)
- [x] 9 lib/related.ts relevance scoring (country-wide region earns no region points; see PARITY.md)
- [x] 10 formatArticleDate(iso, intl), ISO asOf/exchangeRateDate, formatMoney(value, currency, intl); existing ui keys used; CJK reading time by characters
- [x] 11 CJK typography in app/globals.css
- [x] 12 Language switcher -> equivalent page when indexable, else locale home
- [x] 13 translations:stamp / translations:invalidate (lib/translations/meta/<code>.json), stale counts in content:check
- [x] 14 scripts/audit-seo.mjs in check after export
- [x] 15 Number parity + product-name parity in audit-content (complete units only)
- [x] 16 URL baseline test + ranking-URL freeze (audit + test)
- [x] 17 docs/PARITY.md

## Blockers / notes for the orchestrator
- Orchestrator addendum handled: da, sv, nb, cs, pl as drafts with `reviews: false` (skeleton files created; translation threads keep theirs on rebase).
- `reviews: false` locales need not translate the `review*` ui keys (isTranslated uses requiredUiKeys); content:check rejects testimonials in them.
- All six live privacy translations predate the M1 "Website analytics" section, so /<seg>/privacy/ serves English, noindex, until the i18n threads re-translate it (listed by content:check; fatal under --strict).

# A-listicles progress

Branch `growth/a-listicles`. Edited only by the A-listicles thread (Kai). Contract: `/Users/cristian/Developer/Webs/.growth-lanes/briefs/listicles-common.md`.

## Done
- `listicle` CTA placement (`lib/app-store.ts`), `Article.listicle` and `ArticleSection.cta`, in English and localized guide templates. No new UI strings.
- Fact sheet with sources and dates: `docs/growth/listicles/au-app-facts.md` (checked 2026-10-20).
- Flagship refresh `/guides/best-camping-app-australia/`: "Best Camping Apps in Australia 2026: 7 Apps Compared".
- New `/guides/wikicamps-alternatives/`, `/guides/campermate-alternatives/` and `/guides/best-fuel-price-apps-australia/`.
- "WikiCamps" and "CamperMate" in guide prose link to their alternatives pages (`lib/internal-links.ts`).
- Every page passed an Opus fact-check against App Store AU listings and developer sites before commit.

## Proposed publish dates (new pages; at most one new article per day per site)
The drip scheduler (`growth/a-scheduler`) is not on origin/main yet, and it creates `docs/growth/publish-schedule.md` itself, so the dates live here to avoid an add/add conflict.

| Slug | Type | Proposed date |
| --- | --- | --- |
| `best-camping-app-australia` | Refresh of a live URL | On merge |
| `wikicamps-alternatives` | New | 2026-10-21 |
| `campermate-alternatives` | New | 2026-10-22 |
| `best-fuel-price-apps-australia` | New | 2026-10-23 |

## Next (by search value)
1. Best road trip planner apps Australia (research done, drafting).
2. Best free camping apps Australia, best caravan and RV apps, best apps for working holiday makers, best camping weather apps.

## Blockers
- `tests/rendered-html.test.mjs:61` asserts exactly 70 guides. Any new guide fails `npm test`. Protected file: the foundation thread or the orchestrator must change it (for example to count `articles` from `lib/site.ts`, or `>= 70`).
- Site rule: every `apps.apple.com` link must be our own tracked CTA, so competitor sources cite developer sites; App Store figures are stated as read on the AU App Store on the check date.
- Our own App Store subtitle reads "Offline map & trip planner", which contradicts the no-offline-map rule. Needs an App Store Connect change (ASO), not a site change.
- Translations of the flagship (de, es, fr, it, nl, pt) are now structurally stale and served in English, noindex, until re-translated (es had 19 impressions).

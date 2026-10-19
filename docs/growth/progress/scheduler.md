# Scheduler lane (CNTXT-892): drip publishing

## Done (AussieCamps, `growth/a-scheduler`)
- `lib/publish.ts`: `buildDate()`, `isPublished()`; `publishAt` on articles; `articles` is published only, `allArticles` feeds en.json, link selection and audits.
- Links to a scheduled guide render as plain text; its credit row waits; its dates are publishAt unless git is later.
- Pages workflow: daily `15 18 * * *` build, `BUILD_DATE` pinned per job.
- `tests/publish-schedule.test.mjs`: two exports (`PAGES_DIST`), both pass `seo:audit`.
- `docs/growth/publish-schedule.md`, PARITY row.

## Next
- Port to KiwiCamping (`growth/k-scheduler`).

## Blockers
- None.

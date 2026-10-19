# Publish schedule

New guides publish themselves on a set day. Add `publishAt: "YYYY-MM-DD"` (a New Zealand date) to
the article in `lib/site.ts` or `lib/expanded-articles.ts`, merge it, and add a row below. GitHub
Pages builds every day at 07:15 NZDT (06:15 NZST), and the first build on or after that day
publishes the guide (`lib/publish.ts`). Until then it exists nowhere on the site: no page in any
language, no sitemap entry, hreflang, listing, related card or llms.txt line, and links to it are
plain text.

## Rules

- At most one new guide per day on this site.
- `publishAt` is only for new guides. Never set it on a guide that is already live: the SEO audit fails,
  because every live URL must stay (see `docs/growth/url-baseline.txt`).
- Translations go live with their English guide or after it. A translation merged early waits for the
  English date; one merged later goes live with the next build.
- Updates to existing pages are not scheduled or throttled. Merge them when they are ready.
- The guide must pass `npm run check` when it is merged, not on its publish day: the content and
  similarity audits check scheduled guides too.

## How to

1. Pick the first free day in the table (one guide per day).
2. Set `publishAt` on the article, run `npm run translations:source`, and commit both.
3. Add a row here with status `scheduled`.
4. After the guide is live, change its status to `live`.

To preview a site as it will be on a given day: `BUILD_DATE=2026-11-05 npm run build:pages`.

| Date | Slug | Status |
|---|---|---|

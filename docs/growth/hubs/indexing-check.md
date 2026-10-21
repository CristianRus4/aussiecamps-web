# Hub indexing check (English hubs)

Linear CNTXT-877. Written 2026-10-22 by the data-hubs lane for the Site admin session, which runs Search Console.

## What we know (2026-10-22)

- **Indexed hubs confirmed: 0 of 24.** No evidence either way yet.
- The hubs shipped on 2026-10-20. The only Search Console export in the repo (`docs/growth/gsc/2026-10-19/`) was pulled the day before, so it has no hub URLs at all.
- The sitemap index was resubmitted on 2026-10-21 (docs/growth/MEASUREMENT.md), and it includes every indexable hub below.
- `site:` searches from the agent environment return no results for aussiecamps.app: the search tool ignores the `site:` operator, so it cannot count indexed pages. Only Search Console can answer this.
- 68 more English hubs are built but noindex (below the quality gate). They are deliberately out of the sitemap, so they are not listed here.

## Please check in Search Console (sc-domain:aussiecamps.app)

1. **Pages report:** Indexing, Pages. Filter by URL containing `/camping/`, `/dump-points/` or `/rest-areas/`. Note how many are "Indexed" and the reasons for the rest ("Discovered - currently not indexed", "Crawled - currently not indexed", etc.).
2. **URL Inspection** for each URL below, if the quota allows: is it on Google, and when was it last crawled? Request indexing for any that are not.
3. **Performance:** pages containing `/camping/`, `/dump-points/` or `/rest-areas/`, last 7 days: impressions and clicks.
4. Record the result in a dated table at the end of this file, and tell the data-hubs lane (Ops node t3-ava-hubs) or the orchestrator.

**Why it matters:** the owner will switch on the translated hubs only once Search Console shows the English hubs being indexed.

## Live, indexable English hubs (24, in the sitemap since 2026-10-20)

- https://aussiecamps.app/camping/
- https://aussiecamps.app/dump-points/
- https://aussiecamps.app/rest-areas/
- https://aussiecamps.app/camping/new-south-wales/
- https://aussiecamps.app/camping/queensland/
- https://aussiecamps.app/camping/queensland/cooloola-recreation-area-great-sandy-national-park/
- https://aussiecamps.app/camping/queensland/kgari-great-sandy-national-park/
- https://aussiecamps.app/camping/queensland/rinyirru-lakefield-national-park-cypal/
- https://aussiecamps.app/camping/tasmania/
- https://aussiecamps.app/camping/victoria/
- https://aussiecamps.app/camping/western-australia/
- https://aussiecamps.app/dump-points/new-south-wales/
- https://aussiecamps.app/dump-points/northern-territory/
- https://aussiecamps.app/dump-points/queensland/
- https://aussiecamps.app/dump-points/south-australia/
- https://aussiecamps.app/dump-points/tasmania/
- https://aussiecamps.app/dump-points/victoria/
- https://aussiecamps.app/dump-points/western-australia/
- https://aussiecamps.app/rest-areas/new-south-wales/
- https://aussiecamps.app/rest-areas/northern-territory/
- https://aussiecamps.app/rest-areas/queensland/
- https://aussiecamps.app/rest-areas/tasmania/
- https://aussiecamps.app/rest-areas/victoria/
- https://aussiecamps.app/rest-areas/western-australia/

## Joining the sitemap at the next deploy (3)

These are lifted over the quality gate on this branch. Check them a week after they deploy.

- https://aussiecamps.app/camping/new-south-wales/myall-lakes-national-park/
- https://aussiecamps.app/camping/northern-territory/
- https://aussiecamps.app/camping/south-australia/

## Results

| Date | Indexed | Not indexed (reason) | Impressions (7 days) | Notes |
|---|---|---|---|---|

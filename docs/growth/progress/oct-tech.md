# October technical lane (both camping sites)

Branches: `growth/a-oct-tech` (this repo) and `growth/k-oct-tech` (kiwicamping-web). The same file sits in both repos.

## Baseline (2026-11-03, before any change)
- `npm run content:check`: pass on both.
- Indexable pages per locale (sitemap routes): AussieCamps en 123, every other locale 122. KiwiCamping en 138, every other locale 137. The live sitemaps list the same counts.

## 1. Translated pages that lost their traffic: done (no fallback found)

**What the live pages serve today.** Every page in the October tables that fell sharply serves its own translation, with the right `<html lang>`, `index, follow`, a self canonical, the full hreflang set (21 alternates plus x-default) and an entry in its language sitemap:
- AU: fr alcohol-coffee-drink-prices-australia, it eating-out-australia-prices-2026, nl australia-grocery-prices-2026, nl public-transport-costs-australia-2026, de campervan-road-trip-budget-australia.
- NZ: de and pt public-transport-costs-new-zealand-2026, de accommodation-costs-new-zealand-2026, it and nl new-zealand-travel-cost-2026, es beer-wine-coffee-prices-new-zealand, de and it new-zealand-grocery-prices-2026.

**History.** I rebuilt the route table at the last main commit of each day from 30 Sep to 1 Nov on both sites. Every one of those pages was a complete, indexable translation at the end of every day from 13 Oct on. No content-gate drop, stale fallback or canonical change touched them. The 22 Oct French drop did not include any of them at day end.

**The cause.** On 30 Sep neither site had any guide translations (`articles` was empty in every locale file). In September these locale URLs served the English guide, so Google showed them for English queries: positions were weak (AU fr alcohol 19.1, nl public transport 16, de budget 72.9) and the clicks came from English searchers. The full translations went live on 13 Oct. From then on each URL competes only for its own language, where search volume is far smaller, while the English page took back the English queries:
- AU English pages grew over the same month: alcohol 291 to 774 impressions, grocery 52 to 120, public transport 79 to 171, eating out 95 to 164.
- The translated pages now rank higher than before (AU fr alcohol 19.1 to 5.7, nl public transport 16 to 10.2, de budget 72.9 to 18).

So the "drop" is English traffic moving back to the English URL, not a regression. Nothing needed re-translating.

**NZ caveat.** On KiwiCamping the English cost pages fell too (grocery 992 + 647 to 76). That cannot be the same shift, and it is the NZ pages lane's task (finding 5). Its URL form and canonical did not change between September and October (same `sitePath` trailing-slash rule), and the page has served index, follow with a self canonical throughout.

**Scan of every live locale guide.** AU: 1,260 locale guide routes (84 live guides x 15 locales), all complete and indexable. NZ: 1,365 (91 x 15), all complete and indexable. No live guide serves an English fallback on either site, so there are no October impressions to list. Both sites report 0 stale strings in every locale.

## 2. URL hygiene: done

**How I checked.** I built and exported both sites and scanned every exported HTML, XML and text file for site URLs in links, canonical and hreflang tags, `og:` meta, JSON-LD and sitemap `<loc>`s. A URL fails if it has no trailing slash and no `.html`, points at a redirect stub, or points at nothing.

**What was wrong, and the fix (both sites):**
- `llms.txt` linked every section (AU: every guide too) without its trailing slash, so crawlers reading it discovered URLs that 301. It now builds every link with `sitePath`. AU: 89 URLs, NZ: 5.
- The Organization, WebSite and MobileApplication `url`, and the home `og:url`, named the bare host (`https://aussiecamps.app`); they now use the canonical `https://aussiecamps.app/` (shared file `lib/seo.ts`, a one-word change in three places, and `app/layout.tsx`).
- After the fix the scan finds 0 problems. Every internal link, hreflang alternate, canonical, JSON-LD URL and sitemap entry was already in canonical form, and NZ already links the legacy pages as `.html` everywhere.

**Sitemap lastmod.** Not all real before:
- `/guides/` (every locale) said 27 Aug although guides publish daily. It now follows the newest live guide.
- Home and `/tools/` said 27 Aug; the five calculators had no lastmod. They now take the day their source files last changed in git.
- Hubs said 9 Sep (AU) and 11 Aug (NZ), dates from before the hubs existed. They now take the later of the app data date and the hub source date.
- These dates come from the existing dates script (`npm run articles:dates`, run before every build), which now also writes `lib/page-dates.json`. That file is generated: regenerate it, never edit it.

**Extensionless NZ legacy URLs** (`/freedom-camping-rules-nz`, `/self-contained-vehicles-nz`). GitHub Pages serves the `.html` file at the extensionless address with a 200, and that copy already carries the `.html` canonical. Nothing on the site links the extensionless form, so its impressions come from Google's own history and outside links. Without redirects the only levers are the canonical, the sitemap and internal links, and all three already point at `.html`. Google lists the `.html` as "Discovered, not indexed", so it has not crawled it yet. The orchestrator should request indexing for both `.html` URLs.

## 3. Thin data hubs: done

The indexable hubs on both sites already carried counts by place type, facility shares, notable places in hand-written prose (at least 250 words, gated) and a named list with official links. What they lacked was guidance beyond the data table and links out to the rest of the site. Every hub template now adds three sections, in English and all 15 locales.

**AussieCamps** (`lib/hubs/regions.ts`): state and park camping hubs, dump point hubs and rest area hubs.
- **Season and permits in <state>.** Two sentences per state: the fire season and the booking or pass rules. Each restates a rule already fact-checked in that state's camping rules guide, with the agency pages linked (NPWS and RFS, Parks Victoria and CFA, QPWS and QFD, NT Parks and Parks Australia, DBCA, NPWS SA and CFS, PWS Tasmania, ACT Parks and ESA). No prices, so nothing goes stale with a fee change.
- **Guides for <state>.** Up to four of the state's road trips and drives, then two guides for the hub type (camping fees and best time; dump points and water; sleeping in a car and fatigue). Scheduled drive guides join on their publish day. The rules guide stays under "Before you go".
- **Neighbouring states.** The same hub type in states that share a border, indexable only. A park hub lists the state's other park hubs instead.

**KiwiCamping** (`lib/hub-regions.ts`): campsite, hut and freedom camping hubs.
- **Bookings and fire season** (freedom camping: vehicle rules and fire season). Two notes per hub type, checked against DOC's booking and paying pages: bookable campsites need a booking even with a Campsite Pass; basic huts are free and non-bookable huts are first come, first served, paid with a pass or tickets bought beforehand; Great Walk huts and campsites are booked for a season whose dates differ by track; green warrant vehicles; council land rules; checkitsalright. I left out per-region notes: Great Walks season dates differ by track, and a wrong date on 18 regions would cost more than it gains. The new Great Walk guides cover the dates.
- **Guides for <region or district>.** Road trips, drives, the Great Walk guides and the council freedom camping guides as they publish, then the guides for the hub type.
- **Nearby regions or districts.** Same hub type: bordering DOC regions (Wellington and Marlborough linked across Cook Strait), or the other districts of a freedom camping hub's DOC operations region. Indexable hubs only.

**Translations.** AU: 4 headings and 16 state notes; NZ: 4 headings and 9 notes; all 15 locales, in each style guide's register, with agency and programme names kept in English. A translated AU hub needs its state's notes, and every English number must appear in the translation; extra numbers are allowed because Japanese, Korean and Chinese write months as numbers. NZ notes carry no numbers. All 24 AU and 32 NZ translated hubs stay complete in every locale.

**Noindex choices.** The existing gates already do this, and I kept them as they are:
- AU (68): the ACT camping hub (7 campgrounds), the South Australia rest area hub, and 66 park hubs below 20 places or without 250 words of prose.
- NZ (20): camping in Auckland, Bay of Plenty, Hawke's Bay, Southland, Waikato and Wairarapa; huts in Bay of Plenty, Northland, Taranaki and Waikato; freedom camping in Bay of Islands, Buller, Geraldine, Golden Bay, Kauri Coast, Motueka, Murihiku, Nelson Lakes, North Canterbury and Sounds.
- All of them are built for visitors, noindex, follow, and out of the sitemap, hreflang and every listing.

## 4. Structured data: done

- **Brand names.** `Organization` and `WebSite` carry `alternateName` "Aussie Camps" and "Kiwi Camping", the two-word spellings people search with (REVIEW.md finding 4: "kiwi camping" ranks 8.5 on the home page).
- **The app on app listicles.** Every "best ... apps", "... apps ..." and "... alternatives" guide, in every locale, now includes the same `MobileApplication` node as the home page (`@id` `/#app`), and its `Article` `mentions` it. No rating, review or price beyond the free offer. Live today: 13 on AU, 12 on NZ (the legacy best-nz-camping-apps.html included); scheduled ones get it on their publish day.
- **HowTo only where the sections are steps.** Listicles were emitting a `HowTo` built from their sections, which are not steps. Only the real how-to app guides keep it: AU 5, NZ 6.
- **Validator.** `scripts/check-structured-data.mjs` (`npm run schema:check`, now part of `npm run check` on both sites) reads every exported page's JSON-LD and fails on:
  - a block that does not parse, or one @id describing two different nodes;
  - a missing required field on Organization, WebSite, the app, Article, BreadcrumbList or FAQPage;
  - a headline over 110 characters;
  - a date that is not ISO, dateModified before datePublished, or a date in the future;
  - breadcrumbs out of order, or not ending at the page's canonical;
  - a site URL not in canonical form;
  - any `aggregateRating` or `review` on the app.

  Both sites pass on every page. `Article` `dateModified` and `BreadcrumbList` were already valid; the validator now keeps them that way.

## 5. IndexNow: done

- **Key files:** `public/a96c887f9422e1341ae7e180b3273e4e.txt` (AussieCamps) and `public/907711e112cf45f859451bc3085a2368.txt` (KiwiCamping). The export serves each at the site root.
- **Script:** `scripts/indexnow.mjs`, run with `npm run indexnow --`.
  - `--due YYYY-MM-DD` submits every guide whose `publishAt` is that day, in English and every locale where it is indexable. It reads the route manifest pinned to that day.
  - Or pass URLs or paths. Only this site's host is accepted.
  - `--dry-run` prints the request instead of sending it.
  - It refuses to send while the key file is not live, and it rejects impossible dates.
  - Tested in dry runs: a publish day gives 16 URLs on each site (English plus 15 locales). The first live submission can only happen after this branch deploys.
- **Docs:** the routine is in `docs/growth/MEASUREMENT.md` under "IndexNow".
- **Daily command, after the publish deploy is live** (needs `node_modules` in the checkout you run it from; the main checkouts have none since the folder move, so run `npm ci` there once):
  ```
  cd ~/Developer/Webs/aussiecamps-web && npm run indexnow -- --due "$(TZ=Pacific/Auckland date +%F)"
  cd ~/Developer/Webs/kiwicamping-web && npm run indexnow -- --due "$(TZ=Pacific/Auckland date +%F)"
  ```
  The date is the New Zealand day, the same day the 07:15 NZDT build publishes for. A day with no scheduled guide prints "nothing to submit" and exits cleanly.

## Final summary (lane done, 2026-11-03)

1. **Translated pages that lost traffic:** none fell back to English. The September impressions were English queries landing on English text served at locale URLs, before translations existed (13 Oct). Nothing to restore, and no live locale guide serves a fallback on either site.
2. **URL hygiene:** `llms.txt` and the bare-host structured data URLs fixed; sitemap `lastmod` now real. Every internal link, hreflang, canonical, JSON-LD URL and sitemap entry is in canonical form.
3. **Thin hubs:** season and permit notes, guides and neighbour links on every hub template, in 16 languages; the existing gates still noindex the thin hubs.
4. **Structured data:** brand `alternateName`, the app on app listicles, HowTo only on real how-to guides, and a validator in `npm run check`.
5. **IndexNow:** key files, script and docs on both sites.

Indexable pages per locale never dropped: AussieCamps en 123 and 122 per locale, KiwiCamping en 138 and 137 per locale, from start to finish.

**URLs to resubmit** (Search Console for the first three, IndexNow or Bing for all):
- Both sitemaps: https://aussiecamps.app/sitemap.xml and https://campingapp.nz/sitemap.xml.
- KiwiCamping legacy canonicals: https://campingapp.nz/freedom-camping-rules-nz.html and https://campingapp.nz/self-contained-vehicles-nz.html.
- KiwiCamping hubs Google has not indexed, starting with https://campingapp.nz/camping/west-coast/, https://campingapp.nz/huts/canterbury/ and https://campingapp.nz/freedom-camping/; then every indexable /camping/, /huts/ and /freedom-camping/ hub.
- AussieCamps hubs: the 24 English URLs in `docs/growth/hubs/indexing-check.md`, then their translations.
- Home pages and app listicles on both sites (structured data changed).

## Blockers
None.

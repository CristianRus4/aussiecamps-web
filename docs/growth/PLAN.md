# AussieCamps + KiwiCamping growth plan (execute today)

## Context
Both marketing sites are live but small.
- **KiwiCamping** (campingapp.nz, live since Sep 2025) is growing: 1,320 clicks and 85k impressions in the last 3 months. Its best month was Sep 2026, with 586 clicks.
- **AussieCamps** (aussiecamps.app, first impressions 27 Aug 2026) has 69 clicks and 10k impressions. Its average position has improved from 45 to 12.
- **Downloads are low.** The AU app had 24 in two weeks. The NZ app had 444 in eight weeks, 66 of them from the web.
- **Nothing is measured.** Neither site has analytics, and the static exporter strips all scripts.

The owner wants a big push:
- audit and improve every page;
- double down on what Search Console shows works;
- translate everything, naturally, into the languages AU and NZ travellers use;
- add strong new content;
- measure downloads end to end.

This session orchestrates. T3 Code threads in the Kai, Ava and Max accounts do the work. The app repo `/Users/cristian/Developer/Apps/Camping` is read-only reference: it is never edited and never worktree'd.

## Owner decisions (2026-10-19)
- **Analytics:** GA4 plus App Store Connect campaign links. No PostHog.
- **Consent:** a small banner shown to EU, UK and Swiss visitors only.
  - Consent Mode v2 defaults are set per region: denied in the EEA, UK and CH; `analytics_storage` granted elsewhere; ad signals denied everywhere.
  - The banner shows when the visitor's time zone is `Europe/*`. Google's own per-region default is the backstop.
- **Hubs:** region, park and DOC-district hubs show a teaser of app data: counts, rules, fees, and up to 25 named places. The full map stays in the app.
- **Deploys:**
  - The orchestrator commits, pushes and deploys continuously, all day, as each branch passes the merge gate.
  - Partial work is fine. An untranslated page stays English and noindex until its translation lands.
  - The plan never changes the URL of a page that gets clicks.
- **Models:** every T3 thread (Kai, Ava, Max) runs Opus at xhigh effort, overriding the default model rules. The orchestrator's own read-only Workflow scorers use Sonnet; its reviewers use Opus high.
- **Pace:** everything runs in parallel today. Only the measurement loop continues afterwards, because Search Console needs days to react.
- **Translation quality:**
  - Every locale is written natively, in the voice, terms and style locals actually use. No literal or robotic translation.
  - All existing de, es, fr, it, nl and pt content gets re-reviewed and rewritten wherever it reads stiff or wrong.
- **Existing claims are out of scope.** Homepage testimonials, user counts and place-count headlines stay as they are. New copy avoids headline totals and uses only counts from the app data. Testimonials are never translated into new locales, and no new ones are written.
- **Translation scope:** everything, including road trips, Kiwi's 15 legacy pages, and the new languages.
- **Where it runs:** locally, not in the cloud.
  - Disk at peak is about 12 GB against 65 GB free. RAM (24 GB) and account usage limits are the real caps.
  - Cloud runners can't reach the app repo, the translation engine, the T3 accounts or the signed-in browser.

## What the data says (thesis)
**Kiwi, last 3 months, by content type** (all locales):

| Content type | Clicks | Notes |
|---|---|---|
| Home | 645 | Brand, app and map intent |
| Rules and safety | 251 | 21k impressions, average position 10 |
| App guides, incl. best-apps | 136 | Best clicks per page |
| Costs | 119 | Average position 8 |
| Camping guides | 61 | 19k impressions at 0.3% CTR: the DOC booking leak |
| Road trips | 40 | Spread over 183 URLs, the worst performer |

- Map and finder queries have the best CTR, 3.3%.
- "DOC booking" queries get 13.8k impressions at 0.24% CTR.
- Self-contained queries sit at position 53, on a topic that is fresh after the 2026 rule change.

**Aussie:**
- **Ranking fast (positions 8 to 13):** state camping rules, sleeping in your car, the 2026 cost pages, and caravan park vs holiday park.
- **Weak:** `/tools/` at position 59, and road trips at 48 to 80.
- **Translated pages** carry about 40% of impressions.

**What to do with it:**
- **Double down on:**
  - app and map landers;
  - "can I / is it legal" pages by state or district;
  - dated cost pages, with bridge CTAs;
  - honest app comparisons;
  - data-backed hubs.
- **Fix:**
  - DOC booking intent: link the official booking site first, then add what DOC lacks.
  - Title and query mismatches.
  - Road trips: rewrite them with real named places and distances.

**Languages:** add ja, zh-Hant, ko and zh-Hans. The app already ships all four. They match the working-holiday markets (JP, TW, KR) and the visitor flows. Keep all six existing locales; pt gets the lowest priority.

## Facts verified during planning (must hold in all new work)
- **The Pass boundary.** In AU, only BookEasy stays and tours are free in the app; in NZ, only BookIt stays and tours. CTAs must not promise free access to Pass data.
- **No "offline map" claims, in any language.** Place details and guides work offline. Map tiles, routing, weather and photos need signal.
- **Kiwi freedom-camping data.** `Kiwi/Camp/BundledData/freedom.json` holds DOC conservation-land notices, not council bylaws: 266 prohibited, 85 restricted and 3 permitted areas.
- **Blue self-containment warrants.** Kiwi pages say they stay valid until 31 Dec 2027. Research says they ended 7 June 2026.
  - Pages affected: `lib/content/legacy-migrated.ts:33,87,128-129` and `lib/content/faqs.ts:145`.
  - Resolve it against MBIE or the regulator before any self-contained rewrite.
- **Partner data.** BookEasy (AU) and BookIt (NZ) rows are never republished. DOC data and most AU government data are CC BY 4.0, so a credits "Data sources" section is required.
- **Engineering traps:**
  1. Adding any `ui` key unpublishes every locale (`isTranslated`).
  2. `isArticleComplete` checks structure only, so English text edits never mark a translation stale.
  3. The exporter strips scripts.
  4. CI deploys without `npm run check`.
  5. Hreflang points at noindexed locale copies.
  6. Locale lists are hardcoded in about 8 places.
  7. Kiwi docs still carry an obsolete "do not push" hold.
  8. The exporters build their routes by regex over source files, so new route types would be silently skipped.

## Thread roster (all Opus xhigh)
Each thread runs in its own worktree on branch `growth/*` or `i18n/*`.

| Account | Threads (run concurrently; queue the rest) |
|---|---|
| **Kai: AussieCamps** | **A-foundation**: CI gate, GA4, consent, campaign links, i18n platform, SEO fixes · **A-content**: fixes, retitles, rewrites, new pages from the audit queue · **A-tools-hubs**: tools split plus data hubs · **A-i18n-1**: de+nl · **A-i18n-2**: fr+es · **A-i18n-3**: it+pt |
| **Ava: KiwiCamping** | The same six threads for K (K-foundation, K-content, K-tools-hubs, K-i18n-1/2/3) |
| **Max: new languages** | **ja**, **zh-hant**, **ko**, **zh-hans**. Each thread does A, then K, in separate worktrees, with one glossary and style guide per language shared across both sites |

- **Orchestrator (this session, main account):** browser work (GSC, GA4, App Store Connect); a Workflow for the content audit; Workflow parity and merge-gate reviews of engineering diffs; translation-judge Workflows; merges, deploys, smoke tests and GSC actions.

**Concurrency limits**
- At most 4 concurrent full builds (24 GB RAM).
- Translation threads only run `content:check` and the engine.
- Translation worktrees clone `node_modules` from the main checkout with `cp -cR` (APFS copy-on-write).
- At most about 18 worktrees; remove each one on merge.
- If an account hits a usage limit, its threads must be resumable through a ledger. The orchestrator relaunches or shifts work between accounts.

**Ownership rules** (go into every thread prompt)
- **Generated files** (`lib/translations/en.json`, the locale barrel and config, `lib/article-dates.json`, image manifests) are regenerated, never hand-merged.
- **Locale files.** Each `lib/translations/<code>.json` and `meta/<code>.json` is owned by exactly one i18n thread at a time. Foundation and content threads touch English only.
- **Orchestrator-only:** `lib/locales.json` status flips, `.github/workflows/*`, and the `package.json` merge resolution.
- **Protected files:**
  - Tests, `scripts/audit-*.mjs`, the exporter, and the gate functions in `lib/localized.ts` change only in the foundation thread.
  - Thresholds only go up.
  - Slugs and `legacyPath` are immutable.
- **Finish protocol:** rebase on `origin/main`, regenerate, run `npm run check` (or `content:check` for i18n threads), and report the diff stat plus evidence. Threads never push.
- **Long threads** (content, i18n) hand off in batches. They report each time a coherent chunk passes its check, so it deploys while they continue.
- **Before every launch:** pull `main` in the main checkouts, because `t3-launch --worktree` cuts from HEAD. Add both repos as T3 projects first with `~/.t3/bin/t3 project add <path>`.

## Translation quality system (the core of the i18n threads)
1. **Style guide first.** Each locale thread writes `docs/translation-style/<code>.md` before translating anything. It covers:
   - **Voice:** how a native travel writer for that market writes for campers and road-trippers. Sentence rhythm, how directly they address the reader, and the register: de "du", fr "vous", ja です・ます, ko 해요체, and the existing config for the rest.
   - **Real local vocabulary**, researched with sources:
     - this locale's GSC queries (`docs/growth/gsc/`);
     - the per-locale App Store keywords in `Apps/Camping/docs/aso/*/listing-checks/2026-10-14T1141-live.json` (read-only);
     - native-language camping content about AU and NZ found on the web, to learn how locals actually say things.
     - Examples: de Wohnmobil/Camper, Stellplatz, Freistehen. nl camperplaatsen. fr camping sauvage, van aménagé, PVT. ja キャンピングカー, 車中泊, ワーホリ. ko 캠핑카, 차박, 워홀. zh-Hant 露營車, 自駕, 打工度假. zh-Hans 房车, 自驾游.
   - **Conventions:** formats for dates, numbers and currency; quote marks; exonyms per script (悉尼 vs 雪梨). Māori macrons stay. Brands, agencies, AUD and NZD stay unchanged.
   - **Banned in that language:** calques, stiff constructions, and "offline map" equivalents. Never ja ダンプ or ko 덤프 for a dump station.
2. **Transcreate, don't translate.** Write each paragraph from its meaning, as that native writer would, for travellers from that market.
   - Sentences may be reordered, split or merged *within* a paragraph.
   - Section, paragraph, tip and FAQ counts must match English, because the site's completeness gate requires it.
   - Facts, numbers, links and `data-guide` markup are preserved exactly.
   - Titles, H1s and meta lead with the local search term.
3. **Re-review all existing translations** (de, es, fr, it, nl, pt on both sites):
   - Score every unit against the style guide and rewrite anything literal, stiff, wrongly worded, or in the wrong register. Keep what is already good.
   - Then add the missing road trips, the K legacy pages, and the link-markup retrofit.
4. **Independent judge.** An orchestrator Workflow runs fresh-context Opus judges over each locale batch. They score naturalness, idiom, terminology, register and fact fidelity from 1 to 5, and ask: "would a native reader notice this is translated?"
   - Judged at 100%: titles, meta, headings, FAQs, and rules or fee paragraphs.
   - Judged at 30% or more: body paragraphs.
   - Anything scoring below 4 goes back to the thread for a rewrite.
   - Back-translation is used only to confirm facts survived.
5. **Deterministic checks:** the translation engine `audit` (placeholders, markup, script purity for CJK), number, currency and brand parity, kana present in ja, Hangul in ko, and no Traditional characters in zh-Hans (and the reverse).
6. **Going live.** A new locale goes live (the orchestrator flips it from `draft`) once its UI, home, legal and first judged pages pass. Further pages join as each one completes and passes the judge.

## Execution today

### Step 0: orchestrator baseline (launch the threads as early as possible)
1. Run `~/.t3/bin/t3 project add` for both web repos. Pull `main` and run `npm ci` in both main checkouts.
2. Commit `docs/growth/PLAN.md` (this plan) and the GSC exports (`docs/growth/gsc/2026-10-19/`: queries, pages, countries, devices, dates, indexing for 3 and 16 months) to both repos. Do the same for `docs/growth/url-baseline.txt`.
3. **Launch all threads** (roster above). Foundation threads can start without the GA4 ID or the App Store `pt` value, because empty constants mean no script and no campaign query string.
4. **GA4:** create both properties in the browser:
   - signals off, ads personalisation off, 14-month retention;
   - custom dimensions `placement`, `site_locale`, `page_kind`, `guide_slug`, `guide_category`, `campaign_token`, `tool`;
   - link each property to Search Console;
   - ask the owner only if Google shows new terms.
5. Read the App Store Connect provider token (`pt`) for each app, then put both IDs into `lib/site.ts` constants in a small commit.
6. Resolve the blue-warrant fact from official sources and pass it to the content threads.
7. Start the content-audit Workflow (read-only):
   - **Scorers and adjudication:** Sonnet scorers, Opus adjudication of accuracy.
   - **Rubric weights:** search fit 25, accuracy (a gate) 20, depth vs the top 5 results 15, conversion 15, internal links 10, E-E-A-T 10, translation 5.
   - **CTR benchmarks:** 1–3: 15%; 4–6: 6%; 7–10: 3%; 11–20: 1%. A page below half the benchmark gets RETITLE.
   - **Output:** `docs/growth/audit/` scorecards, `summary.csv` (the rewrite queue) and `keyword-map.csv` (one owner URL per query cluster).
   - The content threads start with the known items below and pick up the queue once it lands.
8. Dismiss the earlier "sitemap lastmod" card; foundation supersedes it.

### Foundation threads (A-foundation and K-foundation in parallel; each commits in milestones)
**Instrumentation**
- **CI.** `pages.yml` sets `fetch-depth: 0`. `check` runs content:check, then build, export, test, similarity and assets, before the upload.
- **Campaign links.** `lib/app-store.ts` builds `appStoreUrl({placement, locale})`, which produces `?pt=…&ct=w_<placement>_<locale>&mt=8` (`ct` is 40 characters or fewer).
  - Every CTA gets `data-cta`.
  - `<main>` gets `data-page-kind`, `data-locale`, `data-slug` and `data-category`.
- **Analytics script.** The GA4 bootstrap is an inline `data-static-keep` script, added to the exporter's allowlist, with Consent Mode defaults.
  - An `app_store_click` beacon event fires on store links.
  - An `acTrack()` helper is available for other events.
- **Consent bar.** Its strings live in a new `consent` namespace that falls back to English and never gates publishing. A footer "Privacy choices" link reopens it.
- **Other instrumentation:**
  - smart banner `affiliate-data` with `ct=w_sb_<locale>`;
  - a build-time SVG QR code replaces the PNG;
  - the privacy page is rewritten;
  - new `scripts/smoke-live.mjs`;
  - tests: only JSON-LD and keep scripts are present, and every store link carries `pt` and `ct`.

**Platform**
- **Locale registry.** New `lib/locales.json`, with `npm run locales:sync` to keep generated files in step.
  - Each entry has code, segment, htmlLang, hreflang list, og, intl, engine, script, and status (draft or live).
  - Hreflang is language-only: `de`, `fr` and so on.
  - Chinese uses the `/zh-hans/` and `/zh-hant/` segments, with hreflang `zh-Hans/zh-CN/zh-SG` and `zh-Hant/zh-TW/zh-HK`.
  - Delete `lib/i18n.ts`.
- **Routes.** The `lib/routes.ts` manifest feeds the static params, the sitemap and the exporter (run under tsx).
- **Translate everything.**
  - `untranslatedCategories = []`.
  - K legacy pages get `/<seg>/guides/<slug>/` versions; their English pages stay at `/<legacy>.html`.
  - `alternatesFor()` emits reciprocal hreflang over indexable, complete pages only, including the legacy pages.
- **Schema:** add `inLanguage`, localise the breadcrumbs, and fix the trailing slash at `components/localized-site.tsx:97`.
- **Dates and sitemap.** `lastmod` comes from each translation's own git history (`scripts/build-article-dates.mjs` rewritten). A sitemap index points to `/sitemaps/<locale>.xml`.
- **Internal links** use `<a data-guide="slug">` markup that survives translation.
- **Other platform work:**
  - relevance-scored related guides (`lib/related.ts`);
  - localised dates and money;
  - CJK `:lang()` typography overrides with system font stacks in `app/globals.css`.
- **Stale translations.** `translations:stamp` and `translations:invalidate` compare English source hashes to find translations that need redoing.
- **Audits:**
  - new `scripts/audit-seo.mjs` checks the exported pages;
  - number-parity checks;
  - `docs/PARITY.md` records the agreed differences between the two repos.
- **Registry:** register ja, ko, zh-hans and zh-hant as `draft`.
- **K-only:** remove the obsolete "do not push" hold from the docs, and add a test that the `<body>` of every legacy page stays byte-identical to `main`.
- **Parity review:** a Workflow (Opus high) compares the A and K diffs against `docs/PARITY.md` before merge.

### Content threads (A-content and K-content)
**Rules for every content change**
- Writers follow `docs/WEBSITE-BRIEF.md`: no em dashes, no filler, official sources, verified facts.
- An independent Opus fact-check against the cited official source runs on every rules, legal and fee change.
- Every change is logged in `docs/growth/changelog.csv`, keeping the old title and text, so it can be reverted.
- **Fixed first (accuracy):** the blue-warrant fix, and "offline map" wording in new copy.

**Kiwi**
- **DOC booking page.** Rewrite `/doc-campsites-huts-guide.html` as "DOC Hut & Campsite Bookings 2026: How to Book, Fees, Dates". The official booking link goes first; the page then covers Great Walks dates, passes, fees, and first-come huts as the alternative.
- **Other rewrites and refreshes:**
  - `/self-contained-vehicles-nz.html`, rewritten after the fact check;
  - home titles per locale, aimed at map and app intent;
  - `/best-nz-camping-apps.html`, refreshed for 2026 with a dated, honest comparison table;
  - `/where-to-camp-in-new-zealand.html`, turned into the national hub.
- **New map lander:** `/guides/new-zealand-campsites-map/`.
- **Retitles:** the DOC huts and dump stations pages.
- **Freedom-camping cluster:** one owner URL per intent.
- **New pages:**
  - about 10 "can I" Q&A pages;
  - costs: campervan hire 2026 and holiday park prices, with the free in-app booking hook;
  - working-holiday guides: buying or selling a van, WHM budget;
  - summer and Christmas 2026-27;
  - "X vs Y" comparisons, at most 4, dated and sourced.

**Aussie**
- **Retitles:** the 8 state rules pages ("Camping Rules Victoria 2026: …"), each with per-state free-place counts from the data.
- **Expansions and rewrites:**
  - `sleeping-in-car-australia` gets a state-by-state table;
  - cost retitles with the year and the figures;
  - `dump-points-australia-guide` becomes "Dump Points Australia: 1,393 Locations by State";
  - `best-camping-app-australia` gets an honest comparison;
  - the 7 road trips that have impressions are rewritten with named campgrounds per night and km/hours tables.
- **New pages:**
  - about 12 "can I" Q&A pages;
  - campervan hire and holiday park cost pages;
  - working-holiday guides;
  - summer 2026-27;
  - about 25 `/drive/<a>-to-<b>/` city-pair pages, each with unique data;
  - comparisons, at most 4.

**Conversion**
- `<ContextCta variant>` per page type: inline after section 2, a sticky iOS bar after 40% scroll, an end CTA with a screenshot, and a desktop QR code.
- Each CTA names the feature and a data count from `product-facts.json`, and says honestly whether it is free or Pass.
- Non-iPhone visitors get an "iPhone only" line.

### Tools and hubs threads (A-tools-hubs and K-tools-hubs)
**Data first.** Start with the parts that need no foundation work:
- `scripts/export-app-data.mjs` reads the app data read-only. For A, it copies the SQLite file to tmp and opens it read-only; for K, it reads the JSON.
- It writes deterministic `lib/data/hubs.json`, `lib/data/product-facts.json` and `hubs.meta.json`.
- A licence allowlist fails closed. BookEasy and BookIt are excluded, and no third-party descriptions or images are copied.
- `scripts/audit-hubs.mjs` and the hub components come next.
- Routes get wired after foundation merges.

**Tools split** into 5 pages:
- Pages: `/tools/{fuel-cost-calculator, drive-time-calculator, campsite-cost-calculator, currency-converter, water-tank-calculator}/`.
- Each has its own H1, formula, worked example, FAQ, a `w_tool_<locale>` CTA, and its own inline script with a `tool_used` event.
- Strings live in a gated `tools` namespace, never in `ui`.
- `/tools/` stays as the index.

**Hubs:**
- A: `/camping/<state>/`, `/camping/<state>/<park>/`, `/dump-points/<state>/`, `/rest-areas/<state>/`.
- K: `/camping/<region>/`, `/huts/<region>/`, `/freedom-camping/<doc-district>/`, `/dump-stations/<region>/`.
- Each hub shows a facts table, up to 25 named places with official links, an SVG dot map, the matching rules guide, and a CTA.

**Hub quality gate** (a quality floor, not a speed limit):
- **Not built:** fewer than 5 places.
- **Built but noindex**, if any of these hold:
  - fewer than 12 places for NZ, or 20 for AU;
  - fewer than 4 fact dimensions;
  - fewer than 8 facts unique compared with sibling hubs;
  - more than 50% overlap with another hub;
  - less than 250 words of region-specific prose.
- **Grounding:** every number and proper noun in the prose must come from the data record.
- **Never built:** per-place or per-town pages.

**Hub language:** hubs ship in English first. Localised hubs follow once Search Console shows English hubs getting indexed.

### Continuous merge and deploy (all day)
**Merge gate** (each branch or batch, as soon as it is ready):
1. Only owned files changed; no slug or `legacyPath` changes.
2. After rebase and regeneration, `npm run check` passes in the main checkout.
3. `publishedLocales` has not shrunk.
4. Baseline and ranking URLs return 200 and are self-canonical (K's 15 legacy URLs and A's frozen URLs).
5. Claims are sourced; there are no "offline map" phrases.
6. Translation judge and engine audit are green for i18n batches.
7. Hreflang is reciprocal: spot-check 3 exported pages per touched locale.
8. The similarity check passes within each site and across both.
9. I read 2 rendered pages myself.

**After the gate:**
1. Tag `deploy/<site>/<n>`, then push.
2. One push at a time per repo: wait for the running deploy, because `cancel-in-progress` would cancel it.
3. Run `smoke-live.mjs`, then check GA4 DebugView (including `gcs=G100` with a Europe time zone) and `ct=` on store links.

**Search Console actions after the key deploys:**
- Resubmit the sitemap index and the per-locale sitemaps.
- Run "Validate fix" on the stale noindex reason.
- Request indexing for the key changed URLs (about 10 per property per day).
- Add Bing Webmaster (import from GSC). Add Naver Search Advisor when ko goes live.

**Rollback:** `git revert <sha>` and push. For a bad locale, flip it back to `draft`. For a weak cohort, noindex it while the URLs keep returning 200.

**End of today:** everything merged and live, worktrees removed, and a short report to the owner.

## After today: measurement loop
- **Data:**
  - GA4 key event `app_store_click` {placement, site_locale, page_kind, guide_slug, guide_category, campaign_token}, plus `tool_used`.
  - App Store Connect Sources: Web Referrer and Campaigns (`ct`), with a 24 to 48 hour lag; low-volume campaigns are suppressed.
  - GSC per page, query and locale.
- **Weekly:**
  - Pull the data into `docs/growth/data/<date>/` and rank pages into double down, fix or prune.
  - Fix rules: low CTR means retitle. Position 20 to 80 with more than 200 impressions means rewrite. 90 days with fewer than 20 impressions means noindex or merge.
  - Issue new briefs and ship.
  - Score changelog entries at +14 and +28 days.
  - Report to the owner.
- **Watch and revert:**
  - Kiwi legacy pages: revert a change if clicks drop more than 15% at held position after 14 days.
  - Kill signals: a manual action; site impressions down more than 30% week on week with no Google update; a cohort less than 50% indexed at day 28; "Google chose different canonical" on legacy or hub pages.
- **Targets:**

  | Metric | KiwiCamping 30 / 60 / 90 days | AussieCamps 30 / 60 / 90 days |
  |---|---|---|
  | Clicks per month | 750 / 1,050 / 1,400 | 180 / 480 / 1,000 |
  | CTR | 2.0% / 2.3% / 2.5% | 1.2% / 1.6% / 2.0% |
  | Web-referrer downloads per month | 50 / 75 / 110 | 15 / 35 / 70 |

- **Risk accepted by shipping everything in one day:** Google may take longer to trust a sudden jump in page count. The hub gate, the judge and the kill signals are the safety net.

## Out of scope / for the owner
- App Store listing fixes: the "75,000+" place count, the "offline map" subtitles, "Nouvelle-Zélande" missing from the Kiwi French listing, and mistranslated app strings.
- Authorising the RevenueCat connector, if you want Pass conversions broken down by source.

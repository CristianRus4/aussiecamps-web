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

## Next
3. Thin data hubs.
4. Structured data.
5. IndexNow.

## Blockers
None.

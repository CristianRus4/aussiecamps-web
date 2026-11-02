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

## Next
2. URL hygiene on both sites (slash-less and extensionless variants, sitemap lastmod).
3. Thin data hubs.
4. Structured data.
5. IndexNow.

## Blockers
None.

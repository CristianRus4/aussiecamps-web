# i18n-ja progress (Max)

Thread i18n-ja: Japanese for both sites. Branches `i18n/a-ja` (aussiecamps-web, worktree `~/.t3/worktrees/aussiecamps-web/i18n-a-ja`) and `i18n/k-ja` (kiwicamping-web, worktree `~/.t3/worktrees/kiwicamping-web/i18n-k-ja`). The same file is kept in both repos.

## Done
- Research: GSC (no ja queries yet), ASO ja keyword sets, app ja strings, native Japanese web sources (Tourism Australia JP, Visit NSW JP, Tourism NZ JP, 地球の歩き方, NZ/AU ワーホリ and rental blogs).
- `docs/translation-style/ja.md` (identical in both repos).
- `lib/translations/ja.json` created in both repos.
- `docs/translation.config.json`: separate `aussiecamps-website-ja` / `kiwicamping-website-ja` catalogs (see blockers).

- Milestone 1: UI (220/220, testimonials excluded) + support/privacy/terms on both sites.
- AU privacy realigned with A-foundation's Website analytics section; consent strings translated.
- Guides applied: A 23/50 (batches a01-a06, a16, a17); K 31/43 (batches k01-k08, k13, k14).
- K privacy realigned with K-foundation's analytics section; K consent strings translated.

## Final state (2026-10-21)
- Both branches merged with origin/main a third time (A: 98 commits, K: 87 commits, from merge-base b03cb90 / 1ead0f5); `locales:sync` + `translations:source` regenerated; `docs/translation.config.json` is main's file with the shared catalogs' `ja` entries removed and the dedicated `*-website-ja` catalog appended. `lib/locales.json` untouched.
- Stale units were found by diffing en.json at the old merge-base against the merged en.json (not by stamps): A 1 changed unit (australia-travel-cost-2026 tip, re-translated), K 0 changed. New English from main was translated natively: A 3 guides (hipcamp-alternatives, best-weather-apps-camping-australia, best-money-saving-travel-apps-australia), K 4 guides (best-weather-apps-new-zealand, fuel-price-apps-new-zealand, money-saving-travel-apps-new-zealand, working-holiday-apps-new-zealand) plus the three K app guides carried over (campermate-alternatives, rankers-alternatives, free-camping-apps-new-zealand).
- Result: A ja 80/80 guides, K ja 89/89 guides, UI 220/220 (testimonials excluded), 3/3 pages on both. `npm run translations:stamp -- --locale ja` run in both repos (A 6396, K 5301 stamps); `content:check` passes with ja 0 stale, 0 unstamped, no number-parity errors, no ja brand-count differences.
- KiwiCamping rule drift is in ja: blue warrants stopped counting on 7 June 2026, Apple Look Around (no Street View), overseas licences 18 months for arrivals 1 Nov 2024 to 31 Oct 2026 and 12 months from 1 Nov 2026, holiday park NZ$56. Pass boundary kept: AU only BookEasy stays and tours are free, NZ only BookIt stays and tours are free. No "offline map" wording anywhere.
- Fixed on the way: the privacy page's Apple brand count (ja said Apple twice where English says it once) in both repos.
- Sampled top to bottom against English: privacy (A), camping-rules-queensland (A), hipcamp-alternatives (A), terms (K), doc-huts (K), campermate-alternatives (K).
- English inconsistencies for A-content (not fixed in ja): best-time-camping-australia May to October vs May to September; NT wet season Dec-Mar vs Nov-Apr; NZ severe-weather FAQ "exhausted alpine passes"; water guide five litres vs four to five; left-side driving guide assumes right-hand-traffic readers; Victoria High Country still says Queen's Birthday; K DOC guide four vs five categories.
- Style notes: first-mention （） glosses for agency names and sign terms follow the style guide; no other glosses added. Traditional Owners = 先住民の伝統的土地所有者（Traditional Owners）, which the style guide lacks (add an entry).

## Guide order (pages-3m.tsv impressions)
- A: alcohol-coffee-drink-prices, sleeping-in-car, camping-rules-nsw, public-transport-costs, eating-out, camping-rules-wa, dump-points, camping-rules-victoria, grocery-prices, interstate-biosecurity, campervan-budget, accommodation-costs, rules-sa, domestic-flights, rules-act, rules-qld, road-signs, caravan-vs-holiday-park, towing, best-time, rules-nt, state-differences, camping-fees, travel-cost, fuel-cost, rules-tas, is-free-camping-legal, without-signal, campervan-driving-safety, water-planning, bus-train-costs, campfires, overseas-licence-state, best-camping-app, driving-road-rules-visitors, then the zero-impression rest.
- K: grocery-prices, doc-huts, public-transport-costs, road-signs, biosecurity-gear, doc-campsite-rules, fuel-cost, campervan-road-rules, eating-out, travel-cost, speed-limits, beer-wine-coffee, towing, wof-registration, accommodation-costs, overseas-licence, sandflies, volcanic-safety, dogs, domestic-flights, cook-strait-ferry, kauri-dieback, bus-ferry-train, alcohol-fatigue, hut-etiquette, river-crossing, left-side-driving, driving-day-planner, wildlife-livestock, then the zero-impression rest.

## Blockers / notes for the orchestrator
- **Protected terms block natural CJK.** The shared catalogs protect "New South Wales", "Queensland", "Victoria", "Tourism Australia", "North Island", "South Island", "Stewart Island", "Aoraki" and others. A miss is an error, so the engine rejects ニューサウスウェールズ州 or 南島. That affects about 150 AU units. Fix used, the same one the zh-hans thread uses: a separate ja-only catalog per repo. It protects only the brands, AUD/NZD, DOC and Waka Kotahi, puts the exonyms in a ja glossary, and lists the testimonial keys under `untranslatedKeys`. If `locales:sync` generates the config, it needs to carry per-locale protected terms or exemptions, or an engine option such as `exceptLocales`.
- **Testimonials.** `isTranslated` (lib/localized.ts) requires every ui key, including review1..9 and reviewsEyebrow/reviewsTitle. ja never fills them, so the foundation thread's platform has to exempt them for new locales, or ja can never go live.
- `content:check` does not see ja until the platform registers it (`localeCodes`). Until then, completeness is verified with the engine audit plus a local structure check.
- App ja strings (read-only, for the app team): 状態によるフィルター (Filter by state), 訪問しました (Visited), すべて保存されました (All saved), 探検する (Explore), ダンプステーション, 自己完結型 and 自給式車両 are mistranslations. The ASO ja subtitle claims オフライン地図.

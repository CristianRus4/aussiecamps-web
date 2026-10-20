# i18n-ko progress (Max account)

Thread: i18n-ko. Language: Korean (`ko`, engine locale `ko`). Branches: `i18n/a-ko` (aussiecamps-web), `i18n/k-ko` (kiwicamping-web). Never pushed.

## Setup decisions
- Style guide: `docs/translation-style/ko.md` (identical in both repos). Register 해요체.
- Engine: a Korean-only catalog in each `docs/translation.config.json` (`aussiecamps-website-ko`, `kiwicamping-website-ko`), same `en.json` source, protecting only brands/currency (AU: AussieCamps, AussieCamping, AUD; NZ: KiwiCamping, NZD, DOC, Aotearoa, Aoraki, Waka Kotahi). Reason: the shared catalog protects English state/island names ("Queensland", "North Island"), so Korean exonyms (퀸즐랜드, 북섬) would be rejected. Same approach as the zh-hans thread.
- Testimonials (`ui.review*`, `ui.reviewsEyebrow`, `ui.reviewsTitle`) are `untranslatedKeys` for ko and never translated.
- Working files (packets, values) live outside the repos in `/tmp/ko-work/`.

## Done
- Style guide written (both repos).
- UI (220 strings, testimonials excluded), consent strings and support/privacy/terms: AU and NZ applied (privacy synced to the Website analytics section).
- AU guides: 39 translated (all older guides; see ko.json). NZ guides: 40 translated.
- 2026-10-20: both branches squashed and rebased onto main (M2 + tools hubs). Backup branches `i18n/a-ko-pre-rebase` / `i18n/k-ko-pre-rebase` hold the old history. Ko stays on its own dedicated engine catalog (`*-website-ko`), `locales:sync` drops ko from the shared catalog.

## In progress / next (as of 2026-10-20)
- Done this session: link-markup fix (AU 135, NZ 83 units); NZ guides best-nz-camping-apps, where-to-camp, east-cape, coromandel-rotorua, northland, arthurs-pass, taranaki, picton-kaikoura, wanaka-haast, nelson-abel-tasman, bay-of-islands, banks-peninsula, rakiura, three-week route, christchurch-tekapo; AU road trips brisbane-cape-tribulation, great-ocean-road, melbourne-adelaide, perth-broome, east-coast, sunshine-coast, gibb-river, adelaide-uluru plus campfires and overseas-driver-licence-australia-state-guide.
- Drafting now: AU batch 3 (driving-in-australia-road-rules-visitors, nullarbor, australian-alps, flinders-ranges, red-centre-way); NZ core batch (freedom-camping-rules, freedom-camping-guide, doc-campsites, holiday-parks, camping-fees-2026). Each draft goes through a separate native-voice review before apply.
- Queue after that: remaining AU road trips and guides (tasmania loop, darwin-kakadu, sydney-south-coast, queensland-outback-way, south-west-wa, victoria-high-country, kangaroo-island, blue-mountains, driving-in-australia-overseas-licence, camping-with-dogs, packing-list, first-campervan-trip, fuel-planning, weather-safety, responsible-camping, choosing-campsite); remaining NZ road trips and guides; then the `tools` namespace (AU 116 keys, NZ 152), consent/article namespaces if new keys appear.
- Workflow: /tmp/ko-work (snapshot.py, check.py, normalize.py, mkinput.py, apply.zsh, audit.sh); vals/<n>/ drafts, vals/<n>-rev/ reviewed. apply is atomic per batch: one rejected unit rejects the batch (watch for protected terms like Aoraki needing the Latin form in each unit that has it in English).

## Notes for the orchestrator
- English source issues seen (not changed, English is not ours): AU `ui.metaKeywords` contains "offline camping map Australia" and NZ has "offline camping map NZ" (Korean uses 오프라인 캠핑 앱 instead); AU `pages.support.sections[5].paragraphs[0]` says "Map and place details are free", which conflicts with the Pass boundary.
- The site's locale wiring (lib/locales.json) does not list ko yet; ko.json is ignored by `content:check` until foundation registers it.

## 2026-10-21: status after two merges of origin/main (complete)
- Both branches merged origin/main twice (second merge brought 3 new AU and 4 new NZ app-comparison guides plus one changed AU unit). Stale units were found by diffing English before and after each merge, not by stamps, and every changed or new unit was translated.
- AU: 6,397 of 6,397 units, all 80 guides, tools, UI, support/privacy/terms. NZ: 5,302 of 5,302 units, all 89 guides, tools, UI, support/privacy/terms.
- Checks (2026-10-21, after the second merge, both branches 0 commits behind origin/main): `translations:stamp` run, `content:check` exit 0 with 0 stale and 0 amount-parity errors, `npm run check` passes in both repos, engine audit complete (warnings only: glossary, source-equal brand names, script).
- Testimonials (`ui.review*`) and the privacy/terms wording are untouched English-faithful translations; the locale is still `draft` in lib/locales.json (orchestrator flips it).
- English source quirks seen, translated as written: Australian Alps chain rule wording, "Premium pass" vs "Pass" in NZ guides, Sydney to Cairns distance (2,500 vs 2,400 km), Tasmania "holiday parks pass" tip, NZ Glenorchy road 46 vs 45 km, campfire total-ban gas wording, best-time FAQ (late Feb-March) vs body (March-April).
- Korean-side choices: 벌금 단위(penalty unit), 프리미엄 패스, 둘러보기(Look Around), NZTA = 뉴질랜드 교통청, 동부 해안 (never 동해안), 그린 워런트.
- Tooling in /tmp/ko-work (scripts: remap.py, show.py, shownew.py, mk.py, finish.py, go.sh, apply.zsh, apply2.zsh, scaffold.py, prune.py, check.py, negcheck.py). Apply is atomic per batch; always confirm "written" > 0. Avoid "$N, <digit>" and "$N. <digit>" in Korean text (content:check reads them as another amount).
- Environment: qrcode, dijkstrajs, pngjs, yargs were copied from the main checkouts into both worktree node_modules (untracked) so `npm run check` can build.
- Remaining work for this lane: none. If main adds more English guides, re-run the delta diff (en.json before/after merge) and translate new units.

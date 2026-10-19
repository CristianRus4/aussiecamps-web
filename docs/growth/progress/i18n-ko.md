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

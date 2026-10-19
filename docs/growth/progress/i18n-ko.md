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
- Link-markup fix: the new English has `<a data-guide>` links in guides already translated (AU 135 units, NZ 83). Fix files /tmp/ko-work/fix/{au,nz}-out.json, then apply.
- NZ batch 1 (writing): best-nz-camping-apps, where-to-camp-in-new-zealand, east-cape-road-trip, coromandel-rotorua-road-trip, northland-cape-reinga-camping-route.
- Queue (impressions order, /tmp/ko-work/{au,nz}-queue.json): AU road trips and guides (brisbane-to-cape-tribulation, great-ocean-road-camping-guide, ...), NZ remaining guides and road trips; then `tools` namespaces (AU 116 keys, NZ 152), consent/article namespaces if new keys appear.
- Working files in /tmp/ko-work (scripts: snapshot.py, check.py, normalize.py, mkinput.py, apply.zsh, audit.sh).

## Notes for the orchestrator
- English source issues seen (not changed, English is not ours): AU `ui.metaKeywords` contains "offline camping map Australia" and NZ has "offline camping map NZ" (Korean uses 오프라인 캠핑 앱 instead); AU `pages.support.sections[5].paragraphs[0]` says "Map and place details are free", which conflicts with the Pass boundary.
- The site's locale wiring (lib/locales.json) does not list ko yet; ko.json is ignored by `content:check` until foundation registers it.

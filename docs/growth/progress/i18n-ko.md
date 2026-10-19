# i18n-ko progress (Max account)

Thread: i18n-ko. Language: Korean (`ko`, engine locale `ko`). Branches: `i18n/a-ko` (aussiecamps-web), `i18n/k-ko` (kiwicamping-web). Never pushed.

## Setup decisions
- Style guide: `docs/translation-style/ko.md` (identical in both repos). Register 해요체.
- Engine: a Korean-only catalog in each `docs/translation.config.json` (`aussiecamps-website-ko`, `kiwicamping-website-ko`), same `en.json` source, protecting only brands/currency (AU: AussieCamps, AussieCamping, AUD; NZ: KiwiCamping, NZD, DOC, Aotearoa, Aoraki, Waka Kotahi). Reason: the shared catalog protects English state/island names ("Queensland", "North Island"), so Korean exonyms (퀸즐랜드, 북섬) would be rejected. Same approach as the zh-hans thread.
- Testimonials (`ui.review*`, `ui.reviewsEyebrow`, `ui.reviewsTitle`) are `untranslatedKeys` for ko and never translated.
- Working files (packets, values) live outside the repos in `/tmp/ko-work/`.

## Done
- Style guide written (both repos).
- UI (220 strings, testimonials excluded), consent strings and support/privacy/terms: AU and NZ applied (privacy re-synced to the Website analytics section on 2026-10-19).
- AU guides (26/50): camping-rules-new-south-wales, camping-rules-queensland, camping-rules-victoria, camping-rules-south-australia, camping-rules-western-australia, camping-rules-northern-territory, camping-rules-act, sleeping-in-car-australia, interstate-biosecurity-road-trip, caravan-park-vs-holiday-park, dump-points-australia-guide, campervan-road-trip-budget-australia, best-time-camping-australia, how-to-plan-trip-aussiecamps, how-to-use-aussiecamps-filters, save-collections-aussiecamps, aussiecamps-place-details, aussiecamps-widgets-guide, australia-grocery-prices-2026, eating-out-australia-prices-2026, alcohol-coffee-drink-prices-australia, accommodation-costs-australia-2026, public-transport-costs-australia-2026, domestic-flight-costs-australia-2026, australian-road-signs-visitors-guide, towing-caravan-australia-road-rules.
- NZ guides (22/43): doc-huts-new-zealand-guide, doc-campsite-rules, dogs-camping-new-zealand, kauri-dieback-camping-travel, new-zealand-biosecurity-camping-gear, sandflies-new-zealand-camping, volcanic-safety-new-zealand-travel, new-zealand-road-signs-visitors, overseas-driver-licence-new-zealand, campervan-road-rules-new-zealand, wof-registration-campervan-new-zealand, towing-caravan-new-zealand, speed-limits-new-zealand-visitors, cook-strait-ferry-campervan-guide, new-zealand-travel-cost-2026, new-zealand-grocery-prices-2026, eating-out-new-zealand-prices-2026, beer-wine-coffee-prices-new-zealand, accommodation-costs-new-zealand-2026, new-zealand-road-trip-fuel-cost-2026, public-transport-costs-new-zealand-2026, domestic-flight-costs-new-zealand-2026.

## In progress / next
- Guides in order of GSC impressions (pages-3m.tsv), interleaving both sites.
  - AU in progress: australia-grocery-prices-2026, interstate-biosecurity-road-trip, campervan-road-trip-budget-australia, accommodation-costs-australia-2026 (written, in self-review).
  - NZ in progress: dogs-camping-new-zealand, domestic-flight-costs-new-zealand-2026, cook-strait-ferry-campervan-guide, kauri-dieback-camping-travel, accommodation-costs-new-zealand-2026, overseas-driver-licence-new-zealand, sandflies-new-zealand-camping, volcanic-safety-new-zealand-travel.
- Later: road trips, K legacy pages, consent/article/tools namespaces after foundation merges.

## Notes for the orchestrator
- English source issues seen (not changed, English is not ours): AU `ui.metaKeywords` contains "offline camping map Australia" and NZ has "offline camping map NZ" (Korean uses 오프라인 캠핑 앱 instead); AU `pages.support.sections[5].paragraphs[0]` says "Map and place details are free", which conflicts with the Pass boundary.
- The site's locale wiring (lib/locales.json) does not list ko yet; ko.json is ignored by `content:check` until foundation registers it.

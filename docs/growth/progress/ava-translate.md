# ava-translate (CNTXT-875, CNTXT-876): wave 2 guide translations

Stopped for the night on 2026-10-21 (resumes tomorrow, CNTXT-901). Text is machine-translated (Gemma 4 E4B) and sampled, not reviewed by a person.

## Done
- AussieCamps, branch `i18n/a-wave2`, commit 86b29fc: Danish (da), 5 guides: christmas-summer-camping-australia-2026-27, wet-season-camping-top-end-northern-wa, camps-australia-wide-alternatives, best-apps-lap-of-australia, best-dump-point-toilet-apps-australia.
  Checked with a 35-item random sample with back-translation, 120 negation or "we" strings and 3 mechanical flags, reviewed by a Sonnet helper (about 115 strings corrected).
- KiwiCamping, branch `i18n/k-wave2`: nothing translated yet.

## Stopped at
- AussieCamps de batch 1 (the same 5 guides) was killed mid-run; nothing written to de.json.
- Still missing everywhere: AussieCamps 35 guides per language (30 for da), KiwiCamping 29 per language (15 languages). All are scheduled (publishAt 2026-10-31 and later).

## Resume
- Use `decoder translate` with `DECODER_SLOTS=6` on the shared server (8178); never start a server while one answers.
- Helper scripts live in /tmp/ava-tr (tr.mjs, repost.mjs, check.mjs, sample.mjs, packet.mjs, fix.mjs, keep and rules files); rebuild them if /tmp was cleared.
- Order: da, de, fr, it, nl, es, pt, sv, nb, ja, ko, zh-hans, zh-hant, cs, pl; earliest publishAt first, about 5 guides per batch.

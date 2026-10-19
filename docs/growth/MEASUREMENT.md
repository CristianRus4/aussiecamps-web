# Measurement: AussieCamps (aussiecamps.app)

## Google Analytics 4
- **Account:** CristianRus4 (a44324492).
- **Property:** "AussieCamps website (aussiecamps.app)", property ID **559522574**. Web stream ID 16156150205, measurement ID **G-XL23QF1F3F**.
- **Settings:**
  - Google signals off; ad personalisation off. Set in code with `allow_google_signals:false` and `allow_ad_personalization_signals:false`.
  - Event and user data retention: 14 months.
  - Linked to Search Console (sc-domain:aussiecamps.app) on 2026-10-19.
  - Enhanced measurement on: page views, scrolls, outbound clicks and more.
- **Code:** `lib/analytics.ts` renders an inline `data-static-keep` script, which the exporter keeps.
  - Consent Mode v2 defaults: `analytics_storage` is denied for EEA, UK and CH plus the EU outermost regions, Crown dependencies, Gibraltar and the European microstates. It is granted elsewhere. Ad storage and ad signals are denied everywhere.
  - If the visitor's time zone is in Europe and no choice is stored, the consent bar shows and analytics stays denied until they accept.
  - Cookies expire after 13 months (`cookie_expires` = 34,128,000 seconds).
- **Events:**
  - `page_view` carries `content_group`, `page_kind`, `site_locale`, `guide_slug` and `guide_category`.
  - `app_store_click` fires on every App Store link. Parameters: `placement` (from `data-cta`), `campaign_token` (`ct`), `link_url`, plus the page context. **This is the download-intent event: mark it as a key event in GA4 once it first appears (Admin, Events).**
  - `tool_used` fires from the calculators via `window.acTrack`.
- **To do in GA4 once events arrive:**
  - Register event-scoped custom dimensions `placement`, `site_locale`, `page_kind`, `guide_slug`, `guide_category`, `campaign_token` and `tool`.
  - Mark `app_store_click` as a key event.

## App Store campaign links
- **Provider token:** pt=127436485 (Cntxt Limited). App ID: 6801098680.
- **Link format:** `https://apps.apple.com/app/id6801098680?pt=127436485&ct=w_<placement>_<locale>&mt=8`, built by `appStoreUrl()` in `lib/app-store.ts`.
- **Token limit:** App Store Connect allows campaign tokens up to 30 characters.
- **Placements:** hdr, hero, card, stick, foot, inl, tool, hub, sb (smart banner), qr, dl (/download page), llms. Locale is `en` or the locale segment.
- **Where to read it:**
  - App Store Connect: Apps, then AussieCamps, Analytics, Acquisition, Campaigns. Downloads per `ct`, with a 24 to 48 hour lag. Campaigns with fewer than 5 users are hidden.
  - Acquisition, then Sources, shows Web Referrer per domain.
  - Or use `asc analytics` reports.

## Search Console
- **Property:** sc-domain:aussiecamps.app.
- **Sitemap:** https://aussiecamps.app/sitemap.xml was submitted or resubmitted on 2026-10-19. Before that, the sitemap was either never submitted (aussiecamps) or last read on 20 Nov 2025 (campingapp).
- **Baselines:** `docs/growth/gsc/2026-10-19/`.

## Weekly loop
Each week:
1. Pull GSC pages and queries, GA4 `app_store_click` by placement, locale and page, and App Store Connect campaigns and web referrer.
2. Save them to `docs/growth/data/<date>/`.
3. Rank pages into double down, fix or prune. See `docs/growth/PLAN.md`, "After today: measurement loop".

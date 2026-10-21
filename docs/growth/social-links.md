# Social bio links

Put the site address in Instagram, TikTok and Facebook bios with a short tag. The app is iPhone-only, so this only
changes anything on iPhones and iPads; Android, desktop and crawlers always get the normal site.

| Where | Link |
|---|---|
| Instagram bio | https://aussiecamps.app/?s=ig |
| TikTok bio | https://aussiecamps.app/?s=tt |
| Facebook page | https://aussiecamps.app/?s=fb |

What happens (lib/social.ts, components/social.tsx):
- Instagram or Facebook in-app browser: straight to the App Store. If the page is still open 1.5 s later, the
  "open in your browser" overlay appears as a fallback.
- TikTok in-app browser (it blocks App Store links): a full-screen overlay with an arrow to the ••• menu and the
  steps "Tap ••• → Open in browser", plus a Download button.
- Safari or Chrome with the tag (after "Open in browser", which keeps the URL): straight to the App Store.
- Without a tag, only the home pages react in the in-app browsers; guides shared in posts stay normal pages.

Each route has its own App Store campaign token (w_ig_en, w_tt_en, w_fb_en), so App Store Connect → Analytics →
Campaigns shows downloads per platform. GA4 records a social_open event (platform, action redirect or overlay).

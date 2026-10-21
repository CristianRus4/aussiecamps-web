# Social bio links

Put the site address in Instagram, TikTok and Facebook bios with a short tag. The app is iPhone-only, so this only
changes anything on iPhones and iPads; Android, desktop and crawlers always get the normal site.

| Where | Link |
|---|---|
| Instagram bio (also Threads) | https://aussiecamps.app/?s=ig |
| TikTok bio | https://aussiecamps.app/?s=tt |
| Facebook page | https://aussiecamps.app/?s=fb |

What happens (lib/social.ts, components/social.tsx, tests/social-links.test.mjs):
- Instagram, Threads, Facebook or Messenger in-app browser: the tag is written into the address, then the page is
  replaced by the App Store. If the page is still visible 1.5 s later (the store did not open), the "open in your
  browser" overlay appears.
- TikTok in-app browser (it blocks App Store links): the tag is written into the address and a full-screen overlay
  points at the ••• menu ("Tap ••• → Open in browser"), with a Download button.
- Safari or Chrome with the tag (after "Open in browser", which keeps the address): the tag is removed from the
  address and the page is replaced by the App Store, once per browser session. A reload or a restored tab shows
  the site instead.
- Without a tag, only the home pages react in in-app browsers; guides shared in posts stay normal pages.
- Crawlers (Googlebot, Applebot, Bingbot and others) are never redirected; ?s= addresses are canonical to the clean URL.

Measuring: each route has its own App Store campaign token (w_ig_en, w_tt_en, w_fb_en, whatever the page language).
App Store Connect → Analytics → Campaigns is the source of truth. GA4 cannot see a redirect (the page leaves before
GA4 loads); it records a social_open event only when the overlay shows.

Before putting the links in bios, check once on a real iPhone (current app versions):
1. Instagram: post or DM the link to yourself, tap it: the App Store should open AussieCamps.
2. TikTok: tap the bio link: the overlay should show; ••• → Open in browser should open the App Store.
3. Facebook and Messenger: same as Instagram.
4. Safari: open https://aussiecamps.app/?s=tt: the App Store opens; come back and reload: the site shows.
If Instagram shows Apple's web preview instead of the App Store app, tapping "View" there still works.
The overlay text is English on every language's home page for now.

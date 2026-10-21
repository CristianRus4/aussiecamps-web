import { appStoreUrl, type CtaPlacement } from "@/lib/app-store";

/**
 * Social links that land people in the App Store.
 *
 * The owner puts the plain site address in Instagram and TikTok bios, tagged with `?s=ig`, `?s=tt` or
 * `?s=fb` (for example `https://aussiecamps.app/?s=tt`). The app is iPhone-only, so all of this applies
 * to iPhones and iPads; Android and desktop visitors always get the normal site.
 *
 * - In Instagram's or Facebook's in-app browser, on a home page or with a tag: go straight to the App
 *   Store (those browsers let App Store links through). If the page is still showing 1.5 s later, show
 *   the overlay as a fallback.
 * - In TikTok's in-app browser (which blocks App Store links), on a home page or with a tag: show a
 *   full-screen overlay pointing at the ••• menu ("Open in browser"), with a Download button as a backup.
 * - In Safari or Chrome with a tag (the visitor tapped "Open in browser", which keeps the URL): go
 *   straight to the App Store.
 * - Anything else, including every guide opened from social without a tag: the normal site.
 *
 * Each route uses its own campaign token (`w_ig_en`, `w_tt_en`, `w_fb_en`), so App Store Connect's
 * Campaigns report counts social downloads per platform. A GA4 `social_open` event records the action.
 */
export const socialPlatforms = ["ig", "tt", "fb"] as const satisfies readonly CtaPlacement[];
export type SocialPlatform = (typeof socialPlatforms)[number];

/** The App Store link for each platform's route. */
export const socialStoreUrls = (): Record<SocialPlatform, string> =>
  Object.fromEntries(socialPlatforms.map((platform) => [platform, appStoreUrl({ placement: platform })])) as Record<SocialPlatform, string>;

/**
 * The inline script, kept by the static exporter through `data-static-keep`. ES5 on purpose: in-app
 * browsers can be old WebViews. It runs at the top of <body>, so the redirect happens before the page
 * paints; the overlay waits for the DOM.
 */
export function socialScript(stores: Record<SocialPlatform, string> = socialStoreUrls()): string {
  return `(function(){try{
var n=navigator,ua=n.userAgent||"",l=location,d=document,S=${JSON.stringify(stores)};
var ios=/iPhone|iPad|iPod/.test(ua)||(n.platform==="MacIntel"&&n.maxTouchPoints>1);
var app=/Instagram/.test(ua)?"ig":/musical_ly|TikTok|BytedanceWebview|ByteLocale|trill_/i.test(ua)?"tt":/FBAN|FBAV|FB_IAB|FBIOS/.test(ua)?"fb":"";
var m=/[?&]s=(ig|tt|fb)(?:&|$)/.exec(l.search),tag=m?m[1]:"";
var home=/^\\/(?:[a-z]{2}(?:-[a-z]+)?\\/)?(?:index\\.html)?$/.test(l.pathname);
if(!ios||(!tag&&!(app&&home)))return;
var key=app||tag,store=S[key];
var track=function(a){try{if(window.acTrack)window.acTrack("social_open",{platform:key,action:a})}catch(e){}};
var show=function(){var o=d.querySelector("[data-social-overlay]");if(!o||!o.hidden)return;o.hidden=false;o.setAttribute("data-platform",key);var b=o.querySelector("[data-social-store]");if(b)b.href=store;var c=o.querySelector("[data-social-close]");if(c)c.onclick=function(){o.hidden=true;d.documentElement.style.overflow=""};d.documentElement.style.overflow="hidden"};
var later=function(){if(d.readyState==="loading")d.addEventListener("DOMContentLoaded",show);else show()};
if(!app){track("redirect");l.replace(store);return}
if(app==="tt"){track("overlay");later();return}
track("redirect");l.href=store;setTimeout(later,1500);
}catch(e){}})();`;
}

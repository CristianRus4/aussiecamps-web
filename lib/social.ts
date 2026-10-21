import { appStoreUrl, type CtaPlacement } from "@/lib/app-store";
import locales from "@/lib/locales.json";

/**
 * Social links that land people in the App Store.
 *
 * The owner puts the site address in Instagram, TikTok and Facebook bios, tagged with `?s=ig`, `?s=tt` or
 * `?s=fb` (docs/growth/social-links.md). The app is iPhone-only, so all of this applies to iPhones and
 * iPads; Android, desktop and crawlers always get the normal site.
 *
 * - Instagram, Threads or Facebook/Messenger in-app browser, on a home page or with a tag: replace the page
 *   with the App Store. If the page is still visible 1.5 s later (the store did not open), show the overlay.
 * - TikTok's in-app browser (it blocks App Store links), on a home page or with a tag: a full-screen overlay
 *   pointing at the ••• menu ("Open in browser"), with a Download button as a backup.
 * - In every in-app case the tag is written into the address first, so "Open in browser" carries it.
 * - Safari or Chrome with a tag (the visitor tapped "Open in browser"): remove the tag from the address,
 *   then replace the page with the App Store, once per browser session. A reload or a restored tab then
 *   shows the site instead of sending the visitor back to the store.
 * - Anything else, including guides opened from social without a tag: the normal site.
 *
 * Campaign tokens are per platform (`w_ig_en`, `w_tt_en`, `w_fb_en`), whatever the page language, so App
 * Store Connect's Campaigns report counts social downloads per platform. It is the source of truth: a
 * redirect leaves before GA4 can send anything, so GA4's `social_open` event only records the overlay.
 */
export const socialPlatforms = ["ig", "tt", "fb"] as const satisfies readonly CtaPlacement[];
export type SocialPlatform = (typeof socialPlatforms)[number];

/** The App Store link for each platform's route. */
export const socialStoreUrls = (): Record<SocialPlatform, string> =>
  Object.fromEntries(socialPlatforms.map((platform) => [platform, appStoreUrl({ placement: platform })])) as Record<SocialPlatform, string>;

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");

/** Matches the English home and every language's home: `/`, `/index.html`, `/da`, `/da/`, `/da/index.html`. */
export function homePathPattern(basePath = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "")): string {
  const segments = (locales as { segment: string }[]).map((locale) => escapeRegExp(locale.segment)).join("|");
  return `^${escapeRegExp(basePath)}/(?:index\\.html|(?:${segments})(?:/(?:index\\.html)?)?)?$`;
}

/**
 * The inline script, kept by the static exporter through `data-static-keep`. ES5 on purpose: in-app
 * browsers can be old WebViews. It runs at the top of <body>, so a redirect happens before the page
 * paints; the overlay waits for the DOM.
 */
export function socialScript(stores: Record<SocialPlatform, string> = socialStoreUrls(), home = homePathPattern()): string {
  return `(function(){try{
var n=navigator,ua=n.userAgent||"",l=location,d=document,w=window,S=${JSON.stringify(stores)},H=new RegExp(${JSON.stringify(home)});
if(/bot|crawl|spider|slurp|Applebot|bingbot|Lighthouse|HeadlessChrome|PageSpeed/i.test(ua))return;
if(!(/iPhone|iPad|iPod/.test(ua)||(n.platform==="MacIntel"&&n.maxTouchPoints>1)))return;
var app=/Instagram|Barcelona/.test(ua)?"ig":/musical_ly|TikTok|BytedanceWebview|ByteLocale|trill_/i.test(ua)?"tt":/FBAN|FBAV|FB_IAB|FBIOS|MessengerForiOS/.test(ua)?"fb":"";
var m=/[?&]s=(ig|tt|fb)(?:&|$)/.exec(l.search),tag=m?m[1]:"";
if(!tag&&!(app&&H.test(l.pathname)))return;
var key=app||tag,store=S[key],away=false;
var seen=function(){try{return w.sessionStorage.getItem("acSocial")==="1"}catch(e){return false}};
var mark=function(){try{w.sessionStorage.setItem("acSocial","1")}catch(e){}};
var address=function(add){var q=l.search.replace(/^\\?/,"").split("&"),k=[];for(var i=0;i<q.length;i++)if(q[i]&&!/^s=/.test(q[i]))k.push(q[i]);if(add)k.push("s="+key);return l.pathname+(k.length?"?"+k.join("&"):"")+l.hash};
var setAddress=function(add){try{w.history.replaceState(w.history.state,"",address(add))}catch(e){}};
var leave=function(){away=true};
d.addEventListener("visibilitychange",function(){if(d.hidden)away=true});w.addEventListener("pagehide",leave);w.addEventListener("blur",leave);
var show=function(){if(away)return;var o=d.querySelector("[data-social-overlay]");if(!o||!o.hidden)return;o.hidden=false;o.setAttribute("data-platform",key);var b=o.querySelector("[data-social-store]");if(b){b.href=store;b.setAttribute("data-cta",key)}var c=o.querySelector("[data-social-close]");if(c)c.onclick=function(){o.hidden=true;d.documentElement.style.overflow=""};d.documentElement.style.overflow="hidden";try{if(w.acTrack)w.acTrack("social_open",{platform:key,action:"overlay"})}catch(e){}};
var later=function(){if(d.readyState==="loading")d.addEventListener("DOMContentLoaded",show);else show()};
if(!app){setAddress(false);if(seen())return;mark();l.replace(store);return}
setAddress(true);
if(app==="tt"||seen()){later();return}
mark();l.replace(store);setTimeout(later,1500);
}catch(e){}})();`;
}

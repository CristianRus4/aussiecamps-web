import { GA_MEASUREMENT_ID } from "@/lib/site";

/**
 * Website analytics: GA4 behind Google Consent Mode v2.
 *
 * The site is a static export with every script stripped except the ones it marks to keep, so the
 * whole of analytics is one inline script (`data-static-keep="analytics"`, rendered early in <body>
 * by the root layout). It:
 *
 * 1. sets the Consent Mode defaults before anything else: everything denied in the EEA, the UK and
 *    Switzerland; elsewhere only `analytics_storage` granted; ad storage, ad user data and ad
 *    personalisation denied everywhere;
 * 2. re-applies a visitor's stored choice (localStorage, so no cookie is needed to remember "no");
 * 3. loads gtag.js and configures GA4 with Google signals and ad personalisation off, tagging the
 *    page with the `data-*` attributes the page put on <main>;
 * 4. shows the consent bar only to visitors with no stored choice whose time zone is in Europe
 *    (Google's own per-region default above is the backstop when the time zone is wrong), and
 *    reopens it from the footer's "Privacy choices" link;
 * 5. sends `app_store_click` for every App Store link through one delegated listener, and exposes
 *    `window.acTrack(name, params)` for tools and other pages to send their own events.
 *
 * With GA_MEASUREMENT_ID empty none of this renders: no script, no bar, no link.
 */
export const analyticsEnabled = GA_MEASUREMENT_ID !== "";

/** Where a refusal must be the default: the 27 EU states, the rest of the EEA, the UK and CH. */
export const consentRegions = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT",
  "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  "IS", "LI", "NO", "GB", "CH",
  // EU outermost regions and territories Google geolocates under their own codes, the Crown
  // dependencies and Gibraltar (their own GDPR-style laws) and the European microstates.
  "RE", "GP", "MQ", "GF", "YT", "MF", "AX", "GI", "JE", "GG", "IM", "MC", "AD", "SM", "VA",
] as const;

export const CONSENT_STORAGE_KEY = "ac_consent";

/** The kinds of page the site has, as `data-page-kind` on <main> and `page_kind` in GA4. */
export type PageKind = "home" | "guide" | "guides" | "tools" | "support" | "legal" | "hub" | "tool";

/**
 * The attributes every page puts on its <main>, read by the analytics script for page-level
 * dimensions. `locale` is `en` for English. `category` is always the English category name so
 * reports group the same guide across languages.
 */
export function mainData({ kind, locale = "en", slug, category }: { kind: PageKind; locale?: string; slug?: string; category?: string }) {
  return {
    "data-page-kind": kind,
    "data-locale": locale,
    ...(slug ? { "data-slug": slug } : {}),
    ...(category ? { "data-category": category } : {}),
  };
}

/** The inline bootstrap. Kept ES5 so it runs on any browser that can render the page. */
export function analyticsBootstrap(measurementId: string = GA_MEASUREMENT_ID): string {
  if (!/^G-[A-Z0-9]+$/.test(measurementId)) throw new Error(`Invalid GA4 measurement ID: ${measurementId}`);
  const denied = `ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"`;
  return `(function(){
var w=window,d=document,ID=${JSON.stringify(measurementId)},KEY=${JSON.stringify(CONSENT_STORAGE_KEY)};
var dl=w.dataLayer=w.dataLayer||[];
function gtag(){dl.push(arguments);}
w.gtag=gtag;
gtag("consent","default",{${denied},analytics_storage:"denied",region:${JSON.stringify(consentRegions)},wait_for_update:500});
gtag("consent","default",{${denied},analytics_storage:"granted"});
var stored=null;
try{stored=w.localStorage.getItem(KEY);}catch(e){}
if(stored!=="granted"&&stored!=="denied")stored=null;
if(stored)gtag("consent","update",{analytics_storage:stored});
if(!stored&&europe())gtag("consent","update",{analytics_storage:"denied"});
gtag("js",new Date());
var s=d.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+ID;
(d.head||d.documentElement).appendChild(s);
function page(){var m=d.querySelector("main"),x=(m&&m.dataset)||{};return{page_kind:x.pageKind||"",site_locale:x.locale||"",guide_slug:x.slug||"",guide_category:x.category||""};}
function europe(){try{var z=Intl.DateTimeFormat().resolvedOptions().timeZone||"";return z.indexOf("Europe/")===0||/^(Atlantic\\/(Canary|Madeira|Azores|Reykjavik)|Asia\\/(Nicosia|Famagusta)|Africa\\/Ceuta|America\\/(Guadeloupe|Martinique|Cayenne|Marigot)|Indian\\/(Reunion|Mayotte))$/.test(z);}catch(e){return false;}}
function show(open){var b=d.querySelector("[data-consent-bar]");if(!b)return;b.hidden=!open;d.documentElement.classList.toggle("consent-open",open);}
function clearCookies(){try{var h=(w.location&&w.location.hostname)||"";String(d.cookie||"").split(";").forEach(function(c){var n=c.split("=")[0].trim();if(/^_ga(_|$)/.test(n))["",h,"."+h.replace(/^www\\./,"")].forEach(function(dom){d.cookie=n+"=; Max-Age=0; path=/"+(dom?"; domain="+dom:"");});});}catch(e){}}
function choose(value){stored=value;try{w.localStorage.setItem(KEY,value);}catch(e){}gtag("consent","update",{analytics_storage:value});if(value==="denied")clearCookies();show(false);}
w.acTrack=function(name,params){var p=page(),o={site_locale:p.site_locale,page_kind:p.page_kind};if(params)for(var k in params)if(Object.prototype.hasOwnProperty.call(params,k))o[k]=params[k];gtag("event",name,o);};
function ready(){
var p=page();
gtag("config",ID,{allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:34128000,content_group:p.page_kind,page_kind:p.page_kind,site_locale:p.site_locale});
if(!stored&&europe())show(true);
d.addEventListener("click",function(e){
var t=e.target,c=t&&t.closest?t.closest("[data-consent-choice],[data-consent-open]"):null;
if(c){if(c.hasAttribute("data-consent-open")){e.preventDefault();show(true);}else{choose(c.getAttribute("data-consent-choice")==="granted"?"granted":"denied");}return;}
var a=t&&t.closest?t.closest('a[href*="apps.apple.com"]'):null;
if(!a)return;
var ct="";try{ct=new URL(a.href).searchParams.get("ct")||"";}catch(e){}
var q=page();
gtag("event","app_store_click",{placement:a.getAttribute("data-cta")||"",site_locale:q.site_locale,page_kind:q.page_kind,guide_slug:q.guide_slug,guide_category:q.guide_category,campaign_token:ct,link_url:a.href,transport_type:"beacon"});
});
}
if(d.readyState==="loading")d.addEventListener("DOMContentLoaded",ready);else ready();
})();`;
}

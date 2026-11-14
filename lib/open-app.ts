/**
 * "Open in app": the call to action on place pages, /place/ and /trip/ (never on guides). It opens that
 * exact place or trip in the app through its URL scheme, whose path is the page path:
 *
 *   aussiecamps://places/<state>/<slug>/    aussiecamps://place/#<payload>    aussiecamps://trip/#<payload>
 *
 * The link's href is the App Store (with its own campaign token), so without the script, or off an iPhone
 * or iPad, a tap simply goes to the store. On a desktop the label is "Open on iPhone" instead
 * (components/open-app-label.tsx) and the guides' QR hover encodes the page's own URL. On iOS the script tries the scheme first and goes to the store
 * only if the page is still showing after 1.5 seconds. Nothing happens until a tap: a page never tries
 * the scheme or redirects on load.
 */
export const APP_SCHEME = "aussiecamps";
export const OPEN_APP_LABEL = "Open in app";
/** On a desktop (no touch, wide screen: the guides' QR breakpoint) the same buttons read this instead,
 * hovering one shows a QR code of the page's own URL, and a click goes to the App Store. */
export const OPEN_ON_IPHONE_LABEL = "Open on iPhone";

/** The app link for a page path: `/places/nsw/x/` → `aussiecamps://places/nsw/x/`. A path ending in `#`
 * takes the page's current hash when tapped (/place/ and /trip/ carry their payload there). */
export const appLink = (path: string) => `${APP_SCHEME}://${path.replace(/^\/+/, "")}`;

/** The click handler, once per page, for every `a[data-open-app]`. Plain ES5 for the static export. */
export const openAppScript = `(function(){
var ios=/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
document.addEventListener("click",function(e){
var a=e.target&&e.target.closest?e.target.closest("a[data-open-app]"):null;
if(!a||!ios)return;
var target=a.getAttribute("data-open-app");
if(/#$/.test(target))target+=location.hash.replace(/^#/,"");
e.preventDefault();
var left=false,leave=function(){left=true;};
window.addEventListener("pagehide",leave);window.addEventListener("blur",leave);
document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden")left=true;});
location.href=target;
setTimeout(function(){window.removeEventListener("pagehide",leave);window.removeEventListener("blur",leave);if(!left&&document.visibilityState==="visible")location.href=a.href;},1500);
});
})();`;

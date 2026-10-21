import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import { homePathPattern, socialScript, socialStoreUrls } from "../lib/social.ts";

// Real user agents, so detection is checked against what the apps and crawlers actually send.
const UA = {
  instagramIos: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/22B83 Instagram 352.0.0.25.92 (iPhone15,2; iOS 18_1; en_AU; en; scale=3.00; 1179x2556; 646196931)",
  threadsIos: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/22B83 Barcelona 352.0.0.25.92 (iPhone15,2; iOS 18_1; en_AU; en; scale=3.00; 1179x2556)",
  tiktokIos: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_37.0.0 JsSdk/2.0 NetType/WIFI Channel/App Store ByteLocale/en Region/AU BytedanceWebview/d8a21c6",
  facebookIos: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/490.0.0.52.106;FBBV/680000000;FBDV/iPhone15,2;FBMD/iPhone;FBSN/iOS;FBSV/18.1;FBSS/3;FBCR/;FBID/phone;FBLC/en_AU;FBOP/5]",
  messengerIos: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 LightSpeed [FBAN/MessengerLiteForiOS;FBAV/490.0.0.20.111;FBBV/680000001;FBDV/iPhone15,2;FBMD/iPhone;FBSN/iOS;FBSV/18.1]",
  safariIos: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1",
  chromeIos: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/130.0.6723.90 Mobile/15E148 Safari/604.1",
  instagramAndroid: "Mozilla/5.0 (Linux; Android 14; Pixel 8 Build/AP2A.240905.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.86 Mobile Safari/537.36 Instagram 352.0.0.48.95 Android",
  chromeAndroid: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.86 Mobile Safari/537.36",
  desktop: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  googlebot: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.69 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  applebot: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1 (Applebot/0.1; +http://www.apple.com/go/applebot)",
  bingbotMobile: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
};

const stores = socialStoreUrls();
const script = socialScript(stores);

/**
 * Runs the shipped script in a fake page and reports what it did. `session` is the browser's
 * sessionStorage (share one object across calls to model a second visit); `hideFirst` makes the page go
 * to the background before the 1.5 s fallback fires, as it does when the App Store opens.
 */
function visit(ua, path, { session = {}, hideFirst = false } = {}) {
  const [pathname, search = ""] = path.split("?");
  const result = { replaced: undefined, address: undefined, overlay: false, storeButton: undefined, cta: undefined, events: [] };
  const button = { href: "#", setAttribute: (name, value) => { if (name === "data-cta") result.cta = value; } };
  const overlay = { hidden: true, setAttribute() {}, querySelector: (sel) => (sel === "[data-social-store]" ? button : { onclick: null }) };
  const location = { pathname, search: search ? `?${search}` : "", hash: "", replace: (url) => { result.replaced = url; } };
  const listeners = {};
  const document = { readyState: "complete", hidden: false, documentElement: { style: {} }, addEventListener: (type, fn) => { (listeners[type] ??= []).push(fn); }, querySelector: () => overlay };
  const timers = [];
  const window = {
    acTrack: (name, params) => result.events.push(`${name}:${params.platform}:${params.action}`),
    sessionStorage: { getItem: (k) => session[k] ?? null, setItem: (k, v) => { session[k] = v; } },
    history: { state: null, replaceState: (_s, _t, url) => { result.address = url; } },
    addEventListener: (type, fn) => { (listeners[type] ??= []).push(fn); },
  };
  vm.runInNewContext(script, { navigator: { userAgent: ua, platform: "iPhone", maxTouchPoints: 5 }, location, document, window, setTimeout: (fn) => timers.push(fn) });
  if (hideFirst) { document.hidden = true; for (const fn of listeners.visibilitychange ?? []) fn(); }
  for (const fn of timers) fn();
  result.overlay = !overlay.hidden;
  result.storeButton = button.href === "#" ? undefined : button.href;
  return result;
}

test("every social route has its own App Store campaign token", () => {
  for (const platform of ["ig", "tt", "fb"]) assert.match(stores[platform], new RegExp(`[?&]ct=w_${platform}_en(&|$)`));
  assert.equal(new Set(Object.values(stores)).size, 3);
});

test("the home pattern matches every language's home and nothing else", () => {
  const home = new RegExp(homePathPattern(""));
  for (const path of ["/", "/index.html", "/da", "/da/", "/da/index.html", "/zh-hans/", "/de/"]) assert.match(path, home, path);
  for (const path of ["/guides/", "/go/", "/tools/", "/da/guides/", "/xx/"]) assert.doesNotMatch(path, home, path);
  assert.match("/repo/da/", new RegExp(homePathPattern("/repo")));
});

test("Instagram, Threads, Facebook and Messenger in-app browsers on iPhone go to the App Store from a home page", () => {
  for (const [ua, platform] of [[UA.instagramIos, "ig"], [UA.threadsIos, "ig"], [UA.facebookIos, "fb"], [UA.messengerIos, "fb"]]) {
    for (const path of ["/", "/de/", "/zh-hans/", "/index.html"]) {
      const r = visit(ua, path, { hideFirst: true });
      assert.equal(r.replaced, stores[platform], `${platform} ${path}`);
      assert.equal(r.address, `${path}?s=${platform}`, "the tag is written into the address for Open in browser");
      assert.equal(r.overlay, false, "no fallback overlay once the App Store has opened");
    }
  }
});

test("the Instagram fallback overlay appears only if the App Store did not open", () => {
  const r = visit(UA.instagramIos, "/");
  assert.equal(r.replaced, stores.ig);
  assert.ok(r.overlay);
  assert.equal(r.storeButton, stores.ig);
  assert.equal(r.cta, "ig");
  assert.deepEqual(r.events, ["social_open:ig:overlay"]);
});

test("a second Instagram visit in the same session shows the overlay instead of redirecting again", () => {
  const session = {};
  visit(UA.instagramIos, "/", { session, hideFirst: true });
  const again = visit(UA.instagramIos, "/", { session });
  assert.equal(again.replaced, undefined);
  assert.ok(again.overlay);
});

test("Instagram keeps its own parameters and adds the tag after them", () => {
  const r = visit(UA.instagramIos, "/?utm_source=ig&fbclid=PAZ123", { hideFirst: true });
  assert.equal(r.address, "/?utm_source=ig&fbclid=PAZ123&s=ig");
  assert.equal(r.replaced, stores.ig);
});

test("TikTok's in-app browser on iPhone shows the open-in-browser overlay instead of redirecting", () => {
  for (const path of ["/", "/?s=tt", "/guides/camping-rules-victoria/?s=tt"]) {
    const r = visit(UA.tiktokIos, path);
    assert.equal(r.replaced, undefined);
    assert.ok(r.overlay, path);
    assert.equal(r.storeButton, stores.tt);
    assert.equal(r.address, `${path.split("?")[0]}?s=tt`, "Open in browser will carry the tag");
    assert.deepEqual(r.events, ["social_open:tt:overlay"]);
  }
});

test("Safari and Chrome on iPhone go to the App Store once, only with a bio tag, and drop the tag first", () => {
  const session = {};
  const first = visit(UA.safariIos, "/?s=tt", { session });
  assert.equal(first.replaced, stores.tt);
  assert.equal(first.address, "/", "the tag is removed, so a reload or a restored tab shows the site");
  const reload = visit(UA.safariIos, "/?s=tt", { session });
  assert.equal(reload.replaced, undefined, "no second redirect in the same session");
  assert.equal(visit(UA.chromeIos, "/?s=ig").replaced, stores.ig);
  assert.equal(visit(UA.safariIos, "/de/?s=fb&utm_campaign=bio").address, "/de/?utm_campaign=bio");
  for (const path of ["/", "/de/", "/guides/camping-rules-victoria/", "/?s=other"]) {
    const r = visit(UA.safariIos, path);
    assert.deepEqual([r.replaced, r.address, r.overlay], [undefined, undefined, false], path);
  }
});

test("guides opened from social without a tag stay normal pages", () => {
  for (const ua of [UA.instagramIos, UA.tiktokIos, UA.facebookIos]) {
    const r = visit(ua, "/guides/camping-rules-victoria/");
    assert.deepEqual([r.replaced, r.address, r.overlay], [undefined, undefined, false]);
  }
});

test("Android, desktop and crawlers always get the normal site (the app is iPhone-only)", () => {
  for (const ua of [UA.instagramAndroid, UA.chromeAndroid, UA.desktop, UA.googlebot, UA.applebot, UA.bingbotMobile]) {
    for (const path of ["/", "/?s=tt", "/?s=ig"]) {
      const r = visit(ua, path);
      assert.deepEqual([r.replaced, r.address, r.overlay, r.events.length], [undefined, undefined, false, 0], `${ua.slice(0, 40)} ${path}`);
    }
  }
});

test("the exported home page carries the social script and the hidden English overlay", async () => {
  const html = await readFile(new URL("../pages-dist/index.html", import.meta.url), "utf8");
  assert.match(html, /<script data-static-keep="social">/);
  assert.match(html, /<div class="social-overlay" lang="en"[^>]*data-social-overlay="[^"]*"[^>]*hidden=""/);
  assert.ok(html.indexOf('data-static-keep="social"') < html.indexOf("data-social-overlay"), "the script runs before the page content");
  assert.doesNotMatch(html.slice(html.indexOf("data-social-overlay")), /^[^]*?data-social-store[^>]*href="https:\/\/apps\.apple\.com/, "the overlay link is filled in by the script, not hard-coded");
});

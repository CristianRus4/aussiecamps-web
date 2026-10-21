import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import { socialScript, socialStoreUrls } from "../lib/social.ts";

// Real user agents, so the detection is checked against what Instagram, TikTok and Facebook send.
const UA = {
  instagramIos: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/22B83 Instagram 352.0.0.25.92 (iPhone15,2; iOS 18_1; en_AU; en; scale=3.00; 1179x2556; 646196931)",
  tiktokIos: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_37.0.0 JsSdk/2.0 NetType/WIFI Channel/App Store ByteLocale/en Region/AU BytedanceWebview/d8a21c6",
  facebookIos: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/490.0.0.52.106;FBBV/680000000;FBDV/iPhone15,2;FBMD/iPhone;FBSN/iOS;FBSV/18.1;FBSS/3;FBCR/;FBID/phone;FBLC/en_AU;FBOP/5]",
  safariIos: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1",
  chromeIos: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/130.0.6723.90 Mobile/15E148 Safari/604.1",
  instagramAndroid: "Mozilla/5.0 (Linux; Android 14; Pixel 8 Build/AP2A.240905.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.86 Mobile Safari/537.36 Instagram 352.0.0.48.95 Android",
  chromeAndroid: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.86 Mobile Safari/537.36",
  desktop: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  googlebot: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.69 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
};

const stores = socialStoreUrls();
const script = socialScript(stores);

/** Runs the shipped script in a fake page and reports what it did. */
function visit(ua, path) {
  const [pathname, search = ""] = path.split("?");
  const result = { href: undefined, replaced: undefined, overlay: false, storeButton: undefined, events: [] };
  const button = { href: "" };
  const overlay = { hidden: true, setAttribute() {}, querySelector: (sel) => (sel === "[data-social-store]" ? button : { onclick: null }) };
  const location = { pathname, search: search ? `?${search}` : "", replace: (url) => { result.replaced = url; } };
  Object.defineProperty(location, "href", { set: (url) => { result.href = url; } });
  const document = { readyState: "complete", documentElement: { style: {} }, addEventListener() {}, querySelector: () => overlay };
  const window = { acTrack: (name, params) => result.events.push(`${name}:${params.platform}:${params.action}`) };
  vm.runInNewContext(script, { navigator: { userAgent: ua, platform: "iPhone", maxTouchPoints: 5 }, location, document, window, setTimeout: (fn) => fn() });
  result.overlay = !overlay.hidden;
  result.storeButton = button.href || undefined;
  return result;
}

test("every social route has its own App Store campaign token", () => {
  for (const platform of ["ig", "tt", "fb"]) assert.match(stores[platform], new RegExp(`[?&]ct=w_${platform}_en(&|$)`));
  assert.equal(new Set(Object.values(stores)).size, 3);
});

test("Instagram and Facebook in-app browsers on iPhone go to the App Store from a home page", () => {
  for (const [ua, platform] of [[UA.instagramIos, "ig"], [UA.facebookIos, "fb"]]) {
    for (const path of ["/", "/de/", "/zh-hans/", "/?s=" + platform]) {
      const r = visit(ua, path);
      assert.equal(r.href, stores[platform], `${platform} ${path}`);
      assert.ok(r.overlay, "the overlay is the fallback if the store did not open");
      assert.deepEqual(r.events, [`social_open:${platform}:redirect`]);
    }
  }
});

test("TikTok's in-app browser on iPhone shows the open-in-browser overlay instead of redirecting", () => {
  for (const path of ["/", "/?s=tt", "/guides/camping-rules-victoria/?s=tt"]) {
    const r = visit(UA.tiktokIos, path);
    assert.equal(r.href, undefined);
    assert.equal(r.replaced, undefined);
    assert.ok(r.overlay, path);
    assert.equal(r.storeButton, stores.tt);
    assert.deepEqual(r.events, ["social_open:tt:overlay"]);
  }
});

test("Safari and Chrome on iPhone go straight to the App Store only with a bio tag", () => {
  assert.equal(visit(UA.safariIos, "/?s=tt").replaced, stores.tt);
  assert.equal(visit(UA.chromeIos, "/?s=ig").replaced, stores.ig);
  assert.equal(visit(UA.safariIos, "/de/?s=fb").replaced, stores.fb);
  for (const path of ["/", "/de/", "/guides/camping-rules-victoria/", "/?s=other"]) {
    const r = visit(UA.safariIos, path);
    assert.deepEqual([r.href, r.replaced, r.overlay], [undefined, undefined, false], path);
  }
});

test("guides opened from social without a tag stay normal pages", () => {
  for (const ua of [UA.instagramIos, UA.tiktokIos, UA.facebookIos]) {
    const r = visit(ua, "/guides/camping-rules-victoria/");
    assert.deepEqual([r.href, r.replaced, r.overlay], [undefined, undefined, false]);
  }
});

test("Android, desktop and crawlers always get the normal site (the app is iPhone-only)", () => {
  for (const ua of [UA.instagramAndroid, UA.chromeAndroid, UA.desktop, UA.googlebot]) {
    for (const path of ["/", "/?s=tt", "/?s=ig"]) {
      const r = visit(ua, path);
      assert.deepEqual([r.href, r.replaced, r.overlay, r.events.length], [undefined, undefined, false, 0], `${ua.slice(0, 40)} ${path}`);
    }
  }
});

test("the exported home page carries the social script and the hidden overlay", async () => {
  const html = await readFile(new URL("../pages-dist/index.html", import.meta.url), "utf8");
  assert.match(html, /<script data-static-keep="social">/);
  assert.match(html, /<div class="social-overlay"[^>]*data-social-overlay="[^"]*"[^>]*hidden=""/);
  assert.doesNotMatch(html.slice(html.indexOf("data-social-overlay")), /^[^]*?data-social-store[^>]*href="https:\/\/apps\.apple\.com/, "the overlay link is filled in by the script, not hard-coded");
  assert.ok(html.indexOf('data-static-keep="social"') < html.indexOf("data-social-overlay"), "the script runs before the page content");
});

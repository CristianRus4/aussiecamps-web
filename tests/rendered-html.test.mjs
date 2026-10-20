import assert from "node:assert/strict";
import test from "node:test";
import vm from "node:vm";
import { readFile, readdir } from "node:fs/promises";
import { APP_STORE_URL, APPLE_PROVIDER_TOKEN, GA_MEASUREMENT_ID } from "../lib/site.ts";
import { CAMPAIGN_TOKEN_MAX, campaignTokenPattern, ctaPlacements, smartBannerContent } from "../lib/app-store.ts";
import { analyticsBootstrap, consentRegions, CONSENT_STORAGE_KEY } from "../lib/analytics.ts";
import { isArticleComplete, isArticleTranslated, isTranslated } from "../lib/localized.ts";
import { allArticles, articles, categories, isScheduled } from "../lib/site.ts";
import { liveLocales, localeCodes, localeEntry } from "../lib/locales.ts";

/** Live locales, from lib/locales.json: the only list of languages anywhere in the code. */
const locales = liveLocales;

// One import of the built worker per run. Importing a fresh copy per request (as this file once did)
// keeps every 4 MB bundle and its translation data alive and exhausts the heap under tsx.
let workerModule;
async function fetchPage(path = "/") {
  workerModule ??= import(new URL(`../dist/server/index.js?test=${process.pid}-${Date.now()}`, import.meta.url).href);
  const { default: worker } = await workerModule;
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the AussieCamps homepage with product copy and SEO", async () => {
  const response = await fetchPage();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Australia is big/);
  assert.match(html, /74,000\+/);
  assert.match(html, /4,000\+/);
  assert.match(html, /routes, distance, dates, notes and to-dos/i);
  assert.match(html, /Offline/);
  assert.match(html, /trip planner/i);
  assert.doesNotMatch(html, /section-number|useful place categories|01 \/ 03/i);
  assert.match(html, /M318\.7 268\.7/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|not available yet/i);
});

test("renders an article with unique travel content and app CTA", async () => {
  const response = await fetchPage("/guides/perth-to-broome-road-trip");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /White dunes, coral reefs, red gorges/);
  assert.match(html, /Ningaloo and Karijini/);
  assert.match(html, /property="og:url" content="https:\/\/aussiecamps\.app\/guides\/perth-to-broome-road-trip\/"/);
  const body = html.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<aside/)?.[1] ?? "";
  assert.ok((body.match(/<p[ >]/g) ?? []).length >= 5, "Guide must render substantial prose");
  // Every heading must carry its own prose rather than pushing it into one undifferentiated blob.
  for (const section of body.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/g)) {
    if (!/<h2/.test(section[1]) || /place-chips|price-table|sources/.test(section[1])) continue;
    assert.match(section[1], /<p[ >]/, "every heading needs prose under it");
  }
  assert.match(html, /Save the stops\. Plan the whole trip\./);
  assert.doesNotMatch(html, /These names are intentionally explicit|Editorial landscape image|Reviewed 12 August/i);
});

test("every guide renders as a long-form article", async () => {
  const sources = await Promise.all(["../lib/site.ts", "../lib/expanded-articles.ts"].map((path) => readFile(new URL(path, import.meta.url), "utf8")));
  const slugs = sources.flatMap((source) => [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
  assert.equal(slugs.length, 75);
  for (const slug of slugs) {
    const response = await fetchPage(`/guides/${slug}`);
    // A guide whose publishAt is still ahead is not served at all (lib/publish.ts).
    if (isScheduled(slug)) {
      assert.equal(response.status, 404, `${slug} is scheduled but already served`);
      continue;
    }
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    const body = html.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<aside/)?.[1] ?? "";
    assert.ok((body.match(/<p[ >]/g) ?? []).length >= 5, `${slug} must render substantial prose`);
    for (const section of body.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/g)) {
      if (!/<h2/.test(section[1]) || /place-chips|price-table|sources/.test(section[1])) continue;
      assert.match(section[1], /<p[ >]/, `${slug} has a heading with no prose under it`);
    }
    // The generated editorial blob duplicated section prose and described the article to itself.
    assert.doesNotMatch(body, /named reference points|The route through this subject is specific|The details worth carrying into the plan are/, `${slug} still contains templated filler`);
  }
});

test("publishes crawler surfaces", async () => {
  const [robots, sitemap, llms] = await Promise.all([fetchPage("/robots.txt"), fetchPage("/sitemap.xml"), fetchPage("/llms.txt")]);
  assert.equal(robots.status, 200);
  assert.equal(sitemap.status, 200);
  assert.equal(llms.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/aussiecamps\.app\/sitemap\.xml/);
  // /sitemap.xml is an index of one sitemap per language.
  const index = await sitemap.text();
  assert.match(index, /<sitemapindex/);
  for (const name of ["en", ...locales]) assert.match(index, new RegExp(`<loc>https://aussiecamps\\.app/sitemaps/${name}\\.xml</loc>`));
  assert.match(await (await fetchPage("/sitemaps/en.xml")).text(), /perth-to-broome-road-trip/);
  const brief = await llms.text();
  assert.match(brief, /^# (KiwiCamping|AussieCamps)/);
  assert.match(brief, /Download \(App Store, free\)/);
  assert.match(brief, /## What the app does/);
  assert.match(brief, /## Caveats a correct answer should include/);
  assert.match(brief, /## Guides/);
});

test("renders dated multi-currency price tables", async () => {
  const response = await fetchPage("/guides/australia-grocery-prices-2026");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Price table in 10 currencies/);
  assert.match(html.replace(/<!-- -->/g, ""), /Prices checked 12 August 2026/);
  for (const currency of ["AUD", "NZD", "USD", "GBP", "EUR", "CNY", "INR", "SGD", "JPY", "KRW"]) assert.match(html, new RegExp(`>${currency}<`));
  assert.match(html, /Reserve Bank of Australia exchange rates/);
});

test("renders standalone road trip tools", async () => {
  const response = await fetchPage("/tools");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Currency converter/);
  assert.match(html, /Fuel calculator/);
  assert.match(html, /data-static-tools/);
  assert.match(html, /120\.0 L · A\$249\.60/);
});

test("publishes every guide in every locale", async () => {
  // Every guide is available in all six languages. Ones a locale has not translated are served
  // whole in English, road trips included, so no localised URL is ever missing.
  for (const locale of locales) {
    for (const route of ["", "/guides", "/tools", "/support", "/privacy", "/terms",
                         "/guides/australia-grocery-prices-2026", "/guides/perth-to-broome-road-trip"]) {
      assert.equal((await fetchPage(`/${locale}${route}`)).status, 200, `${locale}${route}`);
    }
  }
});

test("every guide, road trips included, is in the translation source", async () => {
  const source = JSON.parse(await readFile(new URL("../lib/translations/en.json", import.meta.url), "utf8"));
  // Scheduled guides are translated ahead of their publish day, so the source holds every written guide.
  assert.deepEqual(Object.keys(source.articles).sort(), allArticles.map((article) => article.slug).sort());
  assert.ok(source.articles["perth-to-broome-road-trip"], "road trips are translatable");
});

test("draft locales are neither routed nor advertised", async () => {
  const drafts = localeCodes.filter((code) => localeEntry(code).status === "draft");
  assert.ok(drafts.length >= 6, "ja, ko, zh-hans, zh-hant, cs and pl are still drafts");
  for (const code of drafts) {
    assert.notEqual((await fetchPage(`/${localeEntry(code).segment}`)).status, 200, `${code} is a draft and must not be served`);
    await assert.rejects(readdir(new URL(`../pages-dist/${localeEntry(code).segment}/`, import.meta.url)), `${code} must not be exported`);
  }
  const home = await (await fetchPage("/")).text();
  for (const code of drafts) {
    assert.doesNotMatch(home, new RegExp(`hrefLang="${localeEntry(code).hreflang[0]}"`, "i"), `${code} must not be an hreflang alternate`);
    assert.ok(!home.includes(`>${localeEntry(code).label}<`), `${code} must not be in the language switcher`);
  }
});


const decode = (html) => html.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/<!-- -->/g, "");

test("never serves a half-translated guide", async () => {
  // The rule is all-or-nothing per guide. Where a locale has no translation, the article's own prose
  // must appear verbatim in English, so a reader never gets one paragraph in their language and the
  // next in English. (The chrome around the prose is translated, which is the point.)
  const slug = "australia-grocery-prices-2026";
  const source = JSON.parse(await readFile(new URL("../lib/translations/en.json", import.meta.url), "utf8")).articles[slug];
  // en.json carries the internal links as <a data-guide> markup; the page renders the same words.
  const prose = [source.intro, ...source.sections.flatMap((section) => [section.heading, ...section.body])].map((text) => text.replace(/<a data-guide="[^"]+">|<\/a>/g, ""));
  assert.ok(prose.length >= 5);
  for (const locale of locales) {
    // A stale translation is served in English too, so only a complete one is skipped here.
    if (isArticleTranslated(locale, slug)) continue;
    // The localised article template has no sidebar, so match against the whole page.
    const body = decode(await (await fetchPage(`/${locale}/guides/${slug}`)).text());
    for (const text of prose) assert.ok(body.includes(text), `${locale}/${slug} is missing English prose it should be falling back to`);
  }
});

test("a published locale translates the whole interface", async () => {
  // A locale goes live only when every UI string is done, so a live locale must not leak English
  // chrome, and one that is not live must stay noindex and out of the sitemap.
  const sitemap = (await Promise.all(["en", ...locales].map(async (name) => (await fetchPage(`/sitemaps/${name}.xml`)).text()))).join("\n");
  const englishStrings = ["Download app", "Road trip tools", "Made for plans"];
  for (const locale of locales) {
    const published = isTranslated(locale);
    assert.equal(sitemap.includes(`/${locale}/guides`), published, `${locale} sitemap presence must match its translation state`);
    const html = await (await fetchPage(`/${locale}`)).text();
    assert.match(html, published ? /name="robots" content="index/ : /name="robots" content="noindex/, `${locale} robots meta must match its translation state`);
    if (published) for (const phrase of englishStrings) assert.ok(!html.includes(phrase), `${locale} leaked English chrome: ${phrase}`);
    const guide = await (await fetchPage(`/${locale}/guides/australia-grocery-prices-2026`)).text();
    // A guide is indexable once its translation is complete and the locale is live (docs/TRANSLATIONS.md).
    const translatedGuide = isArticleTranslated(locale, "australia-grocery-prices-2026") && published;
    assert.match(guide, translatedGuide ? /name="robots" content="index, follow/ : /name="robots" content="noindex, follow"/, `${locale} guide robots must match its translation state`);
    assert.equal(sitemap.includes(`/${locale}/guides/australia-grocery-prices-2026/`), translatedGuide, `${locale} guide sitemap presence must match its translation state`);
  }
});

/* ------------------------------------------------------------------------------------------------
 * The static export (pages-dist), which is what GitHub Pages actually serves. `npm run check` runs
 * the exporter before the tests; run `npm run build:pages` first when running tests on their own.
 * --------------------------------------------------------------------------------------------- */

const dist = new URL("../pages-dist/", import.meta.url);
let exportedCache;
async function exportedPages() {
  if (exportedCache) return exportedCache;
  const names = (await readdir(dist, { recursive: true })).filter((name) => name.endsWith(".html")).sort();
  assert.ok(names.length > 500, `pages-dist holds ${names.length} HTML files; run \`npm run build:pages\` first`);
  exportedCache = await Promise.all(names.map(async (name) => {
    const html = await readFile(new URL(name, dist), "utf8");
    const route = `/${name.replace(/(^|\/)index\.html$/, "$1")}`;
    const locale = locales.find((code) => route.startsWith(`/${code}/`)) ?? "en";
    return { name, route, locale, html };
  }));
  return exportedCache;
}
const attribute = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
const unescapeAttribute = (value) => value.replace(/&amp;/g, "&");
const hasMain = (html) => /<main[\s>]/.test(html);

test("exported pages keep only structured data, the calculators and one analytics script", async () => {
  for (const { name, html } of await exportedPages()) {
    let analytics = 0;
    for (const [tag] of html.matchAll(/<script\b[^>]*>/gi)) {
      const json = attribute(tag, "type") === "application/ld+json";
      const tools = /\sdata-static-tools(?:=|\s|>)/.test(tag);
      const keep = attribute(tag, "data-static-keep");
      assert.ok(json || tools || keep !== undefined, `${name} carries a script the export should have stripped: ${tag}`);
      if (keep === "analytics") analytics += 1;
    }
    assert.ok(analytics <= 1, `${name} carries ${analytics} analytics scripts`);
    // Every real page is measured once analytics is configured; the redirect and 404 stubs are not.
    const expected = GA_MEASUREMENT_ID && hasMain(html) && !/name="robots" content="noindex, follow">\s*<meta http-equiv="refresh"/.test(html) ? 1 : 0;
    if (name !== "404.html" && name !== "download/index.html") assert.equal(analytics, expected, `${name} analytics script count`);
    if (GA_MEASUREMENT_ID && analytics) assert.ok(html.includes(JSON.stringify(GA_MEASUREMENT_ID)), `${name} analytics script has the wrong measurement ID`);
  }
});

test("every App Store link carries its placement and, once configured, its campaign", async () => {
  let links = 0;
  for (const { name, html, locale } of await exportedPages()) {
    for (const [tag] of html.matchAll(/<a\b[^>]*href="https:\/\/apps\.apple\.com[^"]*"[^>]*>/g)) {
      links += 1;
      const placement = attribute(tag, "data-cta");
      assert.ok(ctaPlacements.includes(placement), `${name} has a store link without a valid data-cta: ${tag.slice(0, 160)}`);
      const href = new URL(unescapeAttribute(attribute(tag, "href")));
      assert.equal(`${href.origin}${href.pathname}`, APP_STORE_URL, `${name} store link points somewhere else`);
      if (!APPLE_PROVIDER_TOKEN) {
        assert.equal(href.search, "", `${name} store link carries campaign parameters with no provider token configured`);
        continue;
      }
      const ct = href.searchParams.get("ct") ?? "";
      assert.equal(href.searchParams.get("pt"), APPLE_PROVIDER_TOKEN, `${name} store link has the wrong pt`);
      assert.match(ct, campaignTokenPattern, `${name} has a malformed ct: ${ct}`);
      assert.ok(ct.length <= CAMPAIGN_TOKEN_MAX, `${name} ct is longer than ${CAMPAIGN_TOKEN_MAX} characters: ${ct}`);
      assert.equal(ct, `w_${placement}_${locale}`, `${name} ct does not match its placement and locale`);
    }
  }
  assert.ok(links > 2000, `only ${links} store links found in the export`);
});

test("the app schema keeps a clean install URL", async () => {
  for (const { name, html } of await exportedPages()) {
    for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      const nodes = JSON.parse(json)["@graph"] ?? [];
      for (const node of nodes.filter((item) => item["@type"] === "MobileApplication")) {
        assert.equal(node.installUrl, APP_STORE_URL, `${name} installUrl`);
        assert.equal(node.downloadUrl, APP_STORE_URL, `${name} downloadUrl`);
      }
      assert.doesNotMatch(json, /[?&]ct=/, `${name} structured data carries a campaign token`);
    }
  }
});

test("each page has one Smart App Banner with its own campaign", async () => {
  for (const { name, html, locale } of await exportedPages()) {
    if (!hasMain(html) || name === "404.html") continue;
    const banners = [...html.matchAll(/<meta name="apple-itunes-app" content="([^"]*)"/g)].map((match) => unescapeAttribute(match[1]));
    assert.deepEqual(banners, [smartBannerContent(locale)], `${name} smart app banner`);
  }
});

test("every page labels its <main> for analytics", async () => {
  const kinds = ["home", "guide", "guides", "tools", "support", "legal", "hub", "tool"];
  for (const { name, html, locale, route } of await exportedPages()) {
    if (!hasMain(html) || name === "404.html") continue;
    const main = html.match(/<main\b[^>]*>/)[0];
    assert.ok(kinds.includes(attribute(main, "data-page-kind")), `${name} data-page-kind`);
    assert.equal(attribute(main, "data-locale"), locale, `${name} data-locale`);
    if (/^\/(?:[a-z]{2}\/)?guides\/[^/]+\/$/.test(route)) {
      assert.equal(attribute(main, "data-page-kind"), "guide", `${name} is a guide`);
      assert.equal(attribute(main, "data-slug"), route.split("/").filter(Boolean).at(-1), `${name} data-slug`);
      assert.ok(categories.includes(unescapeAttribute(attribute(main, "data-category") ?? "")), `${name} data-category must be the English category`);
    }
  }
});

test("the consent bar and its footer link ship exactly when analytics does", async () => {
  for (const { name, html } of await exportedPages()) {
    if (!hasMain(html) || name === "404.html") continue;
    // Attributes only: the analytics script itself names both selectors.
    const bars = (html.match(/\sdata-consent-bar[=\s>]/g) ?? []).length;
    const reopen = (html.match(/\sdata-consent-open[=\s>]/g) ?? []).length;
    assert.equal(bars, GA_MEASUREMENT_ID ? 1 : 0, `${name} consent bar`);
    assert.equal(reopen, GA_MEASUREMENT_ID ? 1 : 0, `${name} Privacy choices link`);
    if (bars) assert.match(html, /<div class="consent-bar" data-consent-bar="[^"]*" hidden=""/, `${name} consent bar must render hidden`);
  }
});

test("the QR code is inline SVG and the PNG is gone", async () => {
  const home = (await exportedPages()).find((page) => page.route === "/").html;
  assert.match(home, /<div class="qr-image"[^>]*><svg viewBox="-1 -1 \d+ \d+"[^>]*><path d="M/);
  assert.doesNotMatch(home, /aussie-qr\.png/);
  await assert.rejects(readFile(new URL("../public/images/aussie-qr.png", import.meta.url)));
});

/** Runs the analytics bootstrap against a minimal fake browser and returns what it did. */
function runAnalytics({ stored = null, timeZone = "Australia/Sydney" } = {}) {
  const dataLayer = [];
  const listeners = {};
  const storage = new Map(stored ? [[CONSENT_STORAGE_KEY, stored]] : []);
  const bar = { hidden: true };
  const rootClasses = new Set();
  const appended = [];
  const main = { dataset: { pageKind: "guide", locale: "de", slug: "camping-rules-victoria", category: "Rules & safety" } };
  const document = {
    readyState: "complete",
    head: { appendChild: (element) => appended.push(element) },
    documentElement: { classList: { toggle: (name, on) => (on ? rootClasses.add(name) : rootClasses.delete(name)) } },
    createElement: () => ({}),
    querySelector: (selector) => (selector === "main" ? main : selector === "[data-consent-bar]" ? bar : null),
    addEventListener: (type, listener) => { listeners[type] = listener; },
  };
  const window = { localStorage: { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) } };
  window.dataLayer = dataLayer;
  const context = { window, document, URL, Date, Object, Intl: { DateTimeFormat: () => ({ resolvedOptions: () => ({ timeZone }) }) } };
  vm.runInNewContext(analyticsBootstrap("G-TEST123"), context);
  // JSON round trip: objects made inside the sandbox have its own prototypes, which strict deep equality rejects.
  const calls = () => JSON.parse(JSON.stringify(dataLayer.map((entry) => Array.from(entry))));
  const click = (target) => listeners.click({ target, preventDefault() {} });
  const element = (attributes) => ({ closest: (selector) => (selector.split(",").some((part) => Object.keys(attributes).some((key) => part.includes(key))) ? element.self(attributes) : null) });
  element.self = (attributes) => ({ href: attributes.href, hasAttribute: (key) => key in attributes, getAttribute: (key) => attributes[key] ?? null });
  return { calls, click, element, bar, rootClasses, storage, appended, window };
}

test("analytics sets Consent Mode defaults before anything else and loads GA4 without ad signals", () => {
  const run = runAnalytics();
  const [first, second, ...rest] = run.calls();
  assert.deepEqual(first.slice(0, 2), ["consent", "default"]);
  assert.deepEqual(first[2], { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied", region: [...consentRegions], wait_for_update: 500 });
  assert.equal(consentRegions.length, 47, "EU27 plus IS, LI, NO, GB, CH, EU outermost regions, Crown dependencies, Gibraltar and microstates");
  assert.deepEqual(second, ["consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "granted" }]);
  const config = rest.find((call) => call[0] === "config");
  assert.equal(config[1], "G-TEST123");
  assert.equal(config[2].allow_google_signals, false);
  assert.equal(config[2].allow_ad_personalization_signals, false);
  assert.equal(config[2].content_group, "guide");
  assert.equal(config[2].site_locale, "de");
  assert.equal(run.appended[0].src, "https://www.googletagmanager.com/gtag/js?id=G-TEST123");
  assert.equal(run.bar.hidden, true, "no bar outside Europe");
});

test("the consent bar shows in Europe until a choice is stored, and the choice sticks", () => {
  for (const timeZone of ["Europe/Berlin", "Atlantic/Canary", "Atlantic/Reykjavik", "Asia/Nicosia", "Indian/Reunion", "America/Martinique"]) {
    const run = runAnalytics({ timeZone });
    assert.equal(run.bar.hidden, false, `${timeZone} shows the bar`);
    assert.ok(run.rootClasses.has("consent-open"), "the sticky CTA is hidden while the bar is open");
    run.click(run.element({ "data-consent-choice": "granted" }));
    assert.equal(run.storage.get(CONSENT_STORAGE_KEY), "granted");
    assert.deepEqual(run.calls().at(-1), ["consent", "update", { analytics_storage: "granted" }]);
    assert.equal(run.bar.hidden, true);
    assert.ok(!run.rootClasses.has("consent-open"));
  }
  const declined = runAnalytics({ timeZone: "Europe/Paris" });
  declined.click(declined.element({ "data-consent-choice": "denied" }));
  assert.equal(declined.storage.get(CONSENT_STORAGE_KEY), "denied");
  assert.deepEqual(declined.calls().at(-1), ["consent", "update", { analytics_storage: "denied" }]);

  const returning = runAnalytics({ stored: "denied", timeZone: "Europe/London" });
  assert.equal(returning.bar.hidden, true, "a stored choice is not asked again");
  assert.deepEqual(returning.calls().find((call) => call[1] === "update"), ["consent", "update", { analytics_storage: "denied" }]);
  returning.click(returning.element({ "data-consent-open": "" }));
  assert.equal(returning.bar.hidden, false, "Privacy choices reopens the bar");
});

test("App Store clicks are sent as app_store_click with page context", () => {
  const run = runAnalytics();
  run.click(run.element({ href: "https://apps.apple.com/app/id6801098680?pt=123&ct=w_card_de&mt=8", "data-cta": "card" }));
  const [, name, params] = run.calls().at(-1);
  assert.equal(name, "app_store_click");
  assert.deepEqual(params, { placement: "card", site_locale: "de", page_kind: "guide", guide_slug: "camping-rules-victoria", guide_category: "Rules & safety", campaign_token: "w_card_de", link_url: "https://apps.apple.com/app/id6801098680?pt=123&ct=w_card_de&mt=8", transport_type: "beacon" });
  run.window.acTrack("tool_used", { tool: "fuel" });
  assert.deepEqual(run.calls().at(-1), ["event", "tool_used", { site_locale: "de", page_kind: "guide", tool: "fuel" }]);
});

test("a section table counts as translated only when its whole shape is", () => {
  const table = { caption: "Overnight rules by state", head: ["State", "Rule"], rows: [["Victoria", "Designated sites only"], ["Queensland", "Signed rest areas"]] };
  const english = { slug: "t", title: "T", description: "D", region: "R", imageAlt: "A", intro: "I", category: "Rules & safety", places: [], image: "", readTime: 1,
    sections: [{ heading: "H", body: ["P"], table }] };
  const base = { title: "T", description: "D", region: "R", imageAlt: "A", intro: "I", faq: [], sources: [] };
  const translated = (sectionTable) => ({ ...base, sections: [{ heading: "H", body: ["P"], tips: [], ...(sectionTable && { table: sectionTable }) }] });
  assert.equal(isArticleComplete(english, translated(undefined)), false, "a missing table is incomplete");
  assert.equal(isArticleComplete(english, translated({ ...table, caption: "" })), false, "an empty caption is incomplete");
  assert.equal(isArticleComplete(english, translated({ ...table, head: ["State"] })), false, "a short header is incomplete");
  assert.equal(isArticleComplete(english, translated({ ...table, rows: [table.rows[0]] })), false, "a missing row is incomplete");
  assert.equal(isArticleComplete(english, translated({ ...table, rows: [["Victoria"], table.rows[1]] })), false, "a missing cell is incomplete");
  assert.equal(isArticleComplete(english, translated({ ...table, rows: [["Victoria", ""], table.rows[1]] })), false, "an empty cell is incomplete");
  assert.equal(isArticleComplete(english, translated(table)), true);
  assert.equal(isArticleComplete({ ...english, sections: [{ heading: "H", body: ["P"] }] }, translated(undefined)), true, "sections without tables are unaffected");
});

/* ------------------------------------------------------------------------------------------------
 * The i18n platform (M2): one locale registry, one route manifest, and what they generate.
 * --------------------------------------------------------------------------------------------- */

test("no locale list is hardcoded outside the registry", async () => {
  // Built from the registry itself, so this file holds no list either.
  const codes = localeCodes.join("|");
  const patterns = [
    new RegExp(`["'](?:${codes})["']\\s*,\\s*["'](?:${codes})["']\\s*,\\s*["'](?:${codes})["']`),
    new RegExp(`\\b(?:${codes})\\|(?:${codes})\\|(?:${codes})\\b`),
    new RegExp(`\\b(?:${codes}):\\s*["'][^"']*["']\\s*,\\s*(?:${codes}):\\s*["']`),
  ];
  const generated = new Set(["lib/locales.json", "lib/translations/index.ts"]);
  const offenders = [];
  for (const directory of ["app", "components", "lib", "scripts", "tests"]) {
    for (const name of await readdir(new URL(`../${directory}/`, import.meta.url), { recursive: true })) {
      const path = `${directory}/${name}`;
      if (!/\.(?:ts|tsx|mjs|js)$/.test(name) || generated.has(path) || path.startsWith("lib/translations/")) continue;
      const source = await readFile(new URL(`../${path}`, import.meta.url), "utf8");
      for (const pattern of patterns) if (pattern.test(source)) offenders.push(`${path}: ${source.match(pattern)[0]}`);
    }
  }
  assert.deepEqual(offenders, [], "read locales from lib/locales.json (lib/locales.ts) instead");
});

test("the route manifest and the export are the same set of pages", async () => {
  const { exportRoutes } = await import("../lib/routes.ts");
  const manifest = new Set(exportRoutes().map((route) => route.path));
  const exported = new Set((await exportedPages()).map((page) => page.route).filter((route) => !["/404.html", "/download/"].includes(route)));
  for (const path of manifest) if (!/\.(xml|txt)$/.test(path)) assert.ok(exported.has(path), `${path} is in the manifest but was not exported`);
  for (const path of exported) assert.ok(manifest.has(path), `${path} was exported but is not in the manifest`);
  for (const path of ["/robots.txt", "/sitemap.xml", "/llms.txt", "/sitemaps/en.xml"]) await readFile(new URL(`../pages-dist${path}`, import.meta.url));
});

async function urlList(file) {
  const text = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  return text.split("\n").map((line) => line.trim()).filter((line) => line.startsWith("https://aussiecamps.app/"));
}

test("every URL that was live at the start of the growth push is still exported", async () => {
  const baseline = await urlList("docs/growth/url-baseline.txt");
  assert.ok(baseline.length > 400);
  const exported = new Set((await exportedPages()).map((page) => `https://aussiecamps.app${page.route}`));
  const missing = baseline.filter((url) => !exported.has(url));
  assert.deepEqual(missing, [], "GitHub Pages cannot redirect: a dropped URL is a 404");
});

test("every ranking URL is still exported and names itself as canonical", async () => {
  const ranking = await urlList("docs/growth/ranking-urls.txt");
  assert.ok(ranking.length >= 100);
  const pages = new Map((await exportedPages()).map((page) => [`https://aussiecamps.app${page.route}`, page.html]));
  for (const url of ranking) {
    assert.ok(pages.has(url), `${url} earns clicks or impressions and is no longer exported`);
    assert.match(pages.get(url), new RegExp(`<link rel="canonical" href="${url.replace(/[.?]/g, "\\$&")}"`), `${url} must stay self-canonical`);
  }
});

test("a localised guide carries its language, its own date and localised breadcrumbs", async () => {
  const { translationDate } = await import("../lib/article-dates.ts");
  const { formatArticleDate } = await import("../lib/article-dates.ts");
  const slug = "australia-grocery-prices-2026";
  const locale = locales.find((code) => isArticleTranslated(code, slug));
  assert.ok(locale, "some live locale translates the grocery guide");
  const url = `https://aussiecamps.app/${locale}/guides/${slug}/`;
  const page = (await exportedPages()).find((item) => item.route === `/${locale}/guides/${slug}/`);
  const html = page.html;
  assert.match(html, new RegExp(`<html lang="${localeEntry(locale).htmlLang}"`));
  assert.match(html, new RegExp(`<link rel="canonical" href="${url}"`));
  assert.match(html, /<link rel="alternate" hrefLang="x-default" href="https:\/\/aussiecamps\.app\/guides\/australia-grocery-prices-2026\/"/);
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])["@graph"];
  const article = graph.find((node) => node["@type"] === "Article");
  assert.equal(article.inLanguage, localeEntry(locale).htmlLang);
  assert.equal(article.mainEntityOfPage, url, "schema URL ends in a slash, like the canonical");
  assert.equal(article.dateModified, translationDate(slug, locale), "a translation is dated by its own last change");
  const crumbs = graph.find((node) => node["@type"] === "BreadcrumbList").itemListElement.map((item) => item.item);
  assert.deepEqual(crumbs, [`https://aussiecamps.app/${locale}/`, `https://aussiecamps.app/${locale}/guides/`, url]);
  assert.equal(graph.find((node) => node["@type"] === "FAQPage").inLanguage, localeEntry(locale).htmlLang);
  // Dates and the price table's "checked" date are written the way the reader's language writes them.
  assert.ok(decode(html).includes(formatArticleDate("2026-08-12", localeEntry(locale).intl)), "price dates are localised");
  const sitemap = await readFile(new URL(`../pages-dist/sitemaps/${locale}.xml`, import.meta.url), "utf8");
  assert.ok(sitemap.includes(`<url><loc>${url}</loc><lastmod>${translationDate(slug, locale)}</lastmod></url>`), "sitemap lastmod is the translation date");
});

test("guide links survive translation as data-guide markup", async () => {
  const { linkProse, markGuideLinks, renderGuideLinks } = await import("../lib/internal-links.ts");
  // English renders exactly as before: marking the links and rendering the markup at the site root
  // gives the same HTML as linking the plain prose.
  for (const article of articles) for (const section of article.sections) {
    assert.deepEqual(markGuideLinks(section.body, article.slug).map((text) => renderGuideLinks(text, "")), linkProse(section.body, article.slug), `${article.slug}: ${section.heading}`);
  }
  assert.equal(renderGuideLinks('Mit <a data-guide="dump-points-australia-guide">Entsorgungsstationen</a> & mehr', "/de"), 'Mit <a href="/de/guides/dump-points-australia-guide/">Entsorgungsstationen</a> &amp; mehr');
  assert.equal(renderGuideLinks('<a data-guide="no-such-guide">kein Ziel</a>', "/de"), "kein Ziel", "an unknown slug keeps its words and loses the link");
  assert.equal(renderGuideLinks('<a href="https://evil.example">x</a><script>alert(1)</script>', "/de"), "x&lt;script&gt;alert(1)&lt;/script&gt;", "nothing else is admitted");
});

test("related guides are relevant, stable and not all from one category", async () => {
  const { relatedGuides } = await import("../lib/related.ts");
  for (const article of articles) {
    const related = relatedGuides(article);
    assert.equal(related.length, 3, article.slug);
    assert.ok(!related.some((item) => item.slug === article.slug), `${article.slug} relates to itself`);
    assert.equal(new Set(related.map((item) => item.slug)).size, 3, `${article.slug} repeats a related guide`);
    assert.ok(related.some((item) => item.category !== article.category), `${article.slug} offers only its own category`);
    assert.deepEqual(relatedGuides(article).map((item) => item.slug), related.map((item) => item.slug), "deterministic");
  }
});

test("translation stamps find strings whose English changed", async () => {
  const { mkdtemp, writeFile, mkdir } = await import("node:fs/promises");
  const { tmpdir } = await import("node:os");
  const { join } = await import("node:path");
  const stamps = await import("../scripts/translations-stamp.mjs");
  const directory = await mkdtemp(join(tmpdir(), "stamps-"));
  await mkdir(join(directory, "meta"));
  const write = (name, value) => writeFile(join(directory, `${name}.json`), `${JSON.stringify(value, null, 2)}\n`);
  await write("en", { ui: { a: "Hello", b: "Goodbye" }, articles: { x: { sections: [{ body: ["One", "Two"] }] } } });
  await write("de", { locale: "de", ui: { a: "Hallo", b: "Tschüss" }, articles: { x: { sections: [{ body: ["Eins", "Zwei"] }] } } });
  stamps.useTranslationsDirectory(directory);
  try {
    stamps.stamp("de");
    assert.deepEqual(stamps.staleSummary("de").stale, []);
    await write("en", { ui: { a: "Hello there", b: "Goodbye" }, articles: { x: { sections: [{ body: ["One", "Two!"] }] } } });
    assert.deepEqual(stamps.staleSummary("de").stale.sort(), ["articles.x.sections[0].body[1]", "ui.a"]);
    // Re-stamping without re-translating does not hide the change.
    stamps.stamp("de");
    assert.equal(stamps.staleSummary("de").stale.length, 2);
    assert.equal(stamps.invalidate("de"), 2);
    const de = JSON.parse(await readFile(join(directory, "de.json"), "utf8"));
    assert.deepEqual(de, { locale: "de", ui: { a: "", b: "Tschüss" }, articles: { x: { sections: [{ body: ["Eins", ""] }] } } });
    assert.deepEqual(stamps.staleSummary("de").stale, []);
  } finally {
    stamps.useTranslationsDirectory(new URL("../lib/translations", import.meta.url).pathname);
  }
});

import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

async function fetchPage(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the AussieCamps homepage with product copy and SEO", async () => {
  const response = await fetchPage();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Australia is big/);
  assert.match(html, /74,000\+/);
  assert.match(html, /4,000\+/);
  assert.match(html, /route, distance, notes and to-dos/i);
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
  assert.match(html, /The road, properly travelled/);
  assert.ok((html.match(/<p[ >]/g) ?? []).length >= 10, "Guide must render at least ten prose paragraphs");
  assert.match(html, /Save the stops\. Plan the whole trip\./);
  assert.doesNotMatch(html, /These names are intentionally explicit|Editorial landscape image|Reviewed 12 August/i);
});

test("every guide renders as a long-form article", async () => {
  const sources = await Promise.all(["../lib/site.ts", "../lib/expanded-articles.ts"].map((path) => readFile(new URL(path, import.meta.url), "utf8")));
  const slugs = sources.flatMap((source) => [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
  assert.equal(slugs.length, 70);
  for (const slug of slugs) {
    const response = await fetchPage(`/guides/${slug}`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    const article = html.match(/<article class="article-page">([\s\S]*?)<\/article>/)?.[1] ?? "";
    assert.ok((article.match(/<p[ >]/g) ?? []).length >= 10, `${slug} must have at least ten prose paragraphs`);
    const editorial = article.match(/<section class="editorial-opening">([\s\S]*?)<\/section>/)?.[1] ?? "";
    assert.equal((editorial.match(/<p[ >]/g) ?? []).length, 10, `${slug} must have ten long-form paragraphs before numbered sections`);
    assert.match(article, /<blockquote>/, `${slug} must include a pull quote`);
  }
});

test("publishes crawler surfaces", async () => {
  const [robots, sitemap, llms] = await Promise.all([fetchPage("/robots.txt"), fetchPage("/sitemap.xml"), fetchPage("/llms.txt")]);
  assert.equal(robots.status, 200);
  assert.equal(sitemap.status, 200);
  assert.equal(llms.status, 200);
  assert.match(await robots.text(), /Sitemap:/);
  assert.match(await sitemap.text(), /perth-to-broome-road-trip/);
  assert.match(await llms.text(), /Core place details are available offline/);
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

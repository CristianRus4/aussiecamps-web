/**
 * Yesterday's (UTC) totals of the links API, from GET /api/links/stats/<day>, and an Ops banner when they are
 * unusual. Meant for the daily morning task; safe to run any time.
 *
 *   node scripts/link-stats.mjs [yyyy-mm-dd]
 *
 * Thresholds (docs/places-cloudflare.md, "Write limits"): more than 2,000 writes, 200 new links or 20 capped
 * requests in a day. Over any, it raises the Ops alert a-camping-web-links-<site> through the context CLI (when
 * it is there) and exits 2.
 */
import { execFileSync } from "node:child_process";

const SITE = { url: "https://aussiecamps.app", name: "AussieCamps", slug: "aussiecamps" };
const LIMITS = { writes: 2000, creates: 200, capped: 20 };

const day = process.argv[2] ?? new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
const response = await fetch(`${SITE.url}/api/links/stats/${day}`);
if (!response.ok) {
  console.error(`${SITE.url}: stats for ${day} answered ${response.status}`);
  process.exit(1);
}
const totals = await response.json();
console.log(`${SITE.name} links, ${day}: ${totals.writes} writes, ${totals.creates} new links, ${totals.removes} removals, ${totals.capped} capped, ${totals.clients} addresses.`);
const over = Object.entries(LIMITS).filter(([field, limit]) => (totals[field] ?? 0) > limit);
if (over.length) {
  const text = `Check unusual ${SITE.name} link traffic on ${day}: ${over.map(([field]) => `${totals[field]} ${field === "creates" ? "new links" : field}`).join(", ")}.`;
  console.log(text);
  try {
    execFileSync("context", ["ops", "alert", `a-camping-web-links-${SITE.slug}`, "--node", "camping-web", "--session", "Camping · Website", "--text", text], { stdio: "ignore" });
  } catch {
    // No context CLI here (for example on GitHub): the exit code and the line above say it.
  }
  process.exit(2);
}

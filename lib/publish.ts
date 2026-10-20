/**
 * Drip publishing: a guide written ahead can carry `publishAt: "YYYY-MM-DD"` (a New Zealand date)
 * and goes live in the first build on or after that day. The Pages workflow builds every morning at
 * 07:15 NZDT, so a dated guide publishes itself. docs/growth/publish-schedule.md is the calendar.
 *
 * Until then the guide does not exist in the build at all: lib/site.ts drops it from `articles`, and
 * every route, sitemap, hreflang set, listing, related strip and language switcher reads that list.
 * Contextual links to it (`<a data-guide>` and the English prose links) render as plain text. It was
 * never live, so nothing that ever answered 200 disappears.
 *
 * Only new guides carry a date. Every guide without one is published.
 */
const DAY = /^\d{4}-\d{2}-\d{2}$/;

const env = (name: string): string | undefined => (typeof process === "undefined" ? undefined : process.env?.[name]);

/** The day this build publishes for: BUILD_DATE (YYYY-MM-DD) when set, otherwise today in Pacific/Auckland. */
export function buildDate(): string {
  const pinned = env("BUILD_DATE");
  if (pinned) {
    if (!DAY.test(pinned)) throw new Error(`BUILD_DATE must be YYYY-MM-DD, got "${pinned}"`);
    return pinned;
  }
  const parts = new Intl.DateTimeFormat("en-NZ", { timeZone: "Pacific/Auckland", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
  const part = (type: string) => parts.find((item) => item.type === type)!.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}

/** True when a guide is live on `date`: it has no publishAt, or that day has come. */
export function isPublished(article: { publishAt?: string }, date: string = buildDate()): boolean {
  return !article.publishAt || article.publishAt <= date;
}

/** Throws on a publishAt that is not a real YYYY-MM-DD date, so a typo fails the build rather than hiding a guide. */
export function assertPublishAt(slug: string, publishAt: string | undefined): void {
  if (publishAt === undefined) return;
  if (!DAY.test(publishAt) || new Date(`${publishAt}T00:00:00Z`).toISOString().slice(0, 10) !== publishAt) throw new Error(`${slug}: publishAt must be a YYYY-MM-DD date, got "${publishAt}"`);
}

/** The later of two YYYY-MM-DD dates, for a scheduled guide whose git dates precede its publish day. */
export function laterDate(a: string | undefined, b: string | undefined): string | undefined {
  if (!a || !b) return a ?? b;
  return a > b ? a : b;
}

/**
 * Test only. tests/publish-schedule.test.mjs passes one extra guide as JSON in SCHEDULE_FIXTURE and
 * builds the export with and without its date reached. Never set in a real build.
 */
export function scheduleFixture<T>(): T | undefined {
  const json = env("SCHEDULE_FIXTURE");
  return json ? JSON.parse(json) as T : undefined;
}

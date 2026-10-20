import { allArticles, isScheduled, sitePath } from "@/lib/site";

/**
 * Contextual links inside a guide's own prose.
 *
 * The site had none. Seventy guides covering overlapping subjects were connected only by a
 * three-card "Related guides" strip under the article, which gives Google almost nothing: no anchor
 * text, no sense of which guide is authoritative on a topic, and no path from a paragraph about
 * fire bans to the guide that explains them.
 *
 * Rather than rewriting seventy articles to insert links by hand, the phrases below are the ones
 * already being written naturally in the prose. Where one appears, its first occurrence in the
 * article becomes a link to the guide that covers that subject properly. The anchor text is
 * therefore the writer's own wording in its own sentence, which is what makes it worth anything.
 *
 * Rules the implementation enforces: never link a guide to itself, never link the same target twice
 * in one article, at most one link per paragraph, and a budget per article, so a guide reads as
 * prose and not as a link farm.
 */
type LinkTarget = { pattern: RegExp; slug: string };

const targets: LinkTarget[] = [
  { pattern: /\bfree camping\b|\bfree camps?\b/i, slug: "is-free-camping-legal-australia" },
  { pattern: /\bdump points?\b/i, slug: "dump-points-australia-guide" },
  { pattern: /\bcaravan parks?\b/i, slug: "caravan-park-vs-holiday-park" },
  { pattern: /\bfire bans?\b|\btotal fire ban\b|\bcampfires?\b/i, slug: "campfires-camping-australia" },
  { pattern: /\broad trains?\b/i, slug: "driving-with-road-trains-australia" },
  { pattern: /\boverseas (?:driver )?licence\b/i, slug: "overseas-driver-licence-australia-state-guide" },
  { pattern: /\btowing a caravan\b|\btow(?:ing)? a van\b/i, slug: "towing-caravan-australia-road-rules" },
  { pattern: /\bbiosecurity\b|\bfruit fly\b|\bquarantine bins?\b/i, slug: "interstate-biosecurity-road-trip" },
  { pattern: /\bpacking list\b/i, slug: "camping-packing-list-australia" },
  { pattern: /\bsleep(?:ing)? in your car\b|\bsleeping in a car\b/i, slug: "sleeping-in-car-australia" },
  { pattern: /\broad signs?\b/i, slug: "australian-road-signs-visitors-guide" },
  { pattern: /\bspeed limits?\b|\broad rules\b/i, slug: "australia-road-rules-state-differences" },
  { pattern: /\bfuel range\b|\bfuel planning\b|\bjerry cans?\b/i, slug: "road-trip-fuel-planning-australia" },
  { pattern: /\bfuel costs?\b|\bpetrol prices\b|\bdiesel prices\b/i, slug: "australia-road-trip-fuel-cost-2026" },
  { pattern: /\bcamping fees\b|\bnational park fees\b/i, slug: "camping-fees-australia-2026" },
  { pattern: /\bgrocery prices\b|\bsupermarket prices\b/i, slug: "australia-grocery-prices-2026" },
  { pattern: /\bresponsible camping\b|\bleave no trace\b/i, slug: "responsible-camping-australia" },
  { pattern: /\bcamping with dogs\b|\bdog-friendly\b/i, slug: "camping-with-dogs-australia" },
  { pattern: /\bno (?:phone )?(?:signal|reception)\b|\bbeyond (?:phone )?signal\b|\bsatellite messenger\b/i, slug: "camping-without-phone-signal" },
  { pattern: /\bdrinking water\b|\bwater planning\b|\bpotable water\b/i, slug: "camping-water-planning" },
  { pattern: /\bnight driving\b|\bkangaroos?\b|\bfatigue\b/i, slug: "australia-road-trip-fatigue-wildlife-safety" },
  { pattern: /\bheat\b.{0,12}\bwarnings?\b|\bsevere weather\b|\bflood(?:ing|ed)? roads?\b/i, slug: "camping-weather-safety-australia" },
  { pattern: /\bchoosing a campsite\b|\bpick(?:ing)? a campsite\b/i, slug: "choosing-campsite-australia" },
  { pattern: /\bbest time to camp\b|\bwhen to camp\b|\bwet season\b/i, slug: "best-time-camping-australia" },
  { pattern: /\bfirst campervan trip\b|\bfirst time in a campervan\b/i, slug: "first-campervan-trip-australia" },
  { pattern: /\bcampervan budget\b|\broad trip budget\b/i, slug: "campervan-road-trip-budget-australia" },
  { pattern: /\bdaily budget\b|\btravel costs?\b/i, slug: "australia-travel-cost-2026" },
  { pattern: /\beating out\b|\btakeaway\b/i, slug: "eating-out-australia-prices-2026" },
  { pattern: /\bflat white\b|\bcoffee prices\b|\bschooner\b/i, slug: "alcohol-coffee-drink-prices-australia" },
  { pattern: /\baccommodation costs?\b|\bhostels?\b/i, slug: "accommodation-costs-australia-2026" },
  { pattern: /\bpublic transport\b/i, slug: "public-transport-costs-australia-2026" },
  { pattern: /\bdomestic flights?\b/i, slug: "domestic-flight-costs-australia-2026" },
  { pattern: /\bGreyhound\b|\blong-distance (?:bus|train)\b|\bIndian Pacific\b|\bGhan\b/i, slug: "bus-train-costs-australia-2026" },
  { pattern: /\bcamping apps?\b/i, slug: "best-camping-app-australia" },
  { pattern: /\bWikiCamps\b/, slug: "wikicamps-alternatives" },
  { pattern: /\bCamperMate\b/, slug: "campermate-alternatives" },
  { pattern: /\bfilters\b/i, slug: "how-to-use-aussiecamps-filters" },
  { pattern: /\bcollections\b/i, slug: "save-collections-aussiecamps" },
  { pattern: /\btrip planner\b/i, slug: "how-to-plan-trip-aussiecamps" },
  { pattern: /\bwidgets?\b/i, slug: "aussiecamps-widgets-guide" },
  // State and territory rules, which are the phrases these guides use constantly.
  { pattern: /\bNew South Wales\b/, slug: "camping-rules-new-south-wales" },
  { pattern: /\bQueensland\b/, slug: "camping-rules-queensland" },
  { pattern: /\bVictoria\b/, slug: "camping-rules-victoria" },
  { pattern: /\bTasmania\b/, slug: "camping-rules-tasmania" },
  { pattern: /\bSouth Australia\b/, slug: "camping-rules-south-australia" },
  { pattern: /\bWestern Australia\b/, slug: "camping-rules-western-australia" },
  { pattern: /\bNorthern Territory\b/, slug: "camping-rules-northern-territory" },
  { pattern: /\bthe ACT\b|\bAustralian Capital Territory\b/, slug: "camping-rules-act" },
];

const bySlug = new Map(allArticles.map((article) => [article.slug, article]));

/**
 * A target only counts if the guide it points at actually exists. A scheduled guide counts too, so
 * the choice of links (and the markup in en.json) does not move on its publish day; until then the
 * renderers below write its link as plain text.
 */
const live = targets.filter((target) => bySlug.has(target.slug));

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** One chosen link: the phrase at [start, end) of its paragraph links to `slug`. */
export type LinkSpan = { start: number; end: number; slug: string };

/**
 * Chooses the contextual links for a run of paragraphs (one section's body): at most one per
 * paragraph, never the current guide, never the same target twice, at most `budget` in total.
 * Positions are in the raw text, so the same choice can be rendered as HTML (`linkProse`) or written
 * into the translation source as markup (`markGuideLinks`).
 */
export function selectLinks(paragraphs: readonly string[], currentSlug: string, budget = 4): (LinkSpan | null)[] {
  const used = new Set<string>([currentSlug]);
  let remaining = budget;
  return paragraphs.map((paragraph) => {
    if (remaining <= 0) return null;
    for (const target of live) {
      if (used.has(target.slug)) continue;
      const match = target.pattern.exec(paragraph);
      if (!match) continue;
      used.add(target.slug);
      remaining -= 1;
      return { start: match.index, end: match.index + match[0].length, slug: target.slug };
    }
    return null;
  });
}

/**
 * Returns each paragraph as HTML, with at most one contextual link added per paragraph.
 *
 * The text is escaped and the anchor inserted around the escaped phrase, so article prose can never
 * inject markup: the only HTML in the result is the anchor this function wrote.
 */
export function linkProse(paragraphs: readonly string[], currentSlug: string, prefix = "", budget = 4): string[] {
  const root = prefix.replace(/\/$/, "");
  const hrefFor = (slug: string) => (root ? `${root}/guides/${slug}/` : sitePath(`/guides/${slug}`));
  const spans = selectLinks(paragraphs, currentSlug, budget);
  return paragraphs.map((paragraph, index) => {
    const span = spans[index];
    if (!span || isScheduled(span.slug)) return escapeHtml(paragraph);
    return escapeHtml(paragraph.slice(0, span.start))
      + `<a href="${hrefFor(span.slug)}">${escapeHtml(paragraph.slice(span.start, span.end))}</a>`
      + escapeHtml(paragraph.slice(span.end));
  });
}

/**
 * The same links, as markup a translator carries across: `<a data-guide="slug">phrase</a>`.
 *
 * scripts/build-translation-source.mjs writes guide bodies into en.json this way. A translator keeps
 * the tag and its slug and moves it onto the natural phrase in their language; `renderGuideLinks`
 * turns it back into a link to that language's edition of the guide.
 */
export function markGuideLinks(paragraphs: readonly string[], currentSlug: string, budget = 4): string[] {
  const spans = selectLinks(paragraphs, currentSlug, budget);
  return paragraphs.map((paragraph, index) => {
    const span = spans[index];
    if (!span) return paragraph;
    return `${paragraph.slice(0, span.start)}<a data-guide="${span.slug}">${paragraph.slice(span.start, span.end)}</a>${paragraph.slice(span.end)}`;
  });
}

const guideMarkup = /<a data-guide="([a-z0-9-]+)">([\s\S]*?)<\/a>/g;
/** True when translated prose carries link markup, rather than plain text from before the markup existed. */
export const hasGuideLinks = (paragraphs: readonly string[]) => paragraphs.some((paragraph) => /<a data-guide="/.test(paragraph));
/** Translated prose with its link markup removed, for structured data and plain-text uses. */
export const stripGuideLinks = (text: string) => text.replace(guideMarkup, "$2").replace(/<\/?a\b[^>]*>/g, "");

/**
 * Translated prose as HTML. Everything is escaped; the only markup let back in is
 * `<a data-guide="slug">` naming a guide that exists, rewritten to that guide's URL in `root` (the
 * locale directory, `/de`). Any other tag, or a link to an unknown or not yet published guide, is
 * reduced to its text.
 */
export function renderGuideLinks(text: string, root: string): string {
  const clean = (part: string) => escapeHtml(part.replace(/<\/?a\b[^>]*>/g, ""));
  let html = "";
  let last = 0;
  for (const match of text.matchAll(guideMarkup)) {
    html += clean(text.slice(last, match.index));
    const inner = clean(match[2]);
    html += bySlug.has(match[1]) && !isScheduled(match[1]) ? `<a href="${sitePath(`${root}/guides/${match[1]}`)}">${inner}</a>` : inner;
    last = match.index! + match[0].length;
  }
  return html + clean(text.slice(last));
}

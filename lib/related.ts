import { articles, isScheduled, type Article } from "@/lib/site";
import { articleDates } from "@/lib/article-dates";
import { selectLinks } from "@/lib/internal-links";

/**
 * "Related guides" under an article, by relevance rather than by list order.
 *
 * Score per candidate: 3 for every place both guides name, 2 for the same region, 1 for the same
 * category, and 2 more when the article's own prose already links to it. The country-wide region
 * ("Australia") carries no signal, since most guides use it, so it earns no region points.
 *
 * Curated `related` slugs on the article come first, in their order. At least one pick is from
 * another category, so a reader of a rules guide is also offered, say, the cost or planning guide that
 * goes with it. Ties keep the guides' own order, so the result is stable from build to build.
 *
 * Then every guide is made reachable: one linked from fewer than two other guides (prose links and
 * Related guides) takes a slot in the guides that score highest with it (`withCoverage`).
 */
export const COUNTRY_REGION = "Australia";

export function relatedScore(item: Article, candidate: Article, linked: ReadonlySet<string> = linkedSlugs(item)): number {
  const places = new Set(item.places);
  const shared = candidate.places.filter((place) => places.has(place)).length;
  const region = item.region === candidate.region && item.region !== COUNTRY_REGION ? 2 : 0;
  const category = item.category === candidate.category ? 1 : 0;
  return shared * 3 + region + category + (linked.has(candidate.slug) ? 2 : 0);
}

/** The guides an article's prose links to (the same choice `linkProse` renders). */
export function linkedSlugs(item: Article): Set<string> {
  return new Set(item.sections.flatMap((section) => selectLinks(section.body, item.slug)).flatMap((span) => (span ? [span.slug] : [])));
}

function rankedGuides(item: Article, count: number, pool: readonly Article[]): Article[] {
  const others = pool.filter((candidate) => candidate.slug !== item.slug);
  const bySlug = new Map(others.map((candidate) => [candidate.slug, candidate]));
  const curated = (item.related ?? []).flatMap((slug) => bySlug.get(slug) ?? []).slice(0, count);
  const linked = linkedSlugs(item);
  const ranked = others
    .filter((candidate) => !curated.includes(candidate))
    .map((candidate, index) => ({ candidate, index, score: relatedScore(item, candidate, linked) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ candidate }) => candidate);
  const picks = [...curated, ...ranked].slice(0, count);
  if (picks.length && picks.every((pick) => pick.category === item.category)) {
    const outside = ranked.find((candidate) => candidate.category !== item.category);
    // Prefer replacing a ranked pick; when all three are curated, the rule still wins over the last one.
    const slot = picks.findLastIndex((pick) => !curated.includes(pick));
    if (outside) picks[slot >= 0 ? slot : picks.length - 1] = outside;
  }
  return picks;
}

/** Words every guide's slug shares, which say nothing about its subject. */
const stopWords = new Set(["a", "an", "and", "the", "in", "on", "of", "or", "to", "for", "vs", "with", "what", "how", "is", "can", "i", "do", "your", "you", "best", "guide", "australia", "australian", "camping", "camp", "2026", "2027", "27"]);
const words = (item: Article) => new Set(item.slug.split("-").filter((word) => !stopWords.has(word)));
/** Subject words two guides' slugs share: "campervan" and "hire" for the hire cost and hire excess guides. */
const sharedWords = (a: Article, b: Article) => { const own = words(a); return [...words(b)].filter((word) => own.has(word)).length; };

/** Fewer links than this from other guides, and a guide is given slots elsewhere. */
export const MIN_GUIDE_LINKS = 2;

/**
 * Picks for every live guide, so that every guide is reachable. Each list keeps its first pick (the
 * curated or best-ranked one). Then, in rounds, each guide linked from fewer than MIN_GUIDE_LINKS other
 * guides takes a free slot in the guide that scores highest with it (the related score plus two for each
 * subject word their slugs share), older guides first on a tie. The
 * slots left over take the usual ranked picks, with the other-category rule kept.
 */
function withCoverage(): Map<string, Article[]> {
  const ranked = new Map(articles.map((item) => [item.slug, rankedGuides(item, articles.length, articles)]));
  const prose = new Map(articles.map((item) => [item.slug, linkedSlugs(item)]));
  const lists = new Map(articles.map((item) => [item.slug, ranked.get(item.slug)!.slice(0, 1)]));
  const inbound = new Map(articles.map((item) => [item.slug, new Set<string>()]));
  for (const item of articles) {
    inbound.get(lists.get(item.slug)![0]?.slug ?? "")?.add(item.slug);
    for (const slug of prose.get(item.slug)!) if (!isScheduled(slug)) inbound.get(slug)?.add(item.slug);
  }
  const order = new Map(articles.map((item, index) => [item.slug, index]));
  const age = (item: Article) => articleDates(item.slug)?.published ?? "9999";
  for (let round = 1; round <= MIN_GUIDE_LINKS; round += 1) {
    const weak = articles.filter((item) => inbound.get(item.slug)!.size < round)
      .sort((a, b) => inbound.get(a.slug)!.size - inbound.get(b.slug)!.size || order.get(a.slug)! - order.get(b.slug)!);
    for (const guide of weak) {
      const links = inbound.get(guide.slug)!;
      const best = articles
        .filter((host) => host !== guide && !links.has(host.slug) && lists.get(host.slug)!.length < 3)
        // A host whose list would be full and all of its own category is passed over.
        .filter((host) => lists.get(host.slug)!.length < 2 || [...lists.get(host.slug)!, guide].some((pick) => pick.category !== host.category))
        .map((host) => ({ host, score: relatedScore(host, guide, prose.get(host.slug)!) + 2 * sharedWords(host, guide) }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score || age(a.host).localeCompare(age(b.host)) || order.get(a.host.slug)! - order.get(b.host.slug)!)[0];
      if (!best) continue;
      lists.get(best.host.slug)!.push(guide);
      links.add(best.host.slug);
    }
  }
  for (const item of articles) {
    const list = lists.get(item.slug)!;
    for (const candidate of ranked.get(item.slug)!) {
      if (list.length >= 3) break;
      if (list.includes(candidate)) continue;
      // The last slot goes outside the guide's category when nothing in the list is.
      if (list.length === 2 && list.every((pick) => pick.category === item.category) && candidate.category === item.category) continue;
      list.push(candidate);
    }
  }
  return lists;
}

let covered: Map<string, Article[]> | undefined;
export function relatedGuides(item: Article, count = 3, pool: readonly Article[] = articles): Article[] {
  if (count === 3 && pool === articles) {
    covered ??= withCoverage();
    const picks = covered.get(item.slug);
    if (picks) return picks;
  }
  return rankedGuides(item, count, pool);
}

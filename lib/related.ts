import { articles, type Article } from "@/lib/site";
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

export function relatedGuides(item: Article, count = 3, pool: readonly Article[] = articles): Article[] {
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
    const replaceable = picks.findLastIndex((pick) => !curated.includes(pick));
    if (outside && replaceable >= 0) picks[replaceable] = outside;
  }
  return picks;
}

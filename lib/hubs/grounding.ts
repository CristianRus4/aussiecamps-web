/**
 * Grounding for hub prose: every number and proper noun a hub's prose uses must appear in that hub's
 * data record or in the official sources it cites. Used by scripts/audit-hubs.mjs.
 *
 * Proper nouns are capitalised words, except sentence-initial ones that the prose also uses in lower
 * case (so "Most", "Dump" or "Campgrounds" at the start of a sentence pass) and the short list of
 * words below. Hyphenated and possessive forms are checked by their stem.
 */
type GroundingHub = { id: string; stateName: string; sources: string[] } & Record<string, unknown>;
type GroundingSource = { key: string; operator: string; short: string; url: string };

const ALLOWED = new Set(`AussieCamps Pass App Store iPhone I
The A An In On At Of For With Most Many Some Every Each All About Around Only There This That These Those It Its If When Where
Which What Who How Why Unlike Like Both Neither Nearly More Fewer Less Just One Two Three Four Five Six Seven Eight Nine Ten
Outside Inside Along Across Between Beyond Before After During While Because So But And Or Not No Yes Even Still Also Then Here
Expect Check Book Plan Look Use Read Bring Pack Carry Treat Count Allow Pick Start Head Drive Stay Camp Set Take Keep Ask Find
Over Under Roughly Almost Together Elsewhere Further Away Past Instead Otherwise However Overall Free Open`.split(/\s+/));

export const numbersIn = (text: string) => (text.match(/\d[\d,]*(?:\.\d+)?/g) ?? []).map((number) => number.replace(/,/g, "").replace(/\.0+$/, ""));

export function groundingIssues(hub: GroundingHub, paragraphs: string[], sources: Map<string, GroundingSource>, dataAsOf: string, allProse: string[]): string[] {
  const issues: string[] = [];
  const cited = hub.sources.map((key) => sources.get(key)).filter((source) => !!source).map((source) => `${source!.operator} ${source!.short} ${source!.url}`);
  const asOf = new Date(`${dataAsOf}T00:00:00Z`);
  const record = [JSON.stringify(hub), ...cited, `Camping rules in ${hub.stateName}`, dataAsOf,
    asOf.toLocaleDateString("en-AU", { month: "long", year: "numeric", timeZone: "UTC" }),
    asOf.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })].join("\n");
  const known = new Set(numbersIn(record));
  for (const value of JSON.stringify(hub).match(/-?\d+(?:\.\d+)?/g) ?? []) known.add(String(Number(value)));
  const recordWords = new Set(record.match(/[\p{L}][\p{L}'’-]*/gu) ?? []);
  for (const word of [...recordWords]) for (const part of word.split(/[-'’]/)) if (part) recordWords.add(part);
  const lowerWords = new Set(allProse.join(" ").match(/\b[a-z][a-z'’-]*\b/g) ?? []);

  for (const paragraph of paragraphs) {
    if (/—/.test(paragraph)) issues.push(`${hub.id}: em dash`);
    if (/offline map/i.test(paragraph)) issues.push(`${hub.id}: "offline map"`);
    for (const number of numbersIn(paragraph)) if (!known.has(number)) issues.push(`${hub.id}: number ${number}`);
    for (const sentence of paragraph.split(/(?<=[.!?])\s+/)) {
      const tokens = sentence.match(/[\p{L}][\p{L}'’-]*/gu) ?? [];
      tokens.forEach((token, index) => {
        const word = token.replace(/['’]s$/, "");
        if (!/^\p{Lu}/u.test(word) || ALLOWED.has(word) || recordWords.has(word)) return;
        if (word.split(/[-'’]/).every((part) => !part || recordWords.has(part) || ALLOWED.has(part))) return;
        if (index === 0 && lowerWords.has(word.toLowerCase())) return;
        issues.push(`${hub.id}: "${word}"`);
      });
    }
  }
  return issues;
}

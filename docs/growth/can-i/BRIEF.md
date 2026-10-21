# "Can I...?" answer pages: drafting brief (AussieCamps)

You draft pages for aussiecamps.app (repo = this worktree). Do not push, merge or run `npm run check`/build.
Run nothing headed: browser automation must be headless (prefer WebFetch, WebSearch, curl). Do NOT use Unsplash.
Edit ONLY the files named in your task (lib/can-i/<slug>.ts and docs/growth/can-i/<slug>-facts.md). Never touch lib/site.ts, en.json, locale JSON, tests or any other shared file.

## What a page is
One page answers one real question people search. English only. Today is 2026-10-21; every rule must be current for 2026 and cited to the official source (state park agency, state/federal government, council, road authority, fisheries agency, CASA, TT-Line etc.). If an official page is blocked, use an official search extract and say in the facts file that it rests on that. Never invent a rule, fee, fine or date; if you cannot confirm something officially, leave it out. Say "Checked 2026-10-21" where a rule is dated.

Structure (the `sections` array, 7 to 9 sections):
1. `intro` (2 sentences): the direct answer first (Yes, No or It depends) AND the rule that decides it. No preamble.
2. A "The short answer by state" section (a table via the 4th argument of `section`, head `["State or territory", "...", "Source"]`-style; one row per state/territory the rule differs in; every cell plain text; every row has exactly head.length cells; the first cell is the label).
3. Detail sections: where it is allowed, what decides it, permits/fees/fines (only if officially stated), seasonal or local exceptions.
4. "What to do instead" section (legal alternatives).
5. A section whose HEADING contains the word "AussieCamps" (e.g. "Check this rule at the place in AussieCamps"): say what the app has and does that is TRUE for this topic: place pages with the land manager's facilities and rules as published by the park agency, rest areas from road authorities, national park campgrounds, guides, saved collections, weather on place pages, trips; iPhone only; place details work offline, map tiles, routing, weather and photos need signal. Set `cta: true` on that section. Do NOT explain what is free and what needs the Pass; never call camping data free; never write "offline map"; say no pricing beyond nothing. Only use counts from lib/data/product-facts.json and facts in docs/growth/listicles/au-app-facts.md (read both; do not invent any app claim; do not claim the app shows legal/fire-ban/permit status unless the facts file says it does). The app does not replace the official rule: say to confirm with the land manager.
6. A final "Sources" are in the `sources` field (5 to 12 official links with real URLs you have opened).
Each section: `section(heading, [paragraphs...], [tips (2 to 3 short fragments)], optionalTable)`. Paragraphs are 2 to 4 sentences. Whole page ~900 to 1400 words.
Link text: no markdown links in body strings (plain text). Related guides go in `related: [slugs]` (3 to 4 existing slugs; pick from: sleeping-in-car-australia, is-free-camping-legal-australia, campfires-camping-australia, camping-with-dogs-australia, camping-rules-<state> (new-south-wales, victoria, queensland, south-australia, western-australia, tasmania, northern-territory, act), camping-fees-australia-2026, responsible-camping-australia, dump-points-australia-guide, towing-caravan-australia-road-rules, interstate-biosecurity-road-trip, caravan-park-vs-holiday-park, best-camping-app-australia, choosing-campsite-australia). If an existing guide already answers the same question in full, link it and angle your page on what that guide does not cover.

House rules (docs/WEBSITE-BRIEF.md): no em dashes (use commas, colons or full stops), no filler ("it is important to note", "whether you are"), no hype, plain direct sentences, Australian spelling, Australia (never New Zealand), dollars as "$20", dates as "20 October 2026". Titles lead with the question: e.g. "Can I Camp on the Beach in Australia? Rules by State 2026" (under ~65 characters if possible), description 140 to 160 characters starting with the answer.

## Do not repeat existing guides' facts blindly
Read the relevant existing guides first (`jq -r '.articles["<slug>"] | .intro, (.sections[]|.heading, .body[])' lib/translations/en.json`), then verify and use their facts only if you re-confirm them officially. The pass 2026 fixes in those guides are already in; if you find an existing guide contradicts an official source, note it in your facts file under "CONFLICTS" (do not edit the guide).

## Output files per page
1. `docs/growth/can-i/<slug>-facts.md`: bullet list of every rule/fee/date used, with the official URL and the date you opened it, and a "NOT CONFIRMED / left out" list.
2. `lib/can-i/<slug>.ts`, in exactly this shape (see lib/expanded-articles.ts hipcamp-alternatives for a full literal):
```ts
import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Question as people search it?", "Answer in 2 to 3 sentences."],
  // 3 or 4 questions drawn from real queries (docs/growth/gsc/2026-10-19/queries-3m.tsv, plus the natural variants), each answered directly, none repeating the intro verbatim
] as const;

export default article({
  slug: "can-i-...", publishAt: "YYYY-MM-DD", title: "...", description: "...", category: "Rules & safety", region: "Australia",
  places: ["...", "..."], imageAlt: "<describe the hero photo; the orchestrator fills this later, put a placeholder>", intro: "...",
  related: ["...", "..."],
  sections: [ section("...", ["..."], ["..."]), ... ],
  sources: [{ label: "...", url: "https://..." }],
});
```
`readTime` and `image` are filled by `article()`. Do not set listicle. Use the exact slug and publishAt given in your task.
3. A NEGATION CHECK before you finish: re-read every sentence stating a rule, warning, fine or safety advice and confirm each never / do not / only / must / no matches the official source. Say in your report that you did it.

Final report (short): per page: slug, one-line answer, number of sources, anything you could not confirm, any conflicts with existing guides. Do not paste file contents.

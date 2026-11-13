import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Did WikiCamps remove free camps?", "Some campers believe free camps have gone missing since WikiCamps' big update. WikiCamps says it does not remove them. In AussieCamps, the Free filter shows free rest areas and stops from official sources."],
  ["What is the best app for free camping in Australia?", "On iPhone, AussieCamps puts free rest areas, water points, dump points and toilets on one map with a single Free filter, next to national park campgrounds and paid parks. There is no account and no ads."],
  ["How do I find free camping spots near me?", "Open AussieCamps, move the map to where you are, open the filters and choose Free under Cost. Add Toilets if you need them, then tap a spot to read its conditions."],
  ["Can you camp at rest areas in Australia?", "At some. Rules change between states and sites: some rest areas allow an overnight stop, some limit your stay to a few hours, and some ban camping. The sign at the rest area has the final word."],
  ["Where can I find dump points and water on a trip?", "AussieCamps shows dump points and drinking water points on the same map as your campsites. Filter for them along your route and add them to your trip as stops."],
] as const;

export default article({
  slug: "free-camps-missing-wikicamps", publishAt: "2026-11-14",
  title: "Free Camps Missing From WikiCamps? Find Free Stops in AussieCamps (2027)",
  description: "Some campers say free camps went missing from WikiCamps. Find free rest areas, water, dump points and toilets in AussieCamps with one Free filter.",
  category: "App guides", region: "Australia",
  places: ["Free camps", "Rest areas", "Dump points", "Drinking water"],
  imageAlt: "A roadside rest area with toilet blocks under eucalypts on the New England Highway in New South Wales",
  intro: "Some campers say free camps have gone missing from WikiCamps since its big update, while WikiCamps says it does not remove them. Either way, AussieCamps puts free rest areas, water points, dump points and toilets on one map with a single Free filter, right next to national park campgrounds and paid parks. We make AussieCamps, and here is how to find a cheap night with it.",
  related: ["best-free-camping-apps-australia", "is-free-camping-legal-australia", "can-i-stay-overnight-at-a-rest-area-in-australia", "best-dump-point-toilet-apps-australia", "how-to-use-aussiecamps-filters", "does-wikicamps-work-offline"],
  sections: [
    section("Are free camps missing from WikiCamps?", ["Some WikiCamps users say spots they used to stay at have disappeared since the big update. WikiCamps says it does not remove free sites. WikiCamps is owned by G'day Group, the company behind Discovery Parks and G'day Parks, and its recent updates added park bookings.", "Rather than guess, go straight to where free stops are published. AussieCamps lists them from park agencies and road authorities, the people who look after them."], ["Some users say spots vanished", "WikiCamps says it removes none", "Go to the official sources"]),
    section("Find free stops in AussieCamps with one filter", ["Open AussieCamps and you are on the map. Tap the filters, choose Free under Cost, and the map shows free rest areas, water points, dump points and toilets around you. AussieCamps lists thousands of rest areas across the country, so there is usually one within reach.", "Add the features you cannot do without, like Toilets, Dogs allowed or 4WD access, and a spot has to match all of them. Tap any result for its conditions and facilities before you head in."], ["Free under Cost", "Rest areas, water, dump points, toilets", "Every filter must match"], {
      caption: "What a free-camping traveller needs and how AussieCamps finds it.",
      head: ["You need", "In AussieCamps"],
      rows: [
        ["A free place to stop", "Free under Cost: free rest areas and stops"],
        ["A toilet", "The Toilets feature, plus public toilets on the map"],
        ["Water", "Drinking water points and the Drinking Water feature"],
        ["To empty the tanks", "Dump points on the same map"],
        ["Somewhere for the dog", "Dogs allowed, at the top of the filters"],
        ["A rough track in", "4WD access, at the top of the filters"],
        ["Your own favourite spot", "Drop a pin, name it and add it to your trip"],
      ],
    }),
    section("Pick your night: rest areas, national parks and more", ["Free rest areas are great for a quick night on a long drive. When you want to stay a few days, national park campgrounds are often good value, and each one in AussieCamps shows its fees, facilities and conditions up front.", "Because AussieCamps is independent, not owned by a holiday park group, free stops, national parks and paid parks all sit on the same map. You choose what suits tonight."], ["Rest areas for a quick night", "National parks for a few days", "Independent, with every option shown"]),
    section("Water, dump points and toilets for a run of cheap nights", ["A string of free nights only lasts as long as your water and your waste tanks. Plan those stops first: drinking water every couple of days, a dump point before you head into the bush, and toilets if your rig has none.", "Add them to your trip as stops, and the route tells you how far and how long it is to each top-up."], ["Water every couple of days", "Empty the tanks before the bush", "Add support stops to the trip"]),
    section("Your own free spots go in the trip too", ["Every camper collects a few favourite free spots of their own. In AussieCamps, drop a pin on one, give it a name and add it straight to your trip, or type its address into Add a stop.", "Your pins stay saved under Collections for next time, and you can share them with your travel partner in a tap."], ["Drop a pin and name it", "Add it straight to a trip", "Saved for next time"]),
    section("Rules before you stop for free", ["Free does not mean anything goes. Rest area rules change between states and even between sites, some councils only allow self-contained vehicles, and many national park campgrounds need booking, free ones included.", "Whatever an app shows, what is posted at the entrance and in the managing agency's latest notices is what counts. Leave the spot clean so it stays open for the next camper."], ["Rules change between states", "Some councils want self-contained", "Read the sign at the entrance"]),
    { ...section("Find your next free night in AussieCamps", ["AussieCamps is free to download, with in-app purchases, and has no account and no ads. Open the map where you will be tonight, choose Free under Cost, and add Toilets if you need them.", "Check fire bans and closures on the day, and follow the sign at the site."], ["No account, no ads", "Free under Cost, then Toilets", "Check fire bans on the day"]), cta: true },
  ],
  sources: [
    { label: "Service NSW: find rest areas in NSW", url: "https://www.service.nsw.gov.au/referral/find-rest-areas-in-nsw" },
    { label: "Queensland Government: rest areas", url: "https://www.qld.gov.au/transport/safety/holiday-travel/stops/rest" },
    { label: "Main Roads WA: policy and guidelines for rest areas on main roads and highways", url: "https://www.mainroads.wa.gov.au/globalassets/technical-commercial/technical-library/road-and-traffic-engineering/roadside-items/rest-area-policy-and-guideline/policy-and-guidelines-rest-areas-on-main-roads-and-highways.pdf" },
    { label: "NT Government: roadside rest areas policy", url: "https://dipl.nt.gov.au/__data/assets/pdf_file/0017/240416/RoadsideRestAreas.pdf" },
  ],
});

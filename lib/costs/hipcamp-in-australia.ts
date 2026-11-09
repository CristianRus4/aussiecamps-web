import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Does Hipcamp work in Australia?", "Yes. Hipcamp lists private land, farms and some campgrounds in Australia that you book through the app or website, in addition to its much larger US listings."],
  ["Is Hipcamp the same as WikiCamps?", "No. Hipcamp is a booking marketplace for private landowners and campgrounds, while WikiCamps and similar apps are directories of public and private camping places you find and plan yourself."],
  ["Can I find free camps on Hipcamp?", "Hipcamp is mainly for bookable sites and private land, so it is not the place to find free camps. Rest areas, national park campgrounds and free camps are covered by directory apps such as AussieCamps."],
  ["Should I use Hipcamp for a campervan trip in Australia?", "It is useful for a few special nights on a farm or a private bush site, but most campervan trips rely on a directory of rest areas, campgrounds and dump points, which Hipcamp does not provide."],
] as const;

export default article({
  slug: "hipcamp-in-australia",
  title: "Hipcamp in Australia 2026: How It Works, What It Covers and When to Use It",
  description: "Hipcamp lists private land and campgrounds you book in Australia. How it works, where it fits beside a camping directory, and what to use for free camps, rest areas and dump points.",
  category: "App guides", region: "Australia",
  places: ["Private land", "Farm stays", "National parks", "Campgrounds"],
  imageAlt: "A tent pitched on a quiet farm paddock in the Australian countryside at dawn",
  intro: "Hipcamp started in the United States as a way to book private land, farm stays and campgrounds, and it now lists sites in Australia too. It is a booking marketplace rather than a directory, so it answers a different question from WikiCamps or AussieCamps: it helps you book a specific private site, not find every place you can legally stay.",
  related: ["hipcamp-alternatives", "can-i-camp-on-private-land-or-a-farm-in-australia", "best-camping-app-australia", "is-free-camping-legal-australia", "dump-points-australia-guide", "camping-fees-australia-2026"],
  listicle: true,
  sections: [
    section("What Hipcamp is and how it works", ["Hipcamp is a marketplace: landowners and campground operators list sites, you pick a date and book and pay through the app or website. In Australia that means farms, vineyards, private bush blocks and some campgrounds and holiday parks, in addition to the much larger set of listings in the United States.", "It is like a booking site for accommodation, with photos, reviews and prices, and the listings are only the places whose owners have joined. That is a small share of all the places you can stay in Australia."], ["A booking marketplace", "Private land and farms", "Only listed owners appear"]),
    section("What Hipcamp does not cover", ["Hipcamp does not list rest areas, free camps, national park campgrounds run by state agencies, or dump points. Those are the places most campervan trips use most nights, and the camping rules guides and the dump points guide cover how to find them.", "If you are planning a long trip, you will probably use a directory for most nights and Hipcamp for a few special ones. The Hipcamp alternatives guide compares the options in more detail."], ["No rest areas or free camps", "No dump points", "Use a directory for most nights"]),
    section("When Hipcamp makes sense", ["It is a good fit when you want a private, quiet site on a farm or in the bush, you do not mind booking ahead, and you are happy to pay for it. It is less useful for last-minute stops, free camping or a trip that depends on facilities such as dump points, toilets or powered sites on every leg.", "Before you book private land, read the camping on private land guide, and check what the listing says about vehicle access, water, toilets and fire rules."], ["Special nights on a farm", "Book ahead", "Check access and facilities"]),
    { ...section("Plan the whole trip in AussieCamps", ["AussieCamps is a directory and trip planner rather than a booking marketplace: it lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. You build a trip as ordered stops with dates and notes and see the distance, drive time and forecast for each leg.", "You can use it alongside a booking site: plan the route in AussieCamps and book a special night wherever you like. The iPhone app is free to download, with in-app purchases."], ["Directory, not marketplace", "Plan ordered stops", "Use beside a booking site"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Hipcamp", url: "https://en.wikipedia.org/wiki/Hipcamp" },
  ],
});

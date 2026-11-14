import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Which is better, WikiCamps, CAMPS Australia Wide or CamperMate?", "They suit different people. WikiCamps has the biggest community database for a one-off price, CAMPS Australia Wide lists sites its team has visited for a yearly fee, and CamperMate is free and covers Australia and New Zealand."],
  ["What does WikiCamps cost?", "WikiCamps Australia is a one-off purchase of A$9.99, with no subscription, though the app shows ads."],
  ["What does CAMPS Australia Wide cost?", "The app is free to download and free for 7 days, then A$14.99 a year."],
  ["Is CamperMate free?", "Yes. CamperMate is free with no in-app purchases, and it covers both Australia and New Zealand."],
] as const;

export default article({
  slug: "wikicamps-vs-camps-australia-wide-vs-campermate",
  title: "WikiCamps vs CAMPS Australia Wide vs CamperMate 2027: Which Camping App to Use",
  description: "WikiCamps, CAMPS Australia Wide and CamperMate compared on price, how listings are built and who each suits, plus AussieCamps: no login, no ads, trips you plan together.",
  category: "App guides", region: "Australia",
  places: ["Campgrounds", "Free camps", "Caravan parks", "Rest areas", "Dump points"],
  imageAlt: "A phone showing a camping app map on the dashboard of a campervan on an Australian road trip",
  intro: "WikiCamps, CAMPS Australia Wide and CamperMate are the three camping apps most Australian travellers know, and they work in different ways: one is a community database, one is a team-checked guide and one is a free app that also covers New Zealand. We make AussieCamps, an independent app with no login and no ads, so we say where it fits after the three.",
  related: ["wikicamps-vs-aussiecamps", "is-wikicamps-free", "wikicamps-trip-planner-alternative", "wikicamps-alternatives", "camps-australia-wide-alternatives", "campermate-alternatives", "best-camping-app-australia"],
  listicle: true,
  sections: [
    section("The three apps side by side", ["WikiCamps is built on listings and reviews added by its community, and it is the largest of the three. CAMPS Australia Wide lists sites its own team says it has visited, with no paid listings. CamperMate is free and lists points of interest across Australia and New Zealand, from free camps and holiday parks to dump stations and toilets.", "The table is the quick version: what each app is built on, what it costs and the kind of camper it suits best."], ["Community vs team-checked vs free", "Different prices, different jobs", "All three are good at different things"], {
      caption: "WikiCamps, CAMPS Australia Wide and CamperMate compared.",
      head: ["App", "How listings are built", "Price", "Best for"],
      rows: [
        ["WikiCamps Australia", "A community database of listings and reviews", "A$9.99 one-off, no subscription", "The biggest choice of sites and reviews"],
        ["CAMPS Australia Wide", "A team that visits sites, with no paid listings", "Free for 7 days, then A$14.99 a year", "Checked sites with filters for vehicle type"],
        ["CamperMate", "Community reviews and points of interest", "Free, no in-app purchases", "A free app that also covers New Zealand"],
      ],
    }),
    section("WikiCamps", ["WikiCamps is the app many Australian travellers install first, because it has the largest set of sites and reviews, and the one-off price suits people who do not want a subscription. The weakness of any community database is quality: some entries are old, and you need to read recent reviews before you drive to a free camp.", "Since its big update, many long-time users say the app feels harder to use and signs them out without warning. The WikiCamps login and the ads in a paid app are the two reasons people most often give for trying something else."], ["Largest database", "One-off price", "An account and ads since the update"]),
    section("CAMPS Australia Wide", ["CAMPS lists sites that its team says it has visited and checked, with filters for price, pets and whether a site suits a campervan, camper trailer or big rig. The yearly fee is the main reason people look elsewhere, but if you want a smaller set of sites checked by the same team, it suits a long caravan trip.", "The CAMPS alternatives guide covers when a different app does the job better."], ["Team-checked sites", "Filters for vehicle type", "Yearly fee"]),
    section("CamperMate", ["CamperMate is free and covers Australia and New Zealand, which makes it a good first install if you are doing both countries. It lists free camps, holiday parks, dump stations, toilets and wifi, and it is a general travel app as much as a camping one.", "The CamperMate alternatives guide covers when you want something with more detail on camping."], ["Free", "Australia and New Zealand", "General travel app"]),
    { ...section("Where AussieCamps fits", ["AussieCamps is a camping directory and a simpler take on the WikiCamps trip planner, with no login and no ads. Campgrounds, rest areas and water points come from park agencies, road authorities and public datasets, and the whole directory is inside the app, so search, filters and place details work with no signal. Dogs allowed and 4WD access sit at the top of the filters.", "Trips start and finish at Home in one tap, take any campground, address or dropped pin as a stop, and show the distance and drive time to each. Share the trip with your partner and choose Collaborate to plan it together live, with no account for either of you. AussieCamps is free to download, with in-app purchases."], ["Directory and trip planner", "No login, no ads", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Campervan", url: "https://en.wikipedia.org/wiki/Campervan" },
    { label: "Wikipedia: Road trip", url: "https://en.wikipedia.org/wiki/Road_trip" },
  ],
});

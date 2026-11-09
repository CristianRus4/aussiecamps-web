import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Which is better, WikiCamps, CAMPS Australia Wide or CamperMate?", "They suit different people. WikiCamps has the biggest community database for a one-off price, CAMPS Australia Wide lists sites its team has visited for a yearly fee, and CamperMate is free and covers Australia and New Zealand."],
  ["What does WikiCamps cost?", "WikiCamps Australia is a one-off purchase of A$9.99 on the Australian App Store as of 20 October 2026, with no subscription."],
  ["What does CAMPS Australia Wide cost?", "The app is free to download and free for 7 days, then A$14.99 a year, as of 21 October 2026."],
  ["Is CamperMate free?", "Yes. CamperMate is free with no in-app purchases on the Australian App Store as of 20 October 2026, and it covers both Australia and New Zealand."],
] as const;

export default article({
  slug: "wikicamps-vs-camps-australia-wide-vs-campermate",
  title: "WikiCamps vs CAMPS Australia Wide vs CamperMate 2026: Which Camping App to Use",
  description: "WikiCamps, CAMPS Australia Wide and CamperMate compared on price, how listings are built and who each suits, with AussieCamps alongside as a trip planner built on park and road data.",
  category: "App guides", region: "Australia",
  places: ["Campgrounds", "Free camps", "Caravan parks", "Rest areas", "Dump points"],
  imageAlt: "A phone showing a camping app map on the dashboard of a campervan on an Australian road trip",
  intro: "WikiCamps, CAMPS Australia Wide and CamperMate are the three camping apps most Australian travellers know, and they work in different ways: one is a community database, one is a team-checked guide and one is a free app that also covers New Zealand. We make AussieCamps, so we say where it fits after the three. Prices and ratings below were checked on the Australian App Store on 20 and 21 October 2026.",
  related: ["wikicamps-alternatives", "camps-australia-wide-alternatives", "campermate-alternatives", "best-camping-app-australia", "best-free-camping-apps-australia", "best-road-trip-planner-apps-australia"],
  listicle: true,
  sections: [
    section("The three apps side by side", ["WikiCamps is built on listings and reviews added by its community, and it is the largest of the three. CAMPS Australia Wide lists sites its own team says it has visited, with no paid listings. CamperMate is free and lists points of interest across Australia and New Zealand, from free camps and holiday parks to dump stations and toilets.", "The table is the quick version. It describes what each app says about itself and what the store listing shows, and it is not a verdict on which is best."], ["Community vs team-checked vs free", "Prices from October 2026", "All three are good at different things"], {
      caption: "WikiCamps, CAMPS Australia Wide and CamperMate compared, from store listings and developer descriptions checked 20 and 21 October 2026.",
      head: ["App", "How listings are built", "Price", "Best for"],
      rows: [
        ["WikiCamps Australia", "Community database, put at more than 65,000 sites by its website", "A$9.99 one-off, no subscription", "The biggest choice of sites and reviews"],
        ["CAMPS Australia Wide", "A team that says it has visited more than 16,000 sites, with no paid listings", "Free for 7 days, then A$14.99 a year", "Checked sites with filters for vehicle type"],
        ["CamperMate", "More than 70,000 points of interest by the developer's count", "Free, no in-app purchases", "A free app that also covers New Zealand"],
      ],
    }),
    section("WikiCamps", ["WikiCamps is the app many Australian travellers install first, because it has the largest set of sites and reviews, and the one-off price suits people who do not want a subscription. The weakness of any community database is quality: some entries are old, and you need to read recent reviews before you drive to a free camp.", "If you want the widest choice and you are happy to read reviews, it is the default. The WikiCamps alternatives guide covers when another app is better."], ["Largest database", "One-off price", "Read recent reviews"]),
    section("CAMPS Australia Wide", ["CAMPS lists sites that its team says it has visited and checked, with filters for price, pets and whether a site suits a campervan, camper trailer or big rig. The yearly fee is the main reason people look elsewhere, but if you want a smaller set of sites checked by the same team, it suits a long caravan trip.", "The CAMPS alternatives guide covers when a different app does the job better."], ["Team-checked sites", "Filters for vehicle type", "Yearly fee"]),
    section("CamperMate", ["CamperMate is free and covers Australia and New Zealand, which makes it a good first install if you are doing both countries. It lists free camps, holiday parks, dump stations, toilets and wifi, and it is a general travel app as much as a camping one.", "The CamperMate alternatives guide covers when you want something with more detail on camping."], ["Free", "Australia and New Zealand", "General travel app"]),
    { ...section("Where AussieCamps fits", ["AussieCamps is a camping directory and trip planner: it lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. You build a trip as ordered stops with dates and notes, and it shows the distance, drive time and forecast for each leg.", "Most travellers settle on one main camping app and add a trip planner, and AussieCamps is built to be that planner. The iPhone app is free to download, with in-app purchases."], ["Directory and trip planner", "Ordered stops with forecast", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Campervan", url: "https://en.wikipedia.org/wiki/Campervan" },
    { label: "Wikipedia: Road trip", url: "https://en.wikipedia.org/wiki/Road_trip" },
  ],
});

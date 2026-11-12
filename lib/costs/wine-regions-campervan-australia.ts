import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can I drive a campervan between wineries?", "Yes, but the drink-driving limit applies to every driver. It is 0.05 for a full licence in every state, and zero for learner, provisional and some other drivers, so name a designated driver or use a tour or taxi for tastings."],
  ["Can I camp at a winery in Australia?", "Only where the winery offers it. Camping on private land needs the owner's permission, and some vineyards and farms offer stays through private-land booking sites. Do not assume a cellar door car park is open to overnight stays."],
  ["When is the best time for a wine region road trip?", "Autumn is vintage season in most regions, roughly February to April, and it is busy. Spring and early summer are milder, and winter is quiet with log fires and lower prices in the cooler regions."],
  ["Which wine regions are close to a capital city?", "McLaren Vale and the Barossa from Adelaide, the Yarra Valley and Mornington Peninsula from Melbourne, the Hunter Valley from Sydney and Margaret River from Perth all work as weekend trips."],
] as const;

export default article({
  slug: "wine-regions-campervan-australia",
  title: "Australian Wine Regions by Campervan: Barossa, Margaret River, Hunter Valley and More",
  description: "How to visit Australia's wine regions by campervan: the Barossa, McLaren Vale, Margaret River, the Hunter Valley and the Yarra Valley, where to stay, drink-driving rules and when to go.",
  category: "Trip planning", region: "Australia",
  places: ["Barossa Valley", "McLaren Vale", "Margaret River", "Hunter Valley", "Yarra Valley"],
  imageAlt: "Vineyard rows in the Barossa Valley, South Australia",
  intro: "A campervan and a wine region suit each other: you can base yourself near the vines, cook local produce and wake up in the country. The catch is that wine regions are built around cellar doors and accommodation, not free camping, so the stay needs more planning than the tasting. Here are five regions that work from a campervan, how to stay legally, and the rule about drinking and driving that every driver needs to follow.",
  related: ["free-camping-margaret-river", "drink-driving-limits-australia-visitors", "fleurieu-peninsula-camping", "riverland-murray-river-camping-south-australia", "free-camping-near-adelaide", "best-time-camping-australia"],
  sections: [
    section("Five regions that work by van", ["Each region is within a day's drive of a capital city, which makes them easy to add to a longer route or to do as a long weekend."], undefined, { caption: "Wine regions for a campervan trip and their nearest city, November 2026.", head: ["Region", "State", "Nearest city", "Good for"], rows: [
      ["Barossa Valley", "South Australia", "About an hour north-east of Adelaide", "Shiraz, small towns and cellar doors close together"],
      ["McLaren Vale", "South Australia", "About 40 minutes south of Adelaide", "Coast and vineyards in one day, with the Fleurieu Peninsula beyond"],
      ["Margaret River", "Western Australia", "About three hours south of Perth", "Surf beaches, forest and wine"],
      ["Hunter Valley", "New South Wales", "About two hours north of Sydney", "The nearest big wine region to Sydney"],
      ["Yarra Valley", "Victoria", "About an hour east of Melbourne", "A day or weekend trip from Melbourne"],
    ] }),
    section("Where to stay", ["Wine regions have holiday parks and caravan parks in the main towns, and that is the reliable choice for a van. Book ahead for weekends, long weekends and vintage season, because rooms and sites fill with day-trippers and festival visitors. Our holiday park price guide has published rates.", "Free camping is limited. Margaret River has few free options, and our free camping guide for the region explains what is allowed. Rest areas and state forest camps are a long way from many cellar doors, so a powered site in a town often costs less than the taxis it saves."], ["Book holiday parks for weekends", "Few free camps near vines", "A powered site in town is practical"]),
    section("Vineyard and farm stays", ["Some vineyards and farms offer stays on their land through private-land booking sites, where you pay per night and the host sets the rules. Check what the listing allows for a van, including power, toilets and access in wet weather.", "Never assume a winery car park is open to overnight stays. Camping on private land needs the owner's permission, and a cellar door that welcomes visitors by day may not welcome a van at night."], ["Ask the owner first", "Check van access", "Private land follows the host's rules"]),
    section("The drink-driving rule", ["The drink-driving limit is 0.05 blood alcohol concentration for a full licence holder in every state, and zero for learner, provisional and some other drivers. Random breath tests operate on country roads as well as cities, and tastings add up faster than people expect.", "Pick a designated driver, book a tour or taxi, or taste at a cellar door in the town where you are camping and walk back. Our drink-driving guide for visitors covers the limits by state."], ["0.05 for full licences", "Zero for learners and provisionals", "Taste near camp or use a driver"]),
    section("When to go", ["Vintage in most regions is roughly February to April, which is busy and warm, with harvest festivals and full camps. Spring and early summer are milder and greener, and winter is quiet in the cooler regions, with lower prices and cold nights.", "Book the busy periods early and check fire danger in summer, because dry country and hot days bring bans and closures. Our best time guide covers the climate zones."], ["Autumn is busiest", "Spring is mild", "Check summer fire bans"]),
    section("Cooking with local produce", ["Regions that grow grapes also grow olives, cheese, bread and fruit, and farm gates and markets make cooking from a van easy. Buy fresh produce after a state border, not before, because quarantine rules ban fruit and some vegetables at some borders.", "Keep wine secured while driving and drink it at camp, not at a rest area or on the road."], ["Shop local markets", "Check border produce rules", "Secure bottles while driving"]),
    { ...section("Plan the route in AussieCamps", ["AussieCamps lists campgrounds, national parks and rest areas with each place's facilities, fees and rules as the agency publishes them, plus holiday parks you can book in the app from BookEasy. Save the stops to a trip to see the driving distance between regions.", "It runs on iPhone and is free to download, with in-app purchases."], ["Find camps near the region", "Distance between stops", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "South Australian Tourism Commission", url: "https://southaustralia.com/" },
    { label: "Experience Margaret River Region", url: "https://www.margaretriver.com/" },
    { label: "Destination NSW: Visit NSW", url: "https://www.visitnsw.com/" },
    { label: "Visit Victoria", url: "https://www.visitvictoria.com/" },
    { label: "Australian Interstate Quarantine", url: "https://www.interstatequarantine.org.au/" },
  ],
});

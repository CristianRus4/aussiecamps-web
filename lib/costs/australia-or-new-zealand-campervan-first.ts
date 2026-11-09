import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Should I do Australia or New Zealand first by campervan?", "New Zealand is the easier first trip: it is smaller, the distances are short and the roads and camps are easy to plan. Australia is bigger and wilder, and suits a longer trip or a second visit."],
  ["Which is cheaper to campervan, Australia or New Zealand?", "It depends on the trip. Australia has more free camping and cheaper fuel in many places, while New Zealand has shorter distances so you drive less. Compare the hire cost, fuel and camping fees for your dates."],
  ["How many days do I need for each country?", "Two to three weeks covers a good New Zealand trip on one or both islands. Australia needs three weeks for a single region, or months for a long route like the east coast or the west."],
  ["Can I do both on one trip?", "Yes. Many people do a few weeks in each, starting with New Zealand and flying to Australia, or the other way round. Check each country's visa rules and the campervan hire terms for each."],
] as const;

export default article({
  slug: "australia-or-new-zealand-campervan-first",
  title: "Australia or New Zealand First by Campervan? How to Choose in 2026",
  description: "Choosing between a campervan trip in Australia or New Zealand: distances, driving, camping rules, cost, seasons and which suits a first trip. Plus how to do both.",
  category: "Trip planning", region: "Australia and New Zealand",
  places: ["Australia", "New Zealand", "North Island", "South Island", "East coast"],
  imageAlt: "A campervan parked beside a lake with snow-capped mountains behind, on a road trip in New Zealand",
  intro: "Australia and New Zealand are both great campervan countries, but they are very different trips. New Zealand is compact, scenic and easy to plan, with a camp or a town within an hour almost everywhere. Australia is vast and varied, with long empty stretches and a much bigger choice of free camps. The right one to do first depends on how long you have and how adventurous you are.",
  related: ["first-campervan-trip-australia", "campervan-hire-cost-australia-2026", "campervan-road-trip-budget-australia", "road-trip-fuel-planning-australia", "is-free-camping-legal-australia", "best-time-camping-australia"],
  sections: [
    section("Size and driving", ["New Zealand's two islands together are smaller than most Australian states, so drives between sights are short, often one to three hours, and a two-week trip covers a lot. Roads are winding and often narrow, so average speeds are lower than the distance suggests.", "Australia is huge: the drives between cities are many hours or days, and some stretches have no fuel for hundreds of kilometres. It suits a longer trip, or a trip focused on one region."], ["New Zealand: short drives", "Australia: long distances", "Roads in NZ are slower"]),
    section("Camping and rules", ["Australia has a large network of free and low-cost camps, rest areas and national park campgrounds, with rules that vary by state. New Zealand has a smaller network and tighter freedom camping rules, with many sites requiring a self-contained vehicle and a certificate, and fines for breaking local rules.", "The Australian camping rules guides cover each state, and the New Zealand site covers its own rules. Rules matter more in New Zealand, so a campervan trip there needs more planning of where to stay."], ["Australia: more free camping", "New Zealand: stricter rules", "Check local rules"]),
    section("Cost and seasons", ["Both countries have high season in summer, and campervans, parks and ferries book out then. New Zealand is cooler and wetter, with a good season from about November to April. Australia has regional seasons: the north is best in the dry season, from about May to September, and the south is best in summer.", "Costs vary with the hire company, the fuel price and the number of nights in paid camps. The campervan hire cost and budget guides give the Australian numbers, and the New Zealand site has its own."], ["Summer is high season in both", "Australia has regional seasons", "Compare hire and fuel"]),
    section("Which first", ["If you have two or three weeks and want an easy, scenic trip with little planning, New Zealand is the safer first choice. If you have more time, want to camp free and see wide open country, start in Australia, ideally with a single region such as the east coast or the south-west.", "If you can do both, many people do a few weeks in each, and they can use the same planning approach in each country."], ["Short trip: New Zealand", "Long trip or free camping: Australia", "Both is possible"]),
    { ...section("Plan the Australian side in AussieCamps", ["AussieCamps covers Australia: it lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Build a trip as ordered stops and it shows the distance, drive time and forecast for each leg.", "The iPhone app is free to download, with in-app purchases."], ["Add each stop in order", "Forecast for each arrival day", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Tourism Australia: road trips", url: "https://www.australia.com/en/things-to-do/road-trips.html" },
    { label: "Tourism New Zealand: campervan and motorhome travel", url: "https://www.newzealand.com/int/campervan-and-motorhome-travel/" },
    { label: "Wikipedia: Campervan", url: "https://en.wikipedia.org/wiki/Campervan" },
  ],
});

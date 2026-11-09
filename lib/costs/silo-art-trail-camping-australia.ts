import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where is the Silo Art Trail in Victoria?", "It runs through the Wimmera and Mallee in north-west Victoria, with painted silos in towns such as Brim, Sheep Hills, Rupanyup, Lascelles, Patchewollock and Rosebery. The towns are small and far apart, so plan fuel and food along the way."],
  ["How long does the Silo Art Trail take?", "You can see the main silos in two or three days, or a long weekend, depending on how many you add. It pairs well with a drive between Melbourne, Adelaide and Mildura."],
  ["Is there camping along the Silo Art Trail?", "Yes. Many Wimmera and Mallee towns have a caravan park, a showground or a free camp, and national parks such as Wyperfeld and Hattah-Kulkyne have campgrounds close to the route. Check each town's rules and any limits on stays."],
  ["Are there silo art trails outside Victoria?", "Yes. South Australia, New South Wales, Queensland and Western Australia have painted silos, including Kimba and Coonalpyn in South Australia, Weethalle in New South Wales and Thallon in Queensland."],
] as const;

export default article({
  slug: "silo-art-trail-camping-australia",
  title: "The Silo Art Trail: A Campervan Route Through Victoria's Wimmera and Mallee",
  description: "A road trip route past giant painted silos in Victoria's Wimmera and Mallee, with the towns to stop at, where to camp, and how the trail fits a drive from Melbourne to Adelaide or Mildura.",
  category: "Trip planning", region: "Victoria",
  places: ["Brim", "Sheep Hills", "Rupanyup", "Lascelles", "Patchewollock", "Hattah-Kulkyne"],
  imageAlt: "The Calder Highway curving past scrub and a vineyard at Merbein near Mildura",
  intro: "Giant painted silos have turned small wheat towns in Victoria's Wimmera and Mallee into a road trip destination. The artworks stand beside the grain silos at Brim, Sheep Hills, Rupanyup, Lascelles, Patchewollock and other towns, and they make a good loop for a few days in a campervan, with free and cheap camps along the way. Below are the route, the towns to stop at and where to stay.",
  related: ["melbourne-to-mildura-drive", "melbourne-to-adelaide-coastal-route", "is-free-camping-legal-australia", "caravan-park-vs-holiday-park", "camping-rules-victoria", "dump-points-australia-guide"],
  sections: [
    section("The route and the silos", ["The Silo Art Trail runs through the Wimmera and Mallee in north-west Victoria, a few hours north-west of Melbourne. Large murals of local people and landscapes cover the silos at Brim, Sheep Hills, Rupanyup, Lascelles, Patchewollock, Rosebery and other towns, and the route passes wheat fields, salt lakes and small country pubs.", "Distances between towns are long and services are limited, so fill up when you can and carry water. The Melbourne to Mildura drive guide covers the main road through the region."], ["Brim, Sheep Hills, Rupanyup", "Lascelles, Patchewollock, Rosebery", "Fuel and water are far apart"]),
    section("How long to allow", ["You can see the main silos in two or three days, and a long weekend is enough for a loop. The trail fits well into a longer drive between Melbourne, Adelaide and Mildura, or into a trip to the Grampians. Allow time to stop in each town, because the pubs, bakeries and small museums are part of the point.", "Silos outside Victoria, such as Kimba and Coonalpyn in South Australia, Weethalle in New South Wales and Thallon in Queensland, can be added to a longer lap."], ["Two or three days is enough", "Add silos on the Adelaide or Mildura route", "Stop for the towns, not just the art"]),
    section("Where to camp", ["Many Wimmera and Mallee towns have a caravan park, a showground or a free camp, and the national parks nearby, Wyperfeld and Hattah-Kulkyne, have campgrounds with a bush setting. Some towns allow a short free stay with a donation or a small fee, so check the local rules and the signs.", "The free camping legality guide covers the rules, and the Victoria camping rules guide covers national parks and state forests."], ["Caravan parks and showgrounds", "Wyperfeld and Hattah-Kulkyne", "Check local free-camp rules"]),
    section("Seasons and road tips", ["Spring and autumn are the most comfortable seasons, with mild days and cool nights. Summer can be very hot, and winter nights are cold, with fog on some mornings. Check fire danger in summer and avoid unsealed roads after heavy rain.", "Watch for kangaroos at dawn and dusk and for farm vehicles on country roads. The dump points guide covers where to empty tanks between towns."], ["Spring and autumn are best", "Check fire danger in summer", "Watch for wildlife at dusk"]),
    { ...section("Plan the route in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Build the silo route as ordered stops and it shows the distance, drive time and forecast for each leg, so you can plan fuel and a camp in each town.", "The iPhone app is free to download, with in-app purchases."], ["Plan fuel and a camp in each town", "Add each silo as a stop", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Australian Silo Art Trail", url: "https://www.australiansiloarttrail.com/" },
    { label: "Wikipedia: Silo art", url: "https://en.wikipedia.org/wiki/Silo_art" },
    { label: "Wikipedia: Wimmera", url: "https://en.wikipedia.org/wiki/Wimmera" },
  ],
});

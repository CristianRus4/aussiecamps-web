import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where can I camp near a waterfall in Australia?", "Examples include Florence Falls and Wangi Falls in Litchfield National Park, Gunlom Falls in Kakadu, Bell Gorge's Silent Grove campground in the Kimberley, Binna Burra near the Lamington National Park falls, Wallaman Falls in Queensland, and Russell Falls at Mt Field National Park in Tasmania."],
  ["When is the best time to see waterfalls in Australia?", "In the tropical north, falls run strongest at the end of the wet season, from about March to May, but roads and some camps close earlier. In the south, falls are strongest in winter and spring. Check closures before you travel."],
  ["Is it safe to swim at a waterfall?", "Not always. Follow park signs about currents, depth, crocodiles and closures, and do not swim after heavy rain or where signs say not to. Cliff jumping and diving into unknown water are a common cause of serious injuries."],
  ["Do I need to book waterfall campsites?", "Many national park campgrounds, such as those in Litchfield and Kakadu, are popular in the dry season and some need booking or a permit. Check the park's website before you go."],
] as const;

export default article({
  slug: "waterfalls-with-campsites-australia",
  title: "Waterfalls With Campsites in Australia: Where to Camp Near a Waterfall",
  description: "Camping near waterfalls in Australia, from Litchfield and Kakadu to the Kimberley, Queensland and Tasmania: when the falls run, what to book and how to stay safe at a waterhole.",
  category: "Camping guides", region: "Australia",
  places: ["Litchfield", "Kakadu", "Bell Gorge", "Lamington", "Wallaman Falls", "Mt Field"],
  imageAlt: "Florence Falls in Litchfield National Park, Northern Territory",
  intro: "A campsite within walking distance of a waterfall is one of the best things about a road trip, and Australia has a handful of them, from the Top End to Tasmania. The falls run strongest at different times in different regions, and some camps are only open in the dry season. Below are the places to start, when to go and what to check before you swim.",
  related: ["darwin-kakadu-litchfield-loop", "gibb-river-road-camping", "wet-season-camping-top-end-northern-wa", "camping-weather-safety-australia", "camping-fees-australia-2026", "choosing-campsite-australia"],
  sections: [
    section("Top End: Litchfield and Kakadu", ["Litchfield National Park has campgrounds near Florence Falls and Wangi Falls, plus Walker Creek, and Kakadu has Gunlom Falls and the Maguk camping area. The dry season, from about May to September, is the main time to visit, with the falls running but swimming open and roads passable, and some places need booking or a fee.", "Swimming rules change with the season, and crocodile checks may close waterholes, so read the park signs. The Darwin, Kakadu and Litchfield loop guide covers the route."], ["Florence and Wangi Falls", "Gunlom and Maguk in Kakadu", "Dry season is the main window"]),
    section("The Kimberley and the north-west", ["Bell Gorge has a campground at Silent Grove, and Manning Gorge has a camp at Mount Barnett Roadhouse, both on the Gibb River Road. The road is unsealed and closes in the wet season, so go in the dry season, and check your hire agreement before taking a vehicle there.", "The Gibb River Road guide covers the route, the gorges and the camps."], ["Silent Grove for Bell Gorge", "Mount Barnett for Manning Gorge", "Gibb River Road closes in the wet"]),
    section("Queensland and New South Wales", ["In Queensland, Wallaman Falls near Ingham drops about 268 metres and has a small campground near the lookout, and Lamington National Park in the Gold Coast hinterland has camping at Binna Burra with rainforest walks to waterfalls. In New South Wales, Oxley Wild Rivers National Park has campgrounds near Apsley Falls and Wollomombi Falls.", "Check each park's website for closures after rain and fire, and whether you need to book ahead."], ["Wallaman Falls", "Binna Burra and Lamington", "Apsley and Wollomombi Falls"]),
    section("Tasmania and staying safe", ["Mt Field National Park, about an hour from Hobart, has Russell Falls and a campground close to the start of the walk. The south is best in winter and spring, when the falls run, but nights are cold.", "At any waterfall, keep to the signs. Do not swim after heavy rain or where signs forbid it, because currents and submerged rocks are the main hazards, and diving into unknown water is a common cause of serious injury. The weather safety guide covers floods and storms."], ["Russell Falls at Mt Field", "Do not swim after heavy rain", "Never dive into unknown water"]),
    { ...section("Plan the route in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Build a trip as ordered stops and it shows the distance, drive time and forecast for each leg, so you can line up the camps near the waterfalls you want to see.", "The iPhone app is free to download, with in-app purchases."], ["Find campgrounds near the falls", "Add each stop in order", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Parks Australia: Kakadu National Park", url: "https://parksaustralia.gov.au/kakadu/" },
    { label: "Parks and Wildlife Tasmania: Mt Field National Park", url: "https://parks.tas.gov.au/" },
    { label: "Wikipedia: Wallaman Falls", url: "https://en.wikipedia.org/wiki/Wallaman_Falls" },
  ],
});

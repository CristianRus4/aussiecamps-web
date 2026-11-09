import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How far is Perth to Darwin by road?", "It is about 4,000 km by the Great Northern Highway to Broome and the Great Northern and Victoria Highways on to Darwin. Allow at least eight to ten days if you want to camp and see things on the way, and two weeks or more if you add Karijini, the Kimberley and Kakadu."],
  ["What is the best time of year to drive Perth to Darwin?", "The dry season, from about May to September, is the sensible window. In the wet season, from roughly November to April, heat, storms and flooding can close roads and some camps and gorges."],
  ["Do I need a 4WD to drive from Perth to Darwin?", "No. The main route is sealed all the way, and a campervan or a car handles it. A 4WD is only needed if you add side trips such as the Gibb River Road."],
  ["Where do I stop for fuel on the way to Darwin?", "Roadhouses and towns such as Geraldton, Carnarvon, Port Hedland, Broome, Fitzroy Crossing, Kununurra and Katherine are the main fuel stops. Gaps between them can be 150 to 300 km, so fill up at each one."],
] as const;

export default article({
  slug: "perth-to-darwin-drive",
  title: "Perth to Darwin Drive 2026: Route, Days, Fuel and Camping Along the West Coast and Kimberley",
  description: "Perth to Darwin is about 4,000 km and eight to fourteen days by the coast, the Pilbara, Broome and the Kimberley. Day-by-day plan, fuel gaps, dry season timing, free camps and caravan parks.",
  category: "Road trips", region: "Western Australia and the Northern Territory",
  places: ["Geraldton", "Carnarvon", "Karratha", "Port Hedland", "Broome", "Fitzroy Crossing", "Kununurra", "Katherine", "Darwin"],
  imageAlt: "A boab tree beside the Great Northern Highway in the Kimberley under a clear dry-season sky",
  intro: "Perth to Darwin is about 4,000 km along the west coast, through the Pilbara and across the Kimberley, and it is one of the great Australian road trips. It is sealed the whole way and can be done in about eight days at a stretch, but ten to fourteen days lets you stop at Karijini, Broome and Kununurra and is the version most people remember.",
  related: ["perth-to-broome-road-trip", "broome-to-darwin-drive", "gibb-river-road-camping", "wet-season-camping-top-end-northern-wa", "road-trip-fuel-planning-australia", "camping-rules-western-australia"],
  sections: [
    section("The route and how long it takes", ["From Perth the Brand and North West Coastal Highways run north past Geraldton and Carnarvon to the Pilbara, then the Great Northern Highway continues through Port Hedland and Broome. From Broome the Great Northern Highway swings inland through Fitzroy Crossing and Halls Creek to Kununurra, and the Victoria Highway carries you across the border to Katherine, then the Stuart Highway north to Darwin.", "The Perth to Broome guide covers the first half in detail and the Broome to Darwin guide covers the second, so this page is the plan that joins them up. On the coast you can break the trip at Kalbarri, Coral Bay and Karijini; in the Kimberley you can add the Bungle Bungles or the Gibb River Road with extra days."], ["Eight days is a hard minimum", "Ten to fourteen is comfortable", "Add Karijini, Broome or Kununurra on the way"], {
      caption: "A ten day split. Distances are approximate.",
      head: ["Leg", "Distance", "Drive time", "Where to stop"],
      rows: [
        ["Perth to Geraldton", "About 420 km", "About 5 h", "Geraldton or Kalbarri"],
        ["Geraldton to Carnarvon", "About 480 km", "About 5.5 h", "Carnarvon or Coral Bay"],
        ["Carnarvon to Karratha", "About 780 km", "About 8.5 h", "Karratha or Karijini"],
        ["Karratha to Broome", "About 740 km", "About 8 h", "Port Hedland or Broome"],
        ["Broome to Kununurra", "About 1,040 km", "About 11.5 h", "Fitzroy Crossing and Halls Creek"],
        ["Kununurra to Darwin", "About 830 km", "About 9 h", "Katherine and Darwin"],
      ],
    }),
    section("Fuel, water and long gaps", ["Services are spaced out on this road, and some stretches in the Pilbara and the Kimberley are 150 to 300 km between fuel stops. Fill up at every roadhouse and town, and carry spare water, food and a basic kit in case of a breakdown. The road trip fuel planning guide shows how to work out the range for a campervan.", "Road trains use the highway, so give them room and pass them with care. The driving with road trains guide covers the rules, and the fatigue guide covers the rest breaks that matter on a drive this long."], ["Fill up at every roadhouse", "Carry spare water", "Give road trains room"]),
    section("When to go", ["The dry season, from about May to September, is the sensible time to drive from Perth to Darwin: skies are clear, nights are cool and the roads are open. In the wet season, from roughly November to April, heat, storms and cyclones can close roads and some camps and gorges, and the wet season camping guide for the Top End and northern Western Australia covers what changes.", "School holidays and the dry season mean popular camps and caravan parks in Broome and Kununurra fill early, so book ahead for those nights."], ["May to September is the safe window", "Wet season closes roads and camps", "Book Broome and Kununurra ahead"]),
    section("Camping on the way", ["Caravan parks and roadhouse camps carry most nights: Geraldton, Carnarvon, Karratha, Port Hedland, Broome, Fitzroy Crossing, Kununurra and Katherine all have parks, and there are free rest areas and bush camps between towns. The camping rules guides for Western Australia and the Northern Territory explain where overnight stays are allowed, and the overnight rest area guide covers the common sign and rule differences.", "Check camp availability and any national park booking before you drive to Karijini, Cape Range or Purnululu, as these are busy in the dry season."], ["Parks in every major town", "Free camps between towns", "Book national parks ahead"]),
    { ...section("Plan the Perth to Darwin drive in AussieCamps", ["Build the drive as a trip in AussieCamps: add Geraldton, Carnarvon, Karratha, Broome, Kununurra and Katherine in order and it shows the distance and drive time of each leg, with a forecast for the day you expect to arrive. AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish.", "Open the trip while you still have a connection, because map tiles, routing and weather need one and the Pilbara and Kimberley have little. The iPhone app is free to download, with in-app purchases."], ["Add each overnight stop in order", "Forecast for each arrival day", "Open the trip before the long legs"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Great Northern Highway (Western Australia)", url: "https://en.wikipedia.org/wiki/Great_Northern_Highway_(Western_Australia)" },
    { label: "Wikipedia: Victoria Highway", url: "https://en.wikipedia.org/wiki/Victoria_Highway" },
    { label: "Main Roads Western Australia: road conditions", url: "https://www.mainroads.wa.gov.au/" },
    { label: "Northern Territory Government: road report", url: "https://dipl.nt.gov.au/" },
  ],
});

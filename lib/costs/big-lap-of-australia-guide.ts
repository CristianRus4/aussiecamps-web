import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How long does the Big Lap of Australia take?", "Most people allow 9 to 12 months to go around the country at a relaxed pace, and about 3 to 4 months for a fast lap. The Highway 1 route is around 14,500 km, and detours add thousands more."],
  ["Which direction should I drive the Big Lap?", "It depends on the season you start. Clockwise or anticlockwise, the aim is to be in the north during the dry season, from about May to September, and in the south during summer."],
  ["How much does the Big Lap cost?", "Plan on a campervan or caravan, fuel and camping each night, plus food and insurance. Fuel is the largest cost for most people, and the road trip fuel cost and budget guides cover the numbers."],
  ["Do I need a 4WD for the Big Lap?", "No. The Highway 1 route is sealed the whole way, and a campervan or caravan is fine. A 4WD is only needed for side trips such as the Gibb River Road or Cape York."],
] as const;

export default article({
  slug: "big-lap-of-australia-guide",
  title: "The Big Lap of Australia 2026: Route, Direction, Timing, Budget and Camping",
  description: "The Big Lap is a drive around Australia on Highway 1, about 14,500 km in 3 to 12 months. Direction, season by region, fuel and budget, camping and where to start.",
  category: "Trip planning", region: "Australia",
  places: ["Highway 1", "Nullarbor", "Kimberley", "Top End", "Queensland coast", "Tasmania"],
  imageAlt: "A campervan parked beside a quiet outback road at sunset on a long Australian road trip",
  intro: "The Big Lap is the classic Australian road trip: a full circuit of the country on Highway 1, about 14,500 km if you stay on the main road. People do it in three months or in two years, in a campervan, a caravan or a 4WD with a rooftop tent, and the main decisions are which direction to drive, when to be in the north and how much to carry.",
  related: ["best-apps-lap-of-australia", "campervan-road-trip-budget-australia", "australia-road-trip-fuel-cost-2026", "road-trip-fuel-planning-australia", "wet-season-camping-top-end-northern-wa", "nullarbor-crossing-camping-guide"],
  sections: [
    section("What the Big Lap is", ["The Big Lap follows Highway 1 around the coast: from Sydney or Melbourne north through Queensland to Cairns, across the Top End to Darwin, down the Western Australian coast through Broome, Exmouth and Perth, then across the Nullarbor to South Australia and back east. Many people add Tasmania, the Red Centre and the Kimberley, which push the total well beyond 14,500 km.", "There is no single rule for how long it takes. A fast lap is three or four months, a comfortable one is nine to twelve, and some take longer so they can work along the way."], ["About 14,500 km on Highway 1", "3 to 12 months", "Detours add a lot"]),
    section("Which direction and when to start", ["The Top End and the Kimberley are best from about May to September, in the dry season, and the south is best in summer. That means most people start in the east in autumn or winter, head north, cross the top in the dry season and be in the west and south by spring and summer. If you start at the wrong time you can still do the lap, but you will drive some roads in the wet season, when roads and camps close.", "Clockwise from Sydney or Melbourne means the Queensland coast first and the Nullarbor last; anticlockwise reverses that. Pick the direction that puts you in the north in the dry season, and the wet season camping guide covers what changes if you cannot."], ["North in the dry season", "South in summer", "Pick direction by season"]),
    section("Fuel, budget and camping", ["Fuel is the biggest running cost, and the gaps between fuel stops on the Nullarbor, in the Pilbara and across the Top End are long, so fill up at every roadhouse. The road trip fuel planning guide covers range, and the fuel cost and budget guides cover the numbers.", "Most nights are in caravan parks, roadhouse camps or free rest areas and bush camps where allowed, and the camping rules guides explain where overnight stays are legal in each state. Book popular camps in the dry season."], ["Fuel is the biggest cost", "Fill up at every roadhouse", "Book popular camps ahead"]),
    section("Planning and tools", ["A lap of the country is a trip of dozens of stops, and a planning app helps more than a paper list. The best apps for a lap of Australia guide compares what is on offer, and the AussieCamps planning guide covers building a long trip as ordered stops with dates and notes.", "Rules and conditions vary a lot by state, so it is worth reading the camping rules and biosecurity guides before you cross each border."], ["Plan as ordered stops", "Read the rules for each state", "Mind biosecurity at borders"]),
    { ...section("Plan your Big Lap in AussieCamps", ["Build the lap as a trip in AussieCamps: add each overnight stop in order and it shows the distance and drive time of each leg, with a forecast for the day you expect to arrive. AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish.", "Open each leg while you still have a connection, because map tiles, routing and weather need one. The iPhone app is free to download, with in-app purchases."], ["Add each stop in order", "Forecast for each arrival day", "Open the trip before the long legs"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Highway 1 (Australia)", url: "https://en.wikipedia.org/wiki/Highway_1_(Australia)" },
    { label: "Tourism Australia: road trips", url: "https://www.australia.com/en/things-to-do/road-trips.html" },
    { label: "Bureau of Meteorology: climate by region", url: "http://www.bom.gov.au/climate/" },
  ],
});

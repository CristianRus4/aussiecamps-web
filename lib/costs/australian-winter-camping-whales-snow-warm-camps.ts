import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where is the best camping in Australia in winter?", "The north is best: the Top End, the Kimberley, Exmouth and the Queensland coast are in the dry season from about May to September, with sunny days and mild nights. The south has cold nights but some of the best whale watching and the snow."],
  ["When can I see whales in Australia?", "Humpback whales migrate along the east and west coasts from about May to November, and Hervey Bay and Albany are popular. Southern right whales visit the south coast and the Head of Bight from about June to October."],
  ["Is there snow camping in Australia?", "Yes. The Snowy Mountains and the Victorian Alps get snow from about June to September, and some campgrounds are open in winter. Check road conditions and carry chains where required."],
  ["Do I need a heater in a campervan in winter?", "In the south, yes. Nights can drop below freezing, so carry extra bedding, a heater that is safe to use in a van, and warm clothes, and ventilate when you use it."],
] as const;

export default article({
  slug: "australian-winter-camping-whales-snow-warm-camps",
  title: "Australian Winter Camping 2026: Whales, Snow and Warm Camps by Region",
  description: "Where to camp in Australia in winter: warm dry-season camps in the north, whale watching on the east, south and west coasts, snow camping in the Alps, and how to stay warm in a campervan.",
  category: "Trip planning", region: "Australia",
  places: ["Top End", "Kimberley", "Exmouth", "Hervey Bay", "Albany", "Snowy Mountains"],
  imageAlt: "A humpback whale breaching off the Australian coast in winter",
  intro: "Winter is a great time to camp in Australia if you pick the right region. The north is in the dry season, with sunny days and cool nights. The east and west coasts have whales passing from about May to November, the south coast gets southern right whales, and the Alps have snow. The south can be cold and wet, so the trick is to match the region to what you want.",
  related: ["best-time-camping-australia", "wet-season-camping-top-end-northern-wa", "perth-to-exmouth-drive", "camping-weather-safety-australia", "australian-alps-camping-route", "camping-packing-list-australia", "snow-chains-winter-driving-australia", "wildlife-encounters-campervan-australia"],
  sections: [
    section("Warm camps in the north", ["The Top End, the Kimberley, the Pilbara and the north Queensland coast are in the dry season from about May to September, with sunny days, mild nights and few storms. It is peak season for the Darwin, Kakadu and Litchfield loop, the Perth to Broome drive and the Red Centre, so book popular camps ahead.", "The wet season guide covers what changes after September, when roads and camps close. In winter the north is the place to be."], ["Dry season May to September", "Sunny days, mild nights", "Book popular camps ahead"]),
    section("Whales on the coast", ["Humpback whales migrate along the east and west coasts from about May to November, and Hervey Bay, the Gold Coast, Byron Bay, Port Stephens, Eden and Albany are popular places to see them. Southern right whales visit the south coast from about June to October, including the Head of Bight on the Nullarbor, and Ningaloo near Exmouth has whale sharks and humpbacks in season.", "Many coastal caravan parks and national park campgrounds are close to the viewing spots, and they fill in school holidays. The Perth to Exmouth guide covers the Ningaloo coast."], ["Humpbacks from May to November", "Southern right whales June to October", "Book school holiday weeks early"]),
    section("Snow and cold camps in the south", ["The Snowy Mountains and the Victorian Alps get snow from about June to September, and some campgrounds stay open in winter, but roads can need chains and may close, so check conditions before you drive. Tasmania has snow on the high country and cold nights near the coast.", "The Australian Alps camping route guide covers the high country in summer, and in winter the same places need warm gear and an alternate plan for closures."], ["Snow from June to September", "Check road conditions", "Carry chains where required"]),
    section("Staying warm in a campervan", ["Nights in the south can drop below freezing, so carry extra bedding, warm clothes and a heater that is safe to use in a van, and ventilate when you use it. Condensation builds quickly in a cold van, so open a vent and wipe the windows.", "Powered sites let you run an electric heater, so book powered sites in the cold regions. The packing list guide covers what to bring."], ["Extra bedding and warm clothes", "Ventilate the van", "Choose powered sites"]),
    { ...section("Plan your winter trip in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities and a forecast. Build the trip as ordered stops and it shows the distance, drive time and forecast for each leg, which helps you choose between warm and cold regions.", "The iPhone app is free to download, with in-app purchases."], ["Compare forecasts for each stop", "Add each stop in order", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Humpback whale", url: "https://en.wikipedia.org/wiki/Humpback_whale" },
    { label: "Wikipedia: Southern right whale", url: "https://en.wikipedia.org/wiki/Southern_right_whale" },
    { label: "Bureau of Meteorology: climate by region", url: "http://www.bom.gov.au/climate/" },
  ],
});

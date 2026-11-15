import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How far is it from Adelaide to Kangaroo Island?", "It is about 110 km from Adelaide to Cape Jervis, roughly an hour and three-quarters by road, then about 45 minutes on the ferry to Penneshaw. Allow most of a morning to get there with a van, plus the time to check in at the terminal."],
  ["Do I need to book the Kangaroo Island ferry for a campervan?", "Yes, book vehicle space well ahead, especially for school holidays, summer and long weekends. Vans are priced by length, so measure yours including the bike rack or tow bar and book the right size."],
  ["Can I take a campervan on the unsealed roads on Kangaroo Island?", "Many of the island's main roads are sealed, but several routes to beaches, bays and park camps are gravel or sand. Check your rental agreement, because many hire companies do not allow unsealed roads, and slow right down on gravel."],
  ["When do kangaroos and wallabies come out on the island?", "Dusk and dawn are the danger times, and Kangaroo Island has plenty of kangaroos, wallabies, possums and echidnas on the road. Plan to be at camp before dark and avoid driving at night."],
] as const;

export default article({
  slug: "adelaide-to-kangaroo-island-drive", publishAt: "2026-11-17",
  title: "Adelaide to Kangaroo Island Drive 2027: Route, Stops and Camping",
  description: "Drive Adelaide to Cape Jervis, take the SeaLink ferry to Penneshaw and tour Kangaroo Island by van: routes, ferry booking, park camps, fuel, dump points and wildlife at dusk.",
  category: "Road trips", region: "South Australia",
  places: ["Adelaide", "Victor Harbor", "Cape Jervis", "Penneshaw", "Kingscote", "Flinders Chase National Park", "Vivonne Bay"],
  imageAlt: "Remarkable Rocks, Kangaroo Island",
  intro: "Adelaide to Kangaroo Island is about 110 km of Fleurieu Peninsula driving to Cape Jervis, then a 45-minute ferry crossing to Penneshaw. The drive is easy and mostly sealed, so the real planning is the ferry booking and the days on the island. Book your vehicle space early, leave Adelaide in the morning and carry your fuel and food sensibly, because the island is large and the distances add up.",
  related: ["kangaroo-island-camping-guide", "fleurieu-peninsula-camping", "free-camping-near-adelaide", "road-trip-fuel-planning-australia", "dump-points-australia-guide", "australia-road-trip-fatigue-wildlife-safety"],
  sections: [
    section("Adelaide to Cape Jervis: two ways to go", ["There are two main routes south. The Main South Road is the direct drive through Noarlunga and Yankalilla, and it suits you if you want to reach the terminal without detours. The coastal route runs through McLaren Vale and Victor Harbor, which is longer but gives you wine country, beaches and a good place to stop for lunch.", "Either way, aim to be at the Cape Jervis terminal well before your sailing, because check-in for vehicles closes ahead of departure. Leave Adelaide in the morning, keep a buffer for roadworks and holiday traffic, and have your booking confirmation ready."], ["Main South Road is direct", "Victor Harbor route is scenic", "Arrive early for check-in"], {
      caption: "Routes and legs from Adelaide to Kangaroo Island. Distances and times are approximate.",
      head: ["Leg", "Distance", "Time", "Notes"],
      rows: [
        ["Adelaide to Cape Jervis via Main South Road", "About 110 km", "About 1 hr 45 min", "The direct drive, with the ferry terminal at the end"],
        ["Adelaide to Cape Jervis via Victor Harbor", "About 150 km", "About 2 hr 30 min", "Longer, with coastal stops and a good lunch break"],
        ["Cape Jervis to Penneshaw by ferry", "About 15 nautical miles", "About 45 min", "Book vehicle space ahead; vans priced by length"],
        ["Penneshaw to Kingscote", "About 60 km", "About 50 min", "The island's main town, with shops and fuel"],
        ["Kingscote to Flinders Chase National Park", "About 105 km", "About 1 hr 20 min", "West along the south coast, through Parndana"],
        ["Penneshaw to Flinders Chase National Park", "About 150 km", "About 2 hr", "The full length of the island"],
      ],
    }),
    section("The ferry and your van", ["The SeaLink ferry runs from Cape Jervis to Penneshaw several times a day, and vehicles are priced by length. Campervans, motorhomes and vans towing a trailer or caravan cost more than a car, so give the exact length when you book. Peak periods sell out of vehicle space weeks ahead, so book as soon as your dates are set.", "Hire companies set their own rules about taking vans to the island, and some do not allow it or restrict the roads. Check yours before you book. Fresh produce rules also apply on the island, so check the current biosecurity requirements for plants, honey and potatoes before you pack the fridge."], ["Book vehicle space early", "Give the exact van length", "Check your hire rules"]),
    section("Where to stay on the island", ["Kangaroo Island has a good mix of park camps, council stopovers and holiday parks, but free camping is not generally allowed on the island, so plan each night. Penneshaw, American River, Kingscote and Parndana have caravan parks and powered sites, and Vivonne Bay and the western end have smaller camps close to the coast.", "Inside Flinders Chase National Park, camps are run by the park agency and booked online. They are popular, especially at holiday times and in spring, so book before you leave Adelaide. Outside the park, the coastal camps at Vivonne Bay and Western River are simple and quiet. Our Kangaroo Island camping guide goes through the campgrounds one by one."], ["No free camping on the island", "Book park camps online", "Caravan parks in the main towns"]),
    section("Flinders Chase and the west", ["Flinders Chase is the highlight of the island for most visitors: Remarkable Rocks, Admirals Arch and Cape du Couedic, with koalas, kangaroos and New Zealand fur seals close to the road. Entry needs a park pass, and the parks agency sells passes online and at the visitor centre at Rocky River. Pick up a map and ask about road conditions while you are there.", "The drive from Penneshaw to the park is the longest of the trip. Break it with a night at Kingscote or American River and a stop at Seal Bay, where you can walk the beach with sea lions on a guided tour. Fuel up at Parndana or Kingscote before the western run."], ["Park pass for entry", "Break the drive at Kingscote", "Fuel at Parndana first"]),
    section("Fuel, roads and dump points", ["Fuel is sold in Penneshaw, Kingscote, American River and Parndana, and at a few smaller roadhouses, but opening hours are short outside the main towns and prices are higher than on the mainland. Start the island with a full tank and top up whenever you pass a station. Our fuel planning guide has the range sums.", "The main roads are sealed, but many routes to bays and beaches are gravel and can be rough. Slow down, give way to oncoming vehicles and watch for corrugations. Dump points on the island are mainly in the larger towns, so empty your cassette before heading to the western camps. The dump points guide shows how to use one."], ["Start with a full tank", "Gravel roads are rough", "Empty your cassette in town"]),
    section("Wildlife at dusk", ["Kangaroo Island has plenty of animals on the road, including kangaroos, wallabies, possums, echidnas and koalas. They are most active at dusk and dawn, and a collision can damage a hire van badly. Avoid driving between sunset and sunrise, and slow down on bends and tree-lined roads.", "The island is also great for watching wildlife on foot. Take a torch at camp, keep your distance from animals, do not feed them and secure food at night, because possums and birds will raid a van."], ["Be at camp by dark", "Slow down on bends", "Do not feed wildlife"]),
    { ...section("Plan the Kangaroo Island drive in AussieCamps", ["Build the trip in AussieCamps with Add stop: put Adelaide, Cape Jervis, Kingscote and Flinders Chase in as stops, and each leg shows its driving distance and time. Add dates, notes and weather to each stop, and keep a To-do list for the ferry booking and park passes.", "Use the filters for Cost, Dogs allowed, Online booking and Popular features such as toilets and drinking water, and save the camps you like to a collection such as Want to visit. The whole directory is inside the app, so search and place details work with no signal. AussieCamps is an iPhone app, with no account and no ads."], ["Add stop for each night", "Filter by Online booking", "Works with no signal"]), cta: true },
  ],
  sources: [
    { label: "SeaLink Kangaroo Island", url: "https://www.sealink.com.au/kangaroo-island/" },
    { label: "Parks SA: Flinders Chase National Park", url: "https://www.parks.sa.gov.au/" },
    { label: "Kangaroo Island: official tourism", url: "https://www.tourkangarooisland.com.au/" },
    { label: "South Australian Tourism Commission", url: "https://southaustralia.com/" },
    { label: "Traffic SA: road conditions", url: "https://www.traffic.sa.gov.au/" },
  ],
});

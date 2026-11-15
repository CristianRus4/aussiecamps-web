import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How far is it from Launceston to Cradle Mountain?", "About 145 to 150 km and around 2.5 hours, through Deloraine and Sheffield. The last stretch up to the park is winding, so allow extra time in a van, in bad weather and in the school holidays."],
  ["Do I need a pass for Cradle Mountain?", "Yes, you need a Tasmanian Parks Pass to enter Cradle Mountain-Lake St Clair National Park. You can buy a short-stay or holiday pass online before you go or at the visitor centre."],
  ["Can I drive to Dove Lake?", "In the busy season, cars are not allowed on the Dove Lake road, and you take the park shuttle bus from the visitor centre instead. The shuttle is included with your pass, and runs often, but check the park's website for times and any changes."],
  ["Can it snow at Cradle Mountain in summer?", "Yes, snow and sleet can fall in any month. Pack warm layers, a rain jacket and a heater for the van, and check the forecast before you walk."],
] as const;

export default article({
  slug: "launceston-to-cradle-mountain-drive", publishAt: "2026-11-22",
  title: "Launceston to Cradle Mountain Drive 2027: Route, Stops and Camping",
  description: "Drive Launceston to Cradle Mountain through Deloraine, Mole Creek and Sheffield: legs, the Dove Lake shuttle, Parks Pass, camping, fuel, weather and wildlife at dusk.",
  category: "Road trips", region: "Tasmania",
  places: ["Launceston", "Deloraine", "Mole Creek", "Sheffield", "Devonport", "Cradle Mountain", "Dove Lake"],
  imageAlt: "Cradle Mountain above Dove Lake, Tasmania",
  intro: "Launceston to Cradle Mountain is about 145 to 150 km and roughly 2.5 hours through Deloraine and Sheffield, with a pretty detour via Mole Creek if you have time. The road is sealed all the way, but it climbs and winds near the park, and the weather can change fast. Buy your Parks Pass, plan on the shuttle bus to Dove Lake, and keep an eye out for wombats and pademelons at dusk.",
  related: ["tasmania-camping-loop", "hobart-to-launceston-drive", "can-i-take-a-campervan-or-caravan-on-the-spirit-of-tasmania", "free-camping-tasmania", "camping-rules-tasmania", "wildlife-encounters-campervan-australia"],
  sections: [
    section("The routes and the legs", ["The direct route runs from Launceston west on the Bass Highway to Deloraine, then on to Sheffield and up the Cradle Mountain Road to the park. A detour through Mole Creek adds a short side trip to the caves and the Great Western Tiers. A third option is the Bass Highway to Devonport, then inland to Sheffield, which is longer but suits people arriving on the Spirit of Tasmania.", "Whichever route you choose, leave Launceston in the morning to give yourself time for a stop or two, and to arrive at the park before the afternoon weather closes in."], ["Bass Highway to Deloraine", "Mole Creek detour for caves", "Devonport route for ferry arrivals"], {
      caption: "Legs from Launceston to Cradle Mountain. Distances and times are approximate.",
      head: ["Leg", "Distance", "Time", "Notes"],
      rows: [
        ["Launceston to Deloraine", "About 50 km", "About 40 min", "Bass Highway, with the Great Western Tiers ahead"],
        ["Deloraine to Mole Creek (detour)", "About 25 km", "About 25 min", "Caves at the foot of the Great Western Tiers"],
        ["Deloraine to Sheffield", "About 35 km", "About 30 min", "Via Elizabeth Town"],
        ["Sheffield to Cradle Mountain", "About 60 km", "About 1 hr", "Winding road, with steep sections near the park"],
        ["Launceston to Devonport", "About 100 km", "About 1 hr 10 min", "Bass Highway, for ferry arrivals"],
      ],
    }),
    section("Deloraine, Mole Creek and Sheffield", ["Deloraine is a pretty town on the Meander River with cafés, craft shops and a good fuel and supermarket stop. It is a handy place to stock up before the national park, where supplies are limited and prices are higher.", "Mole Creek is the gateway to the Mole Creek caves, including Marakoopa and King Solomons, and the Mole Creek Karst National Park. Sheffield is known as the town of murals, with painted walls on streets and buildings, and it is a good place for lunch, a walk and fuel before the last stretch to Cradle."], ["Deloraine for supplies", "Mole Creek for caves", "Sheffield for murals"]),
    section("Cradle Mountain, Dove Lake and the park pass", ["Cradle Mountain-Lake St Clair National Park needs a Tasmanian Parks Pass, bought online or at the visitor centre. The visitor centre at Cradle Mountain has maps, walk advice and weather updates, and it is the starting point for the shuttle bus to Dove Lake.", "In the busy season, private cars are not permitted on the Dove Lake road, so you leave the van at the visitor centre and ride the shuttle. The Dove Lake circuit is a gentle walk of around two hours, and longer tracks climb to the summit and beyond, so check the weather and your fitness before you set out."], ["Parks Pass for entry", "Shuttle to Dove Lake", "Check weather before walking"]),
    section("Where to sleep", ["There is a Discovery Parks campground at Cradle Mountain, just outside the park gate, with powered and unpowered sites, cabins and a shop. Book ahead, because it fills quickly in summer and in school holidays. Sheffield, Deloraine and Mole Creek also have caravan parks and small campgrounds.", "Free camping near the park is limited, and the rules are strict in national parks. Our Tasmania camping rules guide explains what is allowed, and our free camping in Tasmania guide covers the council stopovers and state forest sites in other parts of the island."], ["Discovery Parks at the park", "Book summer and holidays early", "Caravan parks in nearby towns"]),
    section("Weather, wildlife and the road", ["Cradle Mountain is alpine and can be cold, wet and windy in any month, with snow even in summer. Pack warm layers, waterproofs and a heater for the van, and check the forecast and any road warnings before you leave.", "Wombats, pademelons, wallabies and Tasmanian devils are all around, and they are most active at dusk and dawn. They are also the animals most often hit on the road, so slow down after sunset, keep to the limit and do not feed wildlife. Our wildlife encounters guide has more tips."], ["Snow can fall any month", "Wombats at dusk", "Slow down after sunset"]),
    section("Fuel and dump points", ["Fuel is sold in Launceston, Deloraine, Sheffield and Devonport, and there is little or none inside the park area, so fill up in Sheffield or Deloraine before the climb. Our fuel planning guide has the range sums.", "Dump points are in the larger towns, such as Deloraine, Sheffield and Devonport, so empty your cassette before you reach the park. Our dump points guide shows how to use one, and drinking water at the park campground is limited, so top up your tank in town."], ["Fill up in Sheffield", "Dump points in towns", "Top up water before the park"]),
    { ...section("Plan the Cradle Mountain drive in AussieCamps", ["Build the drive as a trip in AussieCamps with Add stop: put Launceston, Deloraine, Sheffield and Cradle Mountain in as stops, and each leg shows its driving distance and time. Add dates, notes and weather to each stop, which helps when the mountain weather changes, and keep a To-do list for your Parks Pass.", "Use the filters for Cost, Dogs allowed, Online booking and Popular features such as toilets, drinking water and showers, and save the camps you like to a collection such as Want to visit. The whole directory is inside the app, so search, filters and place details work with no signal. AussieCamps is an iPhone app, with no account and no ads."], ["Add stop for each night", "Filter by Online booking", "Weather for each stop"]), cta: true },
  ],
  sources: [
    { label: "Tasmania Parks and Wildlife Service: Cradle Mountain-Lake St Clair National Park", url: "https://parks.tas.gov.au/explore-our-parks/cradle-mountain-lake-st-clair-national-park" },
    { label: "Tasmania Parks and Wildlife Service", url: "https://parks.tas.gov.au/" },
    { label: "Discover Tasmania", url: "https://www.discovertasmania.com.au/" },
    { label: "Transport Tasmania: road conditions", url: "https://www.transport.tas.gov.au/" },
    { label: "Bureau of Meteorology: Tasmania", url: "https://www.bom.gov.au/tas/" },
  ],
});

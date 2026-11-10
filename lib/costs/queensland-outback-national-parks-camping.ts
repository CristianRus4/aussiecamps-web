import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Do I need to book camping in Queensland national parks?", "Yes. A camping permit is required in every Queensland national park campground and is booked online through the state parks system. Remote parks have patchy phone coverage, so book before you leave town."],
  ["Which outback Queensland national parks are best for camping?", "Boodjamulla (Lawn Hill) for its gorge and canoeing, Carnarvon Gorge for walks and rock art, Currawinya for birds and wetlands, and Diamantina and Munga-Thirri for remote desert country."],
  ["Do I need a 4WD for outback Queensland national parks?", "For Carnarvon Gorge and Boodjamulla in dry weather a 2WD can often manage, but roads turn to bog after rain. Diamantina, Munga-Thirri and the back tracks of Currawinya need a high clearance 4WD."],
  ["When is the best time to camp in outback Queensland parks?", "April to October. Summer is very hot, and the wet season from about December to March can cut roads and close parks, including Munga-Thirri, which closes in summer."],
] as const;

export default article({
  slug: "queensland-outback-national-parks-camping", publishAt: "2026-11-10",
  title: "Queensland Outback National Parks Camping: Boodjamulla, Currawinya and More",
  description: "Camping in Queensland's outback national parks: Boodjamulla (Lawn Hill), Currawinya, Carnarvon Gorge, Diamantina and Munga-Thirri, with permits, roads, the season and what to carry.",
  category: "Camping guides", region: "Queensland",
  places: ["Boodjamulla National Park", "Currawinya National Park", "Carnarvon Gorge", "Diamantina National Park", "Munga-Thirri National Park"],
  imageAlt: "Carnarvon Creek in Carnarvon Gorge",
  intro: "Outback Queensland has some of Australia's most rewarding national park camping. Boodjamulla has a turquoise gorge in the dry country of the north-west, Currawinya holds wetlands and wildlife on the border with New South Wales, and Carnarvon Gorge has sandstone walls and rock art. Each park has a campground that you book through the state parks system, long approach roads and a short season, so plan permits, fuel and water before you set out.",
  related: ["queensland-outback-way", "free-camping-queensland-outback", "camping-rules-queensland", "camping-without-phone-signal", "can-i-camp-in-a-national-park-without-booking-in-australia"],
  sections: [
    section("The parks at a glance", ["Boodjamulla, also called Lawn Hill, is in the north-west and has a gorge you can paddle. Currawinya sits in the south-west near Hungerford, Carnarvon Gorge is in the central highlands, and Diamantina and Munga-Thirri lie in the far west and south-west, in desert country around Birdsville and Bedourie.", "Each has its own character and road conditions. Many visitors link two or three of them on a longer outback loop, using the highways between."], ["Boodjamulla for the gorge", "Currawinya for the wetlands", "Carnarvon for the walks"], {
      caption: "Queensland outback national parks and what to know.",
      head: ["Park", "Main draw", "Roads", "Watch for"],
      rows: [
        ["Boodjamulla (Lawn Hill)", "Gorge, canoeing, fossils", "Partly sealed, gravel at the end", "Closes in the wet, books out"],
        ["Currawinya", "Birds, lakes, bilbies", "Gravel, 4WD on back tracks", "Wet roads become bog"],
        ["Carnarvon Gorge", "Walks and rock art", "Mostly sealed to the gorge", "Busy at school holidays"],
        ["Diamantina", "Rivers, wildlife, remoteness", "Gravel, 4WD recommended", "Long gaps to fuel"],
        ["Munga-Thirri (Simpson Desert)", "Dunes and Big Red", "4WD only, permit needed", "Closed in summer"],
      ],
    }),
    section("Permits and booking", ["A camping permit is required in every Queensland national park campground. You book online through the state parks system and the permit comes with a modest per-person fee, which is paid in advance. Remote parks often have no phone coverage, so book before you leave a town with a signal.", "Popular parks such as Boodjamulla and Carnarvon Gorge fill at school holidays and in the cooler months, so book early. Our guide to camping rules in Queensland covers the state's wider rules."], ["Book every campground", "Pay in advance", "Book before you lose coverage"]),
    section("Roads, vehicle and fuel", ["The main highways are sealed, but the roads into the parks are often gravel and turn to bog after rain. Check the QLDTraffic road report and the park alerts before you set off, and be ready to stay put if rain arrives.", "Fill every tank at every town, carry spare fuel for remote parks and bring at least two spare tyres on gravel. Many rental agreements prohibit unsealed roads, so confirm yours in writing."], ["Check QLDTraffic and park alerts", "Fuel at every town", "Confirm your rental allows gravel"]),
    section("Season, heat and water", ["April to October is the season, with warm days and cool nights. Summer is very hot, regularly above 40 degrees, and the wet season from about December to March can close roads and parks.", "Carry at least 10 litres of water per person per day and treat or boil any water you collect. Tell someone your route and your return date."], ["April to October", "10 litres of water per person a day", "Tell someone your route"]),
    section("Linking the parks and the outback towns", ["Link the parks with the towns in between. Longreach, Winton and Mount Isa have caravan parks and council camps, and our guide to free camping in the Queensland outback shows where to stay between the parks.", "For a longer loop, the Savannah Way and the Queensland Outback Way connect the north-west and central parks and join the highways to the coast."], ["Council camps between parks", "Savannah Way link", "Queensland Outback Way"]),
    { ...section("Plan the outback in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops, which shows the long gaps between fuel.", "Book the permit and check road conditions on the state parks site before you drive. AussieCamps runs on iPhone."], ["Filter by cost", "Save places to a trip", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Queensland Parks and Forests: camping and permits", url: "https://parks.desi.qld.gov.au/" },
    { label: "Queensland Parks and Forests: Boodjamulla National Park", url: "https://parks.desi.qld.gov.au/parks/boodjamulla-lawn-hill" },
    { label: "QLDTraffic: road conditions", url: "https://qldtraffic.qld.gov.au/" },
    { label: "Tourism and Events Queensland: Outback Queensland", url: "https://www.queensland.com/" },
  ],
});

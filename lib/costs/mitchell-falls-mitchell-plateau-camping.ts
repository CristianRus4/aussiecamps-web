import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp at Mitchell Falls?", "Yes, at the campground in Mitchell River National Park near the walk to the falls. It is run by the park managers, has basic facilities and needs a camping fee, so check the park page before you go."],
  ["Do I need a 4WD to reach Mitchell Falls?", "Yes. The route runs from the Gibb River Road along the Kalumburu Road and then the Mitchell Plateau road, which is rough, with corrugations and creek crossings. A high clearance 4WD is needed, and rental campervans are not allowed."],
  ["When can you visit Mitchell Falls?", "Roughly May to October, in the dry season. The roads close in the wet, and conditions are better after the roads are graded in the early dry."],
  ["How far is the walk to Mitchell Falls?", "About 4 to 5 kilometres each way from the car park, over rock and creek crossings. It is hot and rough, so start early and carry water."],
] as const;

export default article({
  slug: "mitchell-falls-mitchell-plateau-camping", publishAt: "2026-11-10",
  title: "Mitchell Falls and Mitchell Plateau Camping: Roads, Camps and the Dry Season",
  description: "How to camp at Mitchell Falls and on the Mitchell Plateau in the Kimberley: the Kalumburu Road, the 4WD track, the campground, the walk to the falls, fuel and the season.",
  category: "Camping guides", region: "Western Australia",
  places: ["Mitchell Falls", "Mitchell Plateau", "Kalumburu Road", "Drysdale River Station", "Gibb River Road"],
  imageAlt: "Bell Gorge waterfall, West Kimberley",
  intro: "Mitchell Falls is one of the Kimberley's most remote and spectacular places. The four-tier waterfall falls over the Mitchell Plateau at the end of a long, rough road, and the walk in crosses rock, streams and pools. It is a serious trip with a short season, a 4WD requirement, and few services between the Gibb River Road and the falls. Plan fuel and water carefully, book camping ahead where you can and give yourself at least two nights on the plateau.",
  related: ["gibb-river-road-camping", "wet-season-camping-top-end-northern-wa", "purnululu-bungle-bungles-camping", "can-i-drive-a-2wd-hire-campervan-on-4wd-roads-in-australia", "waterfalls-with-campsites-australia"],
  sections: [
    section("Getting there", ["Mitchell Falls is reached from the Gibb River Road by the Kalumburu Road and then the Mitchell Plateau road. The whole route from the Gibb is roughly 250 to 300 kilometres of rough gravel, with corrugations, creek crossings and long stretches where you will not see another vehicle.", "A high clearance 4WD is needed, and standard rental campervans are not allowed. Many people hire a 4WD in Broome or Kununurra, or join a tour."], ["Kalumburu Road to the plateau", "Rough gravel and creek crossings", "High clearance 4WD needed"], {
      caption: "The main stops on the way to Mitchell Falls.",
      head: ["Stop", "What is there", "Camping", "Watch for"],
      rows: [
        ["Gibb River Road turn-off", "Start of the Kalumburu Road", "Roadside only", "Last easy fuel is on the Gibb"],
        ["Drysdale River Station", "Fuel, food, camping", "Station camp", "Limited hours and high prices"],
        ["Mitchell Plateau road", "The final rough section", "None on the way", "Slow going, allow half a day"],
        ["Mitchell Falls campground", "Basic toilets, walk to the falls", "Park campground", "Book and pay the fee"],
      ],
    }),
    section("Where to camp", ["The campground in Mitchell River National Park is the base for the falls, with basic facilities and a short walk to the start of the trail. Drysdale River Station, on the Kalumburu Road, is the usual overnight stop on the way in and out, with fuel, meals and a camp.", "Camping elsewhere along the road is limited, and much of the country is Aboriginal land. Stay at marked camps, pay the fees and carry cash where card machines are not available."], ["Park campground at the falls", "Drysdale River Station on the way", "Carry cash for fees"]),
    section("The walk to Mitchell Falls", ["The trail is about 4 to 5 kilometres each way from the car park and crosses rock, streams and pools, passing Little Merten Falls and Big Merten Falls before reaching the main falls. Swimming is possible at some pools, but follow the signs, because estuarine crocodiles are present in some Kimberley waterways.", "Start early, because the walk is hot and exposed. Carry water, wear sturdy shoes and allow half a day for the round trip."], ["4 to 5 km each way", "Start early, carry water", "Follow signs at swimming spots"]),
    section("Season and conditions", ["The roads are usually open from about May to October. They close in the wet season and can be rough early in the dry, before grading is finished. Our wet season guide explains what the closures mean across the Top End and the north of Western Australia.", "Check the road report and call ahead to confirm conditions at Drysdale River Station. Flights from the plateau give a view of the falls from above if you do not want to walk."], ["May to October", "Check the road report", "Scenic flights are an option"]),
    section("Fuel, water and safety", ["There is fuel at Drysdale River Station and none beyond it, so fill every tank and carry spare fuel for the return. Take at least 10 litres of water per person per day, spare tyres and a satellite messenger or a UHF radio, because there is no mobile coverage.", "Tell someone your route and your return date. Slow down on the corrugations, which are the main cause of tyre damage and vehicle failures."], ["Fuel at Drysdale River Station", "No mobile coverage", "Slow down on corrugations"]),
    { ...section("Plan the Kimberley in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops.", "Remote park camps are best confirmed on the Parks and Wildlife Service page and the road report. AussieCamps runs on iPhone."], ["Filter by cost", "Save places to a trip", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks and Wildlife Service WA: Mitchell River National Park", url: "https://exploreparks.dbca.wa.gov.au/park/mitchell-river-national-park" },
    { label: "Main Roads Western Australia: road conditions", url: "https://www.mainroads.wa.gov.au/" },
    { label: "Australia's North West: Kimberley", url: "https://www.australiasnorthwest.com/" },
    { label: "Kimberley Land Council", url: "https://www.klc.org.au/" },
  ],
});

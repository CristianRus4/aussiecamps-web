import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How far is Perth to Esperance by road?", "About 720 km by the Albany Highway and the South Coast Highway through Ravensthorpe, or about 950 km via Norseman. The direct route is roughly 8 hours of driving, so most people take two days."],
  ["Is there a good place to stop between Perth and Esperance?", "Yes. Wagin, Lake Grace, Hyden for Wave Rock and Ravensthorpe are common stops, and Kojonup and Albany make a nice detour if you take the south coast route."],
  ["Are there fuel gaps on this drive?", "There are towns at reasonable intervals, but gaps of 100 to 150 km are common, so fill up whenever you pass half a tank."],
  ["When is the best time to visit Esperance?", "Summer and autumn are warm and dry, and the beaches at Cape Le Grand and Lucky Bay are at their best. Spring has wildflowers, and winter is cooler and quieter."],
] as const;

export default article({
  slug: "perth-to-esperance-drive",
  title: "Perth to Esperance Drive 2026: Routes, Stops, Wave Rock and Camping at Cape Le Grand",
  description: "Perth to Esperance is about 720 km and two days by Wagin, Hyden and Ravensthorpe. Route options, fuel, Wave Rock, Cape Le Grand and Lucky Bay, caravan parks and free camps.",
  category: "Road trips", region: "Western Australia",
  places: ["Williams", "Wagin", "Lake Grace", "Hyden", "Ravensthorpe", "Esperance", "Cape Le Grand", "Lucky Bay"],
  imageAlt: "White sand and turquoise water at Lucky Bay near Esperance with a kangaroo on the beach",
  intro: "Perth to Esperance is about 720 km south-east across the wheatbelt to the south coast, and it ends at some of the whitest beaches in Australia. The road is sealed and quiet, you can do it in a long day, and a night at Hyden for Wave Rock or Ravensthorpe turns it into an easy two-day drive.",
  related: ["perth-to-albany-drive", "south-west-wa-camping-loop", "camping-rules-western-australia", "road-trip-fuel-planning-australia", "australia-road-trip-fatigue-wildlife-safety", "nullarbor-crossing-camping-guide"],
  sections: [
    section("The route and how long it takes", ["The direct route leaves Perth on the Albany Highway and turns off through Williams and Wagin, then takes the Lake Grace and Ravensthorpe roads to the South Coast Highway and east to Esperance. A popular variant goes through Hyden for Wave Rock before joining the highway at Ravensthorpe.", "The longer route via Albany and the south coast is about 900 km and takes a day more, and the Perth to Albany guide covers the first half. The other option is to head east through Kalgoorlie and Norseman, about 950 km, which is the road if you are coming from the Nullarbor."], ["Direct is about 720 km", "Via Albany is longer but scenic", "Via Norseman is the Nullarbor route"], {
      caption: "A two day split. Distances are approximate.",
      head: ["Leg", "Distance", "Drive time", "Where to stop"],
      rows: [
        ["Perth to Wagin", "About 230 km", "About 2.5 h", "Williams or Wagin"],
        ["Wagin to Hyden", "About 170 km", "About 2 h", "Hyden for Wave Rock"],
        ["Hyden to Ravensthorpe", "About 230 km", "About 2.5 h", "Ravensthorpe"],
        ["Ravensthorpe to Esperance", "About 190 km", "About 2 h", "Esperance"],
      ],
    }),
    section("Fuel and driving", ["Towns are spaced at reasonable intervals, but the gaps on the wheatbelt roads can reach 100 to 150 km. Fill up whenever you pass half a tank, and carry water. The fuel planning guide covers range for a campervan, and the fatigue guide covers rest breaks.", "Kangaroos and emus are active at dawn and dusk and the roads are unlit, so avoid driving at those times. Heavy trucks use the highway, so give them room."], ["Fill up at half a tank", "Avoid dusk and dawn", "Carry water"]),
    section("Camping around Esperance", ["Esperance has caravan parks in town and at Cape Le Grand and Cape Arid national parks. Lucky Bay and Le Grand Beach campgrounds are the most popular and book out in school holidays, so reserve ahead through the Parks and Wildlife Service. The camping rules guide for Western Australia covers where overnight stays are allowed, and the overnight rest area guide covers the signs.", "On the way, Wagin, Lake Grace, Hyden and Ravensthorpe all have caravan parks and free camps, and Wave Rock has a caravan park right beside the rock."], ["Book Lucky Bay early", "Parks at every wheatbelt town", "Wave Rock has a caravan park"]),
    { ...section("Plan the Perth to Esperance drive in AussieCamps", ["Build the drive as a trip in AussieCamps: add Wagin, Hyden, Ravensthorpe and Esperance in order and it shows the distance and drive time of each leg, with a forecast for the day you expect to arrive. AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish.", "Open the trip while you still have a connection, because map tiles, routing and weather need one. The iPhone app is free to download, with in-app purchases."], ["Add each overnight stop in order", "Forecast for each arrival day", "Open the trip before you leave Perth"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: South Coast Highway", url: "https://en.wikipedia.org/wiki/South_Coast_Highway" },
    { label: "Wikipedia: Cape Le Grand National Park", url: "https://en.wikipedia.org/wiki/Cape_Le_Grand_National_Park" },
    { label: "Parks and Wildlife Service WA: Cape Le Grand National Park", url: "https://www.dbca.wa.gov.au/parks-and-wildlife-service" },
    { label: "Main Roads Western Australia: road conditions", url: "https://www.mainroads.wa.gov.au/" },
  ],
});

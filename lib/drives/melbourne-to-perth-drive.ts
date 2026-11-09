import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How long does it take to drive from Melbourne to Perth?", "It is about 3,400 km by the Western Highway, the Princes Highway through Adelaide and the Eyre Highway across the Nullarbor, which is roughly 38 to 42 hours behind the wheel. Most people take five to seven days so that nobody drives more than six or seven hours a day."],
  ["What is the longest gap without fuel between Melbourne and Perth?", "The longest stretches are on the Nullarbor, where roadhouses can be 150 to 200 km apart. Fill up at every roadhouse and carry water; the fuel planning guide covers the numbers for a campervan."],
  ["Can I take fruit and vegetables across the Western Australian border?", "No. Western Australia runs a quarantine checkpoint at Eucla and the Nullarbor, and fresh fruit, vegetables, honey and some other items are not allowed in. Eat or bin them before the border."],
  ["Does the clock change on the way to Perth?", "Yes. South Australia is on its own time, the Eucla area keeps an unofficial time between the two, and Western Australia is two or three hours behind Victoria depending on the season. Allow for it when you plan a day's driving."],
] as const;

export default article({
  slug: "melbourne-to-perth-drive",
  title: "Melbourne to Perth Drive 2026: Route, Days, Fuel Stops and Camping Across the Nullarbor",
  description: "Melbourne to Perth is about 3,400 km and five to seven days by Adelaide and the Nullarbor. Day-by-day stops, fuel gaps, the WA border checkpoint, free camps and caravan parks.",
  category: "Road trips", region: "Victoria, South Australia and Western Australia",
  places: ["Horsham", "Adelaide", "Port Augusta", "Ceduna", "Nullarbor Roadhouse", "Eucla", "Norseman", "Kalgoorlie", "Perth"],
  imageAlt: "The Eyre Highway running straight across the flat Nullarbor Plain under a wide blue sky",
  intro: "Melbourne to Perth is about 3,400 km, the longest standard drive between two Australian capitals, and most of it is a single line across South Australia and the Nullarbor. Done in five to seven days it is a steady drive rather than a race, with a few big decisions: where to sleep each night, how to cover the fuel gaps and what to eat before the Western Australian border.",
  related: ["nullarbor-crossing-camping-guide", "road-trip-fuel-planning-australia", "interstate-biosecurity-road-trip", "driving-with-road-trains-australia", "australia-road-trip-fatigue-wildlife-safety", "adelaide-to-melbourne-drive"],
  sections: [
    section("The route and how many days to allow", ["The usual route leaves Melbourne on the Western Highway through Ballarat and Horsham, crosses into South Australia and joins the Princes Highway to Adelaide, then takes the Augusta Highway to Port Augusta and the Eyre Highway west across the Nullarbor to Norseman. From Norseman you either turn south-west to Perth by Ravensthorpe and Wagin or go through Kalgoorlie and the Great Eastern Highway, which is the more common choice with a campervan.", "Five days works if you are happy to drive six to eight hours a day. Seven is kinder, and the extra days are better spent near Adelaide or the Nullarbor cliffs than on the road. The Adelaide to Melbourne guide covers the first leg in more detail, and the Nullarbor guide covers the second."], ["Five days at six to eight hours", "Seven days is more comfortable", "Adelaide is the natural halfway stop"], {
      caption: "A realistic five to seven day split. Distances are approximate.",
      head: ["Leg", "Distance", "Drive time", "Where to stop"],
      rows: [
        ["Melbourne to Adelaide", "About 730 km", "About 8 h", "Adelaide or the Barossa"],
        ["Adelaide to Ceduna", "About 770 km", "About 8.5 h", "Port Augusta, Iron Knob or Ceduna"],
        ["Ceduna to Eucla", "About 480 km", "About 5.5 h", "Nullarbor Roadhouse or Eucla"],
        ["Eucla to Norseman", "About 710 km", "About 8 h", "Balladonia or Norseman"],
        ["Norseman to Perth", "About 720 km", "About 8 h", "Kalgoorlie, then Perth"],
      ],
    }),
    section("Fuel, water and the long gaps", ["Between Ceduna and Norseman the roadhouses are the only fuel, and the gaps are long enough that you should fill up at every one rather than push on to a cheaper price. Fuel on the Nullarbor is dearer than in the cities, and diesel or petrol sometimes runs short at a small roadhouse, so do not arrive at the last stop on fumes.", "Carry more water than you think you need, drink it and keep spare in the van. The road trip fuel planning guide shows how to work out a range for a campervan, and the road trains guide explains how to pass the long trucks safely on the single carriageway."], ["Fill up at every roadhouse", "Carry extra water", "Pass road trains with care"]),
    section("Camping across the Nullarbor", ["Most nights on this drive are in caravan parks, roadhouse camps or free rest areas. Port Augusta, Ceduna, Eucla, Balladonia and Norseman all have a roadhouse or park with powered and unpowered sites, and there are free rest areas and bush stops between them where overnight stays are allowed. Rules differ by state, so check the camping rules guides for South Australia and Western Australia, and the overnight rest area guide before you plan a free night.", "The Nullarbor guide lists the cliff and bight lookouts and the best free camps. Arrive before dusk: kangaroos, emus and wedge-tailed eagles are active at dawn and dusk and the road has little lighting."], ["Roadhouse camps are the easy option", "Free rest areas exist but check the rules", "Avoid driving at dusk and dawn"]),
    section("The Western Australian border checkpoint", ["Western Australia runs a quarantine checkpoint on the Eyre Highway near Eucla, and it is strict about fresh fruit, vegetables, honey, plants and some other items. Eat what you can before the border and put the rest in the bin at the checkpoint. The biosecurity guide explains the rules for each state and what happens if you carry something you should not.", "The border also changes the clock. South Australia and Western Australia are in different time zones, and the area around Eucla keeps an unofficial time in between, so your phone may jump forward or back at unexpected moments. Plan the last day with that in mind so you do not arrive in Perth in the dark."], ["No fresh fruit or veg over the border", "Clocks change twice", "Plan the last day carefully"]),
    { ...section("Plan the Melbourne to Perth drive in AussieCamps", ["Build the drive as a trip in AussieCamps: add Adelaide, Port Augusta, Ceduna, Eucla, Norseman and Kalgoorlie in order and it shows the distance and drive time of each leg, with a forecast for the day you expect to arrive. AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish.", "Open the trip before you leave Adelaide, because map tiles, routing and weather need a connection and the Nullarbor has very little. The iPhone app is free to download, with in-app purchases."], ["Add each overnight stop in order", "Forecast for each arrival day", "Open the trip before the Nullarbor"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Eyre Highway", url: "https://en.wikipedia.org/wiki/Eyre_Highway" },
    { label: "Wikipedia: Nullarbor Plain", url: "https://en.wikipedia.org/wiki/Nullarbor_Plain" },
    { label: "Western Australia Department of Primary Industries and Regional Development: quarantine WA", url: "https://www.dpird.wa.gov.au/" },
    { label: "Main Roads Western Australia: road conditions", url: "https://www.mainroads.wa.gov.au/" },
  ],
});

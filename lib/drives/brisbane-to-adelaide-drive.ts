import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How far is Brisbane to Adelaide by road?", "About 2,050 km, which is roughly 22 to 24 hours of driving. Most people take three to four days, with nights at Dubbo or Parkes, Mildura or Broken Hill and Adelaide."],
  ["Which route is best from Brisbane to Adelaide?", "The Newell Highway through Goondiwindi, Moree and Dubbo is the usual route, joining the Mid-Western and Sturt Highways towards Mildura and Adelaide. A coastal alternative through Sydney and Melbourne is much longer."],
  ["Is there a fruit fly checkpoint on the way?", "Yes. Moving between Queensland, New South Wales, Victoria and South Australia crosses areas with biosecurity rules, and South Australia runs roadside bins and checkpoints near the border. Eat or bin fresh fruit and vegetables before you cross."],
  ["Can I drive Brisbane to Adelaide in two days?", "It is possible but long, at more than ten hours a day. Three or four days is far more comfortable and gives time to stop at Dubbo, Mildura or the Murray River."],
] as const;

export default article({
  slug: "brisbane-to-adelaide-drive",
  title: "Brisbane to Adelaide Drive 2026: Route, Days, Fuel and Camping Through the Inland",
  description: "Brisbane to Adelaide is about 2,050 km and three to four days through the Newell Highway, Dubbo and Mildura. Route, stops, fuel, biosecurity rules, caravan parks and free camps.",
  category: "Road trips", region: "Queensland, New South Wales, Victoria and South Australia",
  places: ["Toowoomba", "Goondiwindi", "Moree", "Dubbo", "Parkes", "Mildura", "Renmark", "Adelaide"],
  imageAlt: "The Newell Highway running through flat wheat country in northern New South Wales",
  intro: "Brisbane to Adelaide is about 2,050 km inland through three states, the quickest way across the east of the country without going near the coast. It is a working road, mostly the Newell Highway, with wheat and cotton country in the middle and the Murray River at the end, and three or four days gives time to enjoy it.",
  related: ["melbourne-to-brisbane-drive", "sydney-to-adelaide-drive", "interstate-biosecurity-road-trip", "road-trip-fuel-planning-australia", "australia-road-trip-fatigue-wildlife-safety", "camping-rules-new-south-wales"],
  sections: [
    section("The route and how long it takes", ["From Brisbane the usual route climbs to Toowoomba, crosses the border at Goondiwindi and follows the Newell Highway through Moree, Narrabri and Dubbo, where it meets the Mitchell Highway. From Dubbo you can continue to Parkes and Condobolin, then take the Mid-Western Highway or the Cobb Highway towards the Murray River at Mildura or Balranald, and the Sturt and Dukes Highways on to Adelaide.", "The Melbourne to Brisbane guide covers the Newell Highway in more detail, and the Sydney to Adelaide guide covers the Murray end of the drive. Allow three days if you are happy to drive eight to ten hours, or four for a more relaxed pace."], ["Three days is a push", "Four days is comfortable", "Dubbo and Mildura are good stops"], {
      caption: "A four day split. Distances are approximate.",
      head: ["Leg", "Distance", "Drive time", "Where to stop"],
      rows: [
        ["Brisbane to Moree", "About 640 km", "About 7.5 h", "Goondiwindi or Moree"],
        ["Moree to Dubbo", "About 410 km", "About 5 h", "Narrabri or Dubbo"],
        ["Dubbo to Mildura", "About 750 km", "About 8.5 h", "Condobolin, Hay or Mildura"],
        ["Mildura to Adelaide", "About 540 km", "About 6 h", "Renmark and Adelaide"],
      ],
    }),
    section("Fuel, towns and driving", ["Towns are close together on the Newell Highway, so fuel is easy, but the Mid-Western and Sturt Highways to the Murray have longer gaps. Fill up when you pass half a tank, and take rest breaks every two hours. The fuel planning guide covers range for a campervan, and the fatigue guide covers the stops that matter.", "The Newell Highway carries a lot of trucks and road trains, so give them room and pass on the dual carriageway where you can. In the evening and early morning kangaroos and livestock are common beside the road."], ["Fill up at half a tank", "Rest every two hours", "Avoid dusk and dawn"]),
    section("Camping and caravan parks", ["Caravan parks carry most nights: Toowoomba, Goondiwindi, Moree, Narrabri, Dubbo, Parkes, Mildura and Renmark all have parks, and there are free rest areas and bush camps between the towns. The camping rules guides for New South Wales and South Australia explain where overnight stays are allowed, and the overnight rest area guide covers the signs and rules.", "A stop at the Murray River, at Mildura or Renmark, makes a pleasant last night before Adelaide, and there are riverside camps along the way."], ["Parks in every major town", "Free camps between towns", "Riverside camps at the Murray"]),
    section("Biosecurity and borders", ["Crossing between states means crossing fruit fly and biosecurity rules, and South Australia in particular runs roadside bins and checkpoints near its borders. Eat or bin fresh fruit and vegetables before you cross, and check the interstate biosecurity guide for the rules on honey, plants and firewood.", "Daylight saving also changes at the borders, so check the time before you plan a long last day."], ["Eat or bin fresh produce", "Check the biosecurity guide", "Mind daylight saving at the border"]),
    { ...section("Plan the Brisbane to Adelaide drive in AussieCamps", ["Build the drive as a trip in AussieCamps: add Moree, Dubbo, Mildura and a final night in Adelaide in order and it shows the distance and drive time of each leg, with a forecast for the day you expect to arrive. AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish.", "Open the trip while you still have a connection, because map tiles, routing and weather need one. The iPhone app is free to download, with in-app purchases."], ["Add each overnight stop in order", "Forecast for each arrival day", "Open the trip before you leave Brisbane"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Newell Highway", url: "https://en.wikipedia.org/wiki/Newell_Highway" },
    { label: "Wikipedia: Sturt Highway", url: "https://en.wikipedia.org/wiki/Sturt_Highway" },
    { label: "Live Traffic NSW", url: "https://www.livetraffic.com/" },
    { label: "Interstate Quarantine: quarantine zones", url: "https://interstatequarantine.org.au/travellers/quarantine-zones/" },
  ],
});

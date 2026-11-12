import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can I camp in the rain in Australia?", "Yes, and plenty of trips do. Pick a pitch on slightly higher ground, put the tent or van away from dead limbs and creek beds, and keep a dry spot for cooking. Check the forecast and warnings each day, and leave if a warning is issued for your area."],
  ["How do I stop condensation in a tent or campervan?", "Ventilate. Open a vent or window a little even in the rain, keep wet clothes outside the sleeping area, and wipe down surfaces in the morning. A closed, wet space fogs up quickly."],
  ["Should I drive on unsealed roads after rain?", "Avoid it. Clay and gravel roads turn slippery or close after rain, and hire contracts usually ban unsealed roads anyway. Check road conditions with the council, park or road authority before you set off."],
  ["What if a creek or road floods?", "Never drive through floodwater. Wait for the water to drop or turn around, and do not camp in a dry creek bed, because rain falling upstream out of sight can fill it overnight."],
] as const;

export default article({
  slug: "wet-weather-camping-australia",
  title: "Wet Weather Camping in Australia: Rain, Flooded Roads and Staying Dry",
  description: "How to camp in the rain in Australia: where to pitch, keeping gear and a campervan dry, cooking in the wet, checking road closures and when to move on.",
  category: "Trip planning", region: "Australia",
  places: ["Campgrounds", "Rainforest", "Holiday parks", "Road conditions"],
  imageAlt: "A rain shower over the Albert River Valley in Lamington National Park, Queensland",
  intro: "Rain is part of camping in Australia, from a passing coastal shower to a week of monsoon in the north. A wet trip can still be a good one if the pitch is right, the gear stays dry and you know when a road or a creek means it is time to move. Here is how to choose where to pitch, keep dry, cook and stay warm, and check the roads before you drive.",
  related: ["camping-weather-safety-australia", "cyclone-flood-season-camping-australia", "wet-season-camping-top-end-northern-wa", "camping-packing-list-australia", "campervan-driving-australia-safety-guide", "caravan-park-vs-holiday-park"],
  sections: [
    section("Choose the pitch before the rain", ["Look for slightly higher, well-drained ground, and avoid dips where water will pool. Never pitch in a dry creek bed or on a low river flat, because rain falling far upstream can fill them overnight, and keep away from dead limbs and tall trees in wind.", "Pitch the tent with the door away from the wind, and put a tarp or awning over the cooking area so you have a dry place to sit. In a campervan, park on level ground that is not a runoff channel."], ["Higher, well-drained ground", "Away from creek beds and dead limbs", "Dry cooking area"]),
    section("Keep gear and bedding dry", ["Pack clothes, sleeping bags and food in waterproof bags or lidded boxes, and keep one set of dry clothes that never leaves the sleeping area. Leave wet boots and coats in the vestibule or under the awning, not in the bed.", "Use a groundsheet under the tent, and check seams and guy ropes before the trip. A footprint that sticks out past the tent catches rain and funnels it underneath."], ["Dry bag for sleeping clothes", "Wet gear stays outside", "Groundsheet inside the tent footprint"]),
    section("Condensation and ventilation", ["A closed tent or van in the rain fogs up with breath, wet clothes and cooking. Open a vent or window a little even when it is wet, wipe the inside surfaces in the morning and dry towels and clothes at a holiday park laundry or in a dryer rather than hanging them inside.", "Never run a gas stove, heater or barbecue inside a closed tent or van, because of carbon monoxide and fire."], ["Always leave a vent open", "Dry clothes at a laundry", "No gas or barbecue inside"]),
    section("Cooking and keeping warm", ["Plan wet-weather meals that need one pot and little preparation, and keep a hot drink flask, soup and bread or wraps in reserve. A stove with a windshield and a dry spot under an awning makes the difference between a hot dinner and cold sandwiches.", "A wet camp gets cold faster than a dry one, so keep a warm layer, a hat and dry socks for the evening. Our easy campervan meals guide has simple dinners for the days you do not want to cook."], ["One-pot meals", "Flask and a dry spot to cook", "Warm layer and dry socks"]),
    section("Roads, creeks and closures", ["Clay and gravel roads turn slippery or close after rain, and creek crossings and floodways can go under quickly. Check road conditions before you drive, and expect closures after heavy rain in any state, not only in the tropical north.", "Never drive through floodwater. Queensland's Get Ready campaign says it can take as little as 15 cm of water for a car to lose traction and be swept away, and you cannot see whether the road under the water is still there. If it is flooded, wait for it to drop or turn around."], ["Check road conditions daily", "Never drive through floodwater", "Allow spare days for closures"], { caption: "Where to check road conditions by state, from each road authority, November 2026.", head: ["State", "Road conditions"], rows: [["New South Wales", "Live Traffic NSW"], ["Victoria", "VicTraffic"], ["Queensland", "QLDTraffic"], ["Western Australia", "Main Roads WA Travel Map"], ["South Australia", "Traffic SA"], ["Northern Territory", "Road Report NT"]] }),
    section("When to move on", ["If a severe weather warning is issued for your area, if the creek is rising or if the campground is flooding, leave early. Move to a holiday park, a cabin or a motel in a larger town on higher ground, and treat a closed road as a rest day rather than looking for a way around.", "It helps to know your fallback before the rain arrives, because holiday parks and motels fill quickly when a storm hits a popular coast."], ["Leave before the road floods", "Know your fallback stay", "Treat closures as rest days"]),
    { ...section("Find a fallback in AussieCamps", ["AussieCamps lists campgrounds, national parks and rest areas with each place's facilities, fees and rules as the agency publishes them, and holiday parks, motels and B&Bs from BookEasy that you can book in the app. Save a trip with each night's stop and it shows the forecast for your arrival date within the forecast range.", "It runs on iPhone and is free to download, with in-app purchases."], ["Find a roof when the weather turns", "Forecast on each place page", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Bureau of Meteorology: warnings", url: "https://www.bom.gov.au/australia/warnings/" },
    { label: "Queensland Get Ready: if it's flooded, forget it", url: "https://www.getready.qld.gov.au/FloodedForgetIt" },
    { label: "Live Traffic NSW", url: "https://www.livetraffic.com/" },
    { label: "Main Roads WA: Travel Map", url: "https://travelmap.mainroads.wa.gov.au/" },
    { label: "Road Report NT", url: "https://roadreport.nt.gov.au/" },
    { label: "Hazard Watch: national hazard warnings", url: "https://www.hazardwatch.gov.au/" },
  ],
});

import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How long does it take to drive from Canberra to Jindabyne?", "About 2.5 hours, or around 180 km, on the Monaro Highway through Cooma. The road is sealed and easy in summer, so allow extra time in winter when ice, snow and holiday traffic slow things down."],
  ["Do I need snow chains on the way to Jindabyne?", "Carrying chains is a legal requirement on some roads in Kosciuszko National Park in the snow season, roughly June to October, even if there is no snow on the day. The road from Canberra to Jindabyne itself is usually clear, but the road up to the snowfields beyond Jindabyne is where chains matter."],
  ["Do I need to pay to enter Kosciuszko National Park?", "Yes, there is a daily vehicle entry fee for the park's main areas, and it is higher in the winter snow season. Check the park's website for current fees and pay online or at a park entry station."],
  ["Are kangaroos a problem on the Monaro Highway?", "Yes, at dusk, at night and at dawn. The open Monaro country has a lot of kangaroos and wombats, and collisions are common. Try to finish your drive before dark."],
] as const;

export default article({
  slug: "canberra-to-jindabyne-snowy-mountains-drive", publishAt: "2026-11-17",
  title: "Canberra to Jindabyne Drive 2027: Snowy Mountains Route, Stops and Camping",
  description: "Drive Canberra to Jindabyne on the Monaro Highway via Cooma: Michelago, Bredbo and Berridale, Kosciuszko entry fees, snow chains, kangaroos at dusk and where to camp.",
  category: "Road trips", region: "ACT and NSW",
  places: ["Canberra", "Michelago", "Bredbo", "Cooma", "Berridale", "Jindabyne", "Kosciuszko National Park"],
  imageAlt: "Snow beside the road in Kosciuszko National Park, New South Wales",
  intro: "Canberra to Jindabyne is about 180 km and 2.5 hours on the Monaro Highway, which is the quickest and easiest way into the Snowy Mountains. You drive south through Michelago and Bredbo to Cooma, then continue to Berridale and Jindabyne on the lake. It is a good first day for a Kosciuszko trip, but check the season: the national park entry fee is higher in winter, snow chains are required in the snow season, and kangaroos are out at dusk.",
  related: ["australian-alps-camping-route", "snow-chains-winter-driving-australia", "free-camping-near-canberra", "melbourne-to-canberra-drive", "australia-road-trip-fatigue-wildlife-safety", "hit-a-kangaroo-what-to-do-australia"],
  sections: [
    section("The route and the legs", ["Leave Canberra on the Monaro Highway, signed south through Hume and Michelago. The road is mostly two lanes with overtaking sections, passes through farmland and low hills, and reaches Cooma, the main town of the Monaro. From Cooma take the Kosciuszko Road to Berridale and Jindabyne.", "The drive is easy but long enough to need a stop. Cooma is the natural place for fuel, lunch and supplies, and it is the last big town before the mountains."], ["Monaro Highway south to Cooma", "Kosciuszko Road to Jindabyne", "Fuel and food in Cooma"], {
      caption: "Legs from Canberra to Jindabyne. Distances and times are approximate.",
      head: ["Leg", "Distance", "Time", "Notes"],
      rows: [
        ["Canberra to Michelago", "About 45 km", "About 30 min", "Rural village just over the ACT border"],
        ["Michelago to Bredbo", "About 35 km", "About 25 min", "Small village with a roadhouse and a café"],
        ["Bredbo to Cooma", "About 35 km", "About 30 min", "The main town of the Monaro, with all services"],
        ["Cooma to Berridale", "About 45 km", "About 35 min", "Rolling Monaro plains toward the mountains"],
        ["Berridale to Jindabyne", "About 20 km", "About 15 min", "Lake Jindabyne and the gateway to Kosciuszko"],
      ],
    }),
    section("Michelago, Bredbo and Cooma", ["Michelago and Bredbo are small villages that make easy stops for a coffee or a stretch. Cooma has a good range of shops, cafés, fuel stations and a visitor centre, and it is where the Snowy Mountains Scheme was based, so it has a few museums and lookouts worth a short walk.", "Fill up in Cooma before heading on. Jindabyne has fuel, but it can be busier and pricier in the snow season, and stations in smaller villages have short opening hours."], ["Bredbo for a quick break", "Cooma for supplies", "Fuel before the mountains"]),
    section("Berridale and Jindabyne", ["Berridale is a small town on the Kosciuszko Road, handy for fuel and a bite before the last stretch. Jindabyne sits on the shore of Lake Jindabyne and is the base for walking, fishing, mountain biking and skiing, with shops, restaurants and accommodation.", "In summer the lake and trails draw visitors, and in winter the town fills with skiers heading to Thredbo, Perisher and Charlotte Pass. Book your stay early either way."], ["Berridale for a last stop", "Jindabyne is the base", "Book winter stays early"]),
    section("Where to sleep", ["Jindabyne has several holiday parks and caravan parks on and near the lake, with powered sites, cabins and amenities, and they fill quickly in winter and on summer weekends. Book ahead and check the season's rates, which are higher in snow time.", "Inside Kosciuszko National Park, the park agency runs campgrounds, some bookable online, along the Kosciuszko Road and around the lake. There are also free and low-cost sites in the surrounding state forest, but rules and closures change with the season and fire danger. Our Australian Alps camping route covers the high-country camps, and our free camping near Canberra guide covers the options on this side of the border."], ["Holiday parks in Jindabyne", "Park camps inside Kosciuszko", "Check seasonal closures"]),
    section("Park entry, snow chains and winter driving", ["Kosciuszko National Park charges a daily vehicle entry fee for its main areas, and the fee is higher in the winter snow season. Check the park's website for current prices, pay online or at an entry station, and keep the receipt in the vehicle.", "In the snow season, roughly June to October, you must carry snow chains on some park roads even when the road looks clear, and fit them where signs and conditions require. A two-wheel-drive van is not enough on its own on icy roads, so check conditions and our snow chains and winter driving guide before you go."], ["Entry fee is higher in winter", "Carry chains in snow season", "Check road conditions first"]),
    section("Fuel, wildlife and dump points", ["Fuel stations are in Cooma, Berridale and Jindabyne, and on the way at larger villages. There is little between them, so fill up in Cooma if you are not sure. Our fuel planning guide has the range sums.", "The Monaro is open grazing country with a lot of kangaroos, wombats and wallabies on the road, mostly at dusk, night and dawn. Slow down, avoid driving after dark and read what to do if you hit a kangaroo. Dump points are at Cooma and Jindabyne, so empty your cassette in town, not at a rest area."], ["Fuel in Cooma first", "Kangaroos at dusk", "Dump points in main towns"]),
    { ...section("Plan the Canberra to Jindabyne drive in AussieCamps", ["Build the drive as a trip in AussieCamps with Add stop: put Canberra, Cooma and Jindabyne in as stops, and each leg shows its driving distance and time. Add dates, notes and weather to each stop, which helps in the snow season, and keep a To-do list for the park pass and chains.", "Use the filters for Cost, Dogs allowed, Online booking and Popular features such as toilets and drinking water, and save camps to a collection such as Want to visit. The whole directory is inside the app, so search, filters and place details work with no signal, which helps in the mountains. AussieCamps is an iPhone app, with no account and no ads."], ["Add stop for each night", "Filter by Online booking", "Weather for each stop"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks: Kosciuszko National Park", url: "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/kosciuszko-national-park" },
    { label: "Live Traffic NSW", url: "https://www.livetraffic.com/" },
    { label: "Snowy Monaro Regional Council", url: "https://www.snowymonaro.nsw.gov.au/" },
    { label: "Destination NSW: Visit NSW", url: "https://www.visitnsw.com/" },
    { label: "Bureau of Meteorology: New South Wales", url: "https://www.bom.gov.au/nsw/" },
  ],
});

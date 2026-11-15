import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where should I camp for a day walk in a national park?", "Pick the campground or holiday park closest to the trailhead so you can start at first light. Many of Australia's classic walks have a campground within a few minutes' drive."],
  ["Do I need to book a campsite near a popular walk?", "Often yes. Campgrounds at Wilsons Promontory, Freycinet and Karijini fill in school holidays and long weekends, and some run a ballot for peak dates, so book as soon as dates open."],
  ["Are day walks closed in hot weather?", "Some are. Tracks such as the Kings Canyon Rim Walk close or have an early start on very hot days, and other parks close tracks in extreme heat or high fire danger. Check the park agency page on the morning you walk."],
  ["How much water should I carry on a day walk?", "Plan about a litre for each hour of walking in warm weather, and more in the outback. Carry extra in the car, because the walk back is often hotter than the walk out."],
] as const;

export default article({
  slug: "camping-bases-best-day-walks-australia", publishAt: "2026-12-17",
  title: "Camping bases for Australia's best day walks",
  description: "Where to camp for Wineglass Bay, Dove Lake, Kings Canyon, the Uluru Base Walk, Bluff Knoll and other classic Australian day walks, with walk lengths and tips for heat, water and fire danger.",
  category: "Camping guides", region: "Australia",
  places: ["Freycinet National Park", "Cradle Mountain", "Kings Canyon", "Uluru", "Blackheath", "Halls Gap", "Wilsons Promontory", "Stirling Range National Park", "Karijini National Park", "Thredbo"],
  imageAlt: "A white tent pitched among ferns and eucalypts at the Sealers Cove campsite in Wilsons Promontory National Park, Victoria",
  intro: "The best day walks in Australia are made easier by a good camping base: a short drive to the trailhead, a place to wash off the dust and a bed close enough to start before the heat. Here are ten classic walks across the country, with a sensible base for each, a rough length and the things that catch walkers out, from heat to closures.",
  related: ["best-hiking-bushwalking-apps-australia", "waterfalls-with-campsites-australia", "karijini-national-park-camping", "camping-near-uluru", "camping-weather-safety-australia", "camping-water-planning"],
  sections: [
    section("Choosing a base for a walk", ["A camping base for a day walk should be close to the trailhead, have toilets and water, and let you start early. Most classic walks are best in the cool of the morning, so an hour's drive in the dark is a poor start. In the outback and the north, heat decides the day, and a base within a few minutes of the track is worth paying extra for.", "For busy parks, book as soon as dates open. For quieter walks, a holiday park in the nearest town gives you power, showers and a restocked pantry for the next day."], ["Camp close to the track", "Start early to beat heat", "Book busy parks early"]),
    section("Ten classic day walks and where to camp", ["Lengths are rough and the times depend on fitness and weather. Each park agency's page lists the current track conditions."], ["Check track conditions first", "Allow extra time for photos", "Tell someone your plan"], { caption: "Classic Australian day walks and the nearest camping base, November 2026.", head: ["Walk", "State", "Length (return, roughly)", "Where to camp"], rows: [
      ["Wineglass Bay Lookout and beach", "Tasmania", "3 km lookout, 11 km circuit", "Richardsons Beach campground in Freycinet National Park, or a holiday park at Coles Bay"],
      ["Dove Lake circuit, Cradle Mountain", "Tasmania", "About 6 km", "A holiday park at the edge of Cradle Mountain-Lake St Clair National Park"],
      ["Kings Canyon Rim Walk", "Northern Territory", "About 6 km", "Camping at Kings Canyon Resort, or Kings Creek Station"],
      ["Uluru Base Walk", "Northern Territory", "About 10 km", "The campground at Yulara, close to the park"],
      ["Grand Canyon Track, Blackheath", "New South Wales", "About 6 km", "Camping and holiday parks around Blackheath"],
      ["The Pinnacle, Grampians", "Victoria", "About 4 km from Sundial car park", "Parks Victoria campgrounds in the Grampians, or Halls Gap"],
      ["Mount Oberon summit, Wilsons Promontory", "Victoria", "About 7 km", "Tidal River campground"],
      ["Bluff Knoll, Stirling Range", "Western Australia", "About 6 km", "Moingup Springs campground in Stirling Range National Park"],
      ["Dales Gorge, Karijini", "Western Australia", "Short walks and a 3 km gorge circuit", "Dales Campground in Karijini National Park"],
      ["Mount Kosciuszko from Thredbo", "New South Wales", "About 13 km", "Thredbo Diggings campground in Kosciuszko National Park"],
    ] }),
    section("Heat and water", ["In the Red Centre and the Pilbara, the walk starts at dawn. The Kings Canyon Rim Walk asks walkers to start early on hot days and closes on the hottest ones, and the same logic applies at Uluru and in Karijini. Take at least a litre of water for each hour in warm weather, wear a hat and sunscreen and turn back early if anyone feels unwell.", "Carry more water in the vehicle than you think you need, and refill at camp before the walk. Our guides on drinking water and camping weather safety cover the numbers and the warning signs."], ["A litre per hour", "Wear a hat", "Turn back if unwell"]),
    section("Fire danger and closures", ["In summer, high fire danger can close walks and parks without much notice. Wilsons Promontory, the Grampians and the Blue Mountains all close tracks or campgrounds on days of extreme fire danger, and fire bans apply to campfires and some stoves. Check the fire danger rating and the park alert for your walk the night before and on the morning.", "In winter the risk shifts. Alpine tracks around Thredbo and Cradle Mountain can have snow and fast weather changes, so carry warm clothes, a waterproof and a map even on a day walk."], ["Check fire ratings daily", "Carry a map and jacket", "Park alerts change fast"]),
    section("Staying safe on a day walk", ["Tell someone where you are walking and when you plan to be back, particularly in places with no phone signal. Carry a paper map or a downloaded map, a torch and a small first-aid kit, and stay on marked tracks. Our guide to the best hiking and bushwalking apps covers tools that work without signal.", "Keep your distance from wildlife and take your rubbish with you. Some walks, such as the Uluru Base Walk, cross land that is culturally important, so follow signs about areas where photography or access is restricted."], ["Tell someone your plan", "Stay on marked tracks", "Respect cultural signs"]),
    { ...section("Plan the walks in AussieCamps", ["Build a trip with Add stop, using places from the app, saved pins or any address, and see the driving distance and time to each walk's campground. Add dates and notes to every stop, check the weather for each day and use the To-do list for packing and permits.", "Filter by Cost, Online booking and Popular features such as toilets and drinking water, then save campgrounds to Want to visit. The whole directory is inside the app, so search and place details work with no signal. AussieCamps is an iPhone app with no account and no ads."], ["Filter by Online booking", "Check toilets and water", "Add dates to each stop"]), cta: true },
  ],
  sources: [
    { label: "Tasmania Parks and Wildlife Service", url: "https://parks.tas.gov.au/" },
    { label: "Parks Australia: Uluru-Kata Tjuta National Park", url: "https://parksaustralia.gov.au/uluru/" },
    { label: "NSW National Parks and Wildlife Service", url: "https://www.nationalparks.nsw.gov.au/" },
    { label: "Parks Victoria", url: "https://www.parks.vic.gov.au/" },
    { label: "Western Australia Parks and Wildlife: Explore Parks WA", url: "https://exploreparks.dbca.wa.gov.au/" },
    { label: "Northern Territory Parks and Wildlife", url: "https://nt.gov.au/leisure/parks-reserves" },
  ],
});

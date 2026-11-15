import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Do I need a trowel on a bushwalk in Australia?", "Yes, unless the campsite has a toilet. Where there is no toilet, dig a hole about 15 centimetres deep, at least 100 metres from water, tracks and camps, and fill it in. Carry used toilet paper out in a sealed bag, or burn it only where the park allows."],
  ["Can I light a campfire on a bushwalk?", "Usually not. Most walk-in campgrounds and alpine areas are fuel stove only, and fires are banned in many parks on days of high fire danger. Check the park page for the walk, and carry a stove either way."],
  ["Can I drink the water on a walk?", "Treat it unless the park says it is safe. Tank water at huts is generally fine, but creek and lake water should be filtered, boiled or treated, especially downstream of camps."],
  ["Do I need a permit to camp on a bushwalk?", "For many popular walks, yes. Walk-in camps in New South Wales, Victoria, Tasmania, Queensland and the Northern Territory are usually booked and paid for online before you go, and some walks need a separate walk permit or parks pass."],
] as const;

export default article({
  slug: "bushwalking-camp-rules-etiquette-australia", publishAt: "2026-12-24",
  title: "Bushwalking Camp Rules and Etiquette in Australia: Toilets, Stoves, Water and Huts",
  description: "The rules and manners of a bush camp in Australia: trowels, fuel stove only areas, water, quiet, sharing huts and tent platforms, wildlife, permits and leave no trace.",
  category: "Rules & safety", region: "Australia",
  places: ["Overland Track", "Larapinta Trail", "Royal National Park", "Bibbulmun Track", "Wilsons Promontory"],
  imageAlt: "Sandstone rock platform above the sea on the Coast Track, Royal National Park, New South Wales",
  intro: "A bush camp has a few rules that a drive-in campground does not. There is usually no ranger, no bin and often no toilet, so the walkers who came before you and the ones who come after depend on how you leave the place. Most of it is common sense, and a short list is worth knowing before the first night: where to go to the toilet, why many camps are fuel stove only, how to treat water, and how to share a hut or tent platform without annoying anyone.",
  related: ["responsible-camping-australia", "campfires-camping-australia", "easy-overnight-bushwalks-huts-families", "hut-stays-australia", "best-multi-day-walks-australia-2026-27", "wildlife-encounters-campervan-australia"],
  sections: [
    section("Toilets, trowels and carrying out", ["Where a camp has a toilet, use it, and leave it clean. Where it does not, carry a trowel and dig a hole about 15 centimetres deep, at least 100 metres from water, tracks and camps, then cover it well. In alpine areas and on some tracks, rangers ask you to carry out all human waste in a sealed system, so check the park page for the walk.", "Used toilet paper, tampons and wipes do not break down. Carry them out in a sealed bag. Never leave toilet paper under a rock or bury it near a creek, because animals dig it up and it ends up in the water."], ["Trowel or sealed bag if no toilet", "100 metres from water", "Carry out paper and hygiene items"]),
    section("Fuel stove only areas and campfires", ["Most walk-in campgrounds are fuel stove only, and fires are banned entirely on many tracks and in alpine and desert areas. Even where fires are allowed, a total fire ban, a high fire danger day or a park closure can switch them off at short notice. Our campfires guide has the rules by state, and the fire bans pages show what applies on the day.", "A stove is safer and cleaner, and it works in the rain. Keep it away from tents and huts, never cook inside a tent and keep a clear space around it. Do not collect firewood from the bush, because dead wood is wildlife habitat."], ["Carry a stove, always", "Check the fire danger on the day", "Never collect bush firewood"]),
    section("Water and washing", ["Carry enough to reach the next reliable source, and treat what you collect from creeks and lakes by filtering, boiling or using tablets. Tank water at huts and campgrounds is generally good, but read the sign, because some tanks are low or not for drinking. Our drinking water guide has more on treating and carrying it.", "Wash plates and yourself at least 50 metres from water, using a bucket or bowl, and tip the grey water away from the creek. Use as little soap as you can, and strain food scraps out and pack them with your rubbish."], ["Treat creek and lake water", "Wash 50 metres from water", "Strain scraps, carry them out"]),
    section("Quiet, shared huts and tent platforms", ["Camps are shared, and sound carries. Keep voices down after dark, use a head torch with a red setting, avoid loud speakers and be ready to share the space. In a hut, take only the room you need, keep your gear tidy and leave bunks for walkers who arrive later in poor weather. On the Overland Track and similar tracks, huts are for sleeping and camping is on platforms nearby.", "Where a camp has tent platforms, use one and do not pitch off to the side, because it widens the damage to the vegetation. If a walker arrives late and the platforms are full, make room if you can. Our hut stays guide has the rules for sleeping in a hut."], ["Voices low after dark", "Take only the bunk you need", "Use tent platforms, not the bush"]),
    section("Food, wildlife and rubbish", ["Store food in a bag or a hut's food box, away from your tent, and hang it where the park recommends. Possums, quolls, wombats, dingoes and snakes all raid camps, and a fed animal quickly becomes a problem animal. Do not feed any wildlife, and keep a safe distance. Our wildlife guide covers how to behave around Australian animals.", "Whatever you carry in, you carry out. That includes food scraps, orange peel, tea bags and the small scraps that litter fireplaces. Pack a rubbish bag and a small zip bag for odds and ends."], ["Food away from your tent", "Never feed wildlife", "Carry out all scraps"]),
    section("Permits, fees and bookings", ["Many popular walks need a booking or permit before you set off, and the rules vary by state. Walk-in campgrounds in New South Wales and Victoria are usually booked online, the Overland Track has a booking system and a fee in its season, and the Larapinta and Jatbula trails need sites booked and paid for in advance. Our camping fees and national park fees pages explain the typical charges.", "Carry your booking confirmation, a copy of the permit and your parks pass, because rangers do check. Camp only in marked sites, and do not camp where the park has closed an area to protect wildlife or track."], ["Book before you set off", "Carry your confirmation", "Camp in marked sites only"]),
    section("The rules at a glance", ["These are the usual rules, and each walk's page can add its own."], undefined, {
      caption: "What most bush camps in Australia ask of you.",
      head: ["Topic", "Usual rule", "What to carry"],
      rows: [
        ["Toilets", "Use the toilet or bury waste 100 metres from water", "Trowel and a sealed bag"],
        ["Fires", "Fuel stove only in most walk-in camps", "A stove and fuel"],
        ["Water", "Treat all creek and lake water", "Filter, tablets or a stove"],
        ["Washing", "At least 50 metres from water", "A bowl or bucket"],
        ["Food", "Stored away from tents, not fed to wildlife", "Food bag or box"],
        ["Rubbish", "Everything carried out", "A strong bag"],
      ],
    }),
    section("Leave no trace on the track", ["The simple version of leave no trace is to plan ahead, camp where others have, take nothing but photos and leave nothing but footprints. On a wet track, walk through the mud rather than around it, because new paths scar the bush. Our responsible camping guide has the full list for drive-in camps as well.", "Share the track with others, step aside for faster walkers and give horses and bikes room where they are allowed. A friendly greeting and a clean camp are the best etiquette there is."], ["Walk through the mud", "Camp where others have", "Step aside for faster walkers"]),
    { ...section("Plan the walk in AussieCamps", ["AussieCamps lists campgrounds, national parks and holiday parks near the trailhead, with each place's facilities, fees and rules as the agency publishes them. Save the night before and the night after to a trip, with the weather for each stop.", "Walk permits and hut bookings are made with the park agency. AussieCamps runs on iPhone and is free to download, with in-app purchases."], ["Camps near the trailhead", "Weather for each stop", "Book permits with the agency"]), cta: true },
  ],
  sources: [
    { label: "Leave No Trace Australia", url: "https://lnt.org.au/" },
    { label: "NSW National Parks: bushwalking safety and camping", url: "https://www.nationalparks.nsw.gov.au/" },
    { label: "Parks Victoria: camping and bushwalking", url: "https://www.parks.vic.gov.au/" },
    { label: "Parks and Wildlife Service Tasmania: Overland Track", url: "https://parks.tas.gov.au/explore-our-parks/cradle-mountain/overland-track" },
    { label: "Northern Territory Government: Larapinta Trail", url: "https://nt.gov.au/parks/find-a-park/tjoritja-west-macdonnell-national-park/larapinta-trail/about-larapinta-trail" },
  ],
});

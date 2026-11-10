import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where can you see glow-worms in Australia?", "In caves, old railway tunnels and damp rainforest gullies, mostly along the east coast and in Tasmania. Well-known places include Natural Bridge in Springbrook National Park in Queensland, the Glow Worm Tunnel in Wollemi National Park in New South Wales, the Marakoopa Cave at Mole Creek in Tasmania and Melba Gully in Victoria's Otways."],
  ["Are Australian glow-worms the same as the ones in New Zealand?", "They are close relatives. Both are the larvae of fungus gnats in the genus Arachnocampa, which glow blue-green to attract insects into sticky threads. New Zealand has one species, and Australia has several."],
  ["When is the best time to see glow-worms?", "After dark, once your eyes have adjusted, and on a night without a bright moon. They can be seen all year in caves and tunnels, and are usually easier to see in the wetter months in rainforest gullies."],
  ["Can you use a torch or take photos?", "Keep your torch off or covered with red light, and do not use flash. Bright light makes the glow-worms dim their lights, and touching the threads or the walls harms them."],
] as const;

export default article({
  slug: "glow-worm-caves-camping-australia",
  title: "Glow-Worm Caves You Can Camp Near in Australia",
  description: "Where to see glow-worms in Australia and camp close by: Natural Bridge in Queensland, the Glow Worm Tunnel in New South Wales, Mole Creek in Tasmania and Melba Gully in Victoria, with the rules and the best time to go.",
  category: "Trip planning", region: "Australia",
  places: ["Natural Bridge", "Glow Worm Tunnel", "Mole Creek", "Melba Gully", "Lamington"],
  imageAlt: "Griffiths Creek Campground in Kroombit Tops National Park, Queensland",
  intro: "Australia has its own glow-worms, and you can see them without a long trip: in limestone caves, in an abandoned railway tunnel and in wet rainforest gullies after dark. Some of the best places have a campground within a short drive, so you can camp, walk in at night and sleep close by. Below are four places to try, how to see them without harming them, and when to go.",
  related: ["camping-rules-queensland", "camping-rules-new-south-wales", "camping-rules-tasmania", "camping-rules-victoria", "great-ocean-road-camping-guide", "sunshine-coast-hinterland-camping"],
  sections: [
    section("What you are looking at", ["Australian glow-worms are the larvae of fungus gnats, and each one hangs from the ceiling of a cave or the bank of a gully on a silk thread and glows blue-green to attract insects. They need damp, still, dark places, which is why they live in caves, tunnels and rainforest gullies. At full dark the roof looks like a small night sky.", "New Zealand's Waitomo caves are the famous ones, but Australia has the same kind of animal in several states."], ["Larvae of fungus gnats", "Damp, still and dark places", "Several states have them"]),
    section("Natural Bridge in Queensland", ["Natural Bridge is in the Springbrook National Park in the Gold Coast hinterland, where a waterfall drops through a cave in the rock and glow-worms light the walls after dark. It is a short walk from the car park and one of the easiest glow-worm sightings in the country. The National Park has no campground at the bridge itself, so most people camp elsewhere in the hinterland.", "Lamington National Park, close by, has campgrounds at Green Mountains and Binna Burra, and the Sunshine Coast hinterland guide covers more bush camps in the same region."], ["Short walk from the car park", "Go after dark", "Camp at Lamington or nearby"]),
    section("The Glow Worm Tunnel in New South Wales", ["The Glow Worm Tunnel is an old railway tunnel in Wollemi National Park, north-west of the Blue Mountains, with a walk through the bush to the entrance. Glow-worms grow on the damp walls, and you can see them if you turn your torch off inside. The road in is long and partly unsealed, and the weather can change the track, so check conditions first.", "There is camping in the Newnes area, and the New South Wales camping rules guide covers national park and state forest rules."], ["Old railway tunnel", "Unsealed roads in", "Camp at Newnes"]),
    section("Mole Creek in Tasmania and Melba Gully in Victoria", ["The Mole Creek Karst National Park in northern Tasmania has caves where you can see glow-worms on a guided tour, and the Marakoopa Cave is known for them. The nearest camps are in and around the town of Mole Creek, and the Tasmania camping rules guide has the rules for parks and reserves.", "Melba Gully in the Otway Ranges is a damp fern gully where glow-worms appear on the banks after dark, on a short walk from the car park. The Great Ocean Road camping guide covers the campgrounds nearby."], ["Guided tour at Mole Creek", "Short walk at Melba Gully", "Check the camps nearby"]),
    section("How to see them without harming them", ["Go after dark, let your eyes adjust for ten minutes and keep your torch off or use a dim red light. Do not use a camera flash, do not touch the threads and stay on the track. Talk quietly, because noise and vibration can make the glow-worms dim.", "Take a torch for the walk in and out, wear shoes with grip and tell someone where you are going. Rainforest tracks at night are slippery, and caves and tunnels can flood."], ["No flash, dim red light", "Stay on the track", "Tell someone where you are going"]),
    { ...section("Plan the trip in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, and each place page shows the facilities and fees those sources publish. Search near each glow-worm site, save the campgrounds you like and build the trip as ordered stops with the distance and drive time for each leg.", "The iPhone app is free to download, with in-app purchases."], ["Find campgrounds near each site", "Save places to a trip", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Queensland Parks and Forests: Springbrook National Park", url: "https://parks.desi.qld.gov.au/parks/springbrook" },
    { label: "NSW National Parks: Glow Worm Tunnel, Wollemi National Park", url: "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/wollemi-national-park" },
    { label: "Parks and Wildlife Tasmania: Mole Creek Karst National Park", url: "https://parks.tas.gov.au/explore-our-parks/mole-creek-karst-national-park" },
    { label: "Wikipedia: Arachnocampa", url: "https://en.wikipedia.org/wiki/Arachnocampa" },
  ],
});

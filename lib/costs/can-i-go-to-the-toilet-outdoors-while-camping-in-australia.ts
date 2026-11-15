import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can I go to the toilet in the bush while camping in Australia?", "Yes, if there is no toilet within reach and you do it properly: well away from water, camps and tracks, in a small hole, with the toilet paper packed out. If a toilet is provided at the campground or rest area, use it. Some parks and council sites also ban going in the bush altogether."],
  ["How deep and how far from water should I bury it?", "The usual bushwalking advice is a hole about 15 cm deep and at least 100 m from water, tracks and camp. Cover it well afterwards, and in cold or alpine country where waste breaks down slowly, follow the park's own advice, which is often to carry it out."],
  ["What do I do with toilet paper outdoors?", "Pack it out in a sealed bag. Buried paper surfaces again after rain and animals dig it up, and burning it is a bushfire risk. Wet wipes go in the bag too, because they do not break down."],
  ["Where do I empty a cassette toilet?", "At a dump point, not in a public toilet bowl or the bush. Many dump points are at caravan parks, council depots, rest areas and service stations, and the best ones are free or cheap. Rinse with the tap provided and never use the drinking water hose."],
] as const;

export default article({
  slug: "can-i-go-to-the-toilet-outdoors-while-camping-in-australia", publishAt: "2026-11-17",
  title: "Can I Go to the Toilet Outdoors While Camping in Australia?",
  description: "When going in the bush is fine, how to bury waste and pack out paper, where portable toilets or self-contained vehicles are required, and how to empty a cassette at a dump point.",
  category: "Rules & safety", region: "Australia",
  places: ["Rest areas", "National parks", "State forests", "Dump points", "Free camps"],
  imageAlt: "A toilet block beside the road at the Mullengudgery rest area, New South Wales",
  intro: "Yes, but only as a last resort and only if you do it properly. If a toilet is provided at the camp or rest area, use it. If there is none, you can bury your waste in the bush, well away from water, camps and tracks, and take your toilet paper with you. Below: how to dig and cover it, where the rules are stricter, and what to do with a cassette or portable toilet.",
  related: ["responsible-camping-australia", "dump-points-australia-guide", "best-dump-point-toilet-apps-australia", "camping-rules-tasmania", "campfires-camping-australia"],
  sections: [
    section("Use a toilet first", ["Most campgrounds in national parks and many rest areas have a toilet, often a long drop or a composting one, and a lot of free camps are chosen because they have one. A toilet block is always the better choice: it protects the water, the ground and the next camper.", "The bush is for when there is nothing else, or when you are on a walk or a remote track. Plan around it by checking a place's facilities before you drive, and carry a small trowel and a sealable bag in the daypack."], ["Use the provided toilet", "Check facilities before you go", "Keep a trowel in the pack"]),
    section("How to bury waste", ["Walk well away from water, tracks and camp, about 100 m is the usual rule, and pick a spot with soft soil that is unlikely to be walked over. Dig a hole about 15 cm deep, do your business, then mix the waste with soil and fill the hole in. Cover it with a rock or leaf litter so the spot looks untouched.", "Never dig where water runs, in a dry creek bed or near a campsite. A hole near a creek ends up in the creek the next time it rains, and that is what makes people sick downstream."], ["About 15 cm deep", "About 100 m from water, tracks and camp", "Fill in and cover the hole"], {
      caption: "Going outdoors: the basics.",
      head: ["Step", "What to do", "Why"],
      rows: [
        ["Pick a spot", "100 m from water, tracks and camp", "Keeps water and campsites clean"],
        ["Dig", "A small hole about 15 cm deep", "Soil breaks the waste down"],
        ["Paper and wipes", "Seal in a bag and take it out", "Buried paper gets dug up, wipes do not rot"],
        ["Cover", "Fill the hole, hide the spot", "Stops animals and the next camper finding it"],
      ],
    }),
    section("Paper, wipes and period products", ["Pack out your toilet paper, wet wipes and period products in a sealed bag. Do not burn paper in a campfire pit, because it is a risk on dry days and leaves a mess. Put the bag in a bin at the next stop with a rubbish collection, and consider a small dedicated container with a lid for the vehicle.", "In cold, alpine or dry country, waste breaks down slowly and some parks ask you to carry it out as well. The park's own page for the track or camp will say, and busy walks usually have a toilet at each camp."], ["Seal paper in a bag", "Never burn it in the fire", "Some parks ask you to carry everything out"]),
    section("Where the rules are stricter", ["Some places do not allow going in the bush at all. Popular camps and walks, and some free camps near towns, require a portable or chemical toilet, or a self-contained vehicle with its own toilet and a way to empty it. Councils that run freedom camping sites often set this as a condition of staying overnight.", "Rangers can issue fines for fouling, and councils and park agencies publish the amount. The rule that applies is the land manager's, so check the sign at the site and the council or park page before you settle in."], ["Some sites need a portable toilet", "Self-contained rules apply at some free camps", "Fouling can mean a fine"]),
    section("Cassette and portable toilets", ["A cassette or portable toilet should be emptied at a dump point, never in the bush and never down a public toilet that is not made for it. Dump points are at many caravan parks, council depots, rest areas, showgrounds and some fuel stops, and many are free or cost a few dollars.", "Rinse the cassette at the tap provided and keep the hose for the dump point only, away from the drinking water. Fill a cassette with the right chemical or a biodegradable alternative if the park asks, and pack a pair of gloves."], ["Empty at a dump point only", "Rinse at the dump point tap", "Keep drinking water separate"]),
    { ...section("Find toilets and dump points in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. In Popular features you can filter for toilets and drinking water, and the Cost filter narrows the list to Free or Paid.", "Save places to a collection, build a trip with Add stop and see the driving distance and time between each leg. The whole directory sits inside the app, so search, filters and place details work with no signal. There is no account and no ads, and it runs on iPhone. Check the sign at the site and the land manager before you settle in."], ["Filter for toilets", "Find dump points on a trip", "Works with no signal"]), cta: true },
  ],
  sources: [
    { label: "Leave No Trace Australia", url: "https://www.leavenotrace.org.au/" },
    { label: "NSW National Parks: camping", url: "https://www.nationalparks.nsw.gov.au/" },
    { label: "Parks Victoria: camping", url: "https://parks.vic.gov.au/" },
    { label: "Parks and Wildlife Service Tasmania", url: "https://parks.tas.gov.au/" },
  ],
});

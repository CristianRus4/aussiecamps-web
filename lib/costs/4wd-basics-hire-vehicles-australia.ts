import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can I take a hire 4WD off the sealed road in Australia?", "Only if the rental agreement allows it. Many hire companies restrict where their vehicles can go, and some ban unsealed roads, beaches and river crossings entirely. Driving where the agreement says you must not can void the insurance and leave you liable for the full cost of damage and recovery."],
  ["What is low range in a 4WD?", "Low range is a lower gear set that gives more engine braking and control at slow speed, and it is used for steep tracks, deep sand and difficult climbs and descents. For most dirt roads and beach driving, high range 4WD is enough."],
  ["Should I let the tyres down on sand?", "Lowering tyre pressure improves traction on soft sand and corrugations, but check the hire company's rules first, and re-inflate before you return to the sealed road. A compressor or a pump is needed to put the air back."],
  ["What should I carry on a remote 4WD track?", "Extra water, food, a first aid kit, a spare tyre or two, a shovel, recovery tracks and a way to call for help such as a satellite messenger or a hired satellite phone. Tell someone your route and when you expect to arrive."],
] as const;

export default article({
  slug: "4wd-basics-hire-vehicles-australia",
  title: "4WD Basics for Hire Vehicles in Australia: Sand, Dirt and Water",
  description: "The basics of driving a hire 4WD in Australia: what your rental agreement allows, how to drive on sand and corrugations, river crossings, recovery gear and when to turn back.",
  category: "Rules & safety", region: "Australia",
  places: ["Gibb River Road", "K'gari", "Flinders Ranges", "Outback tracks"],
  imageAlt: "A four-wheel-drive camper with a pop-top roof parked at a bush campsite in the northern Flinders Ranges",
  intro: "A hire 4WD opens up beaches, gorges and outback tracks that a two-wheel-drive van cannot reach, but it also carries rules and risks of its own. The first thing is the rental agreement, which sets where you can drive, and the second is the technique for the surface. Below are the basics for sand, dirt, corrugations and water, plus the gear and the habits that keep a remote trip safe.",
  related: ["can-i-drive-a-2wd-hire-campervan-on-4wd-roads-in-australia", "can-i-drive-on-the-beach-in-australia", "gibb-river-road-camping", "campervan-hire-cost-australia-2026", "camping-without-phone-signal", "flinders-ranges-camping-guide", "river-crossing-floodway-safety-australia"],
  sections: [
    section("Read the rental agreement first", ["Hire companies set limits on where a vehicle can go, and the limits are usually listed in the agreement. Many ban unsealed roads, beaches, river crossings and some named tracks, and some 4WD hire companies allow all of them with the right insurance. Driving where the agreement forbids can void the insurance and leave you liable for the full cost of damage and recovery.", "Ask at pick-up whether the vehicle has low range, how many spare tyres it carries, whether it has recovery gear and whether tyre and underbody damage is covered. The 2WD campervan guide covers the same question for vans without 4WD."], ["Check where you may drive", "Ask what is covered", "Ask what gear is on board"]),
    section("Driving on dirt and corrugations", ["On a gravel or dirt road, slow down, keep the steering light and give other vehicles plenty of room, because stones and dust reduce grip and visibility. Corrugations are ridges across the road that can shake a vehicle apart, and a steady moderate speed usually handles them better than going very slowly or very fast.", "After rain, clay roads can turn slippery or close. Check road conditions with the local council, park or shire before you go, and be ready to turn back if the road is closed or flooded."], ["Slow down on gravel", "Hold a steady speed on corrugations", "Check road conditions before you go"]),
    section("Sand and beach driving", ["Soft sand needs momentum and light, smooth inputs, so avoid sudden braking and steering, and drive in the tracks of other vehicles. Lowering the tyre pressure improves traction, but only do it if the hire company allows it and you can pump the tyres up again afterwards.", "Beaches have tides, and some need a permit, so plan around the tide and keep clear of the water's edge. The beach driving guide covers the rules, and K'gari and other sand islands have their own permits."], ["Use momentum and light inputs", "Plan around the tide", "Check permit rules"]),
    section("Water crossings and recovery", ["Never cross water you cannot see the bottom of. Walk it first if it is safe to do so, check the depth and the current, and look out for crocodiles in the north. A deep or fast crossing can wreck the engine and is rarely covered by insurance. If in doubt, turn back or wait for the water to drop.", "Carry recovery tracks, a shovel and a way to call for help, and tell someone your route. Out of mobile range, a satellite messenger or satellite phone is the safest backup, and the no phone signal guide covers the options."], ["Never cross water you cannot see", "Carry recovery gear", "Tell someone your route"]),
    { ...section("Plan the route in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Build a trip as ordered stops and it shows the distance, drive time and forecast for each leg, so you can plan fuel and camps along a remote route.", "The iPhone app is free to download, with in-app purchases."], ["Plan fuel and camps along the route", "Add each stop in order", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Four-wheel drive", url: "https://en.wikipedia.org/wiki/Four-wheel_drive" },
    { label: "Wikipedia: Gibb River Road", url: "https://en.wikipedia.org/wiki/Gibb_River_Road" },
    { label: "Queensland Government: Driving on beaches", url: "https://www.qld.gov.au/" },
  ],
});

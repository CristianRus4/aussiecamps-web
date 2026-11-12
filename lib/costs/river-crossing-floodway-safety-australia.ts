import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How deep a creek can I drive through?", "Less than you think. Queensland's Get Ready campaign says it can take as little as 15 cm of moving water for a car to lose traction and be swept away. The wading depth in a vehicle manual is for still water, not a current."],
  ["What does a floodway depth marker mean?", "Low-level crossings in the north carry depth markers, and you should not enter if the water is above the marker or you cannot see the markers. A road can be open in the morning and under water by afternoon."],
  ["Does hire insurance cover water crossings?", "Rarely. Most hire contracts ban river crossings and driving through floodwater, and water damage to the engine is usually not covered. Read the terms before you cross."],
  ["Is it safe to walk a crossing first?", "Only where it is safe: not in a current you cannot stand in, not where there is a crocodile risk and not in a flood. If you cannot see the bottom or the far side, do not cross."],
] as const;

export default article({
  slug: "river-crossing-floodway-safety-australia",
  title: "River, Creek and Floodway Crossings in Australia: When to Cross and When Not To",
  description: "How to judge a creek, causeway or floodway crossing in Australia: depth markers, current, crocodiles, hire contract limits, and when to wait or turn back.",
  category: "Rules & safety", region: "Australia",
  places: ["Floodways", "Causeways", "Creek crossings", "Outback tracks"],
  imageAlt: "A rock ford across the Avon River at West Toodyay, Western Australia",
  intro: "Many Australian roads cross creeks and rivers at low-level causeways and floodways, with no bridge, and in the wet season a crossing that was dry in the morning can be under a metre of fast water by the afternoon.. The rules are simple: if it is flooded, forget it, and wait or turn around. Below: how to read a crossing, what a hire contract allows and what to do when the water is too high.",
  related: ["4wd-basics-hire-vehicles-australia", "cyclone-flood-season-camping-australia", "can-i-drive-a-2wd-hire-campervan-on-4wd-roads-in-australia", "wet-season-camping-top-end-northern-wa", "camping-without-phone-signal", "safe-swimming-queensland-crocodiles-stingers"],
  sections: [
    section("If it's flooded, forget it", ["Queensland's Get Ready campaign says it can take as little as 15 cm of water for a car to lose traction and be swept away, that modern cars are light and buoyant, and that the pressure of floodwater can stop you opening the doors and windows. The wading depth in a vehicle manual is for still water, not a current.", "You also cannot see whether the road under the water is still there. Flooding can scour away the surface, and debris in the water can hit the vehicle. A crossing that looks easy may have a hole in the middle."], ["15 cm can sweep a car away", "Wading depth is for still water", "You cannot see the road"]),
    section("Read the crossing", ["Look for depth markers on floodways in the north, and for the road condition signs at the junction before it. If the water is above the marker, or you cannot see the markers, do not enter. Check road reports for closures before you set off, because a road can be closed by flooding upstream of the crossing.", "Look at the water itself: speed, colour, debris, and whether it is rising. Muddy, moving water that carries branches is a warning. Check the far bank for an easy exit, because a crossing is only safe if you can get out the other side."], ["Obey depth markers", "Watch the speed and colour", "Check the exit on the far bank"], { caption: "What to check before a crossing.", head: ["Check", "Safe sign", "Turn back if"], rows: [
      ["Depth", "Water is below the marker and the markers are visible", "Water is above the marker or you cannot see it"],
      ["Current", "Slow or still", "Fast, rising or carrying debris"],
      ["Far bank", "Gentle exit you can see", "Steep, boggy or hidden"],
      ["Wildlife", "No crocodile signs", "Crocodile signs or recent sightings"],
      ["Contract", "Your hire terms allow it", "Your contract bans river crossings"],
    ] }),
    section("Crocodiles and the north", ["Saltwater crocodiles live in rivers, estuaries and the sea across the tropical north, and floodwater and river edges can carry them. Never walk a crossing or wade in northern water where there are crocodile warning signs.", "That means that in the north the advice to walk a crossing first does not apply, and the safe choice is to wait for the water to drop or turn around."], ["Never wade in croc country", "Do not walk the crossing", "Wait or turn around"]),
    section("Hire contracts and insurance", ["Most hire contracts ban river crossings and driving through floodwater, and insurance rarely covers water damage to the engine. A 2WD campervan is also barred from unsealed roads, so a causeway on a dirt track is out of bounds before the water is a question.", "If you are in a 4WD hire vehicle, read the terms for that vehicle rather than assuming they match a 2WD van. Driving through water the contract forbids can leave you liable for the full cost of damage and recovery."], ["Read the contract first", "Water damage is rarely covered", "A 2WD van stays on sealed roads"]),
    section("If you are caught by the water", ["If the water rises while you are camped or stopped, move to higher ground early. Never camp in a dry creek bed or on a low river flat, because rain falling far upstream can fill them overnight. Treat a closed road as a rest day.", "If a vehicle is swept off a crossing, get out through a window or door as soon as it is safe, climb onto the roof if you cannot reach the bank and call triple zero. A satellite messenger or beacon helps when there is no signal."], ["Move to high ground early", "Treat closures as rest days", "Carry a way to call for help"]),
    { ...section("Keep a fallback in AussieCamps", ["AussieCamps lists campgrounds, national parks and rest areas with the access notes the park agencies publish, plus holiday parks and motels from BookEasy that you can book in the app, so a roof on higher ground is a few taps away. It does not show live road closures, so check the road authority's report.", "It runs on iPhone and is free to download, with in-app purchases."], ["Find a fallback stay", "Check road reports separately", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Queensland Get Ready: if it's flooded, forget it", url: "https://www.getready.qld.gov.au/FloodedForgetIt" },
    { label: "Queensland Government: check road conditions before you drive", url: "https://www.qld.gov.au/emergency/dealing-disasters/disaster-types/flood/flood-aware/floodwater-safety/check-road-conditions-before-you-drive" },
    { label: "Road Report NT", url: "https://roadreport.nt.gov.au/" },
    { label: "Main Roads WA: Travel Map", url: "https://travelmap.mainroads.wa.gov.au/" },
    { label: "Bureau of Meteorology: warnings", url: "https://www.bom.gov.au/australia/warnings/" },
  ],
});

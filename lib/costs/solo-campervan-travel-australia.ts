import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Is it safe to travel solo in a campervan in Australia?", "Many people do, and most trips go without trouble. The main risks are the same as for any road trip: fatigue, wildlife, remote roads and heat. Sensible habits such as telling someone your plans, choosing camps in daylight and keeping the van locked help with the rest."],
  ["Where should a solo traveller camp?", "Holiday parks and busy campgrounds are the easiest places to start, because there are other people, lights and facilities. Rest areas and free camps are fine too, but pick ones with other vehicles and arrive before dark."],
  ["How do I stay in touch on a solo trip?", "Share your route and a check-in time with someone, share your phone location and message at set times. In areas without signal, tell them when you will next be in range, and carry a satellite messenger on remote routes."],
  ["What number do I call in an emergency?", "Call 000 from any phone in Australia. If you have no signal on your own network, 112 from a mobile phone can connect through any available network. Out of range, you need a satellite device or help from a passing vehicle."],
] as const;

export default article({
  slug: "solo-campervan-travel-australia",
  title: "Solo Campervan Travel in Australia: Safety, Camps and Staying in Touch",
  description: "Travelling alone in a campervan in Australia: where to camp, how to stay safe and in touch, what to do about fatigue and remote roads, and how to meet people on the way.",
  category: "Rules & safety", region: "Australia",
  places: ["Holiday parks", "Rest areas", "East coast", "Outback"],
  imageAlt: "Glass House Mountains on the Sunshine Coast, Queensland",
  intro: "Plenty of people travel Australia alone in a campervan, and it can be a great way to see the country at your own pace. The risks are mostly the ordinary ones of a long road trip, tiredness, wildlife and remote roads, and a few habits help with the rest. Below are where to camp, how to stay in touch and how to look after yourself on your own.",
  related: ["australia-road-trip-fatigue-wildlife-safety", "camping-without-phone-signal", "can-i-sleep-in-a-campervan-in-the-city-in-australia", "choosing-campsite-australia", "caravan-park-vs-holiday-park", "first-campervan-trip-australia"],
  sections: [
    section("Where to camp on your own", ["For the first nights, holiday parks and busy campgrounds are the easiest choice, with other people, lights, showers and a manager on site. Free camps and rest areas are fine too, but pick ones where other vehicles are parked, arrive before dark and leave if the place does not feel right.", "Trust your instincts. If a spot feels wrong, drive on, and have a second option in mind. The choosing a campsite guide covers what to look for, and the city sleeping guide covers where you cannot stay."], ["Start with holiday parks", "Arrive before dark", "Drive on if it feels wrong"]),
    section("Staying in touch", ["Tell someone your route and when you will next check in, share your phone location with them and message at set times. Much of the outback and many national parks have no mobile signal, so tell them when you will next be in range, and what to do if you are late.", "On remote routes, a satellite messenger or satellite phone is worth carrying. The no phone signal guide covers the options. In an emergency, call 000, or 112 from a mobile phone."], ["Share your route and check-in times", "Expect no signal in remote areas", "Call 000 in an emergency"]),
    section("Safety on the road and at camp", ["The biggest risk on a solo trip is fatigue, because there is nobody to swap with. Drive shorter days, stop every two hours and avoid dawn and dusk when wildlife is active. Keep the van locked when you are away from it, keep valuables out of sight and keep fuel, water and a charged phone on hand.", "At camp, keep the doors locked at night and park with your exit clear, and carry a torch. The fatigue and wildlife guide covers the daily habits for long drives."], ["Drive shorter days", "Lock the van and hide valuables", "Keep fuel, water and a charged phone"]),
    section("Meeting people and looking after yourself", ["Camping alone does not mean being lonely. Holiday parks have shared kitchens and barbecues, many campgrounds are friendly and tours and walks are a good way to meet people. Plan some rest days and some company, and keep a few nights in a town between the remote stretches.", "Look after the basics: eat properly, drink water, rest when you are tired and carry a first aid kit. A small trip plan helps you see the long days coming."], ["Use shared kitchens and barbecues", "Plan rest days", "Carry a first aid kit"]),
    { ...section("Plan the trip in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Build a trip as ordered stops and it shows the distance, drive time and forecast for each leg, so you can plan daylight arrivals and see how far apart the stops are.", "The iPhone app is free to download, with in-app purchases."], ["Plan daylight arrivals", "Add each stop in order", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Triple Zero (000) emergency call", url: "https://www.triplezero.gov.au/" },
    { label: "Wikipedia: Emergency telephone number", url: "https://en.wikipedia.org/wiki/Emergency_telephone_number" },
  ],
});

import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How far should I drive in a day in Australia?", "Most campervan travellers plan between 250 and 400 km a day, or about four to five hours behind the wheel, and leave time to stop. Distances look short on a map but roads, speed limits, road works and fuel stops add time, and the best trips leave room for a swim, a lookout or a late start."],
  ["How often should I stop on a long drive?", "At least every two hours, and sooner if you feel tired. Rest areas and roadhouses are spaced along the major highways for this, and a short walk, a drink and a stretch does more than coffee."],
  ["How far apart are fuel stops in the outback?", "On the Nullarbor, Eyre Highway roadhouses can be up to about 190 km apart, and some northern and central routes have gaps of 200 km or more. Fill up whenever you can in remote country and carry water."],
  ["What is the speed limit on Australian highways?", "It varies by state and road. Most national highways are 100 or 110 km/h, and a few sections in the Northern Territory allow 130 km/h. Hire campervans are often slower than that, and some hire companies set their own limits, so read your agreement and keep to the posted limit."],
] as const;

export default article({
  slug: "long-distance-driving-tips-australia",
  title: "Long-Distance Driving Tips for Australia: Distances, Rests and Fuel",
  description: "Australia is big, and a campervan trip often means long days behind the wheel. How far to drive in a day, when to stop, how to plan fuel and water, and how to stay alert.",
  category: "Trip planning", region: "Australia",
  places: ["Eyre Highway", "Stuart Highway", "Great Northern Highway", "Roadhouses"],
  imageAlt: "The Eyre Highway running straight across the Nullarbor Plain",
  intro: "Australia is big, and a campervan trip often involves days where the road runs straight for hours. The trick is to plan shorter days than the map suggests, stop often, fill up whenever you can and arrive before dark. Below are the habits that make long-distance driving safer and more enjoyable, from daily distances to fuel gaps and sleep.",
  related: ["australia-road-trip-fatigue-wildlife-safety", "road-trip-fuel-planning-australia", "nullarbor-crossing-camping-guide", "driving-with-road-trains-australia", "australia-road-rules-state-differences", "best-time-camping-australia"],
  sections: [
    section("Plan shorter days than the map suggests", ["A distance that looks easy on a map often takes longer once you add stops, speed limits, road works, towns and traffic. Four to five hours of driving, or about 250 to 400 km, is a comfortable day in a campervan, and it leaves time to set up camp, cook and enjoy the stop.", "Check each leg for the next fuel stop, the next town and the next place to camp, and plan to arrive in daylight. The east coast, the Nullarbor and the Red Centre all have long distances between places, so allow extra time on those routes."], ["250 to 400 km is a comfortable day", "Arrive before dark", "Leave time to enjoy the stops"]),
    section("Stop often and stay alert", ["Fatigue is a major cause of crashes on long straight roads. Stop at least every two hours at a rest area, roadhouse or town, walk around, drink water and swap drivers if you can. If you feel drowsy, stop and rest, rather than pushing on to the next sign.", "Rest areas along the highways are set up for this, and many have toilets, tables and shade. The fatigue and wildlife guide covers the signs of tiredness and how to deal with them."], ["Stop at least every two hours", "Swap drivers when you can", "Pull over if you feel drowsy"]),
    section("Fuel, water and food", ["In remote country the next fuel can be 200 km or more away, so fill up whenever you can and do not wait for the gauge to drop. Carry more water than you think you need, enough food for a day or two, and a first aid kit. Roadhouses sell fuel, food and often a bed or a camp spot, but they have limited hours.", "The fuel planning guide covers range, jerry cans and fuel gaps, and the water planning guide covers how much to carry."], ["Fill up when you can", "Carry spare water and food", "Roadhouse hours vary"]),
    section("Other road users and conditions", ["On long routes you will share the road with road trains, caravans and trucks. Give them room, do not overtake on a hill or a bend and be ready for dust, glare and crosswinds. Overtaking a road train takes a long distance, so be patient and wait for a clear stretch.", "Wildlife is most active at dawn and dusk, so keep your driving to daylight, and be ready for sudden weather changes, floods and fire in the right season."], ["Give road trains room", "Be patient overtaking", "Stay off the road at dusk"]),
    { ...section("Plan the route in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Build a trip as ordered stops and it shows the distance, drive time and forecast for each leg, so you can see where the long days are and add a rest area or a camp in between.", "The iPhone app is free to download, with in-app purchases."], ["See each leg's distance and time", "Add a stop to break a long day", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Eyre Highway", url: "https://en.wikipedia.org/wiki/Eyre_Highway" },
    { label: "Wikipedia: Stuart Highway", url: "https://en.wikipedia.org/wiki/Stuart_Highway" },
    { label: "Wikipedia: Driver fatigue", url: "https://en.wikipedia.org/wiki/Fatigue_(medical)" },
  ],
});

import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What should I do if I hit a kangaroo in a hire campervan?", "Slow down and stop in a safe place, turn on the hazard lights and check that everyone is unhurt. Call 000 if anyone is injured or the vehicle is blocking the road. Photograph the damage and the scene, then call the hire company as soon as you can, because the rental agreement sets out how to report an incident."],
  ["Should I swerve to miss a kangaroo?", "No. Brake firmly and stay in your lane. Swerving at speed is how many serious crashes happen, because the van can roll or cross into oncoming traffic. A collision with an animal at a lower speed is usually less dangerous than a rollover."],
  ["When are kangaroos most active on the road?", "At dawn and dusk and through the night, especially on country roads after rain when roadside grass is green. Many hire companies advise against driving at these times, and it is the simplest way to avoid a collision."],
  ["Who do I call about an injured kangaroo?", "Call the wildlife rescue group for the state you are in, or the RSPCA. Do not approach an injured animal, because kangaroos can kick and scratch. Tell the rescuer where the animal is and, if you can see it, whether a pouch is visible, and let a trained carer handle the animal."],
] as const;

export default article({
  slug: "hit-a-kangaroo-what-to-do-australia",
  title: "What to Do If You Hit a Kangaroo in Australia",
  description: "Kangaroo strikes are common on country roads at dawn and dusk. What to do straight after a collision, who to call, how it affects hire insurance, and how to reduce the risk.",
  category: "Rules & safety", region: "Australia",
  places: ["Country roads", "Outback highways", "Dawn and dusk"],
  imageAlt: "Camel, wombat and kangaroo warning signs at Border Village on the Eyre Highway",
  intro: "Kangaroos are most active around dawn and dusk, and a collision on a country road is one of the most common ways for a hire campervan to be damaged. If it happens, the first jobs are safety, then the hire company, then the animal. Below are the steps to follow straight after a strike, and the ways to reduce the chance of one in the first place.",
  related: ["australia-road-trip-fatigue-wildlife-safety", "campervan-driving-australia-safety-guide", "driving-with-road-trains-australia", "nullarbor-crossing-camping-guide", "camping-without-phone-signal", "campervan-hire-cost-australia-2026", "wildlife-encounters-campervan-australia"],
  sections: [
    section("Right after the collision", ["Slow down, pull off the road if you can and put the hazard lights on. Check that everyone is unhurt, and call 000 if anyone is injured or if the van is blocking the road. If the van is on a bend or over a crest, get people out and well away from traffic before you do anything else.", "Look at the van for leaks, a bent bumper over a tyre, broken lights or a radiator that is steaming. If the van is not safe to drive, do not drive it, and call roadside assistance. Take photos of the damage and the scene, and note the time, the road and the nearest town."], ["Stop safely, hazard lights on", "Call 000 for injuries or a blocked road", "Photograph the damage and the scene"]),
    section("Call the hire company", ["The rental agreement sets out what you must do after an incident, and the hire company will tell you whether the van is safe to continue, who will repair it and what is covered. Many policies treat animal strikes differently from other collisions, and some exclude them or charge a higher excess, so call early and keep the photos and any paperwork.", "The hire insurance and excess guide explains the usual exclusions, and the campervan hire cost guide explains what the extras cover."], ["Call before you drive on", "Ask what is covered", "Keep photos and paperwork"]),
    section("The animal", ["Do not approach an injured kangaroo, because they kick and scratch and can hurt you badly. Call the wildlife rescue group for the state you are in, or the RSPCA, and tell them where the animal is and what you can see. If a female has been killed, tell the rescuer, because a joey may be in the pouch and a trained carer can check it.", "If an animal is dead on the road and is a hazard, report it to the local council or the road authority, or to the police on the non-emergency line, so it can be moved."], ["Do not touch an injured animal", "Call wildlife rescue or the RSPCA", "Mention a possible joey"]),
    section("How to reduce the risk", ["Avoid driving at dawn, dusk and at night, and stop for the day while it is still light. The risk is highest on country roads after rain, when green grass pulls kangaroos towards the verge, and when you see one, expect more nearby. Slow down in areas with warning signs.", "If an animal runs out, brake firmly and stay in your lane. Swerving at speed is more dangerous than hitting the animal. The fatigue and wildlife guide covers the rest of the daily habits that keep a long drive safe."], ["Be off the road before dusk", "Slow down at warning signs", "Brake, do not swerve"]),
    { ...section("Plan the day in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Build the trip as ordered stops and it shows the distance and drive time for each leg, so you can plan to be at the next camp before dusk.", "The iPhone app is free to download, with in-app purchases."], ["Reach camp before dusk", "Add each stop in order", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Wildlife-vehicle collision", url: "https://en.wikipedia.org/wiki/Wildlife-vehicle_collision" },
    { label: "Wikipedia: Kangaroo", url: "https://en.wikipedia.org/wiki/Kangaroo" },
    { label: "RSPCA Australia", url: "https://www.rspca.org.au/" },
  ],
});

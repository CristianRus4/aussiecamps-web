import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can I see the weather for a campsite in AussieCamps?", "Yes. Open a place and its weather is on the place screen. In a trip, each stop shows the weather for its own dates, so you can read the whole route in one place."],
  ["What is Street View in AussieCamps?", "It is the street-level view of a place's entrance and the road in. It opens from the place screen where coverage exists, and plenty of remote places have none."],
  ["What if the weather looks wrong for my stop?", "Look at the nearby places and pick a backup, ideally with a sealed road in. Save it to the trip so it is ready if you need to change plans."],
] as const;

export default article({
  slug: "aussiecamps-weather-street-view", publishAt: "2026-12-26",
  title: "Use Weather and Street View Before Choosing a Stay in AussieCamps",
  description: "Check a place's weather, look at the entrance in Street View, read the alerts and fees, then choose your stay or a backup, all inside AussieCamps.",
  category: "App guides", region: "Australia",
  places: ["Weather", "Street View", "Place photos", "Backup stays"],
  imageAlt: "Storm clouds and rain over Kata Tjuta, Uluru-Kata Tjuta National Park, Northern Territory",
  intro: "Before you commit to a campsite, open its place screen in AussieCamps and check four things: the weather, the entrance in Street View, the photos, and the fees and alerts. Together they tell you whether tonight will be easy or a slog. If anything looks off, a nearby place is a tap away.",
  related: ["aussiecamps-place-details", "best-weather-apps-camping-australia", "choosing-campsite-australia", "camping-weather-safety-australia", "how-to-plan-trip-aussiecamps"],
  sections: [
    section("Check the weather for the place and the day", ["Open a place and look at its weather first. Wind matters for a rooftop tent or an awning, rain matters for dirt roads and creek crossings, and heat matters for shade and water.", "Planning a trip, each stop shows its own weather for its own dates. Scan down the stops and the one that needs a second look is easy to spot, whether it is a stormy day on a gravel leg or a scorcher at an exposed camp."], ["Read wind, rain and heat", "Each trip stop has its own weather", "Look again on the day you leave"]),
    section("Read the entrance with Street View", ["Street View is the app's street-level view, built on Apple's Look Around imagery. Open it from the place screen to see the turn-off, the road surface and how tight the entrance looks for your rig.", "Where there is coverage, it answers questions a pin cannot: is the entrance sealed, is there room to swing a caravan, is there a low branch. Plenty of bush camps have no coverage, and that is when the photos and the place's description do the work."], ["Check the turn-off and surface", "Look for room to turn a van", "No coverage? Use photos"]),
    section("Add photos, fees, facilities and alerts", ["Scroll the photos for the feel of the place, then read the fees, facilities and any current alerts. A closure or a fire ban matters more than a good view.", "Facilities decide the comfort of a night: toilets, drinking water, showers, campfires and phone reception are listed where the land manager publishes them. A missing item usually means it is not recorded, so read it as unknown rather than absent."], ["Photos for the feel", "Alerts before anything else", "A blank means unrecorded"], {
      caption: "A quick check before you choose a stay.",
      head: ["Check", "What it tells you"],
      rows: [
        ["Weather", "Wind, rain and heat for your dates"],
        ["Street View", "The entrance, turn-off and road in"],
        ["Photos", "Sites, shade and the general feel"],
        ["Fees and facilities", "What the night costs and what is there"],
        ["Alerts", "Closures, fire bans and warnings"],
      ],
    }),
    section("Decide, and pick a backup", ["If the weather, the entrance and the alerts all look fine, save the place to your trip and move on. If one of them bothers you, look at the nearby places and choose a backup with an easier road or more shelter.", "Save the backup into the trip beside the first choice. Having both ready takes the stress out of a day when the forecast changes while you are driving."], ["Save the first choice and a backup", "Prefer a sealed road in bad weather", "Check again closer to the day"]),
    { ...section("Plan your stays in AussieCamps", ["Open a place in AussieCamps, check its weather, take a look at the entrance in Street View and read the photos, fees and alerts. Add the best one to a trip with Add stop, and keep a backup beside it.", "Weather and Street View need a connection, so check them while you have signal, and read the sign at the site before you settle in."], ["Use Add stop for the winner", "Check with signal", "The sign at the site comes first"]), cta: true },
  ],
  sources: [
    { label: "Bureau of Meteorology: Weather and warnings", url: "https://www.bom.gov.au/" },
    { label: "Parks Australia: Plan your visit", url: "https://parksaustralia.gov.au/" },
    { label: "Australian Government: Disaster Assist", url: "https://www.disasterassist.gov.au/" },
  ],
});

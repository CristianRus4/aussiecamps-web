import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where can I see the southern lights from a campsite in Tasmania?", "The best spots face south over open water or flat ground with little town light: Cockle Creek, Bruny Island, the South Arm peninsula and the south and east coasts. Cradle Mountain and the highlands work too when the sky is clear and the moon is down."],
  ["When is the best time to see the aurora in Tasmania?", "Winter, from about May to August, has the longest nights, and a dark moon and a clear sky matter more than the month. Aurora shows when the sun is active, so watch the Bureau of Meteorology space weather alerts and keep a few nights spare."],
  ["When do the wildflowers bloom in Tasmania?", "Spring to summer. Coastal heath at Freycinet flowers from about September, the waratahs in Mount Field come out around November and December, and the alpine flowers at Cradle Mountain, Mount Field and Ben Lomond peak in summer, usually from December to February."],
  ["What should I pack for cold camping in Tasmania?", "A sleeping bag rated well below the forecast, an insulated mat, thermal layers, a beanie and a warm drink for the night. Winter nights on the south coast can be frosty and the highlands can snow in any month, so check the park alerts before you go."],
] as const;

export default article({
  slug: "aurora-australis-tasmanian-wildflowers-camping", publishAt: "2027-01-06",
  title: "Aurora Australis and Tasmanian Wildflowers: Camping for Dark Skies and Blooms",
  description: "Where and when to see the southern lights from a Tasmanian campsite, plus the spring and summer wildflower season at Cradle Mountain, Mount Field, Ben Lomond and Freycinet.",
  category: "Camping guides", region: "Tasmania",
  places: ["Cockle Creek", "Bruny Island", "South Arm", "Cradle Mountain", "Freycinet"],
  imageAlt: "Tussock grassland and ranges seen from the Overland Track, Tasmania",
  intro: "Tasmania is the best place in Australia to see the southern lights, and in spring and summer it flowers in the highlands and along the coast. The aurora is a winter chase from a dark camp facing south, with a clear sky and no moon, and the wildflowers are a spring and summer trip to the mountains. Below: where to base yourself for each, when to go and how to keep warm.",
  related: ["camping-rules-tasmania", "free-camping-tasmania", "tasmania-camping-loop", "wa-wildflower-season-camping-australia", "australian-winter-camping-whales-snow-warm-camps"],
  sections: [
    section("Where to see the southern lights", ["The aurora shows low on the southern horizon, so you want a camp that faces south over open water or flat ground, away from town glow. In Tasmania that means the south and east coasts: Cockle Creek at the end of the road, Bruny Island, the South Arm peninsula near Hobart, and the beaches along the Tasman Peninsula and the east coast.", "The highlands work as well. The Cradle Mountain area has dark skies, and a clear night there can be good, but cloud and cold arrive quickly. Whatever the spot, keep the moon behind you and let your eyes adjust for 20 minutes."], ["Face south over open ground", "South and east coasts first", "Let your eyes adjust"], {
      caption: "Aurora camps in Tasmania.",
      head: ["Area", "Why it works", "Watch for"],
      rows: [
        ["Cockle Creek", "Far south, almost no light", "Remote, gravel road, cold nights"],
        ["Bruny Island", "Open south-facing beaches", "Ferry times, park pass"],
        ["South Arm peninsula", "Close to Hobart, dark enough", "Some town glow to the north"],
        ["East coast beaches", "Wide horizons over the sea", "Cloud rolling in off the coast"],
        ["Cradle Mountain area", "Dark highland sky", "Cold, snow and sudden cloud"],
      ],
    }),
    section("When to go and how to know", ["The long nights from autumn to early spring give you the most time, and most people go in winter. Tasmania has no guaranteed aurora: it happens when the sun is active, and a clear night with no moon matters more than the month. Plan a few nights in the area and be ready to get up when an alert comes.", "The Bureau of Meteorology space weather service publishes aurora alerts and the current activity level. Check it before dusk and again late in the evening, then look for a faint green or pink glow on the southern horizon. A camera on a night mode picks up colour the eye misses."], ["Winter has the longest nights", "No moon helps most", "Watch the BoM space weather alerts"]),
    section("The wildflower season", ["Spring and summer bring the colour. Coastal heath at Freycinet flowers from about September, with the best of it in spring, and the bush on the east coast fills with wildflowers on the walks. The Tasmanian waratah flowers around November and December, with Mount Field a favourite place to find it.", "The alpine flowers come later, in summer, when the snow has gone: Cradle Mountain, Mount Field and Ben Lomond have wildflowers on the plateaus from about December to February. Pandani and cushion plants make a walk past Dove Lake or Lake Dobson worth the early start."], ["Freycinet heath from spring", "Waratahs around November", "Alpine flowers peak in summer"], {
      caption: "Wildflowers in Tasmania by season.",
      head: ["Place", "What to see", "Usual time"],
      rows: [
        ["Freycinet", "Coastal heath", "Spring, from about September"],
        ["Mount Field", "Waratahs, then alpine plants", "November to February"],
        ["Cradle Mountain", "Alpine flowers, pandani", "December to February"],
        ["Ben Lomond", "Plateau alpine flowers", "December to February"],
      ],
    }),
    section("Where to base yourself", ["For the south, Cockle Creek has camping in Southwest National Park, and Bruny Island has beach camps in South Bruny National Park as well as a holiday park at Adventure Bay. Near Hobart, the South Arm peninsula and the Tasman Peninsula have caravan parks and bush camps, and Freycinet has a booked camp at Richardsons Beach.", "For the mountains, Cradle Mountain has a holiday park near the park entrance, Mount Field has a campground by the visitor centre, and Ben Lomond sits above Launceston. National parks need a pass, so buy one at the visitor centre or online before you go. Our Tasmania rules guide covers the details, and the free camping guide lists the cheaper options."], ["Buy the parks pass", "Book Freycinet early", "Check road and snow reports"]),
    section("Camping in the cold", ["Winter nights in Tasmania go below freezing on the south coast and in the highlands, and the highlands can snow in any month. Take a sleeping bag rated well below the forecast, an insulated mat, thermal layers, a beanie and a hot drink to take to the aurora.", "Pack a few extras: a headlamp with a red light so you keep your night vision, a tarp, spare gloves and a warm base camp with a heater if you have powered sites. Tell someone where you are going when the roads are gravel and the signal is patchy."], ["Sleeping bag well below the forecast", "Red light headlamp", "Tell someone your route"]),
    { ...section("Plan the trip in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Filters cover Cost (Free or Paid), Dogs allowed, 4WD access, minimum rating, Online booking and Popular features such as toilets, drinking water, showers and campfires, and you can narrow the list to Tasmania.", "Save places to a collection, build a trip with Add stop and see the driving distance and time for each leg, with dates, notes and weather per stop. The whole directory sits inside the app, so search, filters and place details work with no signal. There is no account and no ads, and it runs on iPhone. Check the sign at the site and the park agency before you settle in."], ["Filter by cost and facilities", "Plan stops with weather", "Works with no signal"]), cta: true },
  ],
  sources: [
    { label: "Bureau of Meteorology: Space Weather Services", url: "https://www.sws.bom.gov.au/" },
    { label: "Parks and Wildlife Service Tasmania", url: "https://parks.tas.gov.au/" },
    { label: "Discover Tasmania", url: "https://www.discovertasmania.com.au/" },
  ],
});

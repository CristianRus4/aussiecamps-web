import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in Broken Hill?", "Not in the town itself. The council signs against camping in parks and on streets, so the free nights are on the highways out of town and at a few outback camps with a council or station sign. Check the sign and the stay limit before you unpack."],
  ["Where can you camp near Broken Hill?", "Kinchega National Park on the Darling River near Menindee and Mutawintji National Park are the main bush options, both with a booked, paid camping fee. Town caravan parks suit a night with power, and rest areas on the Barrier Highway suit a night in the vehicle."],
  ["Is Broken Hill in a different time zone?", "Yes. Broken Hill is in New South Wales but keeps South Australian time, so its clocks are half an hour behind Sydney all year. Check the time before you book a tour or a check-in."],
  ["What should I carry on the road to Broken Hill?", "Plenty of water, spare fuel range, a spare tyre and a plan for no phone signal. Distances are long, towns are small and the sealed road is fine, but a breakdown can mean a long wait in summer heat."],
] as const;

export default article({
  slug: "free-camping-broken-hill", publishAt: "2026-11-10",
  title: "Free Camping in Broken Hill: Outback NSW Stays That Cost Little",
  description: "Where to camp near Broken Hill: why the town itself is off limits, the national park and river camps, rest areas on the Barrier Highway, Silverton and how to plan the long drive.",
  category: "Camping guides", region: "New South Wales",
  places: ["Broken Hill", "Silverton", "Kinchega National Park", "Mutawintji National Park", "Menindee"],
  imageAlt: "Rawnsley Bluff in the Flinders Ranges",
  intro: "Broken Hill is the gateway to outback New South Wales, and it is not a free camping town. The council signs against sleeping in parks and on streets, so a van parked beside a lookout is likely to be moved on. The good news is that the country around it has plenty of cheap options: rest areas on the Barrier Highway, river camps at Kinchega and Menindee, Mutawintji in the ranges, and a few small free spots with a sign. Plan the water and the fuel first, because the nearest town is always a long way off.",
  related: ["camping-rules-new-south-wales", "flinders-ranges-camping-guide", "is-free-camping-legal-australia", "can-i-stay-overnight-at-a-rest-area-in-australia", "camping-water-planning"],
  sections: [
    section("Why Broken Hill itself is off limits", ["Broken Hill City Council does not allow camping in parks, reserves or on the street, and rangers do patrol the lookouts and the edge of town. The council would rather you used a caravan park, and there are several, with powered and unpowered sites and showers.", "That is a sensible base for a night or two while you see the Sculptures at Living Desert, the mining history and the galleries, then head out into the bush."], ["No camping in town parks", "Caravan parks are the base", "Look at the sign first"], {
      caption: "Where to stay around Broken Hill, in the order most people choose.",
      head: ["Where", "Cost", "Best for", "Watch for"],
      rows: [
        ["Town caravan parks", "Paid", "Showers, power, a base", "Book in school holidays"],
        ["Kinchega National Park", "Booked fee", "River camping, birds", "Roads close when wet"],
        ["Mutawintji National Park", "Booked fee", "Ranges, rock art", "Some sites need a tour"],
        ["Barrier Highway rest areas", "Free", "One night in the vehicle", "Signs against it mean go"],
        ["Station and pub camps", "Free or small fee", "A quiet night out of town", "Ask at the bar or the gate"],
      ],
    }),
    section("Kinchega and the Menindee Lakes", ["Kinchega National Park runs along the Darling River about two hours south east of Broken Hill. It has riverside camping, a historic woolshed and big birdlife when the lakes are full. Camping is booked and paid through the park system, and it is much cheaper than a holiday park.", "The lakes and the river rise and fall with the seasons, so how green the camp looks changes a lot from year to year. Wet weather closes the dirt roads quickly, so ask before you go."], ["Riverside camping, booked", "Closed when the roads are wet", "Good birdwatching"]),
    section("Mutawintji and the ranges", ["Mutawintji National Park is about 130 kilometres north east of Broken Hill and is run jointly with its Aboriginal owners. It has gorges, rock pools and Aboriginal rock art, and a campground at Homestead Creek. Some sites can only be seen on a guided tour, so check what is open before you plan the day.", "The last stretch of road is unsealed and can close after rain. Take plenty of water, because there is none to buy in the park."], ["Campground at Homestead Creek", "Some sites are tour only", "Unsealed road after the highway"]),
    section("Rest areas and the highways", ["The Barrier Highway between Broken Hill and Cobar, and the road towards South Australia, have rest areas built for driver fatigue. Treat them as a place to sleep in the vehicle for a night, not a campsite: no awning, no chairs, no second night.", "Silverton, the old mining town, has a pub and a few places that take campers for a small fee. Ask at the pub or the gate before you set up, because the rule can change from one visit to the next."], ["One night in the vehicle", "Do not block truck bays", "Ask at Silverton before you camp"]),
    section("Heat, water and the long drive", ["Summer days at Broken Hill regularly pass 40 degrees, nights in winter are cold, and the closest shop can be a hundred kilometres away. Carry more water than you think you need, keep the fuel above half, and let someone know your route.", "Phone signal fades fast outside the town. Download your maps and camp details before you leave, and do not leave the road to find a better camp."], ["Carry extra water", "Keep fuel above half", "Plan for no signal"]),
    { ...section("Plan the outback in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops, which helps in country where fuel is far apart.", "Council, pub and station camps are not all in the app, so check the council page or ask at the pub for those. AussieCamps runs on iPhone."], ["Filter by cost", "Check the distance between stops", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks: Kinchega National Park", url: "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/kinchega-national-park" },
    { label: "NSW National Parks: Mutawintji National Park", url: "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/mutawintji-national-park" },
    { label: "Broken Hill City Council", url: "https://www.brokenhill.nsw.gov.au/" },
    { label: "Destination NSW: Broken Hill and surrounds", url: "https://www.visitnsw.com/destinations/outback-nsw/broken-hill-and-surrounds" },
  ],
});

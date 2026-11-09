import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in Batemans Bay?", "Not in the town or on the beaches, where Eurobodalla council signs against overnight camping. Free and cheap camps are in the forests inland and along the highways, and the coast has booked national park campgrounds and holiday parks."],
  ["Where can you camp near Batemans Bay?", "Murramarang National Park to the north has beachside campgrounds such as Pretty Beach, Depot Beach and Pebbly Beach, all booked and paid. Holiday parks in Batemans Bay and Surf Beach suit powered sites, and state forests inland suit a low-cost bush night."],
  ["Can I see kangaroos on the beach?", "At Pebbly Beach in Murramarang, yes, wild eastern grey kangaroos graze near the sand. Keep your distance, do not feed them and keep food out of reach."],
  ["How far is Batemans Bay from Canberra?", "About a 2.5 hour drive down the Kings Highway, which makes it a popular weekend trip, so the coastal parks fill on long weekends and school holidays."],
] as const;

export default article({
  slug: "free-camping-batemans-bay", publishAt: "2026-11-10",
  title: "Free Camping Around Batemans Bay: Forests, Beaches and Cheap Stays",
  description: "Where to camp near Batemans Bay: why the town is off limits, Murramarang campgrounds, inland state forests, holiday parks and rest areas on the Princes and Kings highways.",
  category: "Camping guides", region: "New South Wales",
  places: ["Batemans Bay", "Murramarang National Park", "Pebbly Beach", "Mogo", "Kings Highway"],
  imageAlt: "SUBJECT_PLACEHOLDER",
  intro: "Batemans Bay is where Canberra meets the coast, and it fills on every long weekend. The town and its beaches do not allow free camping, but the country around it does better: beachside national park campgrounds to the north, state forests inland and rest areas along the highways. Book the coast in advance, use the forests for a cheaper night, and keep the highway stops for a night in the vehicle.",
  related: ["camping-rules-new-south-wales", "sydney-south-coast-camping", "is-free-camping-legal-australia", "can-i-camp-in-a-state-forest-in-australia", "can-i-stay-overnight-at-a-rest-area-in-australia"],
  sections: [
    section("What Batemans Bay allows", ["Eurobodalla Shire Council signs against camping and overnight parking in the town, on the beaches and in the reserves, and rangers do patrol in summer. Holiday parks in Batemans Bay and the nearby villages are the legal, easy choice.", "The good news is that the coast around the town has more bush camping than most places on the NSW south coast, so a free or cheap night is not far."], ["No camping in town", "Holiday parks are the base", "Bush camps nearby"], {
      caption: "Where to stay around Batemans Bay.",
      head: ["Where", "Cost", "Best for", "Watch for"],
      rows: [
        ["Holiday parks in the town", "Paid", "Power, showers, cabins", "Book school holidays"],
        ["Murramarang National Park", "Booked fee", "Beach camping, kangaroos", "No dogs; book early"],
        ["State forests inland", "Free or low fee", "A cheap bush night", "Fire bans and closures"],
        ["Highway rest areas", "Free", "One night in the vehicle", "No facilities"],
      ],
    }),
    section("Murramarang National Park", ["Murramarang is about 30 minutes north of Batemans Bay and has campgrounds right on the beach at Pretty Beach, Depot Beach and Pebbly Beach. Pebbly Beach is known for wild kangaroos that graze near the sand.", "Camping is booked and paid, and the dates around Christmas and Easter sell out. Dogs are not allowed in NSW national parks."], ["Beachside camps", "Wild kangaroos at Pebbly Beach", "Book for holidays"]),
    section("State forests and the hinterland", ["The forests behind the coast, around Mogo and along the Clyde River, are run by Forestry Corporation of NSW and some allow free or low-cost camping. Facilities are basic, so bring water and take your rubbish out.", "Check the forest's page for closures and fire bans before you drive, because logging and fire can close roads."], ["Basic facilities", "Bring water", "Check closures"]),
    section("Rest areas on the highways", ["The Princes Highway along the coast and the Kings Highway to Canberra have rest areas for driver fatigue. Use one for a night in the vehicle, not a campsite, and leave no rubbish.", "If the sign says no overnight stays, move on. The next forest or holiday park is rarely far."], ["One night in the vehicle", "Read the sign", "Take your rubbish"]),
    section("Busy dates and bushfire", ["Long weekends and school holidays fill the coast, and Canberra visitors arrive on Friday night. Midweek and the shoulder months are much easier.", "Bushfires and smoke have closed this part of the coast in recent summers, so check the fire danger rating and park alerts each morning and keep a second plan."], ["Book long weekends early", "Midweek is easier", "Check fire alerts"]),
    { ...section("Plan the south coast in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops.", "State forest and council camps are not all in the app, so check the Forestry Corporation and council pages for those. AussieCamps runs on iPhone."], ["Filter by cost", "Save places to a trip", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks: Murramarang National Park", url: "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/murramarang-national-park" },
    { label: "Forestry Corporation of NSW: camping and picnics", url: "https://www.forestrycorporation.com.au/visit/activities/camping-and-picnics" },
    { label: "Eurobodalla Shire Council", url: "https://www.esc.nsw.gov.au/" },
    { label: "Destination NSW: South Coast", url: "https://www.visitnsw.com/destinations/south-coast" },
  ],
});

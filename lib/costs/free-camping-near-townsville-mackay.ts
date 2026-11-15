import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free near Townsville and Mackay?", "Yes, mainly at roadside rest areas and a few council or small-town stopovers along the Bruce Highway, which usually have a time limit and no showers. Towns and beaches ban camping, and national park camps are booked and paid."],
  ["Are there crocodiles and stingers in this part of Queensland?", "Yes. Saltwater crocodiles live in estuaries, creeks and some coastal waters north of Rockhampton, and box jellyfish are around the coast from about October to May. Obey the warning signs, camp back from the water and swim only in enclosures where they exist."],
  ["When is the best time to camp around Townsville and Mackay?", "The dry season, roughly May to October, is the best: warm days, cool nights and little rain. The wet season, about November to April, brings heat, storms, cyclones and flooded roads."],
  ["What do national park camps cost in Queensland?", "Queensland park camps are booked online and usually cost about $7 to $10 a person a night, with some higher. You book before you go, and some camps close after storms."],
] as const;

export default article({
  slug: "free-camping-near-townsville-mackay", publishAt: "2027-01-03",
  title: "Free Camping Near Townsville and Mackay: Bruce Highway Stops, Park Camps and the Dry Season",
  description: "Where to camp around Townsville and Mackay: free Bruce Highway rest areas, cheap national park camps, crocodile and stinger warnings and the best months.",
  category: "Camping guides", region: "Queensland",
  places: ["Townsville", "Mackay", "Bowen", "Ayr", "Eungella"],
  imageAlt: "The Bruce Highway approaching Tully in North Queensland, with steam rising from the sugar mill and low cloud over the hills",
  intro: "Between Townsville and Mackay the free nights are on the Bruce Highway: rest areas and a few small-town stopovers made for drivers on the long run north. Camping in the towns and on the beaches is banned, and the national park camps near the coast are cheap but booked and paid. Go in the dry season, and watch for crocodile and stinger signs wherever there is water.",
  related: ["free-camping-queensland", "brisbane-to-cairns-drive", "townsville-to-mount-isa-drive", "safe-swimming-queensland-crocodiles-stingers", "camping-rules-queensland", "can-i-stay-overnight-at-a-rest-area-in-australia"],
  sections: [
    section("Where free camping works", ["The Bruce Highway is the free corridor. Transport and council rest areas along it are spaced for drivers who need a long break, and many allow an overnight stay for a limited time, often 20 or 24 hours. They have basic toilets at best and traffic noise at all hours.", "Towns along the coast, including Townsville, Bowen and Mackay, do not allow camping on streets, in parks or on beaches, and fines are issued. The towns with the best chance for a night in a van are the smaller ones, such as Ayr, Home Hill and Sarina, where a small stopover or showground camp may be on offer."], ["Rest areas have time limits", "Towns say no", "Small towns may have a stopover"], {
      caption: "Where to stay between Townsville and Mackay.",
      head: ["Where", "Cost", "Best for", "Main limit"],
      rows: [
        ["Bruce Highway rest areas", "Free", "A night on the drive", "Time limits; noise; not all allow overnight"],
        ["Small-town stopovers and showground camps", "Free to low cost", "Power or showers at some", "Check each town's rules"],
        ["National park camps (Cape Hillsborough, Eungella, Bowling Green Bay)", "About $7 to $10 a person a night", "Beaches and rainforest", "Booked online; crocodiles and stingers"],
        ["Caravan and holiday parks", "Paid", "Power, showers, pools", "Busy in winter school holidays"],
      ],
    }),
    section("National park camps worth booking", ["Cape Hillsborough National Park, north of Mackay, is a beach camp where wallabies and kangaroos graze at dawn. Eungella National Park, west of Mackay, has a rainforest camp at Broken River, where platypus are seen in the creek. Closer to Townsville, Bowling Green Bay National Park and the Paluma Range have bush camps.", "They are booked online, so reserve ahead in the dry season and for school holidays. Some close after rain or fire, so look at the park alerts before you drive."], ["Book online", "Platypus at Eungella", "Check alerts for closures"]),
    section("Crocodiles, stingers and the wet", ["Saltwater crocodiles live in estuaries, tidal creeks and some coastal waterholes in this region, and box jellyfish and Irukandji are in the sea from about October to May. Obey the signs, camp well back from the water and never clean fish at the edge. Our swimming guide has the details.", "The wet season, roughly November to April, brings storms, cyclones and sudden flooding that can cut the highway. A roadside rest area in a flood is not a good place to be."], ["Obey every warning sign", "Swim only in enclosures", "Wet season can cut the highway"]),
    section("Heat, dogs and when to go", ["The dry season from May to October is the sweet spot: sunny days and mild nights, though the school holidays bring crowds south from the cold. Summer is hot and humid with mosquitoes and sandflies, and swimming is limited.", "Dogs are not allowed in national parks, and many beaches and rest areas have their own signs. For long drives, carry plenty of water and plan fuel stops, because services between towns can be far apart."], ["Dry season is best", "Mosquitoes in summer", "No dogs in national parks"]),
    { ...section("Plan the Townsville to Mackay run in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Filter by Cost for Free or Paid, Dogs allowed, 4WD access or Online booking, and pick Queensland.", "Save places into collections, build the drive with Add stop and see the driving distance and time per leg, with dates, notes and weather for each stop. The full directory is inside the app, so search, filters and place details work with no signal, which helps on the long empty stretches. There is no account and no ads, and it runs on iPhone. Read the sign at each stop and check with the land manager if you are unsure."], ["Filter Free or Paid", "Add stop for each night", "No account, no ads"]), cta: true },
  ],
  sources: [
    { label: "Queensland Parks and Forests: camping", url: "https://parks.desi.qld.gov.au/" },
    { label: "Queensland Department of Transport and Main Roads: rest areas", url: "https://www.tmr.qld.gov.au/" },
    { label: "Townsville City Council", url: "https://www.townsville.qld.gov.au/" },
    { label: "Mackay Regional Council", url: "https://www.mackay.qld.gov.au/" },
    { label: "Tourism and Events Queensland", url: "https://www.queensland.com/" },
  ],
});

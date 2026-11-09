import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free at Jervis Bay?", "Realistically no. Jervis Bay has beautiful beaches but almost no free camping: the council and the national parks keep camping to booked and paid sites. Plan a campground in Booderee or a holiday park, and use the free time for the beaches."],
  ["Where can you camp at Jervis Bay?", "Booderee National Park has the main bush campgrounds, including Green Patch, Bristol Point and Cave Beach, and Jervis Bay National Park has smaller ones. Holiday parks at Huskisson, Vincentia and Hyams Beach suit powered sites and cabins."],
  ["Do I need a pass for Booderee National Park?", "Yes. Booderee is Commonwealth land owned by the Wreck Bay Aboriginal Community and charges a vehicle entry fee as well as a camping fee, so pay for both and keep the receipt in the windscreen."],
  ["Are dogs allowed at Jervis Bay?", "Not in Booderee National Park and not in most of Jervis Bay National Park. Some council beaches allow dogs on a lead, and signs say where, so check before you walk."],
] as const;

export default article({
  slug: "free-camping-jervis-bay", publishAt: "2026-11-10",
  title: "Free Camping at Jervis Bay: What to Do When There Is None",
  description: "Where to camp at Jervis Bay: why free camping is rare, the Booderee and Jervis Bay national park campgrounds, holiday parks at Huskisson and Hyams Beach and cheaper options inland.",
  category: "Camping guides", region: "New South Wales",
  places: ["Jervis Bay", "Booderee National Park", "Huskisson", "Hyams Beach", "Vincentia"],
  imageAlt: "Eden Beach on the Sapphire Coast",
  intro: "Jervis Bay has some of the whitest sand in Australia and almost no free camping. Shoalhaven council signs against sleeping in vehicles and parking overnight in the villages, and the best bush camps are booked and paid. The sensible plan is to book a Booderee or holiday park night, spend the days on the beach, and find your free night elsewhere on the south coast, inland or on the way.",
  related: ["camping-rules-new-south-wales", "sydney-south-coast-camping", "is-free-camping-legal-australia", "can-i-camp-on-the-beach-in-australia", "can-i-camp-on-aboriginal-land-without-a-permit"],
  sections: [
    section("Why there is no free camping", ["The villages around Jervis Bay are small, popular and busy all summer, and the council does not allow camping or overnight parking on streets, beaches or reserves. Rangers patrol, and the fines are real.", "The bush around the bay is national park or Commonwealth land, so camping there is booked and paid. That is the trade: the beaches are protected and the camps are well kept."], ["No camping in the villages", "Rangers patrol in summer", "Parks are booked and paid"], {
      caption: "Where to stay at Jervis Bay.",
      head: ["Where", "Cost", "Best for", "Watch for"],
      rows: [
        ["Booderee National Park campgrounds", "Booked fee plus entry", "Beaches, bush, wildlife", "Book months ahead; no dogs"],
        ["Jervis Bay National Park", "Booked fee", "Quiet bush nights", "Few sites; check closures"],
        ["Holiday parks (Huskisson, Vincentia, Hyams Beach)", "Paid", "Power, cabins, showers", "Full in summer"],
        ["Inland forests and rest areas", "Free or low fee", "A free night on the way", "Check each site"],
      ],
    }),
    section("Booderee National Park", ["Booderee is on the southern side of the bay and is owned by the Wreck Bay Aboriginal Community and managed jointly with Parks Australia. It has the clearest water, the whitest beaches and the best campgrounds in the area, including Green Patch, Bristol Point and Cave Beach.", "Camping is booked and paid, there is a vehicle entry fee as well, and the summer and Easter dates sell out months ahead. Dogs are not allowed in the park."], ["Book months ahead in summer", "Entry fee plus camping fee", "No dogs in the park"]),
    section("Jervis Bay National Park and the villages", ["Jervis Bay National Park has smaller camps on the northern shore and a beach that is easy to reach. Huskisson, Vincentia and Hyams Beach have holiday parks with powered sites and cabins, and are the easy way to stay when the park camps are full.", "Hyams Beach is a tiny village. Park outside the village in summer, because the street parking fills by mid morning."], ["Smaller camps, fewer sites", "Holiday parks in the villages", "Arrive early at Hyams Beach"]),
    section("Where to find a free night", ["You will not find one on the bay, so use the drive. The Princes Highway and the roads inland from Nowra have rest areas for one night in the vehicle, and the state forests to the west run free camping under Forestry Corporation rules.", "If you are heading south to the coast around Batemans Bay or Eden, or north to Sydney, our south coast guide has more camps and our free camping guide covers how the rules work."], ["Use rest areas on the highway", "State forests inland", "Check each site's rules"]),
    section("Busy dates and the weather", ["Summer holidays, Easter and long weekends are the busiest times. Midweek and the shoulder months of March to May and September to November are quieter, with warm water and fewer cars.", "Fire danger rises through the summer, and the national park can close at short notice. Check the park alerts before you drive."], ["Book summer early", "Shoulder months are quieter", "Check park alerts"]),
    { ...section("Plan the south coast in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops.", "Holiday parks and council camps are not all in the app, so check their own pages for those. AussieCamps runs on iPhone."], ["Filter by cost", "Save places to a trip", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks Australia: Booderee National Park", url: "https://parksaustralia.gov.au/booderee/" },
    { label: "NSW National Parks: Jervis Bay National Park", url: "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/jervis-bay-national-park" },
    { label: "Shoalhaven City Council", url: "https://www.shoalhaven.nsw.gov.au/" },
    { label: "Destination NSW: South Coast", url: "https://www.visitnsw.com/destinations/south-coast" },
  ],
});

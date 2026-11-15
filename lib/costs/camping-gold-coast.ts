import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where can you camp on the Gold Coast?", "At the council tourist parks along the coast, such as Burleigh Beach and Tallebudgera Creek, at private holiday parks, and at hinterland camps in Lamington and Springbrook. Sleeping in a vehicle on the street, in car parks or on the beach is not allowed."],
  ["Can you sleep in a campervan on the Gold Coast?", "Only in a camp or a holiday park. The City of Gold Coast bans camping in vehicles in public places, and rangers patrol, especially in summer and school holidays. Our campervan rules guide covers the details."],
  ["Is there national park camping near the Gold Coast?", "Yes. Springbrook National Park has a booked camping area at The Settlement, and the Lamington plateau has camps run by Binna Burra Lodge and O'Reilly's at Green Mountains, as well as bush camps for walkers. Book ahead for weekends and school holidays."],
  ["When is the best time to camp on the Gold Coast?", "Autumn and spring, when the days are warm and dry and the school holiday crowds are away. Summer is hot and humid with storms, and the winter nights in the hinterland can be cold."],
] as const;

export default article({
  slug: "camping-gold-coast", publishAt: "2026-11-17",
  title: "Camping on the Gold Coast: Holiday Parks, Hinterland Camps and Where to Base Yourself",
  description: "Where to camp on the Gold Coast: council tourist parks at Burleigh and Tallebudgera, hinterland camps at Lamington and Springbrook, transport and parking.",
  category: "Camping guides", region: "Queensland",
  places: ["Burleigh Heads", "Tallebudgera Creek", "Lamington National Park", "Springbrook National Park", "Binna Burra", "Mount Tamborine"],
  imageAlt: "View from the Best of All Lookout in Springbrook National Park, in the Gold Coast hinterland",
  intro: "The Gold Coast is a surf and theme park city on one side and a rainforest plateau on the other, and camping works well on both. The beachside camps are the council's own tourist parks, a short walk from the sand and the light rail. Behind the coast, the hinterland has quiet camps in Lamington and Springbrook, under tall trees and above the clouds. You cannot sleep in a vehicle on the street, so pick a camp, book early for school holidays and use the coast and the mountains as two different trips.",
  related: ["byron-noosa-gold-coast-campervan-rules", "free-camping-near-brisbane", "camping-rules-queensland", "brisbane-to-byron-bay-drive", "sydney-to-gold-coast-drive", "moreton-island-north-stradbroke-island-camping"],
  sections: [
    section("Where to base yourself", ["For the beaches, theme parks and restaurants, base yourself on the coast, at one of the council tourist parks or a private holiday park. For walks, waterfalls and cool nights, drive up to Lamington or Springbrook, which are about an hour from the coast. Many campers do both: two nights on the coast and two or three in the hills.", "Book early for school holidays, Easter and the summer weeks, when every park on the coast is full. Spring and autumn are quieter, and the weather is the best of the year."], ["Coast for beaches, hills for walks", "Book early for school holidays", "Autumn and spring are best"], {
      caption: "Where to camp around the Gold Coast.",
      head: ["Area", "Best for", "Camp type", "Book"],
      rows: [
        ["Burleigh Heads", "Surf beach, cafes, headland walk", "Council tourist park", "Online, well ahead"],
        ["Tallebudgera and Palm Beach", "Creek swimming, family camping", "Council tourist park", "Online, well ahead"],
        ["Springbrook", "Waterfalls, lookouts, cool air", "National park camping area", "Queensland Parks, online"],
        ["Lamington and Binna Burra", "Rainforest walks, wildlife", "Private campground and bush camps", "Operator or Queensland Parks"],
      ],
    }),
    section("Council tourist parks on the coast", ["The City of Gold Coast runs a group of tourist parks along the beach, including Burleigh Beach and Tallebudgera Creek, as well as parks at Currumbin Creek, Kirra Beach and Main Beach. They are council owned, a short walk from the sand, and have powered and unpowered sites, cabins, amenities and camp kitchens.", "Burleigh Beach is across the road from the surf, near the headland walk and the cafes of Burleigh Heads. Tallebudgera Creek sits on the creek, with swimming and paddling on the water and a more relaxed feel. Both fill early, and you book with Gold Coast Tourist Parks."], ["Burleigh Beach near the surf", "Tallebudgera Creek for swimming", "Book with Gold Coast Tourist Parks"]),
    section("Lamington and Springbrook", ["The Lamington plateau has camps for different kinds of trip. Binna Burra Lodge runs a campground beside the national park, and O'Reilly's runs the campground at Green Mountains. For walkers, the Illinbah bush camp is booked with Queensland Parks. All are surrounded by subtropical rainforest, with tall trees, birds and cool nights.", "Springbrook National Park has a booked camping area at The Settlement, with a limit of two nights and eight people per site, and walks to Purling Brook Falls and Natural Bridge. Dogs are generally not allowed in the national parks, and the roads up the mountains are steep and winding, so take care with a caravan or a large camper."], ["Binna Burra and O'Reilly's are private camps", "The Settlement: two nights, eight people", "Steep winding roads"]),
    section("Mount Tamborine and day trips", ["Mount Tamborine is a day trip rather than a camping base: a plateau of cafes, galleries, rainforest walks and a skywalk, about an hour from the coast. Stay on the coast or in Springbrook and drive up for the day.", "Other easy day trips from the coast are the Burleigh Heads headland walk, the Currumbin Wildlife Sanctuary, the beaches and creeks of the southern Gold Coast, and the hinterland waterfalls."], ["Tamborine is a day trip", "Burleigh headland walk", "Hinterland waterfalls"]),
    section("Transport and parking", ["The Gold Coast light rail, G:link, runs along the coast from Helensvale to Broadbeach South, and buses fill the gaps, so you can leave the van at camp and travel by tram. Parking is limited and metered in the beachside suburbs, and the street rules are enforced, so do not leave a camper on the road overnight.", "If you go up to the hinterland, fill the tank before the climb and check the road conditions after heavy rain, because storms can close tracks and bring down trees."], ["Light rail along the coast", "Metered parking near the beach", "Fuel up before the climb"]),
    section("Rules, heat and storms", ["The Gold Coast bans sleeping in vehicles in streets, car parks and on the beach, and fines are issued, so stay in a camp. Fire rules apply, and campfires are limited or banned at many camps, so check each park's rules and any fire bans before you light one.", "Summer is hot and humid, with strong afternoon storms. Stay out of creeks after heavy rain, swim between the flags and carry drinking water on walks. Our guide to wet weather camping has tips for rain."], ["No sleeping in vehicles in public", "Check fire bans", "Swim between the flags"]),
    { ...section("Find Gold Coast camps in AussieCamps", ["AussieCamps lists campgrounds, national parks and holiday parks around the Gold Coast and Scenic Rim, with each place's facilities, fees and rules as the agency publishes them. Filter by cost, dogs allowed or showers, sort by the nearest, and save the camps you like to a trip with the weather for each stop. Holiday parks listed by BookEasy can be booked from the app.", "National park camping and the council tourist parks are booked with the park agency or the council. AussieCamps runs on iPhone and is free to download, with in-app purchases."], ["Filter by showers and dogs", "Save camps to a trip", "Book with the agency"]), cta: true },
  ],
  sources: [
    { label: "Gold Coast Tourist Parks (City of Gold Coast)", url: "https://www.goldcoasttouristparks.com.au/" },
    { label: "Queensland Parks: Springbrook National Park camping", url: "https://parks.qld.gov.au/parks/springbrook" },
    { label: "Queensland Parks: Lamington National Park", url: "https://parks.qld.gov.au/parks/lamington" },
    { label: "Destination Gold Coast", url: "https://www.destinationgoldcoast.com/" },
    { label: "Binna Burra Lodge", url: "https://www.binnaburralodge.com.au/" },
  ],
});

import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in Alice Springs?", "Not in town. Alice Springs bans camping on streets, in the Todd River bed and in parks, so the options are a caravan park, a cheap park camp in the MacDonnell Ranges or a signed rest area on the Stuart Highway a good way out of town."],
  ["Where is the cheapest camping near Alice Springs?", "The bush campgrounds in the West and East MacDonnell Ranges, such as Ellery Creek Big Hole, Ormiston Gorge and Trephina Gorge. They charge a modest nightly fee per person, usually in the range of $10 to $20, and most are booked online."],
  ["Do I need a pass to camp in the Northern Territory parks?", "Visitors pay territory park fees, and the NT Parks Visitor Pass is the usual way to cover them, so check the Parks and Wildlife site before you go. Camping fees are separate from any entry or pass costs."],
  ["Is it too hot to camp near Alice Springs in summer?", "Often, yes. Days regularly pass 40 degrees from December to February, and shade is scarce. April to September is the comfortable season, with warm days and cold, clear nights that can fall below freezing in June and July."],
] as const;

export default article({
  slug: "free-camping-near-alice-springs", publishAt: "2027-01-11",
  title: "Free Camping Near Alice Springs: MacDonnell Ranges Camps, Highway Rest Areas and Desert Heat",
  description: "Where to camp near Alice Springs: cheap West and East MacDonnell Ranges camps, free Stuart Highway rest areas, the town bans, park fees, summer heat and water.",
  category: "Camping guides", region: "Northern Territory",
  places: ["Alice Springs", "West MacDonnell Ranges", "East MacDonnell Ranges", "Stuart Highway", "Ormiston Gorge"],
  imageAlt: "The Stuart Highway south of Erldunda in the Northern Territory, with a road sign listing Erldunda, Alice Springs and Darwin",
  intro: "You can camp free near Alice Springs, but not in Alice Springs. The town bans camping outside a caravan park, so the free nights are in signed rest areas on the Stuart Highway, and the best nights are cheap ones in the MacDonnell Ranges, where a gorge campground costs about the price of a coffee a person. Come between April and September if you can, carry more water than you think you need and book the popular camps online.",
  related: ["camping-rules-northern-territory", "red-centre-way-camping", "alice-springs-to-uluru-drive", "darwin-to-alice-springs-drive", "camping-near-uluru", "stargazing-camps-northern-territory"],
  sections: [
    section("What is free and what is cheap", ["Free camping around Alice Springs means a signed roadside rest area, where you can usually stop overnight for a short stay and then move on. They are along the Stuart Highway and a few other main roads, and most have a bin and not much else.", "Everything with a view is paid, but cheaply. The park campgrounds out of town charge a small fee per person, and a night under the ranges with a fire and a sky full of stars is hard to beat at that price. Visitors also cover territory park fees, usually through the NT Parks Visitor Pass."], ["Rest areas: free, short stay", "Park camps: a modest fee a night", "Camping in town is banned"], {
      caption: "Where you can stay around Alice Springs, how far it is and the main limit.",
      head: ["Where", "Drive from Alice Springs", "Cost", "Main limit"],
      rows: [
        ["Ellery Creek Big Hole campground", "About 1.5 hours west", "Low fee per person", "Cold swimming hole; busy in winter"],
        ["Ormiston Gorge campground", "About 1.5 to 2 hours west", "Low fee per person", "Booking advised in the cooler months"],
        ["Trephina Gorge Nature Park", "About 1 hour east", "Low fee per person", "Sandy 4WD tracks to the outer camps"],
        ["Stuart Highway rest areas", "North and south of town", "Free", "Short stays, signed sites only; few facilities"],
        ["Alice Springs caravan parks", "In town", "Paid", "The only legal option inside town"],
      ],
    }),
    section("The West MacDonnell Ranges", ["The western ranges, known as Tjoritja West MacDonnell National Park, are the classic Alice Springs side trip. Ellery Creek Big Hole, Ormiston Gorge and Redbank Gorge all have campgrounds with toilets and plenty of walking, and the sealed road runs about 130 km past Glen Helen. Serpentine Chalet Dam is a rougher, quieter bush camp that needs a high clearance four wheel drive.", "Most park camps are booked online, and a few take payment on site. Campfires are usually only allowed in the fireplaces provided and are banned on total fire ban days, so carry a camp stove and bring your own firewood, as collecting it in the park is not allowed."], ["Book the popular camps online", "Bring a stove and your own firewood", "Serpentine needs a 4WD"]),
    section("The East MacDonnell Ranges", ["The eastern ranges are quieter, with fewer people and a rougher feel. Trephina Gorge has a main campground that suits a normal car and outer camps for those with 4WD, and N'Dhala Gorge has a simple bush camp near its rock art. Arltunga Historical Reserve has camping beside the ruins of an old gold mining town.", "The roads are sealed to the nearer sites, then gravel or sand beyond. Check conditions with the rangers before you head to the outer camps."], ["Quieter than the west", "Sand and gravel after the bitumen", "Ask rangers about road conditions"]),
    section("Rest areas on the Stuart Highway", ["The Stuart Highway north and south of Alice Springs has signed rest areas a short drive apart. Where a sign allows overnight stops, you can park for the night. Where nothing is signed, treat the spot as a place to rest for a few hours, not to settle.", "Ti Tree, Aileron and Erldunda also have roadhouses with a paid camping area, showers and fuel, which are worth knowing about when the rest areas are full or the day has been long. Road trains use the highway at night, so park well off the shoulder."], ["Camp only where signed", "Roadhouses sell cheap camping and fuel", "Park well back from road trains"]),
    section("Heat, cold and water", ["Summer in the Red Centre is fierce, with days over 40 degrees, hot nights and scarce shade. Winter is the opposite: crisp blue days, then nights that can drop below freezing. Spring and autumn are the best of both.", "Carry at least ten litres of drinking water per person per day on bush trips, as bore water at some camps is not drinkable and tank water runs out. Fill your containers in town and keep spare in the vehicle in case you break down."], ["Best months: April to September", "Carry plenty of water", "Pack a warm sleeping bag in winter"], {
      caption: "What to expect through the year near Alice Springs.",
      head: ["Season", "Days", "Nights", "Camping"],
      rows: [
        ["Summer (December to February)", "Often over 40 degrees", "Warm to hot", "Hard going; avoid long walks"],
        ["Autumn (March to May)", "Warm and settled", "Mild to cool", "Very good"],
        ["Winter (June to August)", "Mild and sunny", "Can fall below freezing", "Popular; book early"],
        ["Spring (September to November)", "Warm to hot", "Mild", "Good; heat builds late"],
      ],
    }),
    { ...section("Plan the Red Centre in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Filters cover cost (Free or Paid), dogs allowed, 4WD access, minimum rating, online booking, popular features such as toilets and drinking water, and state or territory.", "Save places to a collection, add them to a trip with Add stop and see the driving distance and time between them, with dates, notes and weather per stop. The whole directory is inside the app, so search, filters and place details work with no signal in the desert. There is no account and no ads, and it runs on iPhone. Check the sign at the site and the land manager before you settle in."], ["Filter by Free or 4WD access", "Add stops and see each leg", "Works with no signal"]), cta: true },
  ],
  sources: [
    { label: "NT Parks and Wildlife: camping and parks", url: "https://parksandwildlife.nt.gov.au/" },
    { label: "NT Government: roads and driving", url: "https://nt.gov.au/driving" },
    { label: "Alice Springs Town Council", url: "https://alicesprings.nt.gov.au/" },
    { label: "Tourism NT: Red Centre", url: "https://northernterritory.com/uluru-and-the-red-centre" },
  ],
});

import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Which national park campsites sell out first in summer?", "The beach and coastal camps with a famous view: Tidal River at Wilsons Promontory, Green Patch at Booderee, Richardsons Beach at Freycinet, Lucky Bay at Cape Le Grand and Pebbly Beach at Murramarang. Most are booked solid for Christmas and January long before the school year ends."],
  ["What do I do if the campground I want is full?", "Look at the next camp along the same coast, a state forest, a smaller park campground or a holiday park, and check for cancellations in the week before you travel. Midweek nights and the weeks either side of the school holidays are far easier to book."],
  ["Is there a ballot for any summer campsites?", "A few busy parks have used ballots or special release rules for peak dates, and Tasmania's Freycinet is the one most campers hear about. Rules change from year to year, so read the park's own booking page before you plan around a ballot."],
  ["Can I just turn up and camp at these places?", "Almost never in summer. The famous campgrounds are booked online with a set number of sites, and rangers check bookings. Keep a backup booking or a plan for a nearby holiday park if you are travelling without a site."],
] as const;

export default article({
  slug: "national-park-campsites-sell-out-summer-australia", publishAt: "2026-11-16",
  title: "National Park Campsites That Sell Out Over Summer in Australia (and What to Book Instead)",
  description: "The famous national park campgrounds that sell out each summer, from Tidal River to Lucky Bay, and the quieter camps, state forests and holiday parks to book instead.",
  category: "Trip planning", region: "Australia",
  places: ["Wilsons Promontory", "Booderee", "Freycinet", "Cape Le Grand", "K'gari and Moreton Island"],
  imageAlt: "A white tent pitched among ferns and eucalypts at the Sealers Cove campsite in Wilsons Promontory National Park, Victoria",
  intro: "The campgrounds everyone has seen on Instagram are the ones that sell out first, and over Christmas and January that can mean the best sites are gone months ahead. If you missed out, you have more options than you think: a quieter camp along the same coast, a state forest, a hike-in site or a holiday park. Below are the big names state by state, what usually makes them hard to book and what to try instead.",
  related: ["christmas-summer-camping-australia-2026-27", "school-holidays-australia-2027", "camping-rules-victoria", "can-i-camp-in-a-state-forest-in-australia", "kgari-fraser-island-camping-permits", "esperance-camping-guide"],
  sections: [
    section("Why these camps fill so early", ["The summer favourites share a recipe: a beach or a view, a small number of sites and a short list of weeks when everyone wants to be there. When a campground has a few dozen sites and thousands of people hoping for Christmas, the booking system opens and the good dates vanish within hours.", "Most state agencies open bookings somewhere between six and twelve months ahead, and some release in batches, so the day a window opens matters more than the month you want to travel. Our guide to camping over Christmas and summer sets out how far ahead each state takes bookings, so this one sticks to the camps themselves and what to do when they are full."], ["Have a login ready before bookings open", "Midweek nights are easier than weekends", "Keep a backup plan in the same area"]),
    section("The famous camps by state", ["Victoria's best-known is Tidal River at Wilsons Promontory, a large beachside campground that is booked for Christmas and has minimum-stay rules in the peak weeks. In New South Wales, the beach camps at Murramarang, including Pebbly Beach where kangaroos graze by the sand, and Green Patch and Bristol Point at Booderee in the Jervis Bay area, are summer regulars. In the mountains, Thredbo Diggings campground in Kosciuszko National Park fills in January.", "In Queensland the hard-to-book list is the beach camping zones on K'gari and Moreton Island, which need both a vehicle access permit and a camping permit, and Cape Hillsborough near Mackay, where the camp sits behind the beach and wallabies feed at dawn. Western Australia's star is Lucky Bay in Cape Le Grand National Park near Esperance, with kangaroos on white sand. Tasmania's is Freycinet, where the Richardsons Beach and Honeymoon Bay camps have been tightly managed over summer, sometimes by ballot."], ["Tidal River: book for Christmas as soon as the window opens", "K'gari and Moreton Island need permits for the vehicle and the camp", "Freycinet peak dates have been run by ballot, so read the current rules"], {
      caption: "Camps that commonly sell out in summer, and what usually causes it.",
      head: ["State", "Campground", "Why it sells out", "Usually booked through"],
      rows: [
        ["Victoria", "Tidal River, Wilsons Promontory", "Big beach camp with minimum stays at Christmas", "Parks Victoria"],
        ["New South Wales", "Pebbly Beach, Murramarang", "Beach camp, kangaroos, easy from Sydney and Canberra", "NSW National Parks"],
        ["NSW (Commonwealth)", "Green Patch and Bristol Point, Booderee", "Jervis Bay's whitest sand", "Parks Australia"],
        ["New South Wales", "Thredbo Diggings, Kosciuszko", "Alpine river camp for summer walks and bikes", "NSW National Parks"],
        ["Queensland", "K'gari and Moreton Island beach zones", "Permit-limited beach camping", "Queensland Parks"],
        ["Queensland", "Cape Hillsborough", "Beach camp with wallabies at sunrise", "The campground's own booking page"],
        ["Western Australia", "Lucky Bay, Cape Le Grand", "Beach camp with kangaroos on the sand", "Parks and Wildlife WA"],
        ["Tasmania", "Richardsons Beach and Honeymoon Bay, Freycinet", "Few sites in a very popular park", "Parks and Wildlife Tasmania"],
      ],
    }),
    section("What to book instead", ["The trick is to stay on the same coast or in the same range and give up one thing. Near Wilsons Promontory, the hike-in camps at Sealers Cove and Johnny Souey Cove trade the car for a walk and a quieter night, and Cape Conran on the east Gippsland coast and the small camps around the Gippsland Lakes make good second choices. Near Murramarang, Depot Beach and Pretty Beach in the same national park give you the coast, and the Batemans Bay and Jervis Bay holiday parks catch the overflow.", "Near Cape Le Grand, Cape Arid National Park and Stokes Inlet are far quieter, with the Esperance holiday parks as the safe fallback. Near Freycinet, the Friendly Beaches camp and the holiday parks at Coles Bay and Bicheno are the usual answer. In Queensland, the Bribie Island and Cooloola camping zones are alternatives to Moreton, and Cape Palmerston is a quieter pick near Mackay. In the Snowy Mountains, Sawpit Creek near Jindabyne and the Jindabyne holiday parks take the pressure off Thredbo."], ["Hike-in camps trade comfort for quiet", "A second park on the same coast beats an empty-handed drive", "Holiday parks near the park are the safety net"], {
      caption: "Where to go when the big name is full.",
      head: ["If you wanted", "Try", "Trade-off"],
      rows: [
        ["Tidal River", "Sealers Cove hike-in, Cape Conran, Gippsland Lakes camps", "Walk in, or fewer facilities"],
        ["Pebbly Beach, Murramarang", "Depot Beach, Pretty Beach, Batemans Bay holiday parks", "More people or a paid park"],
        ["Green Patch, Booderee", "Bristol Point, Jervis Bay holiday parks", "Still popular, book early"],
        ["Lucky Bay", "Cape Arid, Stokes Inlet, Esperance holiday parks", "Longer drive or fewer facilities"],
        ["Richardsons Beach", "Friendly Beaches, Coles Bay and Bicheno holiday parks", "Further from the Freycinet walks"],
        ["K'gari or Moreton beach", "Bribie Island, Cooloola, North Stradbroke Island", "Permits still needed"],
      ],
    }),
    section("State forests, midweek nights and the shoulder weeks", ["State forests are the easiest way to find a bed at peak time, because many have first-come, no-booking camps for little or nothing. They are simpler, often with no showers and sometimes no water, and fire bans can close them, so keep an eye on the forest agency's notices. Our guide to state forest camping sets out the rules by state.", "Timing is the other lever. Mid-December before the school holidays begin, and the last week of January and February after they end, are far easier than Christmas week, and Tuesday to Thursday nights can be open when the weekend is full. A short stay that starts and finishes midweek often beats a long stay that nobody has room for."], ["No booking does not mean no rules", "Fire bans can close forest camps", "The weeks either side of school holidays are quieter"]),
    section("A plan for when everything is full", ["Book your first choice the moment the window opens, then book a refundable second choice nearby. Check the park's booking page in the week before you travel, because cancellations return sites to the pool, and keep your holiday park option saved on your phone with its phone number.", "Do not turn up hoping. Rangers check bookings at the popular camps, there is rarely any spare room, and a late drive to find a bed at a dark roadside is the worst way to start a holiday. If you do end up without a site, a rest area or a holiday park for one night is better than pushing on tired."], ["Book a refundable backup", "Check for cancellations a week out", "Save the holiday park's number offline"]),
    { ...section("Find a backup camp in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Filter by cost (Free or Paid), dogs allowed, 4WD access, minimum rating, online booking and popular features such as toilets, drinking water and showers, then narrow to a state or territory.", "Save the camps near your first choice to a collection, then build the trip with Add stop to see the driving distance and time between each leg, with per-stop dates, notes and weather. The whole directory is inside the app, so search, filters and place details work with no signal. There is no account and no ads, and it runs on iPhone. Check the sign at the site and the land manager's page before you settle in."], ["Save backups to a collection", "Filter by online booking", "Check the sign at the site"]), cta: true },
  ],
  sources: [
    { label: "Parks Victoria: Wilsons Promontory National Park", url: "https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park" },
    { label: "NSW National Parks: Murramarang National Park", url: "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/murramarang-national-park" },
    { label: "Parks Australia: Booderee National Park", url: "https://parksaustralia.gov.au/booderee/" },
    { label: "Queensland Parks: camping and permits", url: "https://parks.qld.gov.au/camping" },
    { label: "Explore Parks WA: Cape Le Grand National Park", url: "https://exploreparks.dbca.wa.gov.au/park/cape-le-grand-national-park" },
    { label: "Parks and Wildlife Tasmania: Freycinet National Park", url: "https://parks.tas.gov.au/explore-our-parks/freycinet-national-park" },
  ],
});

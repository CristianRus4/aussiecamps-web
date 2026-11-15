import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp on New Year's Eve in Australia?", "Yes, at booked campgrounds, holiday parks and festival camping grounds, but not wherever you like. Beach towns and popular parks run alcohol bans, rangers and council officers are out in numbers, and the good camps are booked for the week months ahead."],
  ["Which summer festivals have camping?", "Woodford Folk Festival in Queensland runs over the new year on its own grounds, Tamworth's Country Music Festival is in January and Port Fairy Folk Festival is in March, and each has camping or caravan parks nearby. Meredith in Victoria and Cygnet Folk Festival in Tasmania also have on-site camping. Check each festival's own site for current dates."],
  ["Can I bring alcohol to a festival campsite?", "It depends on the festival. Some allow it at the camping area, some limit amounts, and most ban glass and anything for sale inside. Read the festival's conditions of entry before you pack the esky."],
  ["What is the biggest danger camping at a summer festival?", "Heat. Shade, water and sunscreen matter more than the music. Fire bans can also stop cooking on a campfire, so take a gas stove and keep an eye on the fire danger rating."],
] as const;

export default article({
  slug: "new-years-eve-summer-festival-camping-australia-2026-27", publishAt: "2026-11-16",
  title: "New Year's Eve and Summer Festival Camping in Australia 2026-27",
  description: "Where you can camp on New Year's Eve in Australia, what alcohol bans and bookings mean, which summer festivals have camping and how to stay cool and safe on site.",
  category: "Trip planning", region: "Australia",
  places: ["New Year's Eve", "Woodford Folk Festival", "Tamworth", "Port Fairy", "Festival camping"],
  imageAlt: "Tents, a camper trailer and solar panels laid out on the ground at a bush campsite among casuarinas on the Queensland coast",
  intro: "New Year's Eve is the biggest camping night of the year in Australia, and it is also the one with the most rules: bookings are full early, popular beaches and parks ban alcohol and festival camping grounds have their own conditions. If you plan ahead, you can spend it on a beach, in a forest or in the middle of a folk festival. Below: NYE camping, the summer festivals that offer camping, and the heat and fire basics for a sleepless week on site.",
  related: ["christmas-summer-camping-australia-2026-27", "national-park-campsites-sell-out-summer-australia", "school-holidays-australia-2027", "campfires-camping-australia", "bushfire-safety-camping-australia", "camping-weather-safety-australia"],
  sections: [
    section("Camping on New Year's Eve", ["Treat New Year's Eve like Christmas: the best campgrounds are booked for the whole fortnight and holiday parks fill with families. If you do not have a site by December, a state forest or a holiday park a little inland is the sensible plan, and our guide to national park camps that sell out has ideas for places to try.", "Many parks and caravan parks set minimum stays for the new year, often a few nights either side, and some ask for a deposit that you lose if you cancel late. Read the booking page before you pay so you know how long you have to stay."], ["Book before school finishes", "Expect minimum stays over the new year", "Have a backup camp saved"]),
    section("Alcohol bans, noise and the beach rules", ["Rules are tighter on New Year's Eve than any other night. Several coastal councils declare alcohol-free zones along popular beaches and foreshores for the night or the whole summer, and some national park campgrounds ban alcohol or limit it to the camp itself. Rangers and police patrol the popular spots and can issue on-the-spot fines.", "Quiet hours still apply at most campgrounds, even on New Year's Eve, and fireworks are banned in parks and camping areas. Holiday parks usually run a quiet-hours policy with a curfew and may remove guests who cause trouble. If you plan to celebrate, pick a camp that welcomes groups, not one chosen for peace."], ["Check for alcohol-free zones on beaches", "Fireworks are banned in camping areas", "Rangers patrol on NYE"], {
      caption: "What to expect from the main kinds of place on New Year's Eve.",
      head: ["Where", "Alcohol", "Crowds", "Book by"],
      rows: [
        ["National park campground", "Often allowed at your site, banned in public areas", "Busy, rangers on patrol", "Months ahead"],
        ["Holiday park", "Allowed at your site, noise curfew applies", "Families and groups", "Months ahead"],
        ["State forest camp", "Usually allowed, no sale of alcohol", "Quieter but unpredictable", "Not usually bookable"],
        ["Beach or foreshore", "Often banned by the council", "Very busy", "No camping, day use only"],
        ["Festival camping ground", "Set by the festival's rules", "Large and lively", "Ticket and camp pass"],
      ],
    }),
    section("Summer festivals with camping", ["Woodford Folk Festival is the biggest: a six-day celebration at Woodfordia in the hinterland north of Brisbane, running through the new year and usually starting in late December, with camping on site and thousands of campers. Meredith Music Festival in Victoria is held in a paddock near Meredith in December with camping built in, and its tickets are famously hard to get. The Cygnet Folk Festival in Tasmania's Huon Valley is in January and offers camping nearby.", "The Tamworth Country Music Festival is in January, and the town fills with caravans and campers, so the caravan parks, showground and event camping areas are booked early. Port Fairy Folk Festival takes over the Victorian coastal town in March and offers camping through the festival. Check each festival's own site for dates, because most only confirm them when tickets go on sale."], ["Camp passes are often separate from tickets", "Festival sites can sell out before the line-up", "Dates are usually confirmed with ticket sales"], {
      caption: "Summer festivals that usually include camping, with usual timing.",
      head: ["Festival", "Where", "Usually", "Camping"],
      rows: [
        ["Woodford Folk Festival", "Woodfordia, Queensland", "Late December to New Year", "On site"],
        ["Meredith Music Festival", "Meredith, Victoria", "December", "On site"],
        ["Tamworth Country Music Festival", "Tamworth, New South Wales", "January", "Caravan parks, showground and event camping"],
        ["Cygnet Folk Festival", "Cygnet, Tasmania", "January", "Nearby and on site"],
        ["Port Fairy Folk Festival", "Port Fairy, Victoria", "March", "Festival camping"],
      ],
    }),
    section("Heat, fire bans and water", ["Summer festival campgrounds are hot, open and crowded, and heat is the risk that catches people out. Pitch under shade if you can, use a tarp or fly as a sunshade and keep your tent well vented so it does not turn into an oven. A cheap fan, a cooler with ice and a lot more water than you think you need make the week bearable.", "Fire danger rises through summer, and total fire bans can be declared on any hot, windy day. On those days you cannot use a campfire or, in some states, a solid-fuel or liquid-fuel stove, so bring a gas cooker and check your state fire agency before you cook. If a fire is burning near your camp, leave early. Our bushfire safety guide explains the ratings and warnings."], ["Take a gas stove for ban days", "Sunscreen, hat and a lot of water", "Know your exit if a fire is near"]),
    section("A short packing list for a festival week", ["Pack for a hot day and a cool night: a shade shelter, a ground sheet, ear plugs, a headlamp and a battery fan are worth more than the fancy extras. Bring more water than the festival sells, a first aid kit, sunscreen and insect repellent, and a powerbank for the phone.", "Mark your tent and track your car, because a field of identical tents is a hard place to find yours at 2 am. Keep valuables out of sight, lock the car and leave camp the way you found it. Pack out every rubbish bag, because festival grounds are cleaned for the next event, not for you."], ["Ear plugs and a headlamp", "Mark your tent so you can find it", "Pack out all rubbish"]),
    { ...section("Plan your summer camp in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. You can filter by cost (Free or Paid), dogs allowed, 4WD access, minimum rating, online booking and popular features such as toilets, drinking water, showers and campfires, then narrow the list to a state or territory.", "Save the camps near your festival or New Year's Eve plan to a collection, then build the trip with Add stop to see the driving distance and time per leg, with per-stop dates, notes and weather. The whole directory is inside the app, so search, filters and place details work with no signal. There is no account and no ads, and it runs on iPhone. Festival camping grounds are run by the festival, so check their own page and the sign at the site before you settle in."], ["Save backup camps near the festival", "Check weather in the app before you travel", "Read the festival's own camping rules"]), cta: true },
  ],
  sources: [
    { label: "Woodford Folk Festival", url: "https://woodfordfolkfestival.com/" },
    { label: "Tamworth Country Music Festival", url: "https://www.tcmf.com.au/" },
    { label: "Port Fairy Folk Festival", url: "https://portfairyfolkfestival.com/" },
    { label: "Meredith Music Festival", url: "https://www.mmf.com.au/" },
    { label: "NSW Rural Fire Service: total fire bans", url: "https://www.rfs.nsw.gov.au/fire-information/fires-near-me" },
    { label: "CFA: total fire bans and ratings", url: "https://www.cfa.vic.gov.au/warnings-restrictions/total-fire-bans-ratings-and-restrictions" },
  ],
});

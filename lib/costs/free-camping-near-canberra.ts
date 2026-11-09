import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in Canberra?", "No. The ACT has no free camping: vehicle camping is only allowed at booked campgrounds such as Cotter, Honeysuckle and Kowen, and camping on other public land without a permit is an offence. The free options start across the border in New South Wales."],
  ["Where is the closest free camping to Canberra?", "In New South Wales state forests, which allow free camping with no booking, and at some council camps in country towns around the Southern Tablelands and the Snowy Valleys, about an hour to two hours away."],
  ["Can I camp at Namadgi National Park?", "Yes, at booked campgrounds such as Honeysuckle, Orroral and Mount Clear, and bushwalkers can camp in remote parts. Park entry is free but the campgrounds need a booking and a fee."],
  ["Can I sleep in a campervan in Canberra?", "Not on the street or in parks. Use a holiday park or a campground, such as the showground camping at Exhibition Park, as your base."],
] as const;

export default article({
  slug: "free-camping-near-canberra", publishAt: "2026-11-09",
  title: "Free Camping Near Canberra: Booked ACT Camps and Free NSW Forests Nearby",
  description: "Where to camp near Canberra: why the ACT has no free camping, the booked camps at Cotter and Namadgi, and the free NSW forests and council camps a short drive away.",
  category: "Camping guides", region: "Australian Capital Territory",
  places: ["Namadgi National Park", "Cotter Campground", "Tallaganda", "Snowy Valleys", "Jindabyne"],
  imageAlt: "View from Mount Kosciuszko",
  intro: "There is no free camping in Canberra. The ACT only allows vehicle camping at booked campgrounds, and camping on other public land without a permit is an offence. The free nights are just over the border: New South Wales state forests allow free camping with no booking, and country councils on the Southern Tablelands and in the Snowy Valleys run free or cheap camps within an hour or two of the city.",
  related: ["camping-rules-act", "australian-alps-camping-route", "sydney-to-canberra-drive", "melbourne-to-canberra-drive", "can-i-camp-in-a-state-forest-in-australia"],
  sections: [
    section("The ACT: booked campgrounds only", ["Parks ACT lists every place you can camp: Cotter, Honeysuckle, Orroral, Mount Clear, Kowen and others. All need a booking and fee, and camping on public land elsewhere without a permit can bring a fine of up to 20 penalty units.", "Commercial holiday parks around the city are the easy base for a visit, with powered sites the park campgrounds do not offer."], ["Bookings and fees apply", "Fines up to 20 penalty units", "Holiday parks have power"], {
      caption: "Where you can stay near Canberra, how far it is, and the main limit.",
      head: ["Where", "Drive from the city", "Cost", "Main limit"],
      rows: [
        ["ACT park campgrounds", "20 to 60 minutes", "Booked fee", "Book ahead; some ban generators"],
        ["NSW state forests", "1 to 2 hours", "Free", "Check closures and fire bans"],
        ["Council camps in country towns", "1 to 2 hours", "Free or a small fee", "Each sets its own rules"],
        ["Holiday parks and showgrounds", "10 to 30 minutes", "Paid", "Book in school holidays"],
      ],
    }),
    section("Free camping just over the border", ["Forestry Corporation of NSW allows free camping in its state forests, with no booking, for up to four weeks. The forests east, south and west of Canberra, around Tallaganda, the Brindabella ranges and the Tumut and Batlow country, are the closest.", "They are first come, first served, basic, and can close for harvesting, burns or fire. Bring your own water and take your rubbish out."], ["Free, up to four weeks", "No booking", "Check closures first"]),
    section("Namadgi and the high country", ["Namadgi National Park, south-west of the city, has booked campgrounds at Honeysuckle, Orroral and Mount Clear, and walk-in camping for bushwalkers. Nights are cold, and the Orroral fire of 2020 burnt much of the park, so check each track.", "Further south, the Snowy Mountains and Jindabyne have lakeside camps and a different set of rules; the alps camping route guide covers them."], ["Booked camps in Namadgi", "Cold nights", "Check track status"]),
    section("Fire and winter", ["The ACT bushfire season runs from 1 October to 31 March, and on Total Fire Ban days no fires are allowed. Canberra winters are frosty, and the high country has snow, so check the forecast and road status before you head up.", "The best camping months are autumn and spring."], ["Fire season: October to March", "Frosts and snow in winter", "Best: autumn and spring"]),
    { ...section("Find camps near Canberra in AussieCamps", ["AussieCamps maps 7 ACT campgrounds, 372 NSW national park campgrounds and 869 NSW rest areas, each with the facilities, fees and rules the agency publishes. You can filter by cost, including free sites, save camps to a trip and see the driving distance between stops.", "State forest camping areas are not in the app yet, so use Forestry Corporation's pages for those. Place details are saved on the phone for use without signal, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["Filter by cost", "Rest areas and dump points", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks ACT: where to stay", url: "https://www.parks.act.gov.au/where-to-stay" },
    { label: "Forestry Corporation of NSW: camping and picnics", url: "https://www.forestrycorporation.com.au/visit/activities/camping-and-picnics" },
    { label: "ACT Emergency Services Agency: bushfire season", url: "https://esa.act.gov.au/be-emergency-ready/bushfires" },
    { label: "Visit Canberra", url: "https://www.visitcanberra.com.au/" },
  ],
});

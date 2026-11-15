import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Is there one national parks pass for all of Australia?", "No. Each state and territory runs its own pass, and the Commonwealth parks such as Uluru, Kakadu and Booderee sell their own tickets. A pass from one state does not work in another."],
  ["Which Australian states charge no entry fee for national parks?", "Victoria and Queensland charge no general vehicle entry fee at most parks, and the ACT does not charge at Namadgi. You still pay to camp, and some sites charge for extra things like sand island vehicle permits."],
  ["Is a Tasmanian Parks Pass worth it?", "For a week or more of park visits, yes. A daily pass costs about $49 a vehicle and the two-month holiday pass about $98, so it pays for itself on the second day, and you need a pass for nearly every national park in the state."],
  ["Do I need a pass if I only camp for one night?", "In some states camping does include the entry. In others, including Tasmania and Western Australia, you pay entry as well as the camping fee, so check the booking page and keep the receipt on the dashboard."],
] as const;

export default article({
  slug: "national-park-passes-australia-2026-27",
  title: "Australian National Park Passes 2026-27: Which Pass Is Worth It, by State",
  description: "National park passes in Australia by state for 2026-27: NSW, Victoria, Queensland, SA, WA, Tasmania, the NT and Commonwealth parks, with rough prices and which one is worth buying.",
  category: "Costs & budget", region: "Australia",
  places: ["NSW All Parks Pass", "Tasmania Parks Pass", "WA Parks Pass", "NT Parks Visitor Pass", "Uluru and Kakadu"],
  imageAlt: "Entrance to Friendly Beaches Campground in Freycinet National Park, Tasmania",
  intro: "Australia has no single national parks pass: every state sells its own, and several charge nothing at all for entry. Whether a pass pays off depends on where you go and how long you stay, and the answer is very different in Tasmania, where you need one almost everywhere, and in Victoria, where you do not. Below are the main passes by state with rough prices, then which one suits which kind of trip.",
  related: ["camping-fees-australia-2026", "camping-rules-tasmania", "camping-rules-western-australia", "camping-rules-northern-territory", "camping-rules-south-australia", "campervan-road-trip-budget-australia"],
  sections: [
    section("How passes work in Australia", ["A park pass is a vehicle entry ticket. It pays for you to drive into a national park, and in most states it is separate from the camping fee, which is paid per site or per person at the campground. A few states charge no entry fee at all, so the pass question only matters in some places.", "Prices rise a little each year and change on 1 July in several states, so the figures in this guide are approximate. Check the park agency's own page before you buy, and keep the receipt or number plate confirmation handy, because rangers check."], ["Entry and camping are separate fees", "Prices usually change on 1 July", "A pass is not valid across state borders"]),
    section("Passes by state and territory", ["New South Wales has an All Parks Pass at about $190 a year for one vehicle, and some parks have day fees of around $8 to $12 a vehicle, with higher charges in places like Kosciuszko. Victoria charges no general entry fee at most parks, and queues are for camping, not for the gate. Queensland charges no entry fee at most national parks, but you pay to camp and need a vehicle access permit on sand islands such as K'gari and Moreton Island.", "South Australia charges vehicle entry at many parks, about $12 to $15 a day, and sells a two-month and a 12-month multiple entry pass, plus a Desert Parks Pass for the outback tracks at around $200 or more. Western Australia charges about $17 a vehicle at the big parks like Karijini and Cape Range, with a four-week holiday pass and an annual All Parks Pass at about $130. Tasmania requires a Parks Pass for nearly every national park. The Northern Territory has a Parks Visitor Pass for non-residents, at about $60 for a year, and the ACT does not charge at Namadgi."], ["Tasmania: pass needed almost everywhere", "Victoria and Queensland: no general entry fee", "WA and SA: day fees add up on a long trip"], {
      caption: "Approximate vehicle entry options by state and territory, 2026-27.",
      head: ["State or territory", "Entry fee", "Main pass", "Roughly"],
      rows: [
        ["New South Wales", "About $8 to $12 a day at fee parks", "All Parks Pass", "About $190 a year"],
        ["Victoria", "None at most parks", "Not needed for most", "Free"],
        ["Queensland", "None at most parks", "Vehicle access permit on sand islands", "Permit fee applies"],
        ["South Australia", "About $12 to $15 a day at many parks", "Multi-park pass, Desert Parks Pass", "Two-month and 12-month options"],
        ["Western Australia", "About $17 a day at major parks", "Holiday Parks Pass, All Parks Pass", "About $130 for a year"],
        ["Tasmania", "About $49 a vehicle a day", "Holiday pass, annual pass", "About $98 for two months"],
        ["Northern Territory", "Visitor pass for non-residents", "Parks Visitor Pass", "About $60 for a year"],
        ["ACT", "None at Namadgi", "Not needed", "Free"],
      ],
    }),
    section("The Commonwealth parks", ["Uluru-Kata Tjuta, Kakadu and Booderee are Commonwealth parks, so the state passes do not apply. Uluru and Kakadu sell a multi-day visitor pass at around $40 an adult. Booderee, near Jervis Bay, charges a per-vehicle entry fee as well as the camping fee, and you pay both.", "Check the park's own website for current prices and passes, and buy before you travel if you can. Phone reception at the gate is poor, and buying on the day is slower than buying at home."], ["State passes do not cover these parks", "Uluru and Kakadu passes last several days", "Booderee: pay entry and camping"]),
    section("Which pass is worth it", ["A short trip in Victoria or Queensland needs no pass at all. A week in Tasmania needs the holiday pass, and the daily fee works out to more than the two-month pass after two days. A fortnight along the West Australian coast with Karijini, Cape Range and Cape Le Grand is worth the holiday pass, which beats paying by the day once you stack up several parks.", "In New South Wales, the All Parks Pass wins if you visit fee parks on more than around three weeks a year, and the day fee wins on a single weekend. In the Northern Territory, a visitor pass is usually worth it if you plan on Litchfield and the West MacDonnell Ranges. If you are in South Australia for a few parks, check the multi-park pass against the daily fee and the Desert Parks Pass if you are driving the outback tracks."], ["Add the days up before you buy", "Tasmania pays off within two days", "Single weekends rarely need an annual pass"], {
      caption: "A rough guide to the right pass by trip.",
      head: ["Trip", "Best option", "Why"],
      rows: [
        ["Week in Tasmania", "Holiday pass", "Daily fee adds up fast"],
        ["Two weeks along the WA coast", "Holiday Parks Pass", "Several fee parks in a row"],
        ["Weekend in NSW", "Day fee", "Annual pass is more than you need"],
        ["Year of NSW weekends", "All Parks Pass", "Pays off after several visits"],
        ["Victoria or Queensland", "No pass", "No general entry fee"],
        ["Top End road trip", "NT Visitor Pass", "Covers entry at the main parks"],
        ["Uluru or Kakadu", "Park pass", "Required, state passes do not apply"],
      ],
    }),
    { ...section("Plan your park nights in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Filter by cost (Free or Paid), dogs allowed, 4WD access, minimum rating, online booking and popular features such as toilets, drinking water and showers, then narrow to a state or territory.", "Save the parks you plan to visit to a collection and build the trip with Add stop to see the driving distance and time for each leg, with per-stop dates, notes and weather, so you can count the park days before you buy a pass. The whole directory is inside the app, so search, filters and place details work with no signal. There is no account and no ads, and it runs on iPhone. Check the park agency's page for the current pass price before you pay."], ["Count park days before you buy", "Save the parks you plan to visit", "Check the current price on the agency's page"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks: passes and fees", url: "https://www.nationalparks.nsw.gov.au/passes-and-fees" },
    { label: "Parks Victoria: fees and charges", url: "https://www.parks.vic.gov.au/about-us/fees-and-charges" },
    { label: "Queensland Parks: fees and permits", url: "https://parks.qld.gov.au/camping/bookings" },
    { label: "National Parks and Wildlife Service SA: park passes", url: "https://www.parks.sa.gov.au/book-and-pay/parks-passes" },
    { label: "Explore Parks WA: park passes", url: "https://exploreparks.dbca.wa.gov.au/park-passes" },
    { label: "NT Government: Parks Visitor Pass", url: "https://nt.gov.au/parks/visitor-pass" },
    { label: "Parks and Wildlife Tasmania: park passes and entry fees", url: "https://parks.tas.gov.au/explore-our-parks/know-before-you-go/park-passes-and-entry-fees" },
  ],
});

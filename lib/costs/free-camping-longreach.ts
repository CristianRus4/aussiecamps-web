import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in Longreach?", "Council rules apply, and the town prefers you use its camps and parks. There are cheap and free options in the area and along the highways, but check the sign and the stay limit before you unpack."],
  ["What is there to do in Longreach?", "The Australian Stockman's Hall of Fame, the Qantas Founders Museum, which tells the story of the airline's beginnings, Thomson River cruises and the outback shows. Most people spend two nights."],
  ["What route is Longreach on?", "The Capricorn and Landsborough highways, the main inland route from Rockhampton through Longreach and Winton to Mount Isa. It suits a campervan, with about a day's drive between the main towns."],
  ["When is the best time to camp in Longreach?", "May to September, when days are warm and nights are cool. Summer is very hot and storms can close dirt roads for days."],
] as const;

export default article({
  slug: "free-camping-longreach", publishAt: "2026-11-10",
  title: "Free Camping in Longreach: Cheap Stays in the Heart of Outback Queensland",
  description: "Where to camp in and around Longreach: council and river camps, showgrounds and caravan parks, free rest areas, what to see and how to plan the outback loop.",
  category: "Camping guides", region: "Queensland",
  places: ["Longreach", "Winton", "Barcaldine", "Thomson River", "Stockman's Hall of Fame"],
  imageAlt: "SUBJECT_PLACEHOLDER",
  intro: "Longreach is the capital of outback Queensland and the best base for the Stockman's Hall of Fame, the Qantas Founders Museum and the Thomson River. It is not a classic free camping town, but cheap and free stays are close: council camps, showgrounds, pub camps and rest areas along the highways. Plan one or two nights in town for the museums and the sunset cruise, then drive on to Winton or Barcaldine with water and fuel in hand.",
  related: ["queensland-outback-way", "camping-rules-queensland", "townsville-to-mount-isa-drive", "is-free-camping-legal-australia", "camping-water-planning"],
  sections: [
    section("What Longreach allows", ["Longreach Regional Council keeps camping to its own camps and the caravan parks, and signs against sleeping on streets and in parks. Outback councils generally welcome travellers who pay for a night in town, and the money keeps the museums and pubs open.", "A powered or unpowered site in a caravan park or at the showground is cheap by coastal standards, and you get a shower and a tap."], ["Camp where the sign allows", "Showgrounds are cheap", "Your night supports the town"], {
      caption: "Where to stay in and around Longreach.",
      head: ["Where", "Cost", "Best for", "Watch for"],
      rows: [
        ["Caravan parks", "Paid", "Power, showers, shade", "Book in the dry season"],
        ["Showground or council camp", "Low fee", "Cheap base in town", "Check the stay limit"],
        ["River or reserve camps", "Free or low fee", "Quiet night near the water", "Water level and wet roads"],
        ["Highway rest areas", "Free", "One night in the vehicle", "No facilities"],
      ],
    }),
    section("Two days in town", ["Plan the Australian Stockman's Hall of Fame for one half day and the Qantas Founders Museum, with its old aircraft, for another. A sunset cruise on the Thomson River is a classic way to end a day, and the outback shows are popular in the dry season.", "Longreach is also the best base for Winton and its dinosaur trail, about two hours north west."], ["Stockman's Hall of Fame", "Qantas Founders Museum", "Sunset river cruise"]),
    section("Rest areas on the highways", ["The Landsborough, Capricorn and Matilda highways have rest areas where one night in the vehicle is fine and a second is not. Look for the sign, keep the awning in and leave no rubbish behind.", "Between Longreach, Winton and Barcaldine the distances are long, so plan the day's driving and finish before dark, when kangaroos and cattle are on the road."], ["One night in the vehicle", "Finish driving before dark", "Take your rubbish"]),
    section("Winter days, summer storms", ["The best months are May to September, with warm days and cool nights. In summer the heat is severe and storms can close the dirt roads for days.", "If you plan to leave the sealed road, check the council's road report each morning and carry extra water. A stranded vehicle in the outback is a serious problem."], ["Visit May to September", "Check road reports", "Carry extra water"]),
    section("Water and fuel", ["Water is the main constraint. Fill your tank in town, keep spare drinking water, and use the free water points only where they are signed as drinkable. Fuel stations are far apart and may close early, so top up when you pass one.", "Mobile signal is patchy outside the towns. Share your route, and do not leave the road for a closer look at anything."], ["Fill water in town", "Top up fuel at every town", "Share your route"]),
    { ...section("Plan the outback loop in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops, which helps a lot when towns are 200 kilometres apart.", "Council, showground and pub camps are not all in the app, so check the council page for those. AussieCamps runs on iPhone."], ["Filter by cost", "Check the distance between stops", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Longreach Regional Council", url: "https://www.longreach.qld.gov.au/" },
    { label: "Outback Queensland Tourism", url: "https://www.outbackqueensland.com.au/" },
    { label: "Australian Stockman's Hall of Fame", url: "https://www.outbackheritage.com.au/" },
    { label: "Queensland Government: QLDTraffic", url: "https://qldtraffic.qld.gov.au/" },
  ],
});

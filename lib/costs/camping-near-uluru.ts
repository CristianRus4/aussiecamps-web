import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free at Uluru?", "No. Camping inside Uluru-Kata Tjuta National Park is not allowed, and Ayers Rock Resort's campground at Yulara is paid. Free or cheaper options are rest areas and roadhouses on the Lasseter Highway, an hour or more away."],
  ["Where can I camp near Uluru?", "Ayers Rock Campground at Yulara is the main place, with powered and unpowered sites. Roadhouses along the Lasseter Highway, such as Curtin Springs and Mount Ebenezer, offer camping for a fee and are an easy stop on the way."],
  ["Do I need a park pass for Uluru?", "Yes. Uluru-Kata Tjuta National Park charges an entry pass for visitors, which is valid for several days. Buy it online or at the gate and keep it with you."],
  ["Can I climb Uluru?", "No. The climb was permanently closed in October 2019 at the request of the Anangu traditional owners. The base walk, which takes a few hours, is the best way to see the rock."],
] as const;

export default article({
  slug: "camping-near-uluru", publishAt: "2026-11-10",
  title: "Camping Near Uluru: Where to Stay in and Around the Park",
  description: "Where to camp near Uluru: Ayers Rock Campground at Yulara, roadhouse camps on the Lasseter Highway, why there is no camping in the park and how to plan sunrise and sunset.",
  category: "Camping guides", region: "Northern Territory",
  places: ["Uluru", "Kata Tjuta", "Yulara", "Curtin Springs", "Erldunda"],
  imageAlt: "SUBJECT_PLACEHOLDER",
  intro: "Uluru is the one place where you cannot camp for free and rarely want to. Camping inside Uluru-Kata Tjuta National Park is not allowed, the only camp in the area is at Yulara, and everything else is a roadhouse an hour or more down the highway. Book your night at Ayers Rock Campground well ahead in the dry season, buy a park pass, and plan the days around sunrise and sunset, the base walk and Kata Tjuta.",
  related: ["alice-springs-to-uluru-drive", "adelaide-to-uluru-road-trip", "red-centre-way-camping", "can-i-camp-on-aboriginal-land-without-a-permit", "camping-rules-northern-territory"],
  sections: [
    section("Why you cannot camp in the park", ["Uluru-Kata Tjuta National Park is owned by the Anangu traditional owners and jointly managed with Parks Australia. Camping, fires and driving off the road are not allowed inside it. Rangers patrol, and the fines are heavy.", "The accommodation is at Yulara, a small resort village about 20 kilometres from the rock, so the camp, the shops and the fuel are all in one place."], ["No camping in the park", "Yulara is the base", "Rangers patrol"], {
      caption: "Where to stay for Uluru and what it costs.",
      head: ["Where", "Cost", "Best for", "Watch for"],
      rows: [
        ["Ayers Rock Campground, Yulara", "Paid", "Powered and unpowered sites", "Book months ahead"],
        ["Curtin Springs (Lasseter Highway)", "Fee", "Roadhouse camp, about an hour away", "Fuel and water; limited facilities"],
        ["Mount Ebenezer Roadhouse", "Fee", "Overnight on the way", "Check opening hours"],
        ["Erldunda Roadhouse", "Fee", "Stop where the highways meet", "A long drive from the rock"],
      ],
    }),
    section("Ayers Rock Campground", ["The campground at Yulara has powered and unpowered sites, a pool, a shop and showers, and is the closest place to sleep. It is much cheaper than the resort hotels and fills in the dry season from May to September, so book as early as you can.", "Yulara has a supermarket, fuel and a few restaurants, so you do not need to bring everything with you."], ["Powered and unpowered sites", "Pool and showers", "Book early in winter"]),
    section("Roadhouses on the Lasseter Highway", ["Curtin Springs, Mount Ebenezer and Erldunda are the usual roadhouse stops between Alice Springs and Uluru. Each has camping for a fee, a bar and fuel, and some have a small shop.", "They are the easy way to split the drive from Alice Springs, which is about five hours, and to avoid the busy times at Yulara."], ["Camp for a fee", "Fuel and a meal", "Split the drive from Alice Springs"]),
    section("Pass, sunrise and the base walk", ["You need a park pass to enter, valid for several days, which you can buy online or at the gate. Sunrise and sunset viewing areas fill early, so arrive well before the light.", "The climb is closed, and the base walk of about 10 kilometres is a great way to see the rock. Start early, carry water, and respect the signs asking you not to photograph some sacred places."], ["Buy a pass before you go", "Arrive early for sunrise", "Do the base walk"]),
    section("Heat, flies and the dry season", ["From May to September the days are warm and the nights are cold. In summer temperatures often pass 40 degrees and the walks close in the middle of the day. Carry water, wear a hat and fly net, and start walks at dawn.", "The Red Centre is remote. Fuel up at every opportunity and carry spare water."], ["May to September is best", "Walks close in the heat", "Carry water and a fly net"]),
    { ...section("Plan the Red Centre in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops.", "Yulara and roadhouse camps are not all in the app, so check their own pages for those. AussieCamps runs on iPhone."], ["Filter by cost", "Save places to a trip", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks Australia: Uluru-Kata Tjuta National Park", url: "https://parksaustralia.gov.au/uluru/" },
    { label: "Ayers Rock Resort: camping", url: "https://www.ayersrockresort.com.au/" },
    { label: "Northern Territory Government: road report", url: "https://roadreport.nt.gov.au/" },
    { label: "Tourism NT: Uluru", url: "https://northernterritory.com/uluru-and-surrounds" },
  ],
});

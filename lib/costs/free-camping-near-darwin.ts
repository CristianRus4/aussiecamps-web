import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free near Darwin?", "Almost not. The Northern Territory allows free camping only at signed rest stops for up to 24 hours. Park campgrounds at Litchfield, Kakadu and Mary River are booked and paid, and camping in Darwin itself is banned."],
  ["How much does camping near Darwin cost?", "Territory park campgrounds are booked online and cost roughly $10 to $20 per adult a night, and visitors need an NT Parks Visitor Pass. Private camps and caravan parks charge their own rates."],
  ["Is it safe to camp near Darwin in the wet season?", "The wet season, roughly November to April, brings storms, floods and closed roads, and many camps and tracks shut. The dry season, May to October, is the camping season."],
  ["Are there crocodiles at Top End campsites?", "Yes, in rivers, billabongs, estuaries and some creeks. Obey the warning signs, camp back from the water and never swim where signed."],
] as const;

export default article({
  slug: "free-camping-near-darwin", publishAt: "2026-11-09",
  title: "Free Camping Near Darwin: Rest Stops, Park Camps and the Dry Season",
  description: "Where to camp near Darwin: the few free rest stops, how Litchfield, Kakadu and Mary River camps work, crocodile cautions, and why the dry season matters.",
  category: "Camping guides", region: "Northern Territory",
  places: ["Litchfield National Park", "Kakadu", "Mary River", "Adelaide River", "Katherine"],
  imageAlt: "Florence Falls, Litchfield National Park",
  intro: "Free camping near Darwin is rare. The Northern Territory allows free overnight stops only at signed rest stops for up to 24 hours, park campgrounds at Litchfield, Kakadu and Mary River are booked and paid, and camping in Darwin itself is banned. The camps are cheap and well worth it, and the dry season from May to October is when the Top End is at its best.",
  related: ["camping-rules-northern-territory", "darwin-kakadu-litchfield-loop", "wet-season-camping-top-end-northern-wa", "darwin-to-alice-springs-drive", "can-i-stay-overnight-at-a-rest-area-in-australia"],
  sections: [
    section("Why free is rare here", ["Northern Territory rules limit free camping to signed rest stops with a 24-hour limit. Park camps are booked online at roughly $10 to $20 per adult a night, and visitors need an NT Parks Visitor Pass. Darwin's council area bans camping in parks, on beaches and on streets.", "The Top End is a long way from anywhere, so the free rest stops matter on the long drives, but the camps near Darwin are cheap enough that most people book them."], ["Rest stops: 24 hours", "Parks booked online", "No camping in Darwin"], {
      caption: "Where you can stay near Darwin, how far it is, and the main limit.",
      head: ["Where", "Drive from Darwin", "Cost", "Main limit"],
      rows: [
        ["Litchfield National Park camps", "1.5 to 2 hours", "$10 to $20 per adult", "Booked online; wet-season closures"],
        ["Kakadu camps", "2.5 to 3.5 hours", "Park fee plus camp fee", "Crocodiles; wet-season closures"],
        ["Mary River and Adelaide River camps", "1 to 2 hours", "Low cost", "Crocodiles; check roads"],
        ["Signed rest stops", "Along the highways", "Free", "24 hours; only where signed"],
      ],
    }),
    section("Litchfield, Kakadu and Mary River", ["Litchfield is the easy one: waterfalls, swimming holes and campgrounds within two hours of Darwin. Kakadu is bigger and further out, with its own park entry fee and camps at Mardugal, Merl and others. Mary River National Park is closer and quieter.", "Book your camp online ahead of time in the dry season, when the popular ones fill."], ["Litchfield: easy and close", "Kakadu: bigger, more remote", "Book ahead in the dry"]),
    section("The wet season", ["From about November to April storms, flooding and heat arrive. Roads and tracks close, many park camps shut and the Top End slows down. Our wet season guide explains what stays open.", "The dry season, May to October, brings sunny days and cool nights, and it is when most travellers come."], ["Wet: November to April", "Many camps close", "Dry: May to October"]),
    section("Crocodiles and water safety", ["Saltwater crocodiles live in rivers, billabongs, estuaries and some waterholes. Obey every sign, do not swim where a sign warns of them, camp back from the water and never clean fish or leave food at the edge.", "Swimming holes at Litchfield are checked and signed, but follow the sign rather than assuming."], ["Obey every crocodile sign", "Camp back from the water", "Follow the swimming signs"]),
    { ...section("Find camps near Darwin in AussieCamps", ["AussieCamps maps 102 Northern Territory park campgrounds, 211 roadside rest areas and 23 public dump points, each with the facilities and fees the agency publishes. You can filter by cost, save camps to a trip and see the driving distance between stops.", "Place details are saved on the phone for use without signal, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["Filter by cost", "Rest areas and dump points", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "NT Parks and Wildlife: camping", url: "https://parksandwildlife.nt.gov.au/" },
    { label: "NT Government: Parks Visitor Pass", url: "https://nt.gov.au/" },
    { label: "Kakadu National Park: camping", url: "https://parksaustralia.gov.au/kakadu/" },
    { label: "Tourism NT: Top End", url: "https://northernterritory.com/" },
  ],
});

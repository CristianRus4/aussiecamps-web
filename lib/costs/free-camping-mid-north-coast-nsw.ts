import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free on the NSW Mid North Coast?", "A little. The coast itself is mostly holiday parks and booked national park camps, and councils ban camping on beaches and streets. Free nights are mainly in state forests in the hills behind the coast and at a few signed stops on the highway, so plan on a mix of free and paid."],
  ["Where are the best national park camps near Coffs Harbour and Port Macquarie?", "Yuraygir, Hat Head, Crowdy Bay and Bongil Bongil national parks have beachside or bush campgrounds, and Dorrigo National Park has a rainforest base up the hill. Most are booked online and cost about $10 to $30 a night, and some close after rain or in fire season."],
  ["Can I sleep at a Pacific Highway rest area?", "Some are signed for overnight stays and some are not. Many are for a rest of a few hours only, so look at the sign at each one and keep to the time limit. Tents are generally not welcome."],
  ["When is the Mid North Coast busiest?", "School holidays, especially summer and Easter, and long weekends. Holiday parks and park camps book out months ahead, so for those weeks book early or camp inland."],
] as const;

export default article({
  slug: "free-camping-mid-north-coast-nsw",
  title: "Free Camping on the NSW Mid North Coast: Coffs Harbour and Port Macquarie",
  description: "Where to camp between Coffs Harbour and Port Macquarie: free state forest camps, cheap national park beaches, highway rest areas and the towns that say no.",
  category: "Camping guides", region: "New South Wales",
  places: ["Coffs Harbour", "Port Macquarie", "Nambucca Heads", "Kempsey", "Dorrigo"],
  imageAlt: "Cattai National Park campground, New South Wales",
  intro: "The Mid North Coast is a place to pay for the beach and look inland for the free nights. Between Coffs Harbour and Port Macquarie the coast is lined with holiday parks and booked national park camps, and the councils do not allow sleeping in vehicles on streets, headlands or beaches. The free options are state forests and a few highway stops, and the paid park camps are good value. Here is how to piece a trip together.",
  related: ["free-camping-new-south-wales", "brisbane-to-coffs-harbour-drive", "brisbane-to-sydney-drive", "camping-rules-new-south-wales", "can-i-camp-in-a-state-forest-in-australia", "can-i-stay-overnight-at-a-rest-area-in-australia"],
  sections: [
    section("What is free and what is not", ["Free camping on this stretch of coast is thin on the ground. The towns from Coffs Harbour down through Nambucca Heads, Kempsey and Port Macquarie are busy holiday destinations, and local rangers move people on from car parks, lookouts and beachfronts. A fine is a poor souvenir.", "The honest answer is to treat the coast as a paid stay and to look for free camping in the hills and the forest behind it. Holiday parks give you power and showers, the national park camps give you the beach, and the forests give you the quiet."], ["Coast: paid or booked", "Hills and forest: free", "No camping in towns or on beaches"], {
      caption: "Where to stay on the Mid North Coast.",
      head: ["Where", "Cost", "Best for", "Main limit"],
      rows: [
        ["State forest camps in the hinterland", "Free", "Quiet bush nights", "Bring water; closures after rain and in fire season"],
        ["National park camps (Yuraygir, Hat Head, Crowdy Bay, Bongil Bongil)", "About $10 to $30 a night", "Beaches and walks", "Booked online; busy in holidays"],
        ["Holiday parks in Coffs, Nambucca, Port Macquarie", "Paid", "Power, showers, families", "Full in summer"],
        ["Highway rest areas", "Free", "A night on the drive", "Check the sign; short stays only"],
      ],
    }),
    section("National park camps on the coast", ["Yuraygir National Park, north of Coffs, is the long wild beach coast with a string of walk-in and drive-in camps. Hat Head and Crowdy Bay, closer to Kempsey and Port Macquarie, have bush and headland camps, and Bongil Bongil sits just south of Coffs Harbour with a small camp near the beach.", "These camps are not free, but they are cheap for what you get. Book online, and expect a basic setup with toilets and sometimes cold water, and no power."], ["Cheap for what you get", "Book online", "Basic facilities"]),
    section("State forests and the hills", ["Behind the coast the ranges are full of state forest. Forestry Corporation NSW runs forest camps that are free to use, with no booking, and a long drive from the beach buys you quiet nights under tall eucalypts. Dorrigo, Bellingen and the hinterland roads are the gateway.", "Roads in the hills turn to mud quickly, so a conventional car may not manage after a storm. Check the Forestry Corporation page for closures and tree-felling work before you go."], ["No booking needed", "Check closures first", "Roads can be slippery after rain"]),
    section("On the Pacific Highway", ["The highway has rest areas, and some are signed for overnight stays while others are for short breaks. Treat them as a way to break a long drive, not as a campground, and stay only in the vehicle unless the sign says otherwise. If you are driving up from Sydney, the drive guides have the suggested stops.", "The sections near Coffs Harbour and Port Macquarie are the most heavily patrolled, so for those nights a holiday park is the safer bet."], ["Read the sign", "Stay in the vehicle", "Drive guides list the stops"]),
    section("Seasons, dogs and wet weather", ["Summer holidays and Easter fill everything, and the Mid North Coast can be hot and humid. Winter is mild and quiet, and spring brings whales close to the headlands. Heavy rain in any month can flood forest tracks and close camps.", "Dogs are not allowed in national parks and most reserves, and are allowed on a lead at some council beaches and in holiday parks. Check the sign before you walk."], ["Book early for holidays", "Winter is quiet", "No dogs in national parks"]),
    { ...section("Plan the Mid North Coast in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Filter by Cost for Free or Paid, Dogs allowed, 4WD access or Online booking, and by state.", "Save places to a collection and build the Coffs Harbour to Port Macquarie run with Add stop, with driving distance and time per leg, dates, notes and weather. The whole directory is inside the app, so it works with no signal, which matters in the hills. There is no account and no ads, and it runs on iPhone. Check the sign at the site before you settle in."], ["Filter by Cost and Dogs allowed", "Add stop for each night", "No account, no ads"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks: Yuraygir, Hat Head and Crowdy Bay", url: "https://www.nationalparks.nsw.gov.au/" },
    { label: "Forestry Corporation NSW: camping", url: "https://www.forestrycorporation.com.au/visit/camping" },
    { label: "Coffs Harbour City Council", url: "https://www.coffsharbour.nsw.gov.au/" },
    { label: "Port Macquarie-Hastings Council", url: "https://www.pmhc.nsw.gov.au/" },
    { label: "Destination NSW: North Coast", url: "https://www.visitnsw.com/destinations/north-coast" },
  ],
});

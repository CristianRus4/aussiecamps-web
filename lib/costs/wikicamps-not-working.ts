import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["WikiCamps is not working. What can I use instead?", "AussieCamps is an iPhone camping app for Australia with more than 74,000 places from park agencies, road authorities and public datasets. There is no app account to create, place details stay readable without signal, and your saved places turn into a trip with stops, dates and the distance for each leg."],
  ["Does AussieCamps make me sign in?", "No. There is no AussieCamps account or login screen. With iCloud turned on, your saved places, collections and trips sync privately through your Apple Account, and a purchase is restored through the same Apple Account."],
  ["Can I move my WikiCamps trip to AussieCamps?", "There is no import, so you rebuild the trip. Search for each stop, save it, then add the saved places to a new trip and drag them into the order you will drive. Most trips take a few minutes."],
  ["Is there a PC version of AussieCamps?", "No. AussieCamps is an iPhone app, so it suits people who plan and travel on the same phone. If you use Android, WikiCamps and other apps in our alternatives guide cover it."],
  ["Is AussieCamps made by WikiCamps?", "No. AussieCamps is a separate app made by a different company, Cntxt Labs. It has no link to WikiCamps."],
] as const;

export default article({
  slug: "wikicamps-not-working", publishAt: "2026-11-09",
  title: "WikiCamps Not Working? Try AussieCamps, the Camping App With No Sign-In (2026)",
  description: "WikiCamps asking you to sign in, forcing an update or playing up since the new version? Why travellers switch to AussieCamps and how to move your trip over.",
  category: "App guides", region: "Australia",
  places: ["Sign-in", "Forced updates", "Trip planner", "Switching apps"],
  imageAlt: "Tents pitched on open ground at a bush camp in the Victorian outback at sunset",
  intro: "If WikiCamps keeps asking you to sign in, blocks you with an update screen or has not felt right since the rebuilt app arrived, you do not have to spend a camping trip fixing it. AussieCamps is a camping app for iPhone that opens straight to the map: no account to create, more than 74,000 Australian places from official sources, and a trip planner built around the road you will actually drive. We make AussieCamps, so this guide is ours. It covers why travellers are switching, what AussieCamps does for them, how to move a trip over in a few minutes and where WikiCamps is still the better fit.",
  related: ["wikicamps-alternatives", "best-camping-app-australia", "camping-without-phone-signal", "best-free-camping-apps-australia"],
  sections: [
    section("Why travellers are leaving WikiCamps", ["Forced updates. Since March 2026, a WikiCamps version that falls too far behind refuses to open until you update it, and that screen tends to appear at a campsite with one bar of signal.", "Account sign-in. The rebuilt app needs a WikiCamps account, and plenty of travellers find themselves signing in again and again or waiting on a verification email in the middle of nowhere.", "Problems after updates. Trips and favourites that seem to vanish, features that moved or went away with the old version, and a map that behaves differently from the one people learned.", "No PC version. The Windows app was discontinued, which hurt anyone who planned their lap on a laptop."], ["Update screens at the campsite", "Sign-in loops and verification emails", "Old features gone with the old app"]),
    section("What AussieCamps does differently", ["AussieCamps opens straight to the map. There is no account, no login screen and no verification code: with iCloud turned on, your saved places, collections and trips sync privately through the Apple Account already on your phone.", "Its campgrounds, caravan parks, rest areas, dump points and drinking water points come from what park agencies, road authorities and public datasets publish, not from user listings, and more than 74,000 places sit on one map. The place directory is bundled with the app, so names, fees, facilities, opening hours and conditions stay readable with no signal. Weather, directions, Street View and photos need a connection.", "Every place opens with the detail that decides it: photos, a description, fees, terms and conditions, amenities grouped by type, current alerts, contact and booking details, the weather, and Street View to see the entrance from the road before you commit the van to the turnoff."], ["No account, no login screen", "74,000+ places from official sources", "Place details readable with no signal"]),
    section("A trip planner built for the road", ["The trip planner is the heart of the app. Add saved places as stops and drag them into the order you will drive. Every leg shows its distance, directions open to the next stop, and each stop carries its own date, arrival notes and weather. Tick stops off as visited while you travel, keep nearby alternatives attached for the days that change, and keep the packing list beside the itinerary. Itinerary details can sync to Calendar.", "Saved places look after themselves. Liked, Starred, Want to visit and Visited fill as you mark places, and you can build your own named collections for a state, a season or a shortlist. Filters answer a real question, such as free camping areas with toilets and drinking water around the Gold Coast, and can narrow by category, fee, rating, online booking, state and detailed access, amenity and service features."], ["Ordered stops with distance per leg", "Dates, notes and weather on every stop", "Collections that fill themselves"]),
    section("How to switch and move your trip over", ["There is no import from WikiCamps, so you rebuild the trip, and for most trips that takes a few minutes. Open your WikiCamps trip while it still loads, or write down the stops, then follow the steps below.", "Start with the stops that matter most, such as the nights you have booked or the long-drive days, and fill the gaps later. If a place you used in WikiCamps is not in AussieCamps, search the area for a campground or rest area nearby; filters for fee, facilities and access make that quick."], ["Rebuild, do not import", "Booked nights first", "Fill the gaps with filters"], {
      caption: "Moving a trip from WikiCamps to AussieCamps.",
      head: ["Step", "What to do"],
      rows: [
        ["1. Download", "Get AussieCamps from the App Store; it opens without an account"],
        ["2. Find each stop", "Search by place name, or move the map and search the visible area"],
        ["3. Save it", "Star each stop or add it to a collection for the trip"],
        ["4. Build the trip", "Create a trip, add the saved places and drag them into order"],
        ["5. Add the details", "Set a date and arrival notes on each stop and check the weather"],
      ],
    }),
    section("AussieCamps and WikiCamps compared", ["Both apps help you find somewhere to sleep around Australia, but they are built differently. WikiCamps grew on places its users add and runs on Android as well as iPhone. AussieCamps starts from official sources and is built around planning the trip.", "Be clear about what you give up. AussieCamps runs only on iPhone, lists fewer places than WikiCamps and has no traveller reviews, so some people keep both. If you use Android, our WikiCamps alternatives guide compares other options."], ["Official data versus user listings", "No account versus a required account", "iPhone only, no traveller reviews"], {
      caption: "How the two apps differ, from each app's own features in November 2026.",
      head: ["", "AussieCamps", "WikiCamps"],
      rows: [
        ["Account", "None; syncs through iCloud", "WikiCamps account required"],
        ["Where places come from", "Park agencies, road authorities and public datasets", "Mostly added by users"],
        ["Trip planning", "Ordered stops, dates, notes, weather and distance per leg", "Trips with stops"],
        ["Traveller reviews", "No", "Yes"],
        ["Devices", "iPhone", "iPhone, iPad and Android"],
      ],
    }),
    { ...section("Get AussieCamps", ["If WikiCamps has stopped working for you, AussieCamps is a free download from the App Store. Open it, search your next stop and save it, and you are planning again in minutes.", "Rules on the ground still come first. Follow the sign at the site, the land manager and any current fire or closure advice, whatever an app says. If your trip is in New Zealand, KiwiCamping is our app for there."], ["Free download, no account", "Search, save, plan", "Signs and land managers come first"]), cta: true },
  ],
});

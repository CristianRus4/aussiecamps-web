import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["WikiCamps is not working. What can I use instead?", "AussieCamps is a camping app for Australia with no account, no login and no ads. Campgrounds, rest areas and dump points from official sources sit on one map, place details open without signal, and saved places turn into a trip with dates and drive times."],
  ["Does AussieCamps make me sign in?", "No. There is no AussieCamps account or login screen. With iCloud turned on, your saved places, collections and trips sync privately through your Apple Account, and a purchase is restored through the same Apple Account."],
  ["Can I move my WikiCamps trip to AussieCamps?", "Yes, in a few minutes. Make a new trip, tap Add a stop and add each place by name, address or saved pin, then drag the stops into the order you will drive."],
  ["Can I look at my AussieCamps trip on a laptop?", "Yes. Share the trip with Send copy and open the link in any web browser to see its stops, dates and notes."],
  ["Is AussieCamps made by WikiCamps?", "No. AussieCamps is a separate app made by a different company, Cntxt Labs. It has no link to WikiCamps."],
] as const;

export default article({
  slug: "wikicamps-not-working", publishAt: "2026-11-09",
  title: "WikiCamps Not Working in Australia? Here's What You Can Do (2027)",
  description: "WikiCamps logging you out, showing ads or harder to use since the update? Why campers switch to AussieCamps, with no login, and how to move your trip over.",
  category: "App guides", region: "Australia",
  places: ["Sign-in", "Forced updates", "Trip planner", "Switching apps"],
  imageAlt: "Tents pitched on open ground at a bush camp in the Victorian outback at sunset",
  intro: "If WikiCamps keeps logging you out, shows ads in an app you paid for or has felt harder to use since its big update, you do not have to spend a camping trip fixing it. AussieCamps opens straight to the map: no account, no ads, campgrounds and rest areas from official sources, and a trip planner built around the road you will actually drive. We make AussieCamps, and here is why campers are switching, what AussieCamps does for them and how to move a trip over in a few minutes.",
  related: ["moving-from-wikicamps", "wikicamps-login-account", "does-wikicamps-work-offline", "wikicamps-alternatives", "best-camping-app-australia", "camping-without-phone-signal"],
  sections: [
    section("Why travellers are leaving WikiCamps", ["Harder to use. Plenty of long-time users say the new version takes more taps for simple jobs, and many are now asking whether WikiCamps is still worth keeping at all.", "Logged out. The WikiCamps login is tied to an account, and lots of users say the app signs them out at random, which is the last thing you want at a campsite out of range.", "Ads you did not expect. Many campers paid the WikiCamps price once and now find ads inside the app they bought, and some say favourite filters changed with the update.", "Update screens. Users say an out-of-date copy of WikiCamps can refuse to open until it is updated, and that screen tends to appear at a campsite with one bar of signal."], ["Harder to use since the update", "Logged out at the worst moment", "Ads in an app you paid for"]),
    section("What AussieCamps does differently", ["AussieCamps opens straight to the map. There is no account, no login and no email code, so nothing can sign you out at camp, and there are no ads. Your saved places, collections and trips sync quietly through the iCloud already on your iPhone.", "If you have wondered whether WikiCamps works offline, this is the difference: the whole AussieCamps directory is inside the app. Search, filters and place details work with no signal from the very first open, with no download step and nothing to sign into.", "Campgrounds, rest areas and drinking water points come from what park agencies, road authorities and public datasets publish, not from user listings. Every place opens with what you need to decide: fees, facilities, conditions, contact and booking details."], ["No account, no login, no ads", "Details work from the first open", "Places from official sources"]),
    section("A trip planner built for the road", ["If you miss the old WikiCamps trip planner, this one keeps things simple. Set your home once in the You tab, then start and finish any trip at Home in one tap. Tap Add a stop and one search finds campgrounds, your saved pins or any address, so even a favourite spot that isn't listed goes in. Every stop shows its distance and drive time, its own date, notes and weather, and you can tick stops off as you go.", "Filters answer a real question. Dogs allowed and 4WD access sit at the top of the filter sheet, and when you pick several, such as Toilets and Drinking Water, only places with all of them stay on the map. Tap Free to see free rest areas and stops. Liked, Starred, Want to visit and Visited fill as you mark places, and your own collections hold a state or a shortlist."], ["Start and finish at Home", "Add any address or pin", "Dogs allowed and 4WD access filters"]),
    section("How to switch and move your trip over", ["Here is how to move your trip over in a few minutes. Open your WikiCamps trip or jot down its stops, then rebuild it in AussieCamps with the steps below.", "Start with the nights you have booked and the long driving days, then fill the gaps. Every favourite spot can come with you: add it by name, type its address, or drop a pin on the map and add that to the trip. If you used to plan WikiCamps on a laptop, Send copy opens the finished trip in any web browser."], ["Add stops by name, address or pin", "Booked nights first", "Start at Home in one tap"], {
      caption: "Moving a trip from WikiCamps to AussieCamps.",
      head: ["Step", "What to do"],
      rows: [
        ["1. Download", "Get AussieCamps from the App Store; it opens straight to the map, with no account"],
        ["2. Make a trip", "Create a trip and tap Start at Home"],
        ["3. Add each stop", "Tap Add a stop and search a place name, an address or one of your pins"],
        ["4. Put them in order", "Drag the stops into the order you will drive and check each drive time"],
        ["5. Add the details", "Set a date and notes on each stop and check the weather"],
      ],
    }),
    section("AussieCamps and WikiCamps compared", ["Put WikiCamps vs AussieCamps side by side and they feel very different. WikiCamps grew on places its users add and is tied to an account. AussieCamps starts from official sources, has no account and no ads, and is built around planning the trip.", "Travelling as two? Share the trip with your partner and choose Collaborate: you both add, reorder and tick off stops, and changes show up within seconds. For family back home, Send copy gives them a link they can open without the app."], ["Official data versus user listings", "No account versus a required account", "Plan live with your partner"], {
      caption: "How the two apps differ.",
      head: ["", "AussieCamps", "WikiCamps"],
      rows: [
        ["Account", "None; syncs through iCloud", "WikiCamps account required"],
        ["Ads", "None", "Yes, in a paid app"],
        ["Where places come from", "Park agencies, road authorities and public datasets", "Mostly added by users"],
        ["Trip planning", "Start at Home, any address or pin, dates, notes, weather and drive time per stop", "Trips with stops"],
        ["Planning with a partner", "Edit the same trip live through iCloud", "Shared trip links"],
      ],
    }),
    { ...section("Get AussieCamps", ["If WikiCamps has stopped working for you, AussieCamps is free to download, with in-app purchases. Open it, search your next stop and add it to a trip, and you are planning again in minutes.", "Rules on the ground still come first. Follow the sign at the site, the land manager and any current fire or closure advice, whatever an app says. If your trip is in New Zealand, KiwiCamping is our app for there."], ["Free download, no account", "Search, save, plan", "Signs and land managers come first"]), cta: true },
  ],
});

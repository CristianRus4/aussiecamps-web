import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Does WikiCamps work offline?", "Yes, once you have downloaded its maps and trips. Many users say the new version still asks them to sign in again, which is hard with no signal. AussieCamps has no account, so there is nothing to sign in to."],
  ["How many trips can WikiCamps keep offline?", "Up to three planned trips, according to WikiCamps. AussieCamps keeps every trip you make on your phone, with its stops, dates and notes."],
  ["Why does WikiCamps ask me to sign in with no signal?", "Many WikiCamps users say the app logs them out, and signing back in needs a connection. AussieCamps has no login at all, so it opens straight to the map wherever you are."],
  ["Which camping app works without phone signal?", "AussieCamps keeps every place's fees, facilities and conditions, your saved places and your trips on your phone, with no download step and no account. Install it at home and it is ready for the bush."],
] as const;

export default article({
  slug: "does-wikicamps-work-offline", publishAt: "2026-11-14",
  title: "Does WikiCamps Work Offline? What Keeps Working With No Signal (2027)",
  description: "WikiCamps works offline after a download, but many users get logged out with no signal. AussieCamps keeps place details and trips on your phone, no sign-in.",
  category: "App guides", region: "Australia",
  places: ["No signal", "Offline Mode", "No sign-in", "Saved trips"],
  imageAlt: "A red dirt road through desert scrub with Kata Tjuta on the horizon in the Northern Territory",
  intro: "WikiCamps does work offline once you have downloaded its maps and trips, but many users say it asks them to sign in again just when the signal has gone. AussieCamps has no account at all, and every place's details, your saved places and your trips are already on your phone, with nothing to download first. We make AussieCamps, and this is what that means when you are out of range.",
  related: ["camping-without-phone-signal", "wikicamps-not-working", "best-free-camping-apps-australia", "best-apps-lap-of-australia", "moving-from-wikicamps"],
  sections: [
    section("Does WikiCamps work offline?", ["Yes, after a download. WikiCamps says its Offline Mode keeps the maps and up to three of your planned trips available without signal, as long as you download them before you go.", "The catch is the login. Many WikiCamps users say the new version keeps logging them out, and getting back in needs a connection, which is no fun at a campsite with no bars."], ["Download before you go", "Up to three trips offline", "Logouts are the common gripe"]),
    section("No account, so nothing to sign in to out bush", ["AussieCamps has no account. No email, no password, no code sent to your inbox, and nothing that can log you out. You open the app and you are on the map, whether you have five bars or none.", "Your saved places, collections and trips sync through the iCloud already on your iPhone, and that simply catches up next time you are back in range."], ["No login, ever", "Opens straight to the map", "iCloud catches up later"]),
    section("What AussieCamps keeps on your phone", ["The details of thousands of campgrounds, rest areas, dump points and water points come inside the app. Fees, facilities, conditions and the written guides are all readable with no signal.", "Your own stuff travels too: every saved place, every collection and every trip, with its stops, dates and notes. There is no region to choose, nothing to download before you leave, and no cap on how many trips come along."], ["Place details already on the phone", "Every trip comes with you", "Nothing to download first"], {
      caption: "What each app needs before you head out of range.",
      head: ["Out of range", "AussieCamps", "WikiCamps"],
      rows: [
        ["Account to sign in to", "None", "WikiCamps account"],
        ["Download before you go", "Nothing", "Maps and trips"],
        ["Trips you can take", "All of them", "Up to three"],
        ["Place details", "Already on your phone", "After the download"],
      ],
    }),
    section("Before the last bar of signal: a quick routine", ["Most trips lose coverage at a predictable spot, often the last town before a national park or a long highway run. Make that town your checkpoint.", "Check the forecast for your next few stops and open directions to the next one. Use the filters to save a backup for tonight, such as Free under Cost with Toilets for a free rest area. Put booking numbers and gate codes in each stop's note, and leave your route and an expected check-in time with someone at home."], ["Make the last town a checkpoint", "Save a backup for tonight", "Leave your route with someone"]),
    section("Why campers take AussieCamps out of range", ["It never logs you out, because there is no login. The details you need at a campsite are already on your phone, and so is every trip you have planned. There are no ads to load either.", "Planning is easy before you go: trips can start and finish at home, take any address or a pin you have named, and you can plan them with your partner live through iCloud."], ["Nothing to log out of", "Every trip on the phone", "Home, addresses and pins in trips"]),
    { ...section("Try AussieCamps before your next trip out of range", ["AussieCamps is free to download, with in-app purchases. Install it while you are at home, save the places on your route into a trip, and put the phone in flight mode for a minute to see what you will have in the bush.", "On remote routes, carry a personal locator beacon, extra water and fuel, and follow the land manager's closures and fire advice."], ["Free to download", "Test it in flight mode", "Carry a beacon on remote routes"]), cta: true },
  ],
});

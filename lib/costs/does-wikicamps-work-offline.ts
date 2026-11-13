import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Does WikiCamps work offline?", "Yes, once you have downloaded your trips. Many users say the new version still asks them to sign in again, which is hard with no signal. AussieCamps has no account, so there is nothing to sign in to."],
  ["How many trips can WikiCamps keep offline?", "Up to three planned trips, according to WikiCamps. AussieCamps keeps every trip you make on your phone, with its stops, dates and notes."],
  ["Why does WikiCamps ask me to sign in with no signal?", "Many WikiCamps users say the app logs them out, and signing back in needs a connection. AussieCamps has no login at all, so there is never a sign-in screen in your way."],
  ["What camping app works with no phone signal?", "AussieCamps keeps every place's fees, facilities and conditions, your saved places and your trips on your phone, with no download step and no account. Install it at home and it is ready for the bush."],
] as const;

export default article({
  slug: "does-wikicamps-work-offline", publishAt: "2026-11-14",
  title: "Does WikiCamps Work Offline? What Keeps Working With No Signal (2027)",
  description: "WikiCamps works offline after a download, but many users get logged out with no signal. AussieCamps keeps place details and trips on your phone, no sign-in.",
  category: "App guides", region: "Australia",
  places: ["No signal", "Offline Mode", "No sign-in", "Saved trips"],
  imageAlt: "A red dirt road through desert scrub with Kata Tjuta on the horizon in the Northern Territory",
  intro: "WikiCamps does work offline once you have downloaded your trips, but many users say it asks them to sign in again just when the signal has gone. AussieCamps has no account at all, and every place's details, your saved places and your trips are already on your phone, with nothing to download first. We make AussieCamps, and this is what that means when you are out of range.",
  related: ["camping-without-phone-signal", "wikicamps-not-working", "best-free-camping-apps-australia", "best-apps-lap-of-australia", "moving-from-wikicamps"],
  sections: [
    section("Does WikiCamps work offline?", ["Yes, after a download. WikiCamps says its Offline Mode keeps up to three of your planned trips available without signal, as long as you download them before you go.", "The catch is the login. Many WikiCamps users say they get logged out, and getting back in needs a connection, which is no fun at a campsite with no bars."], ["Download before you go", "Up to three trips offline", "Logouts are the common gripe"]),
    section("No account, so nothing to sign in to out bush", ["AussieCamps has no account. No email, no password, no code sent to your inbox, and nothing that can log you out, however far you are from a tower.", "Your saved places, collections and trips sync through the iCloud already on your iPhone, and that simply catches up next time you are back in range."], ["No login, ever", "No sign-in screen out bush", "iCloud catches up later"]),
    section("What AussieCamps keeps on your phone", ["The details of thousands of campgrounds, rest areas, dump points and water points come inside the app. Search, filters, fees, facilities and conditions all work with no signal.", "Your own stuff travels too: every saved place, every collection and every trip, with its stops, dates and notes. There is no region to choose, nothing to download before you leave, and no cap on how many trips come along."], ["Every place's details on the phone", "Every trip comes with you", "Nothing to download first"], {
      caption: "What each app needs before you head out of range.",
      head: ["Out of range", "AussieCamps", "WikiCamps"],
      rows: [
        ["Account to sign in to", "None", "WikiCamps account"],
        ["Download before you go", "Nothing", "Your trips"],
        ["Trips you can take", "All of them", "Up to three"],
        ["Place details", "Already on your phone", "After the download"],
      ],
    }),
    section("Before the last bar of signal: a quick routine", ["Most trips lose coverage at a predictable spot, often the last town before a national park or a long highway run. Make that town your checkpoint.", "Check the weather for your next few stops in the trip. Use the filters to save a backup for tonight, such as Free under Cost with Toilets for a free rest area. Put booking numbers and gate codes in each stop's note, and leave your route and an expected check-in time with someone at home."], ["Make the last town a checkpoint", "Save a backup for tonight", "Leave your route with someone"]),
    section("Why campers take AussieCamps out of range", ["It never logs you out, because there is no login. The details you need at a campsite are already on your phone, and so is every trip you have planned. There are no ads either.", "Planning is easy before you go: trips can start and finish at home, take any address or a pin you dropped, and you can plan them with your partner live through iCloud."], ["Nothing to log out of", "Every trip on the phone", "Trips from Home to any address"]),
    { ...section("Try AussieCamps before your next trip out of range", ["AussieCamps is free to download, with in-app purchases, so install it while you are at home and save the places on your route into a trip.", "On remote routes, carry a personal locator beacon, extra water and fuel, and follow the land manager's closures and fire advice."], ["Free to download", "Save your route into a trip", "Carry a beacon on remote routes"]), cta: true },
  ],
});

import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Is WikiCamps a subscription?", "No. WikiCamps is a one-off purchase of A$9.99 for each platform, and nothing renews."],
  ["Is WikiCamps a one-off payment?", "Yes. You pay A$9.99 once for iPhone or once for Android. Moving to the other platform means buying it again."],
  ["How much does WikiCamps cost in Australia?", "A$9.99, paid once per platform. The New Zealand app is a separate purchase."],
  ["Does WikiCamps have ads even after you pay?", "Yes. WikiCamps shows ads inside the app, including for people who have bought it."],
  ["What is a free alternative to WikiCamps?", "AussieCamps is free to download, with in-app purchases. It shows no ads, has no login and opens straight to a map of campgrounds, rest areas and dump points."],
  ["Do I need to pay again for WikiCamps on a new phone?", "Not if the new phone is on the same platform and you sign in to the same WikiCamps account. Switching between Android and iPhone means paying again."],
] as const;

export default article({
  slug: "is-wikicamps-free", publishAt: "2026-11-14",
  title: "Is WikiCamps Free? Price, Ads and Subscription in 2027",
  description: "WikiCamps isn't free: it costs A$9.99 once per platform, with no subscription, but it shows ads and needs a login. Meet the camping app with neither.",
  category: "App guides", region: "Australia",
  places: ["Pricing", "Ads", "Sign-in", "Switching apps"],
  imageAlt: "Tent, sleeping bag and backpack at an Australian campground",
  intro: "Is WikiCamps free? No. WikiCamps costs A$9.99, paid once for iPhone or once for Android, and it isn't a subscription. What bothers campers more than the price is what comes with it: ads in an app they paid for, and an account they keep having to sign back in to. We make AussieCamps, a camping app that is free to download, shows no ads and has no login at all.",
  related: ["wikicamps-vs-aussiecamps", "is-wikicamps-worth-it", "wikicamps-alternatives", "best-free-camping-apps-australia", "camping-fees-australia-2026"],
  sections: [
    section("How much does WikiCamps cost?", ["WikiCamps costs A$9.99. You pay once and keep it, with no monthly or yearly fee.", "The catch is that one purchase covers one platform. If you move from an Android phone to an iPhone, you buy it again. New Zealand is a separate app with its own price, so a trip across the Tasman means two purchases."], ["A$9.99, paid once", "One purchase per platform", "New Zealand is a separate app"], {
      caption: "What you pay, and what comes with it.",
      head: ["", "WikiCamps", "AussieCamps"],
      rows: [
        ["To get started", "A$9.99", "Free to download, with in-app purchases"],
        ["Ads", "Yes", "None"],
        ["Account and login", "Required", "None"],
        ["Subscription", "None", "None"],
      ],
    }),
    section("Is WikiCamps a subscription or a one-off payment?", ["It's a one-off payment. WikiCamps says plainly that there are no subscriptions or hidden fees, and that one account works on several devices. So if you replace an iPhone with another iPhone, sign in with the same account and you won't pay twice."], ["One-off payment", "No subscription", "Same account on a new phone"]),
    section("Does WikiCamps have ads?", ["Yes. WikiCamps shows ads inside the app, and they stay there after you have paid. That's the part many users find hard to accept: paying for an app and still seeing ads in it.", "WikiCamps has said it might offer a paid way to remove them. For now, the ads come with the app."], ["Ads stay after you pay", "No way to remove them yet", "A common reason people switch"]),
    section("Why campers want a free WikiCamps alternative", ["For most people it isn't really about ten dollars. Lots of WikiCamps users say the new version is harder to use, keeps logging them out and shows ads in an app they paid for. Being asked to sign in again at a camp with no signal is the one that hurts most.", "So when campers search for a free alternative, what they usually want is simpler: an app that opens straight away, with no login and no ads."], ["Harder to use since the big update", "Logged out with no signal", "Ads in a paid app"]),
    { ...section("AussieCamps: free to download, no ads, no login", ["AussieCamps is free to download, with in-app purchases, and you will never see an ad in it. There's no account to create and nothing to sign in to, so it can never log you out at a campsite.", "Open it and you're on the map. Tap Filters, pick what you need and the map shows only places that match. The Free filter shows free rest areas, water points, dump points and toilets, and filters like Dogs allowed and 4WD access sit right at the top. Tap a place to see its fees, facilities and conditions, then add it to a trip.", "Thousands of campgrounds, rest areas and dump points come from park agencies and road authorities, and place details, saved places and trips work without signal. Everything you save syncs through the iCloud already on your iPhone."], ["Free to download, no ads", "No account, no logouts", "Opens straight to the map"]), cta: true },
    section("Why switchers pick AussieCamps", ["No login, ever. There's no email code to wait for and no password to remember. Your trips and saved places simply follow you to your other iPhones through iCloud.", "Trips that fit how you really travel. Start at Home and finish at Home in one tap, then add campgrounds, any address or a pin you dropped on the map. Every stop shows the distance and drive time from the last one.", "Plan it together. Choose Collaborate when you share a trip and your partner can add, reorder and tick off stops with you, with changes showing up within seconds. Still no account for either of you."], ["No login, ever", "Home, addresses and pins in your trip", "Live trips with your partner"]),
  ],
});

import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can I see camping fees in my own currency in AussieCamps?", "Yes. Choose your currency in settings and set the conversion rate once. Reported fees then show in that currency alongside the Australian dollar figure."],
  ["How accurate is the converted price?", "It is a conversion at the rate you set, so it is a guide for judging a fee at a glance. Your card or bank applies its own rate, and the land manager can change the fee."],
  ["Do I need to update the conversion rate?", "A refresh from time to time keeps the figures useful, especially before a long trip. Set it to a rate you recently saw, such as your bank's or a currency app's."],
] as const;

export default article({
  slug: "aussiecamps-costs-in-your-currency", publishAt: "2026-12-27",
  title: "See Reported Place Costs in Your Own Currency in AussieCamps",
  description: "Visiting Australia? Choose your currency and set the rate once, and AussieCamps shows reported fees next to the Australian dollar price.",
  category: "App guides", region: "Australia",
  places: ["Currency setting", "Conversion rate", "Campground fees", "Visitor budget"],
  imageAlt: "Campsite facilities at Potters Gorge in Wellington National Park",
  intro: "If you are visiting Australia, AussieCamps shows reported place fees in your own currency. Choose the currency in settings, set the conversion rate once, and each fee appears in your money beside the Australian dollar figure. It makes it easy to judge a cheap night or a dear one without doing sums at the camp gate.",
  related: ["camping-fees-australia-2026", "australia-travel-cost-2026", "campervan-road-trip-budget-australia", "aussiecamps-place-details", "how-to-use-aussiecamps-filters"],
  sections: [
    section("Why it helps when you are visiting", ["Camp fees in Australia run from nothing at a rest area to a good deal more at a busy coastal park. If you think in pounds, euros or another kind of dollar, an Australian figure does not tell you much until you convert it.", "With your own currency shown beside it, a fee is easy to place at a glance. You can compare two campgrounds in seconds and keep a running feel for what each night is costing you."], ["Judge fees at a glance", "Compare campgrounds quickly", "Keep a feel for nightly costs"]),
    section("Choose your currency and set the rate", ["Open the settings in AussieCamps and choose your currency. Then set the conversion rate once, using a recent rate from your bank or a currency app.", "From then on, reported fees on place screens show in your currency alongside the Australian dollar figure. There is nothing to do place by place."], ["Pick the currency in settings", "Set the rate once", "Fees show in both currencies"], {
      caption: "How the setting works.",
      head: ["Step", "What to do"],
      rows: [
        ["Choose your currency", "In AussieCamps settings"],
        ["Set the conversion rate", "Use a recent rate from your bank or a currency app"],
        ["Read a place's fee", "Your currency beside the Australian dollar figure"],
        ["Update the rate", "From time to time, and before a long trip"],
      ],
    }),
    section("Treat the figure as a guide", ["Fees shown are as the land manager reports them, and land managers change fees from time to time. Treat the number as a good guide, and confirm on the booking page or at the gate.", "Your bank or card also uses its own rate and may add fees, so the amount that leaves your account can differ a little from the converted figure."], ["Fees can change", "Your card has its own rate", "Confirm at the booking page or gate"]),
    section("Keep the rate fresh and plan the budget", ["Exchange rates move, so refresh the rate you set from time to time, particularly before a long trip.", "Use the fees as one line in the bigger budget: fuel, food, park entry and a few nights in a paid camp or caravan park. A mix of free and cheap nights in between keeps the daily average comfortable."], ["Update the rate before a long trip", "Add park entry to the budget", "Mix cheaper and dearer nights"]),
    { ...section("Check costs in AussieCamps", ["Set your currency in AussieCamps and open any place to see its reported fee beside the Australian dollar price. The Cost filter narrows places to Free or Paid when you want to keep the budget tight.", "Fees and rules change, so check the sign at the site and the land manager before you settle in."], ["Open a place to see the fee", "Use the Cost filter", "Confirm with the land manager"]), cta: true },
  ],
  sources: [
    { label: "Parks Australia: Fees and passes", url: "https://parksaustralia.gov.au/" },
    { label: "Reserve Bank of Australia: Exchange rates", url: "https://www.rba.gov.au/statistics/frequency/exchange-rates.html" },
    { label: "Tourism Australia: Plan your trip", url: "https://www.australia.com/" },
  ],
});

import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["When is Easter 2027 in Australia?", "Good Friday is 26 March 2027, Easter Saturday 27 March, Easter Sunday 28 March and Easter Monday 29 March. Most states add school holidays around it, so check your state's dates."],
  ["Do I need to book camping for Easter?", "Yes, for popular national parks, coastal campgrounds and caravan parks. They often open bookings months ahead and fill within days, so book as soon as the dates are open."],
  ["When is Anzac Day 2027?", "Anzac Day falls on Sunday 25 April 2027. Some states give a substitute public holiday on the Monday, which can make a long weekend, so check your state."],
  ["What are the other long weekends in 2027?", "Australia Day is on Tuesday 26 January, and the King's Birthday long weekend is on Monday 14 June in most states. Labour Day dates vary by state, so check the state government's list."],
] as const;

export default article({
  slug: "easter-long-weekend-camping-australia-2027",
  title: "Easter and Long Weekend Camping in Australia 2027: When to Book and Where to Go",
  description: "Easter 2027 falls on 26 to 29 March, with Anzac Day and the King's Birthday after. When to book, where camps fill first, what to do if you miss out, and quieter alternatives.",
  category: "Trip planning", region: "Australia",
  places: ["National parks", "Coastal campgrounds", "Caravan parks", "Free camps"],
  imageAlt: "Tents and caravans filling a coastal campground on an Easter long weekend in Australia",
  intro: "Easter is the busiest camping weekend of the year in Australia: a four day weekend, school holidays in most states and autumn weather that is mild nearly everywhere. Good Friday 2027 is 26 March, and Easter Monday is 29 March. Anzac Day on Sunday 25 April and the King's Birthday on Monday 14 June add two more chances to camp, and the best sites go early.",
  related: ["school-holidays-australia-2027", "camping-fees-australia-2026", "choosing-campsite-australia", "can-i-camp-in-a-national-park-without-booking-in-australia", "is-free-camping-legal-australia", "camping-weather-safety-australia"],
  sections: [
    section("The 2027 dates", ["Easter 2027 runs from Good Friday on 26 March to Easter Monday on 29 March, with Easter Sunday on 28 March. School holidays in most states cluster around it, and they differ by state, so the school holidays guide has the dates. Anzac Day is Sunday 25 April, and some states give a substitute public holiday on the Monday. The King's Birthday is on Monday 14 June in most states.", "Public holiday dates differ by state and some are not national, so confirm yours with the state government before you book."], ["Good Friday 26 March", "Anzac Day Sunday 25 April", "King's Birthday Monday 14 June"]),
    section("When to book", ["Popular national park campgrounds and coastal caravan parks open bookings months ahead and fill within days of release, so decide where you want to go and set a reminder. Some parks release Easter dates earlier than other times of year. If bookings are not open, check the park page for the opening date.", "Free camps and rest areas cannot be booked, and the best ones fill by Thursday afternoon. Arrive early, and read the rules for overnight stays in your state."], ["Book as soon as dates open", "Free camps fill by Thursday", "Arrive early"]),
    section("Where to go and what to do if you miss out", ["If the coastal parks are full, look inland and a little further out: inland rivers, lakes and bush camps are often quieter, and mid-week or Sunday nights are easier than the Friday and Saturday peak. A non-bookable campground is a backup, but plan another option in case it is full.", "The camping fees guide covers what camps cost, the choosing a campsite guide covers what to look for, and the national park guide covers when you can camp without booking."], ["Look inland or further out", "Have a backup", "Sunday nights are easier"]),
    section("Weather and fire", ["Autumn is mild in most of the country, but storms, cold nights and fire bans still happen, and the north can still be in the wet season. Check the forecast and fire danger rating before you go, and the camping weather safety guide covers what to carry.", "If a total fire ban is declared, campfires are not allowed, and some campgrounds close, so check the park alerts."], ["Check forecast and fire ratings", "Cold nights in the south", "Fire bans can close camps"]),
    { ...section("Plan the weekend in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Save a shortlist of places, build the drive as ordered stops and it shows the distance, drive time and forecast for each leg.", "The iPhone app is free to download, with in-app purchases."], ["Save a shortlist of places", "Forecast for each arrival day", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Australian Government: Public holidays", url: "https://www.australia.gov.au/public-holidays" },
    { label: "Wikipedia: Public holidays in Australia", url: "https://en.wikipedia.org/wiki/Public_holidays_in_Australia" },
  ],
});

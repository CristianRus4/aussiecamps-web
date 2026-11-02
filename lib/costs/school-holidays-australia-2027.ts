import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["When are the Easter school holidays in 2027?", "It depends on the state. Victoria and Queensland break from Friday 26 March to Sunday 11 April, so Easter (26 to 29 March) falls at the start of their holidays. New South Wales, South Australia, Western Australia and Tasmania finish term 1 on Friday 9 April, after Easter, and go back between 26 and 29 April."],
  ["When do the 2027 winter school holidays start?", "Victoria and Queensland finish term 2 on Friday 25 June and return on Monday 12 July. New South Wales, South Australia, Western Australia and Tasmania finish on Friday 2 July and return on 19 or 20 July, so the winter peak runs for about four weeks across the country."],
  ["Which 2027 holiday is busiest for camping?", "Summer is the longest, but the autumn break is the most crowded on the east coast: Easter falls on 26 to 29 March, inside the Victorian and Queensland holidays, and the other states break from 10 April through the Anzac Day long weekend. For northern Australia, the winter holidays are the peak, because they fall in the dry season."],
  ["How far ahead can I book a campsite for the 2027 school holidays?", "Parks Victoria releases campsites four times a year, about six to nine months ahead; stays from 1 March to 30 June 2027 were released on 28 and 30 September 2026. WA parks take bookings up to 180 days before arrival. Check the park agency for your state when you know your dates."],
] as const;

export default article({
  slug: "school-holidays-australia-2027", publishAt: "2026-11-12",
  title: "School Holidays 2027 in Australia by State: Dates and Camping Peaks",
  description: "2027 school holiday dates for every state, the long weekends, and when campgrounds book out: Easter in late March, autumn, winter, spring and summer.",
  category: "Trip planning", region: "Australia",
  places: ["School holidays", "Long weekends", "Easter 2027", "Campsite bookings"],
  imageAlt: "Tents and cars at the Tidal River campground in Wilsons Promontory National Park, Victoria, under Mount Oberon",
  intro: "In 2027, Victoria and Queensland break for autumn from 26 March to 11 April, which takes in Easter on 26 to 29 March, while New South Wales, South Australia, Western Australia and Tasmania break from 10 April to late April. Winter holidays run from 26 June in Victoria and Queensland and from 3 July elsewhere, and spring from 18 or 25 September. Campgrounds near the cities fill first in those weeks, so book as soon as your park agency opens the dates. We read each education department's 2027 calendar on 3 November 2026.",
  related: ["christmas-summer-camping-australia-2026-27", "camping-fees-australia-2026", "holiday-park-prices-australia-2026", "best-time-camping-australia"],
  sections: [
    section("2027 term dates by state", ["The table gives the last day of each term and the first day of the next for government schools; the holiday is the gap between them. Independent and Catholic schools set their own dates, and pupil-free days can add a day at either end.", "Two groups emerge. Victoria and Queensland break a week earlier for autumn, winter and spring. New South Wales, South Australia, Western Australia and Tasmania break together for winter and spring. Queensland ends the year first, on 10 December."], ["Two groups of states", "Queensland ends the year on 10 December", "Private schools differ"], {
      caption: "2027 government school terms: last day of term, then first day back. From each education department, read 3 November 2026.",
      head: ["State", "Autumn break", "Winter break", "Spring break", "Year ends"],
      rows: [
        ["New South Wales", "9 April to 29 April", "2 July to 20 July", "24 September to 11 October", "17 December"],
        ["Victoria", "25 March to 12 April", "25 June to 12 July", "17 September to 4 October", "17 December"],
        ["Queensland", "25 March to 12 April", "25 June to 12 July", "17 September to 5 October", "10 December"],
        ["South Australia", "9 April to 26 April", "2 July to 19 July", "24 September to 11 October", "10 December"],
        ["Western Australia", "9 April to 26 April", "2 July to 19 July", "24 September to 11 October", "16 December"],
        ["Tasmania", "9 April to 26 April", "2 July to 19 July", "24 September to 11 October", "16 December"],
      ],
    }),
    section("The end of the summer break", ["The 2026-27 summer holidays end at different times. Victoria, Queensland and South Australia go back on Wednesday 27 January 2027, Western Australia on Monday 1 February, New South Wales (Eastern division) on Wednesday 3 February and Tasmania on Thursday 4 February. Western division schools in far-west New South Wales return on 10 February.", "The last week of January is busy everywhere because of the Australia Day public holiday on Tuesday 26 January. After that, the campgrounds near Melbourne, Brisbane and Adelaide empty first, while the New South Wales and Tasmanian coasts stay busy into February."], ["Australia Day: Tuesday 26 January", "Three states return on 27 January", "NSW and Tasmania stay busy into February"]),
    section("Easter and the autumn break", ["Easter 2027 runs from Good Friday 26 March to Easter Monday 29 March. In Victoria and Queensland it falls at the start of the school holidays, so expect Easter campgrounds to fill and stay busy for two weeks. In the other states Easter falls in term time, and their holidays start on Saturday 10 April.", "Anzac Day is Sunday 25 April, and New South Wales, Queensland and Western Australia add a public holiday on Monday 26 April. For New South Wales, South Australia, Western Australia and Tasmania that weekend closes the autumn break, so it is one of the busiest weekends of the year."], ["Easter: 26 to 29 March", "Anzac Monday: 26 April in NSW, Qld and WA", "Late March to late April is one long peak"]),
    section("Long weekends in 2027", ["Long weekends fill campgrounds within a few hours' drive of the cities, even outside school holidays. March brings Labour Day in Western Australia on Monday 1 March, then a long weekend on Monday 8 March in Victoria (Labour Day), South Australia (Adelaide Cup Day), Tasmania (Eight Hours Day) and the ACT (Canberra Day).", "The King's Birthday is Monday 14 June in most states, but Western Australia keeps it on Monday 27 September and Queensland on Monday 4 October. Labour Day in New South Wales, South Australia and the ACT is also Monday 4 October, during the Queensland and Victorian spring holidays. Queensland's Labour Day is Monday 3 May."], ["8 March: four long weekends at once", "King's Birthday: 14 June in most states", "4 October: NSW, SA, ACT and Queensland"]),
    section("Winter: the northern peak", ["Winter school holidays are the busy season in the north, because they fall in the dry season, when the Kimberley, the Top End and outback Queensland are open and warm. Southern families head north in the four weeks from 26 June to 20 July, so book the best-known northern campgrounds as soon as their dates open.", "In Western Australia, the park agency limits a stay to 14 nights in any park if a night falls in WA school holidays, against 28 nights at other times, and you must wait 14 days before booking that park again. WA park campsites can be booked up to 180 days before arrival."], ["Northern peak: 26 June to 20 July", "WA parks: 14 nights in school holidays", "WA bookings open 180 days ahead"]),
    section("When to book", ["Parks Victoria releases campsites in four batches a year, about six to nine months ahead. Stays from 1 March to 30 June 2027, which take in Labour Day, Easter, Anzac Day and the King's Birthday, were released on 28 September 2026 for Tidal River and 30 September for every other campground, so many holiday dates are already taken. Watch for the next release.", "Other park agencies open bookings on a rolling basis. For a holiday week, book on the first day you can, and have a second campground in mind. Weeks outside the school holidays, and towns farther from the capitals, are the easiest to find a site in."], ["Parks Victoria: four releases a year", "Book the day dates open", "Keep a second campground in mind"]),
    { ...section("Plan holiday trips in AussieCamps", ["AussieCamps shows campgrounds, rest areas and holiday parks on one map, so when your first choice is full for the holidays, you can look at the next valley or the next town and save the alternatives to your trip. Holiday parks listed by BookEasy can be booked in the app.", "Place details are saved on the phone for use without signal. The map, routing and weather need a connection, and AussieCamps runs on iPhone."], ["Find a second campground fast", "Book holiday parks in the app", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "NSW Department of Education: 2027 term dates", url: "https://education.nsw.gov.au/schooling/calendars/2027" },
    { label: "Victorian Government: school term dates and holidays", url: "https://www.vic.gov.au/school-term-dates-and-holidays-victoria" },
    { label: "Queensland Department of Education: future term dates", url: "https://education.qld.gov.au/about-us/calendar/future-dates" },
    { label: "SA Department for Education: term dates", url: "https://www.education.sa.gov.au/teaching/term-dates" },
    { label: "WA Department of Education: future term dates", url: "https://www.education.wa.edu.au/future-term-dates" },
    { label: "Tasmanian Department for Education, Children and Young People: term dates", url: "https://www.decyp.tas.gov.au/about-us/term-dates/" },
    { label: "NSW Government: public holidays", url: "https://www.nsw.gov.au/about-nsw/public-holidays" },
    { label: "Queensland Government: public holidays", url: "https://www.qld.gov.au/recreation/travel/holidays/public" },
    { label: "Fair Work Ombudsman: 2027 public holidays", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2027-public-holidays" },
    { label: "Parks Victoria: bookings release schedule", url: "https://www.parks.vic.gov.au/where-to-stay/booking-information/bookings-release-schedule" },
    { label: "Explore Parks WA: Steep Point campground, stay limits and bookings", url: "https://exploreparks.dbca.wa.gov.au/site/steep-point-campground" },
  ],
});

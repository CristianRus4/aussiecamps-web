import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How do I get a tax file number on a working holiday visa?", "Apply online with the ATO once you are in Australia, using your passport details. The ATO describes it as free, and visas that carry a no-work condition cannot use the online route."],
  ["What happens if I start work before I have a tax file number?", "Your employer must withhold tax at 45%, according to the ATO's tax table for working holiday makers. Give your employer the number as soon as you have it."],
  ["How much tax do working holiday makers pay in Australia?", "15% on income up to $45,000 in 2026-27, but only if the employer is registered with the ATO as an employer of working holiday makers. An unregistered employer withholds 30% up to $135,000."],
  ["How long can I work for one employer on a working holiday visa?", "Home Affairs says you can usually work for the same employer for 6 months only, with exemptions that include some farm and northern Australia work. Plan a gap between jobs in your budget."],
] as const;

export default article({
  slug: "first-two-weeks-working-holiday-australia", publishAt: "2026-12-21",
  title: "Your First Two Weeks on a Working Holiday in Australia: Tax File Number, Bank, Phone and First Trip",
  description: "Apply for your tax file number, open a bank account, get a phone number and a transport card in week one, then plan a first road trip. A working holiday checklist for 2026.",
  category: "Trip planning", region: "Australia",
  places: ["Sydney", "Melbourne", "Brisbane", "Regional Australia"],
  imageAlt: "The Sydney Opera House at dusk, seen from the Manly to Circular Quay ferry",
  intro: "Do four things in your first week: apply online for a tax file number, open an Australian bank account, get an Australian mobile number and sort out transport. In week two, check your work rights, start looking for a job and plan a first short road trip. The pages below were read on 28 October 2026, and the rules for your visa and country can differ.",
  related: ["buying-a-campervan-australia-working-holiday", "working-holiday-road-trip-budget-australia-2026", "best-apps-working-holiday-australia", "public-transport-costs-australia-2026"],
  sections: [
    section("The two-week checklist", ["Order matters a little: the phone number and bank account unlock the tax and government accounts, and the tax file number unlocks pay at the right rate."], ["Week one: money, phone, transport", "Week two: work, trip, rules", "Keep your passport details to hand"], {
      caption: "First two weeks on a working holiday visa in Australia, from official and city transport pages read 28 October 2026.",
      head: ["When", "Do this", "Why"],
      rows: [
        ["Days 1 to 2", "Buy an Australian SIM or eSIM", "Government accounts and the ATO app need an Australian mobile number"],
        ["Days 1 to 3", "Apply for a tax file number online", "Without one an employer must withhold 45%"],
        ["Days 2 to 5", "Open a bank account", "Employers pay wages into an Australian account"],
        ["Days 2 to 5", "Get a transport card or use contactless", "Each city has its own system"],
        ["Week two", "Check your work rights and conditions", "Home Affairs sets a 6-month limit with one employer"],
        ["Week two", "Plan a short first road trip", "Learn the roads and costs before a long one"],
      ],
    }),
    section("Tax file number", ["You apply for a tax file number online with the ATO once you are in Australia on a visa that lets you work, using your passport number, country of issue, name and date of birth as printed on it. The ATO says the application is free.", "Give the number to each employer. If you start work without one, the ATO's tax table says the employer must withhold 45%. Working holiday makers are taxed at 15% on income up to $45,000 in 2026-27, but only when the employer is registered with the ATO as an employer of working holiday makers, and an unregistered employer withholds 30% up to $135,000."], ["Free online application", "No number means 45% withheld", "15% rate needs a registered employer"]),
    section("Bank account and phone", ["An Australian account gives you a BSB and account number, which employers need to pay wages and super. Bring your passport and visa details when you open one, and ask the bank which fees apply to your account.", "A prepaid SIM or an eSIM gives you the Australian number the ATO app and myGov need, so buy one before you try to link them. Set up myGov early, because it handles sign-in and government mail."], ["BSB and account number for pay", "Australian number for myGov", "Set up myGov in week one"]),
    section("Getting around the city", ["Australia has no national transport card. Sydney uses Opal, Melbourne myki, south-east Queensland the go card, Perth SmartRider and Adelaide metroCARD, and contactless bank cards work on many of these networks. The guide to public transport costs compares the fares.", "A weekly cap or daily cap limits what you pay in most cities, so tap on and off every trip and let the cap do the work."], ["Each city has its own card", "Contactless works on many networks", "Daily and weekly caps apply"]),
    section("Work rights and your first job", ["Check your work rights in the Home Affairs VEVO service or the myVEVO app, and note the conditions on your visa. Home Affairs says you can usually work for the same employer for 6 months only, with exemptions that include some farm work and some industries in northern Australia.", "Keep a record of your hours and payslips. The Fair Work Ombudsman's Record My Hours app stores them, and visa holders have the same workplace rights as every other employee. Super is paid on top of wages, and you can claim it after you leave Australia."], ["6 months with one employer", "Record hours and payslips", "Super can be claimed on departure"]),
    section("Your first road trip", ["A first trip works best short, with sealed roads and booked nights: a long weekend from your base city teaches you how fuel, camping fees and distances really feel. The guide to buying a campervan covers the choice between buying and hiring, and the working holiday budget guide shows what a longer trip costs.", "Learn the rules before you sleep in the van. The guides on sleeping in a car and on rest areas explain where an overnight stop is legal, and a holiday park is the safe default for the first few nights."], ["Start with a long weekend", "Stick to sealed roads", "Holiday parks for the first nights"]),
    { ...section("Plan the first trip in AussieCamps", ["AussieCamps keeps places of every kind in one app: campgrounds, rest areas, dump points, water points and bookable stays. Build a trip from them with arrival dates, see the driving distance and time for each leg and read the forecast for each stop.", "Saved places and trip details open without signal, so a stop's details are still there on a dirt road, and the map, routing, weather and photos need a connection. It runs on iPhone only."], ["Trips with dates and forecasts", "Bookable stays in the app", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "ATO: apply for a TFN as a foreign passport holder or temporary visitor", url: "https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application" },
    { label: "ATO: tax rates for working holiday makers", url: "https://www.ato.gov.au/tax-rates-and-codes/tax-rates-working-holiday-makers" },
    { label: "ATO: Schedule 15 tax table for working holiday makers", url: "https://www.ato.gov.au/tax-rates-and-codes/schedule-15-tax-table-for-working-holiday-makers" },
    { label: "Home Affairs: 6-month work limitation (subclass 417)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation" },
    { label: "Home Affairs: check visa conditions online", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online" },
    { label: "Fair Work Ombudsman: visa holders and migrants", url: "https://www.fairwork.gov.au/find-help-for/visa-holders-migrants" },
    { label: "Fair Work Ombudsman: Record My Hours app", url: "https://www.fairwork.gov.au/tools-and-resources/record-my-hours-app" },
  ],
});

import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in Echuca?", "Not in the town or on its streets, but the Murray River has free and low-cost camping on public land close by, mostly in the forests and reserves on both banks. The rules cover where you can camp, how close to the water, and for how long."],
  ["Where can you camp near Echuca?", "On the Victorian side, the Gunbower and Barmah forests and Murray River reserves have riverside camping. On the New South Wales side, state forests and regional parks near Moama offer more. Caravan parks in Echuca and Moama suit a night with power."],
  ["Can I light a campfire on the Murray?", "Only where the sign allows it and not on a fire ban day. Rules vary between Victoria and New South Wales, so check the day's fire danger rating and use a gas stove when in doubt."],
  ["When does the Murray flood?", "River levels rise in winter and spring and some years flood the riverside camps. Check the managing agency's closures before you go, and never camp in a spot that is under water or at the edge of a bank."],
] as const;

export default article({
  slug: "free-camping-echuca", publishAt: "2026-11-10",
  title: "Free Camping Near Echuca: River Camps on the Murray",
  description: "Where to camp near Echuca and Moama: river camps on public land on both banks, caravan parks, the rules on fires and flooding, and what to see on the Murray.",
  category: "Camping guides", region: "Victoria",
  places: ["Echuca", "Moama", "Barmah", "Gunbower", "Murray River"],
  imageAlt: "SUBJECT_PLACEHOLDER",
  intro: "Echuca is a classic Murray River stop, with paddle steamers, a historic port and a lot of river. You cannot camp in the town, but the forests and reserves on both banks have riverside camps for free or a low fee, and it is easy to base yourself in a caravan park and head out for the nights you want to be in the bush. Check the fire rules, the river level and the stay limit, and bring your own water.",
  related: ["camping-rules-victoria", "melbourne-to-mildura-drive", "is-free-camping-legal-australia", "campfires-camping-australia", "camping-weather-safety-australia"],
  sections: [
    section("What Echuca allows", ["Councils on both banks sign against camping on streets and in town parks, and Echuca is no exception. The easy options in town are the caravan parks and holiday parks on both sides of the river, with powered sites and a short walk to the port.", "For a bush night, head out to the forests and reserves. They are managed by public land agencies, and the rules are on the sign."], ["No camping in the town", "Caravan parks in Echuca and Moama", "Bush camps outside town"], {
      caption: "Where to stay around Echuca and Moama.",
      head: ["Where", "Cost", "Best for", "Watch for"],
      rows: [
        ["Caravan parks in Echuca and Moama", "Paid", "Power, showers, a base", "Book in school holidays"],
        ["Victorian river reserves", "Free or low fee", "River camping, fishing", "Floods and fire bans"],
        ["Gunbower and Barmah forests", "Free or low fee", "Quiet bush nights", "Mosquitoes and mud"],
        ["NSW state forests near Moama", "Free", "Camping with trees", "Check the forest's own page"],
      ],
    }),
    section("Riverside camping on the Victorian bank", ["The Victorian side of the Murray has a string of river reserves and forest camps where you can camp close to the water, often with no booking and a small fee or none. The Barmah and Gunbower forests are the best known, with red gums, birdlife and sandy beaches in a dry year.", "Bring your own water and a portable toilet if you are not in a self-contained vehicle, and take every piece of rubbish with you."], ["Riverside camps, no booking", "Bring water", "Take rubbish out"]),
    section("The New South Wales bank", ["Across the river at Moama, the state forests and regional parks have camping areas and the Forestry Corporation lists them on its camping page. Some are free and some charge a small fee.", "Rules differ between the two states, including fires, dogs and how long you can stay, so check which side of the river you are camping on."], ["Check the Forestry Corporation page", "Rules differ by state", "Dogs: check each site"]),
    section("Fire, floods and mosquitoes", ["The river and the forests flood in wet years, and camps can close for months. Check the closures with the agency that manages the site before you drive out, and never camp on a bank that could slump.", "Fire bans apply across the region in summer, and gas cooking is the safe default. In warm weather the mosquitoes are bad at dusk, so bring repellent and cover up."], ["Check closures first", "Gas cooking in summer", "Repellent at dusk"]),
    section("What to see in Echuca", ["The Port of Echuca was once the busiest inland river port in Australia, and it still has restored wharves and paddle steamers that run cruises on the river. The town also has wineries and a growing food scene.", "Allow a day for the port and the river, and another to explore the forests."], ["Paddle steamer cruises", "Historic wharf", "Winery stops"]),
    { ...section("Plan the Murray in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops.", "State forest and river reserve camps are not all in the app yet, so check the managing agency's page for those. AussieCamps runs on iPhone."], ["Filter by cost", "Save places to a trip", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks Victoria", url: "https://www.parks.vic.gov.au/" },
    { label: "Forestry Corporation of NSW: camping and picnics", url: "https://www.forestrycorporation.com.au/visit/activities/camping-and-picnics" },
    { label: "Visit Victoria: Echuca", url: "https://www.visitvictoria.com/regions/murray/towns-and-villages/echuca" },
    { label: "Echuca Moama tourism", url: "https://www.echucamoama.com/" },
  ],
});

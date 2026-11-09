import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What are easy meals to cook in a campervan?", "One-pot dishes work best: pasta with a jar sauce, rice with a stir fry, curry from a pack with rice, eggs and toast, tacos, wraps and sausages with salad. Choose food that keeps without much fridge space and cooks on a single burner."],
  ["Where can I buy groceries on a road trip in Australia?", "Coles, Woolworths and ALDI are in most large towns, and IGA and smaller stores in country towns. Prices rise and the range shrinks in remote country, so stock up before long stretches."],
  ["Can I take fresh food across state borders?", "Some states restrict fresh fruit, vegetables and honey, and Western Australia and South Australia are the strictest. Check the rules for your route and eat the produce before you cross, or leave it in the bins provided."],
  ["Can I cook on an open fire?", "Only where it is allowed, and not on total fire ban days. A gas burner or a camp stove is the simplest option, and free electric or gas barbecues are provided at many parks and rest areas."],
] as const;

export default article({
  slug: "easy-campervan-meals-australia",
  title: "Easy Campervan Meals in Australia: Simple Cooking on the Road",
  description: "Easy meals to cook in a campervan with one burner, how to shop and store food on a road trip, free barbecues, and what to check about fire bans and border rules.",
  category: "Camping guides", region: "Australia",
  places: ["Supermarkets", "Free barbecues", "Rest areas", "Campgrounds"],
  imageAlt: "A tent, sleeping bag and backpack at an Australian campground",
  intro: "Cooking in a campervan is simpler than it sounds. A gas burner, a couple of pans and a small fridge are enough for most meals, and the best ones use one pot and few ingredients. Below are easy meals for breakfast, lunch and dinner, how to shop and store food on the road, and what to check about fire bans and fresh produce at state borders.",
  related: ["camping-packing-list-australia", "australia-grocery-prices-2026", "campfires-camping-australia", "interstate-biosecurity-road-trip", "camping-water-planning", "campervan-road-trip-budget-australia"],
  sections: [
    section("Simple meals for one burner", ["Breakfast can be eggs and toast, porridge or yoghurt with fruit. Lunch is often wraps, sandwiches or a salad made at a rest area, with tuna, cheese or cold meat. Dinner is where one-pot meals shine: pasta with a jar sauce, rice with a stir fry, a curry from a pack, tacos or sausages in bread with salad.", "Pick food that keeps without much fridge space, such as eggs, hard cheese, cabbage, carrots, tinned fish, rice, pasta and wraps, and add fresh food when you pass a town. Cooking once and eating twice saves gas and time."], ["Eggs, wraps and porridge", "One-pot pasta, rice and curry", "Choose foods that keep"]),
    section("Shopping and storing food", ["Coles, Woolworths and ALDI are in most large towns, and IGA and smaller stores in country towns. Prices rise and the range shrinks in remote country, so stock up before long stretches. The grocery prices guide gives an idea of what a basket costs.", "Keep the fridge organised, with raw meat at the bottom in a sealed container, and use the freshest food first. In hot weather, buy ice or frozen items in the last town. Keep a bag for rubbish and take it to a bin at the next town or campground."], ["Stock up before remote stretches", "Meat at the bottom, sealed", "Take rubbish with you"]),
    section("Barbecues, fire bans and borders", ["Many parks, rest areas and holiday parks have free or coin-operated barbecues, and cooking on them is a cheap and social way to eat. Campfires are only allowed in some places and never on total fire ban days, and the campfire guide covers the rules by state.", "Some states restrict fresh fruit, vegetables and honey at the border, with Western Australia and South Australia the strictest. The biosecurity guide covers what to eat or leave before you cross."], ["Use free barbecues", "No fires on total fire ban days", "Check border rules for fresh produce"]),
    section("Water, washing up and waste", ["Plan how much drinking and washing water you carry, and keep wash water away from creeks and lakes. At free camps and rest areas, take all rubbish and food scraps out and do not feed wildlife. Dump points are where you empty a grey water tank or cassette.", "The water planning guide covers how much to carry, and the dump points guide covers where to empty."], ["Carry enough water", "Do not wash up in a creek", "Empty tanks at dump points"]),
    { ...section("Plan the route in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish, including toilets and barbecues where the source lists them. Build a trip as ordered stops and it shows the distance, drive time and forecast for each leg.", "The iPhone app is free to download, with in-app purchases."], ["Find camps with barbecues", "Add each stop in order", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Camp stove", url: "https://en.wikipedia.org/wiki/Camping_stove" },
    { label: "Wikipedia: Coles Group", url: "https://en.wikipedia.org/wiki/Coles_Group" },
    { label: "Wikipedia: Woolworths Group (Australia)", url: "https://en.wikipedia.org/wiki/Woolworths_Group_(Australia)" },
  ],
});

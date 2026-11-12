import { feeLabel, nearbyPlaces, typeLabels, type Place } from "@/lib/places";

/**
 * The words a place page writes from the app's facts: the summary under the photos, the questions and
 * answers, and the meta description. Every sentence comes from a known fact, so a page says nothing it
 * cannot back up and each page reads differently from the next. Nothing is invented when a fact is missing.
 */
const lower = (value: string) => value.charAt(0).toLowerCase() + value.slice(1);
const list = (items: string[]) => items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
const article = (word: string) => (/^[aeiou]/i.test(word) ? "an" : "a");

const roads = { sealed: "a sealed road", unsealed: "an unsealed road", mixed: "sealed and unsealed roads" } as const;
const vehicles = { "2wd": "2WD vehicles", "4wd": "4WD vehicles", "high-clearance-4wd": "high-clearance 4WDs", "walk-in": "walkers only" } as const;
const weathers = { "all-weather": "in all weather", "dry-only": "in dry weather only", "4wd-when-wet": "though a 4WD is needed after rain", "snow-chains": "with snow chains after snow" } as const;

/** Where a place is, in one phrase: "in Cape Le Grand National Park, Western Australia". */
export function wherePhrase(place: Place) {
  const parts = [place.park && !place.name.includes(place.park) ? place.park : undefined, place.locality && place.locality !== place.park ? place.locality : undefined, place.stateName];
  return parts.filter(Boolean).join(", ");
}

export function placeSummary(place: Place): string[] {
  const type = lower(typeLabels[place.type].one);
  const sentences = [`${place.name} is ${article(type)} ${type} in ${wherePhrase(place)}.`];
  if (place.stars) sentences.push(`It is rated ${place.stars} stars.`);
  if (place.amenities.length) sentences.push(`Its facilities include ${list(place.amenities.slice(0, 3).map(lower))}${place.amenityCount > 3 ? `, ${place.amenityCount} in all` : ""}.`);
  if (place.activities.length) sentences.push(`Things to do here include ${list(place.activities.slice(0, 3).map(lower))}.`);
  if (place.road || place.vehicle) sentences.push(`${place.road ? `It is reached by ${roads[place.road]}` : "Access suits"}${place.vehicle ? `${place.road ? " suited to " : " "}${vehicles[place.vehicle]}` : ""}${place.weather ? ` ${weathers[place.weather]}` : ""}.`);
  if (place.maxVehicleLength) sentences.push(`Vehicles up to ${place.maxVehicleLength} m long fit.`);
  if (place.pets === 1) sentences.push("Dogs are allowed.");
  if (place.pets === 0) sentences.push("Dogs are not allowed.");
  if (place.bookingRequired) sentences.push("Sites must be booked ahead.");
  const nearest = nearbyPlaces(place, 1)[0];
  if (nearest) sentences.push(`The nearest other place in AussieCamps is ${nearest.place.name}, ${nearest.km < 1 ? "under 1" : Math.round(nearest.km)} km away.`);
  return sentences;
}

export type PlaceQuestion = { question: string; answer: string };

/** Questions people search for, answered only where the data has the answer. */
export function placeQuestions(place: Place): PlaceQuestion[] {
  const questions: PlaceQuestion[] = [];
  const fee = feeLabel(place.fee);
  if (place.type === "holiday_park" && place.booking) questions.push({ question: `How do I book ${place.name}?`, answer: `Use the Book now button on this page to see live prices and availability for your dates and book with the park.` });
  else if (fee === "Free") questions.push({ question: `Is ${place.name} free?`, answer: `Yes. ${place.name} is listed as free. Conditions can change, so check the latest details in AussieCamps before you go.` });
  else if (fee) questions.push({ question: `How much does it cost to stay at ${place.name}?`, answer: `Fees apply and change with the season and the site. AussieCamps shows the current fee and how to book.` });
  if (place.bookingRequired) questions.push({ question: `Do you need to book ${place.name}?`, answer: `Yes. Sites at ${place.name} must be booked ahead.` });
  if (place.pets === 1 || place.pets === 0) questions.push({ question: `Are dogs allowed at ${place.name}?`, answer: place.pets === 1 ? `Yes, dogs are allowed at ${place.name}.` : `No, dogs are not allowed at ${place.name}.` });
  if (place.vehicle) {
    const answer = place.vehicle === "2wd" ? `Yes. ${place.name} is reachable in a 2WD${place.weather === "4wd-when-wet" ? ", though a 4WD is needed after rain" : place.weather === "dry-only" ? " in dry weather" : ""}.`
      : place.vehicle === "walk-in" ? `No. ${place.name} is walk-in only.` : `No. You need ${place.vehicle === "high-clearance-4wd" ? "a high-clearance 4WD" : "a 4WD"} to reach ${place.name}.`;
    questions.push({ question: `Can you get to ${place.name} in a 2WD?`, answer });
  }
  if (place.amenities.length) questions.push({ question: `What facilities does ${place.name} have?`, answer: `${list(place.amenities.slice(0, 5))}${place.amenityCount > 5 ? `, and ${place.amenityCount - 5} more listed in AussieCamps` : ""}.` });
  return questions;
}

/** The meta description: the summary's opening facts, under 155 characters. */
export function placeDescription(place: Place) {
  const text = placeSummary(place).slice(0, 3).join(" ");
  return text.length <= 155 ? text : `${text.slice(0, text.lastIndexOf(" ", 154))}…`;
}

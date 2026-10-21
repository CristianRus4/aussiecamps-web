import type { Article } from "@/lib/site";
import beachCamping, { faq as beachCampingFaq } from "@/lib/can-i/can-i-camp-on-the-beach-in-australia";
import beachDriving, { faq as beachDrivingFaq } from "@/lib/can-i/can-i-drive-on-the-beach-in-australia";
import nationalParkBooking, { faq as nationalParkBookingFaq } from "@/lib/can-i/can-i-camp-in-a-national-park-without-booking-in-australia";

/**
 * "Can I...?" answer pages. Each page lives in lib/can-i/<slug>.ts and exports its article (default)
 * and its FAQ. They are listed here in publish order; lib/site.ts spreads `canIArticles` into the
 * written guides and attaches `canIFaqs` by slug.
 */
export const canIArticles: Article[] = [beachCamping, beachDriving, nationalParkBooking];
export const canIFaqs: Record<string, readonly (readonly [string, string])[]> = {
  [beachCamping.slug]: beachCampingFaq,
  [beachDriving.slug]: beachDrivingFaq,
  [nationalParkBooking.slug]: nationalParkBookingFaq,
};

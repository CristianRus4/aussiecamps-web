import type { Article } from "@/lib/site";
import g_how_to_change_a_tyre_campervan_australia, { faq as faq_g_how_to_change_a_tyre_campervan_australia } from "@/lib/costs/how-to-change-a-tyre-campervan-australia";
import g_hit_a_kangaroo_what_to_do_australia, { faq as faq_g_hit_a_kangaroo_what_to_do_australia } from "@/lib/costs/hit-a-kangaroo-what-to-do-australia";
import g_long_distance_driving_tips_australia, { faq as faq_g_long_distance_driving_tips_australia } from "@/lib/costs/long-distance-driving-tips-australia";
import g_4wd_basics_hire_vehicles_australia, { faq as faq_g_4wd_basics_hire_vehicles_australia } from "@/lib/costs/4wd-basics-hire-vehicles-australia";
import g_solar_power_for_campers_australia, { faq as faq_g_solar_power_for_campers_australia } from "@/lib/costs/solar-power-for-campers-australia";
import g_easy_campervan_meals_australia, { faq as faq_g_easy_campervan_meals_australia } from "@/lib/costs/easy-campervan-meals-australia";
import g_best_campervan_for_backpackers_australia, { faq as faq_g_best_campervan_for_backpackers_australia } from "@/lib/costs/best-campervan-for-backpackers-australia";
import g_campervan_hire_insurance_excess_australia, { faq as faq_g_campervan_hire_insurance_excess_australia } from "@/lib/costs/campervan-hire-insurance-excess-australia";
import g_solo_campervan_travel_australia, { faq as faq_g_solo_campervan_travel_australia } from "@/lib/costs/solo-campervan-travel-australia";

/** Guides added by the A6 growth lane (road-trip practicals). Each lives in lib/costs/<slug>.ts. */
export const a6Articles: Article[] = [g_how_to_change_a_tyre_campervan_australia, g_hit_a_kangaroo_what_to_do_australia, g_long_distance_driving_tips_australia, g_4wd_basics_hire_vehicles_australia, g_solar_power_for_campers_australia, g_easy_campervan_meals_australia, g_best_campervan_for_backpackers_australia, g_campervan_hire_insurance_excess_australia, g_solo_campervan_travel_australia];
export const a6Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_how_to_change_a_tyre_campervan_australia.slug]: faq_g_how_to_change_a_tyre_campervan_australia,
  [g_hit_a_kangaroo_what_to_do_australia.slug]: faq_g_hit_a_kangaroo_what_to_do_australia,
  [g_long_distance_driving_tips_australia.slug]: faq_g_long_distance_driving_tips_australia,
  [g_4wd_basics_hire_vehicles_australia.slug]: faq_g_4wd_basics_hire_vehicles_australia,
  [g_solar_power_for_campers_australia.slug]: faq_g_solar_power_for_campers_australia,
  [g_easy_campervan_meals_australia.slug]: faq_g_easy_campervan_meals_australia,
  [g_best_campervan_for_backpackers_australia.slug]: faq_g_best_campervan_for_backpackers_australia,
  [g_campervan_hire_insurance_excess_australia.slug]: faq_g_campervan_hire_insurance_excess_australia,
  [g_solo_campervan_travel_australia.slug]: faq_g_solo_campervan_travel_australia,
};

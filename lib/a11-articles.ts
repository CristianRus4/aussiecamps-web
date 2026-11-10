import type { Article } from "@/lib/site";
import g_riverland_murray_river_camping_south_australia, { faq as faq_g_riverland_murray_river_camping_south_australia } from "@/lib/costs/riverland-murray-river-camping-south-australia";
import g_fleurieu_peninsula_camping, { faq as faq_g_fleurieu_peninsula_camping } from "@/lib/costs/fleurieu-peninsula-camping";
import g_australian_road_trip_food_to_try, { faq as faq_g_australian_road_trip_food_to_try } from "@/lib/costs/australian-road-trip-food-to-try";

/** Guides added by the A11 growth lane (last gaps from the November research). Each lives in lib/costs/<slug>.ts. */
export const a11Articles: Article[] = [g_riverland_murray_river_camping_south_australia, g_fleurieu_peninsula_camping, g_australian_road_trip_food_to_try];
export const a11Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_riverland_murray_river_camping_south_australia.slug]: faq_g_riverland_murray_river_camping_south_australia,
  [g_fleurieu_peninsula_camping.slug]: faq_g_fleurieu_peninsula_camping,
  [g_australian_road_trip_food_to_try.slug]: faq_g_australian_road_trip_food_to_try,
};

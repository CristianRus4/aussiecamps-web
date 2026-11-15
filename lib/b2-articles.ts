import type { Article } from "@/lib/site";
import g_national_park_campsites_sell_out_summer_australia, { faq as faq_g_national_park_campsites_sell_out_summer_australia } from "@/lib/costs/national-park-campsites-sell-out-summer-australia";
import g_new_years_eve_summer_festival_camping_australia_2026_27, { faq as faq_g_new_years_eve_summer_festival_camping_australia_2026_27 } from "@/lib/costs/new-years-eve-summer-festival-camping-australia-2026-27";
import g_best_apps_tasmania_road_trip, { faq as faq_g_best_apps_tasmania_road_trip } from "@/lib/costs/best-apps-tasmania-road-trip";
import g_can_i_drive_a_campervan_on_a_car_licence_in_australia, { faq as faq_g_can_i_drive_a_campervan_on_a_car_licence_in_australia } from "@/lib/costs/can-i-drive-a-campervan-on-a-car-licence-in-australia";
import g_can_i_drink_the_water_at_australian_campsites, { faq as faq_g_can_i_drink_the_water_at_australian_campsites } from "@/lib/costs/can-i-drink-the-water-at-australian-campsites";
import g_can_i_go_to_the_toilet_outdoors_while_camping_in_australia, { faq as faq_g_can_i_go_to_the_toilet_outdoors_while_camping_in_australia } from "@/lib/costs/can-i-go-to-the-toilet-outdoors-while-camping-in-australia";
import g_national_park_passes_australia_2026_27, { faq as faq_g_national_park_passes_australia_2026_27 } from "@/lib/costs/national-park-passes-australia-2026-27";
import g_national_park_campsite_rules_australia, { faq as faq_g_national_park_campsite_rules_australia } from "@/lib/costs/national-park-campsite-rules-australia";
import g_aurora_australis_tasmanian_wildflowers_camping, { faq as faq_g_aurora_australis_tasmanian_wildflowers_camping } from "@/lib/costs/aurora-australis-tasmanian-wildflowers-camping";
import g_does_aussiecamps_work_offline, { faq as faq_g_does_aussiecamps_work_offline } from "@/lib/costs/does-aussiecamps-work-offline";
import g_aussiecamps_weather_street_view, { faq as faq_g_aussiecamps_weather_street_view } from "@/lib/costs/aussiecamps-weather-street-view";
import g_aussiecamps_costs_in_your_currency, { faq as faq_g_aussiecamps_costs_in_your_currency } from "@/lib/costs/aussiecamps-costs-in-your-currency";
import g_holiday_park_memberships_australia_2027, { faq as faq_g_holiday_park_memberships_australia_2027 } from "@/lib/costs/holiday-park-memberships-australia-2027";
import g_where_to_camp_in_australia, { faq as faq_g_where_to_camp_in_australia } from "@/lib/costs/where-to-camp-in-australia";
import g_free_camping_near_hobart, { faq as faq_g_free_camping_near_hobart } from "@/lib/costs/free-camping-near-hobart";
import g_free_camping_northern_territory, { faq as faq_g_free_camping_northern_territory } from "@/lib/costs/free-camping-northern-territory";
import g_free_camping_with_a_tent_australia, { faq as faq_g_free_camping_with_a_tent_australia } from "@/lib/costs/free-camping-with-a-tent-australia";
import g_free_camping_mid_north_coast_nsw, { faq as faq_g_free_camping_mid_north_coast_nsw } from "@/lib/costs/free-camping-mid-north-coast-nsw";
import g_free_camping_near_townsville_mackay, { faq as faq_g_free_camping_near_townsville_mackay } from "@/lib/costs/free-camping-near-townsville-mackay";
import g_free_camping_near_geelong_great_ocean_road, { faq as faq_g_free_camping_near_geelong_great_ocean_road } from "@/lib/costs/free-camping-near-geelong-great-ocean-road";
import g_free_camping_near_newcastle_hunter, { faq as faq_g_free_camping_near_newcastle_hunter } from "@/lib/costs/free-camping-near-newcastle-hunter";
import g_free_camping_near_alice_springs, { faq as faq_g_free_camping_near_alice_springs } from "@/lib/costs/free-camping-near-alice-springs";
import g_free_camping_near_broome_kimberley, { faq as faq_g_free_camping_near_broome_kimberley } from "@/lib/costs/free-camping-near-broome-kimberley";
import g_free_camping_near_albany_south_coast_wa, { faq as faq_g_free_camping_near_albany_south_coast_wa } from "@/lib/costs/free-camping-near-albany-south-coast-wa";
import g_free_camping_near_bunbury_busselton, { faq as faq_g_free_camping_near_bunbury_busselton } from "@/lib/costs/free-camping-near-bunbury-busselton";

/** Guides added by the B2 lane (November 2026): summer pages, general topics, app guides and free camping by area. Each lives in lib/costs/<slug>.ts. */
export const b2Articles: Article[] = [g_national_park_campsites_sell_out_summer_australia, g_new_years_eve_summer_festival_camping_australia_2026_27, g_best_apps_tasmania_road_trip, g_can_i_drive_a_campervan_on_a_car_licence_in_australia, g_can_i_drink_the_water_at_australian_campsites, g_can_i_go_to_the_toilet_outdoors_while_camping_in_australia, g_national_park_passes_australia_2026_27, g_national_park_campsite_rules_australia, g_aurora_australis_tasmanian_wildflowers_camping, g_does_aussiecamps_work_offline, g_aussiecamps_weather_street_view, g_aussiecamps_costs_in_your_currency, g_holiday_park_memberships_australia_2027, g_where_to_camp_in_australia, g_free_camping_near_hobart, g_free_camping_northern_territory, g_free_camping_with_a_tent_australia, g_free_camping_mid_north_coast_nsw, g_free_camping_near_townsville_mackay, g_free_camping_near_geelong_great_ocean_road, g_free_camping_near_newcastle_hunter, g_free_camping_near_alice_springs, g_free_camping_near_broome_kimberley, g_free_camping_near_albany_south_coast_wa, g_free_camping_near_bunbury_busselton];
export const b2Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_national_park_campsites_sell_out_summer_australia.slug]: faq_g_national_park_campsites_sell_out_summer_australia,
  [g_new_years_eve_summer_festival_camping_australia_2026_27.slug]: faq_g_new_years_eve_summer_festival_camping_australia_2026_27,
  [g_best_apps_tasmania_road_trip.slug]: faq_g_best_apps_tasmania_road_trip,
  [g_can_i_drive_a_campervan_on_a_car_licence_in_australia.slug]: faq_g_can_i_drive_a_campervan_on_a_car_licence_in_australia,
  [g_can_i_drink_the_water_at_australian_campsites.slug]: faq_g_can_i_drink_the_water_at_australian_campsites,
  [g_can_i_go_to_the_toilet_outdoors_while_camping_in_australia.slug]: faq_g_can_i_go_to_the_toilet_outdoors_while_camping_in_australia,
  [g_national_park_passes_australia_2026_27.slug]: faq_g_national_park_passes_australia_2026_27,
  [g_national_park_campsite_rules_australia.slug]: faq_g_national_park_campsite_rules_australia,
  [g_aurora_australis_tasmanian_wildflowers_camping.slug]: faq_g_aurora_australis_tasmanian_wildflowers_camping,
  [g_does_aussiecamps_work_offline.slug]: faq_g_does_aussiecamps_work_offline,
  [g_aussiecamps_weather_street_view.slug]: faq_g_aussiecamps_weather_street_view,
  [g_aussiecamps_costs_in_your_currency.slug]: faq_g_aussiecamps_costs_in_your_currency,
  [g_holiday_park_memberships_australia_2027.slug]: faq_g_holiday_park_memberships_australia_2027,
  [g_where_to_camp_in_australia.slug]: faq_g_where_to_camp_in_australia,
  [g_free_camping_near_hobart.slug]: faq_g_free_camping_near_hobart,
  [g_free_camping_northern_territory.slug]: faq_g_free_camping_northern_territory,
  [g_free_camping_with_a_tent_australia.slug]: faq_g_free_camping_with_a_tent_australia,
  [g_free_camping_mid_north_coast_nsw.slug]: faq_g_free_camping_mid_north_coast_nsw,
  [g_free_camping_near_townsville_mackay.slug]: faq_g_free_camping_near_townsville_mackay,
  [g_free_camping_near_geelong_great_ocean_road.slug]: faq_g_free_camping_near_geelong_great_ocean_road,
  [g_free_camping_near_newcastle_hunter.slug]: faq_g_free_camping_near_newcastle_hunter,
  [g_free_camping_near_alice_springs.slug]: faq_g_free_camping_near_alice_springs,
  [g_free_camping_near_broome_kimberley.slug]: faq_g_free_camping_near_broome_kimberley,
  [g_free_camping_near_albany_south_coast_wa.slug]: faq_g_free_camping_near_albany_south_coast_wa,
  [g_free_camping_near_bunbury_busselton.slug]: faq_g_free_camping_near_bunbury_busselton,
};

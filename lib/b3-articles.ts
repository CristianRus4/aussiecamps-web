import type { Article } from "@/lib/site";
import g_hobart_3_days_campervan, { faq as faq_g_hobart_3_days_campervan } from "@/lib/costs/hobart-3-days-campervan";
import g_melbourne_3_days_campervan, { faq as faq_g_melbourne_3_days_campervan } from "@/lib/costs/melbourne-3-days-campervan";
import g_camping_byron_bay, { faq as faq_g_camping_byron_bay } from "@/lib/costs/camping-byron-bay";
import g_camping_gold_coast, { faq as faq_g_camping_gold_coast } from "@/lib/costs/camping-gold-coast";
import g_camping_in_cairns, { faq as faq_g_camping_in_cairns } from "@/lib/costs/camping-in-cairns";
import g_camping_in_melbourne, { faq as faq_g_camping_in_melbourne } from "@/lib/costs/camping-in-melbourne";
import g_moreton_island_north_stradbroke_island_camping, { faq as faq_g_moreton_island_north_stradbroke_island_camping } from "@/lib/costs/moreton-island-north-stradbroke-island-camping";
import g_bruny_island_maria_island_camping, { faq as faq_g_bruny_island_maria_island_camping } from "@/lib/costs/bruny-island-maria-island-camping";
import g_best_scenic_campsites_australia_by_state, { faq as faq_g_best_scenic_campsites_australia_by_state } from "@/lib/costs/best-scenic-campsites-australia-by-state";
import g_kakadu_national_park_camping, { faq as faq_g_kakadu_national_park_camping } from "@/lib/costs/kakadu-national-park-camping";
import g_daintree_cape_tribulation_camping, { faq as faq_g_daintree_cape_tribulation_camping } from "@/lib/costs/daintree-cape-tribulation-camping";
import g_cape_to_cape_track_camping_2026_27, { faq as faq_g_cape_to_cape_track_camping_2026_27 } from "@/lib/costs/cape-to-cape-track-camping-2026-27";
import g_australian_alps_walking_track, { faq as faq_g_australian_alps_walking_track } from "@/lib/costs/australian-alps-walking-track";
import g_thorsborne_trail_hinchinbrook_island, { faq as faq_g_thorsborne_trail_hinchinbrook_island } from "@/lib/costs/thorsborne-trail-hinchinbrook-island";
import g_overland_three_capes_booked_out_alternatives, { faq as faq_g_overland_three_capes_booked_out_alternatives } from "@/lib/costs/overland-three-capes-booked-out-alternatives";
import g_south_coast_track_tasmania, { faq as faq_g_south_coast_track_tasmania } from "@/lib/costs/south-coast-track-tasmania";
import g_hut_stays_australia, { faq as faq_g_hut_stays_australia } from "@/lib/costs/hut-stays-australia";
import g_starting_campervan_trip_sydney, { faq as faq_g_starting_campervan_trip_sydney } from "@/lib/costs/starting-campervan-trip-sydney";
import g_sydney_3_days_campervan, { faq as faq_g_sydney_3_days_campervan } from "@/lib/costs/sydney-3-days-campervan";
import g_camping_in_sydney, { faq as faq_g_camping_in_sydney } from "@/lib/costs/camping-in-sydney";
import g_bibbulmun_track_camping_2026_27, { faq as faq_g_bibbulmun_track_camping_2026_27 } from "@/lib/costs/bibbulmun-track-camping-2026-27";
import g_great_ocean_walk_camping_2026_27, { faq as faq_g_great_ocean_walk_camping_2026_27 } from "@/lib/costs/great-ocean-walk-camping-2026-27";
import g_larapinta_trail_camping_2026_27, { faq as faq_g_larapinta_trail_camping_2026_27 } from "@/lib/costs/larapinta-trail-camping-2026-27";
import g_overland_track_2027_28_bookings, { faq as faq_g_overland_track_2027_28_bookings } from "@/lib/costs/overland-track-2027-28-bookings";
import g_three_capes_track_2026_27, { faq as faq_g_three_capes_track_2026_27 } from "@/lib/costs/three-capes-track-2026-27";
import g_overland_track_2026_27, { faq as faq_g_overland_track_2026_27 } from "@/lib/costs/overland-track-2026-27";
import g_wilsons_promontory_camping, { faq as faq_g_wilsons_promontory_camping } from "@/lib/costs/wilsons-promontory-camping";
import g_bushwalking_camp_rules_etiquette_australia, { faq as faq_g_bushwalking_camp_rules_etiquette_australia } from "@/lib/costs/bushwalking-camp-rules-etiquette-australia";
import g_easy_overnight_bushwalks_huts_families, { faq as faq_g_easy_overnight_bushwalks_huts_families } from "@/lib/costs/easy-overnight-bushwalks-huts-families";
import g_best_multi_day_walks_australia_2026_27, { faq as faq_g_best_multi_day_walks_australia_2026_27 } from "@/lib/costs/best-multi-day-walks-australia-2026-27";

/** Multi-day walk, park and city camping guides added by the aus-b3 lane. Each lives in lib/costs/<slug>.ts. */
export const b3Articles: Article[] = [g_best_multi_day_walks_australia_2026_27, g_easy_overnight_bushwalks_huts_families, g_bushwalking_camp_rules_etiquette_australia, g_wilsons_promontory_camping, g_overland_track_2026_27, g_three_capes_track_2026_27, g_overland_track_2027_28_bookings, g_larapinta_trail_camping_2026_27, g_great_ocean_walk_camping_2026_27, g_bibbulmun_track_camping_2026_27, g_camping_in_sydney, g_sydney_3_days_campervan, g_starting_campervan_trip_sydney, g_hut_stays_australia, g_south_coast_track_tasmania, g_overland_three_capes_booked_out_alternatives, g_thorsborne_trail_hinchinbrook_island, g_australian_alps_walking_track, g_cape_to_cape_track_camping_2026_27, g_daintree_cape_tribulation_camping, g_kakadu_national_park_camping, g_best_scenic_campsites_australia_by_state, g_bruny_island_maria_island_camping, g_moreton_island_north_stradbroke_island_camping, g_camping_in_melbourne, g_camping_in_cairns, g_camping_gold_coast, g_camping_byron_bay, g_melbourne_3_days_campervan, g_hobart_3_days_campervan];
export const b3Faqs: Record<string, readonly (readonly [string, string])[]> = {
  [g_best_multi_day_walks_australia_2026_27.slug]: faq_g_best_multi_day_walks_australia_2026_27,
  [g_easy_overnight_bushwalks_huts_families.slug]: faq_g_easy_overnight_bushwalks_huts_families,
  [g_bushwalking_camp_rules_etiquette_australia.slug]: faq_g_bushwalking_camp_rules_etiquette_australia,
  [g_wilsons_promontory_camping.slug]: faq_g_wilsons_promontory_camping,
  [g_overland_track_2026_27.slug]: faq_g_overland_track_2026_27,
  [g_three_capes_track_2026_27.slug]: faq_g_three_capes_track_2026_27,
  [g_overland_track_2027_28_bookings.slug]: faq_g_overland_track_2027_28_bookings,
  [g_larapinta_trail_camping_2026_27.slug]: faq_g_larapinta_trail_camping_2026_27,
  [g_great_ocean_walk_camping_2026_27.slug]: faq_g_great_ocean_walk_camping_2026_27,
  [g_bibbulmun_track_camping_2026_27.slug]: faq_g_bibbulmun_track_camping_2026_27,
  [g_camping_in_sydney.slug]: faq_g_camping_in_sydney,
  [g_sydney_3_days_campervan.slug]: faq_g_sydney_3_days_campervan,
  [g_starting_campervan_trip_sydney.slug]: faq_g_starting_campervan_trip_sydney,
  [g_hut_stays_australia.slug]: faq_g_hut_stays_australia,
  [g_south_coast_track_tasmania.slug]: faq_g_south_coast_track_tasmania,
  [g_overland_three_capes_booked_out_alternatives.slug]: faq_g_overland_three_capes_booked_out_alternatives,
  [g_thorsborne_trail_hinchinbrook_island.slug]: faq_g_thorsborne_trail_hinchinbrook_island,
  [g_australian_alps_walking_track.slug]: faq_g_australian_alps_walking_track,
  [g_cape_to_cape_track_camping_2026_27.slug]: faq_g_cape_to_cape_track_camping_2026_27,
  [g_daintree_cape_tribulation_camping.slug]: faq_g_daintree_cape_tribulation_camping,
  [g_kakadu_national_park_camping.slug]: faq_g_kakadu_national_park_camping,
  [g_best_scenic_campsites_australia_by_state.slug]: faq_g_best_scenic_campsites_australia_by_state,
  [g_bruny_island_maria_island_camping.slug]: faq_g_bruny_island_maria_island_camping,
  [g_moreton_island_north_stradbroke_island_camping.slug]: faq_g_moreton_island_north_stradbroke_island_camping,
  [g_camping_in_melbourne.slug]: faq_g_camping_in_melbourne,
  [g_camping_in_cairns.slug]: faq_g_camping_in_cairns,
  [g_camping_gold_coast.slug]: faq_g_camping_gold_coast,
  [g_camping_byron_bay.slug]: faq_g_camping_byron_bay,
  [g_melbourne_3_days_campervan.slug]: faq_g_melbourne_3_days_campervan,
  [g_hobart_3_days_campervan.slug]: faq_g_hobart_3_days_campervan,
};

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlacePage } from "@/components/places/place-page";
import { placeById, places } from "@/lib/places";
import { placeMetadata } from "@/lib/places-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return places.map((place) => ({ state: place.stateSlug, place: place.slug }));
}

const find = async (params: Promise<{ state: string; place: string }>) => { const { state, place } = await params; return placeById.get(`${state}/${place}`); };

export async function generateMetadata({ params }: { params: Promise<{ state: string; place: string }> }): Promise<Metadata> {
  const place = await find(params);
  return place ? placeMetadata(place) : {};
}

export default async function Place({ params }: { params: Promise<{ state: string; place: string }> }) {
  const place = await find(params);
  if (!place) notFound();
  return <PlacePage place={place} />;
}

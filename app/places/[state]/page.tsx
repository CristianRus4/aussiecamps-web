import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlacesState } from "@/components/places/places-index";
import { placeStates } from "@/lib/places";
import { placeStateMetadata } from "@/lib/places-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return placeStates.map((state) => ({ state: state.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: slug } = await params;
  const state = placeStates.find((entry) => entry.slug === slug);
  return state ? placeStateMetadata(state) : {};
}

export default async function PlacesStatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: slug } = await params;
  const state = placeStates.find((entry) => entry.slug === slug);
  if (!state) notFound();
  return <PlacesState state={state} />;
}

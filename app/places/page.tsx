import type { Metadata } from "next";
import { PlacesDirectory } from "@/components/places/places-index";
import { placesMetadata } from "@/lib/places-metadata";

export const metadata: Metadata = placesMetadata();

export default function Places() {
  return <PlacesDirectory />;
}

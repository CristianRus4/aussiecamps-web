import type { Metadata } from "next";
import { HubIndex } from "@/components/hubs/hub-index";
import { sectionMetadata } from "@/lib/hubs/pages";

export const metadata: Metadata = sectionMetadata("dump-points");

export default function SectionIndex() {
  return <HubIndex section="dump-points" />;
}

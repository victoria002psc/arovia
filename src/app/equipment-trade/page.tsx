import type { Metadata } from "next";
import { EquipmentTradePage } from "@/components/sections/EquipmentTradePage";

export const metadata: Metadata = {
  title: "Equipment Trade — Import, Export & Medical Equipment | Arovia",
  description:
    "Medical equipment import and export support for healthcare businesses and organizations. Hospital, diagnostic, surgical, and ICU equipment enquiries.",
  keywords: ["medical equipment", "equipment import", "equipment export", "hospital equipment", "diagnostic equipment"],
  alternates: { canonical: "/equipment-trade" },
  openGraph: {
    title: "Equipment Trade — Import, Export & Medical Equipment | Arovia",
    description:
      "Medical equipment import and export support for healthcare businesses and organizations.",
    url: "/equipment-trade",
  },
};

export default function Page() {
  return <EquipmentTradePage />;
}

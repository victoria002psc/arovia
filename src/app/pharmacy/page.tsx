import type { Metadata } from "next";
import { PharmacyPage } from "@/components/sections/PharmacyPage";

export const metadata: Metadata = {
  title: "Arovia Pharmacy — Medicines as part of care",
  description:
    "Arovia Pharmacy is part of our healthcare services, helping make everyday medicines easier to access.",
  keywords: ["pharmacy", "medicines", "Arovia Pharmacy", "healthcare"],
  alternates: { canonical: "/pharmacy" },
  openGraph: {
    title: "Arovia Pharmacy — Medicines as part of care",
    description:
      "Arovia Pharmacy is part of our healthcare services, helping make everyday medicines easier to access.",
    url: "/pharmacy",
  },
};

export default function Page() {
  return <PharmacyPage />;
}

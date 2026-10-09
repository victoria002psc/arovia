import type { Metadata } from "next";
import { CarePage } from "@/components/sections/CarePage";

export const metadata: Metadata = {
  title: "Arovia Care — Homecare, Clinic, Diagnostics & Ambulance",
  description:
    "When you need care, we're here. Homecare, clinic consultations, diagnostics and ambulance support from Arovia Group.",
  keywords: ["clinic care", "home care services", "diagnostic tests", "ambulance services", "outpatient care"],
  alternates: { canonical: "/care" },
  openGraph: {
    title: "Arovia Care — Homecare, Clinic, Diagnostics & Ambulance",
    description:
      "When you need care, we're here. Homecare, clinic consultations, diagnostics and ambulance support from Arovia Group.",
    url: "/care",
  },
};

export default function Page() {
  return <CarePage />;
}

import type { Metadata } from "next";
import { DigitalHealthPage } from "@/components/sections/DigitalHealthPage";

export const metadata: Metadata = {
  title: "Digital Health — Websites, Apps & Software for Healthcare | Arovia",
  description:
    "We help healthcare businesses turn ideas into websites, mobile apps, custom software and connected platforms.",
  keywords: [
    "healthcare software development",
    "medical website",
    "healthcare app development",
    "digital health",
  ],
  alternates: { canonical: "/digital-health" },
  openGraph: {
    title: "Digital Health — Websites, Apps & Software for Healthcare | Arovia",
    description:
      "We help healthcare businesses turn ideas into websites, mobile apps, custom software and connected platforms.",
    url: "/digital-health",
  },
};

export default function Page() {
  return <DigitalHealthPage />;
}

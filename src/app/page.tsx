import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Pillars } from "@/components/sections/Pillars";

export const metadata: Metadata = {
  title: "Arovia Group — Integrated Healthcare Ecosystem",
  description:
    "Arovia Group brings together healthcare services, pharmacy, medical equipment and digital health solutions within one connected healthcare ecosystem.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <Pillars />
    </>
  );
}

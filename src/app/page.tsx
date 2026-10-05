import type { Metadata } from "next";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { homeEcosystem, homeHero, homePillars, homeSeo } from "@/data/home";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.title,
    description: homeSeo.description,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero {...homeHero} />
      <Ecosystem heading={homeEcosystem.heading} text={homeEcosystem.text} />
      <Pillars items={homePillars.items} />
    </>
  );
}

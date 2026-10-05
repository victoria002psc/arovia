import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Pillars, type PillarItem } from "@/components/sections/Pillars";
import type { IconName } from "@/components/ui/Icon";
import { navItems, pillarDirectory } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Arovia Group — Integrated Healthcare Ecosystem",
  description:
    "Arovia Group brings together healthcare services, pharmacy, medical equipment and digital health solutions within one connected healthcare ecosystem.",
  alternates: { canonical: "/" },
};

const pillarItems: PillarItem[] = pillarDirectory.map((pillar) => ({
  name: pillar.name,
  href: pillar.href,
  summary: pillar.summary,
  colorToken: pillar.colorToken,
  icon: pillar.icon as IconName,
  services: navItems
    .find((item) => item.href === pillar.href)
    ?.children?.map(({ label, href }) => ({ label, href })),
}));

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Healthcare, connected."
        title="Healthcare That Connects"
        text="Arovia Group brings together healthcare services, pharmacy, medical equipment and digital health solutions within one connected healthcare ecosystem."
        primary={{ label: "Explore Arovia", href: "#ecosystem" }}
        secondary={{ label: "Get in Touch", href: "/contact" }}
        image={{ src: "/images/hero-consult.jpg", alt: "A clinician discussing diagnostic imaging with a colleague" }}
      />
      <Ecosystem />
      <Pillars heading="Home Care, Medicines, Medical Equipment Trade and Digital Health" items={pillarItems} />
    </>
  );
}

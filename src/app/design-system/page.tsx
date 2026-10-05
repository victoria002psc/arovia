import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layouts/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";
import { Eyebrow } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";

export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const colors = [
  ["Navy", "bg-arovia-navy", "text-white"],
  ["Charcoal", "bg-arovia-charcoal", "text-white"],
  ["Off-white", "bg-arovia-off", "text-arovia-navy"],
  ["Soft gray", "bg-arovia-soft", "text-arovia-navy"],
  ["Teal accent", "bg-arovia-teal", "text-arovia-navy"],
  ["Care", "bg-arovia-care-dark", "text-white"],
  ["Pharmacy", "bg-arovia-pharmacy-dark", "text-white"],
  ["Equipment", "bg-arovia-equipment-dark", "text-white"],
  ["Digital", "bg-arovia-digital-dark", "text-white"],
];

export default function DesignSystemPage() {
  return (
    <>
      <Section background="off">
        <Eyebrow>Internal</Eyebrow>
        <Heading level={1} className="mt-3">Design system</Heading>
        <p className="type-lead mt-4 text-arovia-muted">Type, color, buttons, and frames for the healthcare group. This page is not indexed.</p>
      </Section>
      <Section>
        <Heading>Type</Heading>
        <p className="type-display mt-6 text-arovia-navy">Display</p>
        <Heading level={1} className="mt-6">Heading one</Heading>
        <Heading className="mt-4">Heading two</Heading>
        <Heading level={3} className="mt-4">Heading three</Heading>
        <p className="type-lead mt-4">Lead paragraph, kept near 68 characters wide so lines stay comfortable to read.</p>
        <p className="mt-3">Body text uses Inter. Headings use Plus Jakarta Sans.</p>
        <p className="type-eyebrow mt-6 text-arovia-care-dark">Eyebrow</p>
      </Section>
      <Section background="soft">
        <Heading>Color</Heading>
        <p className="mt-3 text-sm text-arovia-muted">Teal is an accent. Small text uses navy or a dark pillar shade so contrast stays at WCAG AA.</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {colors.map(([name, bg, ink]) => (
            <li key={name} className={`rounded-md border border-arovia-navy/10 p-4 ${bg} ${ink}`}>
              {name}
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <Heading>Buttons and links</Heading>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button>Talk to Arovia</Button>
          <Button variant="outline">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="mt-6">
          <TextLink href="/contact">Text link</TextLink>
        </div>
        <Divider className="my-8" />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Design system", href: "/design-system" }]} />
      </Section>
      <Section background="off">
        <Heading>Frames and card</Heading>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ImageFrame alt="Placeholder, 3:2, clinician with a patient" ratio="3/2" />
          <Card>
            <Eyebrow>Card</Eyebrow>
            <p className="mt-3">White surface, hairline border, small shadow. Use sparingly.</p>
          </Card>
        </div>
      </Section>
      <Section>
        <Heading>Section tones</Heading>
        <p className="mt-3">White, off-white, soft gray, and navy.</p>
        <div className="mt-8">
          <Accordion
            items={[
              { id: "one", title: "Accordion", content: "Keyboard arrows, Home, and End move between items." },
              { id: "two", title: "Motion", content: "Reduced motion removes animation." },
            ]}
          />
        </div>
      </Section>
      <Section background="navy">
        <Heading className="text-white">Navy section</Heading>
        <p className="mt-3 text-white/80">White text on deep navy.</p>
      </Section>
    </>
  );
}

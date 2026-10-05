import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { Badge, Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/layouts/Breadcrumbs";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { CTASection } from "@/components/sections/CTASection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { TrustSection } from "@/components/sections/TrustSection";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { certifications, clinicRegistration, isPlaceholder, tagline } from "@/lib/site-info";

export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const swatches = [
  ["Care", "bg-arovia-care"],
  ["Pharmacy", "bg-arovia-medicine"],
  ["Equipment", "bg-arovia-equipment"],
  ["Digital", "bg-arovia-digital"],
  ["Cyan", "bg-arovia-cyan"],
  ["Navy", "bg-arovia-navy"],
] as const;

const gradients = [
  ["Care", "bg-gradient-care"],
  ["Pharmacy", "bg-gradient-medicine"],
  ["Equipment", "bg-gradient-equipment"],
  ["Digital", "bg-gradient-digital"],
  ["Subtle", "bg-gradient-subtle"],
] as const;

const variants = ["primary", "care", "medicine", "equipment", "digital", "outline", "ghost"] as const;

export default function DesignSystemPage() {
  return (
    <>
      <Section>
        <Eyebrow>Temporary</Eyebrow>
        <Heading level={1} className="mt-3">
          Arovia design system
        </Heading>
        <p className="mt-4 max-w-2xl text-slate-600">Primitives, colors and gradients for later phases. This page is not indexed.</p>
        <p className={`mt-4 text-sm ${isPlaceholder(tagline) ? "bg-amber-100 px-2 py-1 text-amber-900" : ""}`}>{tagline}</p>
      </Section>
      <Section background="mist" labelledBy="colors">
        <Heading id="colors">Colors</Heading>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {swatches.map(([name, tone]) => (
            <li key={name}>
              <div className={`h-16 rounded-md ${tone}`} />
              <p className="mt-2 text-sm text-slate-600">{name}</p>
            </li>
          ))}
        </ul>
        <Heading level={3} className="mt-10">
          Gradients
        </Heading>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {gradients.map(([name, tone]) => (
            <li key={name}>
              <div className={`h-16 rounded-md border border-slate-200 ${tone}`} />
              <p className="mt-2 text-sm text-slate-600">{name}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section labelledBy="type">
        <Heading id="type">Type</Heading>
        <div className="mt-6 space-y-3">
          <Heading level={1}>Heading one</Heading>
          <Heading level={2}>Heading two</Heading>
          <Heading level={3}>Heading three</Heading>
          <Heading level={4}>Heading four</Heading>
          <p>Body text for healthcare information.</p>
          <small className="block text-slate-500">Small supporting text.</small>
          <Eyebrow>Eyebrow label</Eyebrow>
          <Badge>Badge</Badge>
        </div>
      </Section>
      <Section background="subtle" labelledBy="actions">
        <Heading id="actions">Buttons</Heading>
        <div className="mt-6 flex flex-wrap gap-3">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button loading>Loading</Button>
          <Button href="/contact" variant="outline">
            Link
          </Button>
        </div>
      </Section>
      <Section labelledBy="surfaces">
        <Heading id="surfaces">Card, icon and accordion</Heading>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <Icon name="HeartPulse" label="Care" className="h-6 w-6 text-arovia-care" />
            <Heading level={3} className="mt-4">
              Care
            </Heading>
            <p className="mt-2 text-sm text-slate-600">Clinic, Homecare, Diagnostics and Ambulance.</p>
          </Card>
          <div className="space-y-6">
            <Accordion items={[{ id: "one", title: "Single item", content: "One panel stays open." }]} />
            <Accordion
              allowMultiple
              items={[
                { id: "a", title: "First", content: "Multiple mode, first panel." },
                { id: "b", title: "Second", content: "Multiple mode, second panel." },
              ]}
            />
          </div>
        </div>
      </Section>
      <Section>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Design system", href: "/design-system" }]} />
      </Section>
      <PageHero eyebrow="Inner page" title="Page hero" summary="Summary passed in as data." />
      <Services
        heading="Services"
        items={[
          { title: "Clinic", description: "Clinic", href: "/care/clinic" },
          { title: "Pharmacy", description: "Pharmacy", href: "/pharmacy" },
        ]}
      />
      <WhoWeServe heading="Who it serves" items={[{ title: "Patients and families", description: "People using Arovia services." }]} />
      <HowItWorks heading="How it works" steps={[{ title: "Contact", description: "Send an inquiry." }]} />
      <TrustSection items={[{ label: "Certifications", value: certifications }, { label: "Clinic registration", value: clinicRegistration }]} />
      <ContactStrip />
      <CTASection heading="Talk to Arovia" text="Contact Arovia Group." primary={{ label: "Talk to Arovia", href: "/contact" }} secondary={{ label: "About", href: "/about" }} />
    </>
  );
}

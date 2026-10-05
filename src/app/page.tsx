import type { Metadata } from "next";
import Link from "next/link";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pillars } from "@/components/sections/Pillars";
import { Services } from "@/components/sections/Services";
import { TrustSection } from "@/components/sections/TrustSection";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import {
  homeAudiences,
  homeEcosystem,
  homeFaqs,
  homeFinalCta,
  homeHero,
  homeHow,
  homePartnership,
  homePillars,
  homeSeo,
  homeServices,
  homeTechnology,
  homeTrust,
  homeWhy,
} from "@/data/home";
import { phoneDisplay, phoneTel } from "@/lib/site-info";

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
      <Section labelledBy="ecosystem-heading">
        <Heading id="ecosystem-heading">{homeEcosystem.heading}</Heading>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{homeEcosystem.text}</p>
      </Section>
      <Pillars heading={homePillars.heading} items={homePillars.items} />
      <Section background="mist" labelledBy="why-heading">
        <Heading id="why-heading">{homeWhy.heading}</Heading>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {homeWhy.items.map((item) => (
            <li key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <Heading level={3}>{item.title}</Heading>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>
      <HowItWorks heading={homeHow.heading} intro={homeHow.intro} steps={homeHow.steps} />
      <Services heading={homeServices.heading} intro={homeServices.intro} items={homeServices.items} />
      <WhoWeServe heading={homeAudiences.heading} intro={homeAudiences.intro} items={homeAudiences.items} />
      <TrustSection heading="Trust, quality and safety" items={homeTrust} />
      <Section labelledBy="technology-heading">
        <Heading id="technology-heading">{homeTechnology.heading}</Heading>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{homeTechnology.text}</p>
        <Button href={homeTechnology.cta.href} variant="digital" className="mt-6">
          {homeTechnology.cta.label}
        </Button>
      </Section>
      <Section background="subtle" labelledBy="partnership-heading">
        <Heading id="partnership-heading">{homePartnership.heading}</Heading>
        <p className="mt-4 max-w-3xl text-slate-600">{homePartnership.text}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {homePartnership.actions.map((action) => (
            <Button key={action.href} href={action.href} variant="outline">
              {action.label}
            </Button>
          ))}
        </div>
      </Section>
      <Section labelledBy="faq-heading">
        <Heading id="faq-heading">Questions? We Have Answers</Heading>
        <div className="mt-6 max-w-3xl">
          <FAQAccordion items={homeFaqs} />
        </div>
        <Link href="/faq" className="mt-6 inline-flex min-h-11 items-center font-semibold text-arovia-navy underline-offset-4 hover:underline">
          View All FAQs
        </Link>
      </Section>
      <CTASection
        heading={homeFinalCta.heading}
        text={homeFinalCta.text}
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: `Call ${phoneDisplay}`, href: phoneTel }}
      />
      <ContactStrip />
    </>
  );
}

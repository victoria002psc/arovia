import { CTASection, type CtaLink } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { HowItWorks, type StepItem } from "@/components/sections/HowItWorks";
import { PageHero } from "@/components/sections/PageHero";
import { Services, type ServiceGridItem } from "@/components/sections/Services";
import { TrustSection, type TrustItem } from "@/components/sections/TrustSection";
import { WhoWeServe, type AudienceItem } from "@/components/sections/WhoWeServe";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import type { Crumb } from "@/components/layouts/Breadcrumbs";

export interface ServicePageTemplateProps {
  breadcrumbs: Crumb[];
  eyebrow?: string;
  title: string;
  summary: string;
  overview?: string;
  services?: ServiceGridItem[];
  audiences?: AudienceItem[];
  benefits?: AudienceItem[];
  steps?: StepItem[];
  reasons?: AudienceItem[];
  trust?: TrustItem[];
  faqs?: { question: string; answer: string }[];
  cta?: { heading: string; text: string; primary: CtaLink; secondary?: CtaLink };
}

function Notes({ heading, items }: { heading: string; items?: AudienceItem[] }) {
  if (!items || items.length === 0) return null;
  return (
    <Section>
      <Heading>{heading}</Heading>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <li key={item.title}>
            <Card className="h-full">
              <Heading level={3}>{item.title}</Heading>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ServicePageTemplate({
  breadcrumbs,
  eyebrow,
  title,
  summary,
  overview,
  services,
  audiences,
  benefits,
  steps,
  reasons,
  trust,
  faqs,
  cta,
}: ServicePageTemplateProps) {
  return (
    <>
      <PageHero breadcrumbs={breadcrumbs} eyebrow={eyebrow} title={title} summary={summary} />
      {overview && (
        <Section>
          <Heading>Overview</Heading>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{overview}</p>
        </Section>
      )}
      {services && <Services heading="Services included" items={services} />}
      {audiences && <WhoWeServe heading="Who it serves" items={audiences} />}
      <Notes heading="Key benefits" items={benefits} />
      {steps && <HowItWorks heading="How it works" steps={steps} />}
      <Notes heading="Why choose this service" items={reasons} />
      {trust && <TrustSection items={trust} />}
      {faqs && faqs.length > 0 && (
        <Section>
          <Heading>Questions</Heading>
          <div className="mt-6 max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </Section>
      )}
      {cta && <CTASection heading={cta.heading} text={cta.text} primary={cta.primary} secondary={cta.secondary} />}
    </>
  );
}

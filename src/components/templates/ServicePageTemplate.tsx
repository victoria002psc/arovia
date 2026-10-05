import Link from "next/link";
import type { ContentPage } from "@/types";
import { Breadcrumbs } from "@/components/layouts/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { TrustSection } from "@/components/sections/TrustSection";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { clinicRegistration, importExportRegistrations, pharmacyLicense } from "@/lib/site-info";
import { relatedFor } from "@/lib/related";
import { fillCopy, pillarClasses } from "@/lib/utils";

const accents: Record<ContentPage["pillar"], string> = {
  care: "bg-arovia-care",
  medicine: "bg-arovia-medicine",
  equipment: "bg-arovia-equipment",
  digital: "bg-arovia-digital",
};

function text(value?: string) {
  return value ? fillCopy(value) : "";
}

export function ServicePageTemplate({ page }: { page: ContentPage }) {
  const tone = pillarClasses(page.pillar);
  const related = relatedFor(page.path);
  const showCareNotice = page.path.startsWith("/care") || page.path.startsWith("/pharmacy");
  const showEmergency = page.path === "/care/ambulance";
  const trust = [
    page.path.startsWith("/care") ? { label: "Clinic registration", value: clinicRegistration } : null,
    page.path.startsWith("/pharmacy") ? { label: "Pharmacy license", value: pharmacyLicense } : null,
    page.path.startsWith("/equipment-trade") ? { label: "Export registration", value: importExportRegistrations } : null,
  ].filter((item): item is { label: string; value: string } => Boolean(item));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: page.breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: crumb.href,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Section background="mist">
        <div className={`mb-6 h-1 w-16 rounded-full ${accents[page.pillar]}`} />
        <Breadcrumbs items={page.breadcrumbs} />
        <p className={`mt-6 text-xs font-semibold uppercase tracking-[0.18em] ${tone.text}`}>{page.eyebrow}</p>
        <Heading level={1} className="mt-3">
          {text(page.title)}
        </Heading>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">{text(page.subheading)}</p>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{text(page.intro)}</p>
        {showEmergency && (
          <p className="mt-4 max-w-3xl rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
            In a life-threatening emergency, call local emergency services. This page does not promise a response time.
          </p>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={page.primaryCta.href} variant={page.pillar === "medicine" ? "medicine" : page.pillar}>
            {page.primaryCta.label}
          </Button>
          {page.secondaryCta && (
            <Button href={page.secondaryCta.href} variant="outline">
              {page.secondaryCta.label}
            </Button>
          )}
        </div>
      </Section>

      {page.audiences && (
        <Section>
          <Heading>{page.audiencesTitle}</Heading>
          {page.audiencesIntro && <p className="mt-3 max-w-3xl text-slate-600">{text(page.audiencesIntro)}</p>}
          <ul className="mt-8 divide-y divide-arovia-navy/10 border-y border-arovia-navy/10">
            {page.audiences.map((item) => (
              <li key={item.title} className="py-5">
                <Heading level={3}>{item.title}</Heading>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text(item.description)}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {page.services && (
        <Section id="services" background="white">
          <Heading>{page.servicesTitle ?? "Services included"}</Heading>
          {page.servicesIntro && <p className="mt-3 max-w-3xl text-slate-600">{text(page.servicesIntro)}</p>}
          <div className="mt-8 grid gap-5">
            {page.services.map((service) => (
              <article key={service.title} className="border-t border-arovia-navy/10 py-8">
                <Heading level={3}>{service.title}</Heading>
                <p className="mt-2 max-w-3xl text-slate-600">{text(service.description)}</p>
                {service.included && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {service.included.map((item) => (
                      <li key={item} className="text-sm text-slate-700">
                        {text(item)}
                      </li>
                    ))}
                  </ul>
                )}
                {service.whenToUse && <p className="mt-4 text-sm text-slate-600">When to use: {service.whenToUse.map(text).join(" · ")}</p>}
                {service.href && (
                  <Link href={service.href} className={`mt-4 inline-flex min-h-11 items-center text-sm font-semibold ${tone.text}`}>
                    View {service.title}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </Section>
      )}

      {page.steps && (
        <Section background="mist">
          <Heading>{page.stepsTitle ?? "How it works"}</Heading>
          {page.stepsIntro && <p className="mt-3 text-slate-600">{text(page.stepsIntro)}</p>}
          <ol className="mt-8 divide-y divide-arovia-navy/10 border-t border-arovia-navy/10">
            {page.steps.map((step, index) => (
              <li key={step.title} className="py-5">
                <p className={`text-sm font-semibold ${tone.text}`}>{String(index + 1).padStart(2, "0")}</p>
                <Heading level={3} className="mt-2">
                  {step.title}
                </Heading>
                <p className="mt-2 text-sm text-slate-600">{text(step.description)}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {page.why && (
        <Section>
          <Heading>{page.whyTitle ?? "Why choose this service"}</Heading>
          <ul className="mt-8 divide-y divide-arovia-navy/10 border-t border-arovia-navy/10">
            {page.why.map((item) => (
              <li key={item.title} className="py-5">
                <Heading level={3}>{item.title}</Heading>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text(item.description)}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {trust.length > 0 && <TrustSection items={trust} />}

      {showCareNotice && (
        <Section>
          <Heading level={3}>Medical disclaimer</Heading>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
            Information on this page is general and does not replace advice from a qualified clinician. In a medical emergency, contact local emergency services.
          </p>
        </Section>
      )}

      {page.faqs && page.faqs.length > 0 && (
        <Section>
          <Heading>Questions</Heading>
          <div className="mt-6 max-w-3xl">
            <FAQAccordion items={page.faqs} />
          </div>
        </Section>
      )}

      <Section background="subtle">
        <Heading level={3}>Related pages</Heading>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {related.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="inline-flex min-h-11 items-center text-sm font-semibold text-arovia-navy underline-offset-4 hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CTASection heading={text(page.ctaTitle)} text={text(page.ctaCopy)} primary={page.ctaPrimary} secondary={page.ctaSecondary} />
    </>
  );
}

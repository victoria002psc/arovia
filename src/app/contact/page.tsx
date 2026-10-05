import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Heading } from "@/components/ui/Heading";
import { faqs } from "@/content/faqs";
import {
  addressSingleLine,
  businessHours,
  email,
  isPlaceholder,
  mapLink,
  phoneDisplay,
  phoneTel,
  showWhatsApp,
  whatsappHref,
} from "@/lib/site-info";

export const metadata: Metadata = {
  title: "Contact Arovia Group — Healthcare, Equipment, Digital Solutions",
  description: "Get in touch with Arovia. Contact us for healthcare services, equipment sourcing, digital health projects, or partnerships.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Arovia Group — Healthcare, Equipment, Digital Solutions",
    description: "Get in touch with Arovia. Contact us for healthcare services, equipment sourcing, digital health projects, or partnerships.",
    url: "/contact",
  },
};

const cards = [
  ["Healthcare", "Clinic appointments, home care, diagnostics, ambulance, and pharmacy.", "healthcare"],
  ["Equipment", "Import, export, medical equipment, and medical supplies.", "equipment"],
  ["Digital Health", "Medical apps, websites, platforms, and digital solutions.", "digital"],
  ["Partnership", "Institutions and businesses exploring a working relationship.", "partnership"],
  ["General", "Any other question for Arovia Group.", "general"],
] as const;

export default function ContactPage({ searchParams }: { searchParams?: { type?: string } }) {
  const contactFaqs = faqs.filter((item) => ["what-is-arovia", "who-served", "service-area", "standards"].includes(item.id));

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Arovia Group",
    url: "/contact",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <header className="bg-arovia-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10">
          <Heading level={1}>Get in Touch With Arovia Group</Heading>
          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            Questions about our services? Ready to partner with us? Arovia Group is in Guntur, Andhra Pradesh.
          </p>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[1fr_1.1fr] lg:px-10">
        <div>
          <Heading>Contact options</Heading>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li>
              <a className="font-semibold text-arovia-navy underline-offset-4 hover:underline" href={`mailto:${email}`}>
                {email}
              </a>
            </li>
            <li>
              <a className="font-semibold text-arovia-navy underline-offset-4 hover:underline" href={phoneTel}>
                {phoneDisplay}
              </a>
            </li>
            <li>
              <a className="underline-offset-4 hover:underline" href={mapLink}>
                {addressSingleLine}
              </a>
            </li>
            {showWhatsApp && (
              <li>
                <a className="font-semibold text-arovia-navy underline-offset-4 hover:underline" href={whatsappHref}>
                  WhatsApp
                </a>
              </li>
            )}
            {isPlaceholder(businessHours) ? (
              <li className="bg-amber-100 px-2 py-1 text-amber-950">{businessHours}</li>
            ) : (
              <li>{businessHours}</li>
            )}
          </ul>
          <a href={mapLink} className="mt-4 inline-flex min-h-11 items-center font-semibold text-arovia-navy underline-offset-4 hover:underline">
            Open in Google Maps
          </a>
          <Heading level={3} className="mt-10">
            Enquiry types
          </Heading>
          <ul className="mt-4 space-y-3">
            {cards.map(([title, copy, type]) => (
              <li key={type} className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-arovia-navy">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{copy}</p>
                <Link href={`/contact?type=${type}`} className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-arovia-navy underline-offset-4 hover:underline">
                  Start a {title} enquiry
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <Heading level={2}>Send a message</Heading>
          <div className="mt-6">
            <ContactForm initialType={searchParams?.type} />
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-5">
          <Heading>Questions</Heading>
          <div className="mt-4">
            <FAQAccordion items={contactFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}

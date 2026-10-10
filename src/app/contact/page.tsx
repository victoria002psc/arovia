import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { address, businessDays, businessHours, email, mapLink, phoneDisplay, phoneTel } from "@/lib/site-info";

export const metadata: Metadata = {
  title: "Contact Arovia",
  description: "Have a question, need more information, or want to discuss a healthcare requirement? Contact Arovia Group in Guntur.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Arovia",
    description: "Have a question, need more information, or want to discuss a healthcare requirement? Contact Arovia Group in Guntur.",
    url: "/contact",
  },
};

const addressLines = [
  `${address.shop},`,
  `${address.street},`,
  `${address.city} – ${address.postalCode},`,
  `${address.state}, ${address.country}`,
];

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Arovia",
    url: "/contact",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <section className="relative overflow-hidden bg-[#F7F8F6]">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
          <Image
            src="/images/contact-doctor.jpg"
            alt="A physician in a white coat speaking with a patient in a bright clinic"
            fill
            priority
            sizes="50vw"
            className="object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F8F6] from-0% via-[#F7F8F6]/80 via-[28%] to-transparent" />
        </div>
        <div className="relative mx-auto flex min-h-[260px] max-w-wide flex-col justify-center px-5 py-8 md:h-[280px] md:py-0 lg:px-10">
          <p className="text-xs font-semibold tracking-[0.16em] text-arovia-teal">GET IN TOUCH</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-arovia-navy sm:text-5xl">Contact Arovia</h1>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-arovia-charcoal">
            Have a question, need more information, or want to discuss a healthcare requirement? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F8F6] px-5 pb-16 pt-4 lg:px-10">
        <div className="mx-auto grid max-w-wide items-stretch gap-5 lg:grid-cols-2">
          <article className="flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
            <div className="p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-[0.14em] text-arovia-teal">CONTACT INFORMATION</p>
              <h2 className="mt-2 font-heading text-[1.7rem] font-semibold leading-tight text-arovia-navy">Get in touch with Arovia</h2>
              <p className="mt-2 text-sm leading-relaxed text-arovia-charcoal">
                Our team is ready to assist you. Reach out to us through email or phone, or visit our location.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a href={`mailto:${email}`} className="flex items-center gap-3 rounded-xl bg-[#E7F6F4] px-3.5 py-3 text-arovia-navy">
                  <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-arovia-teal" strokeWidth={1.75} />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">Email Us</span>
                    <span className="block truncate text-xs text-arovia-charcoal">{email}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="ml-auto h-4 w-4 shrink-0" />
                </a>
                <a href={phoneTel} className="flex items-center gap-3 rounded-xl bg-[#E7F3FB] px-3.5 py-3 text-arovia-navy">
                  <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-[#3B82C4]" strokeWidth={1.75} />
                  <span>
                    <span className="block text-sm font-semibold">Call Us</span>
                    <span className="block text-xs text-arovia-charcoal">{phoneDisplay}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="ml-auto h-4 w-4 shrink-0" />
                </a>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-arovia-teal" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-sm font-semibold text-arovia-navy">Our Address</h3>
                    {addressLines.map((line) => (
                      <p key={line} className="text-sm leading-relaxed text-arovia-charcoal">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock3 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-arovia-teal" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-sm font-semibold text-arovia-navy">Business Hours</h3>
                    <p className="text-sm text-arovia-charcoal">{businessHours}</p>
                    <p className="text-sm text-arovia-charcoal">{businessDays}</p>
                  </div>
                </div>
              </div>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-arovia-navy px-4 text-sm font-semibold text-white"
              >
                <MapPin aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                Open in Google Maps
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <div className="relative mt-2 min-h-[240px] w-full flex-1">
              <Image
                src="/images/contact-building.jpg"
                alt="Modern glass building with Arovia signage and landscaped grounds"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </article>

          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold tracking-[0.14em] text-arovia-teal">SEND A MESSAGE</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-arovia-navy">We&apos;d love to hear from you</h2>
            <p className="mt-3 text-sm leading-relaxed text-arovia-charcoal">
              Fill in the form below for a service enquiry. Do not submit sensitive medical details — see our{" "}
              <Link href="/privacy" className="font-semibold text-arovia-navy underline-offset-4 hover:underline">
                Privacy Notice
              </Link>
              .
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

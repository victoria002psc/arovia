import Link from "next/link";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { TextLink } from "@/components/ui/TextLink";
import { addressSingleLine, email, mapLink, phoneDisplay, phoneTel } from "@/lib/site-info";

const careServices = [
  { label: "Homecare", text: "Nursing and personal care at home.", href: "/care/homecare" },
  { label: "Diagnostics", text: "Laboratory tests and health checkups.", href: "/care/diagnostics" },
  { label: "Ambulance", text: "Patient transport. Call local emergency services in a life-threatening emergency.", href: "/care/ambulance" },
  { label: "Clinic", text: "Consultations and treatment planning.", href: "/care/clinic" },
];

export function HomeContinue() {
  return (
    <>
      <section className="bg-white" aria-labelledby="care-story">
        <div className="mx-auto grid max-w-wide items-center gap-12 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-5">
            <ImageFrame src="/images/care.jpg" alt="A clinician sitting with a patient" ratio="4/5" />
          </div>
          <div className="lg:col-span-7">
            <h2 id="care-story" className="font-heading text-4xl font-semibold text-arovia-navy sm:text-5xl">
              Care Designed Around People
            </h2>
            <p className="type-lead mt-5">Homecare, diagnostics, ambulance support, and clinic visits, arranged as one care service.</p>
            <ul className="mt-10 divide-y divide-arovia-navy/10 border-y border-arovia-navy/10">
              {careServices.map((service) => (
                <li key={service.href} className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr] sm:items-baseline">
                  <Link href={service.href} className="font-heading text-xl font-semibold text-arovia-navy">
                    {service.label}
                  </Link>
                  <p className="text-arovia-charcoal">{service.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <TextLink href="/care">Explore Care</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-arovia-off" aria-labelledby="pharmacy-story">
        <div className="mx-auto grid max-w-wide items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div className="lg:order-2">
            <ImageFrame src="/images/pharmacy.jpg" alt="A pharmacist working in a pharmacy" ratio="3/2" />
          </div>
          <div>
            <h2 id="pharmacy-story" className="font-heading text-4xl font-semibold text-arovia-navy">
              Pharmacy Within a Connected Healthcare Journey
            </h2>
            <p className="type-lead mt-5">
              One pharmacy for prescription medicines and healthcare products, with a pharmacist available to explain how to take them. Prices, stock, and delivery are confirmed with the team.
            </p>
            <div className="mt-8">
              <TextLink href="/pharmacy">Explore Pharmacy</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-arovia-navy text-white" aria-labelledby="equipment-story">
        <div className="mx-auto grid max-w-wide items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <ImageFrame src="/images/equipment.jpg" alt="Hospital and diagnostic equipment" ratio="16/9" />
          <div>
            <h2 id="equipment-story" className="font-heading text-4xl font-semibold">
              Medical Equipment. Connected to Global Markets.
            </h2>
            <p className="type-lead mt-5 text-white/80">Export support and medical equipment for healthcare businesses and organizations.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <Link href="/equipment-trade/export" className="underline-offset-4 hover:underline">
                  Export
                </Link>
              </li>
              <li>
                <Link href="/equipment-trade/medical-equipment" className="underline-offset-4 hover:underline">
                  Medical Equipment
                </Link>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <TextLink href="/equipment-trade" className="text-white">
                Explore Equipment Trade
              </TextLink>
              <Link href="/contact?type=equipment" className="text-sm font-medium underline-offset-4 hover:underline">
                Request an Equipment Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="digital-story">
        <div className="mx-auto grid max-w-wide items-end gap-12 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-5">
            <h2 id="digital-story" className="font-heading text-4xl font-semibold text-arovia-navy">
              Technology Built Around Healthcare
            </h2>
            <p className="type-lead mt-5">Software for clinical and operational work: applications, websites, platforms, and a solution built for a specific need.</p>
            <ul className="mt-8 space-y-3">
              {[
                ["/digital-health/apps", "Medical Apps"],
                ["/digital-health/websites", "Medical Websites"],
                ["/digital-health/platforms", "Healthcare Platforms"],
                ["/digital-health/solutions", "Digital Solutions"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="font-heading text-2xl text-arovia-navy underline-offset-4 hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <TextLink href="/digital-health">Explore Digital Health</TextLink>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ImageFrame src="/images/digital.jpg" alt="A clinician reviewing information on a healthcare system" ratio="16/9" />
          </div>
        </div>
      </section>

      <section className="border-t border-arovia-navy/10 bg-arovia-off" aria-labelledby="journeys">
        <h2 id="journeys" className="sr-only">
          Who Arovia works with
        </h2>
        <div className="mx-auto grid max-w-wide md:grid-cols-2">
          <div className="px-5 py-16 lg:px-10 lg:py-24">
            <h3 className="font-heading text-3xl font-semibold text-arovia-navy">For Individuals & Families</h3>
            <p className="mt-4">Healthcare services, pharmacy, and care.</p>
            <div className="mt-8">
              <TextLink href="/care">Explore Healthcare</TextLink>
            </div>
          </div>
          <div className="border-t border-arovia-navy/10 px-5 py-16 md:border-l md:border-t-0 lg:px-10 lg:py-24">
            <h3 className="font-heading text-3xl font-semibold text-arovia-navy">For Healthcare Organizations</h3>
            <p className="mt-4">Equipment trade and digital health solutions.</p>
            <div className="mt-8">
              <TextLink href="/contact?type=partnership">Work With Arovia</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="why-arovia">
        <div className="mx-auto max-w-content px-5 py-20 lg:px-10 lg:py-28">
          <h2 id="why-arovia" className="font-heading text-4xl font-semibold text-arovia-navy">
            Why Arovia
          </h2>
          <ul className="mt-10 space-y-6">
            {[
              ["Connected capabilities", "Care, pharmacy, equipment trade, and digital health are part of one group."],
              ["More than one service", "A person or an organization can start with the service they need and stay with the same group."],
              ["Patient-focused", "Care planning starts with the person and the family around them."],
              ["Support for healthcare businesses", "Hospitals, clinics, and other organizations can enquire about equipment and technology."],
              ["Technology around the work", "Digital health is built for a healthcare task, not as a separate product line with invented results."],
            ].map(([title, copy]) => (
              <li key={title} className="border-t border-arovia-navy/10 pt-6">
                <h3 className="font-heading text-2xl font-semibold text-arovia-navy">{title}</h3>
                <p className="mt-2">{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-arovia-navy text-white" aria-labelledby="contact-cta">
        <div className="mx-auto max-w-wide px-5 py-20 lg:px-10">
          <h2 id="contact-cta" className="max-w-3xl font-heading text-4xl font-semibold">
            Begin Your Healthcare Journey Today
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">Talk to the team, or send a question. The reply uses the details you provide.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 font-semibold text-arovia-navy">
              Talk to Arovia
            </Link>
            <Link href="/contact?type=general" className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/40 px-5 font-semibold">
              Request Information
            </Link>
          </div>
          <address className="mt-10 space-y-1 text-sm not-italic text-white/80">
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p>
              <a href={phoneTel}>{phoneDisplay}</a>
            </p>
            <p>
              <a href={mapLink}>{addressSingleLine}</a>
            </p>
          </address>
        </div>
      </section>
    </>
  );
}

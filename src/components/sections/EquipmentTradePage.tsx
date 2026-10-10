import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Building2,
  Check,
  ClipboardList,
  FlaskConical,
  Globe2,
  Handshake,
  HeartPulse,
  Hospital,
  Microscope,
  Package,
  Stethoscope,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layouts/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";

/** Page-level Equipment Trade colours — do not change global tokens. */
const et = {
  blue: "#075A9C",
  navy: "#10243A",
  support: "#287EB8",
  pale: "#EEF6FC",
  iconBg: "#DFF0FC",
  soft: "#F8F8F5",
  body: "#42566E",
  border: "#DCE6EF",
} as const;

const categories = [
  {
    title: "Patient monitoring and ECG",
    description: "Patient monitors, ECG machines and related accessories.",
    icon: Activity,
    image: "/images/home-equipment.jpg",
    imageClass: "object-cover object-[72%_28%]",
    alt: "Patient monitoring equipment in a clinical setting",
  },
  {
    title: "Emergency and critical-care equipment",
    description: "Defibrillators, ventilators, infusion pumps and more.",
    icon: HeartPulse,
    image: "/images/care-ambulance.jpg",
    imageClass: "object-cover object-center",
    alt: "Emergency and critical-care medical context",
  },
  {
    title: "Diagnostic and laboratory equipment",
    description: "Laboratory analyzers, imaging and diagnostic tools.",
    icon: FlaskConical,
    image: "/images/care-diagnostics.jpg",
    imageClass: "object-cover object-center",
    alt: "Laboratory and diagnostic equipment",
  },
  {
    title: "Surgical and other clinical equipment",
    description: "Surgical equipment, OT setup and specialty devices.",
    icon: Stethoscope,
    image: "/images/equipment.jpg",
    imageClass: "object-cover object-[40%_center]",
    alt: "Surgical and clinical equipment in an operating theatre",
  },
] as const;

const services = [
  {
    title: "Import & Export Support",
    icon: Globe2,
    image: "/images/home-organizations.jpg",
    imageClass: "object-cover object-center",
    alt: "Healthcare organization context for import and export coordination",
    points: [
      "Sourcing discussions and market options",
      "Cross-border shipment coordination",
      "Documentation support (as applicable)",
    ],
    href: "/equipment-trade/export",
    linkLabel: "Learn more about Export",
  },
  {
    title: "Medical Equipment Sourcing",
    icon: ClipboardList,
    image: "/images/home-equipment.jpg",
    imageClass: "object-cover object-[60%_40%]",
    alt: "Medical equipment used in clinical environments",
    points: [
      "Equipment selection and specification review",
      "Connecting with relevant sourcing options",
      "Quotation based on requirements and availability",
    ],
    href: "/equipment-trade/medical-equipment",
    linkLabel: "Learn more about Medical Equipment",
  },
] as const;

const audiences = [
  {
    title: "Hospitals and healthcare facilities",
    description: "Setups, upgrades and replacement conversations for clinical equipment.",
    icon: Hospital,
  },
  {
    title: "Diagnostic centres",
    description: "Laboratory and diagnostic tools matched to the tests you run.",
    icon: Microscope,
  },
  {
    title: "Clinics and specialty centres",
    description: "Equipment aligned to the procedures you perform.",
    icon: Building2,
  },
  {
    title: "Medical businesses and distributors",
    description: "Sourcing and trade conversations for healthcare ventures.",
    icon: Handshake,
  },
] as const;

const steps = [
  {
    title: "Share requirements",
    text: "Tell us the equipment, quantity and destination.",
  },
  {
    title: "Review specifications",
    text: "We discuss models, intended use and availability.",
  },
  {
    title: "Receive a quotation",
    text: "You get options with commercial details and terms.",
  },
  {
    title: "Confirm next steps",
    text: "If you proceed, we coordinate the agreed scope.",
  },
] as const;

const faqs = [
  {
    id: "et-import-export",
    question: "Do you import and export medical equipment?",
    answer:
      "Yes. Arovia Equipment Trade supports import and export conversations as an intermediary. Destinations, volumes, paperwork and timelines are confirmed per enquiry — we do not publish a fixed market list until verified.",
  },
  {
    id: "et-install-training",
    question: "Is installation and training included?",
    answer:
      "Installation and training are not automatic. Availability depends on the equipment, sourcing partner, destination and the scope agreed in your quotation. We will state clearly what is included before you proceed.",
  },
  {
    id: "et-quality",
    question: "What quality standards does the equipment meet?",
    answer:
      "Applicable standards (for example ISO, CE or FDA markings) vary by product and sourcing partner. Specific certifications and compliance details are listed in the quotation once the equipment and destination are confirmed.",
  },
];

function AccentRule({ className = "" }: { className?: string }) {
  return <span className={`block h-[3px] w-10 rounded-full ${className}`} style={{ backgroundColor: et.blue }} aria-hidden="true" />;
}

function InquiryButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact?type=equipment"
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold text-white transition-opacity hover:opacity-95 ${className}`}
      style={{ backgroundColor: et.blue }}
    >
      Request an Equipment Inquiry
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-xl lg:max-w-none lg:min-h-[26rem]">
      {/* Soft ring graphics from the reference */}
      <div className="pointer-events-none absolute inset-[-6%] z-0" aria-hidden="true">
        <svg viewBox="0 0 520 420" className="h-full w-full" fill="none">
          <circle cx="310" cy="210" r="168" stroke={et.iconBg} strokeWidth="18" />
          <circle cx="310" cy="210" r="128" stroke="#C5DEF0" strokeWidth="2" opacity="0.9" />
          <circle cx="310" cy="210" r="92" stroke={et.pale} strokeWidth="10" />
        </svg>
      </div>
      <div className="relative z-10 h-full overflow-hidden rounded-2xl bg-white shadow-[0_24px_48px_-28px_rgba(16,36,58,0.35)] ring-1 ring-[#DCE6EF]">
        <Image
          src="/images/home-equipment.jpg"
          alt="Medical equipment including monitors and clinical devices"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 46vw"
          className="object-cover object-[68%_35%]"
        />
      </div>
    </div>
  );
}

function EnquiryPanelVisual() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white ring-1" style={{ borderColor: et.border }}>
      <Image
        src="/images/equipment.jpg"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 28vw"
        className="object-cover object-center opacity-90"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/55 via-[#10243A]/10 to-transparent" />
      <div className="absolute inset-x-4 bottom-4 rounded-lg bg-white/95 p-3 shadow-sm backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:p-4">
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4" style={{ color: et.blue }} strokeWidth={1.75} aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: et.blue }}>
            Equipment Enquiry
          </p>
        </div>
        <div className="mt-3 space-y-2" aria-hidden="true">
          <div className="h-1.5 w-full rounded-full bg-[#EEF6FC]" />
          <div className="h-1.5 w-[88%] rounded-full bg-[#EEF6FC]" />
          <div className="h-1.5 w-[64%] rounded-full bg-[#EEF6FC]" />
        </div>
      </div>
    </div>
  );
}

export function EquipmentTradePage() {
  return (
    <div className="bg-white" style={{ color: et.body }}>
      {/* A — Breadcrumb */}
      <div className="border-b" style={{ borderColor: et.border, backgroundColor: et.soft }}>
        <div className="mx-auto max-w-wide px-5 py-3 lg:px-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Equipment Trade", href: "/equipment-trade" },
            ]}
          />
        </div>
      </div>

      {/* B — Hero */}
      <section className="overflow-hidden" style={{ backgroundColor: et.soft }}>
        <div className="mx-auto grid max-w-wide items-center gap-10 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:px-10 lg:py-16 xl:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <AccentRule />
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: et.blue }}>
                Equipment Trade
              </p>
            </div>
            <h1
              className="mt-5 max-w-xl font-heading text-[2.35rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.15rem]"
              style={{ color: et.navy }}
            >
              Medical Equipment.
              <br />
              Connected to
              <br />
              Healthcare Organizations.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed sm:text-[1.05rem]" style={{ color: et.body }}>
              Import and export support, plus medical equipment for hospitals, clinics, and healthcare businesses.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <InquiryButton />
              <Link
                href="#services"
                className="inline-flex h-11 items-center justify-center rounded-md border bg-white px-5 text-sm font-semibold transition-colors hover:bg-[#F8F8F5]"
                style={{ borderColor: et.border, color: et.navy }}
              >
                Explore services
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* C — Equipment categories */}
      <section className="bg-white">
        <div className="mx-auto max-w-wide px-5 py-14 lg:px-10 lg:py-18">
          <Reveal>
            <AccentRule />
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: et.navy }}>
              Equipment categories
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: et.body }}>
              We can help you enquire about a wide range of medical equipment categories.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => (
              <li key={item.title}>
                <Reveal className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-[#DCE6EF] bg-white p-4">
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: et.iconBg }}
                      >
                        <item.icon className="h-5 w-5" style={{ color: et.blue }} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <div className="relative h-16 w-20 overflow-hidden rounded-lg bg-[#F3F7FB] ring-1 ring-[#DCE6EF]">
                        <Image src={item.image} alt="" fill sizes="80px" className={item.imageClass} aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-semibold leading-snug" style={{ color: et.navy }}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: et.body }}>
                      {item.description}
                    </p>
                    <span className="sr-only">{item.alt}</span>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed" style={{ color: et.body }}>
            Categories support enquiries — they are not a live inventory or stock guarantee.
          </p>
        </div>
      </section>

      {/* D — Two core services */}
      <section id="services" className="scroll-mt-24" style={{ backgroundColor: et.pale }}>
        <div className="mx-auto max-w-wide px-5 py-14 lg:px-10 lg:py-18">
          <Reveal>
            <AccentRule />
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: et.navy }}>
              Two core services
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: et.body }}>
              We connect you with suitable sourcing options and support import/export coordination.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <li key={service.title}>
                <Reveal className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#DCE6EF] bg-white sm:flex-row">
                    <div className="relative aspect-[16/11] w-full shrink-0 sm:aspect-auto sm:w-[44%] sm:min-h-[15.5rem]">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 22vw"
                        className={service.imageClass}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
                        style={{ backgroundColor: et.iconBg }}
                      >
                        <service.icon className="h-5 w-5" style={{ color: et.blue }} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-heading text-xl font-semibold" style={{ color: et.navy }}>
                        {service.title}
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: et.body }}>
                            <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: et.blue }} strokeWidth={2.25} aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline"
                        style={{ color: et.blue }}
                      >
                        {service.linkLabel}
                        <ArrowRight aria-hidden="true" className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed" style={{ color: et.body }}>
            Arovia acts as an intermediary for sourcing and coordination. We do not manufacture equipment or publish a guaranteed stock list.
          </p>
        </div>
      </section>

      {/* E — Who we work with */}
      <section className="bg-white">
        <div className="mx-auto max-w-wide px-5 py-14 lg:px-10 lg:py-18">
          <Reveal>
            <AccentRule />
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: et.navy }}>
              Who we work with
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: et.body }}>
              Built for healthcare organizations and medical businesses.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {audiences.map((item, index) => (
              <li
                key={item.title}
                className={`flex gap-3 lg:px-5 ${index > 0 ? "lg:border-l" : ""} ${index === 0 ? "lg:pl-0" : ""} ${index === audiences.length - 1 ? "lg:pr-0" : ""}`}
                style={{ borderColor: et.border }}
              >
                <span
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: et.iconBg }}
                >
                  <item.icon className="h-5 w-5" style={{ color: et.blue }} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold leading-snug" style={{ color: et.navy }}>
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: et.body }}>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* F — How an enquiry works */}
      <section style={{ backgroundColor: et.pale }}>
        <div className="mx-auto max-w-wide px-5 py-14 lg:px-10 lg:py-18">
          <Reveal className="text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: et.navy }}>
              How an equipment enquiry works
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed" style={{ color: et.body }}>
              A simple process from requirement to next steps.
            </p>
          </Reveal>

          <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div
              className="pointer-events-none absolute left-[12%] right-[12%] top-5 hidden h-px lg:block"
              style={{ backgroundColor: et.support }}
              aria-hidden="true"
            />
            {steps.map((step, index) => (
              <li key={step.title} className="relative text-center lg:px-2">
                <Reveal>
                  <span
                    className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: et.blue }}
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold" style={{ color: et.navy }}>
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed" style={{ color: et.body }}>
                    {step.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* G — Questions + enquiry CTA */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-wide gap-10 px-5 py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-12 lg:px-10 lg:py-18">
          <Reveal>
            <AccentRule />
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight" style={{ color: et.navy }}>
              Questions
            </h2>
            <div className="mt-6">
              <Accordion
                className="overflow-hidden rounded-xl border border-[#DCE6EF] bg-white divide-[#DCE6EF]"
                items={faqs.map((item) => ({
                  id: item.id,
                  title: item.question,
                  content: item.answer,
                }))}
              />
            </div>
          </Reveal>

          <Reveal>
            <aside className="rounded-2xl p-5 sm:p-6" style={{ backgroundColor: et.pale }}>
              <EnquiryPanelVisual />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: et.blue }}>
                Need a quote?
              </p>
              <h3 className="mt-2 font-heading text-2xl font-semibold leading-snug" style={{ color: et.navy }}>
                Share your requirements with us.
              </h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: et.body }}>
                Our team will discuss suitable options based on your needs.
              </p>
              <div className="mt-6">
                <InquiryButton className="w-full sm:w-auto" />
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

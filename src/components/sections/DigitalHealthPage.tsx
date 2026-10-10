import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  Globe2,
  Home,
  Layers,
  Lightbulb,
  MessageCircle,
  Microscope,
  Pill,
  Rocket,
  Settings2,
  Smartphone,
  Stethoscope,
  Users,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layouts/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";

/** Page-level Digital Health colours — do not change global tokens. */
const dh = {
  purple: "#7655A6",
  navy: "#10243A",
  pale: "#F3EFF9",
  body: "#42566E",
  border: "#E5DFEE",
  soft: "#FAF8FC",
} as const;

const labels = [
  { label: "Websites", icon: Globe2 },
  { label: "Mobile apps", icon: Smartphone },
  { label: "Custom software", icon: Settings2 },
  { label: "Digital platforms", icon: Layers },
] as const;

const services = [
  {
    title: "Build your online presence",
    description: "A website that helps people find your services and contact you.",
    examples: [
      "Hospital and clinic websites",
      "Diagnostic centre websites",
      "Pharmacy and healthcare business websites",
      "Service information and enquiry pages",
    ],
    href: "/digital-health/websites",
    icon: Globe2,
    visual: "website" as const,
  },
  {
    title: "Create a mobile app",
    description: "An app for your patients, customers or team.",
    examples: [
      "Patient-facing apps",
      "Appointment and communication apps",
      "Healthcare professional tools",
      "Business-specific mobile apps",
    ],
    href: "/digital-health/apps",
    icon: Smartphone,
    visual: "phone" as const,
  },
  {
    title: "Make your work easier",
    description: "Software that helps reduce manual work and organise daily tasks.",
    examples: [
      "Booking and scheduling",
      "Internal management tools",
      "Reporting and administration",
      "Business-specific software",
    ],
    href: "/digital-health/solutions",
    icon: Settings2,
    visual: "dashboard" as const,
  },
  {
    title: "Connect your systems",
    description: "Bring different tools and activities together in one place.",
    examples: [
      "Portals and dashboards",
      "Multi-user platforms",
      "Connections between existing systems",
      "Connected digital workflows",
    ],
    href: "/digital-health/platforms",
    icon: Layers,
    visual: "connect" as const,
  },
] as const;

const audiences = [
  { title: "Hospitals and healthcare organisations", icon: Building2 },
  { title: "Clinics and individual practices", icon: Stethoscope },
  { title: "Diagnostic centres and laboratories", icon: Microscope },
  { title: "Pharmacies and medical businesses", icon: Pill },
  { title: "Homecare and service providers", icon: Home },
  { title: "Healthcare startups and new digital ideas", icon: Users },
] as const;

const steps = [
  {
    title: "Understand the need",
    text: "Discuss your goals, users and the problem you want to solve.",
    icon: MessageCircle,
  },
  {
    title: "Define the right approach",
    text: "Explore whether a website, app, custom software or connected platform is the right fit.",
    icon: Lightbulb,
  },
  {
    title: "Plan the solution",
    text: "Clarify the main features, priorities and project requirements.",
    icon: CalendarDays,
  },
  {
    title: "Move towards development",
    text: "Agree on the next steps and implementation approach.",
    icon: Rocket,
  },
] as const;

const useCases = [
  {
    title: "Make services easier to find",
    text: "A clear website can explain your services, locations, contact details and enquiry options.",
    image: "/images/home-organizations.jpg",
    imageClass: "object-cover object-center",
    alt: "Example: a healthcare organisation website context",
    icon: Globe2,
  },
  {
    title: "Simplify appointments and communication",
    text: "A suitable digital solution may help with appointment requests, reminders and patient communication.",
    image: "/images/home-digital.jpg",
    imageClass: "object-cover object-[70%_center]",
    alt: "Example: digital tools supporting healthcare communication",
    icon: Smartphone,
  },
  {
    title: "Bring business activities into one place",
    text: "Custom software can help organise workflows, reduce manual work and support reporting.",
    image: "/images/digital.jpg",
    imageClass: "object-cover object-center",
    alt: "Example: software supporting everyday healthcare operations",
    icon: Settings2,
  },
  {
    title: "Build a new healthcare idea",
    text: "Have an idea for a healthcare app or platform? We can help define the users, key features and a practical first version.",
    image: "/images/home-cta.jpg",
    imageClass: "object-cover object-center",
    alt: "Example: partnership conversation for a new digital idea",
    icon: Lightbulb,
  },
] as const;

const startPoints = [
  "Start with your business need, not technical jargon.",
  "Explore the right format for your idea.",
  "Focus on the most important requirements first.",
  "Discuss integrations and operational needs where relevant.",
  "Define the project scope before implementation.",
] as const;

const faqs = [
  {
    id: "dh-idea-only",
    question: "What if I only have an idea and no technical plan?",
    answer:
      "That is a normal starting point. We begin with the problem, the people involved and what success would look like, then shape a practical next step.",
  },
  {
    id: "dh-formats",
    question: "Can you help with websites, mobile apps and custom software?",
    answer:
      "Yes. Digital Health covers websites and portals, mobile apps, custom software and connected platforms. The right format depends on your goals and users.",
  },
  {
    id: "dh-business-fit",
    question: "Can a solution be designed for my healthcare business?",
    answer:
      "We discuss your organisation, workflows and constraints first. Solutions are scoped to your situation rather than sold as a one-size product.",
  },
  {
    id: "dh-connect",
    question: "Can you help connect existing systems?",
    answer:
      "Connections between systems can be explored when the project needs them. Feasibility depends on the systems involved and is confirmed during discovery.",
  },
  {
    id: "dh-start",
    question: "How do we get started and scope a project?",
    answer:
      "Share your idea or challenge through the contact form. We review the requirements together and outline scope, priorities and next steps before implementation.",
  },
];

function AccentRule({ className = "" }: { className?: string }) {
  return <span className={`block h-[3px] w-10 rounded-full ${className}`} style={{ backgroundColor: dh.purple }} aria-hidden="true" />;
}

function PrimaryCta({ href = "/contact?type=digital", children = "Discuss Your Digital Idea", className = "" }: { href?: string; children?: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold text-white transition-[opacity,transform] hover:opacity-95 ${className}`}
      style={{ backgroundColor: dh.purple }}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

function LaptopMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-[1.1rem] border border-[#D8D0E6] bg-[#2A2438] p-2 shadow-[0_28px_50px_-28px_rgba(16,36,58,0.55)]">
        <div className="overflow-hidden rounded-[0.75rem] bg-white">
          <div className="flex items-center gap-2 border-b border-[#EEE8F5] bg-[#FAF8FC] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#E5DFEE]" />
            <span className="h-2 w-2 rounded-full bg-[#E5DFEE]" />
            <span className="h-2 w-2 rounded-full bg-[#E5DFEE]" />
            <span className="ml-2 h-5 flex-1 rounded bg-white ring-1 ring-[#E5DFEE]" />
          </div>
          <div className="grid grid-cols-[52px_1fr] gap-2 p-2.5 sm:grid-cols-[64px_1fr]">
            <div className="space-y-2 rounded-lg bg-[#F3EFF9] p-2">
              {[Globe2, CalendarDays, Users, Settings2].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-white"
                  style={{ color: dh.purple }}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                </span>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold" style={{ color: dh.navy }}>
                  Digital Health
                </p>
                <span className="rounded-full px-2 py-0.5 text-[9px] font-semibold text-white" style={{ backgroundColor: dh.purple }}>
                  Overview
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-[#F3EFF9] p-2">
                  <p className="text-[9px] font-medium" style={{ color: dh.body }}>
                    Appointments
                  </p>
                  <div className="mt-2 space-y-1.5">
                    <div className="h-1.5 w-full rounded-full bg-white" />
                    <div className="h-1.5 w-[80%] rounded-full bg-white" />
                    <div className="h-1.5 w-[65%] rounded-full bg-white" />
                  </div>
                </div>
                <div className="rounded-lg bg-white p-2 ring-1 ring-[#E5DFEE]">
                  <p className="text-[9px] font-medium" style={{ color: dh.body }}>
                    Activity
                  </p>
                  <svg viewBox="0 0 120 48" className="mt-1 h-10 w-full" aria-hidden="true">
                    <path d="M4 36 C20 34 28 18 44 22 C60 26 68 10 84 14 C98 17 108 28 116 20" fill="none" stroke={dh.purple} strokeWidth="2.2" />
                    <path d="M4 40 C22 38 30 28 48 30 C66 32 74 22 90 24 C102 25 110 32 116 28" fill="none" stroke="#C4B0E0" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {["Clinic site", "Team tools", "Reports"].map((label) => (
                  <div key={label} className="rounded-md bg-[#FAF8FC] px-1.5 py-2 text-center ring-1 ring-[#E5DFEE]">
                    <p className="text-[8px] font-semibold" style={{ color: dh.navy }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-2 w-[72%] rounded-b-lg bg-[#2A2438]" />
      <div className="mx-auto h-1.5 w-[42%] rounded-b-md bg-[#1C1726]" />
    </div>
  );
}

function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-[1.35rem] border-[3px] border-[#2A2438] bg-white shadow-[0_22px_40px_-24px_rgba(16,36,58,0.55)]">
        <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-[#D8D0E6]" />
        <div className="space-y-2 px-2.5 pb-3 pt-2">
          <p className="text-[10px] font-semibold" style={{ color: dh.navy }}>
            Care app
          </p>
          <div className="rounded-xl p-2.5 text-white" style={{ backgroundColor: dh.purple }}>
            <p className="text-[9px] opacity-90">Today</p>
            <p className="mt-1 text-[11px] font-semibold">Upcoming visit</p>
            <p className="mt-1 text-[9px] opacity-90">Confirm details in the app</p>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {["Book", "Messages", "Reports", "Profile"].map((item) => (
              <div key={item} className="rounded-lg bg-[#F3EFF9] px-2 py-2.5 text-center">
                <p className="text-[9px] font-semibold" style={{ color: dh.navy }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroComposition() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        className="pointer-events-none absolute -right-6 -top-8 h-40 w-40 rounded-full opacity-70 blur-2xl sm:h-52 sm:w-52"
        style={{ background: "radial-gradient(circle, rgba(118,85,166,0.28), transparent 68%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-10 left-4 h-36 w-36 rounded-full opacity-60 blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(118,85,166,0.18), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="dh-float relative">
        <LaptopMockup className="w-[92%] sm:w-[88%]" />
        <div className="dh-float-delay absolute -bottom-2 right-0 w-[34%] sm:-bottom-3 sm:right-2 sm:w-[32%]">
          <PhoneMockup />
        </div>
      </div>
      <p className="sr-only">
        Illustrative concept mockups of a healthcare dashboard and mobile app. These are examples, not existing Arovia products.
      </p>
    </div>
  );
}

function ServiceVisual({ type }: { type: (typeof services)[number]["visual"] }) {
  if (type === "website") {
    return (
      <div className="relative h-36 overflow-hidden rounded-xl bg-white ring-1 ring-[#E5DFEE]">
        <div className="flex h-6 items-center gap-1 border-b border-[#EEE8F5] bg-[#FAF8FC] px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E5DFEE]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#E5DFEE]" />
          <span className="ml-2 h-2.5 flex-1 rounded bg-white ring-1 ring-[#E5DFEE]" />
        </div>
        <div className="grid h-[calc(100%-1.5rem)] grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#F3EFF9] p-2">
            <div className="h-2 w-10 rounded bg-white" />
            <div className="mt-3 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-white/80" />
              <div className="h-1.5 w-[85%] rounded bg-white/80" />
              <div className="h-1.5 w-[70%] rounded bg-white/80" />
            </div>
          </div>
          <div className="p-2">
            <div className="h-8 rounded-md" style={{ backgroundColor: dh.purple }} />
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <div className="h-10 rounded bg-[#F3EFF9]" />
              <div className="h-10 rounded bg-[#F3EFF9]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "phone") {
    return (
      <div className="relative flex h-36 items-end justify-center overflow-hidden rounded-xl bg-[#F3EFF9] ring-1 ring-[#E5DFEE]">
        <div className="mb-2 w-[42%]">
          <PhoneMockup />
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="relative h-36 overflow-hidden rounded-xl bg-white p-2.5 ring-1 ring-[#E5DFEE]">
        <div className="grid h-full grid-cols-3 gap-1.5">
          <div className="col-span-2 rounded-lg bg-[#F3EFF9] p-2">
            <div className="h-1.5 w-12 rounded bg-white" />
            <svg viewBox="0 0 140 54" className="mt-2 h-[70%] w-full" aria-hidden="true">
              <path d="M4 40 C24 38 34 18 54 22 C74 26 84 12 104 16 C118 19 128 30 136 24" fill="none" stroke={dh.purple} strokeWidth="2.4" />
            </svg>
          </div>
          <div className="space-y-1.5">
            <div className="h-[48%] rounded-lg bg-[#F3EFF9]" />
            <div className="h-[48%] rounded-lg bg-[#FAF8FC] ring-1 ring-[#E5DFEE]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl bg-[#F3EFF9] ring-1 ring-[#E5DFEE]">
      <svg viewBox="0 0 180 100" className="h-[78%] w-[88%]" aria-hidden="true">
        <circle cx="40" cy="50" r="14" fill="white" stroke={dh.purple} strokeWidth="2" />
        <circle cx="90" cy="28" r="12" fill="white" stroke={dh.purple} strokeWidth="2" />
        <circle cx="90" cy="72" r="12" fill="white" stroke={dh.purple} strokeWidth="2" />
        <circle cx="140" cy="50" r="14" fill="white" stroke={dh.purple} strokeWidth="2" />
        <path d="M54 50 H76 M102 32 H126 M102 68 H126 M90 40 V60" stroke={dh.purple} strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="50" r="3" fill={dh.purple} />
        <circle cx="90" cy="28" r="3" fill={dh.purple} />
        <circle cx="90" cy="72" r="3" fill={dh.purple} />
        <circle cx="140" cy="50" r="3" fill={dh.purple} />
      </svg>
    </div>
  );
}

export function DigitalHealthPage() {
  return (
    <div className="bg-white" style={{ color: dh.body }}>
      <style>{`
        @keyframes dh-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .dh-float { animation: dh-float 7s ease-in-out infinite; }
        .dh-float-delay { animation: dh-float 7s ease-in-out infinite; animation-delay: 0.8s; }
        @media (prefers-reduced-motion: reduce) {
          .dh-float, .dh-float-delay { animation: none !important; }
        }
      `}</style>

      {/* Breadcrumb */}
      <div className="border-b" style={{ borderColor: dh.border, backgroundColor: dh.soft }}>
        <div className="mx-auto max-w-wide px-5 py-3 lg:px-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Digital Health", href: "/digital-health" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="overflow-hidden" style={{ backgroundColor: dh.soft }}>
        <div className="mx-auto grid max-w-wide items-center gap-10 px-5 py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:px-10 lg:py-14 xl:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <AccentRule />
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: dh.purple }}>
                Digital Health
              </p>
            </div>
            <h1
              className="mt-5 max-w-xl font-heading text-[2.35rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.05rem]"
              style={{ color: dh.navy }}
            >
              From healthcare idea to digital solution.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed sm:text-[1.05rem]" style={{ color: dh.body }}>
              We help healthcare businesses turn their ideas into websites, mobile apps and software that make their work easier.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryCta />
              <Link
                href="#services"
                className="inline-flex h-11 items-center justify-center rounded-md border bg-white px-5 text-sm font-semibold transition-colors hover:bg-[#F3EFF9]"
                style={{ borderColor: dh.border, color: dh.navy }}
              >
                Explore What We Can Build
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
              {labels.map((item) => (
                <li key={item.label} className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: dh.navy }}>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: dh.pale, color: dh.purple }}>
                    <item.icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <HeroComposition />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-wide px-5 py-14 lg:px-10 lg:py-18">
          <Reveal>
            <AccentRule />
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: dh.navy }}>
              What would you like to bring online?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: dh.body }}>
              Every healthcare business is different. Start with what you want to improve, simplify or make possible.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <li key={service.title} className="h-full">
                <Reveal className="h-full">
                  <article className="group flex h-full flex-col rounded-2xl border border-[#E5DFEE] bg-[#F3EFF9] p-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-28px_rgba(16,36,58,0.45)] motion-reduce:transform-none motion-reduce:transition-none">
                    <ServiceVisual type={service.visual} />
                    <span
                      className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[#E5DFEE]"
                      style={{ color: dh.purple }}
                    >
                      <service.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 font-heading text-lg font-semibold leading-snug" style={{ color: dh.navy }}>
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: dh.body }}>
                      {service.description}
                    </p>
                    <ul className="mt-3 space-y-1.5 text-xs leading-relaxed" style={{ color: dh.body }}>
                      {service.examples.map((example) => (
                        <li key={example} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: dh.purple }} aria-hidden="true" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-5 text-sm font-semibold underline-offset-4 hover:underline"
                      style={{ color: dh.purple }}
                    >
                      Learn more
                      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Audiences */}
      <section style={{ backgroundColor: dh.pale }}>
        <div className="mx-auto max-w-wide px-5 py-14 lg:px-10 lg:py-16">
          <Reveal>
            <AccentRule />
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: dh.navy }}>
              Digital solutions for healthcare businesses
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: dh.body }}>
              Whether you are starting from scratch or improving an existing process, we can discuss the right digital direction for your organisation.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <li key={item.title}>
                <Reveal>
                  <div className="flex items-center gap-3 rounded-xl border border-[#E5DFEE] bg-white px-4 py-3.5">
                    <span
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: dh.pale, color: dh.purple }}
                    >
                      <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <p className="text-sm font-semibold leading-snug" style={{ color: dh.navy }}>
                      {item.title}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-wide px-5 py-14 lg:px-10 lg:py-18">
          <Reveal>
            <AccentRule />
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: dh.navy }}>
              You bring the idea. We help shape the digital path.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: dh.body }}>
              You do not need a complete technical plan. Start with the problem or opportunity you want to address.
            </p>
          </Reveal>

          <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            <div
              className="pointer-events-none absolute left-[8%] right-[8%] top-6 hidden border-t border-dashed lg:block"
              style={{ borderColor: "#C9B9E0" }}
              aria-hidden="true"
            />
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                <Reveal>
                  <div className="flex items-start gap-3 lg:block lg:text-center">
                    <span
                      className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white lg:mx-auto"
                      style={{ backgroundColor: dh.purple }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="lg:mt-4">
                      <span
                        className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#F3EFF9] lg:mx-auto"
                        style={{ color: dh.purple }}
                      >
                        <step.icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h3 className="font-heading text-lg font-semibold" style={{ color: dh.navy }}>
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: dh.body }}>
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ backgroundColor: dh.pale }}>
        <div className="mx-auto max-w-wide px-5 py-14 lg:px-10 lg:py-18">
          <Reveal>
            <AccentRule />
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: dh.navy }}>
              Turn everyday healthcare challenges into digital opportunities.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: dh.body }}>
              Here are some common situations where a digital solution may help. These are examples of possible directions, not completed Arovia projects.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item) => (
              <li key={item.title}>
                <Reveal className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5DFEE] bg-white">
                    <div className="relative aspect-[16/10]">
                      <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1280px) 50vw, 22vw" className={item.imageClass} />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <span
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{ backgroundColor: dh.pale, color: dh.purple }}
                      >
                        <item.icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h3 className="mt-3 font-heading text-lg font-semibold leading-snug" style={{ color: dh.navy }}>
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: dh.body }}>
                        {item.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Getting started + FAQ */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-wide gap-10 px-5 py-14 lg:grid-cols-2 lg:items-start lg:gap-12 lg:px-10 lg:py-18">
          <Reveal>
            <AccentRule />
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight" style={{ color: dh.navy }}>
              A clearer way to begin your digital journey.
            </h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: dh.body }}>
              We focus on your business needs and help you take the next step with clarity.
            </p>
            <ul className="mt-6 space-y-3">
              {startPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: dh.body }}>
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: dh.purple }}
                  >
                    <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#E5DFEE] bg-[#F3EFF9]">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/home-digital.jpg"
                  alt="Illustrative scene of digital tools supporting healthcare work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[65%_center] opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F3EFF9] via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-3xl font-semibold tracking-tight" style={{ color: dh.navy }}>
              Questions about getting started?
            </h2>
            <div className="mt-6">
              <Accordion
                className="overflow-hidden rounded-xl border border-[#E5DFEE] bg-white divide-[#E5DFEE]"
                items={faqs.map((item) => ({
                  id: item.id,
                  title: item.question,
                  content: item.answer,
                }))}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden text-white" style={{ backgroundColor: dh.purple }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.22), transparent 36%), radial-gradient(circle at 85% 70%, rgba(16,36,58,0.28), transparent 42%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-5 py-14 text-center lg:px-10 lg:py-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">Let&apos;s build your digital health solution</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a healthcare idea you want to take digital?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90">
              Tell us what you want to build, improve or bring online. We can discuss your requirements and explore the next steps together.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact?type=digital"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold transition-opacity hover:opacity-95"
                style={{ color: dh.purple }}
              >
                Discuss Your Digital Idea
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/70 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Talk to Arovia
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Ambulance,
  ArrowRight,
  CalendarHeart,
  HeartHandshake,
  HeartPulse,
  Home,
  MessageCircle,
  Microscope,
  Pill,
  Stethoscope,
  Users,
} from "lucide-react";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { carePage } from "@/content/care";

const strip = [
  { label: "Homecare", detail: "Care at home", href: "/care/homecare", icon: Home },
  { label: "Clinic", detail: "Talk to a doctor", href: "/care/clinic", icon: Stethoscope },
  { label: "Diagnostics", detail: "Health tests & checkups", href: "/care/diagnostics", icon: Microscope },
  { label: "Ambulance", detail: "Emergency & patient transport", href: "/care/ambulance", icon: Ambulance },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need.",
    text: "It could be something small, something ongoing, or something urgent.",
  },
  {
    number: "02",
    title: "We'll help you find the right care.",
    text: "Clinic, homecare, diagnostics or transport.",
  },
  {
    number: "03",
    title: "Get the care you need.",
    text: "At home, at a clinic, or wherever the service is available.",
  },
  {
    number: "04",
    title: "We're here if you need us again.",
    text: "Because care doesn't always end after one visit.",
  },
];

const people = [
  {
    title: "Looking after yourself",
    text: "Care for your everyday health needs.",
  },
  {
    title: "Looking after your parents",
    text: "Because getting older shouldn't mean managing everything alone.",
  },
  {
    title: "Helping someone recover",
    text: "Support after illness, treatment or a hospital stay.",
  },
  {
    title: "Ongoing care",
    text: "Making regular healthcare a little easier to manage.",
  },
];

const values = [
  { title: "Personal.", text: "You're not just a number." },
  { title: "Clear.", text: "You should understand what's happening." },
  { title: "Accessible.", text: "Getting care shouldn't feel harder than it already is." },
  { title: "Connected.", text: "When you need more than one service, they should work together." },
  { title: "Respectful.", text: "Every person deserves patience and dignity." },
];

export function CarePage() {
  return (
    <div className="bg-[#F7F4EE] text-arovia-charcoal">
      {/* HERO — asymmetrical editorial */}
      <section className="relative overflow-hidden bg-[#F7F4EE]">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block">
          <Image
            src="/images/care-hero.jpg"
            alt="A caregiver sitting with an older adult at home"
            fill
            priority
            sizes="48vw"
            className="object-cover object-[62%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EE] via-[#F7F4EE]/55 to-transparent" />
          <p className="absolute bottom-8 right-8 max-w-[11rem] text-right font-heading text-xl italic leading-snug text-white/95 drop-shadow">
            Care that feels like family
          </p>
        </div>

        <div className="relative mx-auto max-w-wide px-5 pb-10 pt-12 lg:px-10 lg:pb-12 lg:pt-16">
          <Reveal className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-arovia-teal">Arovia Care</p>
            <h1 className="mt-4 font-heading text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-arovia-navy sm:text-5xl lg:text-[3.25rem]">
              When you need care,
              <br />
              we&apos;re here.
            </h1>
            <div className="mt-5 max-w-md space-y-3 text-base leading-relaxed text-arovia-charcoal">
              <p>Sometimes you need a doctor. Sometimes you need a test. Sometimes you need care at home. And sometimes, you need help right away.</p>
              <p>Arovia brings these services together, so you and your family can get the right care at the right time.</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact?type=healthcare"
                className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md bg-arovia-care-dark px-5 text-sm font-semibold text-white"
              >
                Get Care
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md border border-arovia-navy/20 bg-white/80 px-5 text-sm font-semibold text-arovia-navy backdrop-blur-sm"
              >
                See Our Services
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="relative mt-8 aspect-[5/4] overflow-hidden rounded-xl lg:hidden">
            <Image
              src="/images/care-hero.jpg"
              alt="A caregiver sitting with an older adult at home"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_20%]"
            />
            <p className="absolute bottom-5 right-5 max-w-[11rem] text-right font-heading text-xl italic leading-snug text-white drop-shadow">
              Care that feels like family
            </p>
          </div>

          <Reveal>
            <nav
              aria-label="Care services"
              className="mt-10 grid gap-px overflow-hidden rounded-lg border border-arovia-navy/10 bg-arovia-navy/10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4"
            >
              {strip.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 bg-[#F7F4EE] px-5 py-3.5 transition-colors hover:bg-white"
                >
                  <item.icon aria-hidden="true" className="h-4 w-4 shrink-0 text-arovia-teal" strokeWidth={1.6} />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-arovia-navy">{item.label}</span>
                    <span className="block text-sm text-arovia-muted">{item.detail}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {/* CARE FOR REAL LIFE — editorial bridge */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-wide items-center gap-8 px-5 py-10 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-16">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-h-[22rem] w-full overflow-hidden rounded-lg lg:mx-0 lg:max-h-[26rem]">
              <Image
                src="/images/home-care.jpg"
                alt="A nurse connecting with an older patient"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-arovia-teal">Care for real life</p>
            <h2 className="mt-3 max-w-xl font-heading text-3xl font-semibold tracking-tight text-arovia-navy sm:text-4xl lg:text-[2.5rem]">
              Healthcare isn&apos;t always about going to a hospital.
            </h2>
            <div className="mt-5 grid gap-5 border-t border-arovia-navy/10 pt-5 sm:grid-cols-2">
              <p className="text-base leading-relaxed text-arovia-charcoal">
                It can be checking on your parents at home. Getting a health test done. Talking to a doctor about something that&apos;s been bothering you. Or helping someone get to a hospital safely.
              </p>
              <p className="text-base leading-relaxed text-arovia-charcoal">
                Whatever the need, we&apos;re here to help you take the next step—with care that feels personal, clear and connected.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES — editorial sequence, not equal cards */}
      <section id="services" className="bg-[#F7F4EE]">
        <div className="mx-auto max-w-wide px-5 pt-10 lg:px-10 lg:pt-16">
          <Reveal className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-arovia-navy sm:text-4xl lg:text-[2.5rem]">
              Different situations.
              <br />
              The right care.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-arovia-charcoal">
              Healthcare looks different for everyone. Explore the care you need, whenever you need it.
            </p>
          </Reveal>
        </div>

        {/* Homecare */}
        <div className="mx-auto grid max-w-wide items-center gap-6 px-5 py-10 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:pb-12 lg:pt-10">
          <Reveal>
            <div className="relative aspect-[4/3] max-h-[20rem] overflow-hidden rounded-lg lg:max-h-[22rem]">
              <Image
                src="/images/care-homecare.jpg"
                alt="Home care support shared between a caregiver and an older adult"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.16em] text-arovia-teal">01 · Homecare</p>
            <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-arovia-navy sm:text-[1.75rem]">
              Care at home, when home is where you need to be.
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-arovia-charcoal">
              Support with everyday care, recovery and other healthcare needs—without always having to leave home.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {[
                { label: "Nursing Care", icon: HeartPulse },
                { label: "Elder Care", icon: Users },
                { label: "Recovery Support", icon: Activity },
                { label: "Medication Support", icon: Pill },
              ].map((item) => (
                <li key={item.label} className="inline-flex items-center gap-2 text-sm font-medium text-arovia-navy">
                  <item.icon aria-hidden="true" className="h-4 w-4 text-arovia-teal" strokeWidth={1.7} />
                  {item.label}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Link
                href="/care/homecare"
                className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md bg-arovia-care-dark px-5 text-sm font-semibold text-white"
              >
                Explore Homecare
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Clinic — reverse */}
        <div className="bg-white">
          <div className="mx-auto grid max-w-wide items-center gap-6 px-5 py-10 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-12">
            <Reveal className="lg:order-2">
              <div className="relative aspect-[4/3] max-h-[20rem] overflow-hidden rounded-lg lg:max-h-[22rem]">
                <Image
                  src="/images/contact-doctor.jpg"
                  alt="A doctor listening carefully during a consultation"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-[center_15%]"
                />
              </div>
            </Reveal>
            <Reveal className="lg:order-1">
              <p className="text-xs font-semibold tracking-[0.16em] text-arovia-teal">02 · Clinic</p>
              <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-arovia-navy sm:text-[1.75rem]">
                A doctor who listens.
              </h3>
              <div className="mt-3 max-w-md space-y-2.5 text-base leading-relaxed text-arovia-charcoal">
                <p>A clinic visit should be more than a consultation.</p>
                <p>It should give you a chance to explain what&apos;s happening, ask questions and understand what comes next.</p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {[
                  { label: "General Consultations", icon: Stethoscope },
                  { label: "Specialist Care", icon: Users },
                  { label: "Treatment Planning", icon: CalendarHeart },
                  { label: "Follow-up Care", icon: HeartHandshake },
                ].map((item) => (
                  <li key={item.label} className="inline-flex items-center gap-2 text-sm font-medium text-arovia-navy">
                    <item.icon aria-hidden="true" className="h-4 w-4 text-arovia-teal" strokeWidth={1.7} />
                    {item.label}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link
                  href="/care/clinic"
                  className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md bg-arovia-care-dark px-5 text-sm font-semibold text-white"
                >
                  Visit Arovia Clinic
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Diagnostics */}
        <div className="mx-auto grid max-w-wide items-center gap-6 px-5 py-10 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:pb-12 lg:pt-10">
          <Reveal>
            <div className="relative aspect-[4/3] max-h-[20rem] overflow-hidden rounded-lg lg:max-h-[22rem]">
              <Image
                src="/images/care.jpg"
                alt="A clinician providing careful diagnostic care"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.16em] text-arovia-teal">03 · Diagnostics</p>
            <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-arovia-navy sm:text-[1.75rem]">
              Good care starts with good information.
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-arovia-charcoal">
              From routine tests to specialised diagnostics, our services help you understand what&apos;s happening with your health.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {[
                { label: "Laboratory Testing", icon: Microscope },
                { label: "Health Checkups", icon: Activity },
                { label: "Home Collection", icon: Home },
                { label: "Results Support", icon: MessageCircle },
              ].map((item) => (
                <li key={item.label} className="inline-flex items-center gap-2 text-sm font-medium text-arovia-navy">
                  <item.icon aria-hidden="true" className="h-4 w-4 text-arovia-teal" strokeWidth={1.7} />
                  {item.label}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Link
                href="/care/diagnostics"
                className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md bg-arovia-care-dark px-5 text-sm font-semibold text-white"
              >
                Explore Diagnostics
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ambulance — dark cinematic, distinct but proportionate */}
      <section className="relative overflow-hidden bg-arovia-navy text-white">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          <Image
            src="/images/care-ambulance.jpg"
            alt="Ambulance support available for patient transport"
            fill
            sizes="42vw"
            className="object-cover object-[center_40%] opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-arovia-navy via-arovia-navy/80 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-wide px-5 py-10 lg:px-10 lg:py-14">
          <Reveal className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/80">04 · Ambulance</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-[2.25rem]">When every minute matters.</h2>
            <p className="mt-3 text-base leading-relaxed text-white/80">
              Our ambulance service supports emergency situations, patient transport and hospital transfers.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-100/90">
              In a life-threatening emergency, call local emergency services. This page does not promise a response time.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {["Emergency Support", "Patient Transport", "Hospital Transfers", "Planned Transport"].map((label) => (
                <li key={label} className="border-t border-white/15 pt-2 text-sm font-medium text-white">
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/care/ambulance"
                className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-arovia-navy"
              >
                Explore Ambulance
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="relative mt-6 aspect-[16/9] max-h-[14rem] overflow-hidden rounded-lg lg:hidden">
            <Image
              src="/images/care-ambulance.jpg"
              alt="Ambulance support available for patient transport"
              fill
              sizes="100vw"
              className="object-cover object-[center_40%]"
            />
          </div>
        </div>
      </section>

      {/* Process — typographic, light */}
      <section className="bg-white">
        <div className="mx-auto max-w-wide px-5 py-10 lg:px-10 lg:py-14">
          <Reveal className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-arovia-navy sm:text-[2.25rem]">
              It&apos;s simple to get started.
            </h2>
            <p className="mt-2 text-base leading-relaxed text-arovia-charcoal">
              You don&apos;t need to figure it all out. Just tell us what you need, and we&apos;ll help you from there.
            </p>
          </Reveal>
          <ol className="mt-6 grid gap-0 border-t border-arovia-navy/10 md:grid-cols-4">
            {steps.map((step) => (
              <Reveal key={step.number}>
                <li className="border-b border-arovia-navy/10 py-5 md:border-b-0 md:border-r md:px-5 md:py-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                  <p className="font-heading text-sm font-semibold tracking-[0.14em] text-arovia-teal">{step.number}</p>
                  <h3 className="mt-2 font-heading text-base font-semibold text-arovia-navy">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-arovia-muted">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* People — balanced image + typography */}
      <section className="bg-[#F7F4EE]">
        <div className="mx-auto grid max-w-wide items-center gap-6 px-5 py-10 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-14">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-h-[22rem] w-full overflow-hidden rounded-lg lg:mx-0 lg:max-h-[26rem]">
              <Image
                src="/images/home-families.jpg"
                alt="A family spending time together at home"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-arovia-navy sm:text-[2.25rem]">
              Healthcare for the people who matter to you.
            </h2>
            <ul className="mt-5 divide-y divide-arovia-navy/10 border-y border-arovia-navy/10">
              {people.map((item) => (
                <li key={item.title} className="py-3.5">
                  <h3 className="font-heading text-base font-semibold text-arovia-navy">{item.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-arovia-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Values — typography led */}
      <section className="bg-white">
        <div className="mx-auto max-w-wide px-5 py-10 lg:px-10 lg:py-14">
          <Reveal className="max-w-xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-arovia-navy sm:text-[2.25rem]">
              More than services.
              <br />
              Real support.
            </h2>
          </Reveal>
          <ul className="mt-6 space-y-0">
            {values.map((item) => (
              <Reveal key={item.title}>
                <li className="grid gap-1.5 border-t border-arovia-navy/10 py-4 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:items-baseline sm:gap-8">
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-arovia-navy sm:text-2xl">{item.title}</h3>
                  <p className="max-w-xl text-base leading-relaxed text-arovia-charcoal">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust — restrained */}
      <section className="bg-[#F7F4EE]">
        <div className="mx-auto max-w-wide px-5 py-10 lg:px-10 lg:py-14">
          <Reveal className="grid gap-6 border-y border-arovia-navy/10 py-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12 lg:py-8">
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-arovia-navy sm:text-[2.25rem]">
                Healthcare you can trust.
              </h2>
              <p className="mt-2 max-w-md text-base leading-relaxed text-arovia-charcoal">
                Your health deserves care that is professional, responsible and transparent.
              </p>
            </div>
            <ul className="space-y-3.5">
              {[
                { title: "Quality Care", text: "Care delivered by the clinical team assigned to your service." },
                { title: "Patient Safety", text: "Practical safeguards around assessment, transport and follow-through." },
                { title: "Clear Information", text: "We explain options in plain language before you decide." },
                { title: "Responsible Care", text: "Every recommendation starts with what is appropriate for the person in front of us." },
              ].map((item) => (
                <li key={item.title} className="border-l-2 border-arovia-teal/40 pl-4">
                  <h3 className="font-heading text-base font-semibold text-arovia-navy">{item.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-arovia-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-wide gap-6 px-5 py-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-10 lg:px-10 lg:py-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-arovia-teal">Questions</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-arovia-navy sm:text-[2.25rem]">
              Need to know something?
            </h2>
          </Reveal>
          <Reveal>
            <FAQAccordion items={carePage.faqs ?? []} />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/home-families.jpg" alt="" fill sizes="100vw" className="object-cover object-[center_30%]" />
          <div className="absolute inset-0 bg-[#0B172A]/72" />
        </div>
        <div className="relative mx-auto max-w-wide px-5 py-12 lg:px-10 lg:py-16">
          <Reveal className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-[2.25rem]">
              Not sure what you need?
              <br />
              That&apos;s okay.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-white/85">
              Tell us what&apos;s going on. We&apos;ll help you find the right place to start.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?type=healthcare"
                className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-arovia-navy"
              >
                Talk to Arovia
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md border border-white/60 px-5 text-sm font-semibold text-white"
              >
                See Our Services
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

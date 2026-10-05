import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Arovia Group — Healthcare Reimagined",
  description: "Learn about Arovia Group's mission to integrate healthcare care, medicines, equipment, and technology into one seamless ecosystem.",
  alternates: { canonical: "/about" },
};

const values = [
  ["Patient-Centered Care", "Healthcare decisions start with what's best for the patient. Everything we do serves that purpose."],
  ["Integration & Coordination", "Siloed healthcare is inefficient. We bring our four pillars together to create seamless experiences."],
  ["Professional Excellence", "Our team includes qualified healthcare professionals, specialists, engineers, and experts. Excellence is non-negotiable."],
  ["Innovation", "We use technology and modern healthcare approaches to make healthcare better, faster, and more accessible."],
  ["Trust & Transparency", "Healthcare requires trust. We're transparent about what we do, how we do it, and what qualifications we bring."],
  ["Accessibility", "Great healthcare shouldn't be limited to those with resources. We're committed to making healthcare accessible."],
];

const pillars = [
  ["Care", "Our Care pillar delivers direct healthcare to patients through clinics, home care, diagnostics, and emergency services. Healthcare is most effective when it's accessible."],
  ["Pharmacy", "The pharmacy provides prescription medicines and healthcare products, with pharmacist guidance. Availability and delivery are confirmed with the team."],
  ["Equipment Trade", "Equipment Trade covers export support and medical equipment for healthcare organizations."],
  ["Digital Health", "Our Digital Health pillar builds technology that makes healthcare more efficient, accessible, and coordinated."],
];

export default function AboutPage() {
  return (
    <>
      <header className="bg-arovia-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-arovia-cyan">About</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-arovia-navy sm:text-5xl">
            About Arovia Group: Healthcare Reimagined as an Integrated Ecosystem
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            We&apos;re building a better way to access healthcare, medicines, equipment, and technology—all working together.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Arovia Group is a startup healthcare company in Guntur, Andhra Pradesh, founded on a simple belief: healthcare shouldn&apos;t be fragmented. Patients shouldn&apos;t have to navigate multiple providers for care, medicines, and equipment. Healthcare institutions shouldn&apos;t struggle to coordinate care and technology. We&apos;re integrating four healthcare pillars into one seamless ecosystem.
          </p>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-16 md:grid-cols-2 md:px-6">
        <article className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-3 text-slate-600">
            To create an integrated healthcare ecosystem that delivers accessible, coordinated, and technology-enabled healthcare solutions for individuals, families, healthcare institutions, and medical businesses.
          </p>
          <p className="mt-3 text-xs uppercase tracking-wide text-slate-400">Working statement until the official mission is confirmed</p>
        </article>
        <article className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Our Vision for Healthcare</h2>
          <p className="mt-3 text-slate-600">
            A world where healthcare is interconnected—where care, medicines, equipment, and technology work seamlessly together to improve health outcomes and increase accessibility.
          </p>
          <p className="mt-3 text-xs uppercase tracking-wide text-slate-400">Working statement until the official vision is confirmed</p>
        </article>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold">What We Believe In</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map(([title, copy]) => (
              <li key={title} className="rounded-3xl bg-slate-50 p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="text-3xl font-semibold">A Connected Ecosystem of Four Pillars</h2>
        <p className="mt-3 max-w-3xl text-lg text-slate-600">
          Rather than being four separate businesses, our four pillars work together as an integrated healthcare ecosystem.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {pillars.map(([title, copy]) => (
            <li key={title} className="rounded-3xl border border-slate-200 bg-white p-5">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
            </li>
          ))}
        </ul>
        <h3 className="mt-12 text-2xl font-semibold">Why We Built It This Way</h3>
        <p className="mt-3 max-w-3xl text-slate-600">
          A patient might need a clinic visit, a prescription, home support, diagnostics, and emergency response. A hospital might need equipment and the software to coordinate care. Integrating those capabilities serves the need better than a single-focus provider.
        </p>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold">How We Operate</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Quality First", "Every service meets professional healthcare standards."],
              ["Integration", "The four pillars are coordinated functions of one ecosystem."],
              ["Patient Outcomes", "Success is measured by health outcomes, service quality, and satisfaction."],
              ["Technology-Enabled", "Digital tools support human expertise."],
              ["Scalable Growth", "We grow while keeping the quality of care intact."],
            ].map(([title, copy]) => (
              <li key={title}>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{copy}</p>
              </li>
            ))}
          </ul>
          <h2 className="mt-12 text-3xl font-semibold">Professional Standards & Healthcare Compliance</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Licenses, registrations, and certifications will be published here once confirmed. Until then, this page does not claim approvals that have not been verified.
          </p>
          <h2 className="mt-12 text-3xl font-semibold">Healthcare Professionals & Experts</h2>
          <p className="mt-3 max-w-3xl bg-amber-100 px-3 py-2 text-slate-900">[FOUNDER / LEADERSHIP]</p>
          <p className="mt-3 max-w-3xl bg-amber-100 px-3 py-2 text-slate-900">[FOUNDING YEAR]</p>
          <p className="mt-3 max-w-3xl text-slate-600">
            Named leadership, clinicians, and technology leads will be added when the team list is ready. Arovia is built by healthcare professionals, specialists, technology experts, and operators. Service coverage beyond Guntur is [SERVICE AREAS / DELIVERY COVERAGE].
          </p>
          <div className="mt-8">
            <Link href="/contact?type=partnership" className="inline-flex min-h-11 items-center font-semibold text-cyan-700">
              Discuss Partnership Opportunities
            </Link>
          </div>
        </div>
      </section>
      <CTASection
        title="Ready to Explore Our Services?"
        copy="Built on healthcare expertise. Committed to integration. Focused on outcomes."
        primary={{ label: "Explore Care", href: "/care" }}
        secondary={{ label: "Contact", href: "/contact" }}
      />
    </>
  );
}

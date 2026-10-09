import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Pill, Shield, Users } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const principles = [
  {
    title: "Easy access",
    text: "Medicines when you need them.",
    icon: Pill,
  },
  {
    title: "Trusted care",
    text: "A responsible approach to medicines.",
    icon: Shield,
  },
  {
    title: "Ongoing support",
    text: "Because healthcare doesn't end with one visit.",
    icon: Users,
  },
];

const closingPoints = [
  { label: "Care", text: "Supporting better health", icon: Heart },
  { label: "Medicines", text: "A part of everyday care", icon: Pill },
  { label: "People", text: "For a healthier tomorrow", icon: Users },
];

function GoldRule({ className = "" }: { className?: string }) {
  return <span className={`block h-px w-10 bg-[#C5A059] ${className}`} aria-hidden="true" />;
}

function PharmacyCta({
  href = "/contact?type=pharmacy",
  variant = "solid",
}: {
  href?: string;
  variant?: "solid" | "light" | "outline";
}) {
  const styles =
    variant === "light"
      ? "bg-white text-arovia-pharmacy-dark"
      : variant === "outline"
        ? "border border-arovia-pharmacy bg-transparent text-arovia-pharmacy"
        : "bg-arovia-pharmacy text-white";

  return (
    <Link
      href={href}
      className={`inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold ${styles}`}
    >
      Talk to Arovia
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-[#EDE4DF] sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[34rem]">
      {/* Soft natural wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, rgba(197,160,89,0.22), transparent 42%), radial-gradient(circle at 72% 18%, rgba(122,48,64,0.1), transparent 38%), linear-gradient(160deg, #F4EBE6 0%, #E8DDD6 55%, #E2D5CE 100%)",
        }}
        aria-hidden="true"
      />

      {/* Soft wood-like surface */}
      <div
        className="absolute inset-x-[6%] bottom-[18%] top-[10%] rounded-sm opacity-40"
        style={{
          background:
            "linear-gradient(90deg, rgba(139,105,78,0.18) 0%, rgba(196,160,120,0.12) 40%, rgba(139,105,78,0.2) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Prescription pad */}
      <div className="absolute left-[7%] top-[11%] w-[70%] rotate-[-2.5deg] bg-[#FFFCF8] p-5 shadow-[0_22px_48px_-28px_rgba(11,23,42,0.5)] sm:p-7 lg:left-[8%] lg:w-[66%]">
        <div className="flex items-start justify-between border-b border-[#E6DDD2] pb-3">
          <p className="font-heading text-3xl font-semibold tracking-tight text-arovia-pharmacy sm:text-4xl">Rx</p>
          <GoldRule className="mt-3" />
        </div>
        <div className="mt-6 space-y-3.5">
          <div className="h-px w-full bg-[#E6DDD2]" />
          <div className="h-px w-[94%] bg-[#E6DDD2]" />
          <div className="h-px w-[80%] bg-[#E6DDD2]" />
          <div className="h-px w-[88%] bg-[#E6DDD2]" />
          <div className="h-px w-[62%] bg-[#E6DDD2]" />
        </div>
        <p className="mt-8 font-heading text-lg italic leading-snug text-arovia-pharmacy/85 sm:text-xl">
          For a healthier tomorrow.
        </p>
      </div>

      {/* Burgundy organic form + vertical words */}
      <div className="absolute bottom-0 right-0 h-[62%] w-[56%]">
        <svg viewBox="0 0 340 400" className="h-full w-full" aria-hidden="true" preserveAspectRatio="none">
          <path d="M70 0 C150 70 30 150 95 220 C155 285 55 330 0 400 L340 400 L340 0 Z" fill="#7A3040" />
          <path
            d="M115 35 C175 105 80 165 130 235 C170 285 125 330 95 365"
            fill="none"
            stroke="#C5A059"
            strokeWidth="1.3"
            opacity="0.75"
          />
          <path
            d="M165 70 C215 130 130 190 175 255 C210 300 175 340 150 370"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.85"
            opacity="0.45"
          />
        </svg>
        <p className="absolute bottom-7 right-3 flex flex-col items-end gap-2.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/90 sm:bottom-9 sm:right-5 sm:text-[11px]">
          <span>People</span>
          <span>Care</span>
          <span>Medicines</span>
          <span>Wellbeing</span>
        </p>
      </div>
    </div>
  );
}

function BotanicalVisual() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-[#F7EFEE] lg:min-h-[30rem]">
      <svg viewBox="0 0 420 520" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="pharmLeafA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A85766" />
            <stop offset="100%" stopColor="#7A3040" />
          </linearGradient>
          <linearGradient id="pharmLeafB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C78993" />
            <stop offset="100%" stopColor="#8E3E4F" />
          </linearGradient>
        </defs>
        <path d="M210 28 C285 105 318 195 248 285 C200 350 168 405 145 490" fill="none" stroke="#C5A059" strokeWidth="1.4" opacity="0.7" />
        <path d="M210 50 C145 125 112 215 165 305 C205 370 235 420 265 495" fill="none" stroke="#C5A059" strokeWidth="1" opacity="0.4" />
        <ellipse cx="160" cy="165" rx="62" ry="118" transform="rotate(-30 160 165)" fill="url(#pharmLeafA)" opacity="0.92" />
        <ellipse cx="255" cy="235" rx="54" ry="104" transform="rotate(26 255 235)" fill="url(#pharmLeafB)" opacity="0.88" />
        <ellipse cx="190" cy="315" rx="48" ry="92" transform="rotate(-20 190 315)" fill="url(#pharmLeafA)" opacity="0.78" />
        <ellipse cx="275" cy="365" rx="42" ry="82" transform="rotate(32 275 365)" fill="url(#pharmLeafB)" opacity="0.72" />
        <ellipse cx="230" cy="430" rx="34" ry="64" transform="rotate(-12 230 430)" fill="url(#pharmLeafA)" opacity="0.55" />
        <path d="M255 150 C275 175 268 205 250 225" fill="none" stroke="#C5A059" strokeWidth="0.9" opacity="0.55" />
        <circle cx="305" cy="110" r="3" fill="#C5A059" opacity="0.8" />
        <circle cx="115" cy="275" r="2.5" fill="#C5A059" opacity="0.55" />
        <circle cx="318" cy="410" r="2" fill="#C5A059" opacity="0.5" />
      </svg>
    </div>
  );
}

export function PharmacyPage() {
  return (
    <div className="bg-[#FDFBF7] text-arovia-charcoal">
      {/* SECTION 1 — HERO */}
      <section className="overflow-hidden bg-[#F7F4EE]">
        <div className="mx-auto grid max-w-wide items-center gap-12 px-5 py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20 lg:px-10 lg:py-24">
          <Reveal>
            <div className="flex items-center gap-3">
              <GoldRule />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-arovia-pharmacy">Pharmacy</p>
            </div>
            <h1 className="mt-6 max-w-lg font-heading text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-arovia-navy sm:text-5xl lg:text-[3.6rem]">
              Medicines
              <br />
              when you <span className="text-arovia-pharmacy">need them.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-arovia-charcoal sm:text-[1.05rem]">
              Arovia Pharmacy is part of our healthcare services, helping make everyday medicines easier to access.
            </p>
            <div className="mt-9">
              <PharmacyCta />
            </div>
          </Reveal>
          <Reveal>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — HUMAN INTRODUCTION */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-wide items-center gap-12 px-5 py-18 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
          <Reveal className="lg:pr-6">
            <GoldRule />
            <h2 className="mt-6 max-w-lg font-heading text-[2.1rem] font-semibold leading-[1.1] tracking-tight text-arovia-navy sm:text-4xl lg:text-[2.85rem]">
              Good care goes <span className="text-arovia-pharmacy">beyond the doctor.</span>
            </h2>
            <div className="mt-7 max-w-md space-y-4 text-base leading-relaxed text-arovia-charcoal">
              <p>Sometimes, getting the right medicine is an important part of getting better.</p>
              <p>Arovia Pharmacy is here as part of that care.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden lg:aspect-[4/3]">
              <Image
                src="/images/contact-doctor.jpg"
                alt="A calm conversation between a clinician and a patient"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[center_22%]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — PHARMACY VALUE */}
      <section className="bg-[#F6EBEE]">
        <div className="mx-auto max-w-wide px-5 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-24">
            <Reveal>
              <div className="flex items-center gap-3">
                <GoldRule />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-arovia-pharmacy">
                  How Arovia Pharmacy helps
                </p>
              </div>
              <h2 className="mt-6 max-w-sm font-heading text-[2.2rem] font-semibold leading-[1.08] tracking-tight text-arovia-navy sm:text-4xl lg:text-[2.9rem]">
                Simple. Trusted.
                <br />
                <span className="text-arovia-pharmacy">Part of care.</span>
              </h2>
            </Reveal>
            <Reveal>
              <ul className="grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-10">
                {principles.map((item) => (
                  <li key={item.title} className="max-w-[14rem]">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FDF8F8] ring-1 ring-arovia-pharmacy/10">
                      <item.icon aria-hidden="true" className="h-5 w-5 text-arovia-pharmacy" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-semibold text-arovia-pharmacy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-arovia-charcoal">{item.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — EVERYDAY HEALTH */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-wide items-center gap-12 px-5 py-18 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20 lg:px-10 lg:py-24">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4]">
              <Image
                src="/images/home-families.jpg"
                alt="A family moment that reflects everyday health"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2 lg:pl-4">
            <GoldRule />
            <h2 className="mt-6 max-w-md font-heading text-[2.1rem] font-semibold leading-[1.1] tracking-tight text-arovia-navy sm:text-4xl lg:text-[2.85rem]">
              For everyday <span className="text-arovia-pharmacy">health.</span>
            </h2>
            <div className="mt-7 max-w-md space-y-5 text-base leading-relaxed text-arovia-charcoal">
              <p>
                A medicine for today.
                <br />
                A regular prescription.
                <br />
                Something your family depends on.
              </p>
              <p>
                Pharmacy becomes part of everyday life.
                <br />
                We believe it should feel simple, reliable and easy to approach.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5 — AROVIA PHARMACY */}
      <section className="bg-[#FDFBF7]">
        <div className="mx-auto grid max-w-wide items-center gap-12 px-5 py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-24 lg:px-10 lg:py-28">
          <Reveal>
            <div className="flex items-center gap-3">
              <GoldRule />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-arovia-pharmacy">Arovia Pharmacy</p>
            </div>
            <h2 className="mt-6 max-w-md font-heading text-[2.2rem] font-semibold leading-[1.08] tracking-tight text-arovia-navy sm:text-4xl lg:text-[3rem]">
              A simple part
              <br />
              of <span className="text-arovia-pharmacy">better care.</span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-arovia-charcoal">
              Arovia Pharmacy is one of the healthcare services we are building at Arovia, with a focus on making medicines
              an accessible part of everyday healthcare.
            </p>
          </Reveal>
          <Reveal>
            <BotanicalVisual />
          </Reveal>
        </div>
      </section>

      {/* SECTION 6 — CLOSING CTA */}
      <section className="relative overflow-hidden bg-arovia-pharmacy text-white">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
          aria-hidden="true"
          viewBox="0 0 1440 560"
          preserveAspectRatio="none"
        >
          <path
            d="M0 90 C240 20 380 210 640 140 C900 70 1080 230 1440 120 L1440 560 L0 560 Z"
            fill="none"
            stroke="#C5A059"
            strokeWidth="1.2"
          />
          <path
            d="M0 200 C280 120 440 290 700 220 C960 150 1160 310 1440 230"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.85"
            opacity="0.7"
          />
          <path
            d="M0 320 C300 250 500 390 780 330 C1040 275 1240 400 1440 340"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.7"
            opacity="0.4"
          />
        </svg>
        <div className="relative mx-auto grid max-w-wide gap-14 px-5 py-18 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center lg:gap-20 lg:px-10 lg:py-24">
          <Reveal>
            <GoldRule />
            <h2 className="mt-6 max-w-lg font-heading text-[2.2rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[3rem]">
              Better care,
              <br />
              one step at a time.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/85">
              Pharmacy is one small but important part of the care people need every day.
            </p>
            <div className="mt-9">
              <PharmacyCta variant="light" />
            </div>
          </Reveal>
          <Reveal>
            <ul className="space-y-7">
              {closingPoints.map((item) => (
                <li key={item.label} className="flex items-start gap-4 border-t border-white/20 pt-6 first:border-t-0 first:pt-0">
                  <item.icon aria-hidden="true" className="mt-0.5 h-5 w-5 text-[#C5A059]" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{item.label}</p>
                    <p className="mt-1.5 text-sm text-white/95">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FINAL INQUIRY */}
      <section className="bg-[#F7F4EE]">
        <div className="mx-auto flex max-w-wide flex-col gap-7 px-5 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-10 lg:py-16">
          <Reveal className="max-w-xl">
            <GoldRule />
            <h2 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-arovia-navy sm:text-[1.75rem]">
              Have questions about Arovia Pharmacy?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-arovia-charcoal sm:text-base">
              We&apos;d be happy to connect and share more about how pharmacy fits into our healthcare services.
            </p>
          </Reveal>
          <Reveal>
            <PharmacyCta variant="outline" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

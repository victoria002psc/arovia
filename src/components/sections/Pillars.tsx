import Image from "next/image";
import Link from "next/link";
import { ImageReveal, Reveal } from "@/components/motion/Reveal";

const pillars = [
  {
    number: "01",
    title: "Care",
    statement: "Healthcare designed around people, access and care.",
    href: "/care",
    cta: "Explore Care",
    image: "/images/care.jpg",
    alt: "A clinician giving an injection to a seated patient",
    accent: "bg-[#0F9F8F]",
    services: [
      { label: "Homecare", href: "/care/homecare" },
      { label: "Diagnostics", href: "/care/diagnostics" },
      { label: "Ambulance", href: "/care/ambulance" },
      { label: "Clinic", href: "/care/clinic" },
    ],
  },
  {
    number: "02",
    title: "Pharmacy",
    statement: "A dedicated pharmacy experience within the Arovia healthcare ecosystem.",
    href: "/pharmacy",
    cta: "Explore Pharmacy",
    image: "/images/pharmacy-counter.jpg",
    alt: "A pharmacist working at a dispensary counter",
    position: "object-[74%_0%]",
    accent: "bg-[#8F3D45]",
    services: [{ label: "Pharmacy", href: "/pharmacy" }],
  },
  {
    number: "03",
    title: "Equipment Trade",
    statement: "Medical equipment and export capabilities for healthcare businesses and organizations.",
    href: "/equipment-trade",
    cta: "Explore Equipment Trade",
    image: "/images/equipment.jpg",
    alt: "An operating theatre equipped with surgical lights and monitoring systems",
    accent: "bg-[#2F5F98]",
    services: [
      { label: "Export", href: "/equipment-trade/export" },
      { label: "Medical Equipment", href: "/equipment-trade/medical-equipment" },
    ],
  },
  {
    number: "04",
    title: "Digital Health",
    statement: "Technology designed around healthcare needs.",
    href: "/digital-health",
    cta: "Explore Digital Health",
    image: "/images/digital.jpg",
    alt: "A clinician reviewing medical imaging on a diagnostic workstation",
    accent: "bg-[#5B4B8A]",
    services: [
      { label: "Medical Apps", href: "/digital-health/apps" },
      { label: "Medical Websites", href: "/digital-health/websites" },
      { label: "Healthcare Platforms", href: "/digital-health/platforms" },
      { label: "Digital Solutions", href: "/digital-health/solutions" },
    ],
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="bg-[#F7F8F6]">
      {pillars.map((pillar, index) => (
        <article key={pillar.title} className="border-t border-[#E6E8EA]">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
            <ImageReveal className={`relative min-h-[280px] sm:min-h-[380px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image
                src={pillar.image}
                alt={pillar.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={`object-cover ${"position" in pillar ? pillar.position : "object-center"}`}
              />
            </ImageReveal>
            <Reveal className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:px-16 xl:px-20">
              <span className={`h-0.5 w-10 ${pillar.accent}`} aria-hidden="true" />
              <p className="mt-6 font-heading text-sm tracking-[0.2em] text-[#6B7280]">{pillar.number}</p>
              <h2 className="mt-3 font-heading text-4xl font-semibold text-[#0B172A] sm:text-5xl">{pillar.title}</h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-[#3E4A57]">{pillar.statement}</p>
              <ul className="mt-8 max-w-sm divide-y divide-[#E6E8EA] border-y border-[#E6E8EA]">
                {pillar.services.map((service) => (
                  <li key={service.href + service.label}>
                    <Link href={service.href} className="flex min-h-12 items-center text-[15px] text-[#1F2937] transition-colors duration-300 hover:text-[#0B172A]">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={pillar.href} className="group mt-8 inline-flex min-h-11 items-center text-[15px] font-medium text-[#0B172A]">
                <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-[position:0_100%] bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                  {pillar.cta}
                </span>
              </Link>
            </Reveal>
          </div>
        </article>
      ))}
    </section>
  );
}

import type { IconName } from "@/components/ui/Icon";

export const homeSeo = {
  title: "Arovia Group — Integrated Healthcare Ecosystem",
  description:
    "Complete healthcare solutions in one place. Clinic care, home care, medicines, medical equipment, and healthcare technology. Integrated for better outcomes.",
};

export const homeHero = {
  eyebrow: "HEALTHCARE, CONNECTED.",
  title: "Healthcare That Brings People, Services and Technology Together",
  text: "Arovia Group brings together healthcare services, pharmacy, medical equipment and digital health solutions within one connected healthcare ecosystem.",
  primary: { label: "Explore Arovia", href: "#ecosystem" },
  secondary: { label: "Talk to Arovia", href: "/contact" },
  image: {
    src: "/images/hero-home-approved.jpg",
    alt: "Arovia Group homepage hero — Healthcare That Brings People, Services and Technology Together, with connected healthcare ecosystem sculpture",
  },
};

export const homeEcosystem = {
  eyebrow: "Our Ecosystem",
  heading: "One Healthcare Ecosystem. Four Connected Capabilities.",
  text: "Different services. A unified approach. All working together for better healthcare.",
  cards: [
    {
      number: "01",
      name: "Care",
      description: "Homecare, diagnostics, ambulance and clinic services.",
      href: "/care",
      cta: "Explore Care",
      icon: "HeartHandshake" as IconName,
      tint: "bg-[#E8F6F3]",
      accent: "text-arovia-care-dark",
    },
    {
      number: "02",
      name: "Pharmacy",
      description: "A dedicated pharmacy experience within the Arovia ecosystem.",
      href: "/pharmacy",
      cta: "Explore Pharmacy",
      icon: "Pill" as IconName,
      tint: "bg-[#F8EBEE]",
      accent: "text-arovia-pharmacy-dark",
    },
    {
      number: "03",
      name: "Equipment Trade",
      description: "Export and medical equipment for healthcare businesses.",
      href: "/equipment-trade",
      cta: "Explore Equipment Trade",
      icon: "BedDouble" as IconName,
      tint: "bg-[#E8EEF6]",
      accent: "text-arovia-equipment-dark",
    },
    {
      number: "04",
      name: "Digital Health",
      description: "Medical apps, websites, platforms and digital solutions.",
      href: "/digital-health",
      cta: "Explore Digital Health",
      icon: "Laptop" as IconName,
      tint: "bg-[#F0EDF6]",
      accent: "text-arovia-digital-dark",
    },
  ],
};

export const homeCare = {
  number: "01",
  heading: "Care Designed Around People",
  text: "Homecare, diagnostics, ambulance support and clinic visits, arranged as one care service.",
  href: "/care",
  cta: "Explore Care",
  image: {
    src: "/images/home-care.jpg",
    alt: "A nurse in blue scrubs smiling with an elderly patient",
  },
  services: [
    { label: "Homecare", href: "/care/homecare", icon: "House" as IconName },
    { label: "Diagnostics", href: "/care/diagnostics", icon: "Activity" as IconName },
    { label: "Ambulance", href: "/care/ambulance", icon: "Ambulance" as IconName },
    { label: "Clinic", href: "/care/clinic", icon: "Users" as IconName },
  ],
};

export const homePharmacy = {
  number: "02",
  heading: "Pharmacy Within a Connected Healthcare Journey",
  text: "One pharmacy for prescription medicines and healthcare products, with a pharmacist available to guide you.",
  href: "/pharmacy",
  cta: "Explore Pharmacy",
  image: {
    src: "/images/home-pharmacy.jpg",
    alt: "A pharmacist reviewing a medicine package in a pharmacy aisle",
  },
};

export const homeEquipment = {
  number: "03",
  heading: "Medical Equipment. Connected to Global Markets.",
  text: "Export and medical equipment for healthcare businesses and organizations.",
  href: "/equipment-trade",
  cta: "Explore Equipment Trade",
  inquiry: { label: "Request an Equipment Inquiry", href: "/contact?type=equipment" },
  image: {
    src: "/images/home-equipment.jpg",
    alt: "A modern operating room with surgical lights and medical monitors",
  },
  services: [
    { label: "Export", href: "/equipment-trade/export", icon: "Plane" as IconName },
    { label: "Medical Equipment", href: "/equipment-trade/medical-equipment", icon: "BedDouble" as IconName },
  ],
};

export const homeDigital = {
  number: "04",
  heading: "Technology Built Around Healthcare",
  text: "Medical apps, websites, platforms and digital solutions for clinical and operational needs.",
  href: "/digital-health",
  cta: "Explore Digital Health",
  image: {
    src: "/images/home-digital.jpg",
    alt: "A clinician reviewing a healthcare dashboard on a computer",
  },
  services: [
    { label: "Medical Apps", href: "/digital-health/apps", icon: "Smartphone" as IconName },
    { label: "Medical Websites", href: "/digital-health/websites", icon: "Globe" as IconName },
    { label: "Healthcare Platforms", href: "/digital-health/platforms", icon: "Cloud" as IconName },
    { label: "Digital Solutions", href: "/digital-health/solutions", icon: "Settings" as IconName },
  ],
};

export const homeAudiences = {
  eyebrow: "Who We Serve",
  heading: "For Individuals & Families. For Healthcare Organizations.",
  items: [
    {
      title: "For Individuals & Families",
      description: "Healthcare services, pharmacy and care.",
      href: "/care",
      cta: "Explore Healthcare",
      image: { src: "/images/home-families.jpg", alt: "A smiling family together" },
      accent: "bg-arovia-teal",
    },
    {
      title: "For Healthcare Organizations",
      description: "Equipment trade and digital health solutions.",
      href: "/contact?type=partnership",
      cta: "Work With Arovia",
      image: { src: "/images/home-organizations.jpg", alt: "A modern healthcare building with a glass facade" },
      accent: "bg-arovia-equipment",
    },
  ],
};

export const homeWhy = {
  eyebrow: "Why Arovia",
  heading: "A Connected Approach to Healthcare",
  items: [
    {
      title: "Connected capabilities",
      description: "Care, pharmacy, equipment trade and digital health under one group.",
      icon: "Share2" as IconName,
    },
    {
      title: "Built for people & organizations",
      description: "Services for individuals, families, healthcare providers and businesses.",
      icon: "Users" as IconName,
    },
    {
      title: "Patient-focused approach",
      description: "Care planning starts with the person and the family around them.",
      icon: "Heart" as IconName,
    },
    {
      title: "Healthcare enabled by technology",
      description: "Practical digital solutions designed around real healthcare needs.",
      icon: "Settings" as IconName,
    },
  ],
};

export const homeFinalCta = {
  heading: "Let's Build a Healthier Tomorrow Together",
  text: "Get in touch with the Arovia team to explore our services, equipment or digital solutions.",
  primary: { label: "Talk to Arovia", href: "/contact" },
  secondary: { label: "Request Information", href: "/contact?type=general" },
  image: {
    src: "/images/home-cta.jpg",
    alt: "",
  },
};

/** Kept for older page sections that may still import these keys. */
export const homePillars = {
  heading: "Our Four Healthcare Pillars",
  items: [
    {
      name: "Care",
      headline: "Care Designed Around People",
      href: "/care",
      cta: "Explore Care",
      summary: homeCare.text,
      colorToken: "arovia-care",
      icon: "HeartPulse" as IconName,
      services: homeCare.services.map(({ label, href }) => ({ label, href })),
    },
    {
      name: "Pharmacy",
      headline: homePharmacy.heading,
      href: "/pharmacy",
      cta: "Explore Pharmacy",
      summary: homePharmacy.text,
      colorToken: "arovia-pharmacy",
      icon: "Pill" as IconName,
      services: [{ label: "Pharmacy", href: "/pharmacy" }],
    },
    {
      name: "Equipment Trade",
      headline: homeEquipment.heading,
      href: "/equipment-trade",
      cta: "Explore Equipment Trade",
      summary: homeEquipment.text,
      colorToken: "arovia-equipment",
      icon: "Stethoscope" as IconName,
      services: homeEquipment.services.map(({ label, href }) => ({ label, href })),
    },
    {
      name: "Digital Health",
      headline: homeDigital.heading,
      href: "/digital-health",
      cta: "Explore Digital Health",
      summary: homeDigital.text,
      colorToken: "arovia-digital",
      icon: "MonitorSmartphone" as IconName,
      services: homeDigital.services.map(({ label, href }) => ({ label, href })),
    },
  ],
};

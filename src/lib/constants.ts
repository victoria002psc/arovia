import type { NavItem, PillarId } from "@/types";
import {
  addressSingleLine,
  businessHours,
  companyName,
  email,
  phoneDisplay,
  showWhatsApp,
} from "@/lib/site-info";

/**
 * Contact fields are read from site-info.ts. They are not written here.
 */
export const company = {
  name: companyName,
  phone: phoneDisplay,
  email,
  address: addressSingleLine,
  whatsapp: showWhatsApp ? phoneDisplay : "",
  hours: businessHours,
  emergencyPhone: "",
  year: 2026,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://arovia.group",
};

export const inquiryTypes = [
  "Care",
  "Pharmacy",
  "Equipment Trade",
  "Digital Health",
  "Partnership",
  "General",
] as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Care",
    href: "/care",
    children: [
      { label: "Homecare", href: "/care/homecare", description: "Care in the home." },
      { label: "Diagnostics", href: "/care/diagnostics", description: "Lab tests and health checkups." },
      { label: "Ambulance", href: "/care/ambulance", description: "Ambulance support and patient transport." },
      { label: "Clinic", href: "/care/clinic", description: "Outpatient and specialty care." },
    ],
  },
  { label: "Pharmacy", href: "/pharmacy" },
  {
    label: "Equipment Trade",
    href: "/equipment-trade",
    children: [
      { label: "Export", href: "/equipment-trade/export", description: "Supplying equipment to other markets." },
      { label: "Medical Equipment", href: "/equipment-trade/medical-equipment", description: "Hospital, diagnostic, surgical and ICU equipment." },
    ],
  },
  {
    label: "Digital Health",
    href: "/digital-health",
    children: [
      { label: "Medical Apps", href: "/digital-health/apps", description: "Healthcare applications for patients and clinicians." },
      { label: "Medical Websites", href: "/digital-health/websites", description: "Websites and portals for healthcare organisations." },
      { label: "Healthcare Platforms", href: "/digital-health/platforms", description: "Systems that connect clinical and operational work." },
      { label: "Digital Solutions", href: "/digital-health/solutions", description: "Software built for a specific healthcare need." },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const pillarDirectory = [
  {
    id: "care" as const,
    name: "Care",
    slug: "care",
    href: "/care",
    colorToken: "arovia-care",
    icon: "HeartPulse" as const,
    summary: "Homecare, Diagnostics, Ambulance and Clinic.",
  },
  {
    id: "medicine" as const,
    name: "Pharmacy",
    slug: "pharmacy",
    href: "/pharmacy",
    colorToken: "arovia-pharmacy",
    icon: "Pill",
    summary: "A single pharmacy service.",
  },
  {
    id: "equipment" as const,
    name: "Equipment Trade",
    slug: "equipment-trade",
    href: "/equipment-trade",
    colorToken: "arovia-equipment",
    icon: "Stethoscope",
    summary: "Export and Medical Equipment.",
  },
  {
    id: "digital" as const,
    name: "Digital Health",
    slug: "digital-health",
    href: "/digital-health",
    colorToken: "arovia-digital",
    icon: "MonitorSmartphone",
    summary: "Medical Apps, Medical Websites, Healthcare Platforms and Digital Solutions.",
  },
] as const;

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer" },
] as const;

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "Homecare", href: "/care/homecare" },
      { label: "Diagnostics", href: "/care/diagnostics" },
      { label: "Ambulance", href: "/care/ambulance" },
      { label: "Clinic", href: "/care/clinic" },
    ],
  },
  {
    title: "Pharmacy",
    links: [{ label: "Pharmacy", href: "/pharmacy" }],
  },
  {
    title: "Equipment Trade",
    links: [
      { label: "Export", href: "/equipment-trade/export" },
      { label: "Medical Equipment", href: "/equipment-trade/medical-equipment" },
    ],
  },
  {
    title: "Digital Health",
    links: [
      { label: "Medical Apps", href: "/digital-health/apps" },
      { label: "Medical Websites", href: "/digital-health/websites" },
      { label: "Healthcare Platforms", href: "/digital-health/platforms" },
      { label: "Digital Solutions", href: "/digital-health/solutions" },
    ],
  },
];

export interface PillarCard {
  id: PillarId;
  title: string;
  headline: string;
  tagline: string;
  description: string;
  href: string;
  cta: string;
  services: { label: string; detail: string; href: string }[];
}

export const pillars: PillarCard[] = [
  {
    id: "care",
    title: "CARE",
    headline: "Care That Comes to You, or You Come to Us",
    tagline: "People • Care • Better Health",
    description:
      "From clinic consultations to home-based care, diagnostics that guide treatment, and ambulances that respond in emergencies—our Care pillar ensures you have access to healthcare when and where you need it.",
    href: "/care",
    cta: "Explore Care Services",
    services: [
      { label: "Homecare", detail: "Care in the comfort of your home", href: "/care/homecare" },
      { label: "Diagnostics", detail: "Lab tests and health checkups", href: "/care/diagnostics" },
      { label: "Ambulance", detail: "Ambulance support and patient transport", href: "/care/ambulance" },
      { label: "Clinic", detail: "Outpatient and specialty care", href: "/care/clinic" },
    ],
  },
  {
    id: "medicine",
    title: "PHARMACY",
    headline: "A dedicated pharmacy experience within the Arovia healthcare ecosystem.",
    tagline: "Pharmacy",
    description:
      "Access prescription medicines, health supplements, and healthcare products through the pharmacy. Quality checks and professional guidance are part of the service.",
    href: "/pharmacy",
    cta: "Explore Pharmacy",
    services: [{ label: "Pharmacy", detail: "Prescription medicines and healthcare products", href: "/pharmacy" }],
  },
  {
    id: "equipment",
    title: "EQUIPMENT TRADE",
    headline: "Medical equipment and export capabilities for healthcare businesses and organizations.",
    tagline: "Export • Medical Equipment",
    description:
      "Equipment Trade covers export support and medical equipment for hospitals, clinics, and healthcare organizations.",
    href: "/equipment-trade",
    cta: "Explore Equipment Trade",
    services: [
      { label: "Export", detail: "Supplying equipment to other markets", href: "/equipment-trade/export" },
      { label: "Medical Equipment", detail: "Hospital, diagnostic, surgical and ICU equipment", href: "/equipment-trade/medical-equipment" },
    ],
  },
  {
    id: "digital",
    title: "DIGITAL HEALTH",
    headline: "Healthcare Technology That Transforms Care",
    tagline: "Medical Technology • Better Care",
    description:
      "From healthcare mobile apps to integrated platforms and custom software solutions, our digital health team builds technology that helps healthcare organizations serve patients better, faster, and smarter.",
    href: "/digital-health",
    cta: "Explore Digital Health",
    services: [
      { label: "Medical Apps", detail: "Healthcare mobile applications", href: "/digital-health/apps" },
      { label: "Medical Websites", detail: "Healthcare websites & portals", href: "/digital-health/websites" },
      { label: "Platforms", detail: "Integrated healthcare systems", href: "/digital-health/platforms" },
      { label: "Solutions", detail: "Custom healthcare software", href: "/digital-health/solutions" },
    ],
  },
];

export const howItWorks = [
  {
    title: "Identify Your Need",
    description:
      "Whether it's healthcare, medicines, equipment, or technology—you have a healthcare need. We meet you where you are.",
  },
  {
    title: "Connect With Us",
    description:
      "Reach out through your preferred channel. Our team listens and understands your specific situation.",
  },
  {
    title: "Get Expert Support",
    description:
      "Our healthcare professionals and specialists provide guidance tailored to your needs.",
  },
  {
    title: "Experience Integrated Care",
    description:
      "With our four pillars working together, your healthcare is coordinated, efficient, and effective.",
  },
];

export const audiences = [
  {
    title: "Patients & Families",
    description:
      "From routine checkups to home care, we provide accessible healthcare for individuals and families.",
    href: "/care",
    cta: "Explore Patient Services",
  },
  {
    title: "Healthcare Institutions",
    description:
      "Hospitals and clinics trust Arovia for care coordination, equipment supply, and technology solutions.",
    href: "/contact?type=Partnership%2FBusiness%20Inquiry",
    cta: "Partner With Us",
  },
  {
    title: "Medical Professionals",
    description:
      "Doctors and specialists rely on our platform for patient care and practice management.",
    href: "/digital-health",
    cta: "Learn More",
  },
  {
    title: "Medical Businesses",
    description:
      "Exporters and healthcare companies can enquire about equipment trade and digital health.",
    href: "/contact?type=equipment",
    cta: "Business Inquiry",
  },
];

export const reasons = [
  {
    title: "Connected Ecosystem",
    description:
      "Rather than managing multiple providers, our four pillars work together. Your care, medicines, equipment, and technology are coordinated.",
  },
  {
    title: "Professional Expertise",
    description:
      "Our team includes healthcare professionals, specialists, equipment experts, and technology engineers—all focused on healthcare excellence.",
  },
  {
    title: "Accessible Healthcare",
    description:
      "From your home to our clinic, from emergency response to routine checkups, healthcare meets you where you are.",
  },
  {
    title: "Technology-Enabled",
    description:
      "We invest in digital health solutions that make healthcare more efficient, transparent, and responsive.",
  },
];

export const serviceCards = [
  {
    title: "Homecare",
    description: "Professional, compassionate healthcare delivered to your home, from nursing to personal assistance.",
    href: "/care/homecare",
    pillar: "care" as PillarId,
  },
  {
    title: "Diagnostics",
    description: "Accurate laboratory testing and health checkups, with home collection and professional interpretation.",
    href: "/care/diagnostics",
    pillar: "care" as PillarId,
  },
  {
    title: "Ambulance",
    description: "Ambulance support and patient transport. In a life-threatening emergency, call local emergency services.",
    href: "/care/ambulance",
    pillar: "care" as PillarId,
  },
  {
    title: "Clinic",
    description: "Professional medical consultations, specialty care, and treatment planning in a clinical setting.",
    href: "/care/clinic",
    pillar: "care" as PillarId,
  },
  {
    title: "Pharmacy",
    description: "Prescription fulfillment, healthcare products, and pharmacist guidance.",
    href: "/pharmacy",
    pillar: "medicine" as PillarId,
  },
  {
    title: "Export",
    description: "Documentation, logistics, and market-access support for medical equipment.",
    href: "/equipment-trade/export",
    pillar: "equipment" as PillarId,
  },
  {
    title: "Medical Equipment",
    description: "Hospital, diagnostic, surgical, and ICU equipment with installation, training, and support.",
    href: "/equipment-trade/medical-equipment",
    pillar: "equipment" as PillarId,
  },
  {
    title: "Healthcare Apps",
    description: "Patient, clinician, and hospital mobile applications built for secure daily use.",
    href: "/digital-health/apps",
    pillar: "digital" as PillarId,
  },
  {
    title: "Healthcare Websites",
    description: "Organization websites and patient portals that inform, engage, and enable action.",
    href: "/digital-health/websites",
    pillar: "digital" as PillarId,
  },
  {
    title: "Healthcare Platforms",
    description: "Integrated systems for patient management, clinical workflows, billing, and analytics.",
    href: "/digital-health/platforms",
    pillar: "digital" as PillarId,
  },
  {
    title: "Custom Healthcare Software",
    description: "Specialized software for clinical, operational, and integration challenges unique to your organization.",
    href: "/digital-health/solutions",
    pillar: "digital" as PillarId,
  },
];

export const routes = [
  "/",
  "/about",
  "/care",
  "/care/homecare",
  "/care/diagnostics",
  "/care/ambulance",
  "/care/clinic",
  "/pharmacy",
  "/equipment-trade",
  "/equipment-trade/export",
  "/equipment-trade/medical-equipment",
  "/digital-health",
  "/digital-health/apps",
  "/digital-health/websites",
  "/digital-health/platforms",
  "/digital-health/solutions",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/medical-disclaimer",
];

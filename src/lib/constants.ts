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
  "Healthcare/Care Services",
  "Medicines/Pharmacy",
  "Medical Equipment",
  "Digital Health Solutions",
  "Partnership/Business Inquiry",
  "General Inquiry",
  "Other",
] as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Home Care",
    href: "/care",
    children: [
      { label: "Clinic", href: "/care/clinic", description: "Outpatient and specialty care." },
      { label: "Homecare", href: "/care/homecare", description: "Care in the home." },
      { label: "Diagnostics", href: "/care/diagnostics", description: "Lab tests and health checkups." },
      { label: "Ambulance", href: "/care/ambulance", description: "Ambulance support and patient transport." },
    ],
  },
  {
    label: "Medicines",
    href: "/medicines",
    children: [{ label: "Pharmacy", href: "/medicines", description: "Pharmacy" }],
  },
  {
    label: "Medical Equipment Trade",
    href: "/equipment",
    children: [
      { label: "Import", href: "/equipment/import", description: "Sourcing equipment into India." },
      { label: "Export", href: "/equipment/export", description: "Supplying equipment to other markets." },
      { label: "Medical Equipment", href: "/equipment/equipment", description: "Hospital, diagnostic, surgical and ICU equipment." },
      { label: "Medical Supplies", href: "/equipment/supplies", description: "Consumables and healthcare products." },
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
    name: "Home Care",
    slug: "care",
    href: "/care",
    colorToken: "arovia-care",
    icon: "HeartPulse" as const,
    summary: "Clinic, Homecare, Diagnostics and Ambulance.",
  },
  {
    id: "medicine" as const,
    name: "Medicines",
    slug: "medicines",
    href: "/medicines",
    colorToken: "arovia-medicine",
    icon: "Pill",
    summary: "Pharmacy.",
  },
  {
    id: "equipment" as const,
    name: "Medical Equipment Trade",
    slug: "equipment",
    href: "/equipment",
    colorToken: "arovia-equipment",
    icon: "Stethoscope",
    summary: "Import, Export, Medical Equipment and Medical Supplies.",
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
  { label: "Medical Disclaimer", href: "/disclaimer" },
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
    title: "Home Care",
    links: [
      { label: "Clinic", href: "/care/clinic" },
      { label: "Homecare", href: "/care/homecare" },
      { label: "Diagnostics", href: "/care/diagnostics" },
      { label: "Ambulance", href: "/care/ambulance" },
    ],
  },
  {
    title: "Medicines",
    links: [{ label: "Pharmacy", href: "/medicines" }],
  },
  {
    title: "Medical Equipment Trade",
    links: [
      { label: "Import", href: "/equipment/import" },
      { label: "Export", href: "/equipment/export" },
      { label: "Medical Equipment", href: "/equipment/equipment" },
      { label: "Medical Supplies", href: "/equipment/supplies" },
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
      { label: "Clinic", detail: "Outpatient & specialty care", href: "/care/clinic" },
      { label: "Homecare", detail: "Care in the comfort of your home", href: "/care/homecare" },
      { label: "Diagnostics", detail: "Lab tests and health checkups", href: "/care/diagnostics" },
      { label: "Ambulance", detail: "Emergency response and patient transport", href: "/care/ambulance" },
    ],
  },
  {
    id: "medicine",
    title: "MEDICINES",
    headline: "Safe Medicines, Healthier Lives",
    tagline: "Safe Medicines • Healthier Lives",
    description:
      "Access prescription medicines, health supplements, and healthcare products through our pharmacy service. We ensure quality, availability, and professional guidance every step of the way.",
    href: "/medicines",
    cta: "Explore Medicines",
    services: [
      { label: "Pharmacy", detail: "Prescription medicines & healthcare products", href: "/medicines" },
    ],
  },
  {
    id: "equipment",
    title: "MEDICAL EQUIPMENT TRADE",
    headline: "Global Medical Equipment Supply, Local Support",
    tagline: "Import • Export • Global Supply",
    description:
      "Whether you're importing equipment for your healthcare facility or exporting to international markets, our medical equipment trade service connects you with quality hospital, diagnostic, surgical, and ICU equipment. We handle both the equipment and the consumables.",
    href: "/equipment",
    cta: "Explore Equipment & Trade",
    services: [
      { label: "Import", detail: "Global equipment sourcing", href: "/equipment/import" },
      { label: "Export", detail: "International distribution", href: "/equipment/export" },
      { label: "Equipment", detail: "Hospital & diagnostic equipment", href: "/equipment/equipment" },
      { label: "Medical Supplies", detail: "Consumables & products", href: "/equipment/supplies" },
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
      "Equipment importers, exporters, and healthcare companies partner with us for market access and solutions.",
    href: "/contact?type=Medical%20Equipment",
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
    title: "Clinic Services",
    description: "Professional medical consultations, specialty care, and treatment planning in a clinical setting.",
    href: "/care/clinic",
    pillar: "care" as PillarId,
  },
  {
    title: "Home Care",
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
    title: "Ambulance Services",
    description: "Rapid emergency response, professional care during transport, and non-emergency medical transfers.",
    href: "/care/ambulance",
    pillar: "care" as PillarId,
  },
  {
    title: "Pharmacy",
    description: "Prescription fulfillment, healthcare products, pharmacist guidance, and home delivery options.",
    href: "/medicines",
    pillar: "medicine" as PillarId,
  },
  {
    title: "Medical Equipment Import",
    description: "Global sourcing, quality verification, customs coordination, and local installation support.",
    href: "/equipment/import",
    pillar: "equipment" as PillarId,
  },
  {
    title: "Medical Equipment Export",
    description: "International distribution, documentation, and market-access support for medical equipment.",
    href: "/equipment/export",
    pillar: "equipment" as PillarId,
  },
  {
    title: "Equipment Supply",
    description: "Hospital, diagnostic, surgical, and ICU equipment with installation, training, and support.",
    href: "/equipment/equipment",
    pillar: "equipment" as PillarId,
  },
  {
    title: "Medical Supplies",
    description: "Bulk consumables and healthcare products with scheduled replenishment and account support.",
    href: "/equipment/supplies",
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
  "/care/clinic",
  "/care/homecare",
  "/care/diagnostics",
  "/care/ambulance",
  "/medicines",
  "/equipment",
  "/equipment/import",
  "/equipment/export",
  "/equipment/equipment",
  "/equipment/supplies",
  "/digital-health",
  "/digital-health/apps",
  "/digital-health/websites",
  "/digital-health/platforms",
  "/digital-health/solutions",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/disclaimer",
];

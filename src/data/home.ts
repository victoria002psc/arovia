import type { IconName } from "@/components/ui/Icon";

export const homeSeo = {
  title: "Arovia Group — Integrated Healthcare Ecosystem",
  description:
    "Complete healthcare solutions in one place. Clinic care, home care, medicines, medical equipment, and healthcare technology. Integrated for better outcomes.",
};

export const homeHero = {
  eyebrow: "Healthcare Ecosystem for People, Care, and Technology",
  title: "Complete Healthcare Solutions, Connected in One Place",
  text: "At Arovia Group, we believe healthcare shouldn't be fragmented. Whether you need immediate care, ongoing medicines, medical equipment, or healthcare technology, our integrated ecosystem connects everything you need. We serve patients, families, healthcare institutions, and medical businesses.",
  primary: { label: "Talk to Our Team", href: "/contact" },
  secondary: { label: "Explore Our Services", href: "#pillars" },
  image: {
    src: "/images/hero-consult.jpg",
    alt: "A clinician discussing diagnostic imaging with a colleague",
  },
};

export const homeEcosystem = {
  heading: "Why Healthcare Needs Integration",
  text: "We connect four distinct healthcare capabilities into one seamless ecosystem.",
};

export const homePillars = {
  heading: "Our Four Healthcare Pillars",
  items: [
    {
      name: "Home Care",
      headline: "Care That Comes to You, or You Come to Us",
      href: "/care",
      cta: "Explore Home Care",
      summary:
        "From clinic consultations to home-based care, diagnostics that guide treatment, and ambulances that respond in emergencies—our Care pillar ensures you have access to healthcare when and where you need it.",
      colorToken: "arovia-care",
      icon: "HeartPulse" as IconName,
      services: [
        { label: "Clinic", href: "/care/clinic", detail: "Outpatient and specialty care" },
        { label: "Homecare", href: "/care/homecare", detail: "Care in the comfort of your home" },
        { label: "Diagnostics", href: "/care/diagnostics", detail: "Lab tests and health checkups" },
        { label: "Ambulance", href: "/care/ambulance", detail: "Emergency response and patient transport" },
      ],
    },
    {
      name: "Medicines",
      headline: "Safe Medicines, Healthier Lives",
      href: "/medicines",
      cta: "Explore Medicines",
      summary:
        "Access prescription medicines, health supplements, and healthcare products through our pharmacy service. We ensure quality, availability, and professional guidance every step of the way.",
      colorToken: "arovia-medicine",
      icon: "Pill" as IconName,
      services: [{ label: "Pharmacy", href: "/medicines", detail: "Prescription medicines and healthcare products" }],
    },
    {
      name: "Medical Equipment Trade",
      headline: "Global Medical Equipment Supply, Local Support",
      href: "/equipment",
      cta: "Explore Medical Equipment",
      summary:
        "Whether you're importing equipment for your healthcare facility or exporting to international markets, our medical equipment trade service connects you with quality hospital, diagnostic, surgical, and ICU equipment. We handle both the equipment and the consumables.",
      colorToken: "arovia-equipment",
      icon: "Stethoscope" as IconName,
      services: [
        { label: "Import", href: "/equipment/import", detail: "Global equipment sourcing" },
        { label: "Export", href: "/equipment/export", detail: "International distribution" },
        { label: "Medical Equipment", href: "/equipment/equipment", detail: "Hospital and diagnostic equipment" },
        { label: "Medical Supplies", href: "/equipment/supplies", detail: "Consumables and products" },
      ],
    },
    {
      name: "Digital Health",
      headline: "Healthcare Technology That Transforms Care",
      href: "/digital-health",
      cta: "Explore Digital Health",
      summary:
        "From healthcare mobile apps to integrated platforms and custom software solutions, our digital health team builds technology that helps healthcare organizations serve patients better, faster, and smarter.",
      colorToken: "arovia-digital",
      icon: "MonitorSmartphone" as IconName,
      services: [
        { label: "Medical Apps", href: "/digital-health/apps", detail: "Healthcare mobile applications" },
        { label: "Medical Websites", href: "/digital-health/websites", detail: "Healthcare websites and portals" },
        { label: "Healthcare Platforms", href: "/digital-health/platforms", detail: "Integrated healthcare systems" },
        { label: "Digital Solutions", href: "/digital-health/solutions", detail: "Custom healthcare software" },
      ],
    },
  ],
};

export const homeWhy = {
  heading: "The Arovia Difference",
  items: [
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
      description: "We invest in digital health solutions that make healthcare more efficient, transparent, and responsive.",
    },
  ],
};

export const homeHow = {
  heading: "The Arovia Approach",
  intro: "We connect four distinct healthcare capabilities into one seamless ecosystem. Here's how it works:",
  steps: [
    {
      title: "Identify Your Need",
      description: "Whether it's healthcare, medicines, equipment, or technology—you have a healthcare need. We meet you where you are.",
    },
    {
      title: "Connect With Us",
      description: "Reach out through your preferred channel. Our team listens and understands your specific situation.",
    },
    {
      title: "Get Expert Support",
      description: "Our healthcare professionals and specialists provide guidance tailored to your needs.",
    },
    {
      title: "Experience Integrated Care",
      description: "With our four pillars working together, your healthcare is coordinated, efficient, and effective.",
    },
  ],
};

export const homeServices = {
  heading: "Our Complete Healthcare Services",
  intro: "Explore what Arovia can do for you",
  items: [
    { title: "Clinic Services", description: "Professional medical consultations, specialty care, and treatment planning in a clinical setting.", href: "/care/clinic" },
    { title: "Home Care", description: "Professional, compassionate healthcare delivered to your home, from nursing to personal assistance.", href: "/care/homecare" },
    { title: "Diagnostics", description: "Accurate laboratory testing and health checkups, with home collection and professional interpretation.", href: "/care/diagnostics" },
    { title: "Ambulance Services", description: "Emergency response, professional care during transport, and non-emergency medical transfers.", href: "/care/ambulance" },
    { title: "Pharmacy", description: "Prescription fulfillment, healthcare products, pharmacist guidance, and home delivery options.", href: "/medicines" },
    { title: "Medical Equipment Import", description: "Global sourcing, quality verification, customs coordination, and local installation support.", href: "/equipment/import" },
    { title: "Medical Equipment Export", description: "International distribution, documentation, and market-access support for medical equipment.", href: "/equipment/export" },
    { title: "Equipment Supply", description: "Hospital, diagnostic, surgical, and ICU equipment with installation, training, and support.", href: "/equipment/equipment" },
    { title: "Medical Supplies", description: "Consumables and healthcare products with scheduled replenishment and account support.", href: "/equipment/supplies" },
    { title: "Healthcare Apps", description: "Patient, clinician, and hospital mobile applications built for secure daily use.", href: "/digital-health/apps" },
    { title: "Healthcare Websites", description: "Organisation websites and patient portals that inform, engage, and enable action.", href: "/digital-health/websites" },
    { title: "Healthcare Platforms", description: "Integrated systems for patient management, clinical workflows, billing, and analytics.", href: "/digital-health/platforms" },
    { title: "Custom Healthcare Software", description: "Software for clinical, operational, and integration needs specific to an organisation.", href: "/digital-health/solutions" },
  ],
};

export const homeAudiences = {
  heading: "Healthcare Solutions for Everyone",
  intro: "Whether you're an individual patient, a family seeking care, or a healthcare institution, Arovia's integrated ecosystem is designed for you.",
  items: [
    { title: "Patients & Families", description: "From routine checkups to home care, we provide accessible healthcare for individuals and families.", href: "/care", cta: "Explore Patient Services" },
    { title: "Healthcare Institutions", description: "Hospitals and clinics trust Arovia for care coordination, equipment supply, and technology solutions.", href: "/contact?type=partnership", cta: "Partner With Us" },
    { title: "Medical Professionals", description: "Doctors and specialists rely on our platform for patient care and practice management.", href: "/digital-health", cta: "Learn More" },
    { title: "Medical Businesses", description: "Equipment importers, exporters, and healthcare companies partner with us for market access and solutions.", href: "/contact?type=equipment", cta: "Business Inquiry" },
  ],
};

export const homeTrust = [
  { label: "Certifications", value: "[CERTIFICATIONS — to be added once verified]" },
  { label: "Licenses", value: "[LICENSES — to be added once verified]" },
  { label: "Partners", value: "[PARTNERS — to be added once verified]" },
];

export const homeTechnology = {
  heading: "Healthcare Technology That Transforms Care",
  text: "From healthcare mobile apps to integrated platforms and custom software solutions, our digital health team builds technology that helps healthcare organizations serve patients better, faster, and smarter.",
  cta: { label: "Discover Digital Health", href: "/digital-health" },
};

export const homePartnership = {
  heading: "Ready to Partner With Arovia?",
  text: "Whether you're a healthcare institution, medical equipment supplier, or digital health innovator, let's explore how we can work together.",
  actions: [
    { label: "Equipment Partnership", href: "/contact?type=equipment" },
    { label: "Digital Health Project", href: "/contact?type=digital" },
    { label: "Care Network Expansion", href: "/contact?type=partnership" },
    { label: "General Business Inquiry", href: "/contact?type=general" },
  ],
};

export const homeFaqs = [
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can book a clinic appointment or request a home visit through our Contact page or by calling [PHONE]. Our team will respond within [TIMEFRAME].",
  },
  {
    question: "Do you deliver medicines to my home?",
    answer: "Our pharmacy service includes home delivery for medicines and healthcare products within [SERVICE AREAS / DELIVERY COVERAGE].",
  },
  {
    question: "How can I get information about medical equipment?",
    answer: "For equipment inquiries, contact our Equipment Trade team through the Contact page or email [EMAIL].",
  },
  {
    question: "Can you build a custom healthcare solution for my organization?",
    answer: "Our Digital Health team builds custom healthcare software, apps, and platforms. Request a consultation.",
  },
];

export const homeFinalCta = {
  heading: "Begin Your Healthcare Journey Today",
  text: "Whatever your healthcare need, Arovia is ready to help. Connect with our team and discover how our integrated ecosystem works for you.",
};

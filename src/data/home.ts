import type { IconName } from "@/components/ui/Icon";

export const homeSeo = {
  title: "Arovia Group — Integrated Healthcare Ecosystem",
  description:
    "Complete healthcare solutions in one place. Clinic care, home care, medicines, medical equipment, and healthcare technology. Integrated for better outcomes.",
};

export const homeHero = {
  eyebrow: "Healthcare, connected.",
  title: "Healthcare That Connects Care, Pharmacy, Equipment & Technology",
  text: "Arovia Group brings together healthcare services, pharmacy, medical equipment and digital health solutions within one connected healthcare ecosystem.",
  primary: { label: "Explore Arovia", href: "#ecosystem" },
  secondary: { label: "Talk to Arovia", href: "/contact" },
  image: {
    src: "/images/hero-consult.jpg",
    alt: "A clinician discussing diagnostic imaging with a colleague",
  },
};

export const homeEcosystem = {
  heading: "One Healthcare Ecosystem. Four Connected Capabilities.",
  text: "Arovia brings together Care, Pharmacy, Equipment Trade and Digital Health so patients, families, and healthcare organizations can work with one group.",
};

export const homePillars = {
  heading: "Our Four Healthcare Pillars",
  items: [
    {
      name: "Care",
      headline: "Healthcare designed around people, access and care.",
      href: "/care",
      cta: "Explore Care",
      summary:
        "From clinic consultations to home-based care, diagnostics that guide treatment, and ambulances that respond in emergencies—our Care pillar ensures you have access to healthcare when and where you need it.",
      colorToken: "arovia-care",
      icon: "HeartPulse" as IconName,
      services: [
        { label: "Homecare", href: "/care/homecare", detail: "Care in the home" },
        { label: "Diagnostics", href: "/care/diagnostics", detail: "Lab tests and health checkups" },
        { label: "Ambulance", href: "/care/ambulance", detail: "Ambulance support and patient transport" },
        { label: "Clinic", href: "/care/clinic", detail: "Outpatient and specialty care" },
      ],
    },
    {
      name: "Pharmacy",
      headline: "A dedicated pharmacy experience within the Arovia healthcare ecosystem.",
      href: "/pharmacy",
      cta: "Explore Pharmacy",
      summary:
        "Prescription medicines, health products, and pharmacist guidance, coordinated with the rest of care.",
      colorToken: "arovia-pharmacy",
      icon: "Pill" as IconName,
      services: [{ label: "Pharmacy", href: "/pharmacy", detail: "Prescription medicines and healthcare products" }],
    },
    {
      name: "Equipment Trade",
      headline: "Medical equipment and export capabilities for healthcare businesses and organizations.",
      href: "/equipment-trade",
      cta: "Explore Equipment Trade",
      summary:
        "Export support and medical equipment for hospitals, clinics, and healthcare organizations.",
      colorToken: "arovia-equipment",
      icon: "Stethoscope" as IconName,
      services: [
        { label: "Export", href: "/equipment-trade/export", detail: "Supplying equipment to other markets" },
        { label: "Medical Equipment", href: "/equipment-trade/medical-equipment", detail: "Hospital, diagnostic, surgical and ICU equipment" },
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
    { title: "Homecare", description: "Professional, compassionate healthcare delivered to your home, from nursing to personal assistance.", href: "/care/homecare" },
    { title: "Diagnostics", description: "Laboratory testing and health checkups, with collection arranged when you book.", href: "/care/diagnostics" },
    { title: "Ambulance", description: "Patient transport and care during transport. In a life-threatening emergency, call local emergency services.", href: "/care/ambulance" },
    { title: "Clinic", description: "Consultations and treatment planning in a clinical setting.", href: "/care/clinic" },
    { title: "Pharmacy", description: "Prescription fulfillment, healthcare products, and pharmacist guidance.", href: "/pharmacy" },
    { title: "Export", description: "Documentation and logistics support for medical equipment.", href: "/equipment-trade/export" },
    { title: "Medical Equipment", description: "Hospital, diagnostic, surgical, and ICU equipment with installation, training, and support.", href: "/equipment-trade/medical-equipment" },
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
    { title: "Medical Businesses", description: "Healthcare organizations can enquire about equipment trade and digital health.", href: "/contact?type=equipment", cta: "Business Inquiry" },
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

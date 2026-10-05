import type { ContentPage } from "@/types";

const careFaqs = [
  {
    question: "How do I schedule a clinic appointment?",
    answer:
      "You can schedule through our website, by calling [PHONE], or via WhatsApp. Availability is confirmed when you book.",
  },
  {
    question: "Does homecare require a clinic evaluation first?",
    answer:
      "Usually, yes. An initial assessment helps us understand your needs and create the right care plan. This can be done at the clinic or at home.",
  },
  {
    question: "How long does emergency response take?",
    answer:
      "In a life-threatening emergency, call local emergency services. Arovia does not publish a response time. For non-emergency transport, contact the care team on [PHONE].",
  },
  {
    question: "Are diagnostic tests covered by insurance?",
    answer:
      "Insurance partnerships are still being confirmed. We'll verify coverage and payment options when you book.",
  },
  {
    question: "Can homecare be arranged for short-term or temporary needs?",
    answer:
      "Absolutely. Homecare can be short-term, such as post-surgery recovery, or long-term chronic disease management. We customize duration to your needs.",
  },
];

export const carePage: ContentPage = {
  path: "/care",
  pillar: "care",
  seo: {
    title: "Arovia Care — Homecare, Diagnostics, Ambulance, Clinic",
    description:
      "Complete care services from clinic consultations to home care, diagnostics, and emergency ambulance. Healthcare meets you where you need it.",
    keywords: ["clinic care", "home care services", "diagnostic tests", "ambulance services", "outpatient care"],
  },
  eyebrow: "Care",
  title: "Complete Healthcare Care—Clinic, Home, Diagnostics, and Emergency",
  subheading:
    "From routine checkups to emergency response, from home-based care to diagnostic testing—Arovia's Care pillar brings healthcare to where you need it.",
  intro:
    "Healthcare shouldn't require you to fit into healthcare's schedule. Our Care pillar brings clinical expertise, home-based services, diagnostic capabilities, and emergency response together in one coordinated system. Whether you're seeking outpatient care, ongoing home support, health checkups, or emergency assistance, we're available and accessible.",
  primaryCta: { label: "Schedule Care", href: "/contact?type=healthcare" },
  secondaryCta: { label: "Learn Our Services", href: "#services" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Care", href: "/care" },
  ],
  audiencesTitle: "Care for Every Stage of Life",
  audiencesIntro:
    "Whether you're managing chronic illness, recovering from treatment, seeking preventive care, or facing an emergency, our Care services are designed for you.",
  audiences: [
    {
      title: "Individuals & Patients",
      description:
        "From young adults seeking routine checkups to seniors managing multiple health conditions, our clinical and home care services serve individual healthcare needs.",
    },
    {
      title: "Families & Caregivers",
      description:
        "Families need coordinated support. Whether caring for an elderly parent, a child with special needs, or a family member in recovery, our homecare services provide professional, compassionate support.",
    },
    {
      title: "Healthcare Institutions",
      description:
        "Hospitals and clinics partner with Arovia for overflow capacity, specialized services, or integrated care coordination.",
    },
  ],
  servicesTitle: "Four Care Services, Integrated",
  servicesIntro: "Each service stands alone, but together they create a complete care network.",
  services: [
    {
      title: "Homecare: Care in the Comfort of Your Home",
      description: "Professional healthcare delivered at home, from nursing and personal care to medication support.",
      href: "/care/homecare",
      included: [
        "Home nursing and personal care",
        "Medication management",
        "Post-operative and chronic disease support",
        "Elderly care and mobility assistance",
      ],
    },
    {
      title: "Diagnostics: Lab Tests & Health Checkups",
      description: "Accurate, timely diagnostics with professional interpretation and home collection for many tests.",
      href: "/care/diagnostics",
      included: ["Laboratory testing", "Health checkup packages", "Home collection", "Results interpretation"],
    },
    {
      title: "Ambulance: Patient Transport",
      description: "Ambulance support and patient transport. In a life-threatening emergency, call local emergency services.",
      href: "/care/ambulance",
      included: ["Patient transport", "Care during transport", "Hospital transfers", "Planned medical transport"],
    },
    {
      title: "Clinic: Outpatient and Specialty Care",
      description: "Professional medical consultations, specialty care, and treatment planning in a clinical setting.",
      href: "/care/clinic",
      included: [
        "General medical consultations",
        "Specialty care consultations",
        "Treatment planning and recommendations",
        "Referral coordination",
        "Ongoing patient management",
      ],
      whenToUse: ["Routine checkups", "Acute illness", "Chronic disease management", "Specialty consultations"],
    },
  ],
  whyTitle: "The Arovia Care Advantage",
  why: [
    { title: "Integrated System", description: "Clinic care, home support, diagnostics, and emergency response stay coordinated." },
    { title: "Clinical team", description: "Care is delivered by the clinical team assigned to the service. Individual credentials are confirmed when you book." },
    { title: "Accessible", description: "Care comes to you when it makes sense—clinic, home, or emergency." },
    { title: "Coordinated", description: "Your care is connected across clinic, home, and diagnostics." },
    { title: "Patient-Centered", description: "Care planning prioritizes wellbeing and quality of life." },
  ],
  faqs: careFaqs,
  ctaTitle: "Ready for Arovia Care?",
  ctaCopy: "Whether you need a clinic appointment, home care assessment, diagnostic tests, or emergency assistance, we're ready to help.",
  ctaPrimary: { label: "Contact Our Care Team", href: "/contact?type=healthcare" },
  ctaSecondary: { label: "View Care FAQs", href: "/faq" },
};

export const clinicPage: ContentPage = {
  path: "/care/clinic",
  pillar: "care",
  seo: {
    title: "Clinic Services — Consultations & Specialty Care | Arovia",
    description: "Professional clinic consultations, specialty care, and treatment planning. Schedule your appointment online or by phone.",
    keywords: ["doctor consultation", "specialty care", "outpatient care", "medical examination"],
  },
  eyebrow: "Care · Clinic",
  title: "Clinic Services: Professional Healthcare Consultations",
  subheading: "Outpatient and specialty care with treatment planning that connects to the rest of Arovia.",
  intro:
    "Our clinic services provide professional medical consultations, specialty care, and treatment planning in a clinical setting. Qualified clinicians coordinate with home care, diagnostics, and pharmacy so the visit is the start of a plan, not a dead end.",
  primaryCta: { label: "Schedule a Clinic Appointment", href: "/contact?type=healthcare" },
  secondaryCta: { label: "All Care Services", href: "/care" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Care", href: "/care" },
    { label: "Clinic", href: "/care/clinic" },
  ],
  audiencesTitle: "Who clinic care is for",
  audiences: [
    { title: "Routine and acute needs", description: "Checkups, new symptoms, and short-term illness that need a clinician in person." },
    { title: "Chronic conditions", description: "Ongoing management with referrals into homecare, diagnostics, and medicines." },
    { title: "Specialty questions", description: "Consultations and treatment planning when a focused clinical opinion is needed." },
  ],
  servicesTitle: "What's included",
  services: [
    {
      title: "A clinic visit",
      description: "Consultation, planning, and coordination with the rest of the ecosystem.",
      included: [
        "General medical consultations",
        "Specialty care consultations",
        "Treatment planning and recommendations",
        "Referral coordination",
        "Ongoing patient management",
      ],
      whenToUse: [
        "Routine medical checkups",
        "Acute illness or symptoms",
        "Chronic disease management",
        "Specialty consultations",
        "Pre-treatment evaluations",
      ],
      steps: [
        "Schedule an appointment online, by phone, or as a walk-in when available",
        "Share health information before the visit",
        "Consult with a medical professional",
        "Discuss the treatment plan",
        "Coordinate prescriptions and follow-up",
      ],
    },
  ],
  whyTitle: "Why choose Arovia Clinic",
  why: [
    { title: "Qualified clinicians", description: "Medical professionals focused on clear plans, not rushed visits." },
    { title: "Connected follow-through", description: "Home care, diagnostics, and pharmacy can continue the same plan." },
    { title: "Convenient scheduling", description: "Book through the contact form, phone, or WhatsApp." },
  ],
  faqs: careFaqs.slice(0, 3),
  ctaTitle: "Book your consultation",
  ctaCopy: "Tell us the kind of visit you need and a preferred time. The care team will confirm the appointment.",
  ctaPrimary: { label: "Schedule a Clinic Appointment", href: "/contact?type=healthcare" },
  ctaSecondary: { label: "Back to Care", href: "/care" },
};

export const homecarePage: ContentPage = {
  path: "/care/homecare",
  pillar: "care",
  seo: {
    title: "Homecare — Professional In-Home Healthcare | Arovia",
    description: "Professional in-home care and support. From recovery care to chronic disease management, we bring healthcare to your home.",
    keywords: ["home nursing", "elderly care", "post-operative care", "chronic disease management", "in-home care"],
  },
  eyebrow: "Care · Homecare",
  title: "Homecare: Professional Healthcare in the Comfort of Your Home",
  subheading: "Nursing, personal care, and recovery support without requiring a clinic visit for every need.",
  intro:
    "Professional, compassionate healthcare delivered to your home. From nursing care to personal assistance, we support your health without requiring clinic visits for every step of recovery or ongoing care.",
  primaryCta: { label: "Request a homecare assessment", href: "/contact?type=healthcare" },
  secondaryCta: { label: "All Care Services", href: "/care" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Care", href: "/care" },
    { label: "Homecare", href: "/care/homecare" },
  ],
  audiencesTitle: "When homecare helps",
  audiences: [
    { title: "Recovery at home", description: "Post-operative care and the transition after hospitalization." },
    { title: "Ongoing conditions", description: "Chronic disease management, medication support, and monitoring." },
    { title: "Families and seniors", description: "Elderly care, mobility assistance, and respite for caregivers." },
  ],
  servicesTitle: "What a care plan can include",
  services: [
    {
      title: "In-home support",
      description: "A personalized plan, a named caregiver, and coordination with clinic and pharmacy.",
      included: [
        "Home nursing services",
        "Personal care assistance",
        "Medication management",
        "Vital sign monitoring",
        "Post-operative care",
        "Chronic disease management",
        "Elderly and senior care",
        "Patient mobility assistance",
        "Medical equipment support",
      ],
      steps: [
        "Initial assessment at the clinic or at home",
        "Care plan developed with the patient and family",
        "Caregiver assignment and introduction",
        "Regular visits and ongoing monitoring",
        "Coordination with clinic and medicines",
        "Family communication and updates",
      ],
    },
  ],
  whyTitle: "Why choose Arovia Homecare",
  why: [
    { title: "Qualified caregivers", description: "Trained nurses and caregivers with infection-control practice and background checks." },
    { title: "Personal plans", description: "Short-term recovery or long-term support, with frequency set after assessment." },
    { title: "Dignity first", description: "Personal care, bathing, and mobility support are delivered with respect." },
  ],
  faqs: [
    careFaqs[1],
    careFaqs[4],
    {
      question: "How often will a caregiver visit?",
      answer: "Frequency is set after assessment, from several times a day to weekly monitoring.",
    },
    {
      question: "What is the cost of homecare?",
      answer: "We'll quote after assessment based on care type, frequency, qualifications, and location.",
    },
  ],
  ctaTitle: "Request a home assessment",
  ctaCopy: "Share who needs care, whether it is short-term or ongoing, and how to reach the family.",
  ctaPrimary: { label: "Request a homecare assessment", href: "/contact?type=healthcare" },
  ctaSecondary: { label: "Homecare questions", href: "/faq" },
};

export const diagnosticsPage: ContentPage = {
  path: "/care/diagnostics",
  pillar: "care",
  seo: {
    title: "Lab Tests & Diagnostics — Home Collection Available | Arovia",
    description: "Accurate laboratory tests and health diagnostics. Home collection available. Quick results with professional interpretation.",
    keywords: ["blood tests", "health checkup", "diagnostic testing", "home collection", "health screening"],
  },
  eyebrow: "Care · Diagnostics",
  title: "Diagnostics: Lab Tests & Health Checkups",
  subheading: "Accurate testing that guides treatment, with collection at the clinic or at home.",
  intro:
    "Accurate, timely health diagnostics guide treatment and prevention. Our laboratory services provide comprehensive testing with professional interpretation, coordinated with the clinician who is treating you.",
  primaryCta: { label: "Book Diagnostic Tests", href: "/contact?type=healthcare" },
  secondaryCta: { label: "All Care Services", href: "/care" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Care", href: "/care" },
    { label: "Diagnostics", href: "/care/diagnostics" },
  ],
  servicesTitle: "Testing and checkups",
  services: [
    {
      title: "Laboratory services",
      description: "From routine blood work to monitoring tests, with a clear prep plan and interpreted results.",
      included: [
        "Blood work and laboratory testing",
        "Health checkup packages",
        "Preventive screening",
        "Chronic disease monitoring",
        "Specialized testing",
        "Home collection",
        "Results interpretation",
      ],
      whenToUse: [
        "Annual health checkups",
        "Symptom investigation",
        "Pre-treatment baseline",
        "Post-treatment follow-up",
        "Health risk assessment",
      ],
      steps: [
        "Choose tests and schedule",
        "Follow preparation guidance",
        "Collect the sample at the clinic or at home",
        "Laboratory analysis",
        "Professional interpretation",
        "Share the report with the treating physician",
      ],
      notes: ["Diagnostic imaging availability will be confirmed before it is offered."],
    },
  ],
  whyTitle: "Why choose Arovia Diagnostics",
  why: [
    { title: "Certified testing", description: "Accuracy and quality checks are part of the lab process." },
    { title: "Clear results", description: "Interpretation is included, with physician consult for complex findings." },
    { title: "Convenient collection", description: "Many tests can be collected at home." },
  ],
  faqs: [
    { question: "Do you offer home collection?", answer: "Yes, for many blood tests a phlebotomist can visit your home." },
    { question: "How fast are results?", answer: "Routine tests return sooner than specialized tests. We confirm the window when you book." },
    { question: "Can my doctor order tests?", answer: "Yes. Providers can order Arovia tests and we coordinate collection and reporting." },
  ],
  ctaTitle: "Book a test or checkup",
  ctaCopy: "Tell us the tests you need, or ask for a checkup package. We'll confirm preparation and timing.",
  ctaPrimary: { label: "Book Diagnostic Tests", href: "/contact?type=healthcare" },
  ctaSecondary: { label: "Diagnostics questions", href: "/faq" },
};

export const ambulancePage: ContentPage = {
  path: "/care/ambulance",
  pillar: "care",
  seo: {
    title: "Ambulance Services — Patient Transport | Arovia",
    description: "Ambulance support and patient transport. In a life-threatening emergency, call local emergency services.",
    keywords: ["emergency ambulance", "patient transport", "paramedic services", "emergency transport"],
  },
  eyebrow: "Care · Ambulance",
  title: "Ambulance Services: Emergency Response & Patient Transport",
  subheading: "Patient transport with a crew, an equipped vehicle, and a handoff to the receiving facility.",
  intro:
    "In a life-threatening emergency, call local emergency services. Arovia ambulance support covers patient transport and care during transport. It does not publish a response time. Non-emergency medical transport can be requested for discharges and planned transfers.",
  primaryCta: { label: "Emergency Transport Inquiry", href: "/contact?type=healthcare" },
  secondaryCta: { label: "Save our number on Contact", href: "/contact" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Care", href: "/care" },
    { label: "Ambulance", href: "/care/ambulance" },
  ],
  servicesTitle: "What the service covers",
  services: [
    {
      title: "Emergency and planned transport",
      description: "Stabilization on scene, monitoring in transit, and coordination with the receiving facility.",
      included: [
        "Emergency transport requests",
        "Professional paramedics",
        "Basic and advanced life support",
        "Patient stabilization",
        "Safe transport to hospitals",
        "Inter-hospital transfers",
        "Non-emergency medical transport",
        "Monitoring during transport",
      ],
      whenToUse: [
        "Chest pain, severe breathing trouble, or loss of consciousness",
        "Severe bleeding, trauma, or acute illness",
        "Hospital discharge transportation",
        "Transfer between facilities",
        "Planned medical transportation",
      ],
      steps: [
        "Call the emergency number",
        "A dispatcher assesses the situation",
        "An ambulance is dispatched",
        "The crew provides care during transport",
        "The receiving facility is coordinated",
        "Family is notified at handoff",
      ],
      notes: [
        "The published emergency number and average response time will be added as soon as they are confirmed.",
        "For life-threatening emergencies, also contact local public emergency services.",
      ],
    },
  ],
  whyTitle: "Why choose Arovia Ambulance",
  why: [
    { title: "Professional crew", description: "Paramedics equipped for life support, oxygen, monitoring, and emergency medication." },
    { title: "Modern vehicles", description: "GPS-equipped ambulances with regular equipment checks." },
    { title: "Clear communication", description: "Preferred hospital requests are honored when the patient is stable and it is appropriate." },
  ],
  faqs: [
    { question: "When should I call?", answer: "Call for chest pain, breathing difficulty, severe allergy, bleeding, unconsciousness, or major trauma." },
    { question: "Is it available 24/7?", answer: "The service is built for round-the-clock response. Hours will be published with the emergency number." },
    { question: "Can you do non-emergency transfers?", answer: "Yes. Book discharges, inter-hospital transfers, and planned trips through the care team." },
  ],
  ctaTitle: "Save the ambulance number",
  ctaCopy: "The emergency line will be published here and on the Contact page as soon as it is confirmed. For a planned transfer, send an inquiry now.",
  ctaPrimary: { label: "Emergency Transport Inquiry", href: "/contact?type=healthcare" },
  ctaSecondary: { label: "Contact", href: "/contact" },
};

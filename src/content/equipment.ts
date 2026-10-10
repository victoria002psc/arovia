import type { ContentPage } from "@/types";

/** [VERIFY: export capability and markets]. Do not list countries or claim volumes until confirmed. */

export const equipmentPage: ContentPage = {
  path: "/equipment-trade",
  pillar: "equipment",
  seo: {
    title: "Equipment Trade — Export and Medical Equipment | Arovia",
    description:
      "Medical equipment import and export support for healthcare businesses and organizations. Hospital, diagnostic, surgical, and ICU equipment.",
    keywords: ["medical equipment", "equipment import", "equipment export", "hospital equipment", "diagnostic equipment"],
  },
  eyebrow: "Equipment Trade",
  title: "Medical Equipment. Connected to Healthcare Organizations.",
  subheading: "Import and export support, plus medical equipment for hospitals, clinics, and healthcare businesses.",
  intro:
    "Healthcare organizations need reliable equipment and a clear path when they source or move equipment across markets. Arovia's Equipment Trade covers medical equipment alongside import and export support: hospital, diagnostic, surgical, and ICU devices, with installation and training discussed as part of the enquiry. Destinations, volumes, and registrations are confirmed per enquiry.",
  primaryCta: { label: "Request an Equipment Inquiry", href: "/contact?type=equipment" },
  secondaryCta: { label: "Explore services", href: "#services" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Equipment Trade", href: "/equipment-trade" },
  ],
  audiencesTitle: "Who equipment trade is for",
  audiencesIntro: "Built for institutions and medical businesses that need equipment or export support.",
  audiences: [
    { title: "Hospitals and healthcare facilities", description: "Setups, upgrades, and replacement of clinical equipment." },
    { title: "Diagnostic centers", description: "Laboratory and diagnostic tools matched to the tests you run." },
    { title: "Clinics and specialty centers", description: "Equipment aligned to the procedures you perform." },
    { title: "Medical businesses", description: "Sourcing and export conversations for healthcare ventures." },
  ],
  servicesTitle: "Two Equipment Trade services",
  servicesIntro: "Export support (including import/sourcing conversations where relevant) and Medical Equipment.",
  services: [
    {
      title: "Export",
      description: "Documentation, logistics, and market-access support for medical equipment moving across borders. Import or sourcing needs can be discussed in the same enquiry.",
      href: "/equipment-trade/export",
    },
    {
      title: "Medical Equipment",
      description: "Hospital, diagnostic, surgical, and ICU equipment, with training and support discussed in the quotation.",
      href: "/equipment-trade/medical-equipment",
    },
  ],
  whyTitle: "How an equipment enquiry is handled",
  why: [
    { title: "A defined scope", description: "The quotation follows the equipment, quantity, and destination you describe." },
    { title: "Setup and training", description: "Installation and basic training can be included. The quotation states what is covered." },
    { title: "Documentation", description: "Export paperwork is prepared with the shipment when an export is in scope." },
    { title: "Quality check", description: "Items are checked before they are handed over. Specific certifications are listed per product once confirmed." },
  ],
  faqs: [
    { question: "Do you import and export medical equipment?", answer: "Import and export support are part of Equipment Trade conversations. Destinations, volumes, and paperwork are confirmed per enquiry. A published market list and registration numbers are not shown until verified." },
    { question: "Is installation and training included?", answer: "Installation and basic training can be included. The quotation states what is covered." },
    { question: "What quality standards does the equipment meet?", answer: "Specific ISO, CE, or FDA claims are listed per product once confirmed. Every shipment is quality-checked." },
  ],
  ctaTitle: "Talk about equipment",
  ctaCopy: "Share the equipment, quantity, and whether this is an export. The team will reply with the next step.",
  ctaPrimary: { label: "Request an Equipment Inquiry", href: "/contact?type=equipment" },
  ctaSecondary: { label: "Equipment questions", href: "/faq" },
};

export const exportPage: ContentPage = {
  path: "/equipment-trade/export",
  pillar: "equipment",
  seo: {
    title: "Medical Equipment Export | Arovia Equipment Trade",
    description: "Export support for medical equipment: documentation, logistics, and destination guidance confirmed per enquiry.",
    keywords: ["medical equipment export", "equipment documentation", "healthcare equipment logistics"],
  },
  eyebrow: "Equipment Trade · Export",
  title: "Export",
  subheading: "Documentation, logistics, and destination guidance for medical equipment.",
  intro:
    "Export covers the paperwork, shipping coordination, and destination guidance needed when medical equipment moves to another market. Destinations and volumes are confirmed for each enquiry. Arovia does not publish a country list until that capability is verified.",
  primaryCta: { label: "Discuss an export", href: "/contact?type=equipment" },
  secondaryCta: { label: "Equipment Trade", href: "/equipment-trade" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Equipment Trade", href: "/equipment-trade" },
    { label: "Export", href: "/equipment-trade/export" },
  ],
  servicesTitle: "What an export enquiry can cover",
  services: [
    {
      title: "From the product to the shipment",
      description: "Documentation, shipping, and destination guidance, scoped to the enquiry.",
      included: [
        "Export documentation",
        "Shipping and logistics coordination",
        "Destination guidance for the market you name",
        "Quality check before the goods leave",
        "Support after the shipment is dispatched",
      ],
      notes: [
        "Destinations and volumes are confirmed per enquiry — a published market list is not available yet.",
        "Air, sea, and land options are discussed per shipment.",
        "Destination-specific files are prepared only when they apply to that enquiry.",
      ],
    },
  ],
  whyTitle: "How export support is scoped",
  why: [
    { title: "Per enquiry", description: "The product, destination, and quantity define the work." },
    { title: "A named owner", description: "Shipping is coordinated rather than handed off without a contact." },
    { title: "After dispatch", description: "Questions after the goods leave can come back to the same enquiry." },
  ],
  faqs: [
    { question: "Do you export medical equipment?", answer: "Yes, as an Equipment Trade service. Capability for a specific destination is confirmed before a commitment is made." },
    { question: "Which countries?", answer: "Destinations are confirmed per enquiry. A public country list is not published yet." },
  ],
  ctaTitle: "Start an export conversation",
  ctaCopy: "Tell us the product and the destination you have in mind.",
  ctaPrimary: { label: "Discuss an export", href: "/contact?type=equipment" },
};

export const equipmentSupplyPage: ContentPage = {
  path: "/equipment-trade/medical-equipment",
  pillar: "equipment",
  seo: {
    title: "Medical Equipment — Hospital, Diagnostic, Surgical and ICU | Arovia",
    description: "Hospital, diagnostic, surgical, and ICU equipment, with installation and training discussed in the quotation.",
    keywords: ["medical equipment", "hospital equipment", "surgical equipment", "ICU equipment"],
  },
  eyebrow: "Equipment Trade · Medical Equipment",
  title: "Medical Equipment",
  subheading: "Hospital, diagnostic, surgical, and ICU equipment for new facilities and replacements.",
  intro:
    "Medical Equipment covers devices used in hospitals, diagnostic rooms, operating areas, and intensive care. Selection follows the clinical service you describe. Installation and staff training are discussed in the quotation.",
  primaryCta: { label: "Request an equipment quotation", href: "/contact?type=equipment" },
  secondaryCta: { label: "Equipment Trade", href: "/equipment-trade" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Equipment Trade", href: "/equipment-trade" },
    { label: "Medical Equipment", href: "/equipment-trade/medical-equipment" },
  ],
  servicesTitle: "Categories",
  services: [
    {
      title: "Hospital equipment",
      description: "Beds, monitoring, oxygen delivery, infusion equipment, transfer equipment, and sterilization.",
    },
    {
      title: "Diagnostic equipment",
      description: "Laboratory analyzers, imaging, ECG and monitoring, ultrasound, and X-ray.",
    },
    {
      title: "Surgical equipment",
      description: "Operating-room equipment, instruments, anesthesia, sterilization, and positioning.",
    },
    {
      title: "ICU equipment",
      description: "Ventilators, advanced monitoring, infusion pumps, and life-support equipment.",
    },
  ],
  whyTitle: "What the engagement can include",
  why: [
    { title: "Selection", description: "Specifications matched to the clinical service you run." },
    { title: "Installation and training", description: "Setup and staff training are quoted with the equipment." },
    { title: "Aftercare", description: "Maintenance guidance and spare-parts coordination are confirmed per contract." },
  ],
  faqs: [
    { question: "Is training included?", answer: "Basic training can be included. The quotation states the hours and who attends." },
    { question: "What if something arrives damaged?", answer: "Damage is documented, the claim is worked with the carrier, and repair or replacement is arranged." },
  ],
  ctaTitle: "Request a quotation",
  ctaCopy: "List the departments you are equipping and any specifications that are already fixed.",
  ctaPrimary: { label: "Request an equipment quotation", href: "/contact?type=equipment" },
};

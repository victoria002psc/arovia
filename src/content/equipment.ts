import type { ContentPage } from "@/types";

export const equipmentPage: ContentPage = {
  path: "/equipment",
  pillar: "equipment",
  seo: {
    title: "Medical Equipment Trade — Import, Export, Supply & Global Sourcing",
    description: "Hospital, diagnostic, and surgical equipment sourcing. Import and export services. Global supplier network with local support.",
    keywords: ["medical equipment import", "hospital equipment", "medical supplies", "equipment export"],
  },
  eyebrow: "Equipment",
  title: "Global Medical Equipment Supply, Local Support",
  subheading: "Import, export, and supply hospital, diagnostic, surgical, and ICU equipment with professional expertise and reliable partnerships.",
  intro:
    "Healthcare institutions need reliable equipment sourcing. Arovia's Medical Equipment Trade pillar connects your facility with quality equipment globally—whether you're importing to build or expand operations, exporting to serve international markets, or maintaining ongoing equipment supply. We handle equipment, consumables, and the expertise behind them.",
  primaryCta: { label: "Discuss Equipment Needs", href: "/contact?type=equipment" },
  secondaryCta: { label: "Explore Services", href: "#services" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Equipment", href: "/equipment" },
  ],
  audiencesTitle: "Equipment Solutions for Healthcare Institutions",
  audiencesIntro: "Whether you're establishing a facility, expanding capacity, or maintaining supply, equipment trade is built for institutions and medical businesses.",
  audiences: [
    { title: "Hospitals & healthcare facilities", description: "Complete setups, upgrades, and ongoing maintenance supply." },
    { title: "Diagnostic centers", description: "Lab, imaging, and diagnostic tools matched to your test menu." },
    { title: "Clinics & specialty centers", description: "Equipment aligned to the procedures you actually perform." },
    { title: "Medical businesses", description: "Sourcing support for new healthcare ventures." },
    { title: "Government & NGOs", description: "Reliable sourcing for public health programs." },
    { title: "International buyers", description: "Import support for organizations buying across borders." },
  ],
  servicesTitle: "Four Equipment Trade Services",
  servicesIntro: "From importing equipment to exporting solutions, and from capital equipment to consumables.",
  services: [
    {
      title: "Equipment Import",
      description: "Global sourcing, quality checks, customs, and local delivery.",
      href: "/equipment/import",
    },
    {
      title: "Equipment Export",
      description: "Documentation, logistics, and market access for international distribution.",
      href: "/equipment/export",
    },
    {
      title: "Medical Equipment",
      description: "Hospital, diagnostic, surgical, and ICU equipment with training and support.",
      href: "/equipment/equipment",
    },
    {
      title: "Medical Supplies",
      description: "Consumables with scheduled replenishment and bulk pricing.",
      href: "/equipment/supplies",
    },
  ],
  whyTitle: "The Arovia Equipment Advantage",
  why: [
    { title: "Global Sourcing", description: "Access equipment globally and receive it locally." },
    { title: "Comprehensive Service", description: "Selection, installation, training, and support in one engagement." },
    { title: "Regulatory Expertise", description: "Import and export documentation, standards, and compliance." },
    { title: "Quality Assurance", description: "Items are verified before delivery." },
    { title: "Professional Support", description: "Installation, training, maintenance, and technical help after the sale." },
  ],
  faqs: [
    { question: "How long does equipment import take?", answer: "It depends on the equipment, source, and customs. We give a specific timeline with the quote." },
    { question: "Do you handle regulatory compliance for import?", answer: "Yes. We manage documentation, customs, and compliance for the shipment." },
    { question: "Is installation and training included?", answer: "Installation and basic training are included. Extended training can be arranged." },
    { question: "Can you supply consumables on an ongoing basis?", answer: "Yes, with regular schedules and inventory support." },
    { question: "What quality standards do your equipment meet?", answer: "Specific ISO, CE, or FDA claims will be listed per product once confirmed. Every shipment is quality-checked." },
  ],
  ctaTitle: "Ready to source equipment?",
  ctaCopy: "Whether this is a first import or an expansion, the team can help with sourcing, logistics, and support.",
  ctaPrimary: { label: "Submit Equipment Inquiry", href: "/contact?type=equipment" },
  ctaSecondary: { label: "Request a quotation", href: "/contact?type=equipment" },
};

export const importPage: ContentPage = {
  path: "/equipment/import",
  pillar: "equipment",
  seo: {
    title: "Medical Equipment Import — Global Sourcing with Regulatory Expertise",
    description: "Import medical equipment from global suppliers. We handle sourcing, documentation, customs, and installation support.",
    keywords: ["medical equipment import", "equipment sourcing", "import medical devices"],
  },
  eyebrow: "Equipment · Import",
  title: "Equipment Import: Global Sourcing, Local Delivery",
  subheading: "Establish or expand your facility with equipment sourced globally and delivered locally.",
  intro:
    "We handle sourcing, import logistics, quality verification, and installation support so your team can focus on opening or expanding care.",
  primaryCta: { label: "Submit Equipment Import Inquiry", href: "/contact?type=equipment" },
  secondaryCta: { label: "Equipment overview", href: "/equipment" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Equipment", href: "/equipment" },
    { label: "Import", href: "/equipment/import" },
  ],
  servicesTitle: "What import includes",
  services: [
    {
      title: "Sourcing through installation",
      description: "Supplier identification, compliance, logistics, and training.",
      included: [
        "International supplier identification",
        "Quality verification before import",
        "Logistics and customs coordination",
        "Documentation and regulatory compliance",
        "Local delivery and installation support",
        "Warranty management",
        "Training on equipment use",
      ],
      notes: [
        "Diagnostic imaging, laboratory, surgical, beds and furniture",
        "ICU, monitoring, sterilization, and operation theater equipment",
      ],
      steps: [
        "Assess the equipment requirement",
        "Identify suppliers",
        "Evaluate quality and quotes",
        "Negotiate and raise the purchase order",
        "Coordinate import logistics",
        "Verify quality on delivery",
        "Install, train, and set up warranty support",
      ],
    },
  ],
  whyTitle: "Why import through Arovia",
  why: [
    { title: "Global suppliers", description: "Access beyond a single local catalog." },
    { title: "Checked quality", description: "Verification before the equipment is relied on clinically." },
    { title: "Compliance", description: "Documentation and customs handled with the shipment." },
  ],
  faqs: (equipmentPage.faqs ?? []).slice(0, 4),
  ctaTitle: "Start an import inquiry",
  ctaCopy: "Share the equipment type, quantity, and timeline. We'll return sourcing options.",
  ctaPrimary: { label: "Submit Equipment Import Inquiry", href: "/contact?type=equipment" },
};

export const exportPage: ContentPage = {
  path: "/equipment/export",
  pillar: "equipment",
  seo: {
    title: "Medical Equipment Export — International Distribution & Market Access",
    description: "Export medical equipment internationally. We provide logistics, compliance, and market access expertise.",
    keywords: ["medical equipment export", "equipment distribution", "international medical suppliers"],
  },
  eyebrow: "Equipment · Export",
  title: "Equipment Export: International Distribution",
  subheading: "Expand distribution with export logistics, documentation, and market-access support.",
  intro:
    "We provide export logistics, market access, and distribution expertise so medical equipment can reach international buyers with the paperwork and quality checks those markets expect.",
  primaryCta: { label: "Discuss Equipment Export", href: "/contact?type=equipment" },
  secondaryCta: { label: "Equipment overview", href: "/equipment" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Equipment", href: "/equipment" },
    { label: "Export", href: "/equipment/export" },
  ],
  servicesTitle: "Export support",
  services: [
    {
      title: "From market to delivery",
      description: "Documentation, shipping, and destination guidance.",
      included: [
        "International market identification",
        "Export documentation and compliance",
        "Shipping and logistics coordination",
        "Regulatory guidance",
        "Distribution partner connections",
        "Quality assurance for export",
        "Post-export support",
      ],
      notes: [
        "Air, sea, and land shipping",
        "Destination-specific documentation such as CE or FDA where it applies",
        "Export destinations will be listed once confirmed",
      ],
    },
  ],
  whyTitle: "Why partner for export",
  why: [
    { title: "Regulatory know-how", description: "Different countries ask for different files. We prepare them with the shipment." },
    { title: "Logistics", description: "Coordinated shipping rather than a handoff with no owner." },
    { title: "After the border", description: "Support continues after the goods leave." },
  ],
  faqs: [
    { question: "Do you export medical equipment?", answer: "Yes. We support documentation, shipping, and destination compliance." },
    { question: "Which countries?", answer: "Destinations are confirmed per inquiry while the published market list is finalized." },
  ],
  ctaTitle: "Talk about an export opportunity",
  ctaCopy: "Tell us the product, destination, and volume. We'll outline the path.",
  ctaPrimary: { label: "Discuss Equipment Export Opportunity", href: "/contact?type=equipment" },
};

export const equipmentSupplyPage: ContentPage = {
  path: "/equipment/equipment",
  pillar: "equipment",
  seo: {
    title: "Hospital & Surgical Medical Equipment — Diagnostic & ICU Supply",
    description: "Supply of hospital, diagnostic, surgical, and ICU equipment. Quality assured with installation and training.",
    keywords: ["medical equipment supplier", "hospital equipment", "surgical equipment", "ICU equipment"],
  },
  eyebrow: "Equipment · Supply",
  title: "Medical Equipment Supply: Hospital, Diagnostic, Surgical & ICU",
  subheading: "Quality equipment for new facilities and upgrades, with installation and staff training.",
  intro:
    "Whether you are opening a facility or replacing a critical device, we supply hospital, diagnostic, surgical, and ICU equipment and stay for setup and training.",
  primaryCta: { label: "Request Equipment Quotation", href: "/contact?type=equipment" },
  secondaryCta: { label: "Equipment overview", href: "/equipment" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Equipment", href: "/equipment" },
    { label: "Equipment", href: "/equipment/equipment" },
  ],
  servicesTitle: "Categories",
  services: [
    {
      title: "Hospital equipment",
      description: "Beds, monitoring, oxygen delivery, IV equipment, transfer equipment, and sterilization.",
    },
    {
      title: "Diagnostic equipment",
      description: "Laboratory analyzers, imaging, ECG and monitoring, ultrasound, and X-ray.",
    },
    {
      title: "Surgical equipment",
      description: "Operating theater equipment, instruments, anesthesia, sterilization, and positioning.",
    },
    {
      title: "ICU equipment",
      description: "Ventilators, advanced monitoring, infusion pumps, and advanced life support equipment.",
    },
  ],
  whyTitle: "What the supply engagement includes",
  why: [
    { title: "Selection", description: "Specifications matched to the clinical service you run." },
    { title: "Installation and training", description: "Setup and staff training are part of delivery." },
    { title: "Aftercare", description: "Maintenance guidance, spare parts, and upgrade planning. Round-the-clock technical support is confirmed per contract." },
  ],
  faqs: [
    { question: "Is training included?", answer: "Basic training is included. Extended operational support can be added." },
    { question: "What if something arrives damaged?", answer: "We document it, work the claim, and arrange repair or replacement." },
  ],
  ctaTitle: "Request a quotation",
  ctaCopy: "List the departments you are equipping and any must-have specifications.",
  ctaPrimary: { label: "Request Equipment Quotation", href: "/contact?type=equipment" },
};

export const suppliesPage: ContentPage = {
  path: "/equipment/supplies",
  pillar: "equipment",
  seo: {
    title: "Medical Supplies & Consumables — Hospital Wholesale | Arovia",
    description: "Bulk supply of medical consumables, disposables, and healthcare products. Competitive pricing with flexible delivery.",
    keywords: ["medical supplies wholesale", "hospital consumables", "medical disposables"],
  },
  eyebrow: "Equipment · Supplies",
  title: "Medical Supplies: Consumables & Healthcare Products",
  subheading: "Reliable bulk supply, inventory support, and replenishment for facilities that cannot stock out.",
  intro:
    "Beyond capital equipment, facilities need a steady supply of consumables. We provide bulk supply, inventory support, and ongoing replenishment.",
  primaryCta: { label: "Establish a Supply Partnership", href: "/contact?type=equipment" },
  secondaryCta: { label: "Equipment overview", href: "/equipment" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Equipment", href: "/equipment" },
    { label: "Supplies", href: "/equipment/supplies" },
  ],
  servicesTitle: "Supply categories",
  services: [
    { title: "Disposable medical items", description: "Syringes, gloves, gauze, masks, and sterile packaging." },
    { title: "Laboratory consumables", description: "Media, reagents, collection materials, and staining supplies." },
    { title: "Surgical consumables", description: "Sutures, drapes, disposable instruments, and hemostatic agents." },
    { title: "Hospital consumables", description: "Linen, cleaning, sterilization, and safety supplies." },
  ],
  whyTitle: "Why partner for supply",
  why: [
    { title: "Predictable delivery", description: "Regular schedules or just-in-time arrangements." },
    { title: "Bulk pricing", description: "Pricing that reflects volume and a dedicated account contact." },
    { title: "Documentation", description: "Quality and regulatory paperwork travels with the goods." },
  ],
  faqs: [
    { question: "Can supply be ongoing?", answer: "Yes. We set a cadence, support inventory, and replenish against your usage." },
  ],
  ctaTitle: "Set up ongoing supply",
  ctaCopy: "Tell us the categories, approximate volumes, and delivery location.",
  ctaPrimary: { label: "Establish Ongoing Supply Partnership", href: "/contact?type=equipment" },
};

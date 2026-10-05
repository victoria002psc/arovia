import type { ContentPage } from "@/types";

export const digitalPage: ContentPage = {
  path: "/digital-health",
  pillar: "digital",
  seo: {
    title: "Healthcare Software & Digital Health Solutions — Custom Development",
    description: "Custom healthcare apps, medical websites, integrated platforms, and healthcare software solutions for organizations.",
    keywords: ["healthcare software development", "telemedicine platform", "patient portal", "medical app development"],
  },
  eyebrow: "Digital Health",
  title: "Healthcare Technology That Transforms Care",
  subheading: "Custom healthcare apps, websites, platforms, and software built for how care is actually delivered.",
  intro:
    "Healthcare is increasingly digital, but technology shouldn't be generic. Arovia's Digital Health pillar builds custom solutions—healthcare apps, websites, integrated platforms, and specialized software—designed to transform how healthcare organizations operate and serve patients.",
  primaryCta: { label: "Discuss Your Digital Project", href: "/contact?type=Digital%20Health%20Solutions" },
  secondaryCta: { label: "Explore Solutions", href: "#services" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Digital Health", href: "/digital-health" },
  ],
  audiencesTitle: "Healthcare organizations that need software",
  audiencesIntro: "From a clinic's first booking site to a hospital platform, the work starts with the clinical workflow.",
  audiences: [
    { title: "Hospitals & health systems", description: "Patient management, billing, analytics, and communication in one platform." },
    { title: "Clinics", description: "Practice management, appointments, and patient communication." },
    { title: "Telemedicine & remote care", description: "Consultations and remote monitoring built for clinical use." },
    { title: "Diagnostics & pharmacies", description: "Lab information, result delivery, and medication workflows." },
    { title: "Startups, government, and NGOs", description: "MVPs, public-health reporting, and citizen-facing tools." },
  ],
  servicesTitle: "Four Digital Health Solutions",
  servicesIntro: "A mobile app, a website, an integrated platform, or software that does not exist off the shelf.",
  services: [
    { title: "Medical Apps", description: "iOS and Android products for patients, clinicians, and operations.", href: "/digital-health/apps" },
    { title: "Websites & portals", description: "Organization sites and patient portals that are accessible and secure.", href: "/digital-health/websites" },
    { title: "Platforms", description: "Clinical, pharmacy, billing, and analytics workflows in one system.", href: "/digital-health/platforms" },
    { title: "Custom solutions", description: "LIS, RIS, scheduling, interoperability, and specialty care systems.", href: "/digital-health/solutions" },
  ],
  whyTitle: "How we build healthcare technology",
  why: [
    { title: "Healthcare first", description: "Workflows drive the product. Trends do not." },
    { title: "User-centered", description: "Designed for how clinicians work and how patients actually use software." },
    { title: "Security by default", description: "Encryption, access control, and compliance are part of the architecture." },
    { title: "Integration", description: "HL7, FHIR, records, devices, and billing systems when the project needs them." },
    { title: "After launch", description: "Monitoring, support, and planned improvements." },
  ],
  faqs: [
    { question: "How long does a healthcare app take?", answer: "We estimate after requirements. Simple products ship sooner than multi-department platforms." },
    { question: "Is the software secure?", answer: "Security is designed in: encryption, authentication, audit trails, and the compliance regime that applies to you." },
    { question: "Can you integrate existing systems?", answer: "Yes, including records and practice systems via HL7 and FHIR where those standards fit." },
    { question: "What happens after launch?", answer: "Support, monitoring, fixes, and enhancements continue under an agreed plan." },
    { question: "How much does it cost?", answer: "We quote after discovery. Price follows scope, platforms, and integrations." },
  ],
  ctaTitle: "Ready to transform care with technology?",
  ctaCopy: "Bring the problem, the users, and any systems we must connect. We'll propose a path.",
  ctaPrimary: { label: "Discuss Your Digital Health Project", href: "/contact?type=Digital%20Health%20Solutions" },
  ctaSecondary: { label: "Request a consultation", href: "/contact?type=Digital%20Health%20Solutions" },
};

export const appsPage: ContentPage = {
  path: "/digital-health/apps",
  pillar: "digital",
  seo: {
    title: "Healthcare Mobile Apps — Custom App Development | Arovia",
    description: "Custom healthcare mobile apps for iOS and Android. Patient engagement, practice management, and hospital operations.",
    keywords: ["healthcare app development", "patient portal app", "telemedicine app"],
  },
  eyebrow: "Digital Health · Apps",
  title: "Healthcare Mobile Apps: Patient Engagement & Operations",
  subheading: "Mobile products patients use daily and organizations can operate at scale.",
  intro:
    "From appointment booking and medication reminders to clinical documentation and bed management, we build healthcare apps for iOS and Android with security and clinical workflow in the design.",
  primaryCta: { label: "Discuss Your Healthcare App", href: "/contact?type=Digital%20Health%20Solutions" },
  secondaryCta: { label: "Digital Health", href: "/digital-health" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Digital Health", href: "/digital-health" },
    { label: "Apps", href: "/digital-health/apps" },
  ],
  servicesTitle: "Apps we build",
  services: [
    {
      title: "Patient-facing",
      description: "Records, booking, reminders, tracking, telemedicine, pharmacy access, education, and symptom guidance.",
    },
    {
      title: "Clinician",
      description: "Schedules, messaging, notes, prescriptions, alerts, and reporting.",
    },
    {
      title: "Hospital operations",
      description: "Staff scheduling, patient flow, inventory, and departmental communication.",
    },
  ],
  stepsTitle: "Development process",
  steps: [
    { title: "Discover", description: "Requirements and user research." },
    { title: "Design", description: "Experience and technical architecture." },
    { title: "Build", description: "Agile delivery with testing and store submission." },
    { title: "Improve", description: "Monitoring, updates, and new features." },
  ],
  whyTitle: "Why Arovia for healthcare apps",
  why: [
    { title: "Domain context", description: "The team designs around clinical work, not a generic consumer template." },
    { title: "Secure delivery", description: "Encryption, authentication, and compliance requirements are scoped up front." },
    { title: "Both platforms", description: "Native or cross-platform, chosen for the product rather than a default." },
  ],
  faqs: (digitalPage.faqs ?? []).slice(0, 4),
  ctaTitle: "Describe the app",
  ctaCopy: "Who uses it, what job it replaces, and which systems it must talk to.",
  ctaPrimary: { label: "Discuss Your Healthcare App Idea", href: "/contact?type=Digital%20Health%20Solutions" },
};

export const websitesPage: ContentPage = {
  path: "/digital-health/websites",
  pillar: "digital",
  seo: {
    title: "Healthcare Websites & Patient Portals — Custom Development",
    description: "Custom healthcare websites and patient portals. Secure, patient-focused, and built for search and accessibility.",
    keywords: ["healthcare website development", "patient portal", "clinic website"],
  },
  eyebrow: "Digital Health · Websites",
  title: "Healthcare Websites & Patient Portals",
  subheading: "Sites and portals that inform, engage, and let people take the next step.",
  intro:
    "From a clear clinic website to a patient portal with records, booking, refills, and secure messages, we build web products with healthcare-specific journeys, accessibility, and protection of patient data.",
  primaryCta: { label: "Build Your Healthcare Website", href: "/contact?type=Digital%20Health%20Solutions" },
  secondaryCta: { label: "Digital Health", href: "/digital-health" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Digital Health", href: "/digital-health" },
    { label: "Websites", href: "/digital-health/websites" },
  ],
  servicesTitle: "What we ship",
  services: [
    { title: "Organization websites", description: "Hospitals, clinics, diagnostics, pharmacies, and healthcare companies." },
    { title: "Patient portals", description: "Records, booking, refills, results, bills, and secure messages." },
    { title: "Education sites", description: "Health information that stays accurate and easy to update." },
  ],
  whyTitle: "Design principles",
  why: [
    { title: "Trust", description: "Credentials and next steps are visible, without clutter." },
    { title: "Access", description: "Responsive layouts and WCAG-minded structure." },
    { title: "Findable", description: "Search-friendly pages with a content model staff can update." },
  ],
  faqs: [
    { question: "Can telemedicine live on the site?", answer: "Yes. Video visits can sit beside scheduling and the clinical record." },
    { question: "Will it work on phones?", answer: "Yes. Layouts are designed mobile-first." },
  ],
  ctaTitle: "Plan the website",
  ctaCopy: "Share the audiences, the services to feature, and any systems to connect.",
  ctaPrimary: { label: "Build Your Healthcare Website", href: "/contact?type=Digital%20Health%20Solutions" },
};

export const platformsPage: ContentPage = {
  path: "/digital-health/platforms",
  pillar: "digital",
  seo: {
    title: "Integrated Healthcare Platforms — Hospital & Clinic Systems",
    description: "Integrated healthcare platforms for hospitals and clinics. Patient management, clinical workflows, billing, and analytics.",
    keywords: ["hospital management system", "electronic health records", "clinic management system"],
  },
  eyebrow: "Digital Health · Platforms",
  title: "Healthcare Platforms: Integrated Systems",
  subheading: "Patient management, clinical work, pharmacy, billing, and analytics in one system.",
  intro:
    "Integrated platforms connect the work of a clinic or hospital so teams are not retyping the same patient into five tools. Security, roles, and audit history are part of the platform, not a later project.",
  primaryCta: { label: "Discuss Platform Integration", href: "/contact?type=Digital%20Health%20Solutions" },
  secondaryCta: { label: "Digital Health", href: "/digital-health" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Digital Health", href: "/digital-health" },
    { label: "Platforms", href: "/digital-health/platforms" },
  ],
  servicesTitle: "Platform components",
  services: [
    { title: "Patient management", description: "Registration, coverage, history, scheduling, and communication." },
    { title: "Clinical workflows", description: "Notes, prescriptions, orders, results, and care coordination." },
    { title: "Pharmacy", description: "Medication history, dispensing workflow, and inventory." },
    { title: "Billing and insight", description: "Claims, invoices, operational metrics, and quality reporting." },
    { title: "Telemedicine", description: "Secure video and remote monitoring tied to the record." },
  ],
  whyTitle: "Why a platform",
  why: [
    { title: "Fewer handoffs", description: "One patient record across departments." },
    { title: "Room to grow", description: "More sites and users without a rewrite." },
    { title: "Controls", description: "Role-based access, encryption, backups, and audit logs." },
  ],
  faqs: (digitalPage.faqs ?? []).slice(1, 5),
  ctaTitle: "Map the platform",
  ctaCopy: "List the departments and the systems that must remain. We'll propose the integration boundary.",
  ctaPrimary: { label: "Discuss Platform Integration", href: "/contact?type=Digital%20Health%20Solutions" },
};

export const solutionsPage: ContentPage = {
  path: "/digital-health/solutions",
  pillar: "digital",
  seo: {
    title: "Custom Healthcare Software Solutions | Arovia",
    description: "Custom healthcare software for specialized needs, from lab systems to telehealth and revenue cycle management.",
    keywords: ["custom healthcare software", "medical software development", "healthcare IT solutions"],
  },
  eyebrow: "Digital Health · Solutions",
  title: "Custom Healthcare Software Solutions",
  subheading: "Specialized systems when a standard product does not match the work.",
  intro:
    "Some organizations need a lab system, a theatre schedule, a vaccination registry, or a device integration that no packaged product covers well. We design and build that software, then train the people who will run it.",
  primaryCta: { label: "Describe Your Solution", href: "/contact?type=Digital%20Health%20Solutions" },
  secondaryCta: { label: "Digital Health", href: "/digital-health" },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Digital Health", href: "/digital-health" },
    { label: "Solutions", href: "/digital-health/solutions" },
  ],
  servicesTitle: "Examples of custom work",
  services: [
    { title: "Clinical systems", description: "LIS, RIS, pharmacy, billing, supply, and staff scheduling." },
    { title: "Operations", description: "Beds, emergency departments, operating rooms, and patient flow." },
    { title: "Integration", description: "Data exchange, legacy systems, multi-site networks, and payers." },
    { title: "Specialty care", description: "Mental health, rehabilitation, maternal care, immunization, and surveillance." },
    { title: "Devices and analytics", description: "Wearables, monitoring, warehouses, and outcome reporting." },
  ],
  stepsTitle: "How a custom build runs",
  steps: [
    { title: "Discovery", description: "The specific need, users, and constraints." },
    { title: "Architecture", description: "A secure design with APIs for the systems around it." },
    { title: "Build and test", description: "Iterative delivery and demonstrations." },
    { title: "Go live", description: "Deployment, training, and support." },
  ],
  whyTitle: "Why custom with Arovia",
  why: [
    { title: "Built for the workflow", description: "The software follows the service, not the other way around." },
    { title: "Healthcare constraints", description: "Privacy, audit, and uptime are designed in." },
    { title: "It can change", description: "Support continues as the service evolves." },
  ],
  faqs: [
    { question: "Can you build for a specific clinical need?", answer: "Yes. Share the challenge, users, features, integrations, and timeline." },
    { question: "Do you train staff?", answer: "Yes. Training, documentation, and a help desk are part of launch." },
  ],
  ctaTitle: "Describe the need",
  ctaCopy: "A short brief is enough to start: who struggles today, and what a better Tuesday looks like.",
  ctaPrimary: { label: "Describe Your Custom Solution Needs", href: "/contact?type=Digital%20Health%20Solutions" },
};

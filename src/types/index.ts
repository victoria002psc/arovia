export type PillarId = "care" | "medicine" | "equipment" | "digital";

export type FaqCategory = "general" | "care" | "medicines" | "equipment" | "digital";

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface NavChild {
  label: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface InfoBlock {
  title: string;
  description: string;
  items?: string[];
}

export interface ServiceBlock {
  title: string;
  description: string;
  href?: string;
  included?: string[];
  whenToUse?: string[];
  steps?: string[];
  notes?: string[];
}

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export interface ContentPage {
  path: string;
  pillar: PillarId;
  seo: SeoMeta;
  eyebrow: string;
  title: string;
  subheading: string;
  intro: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  breadcrumbs: { label: string; href: string }[];
  audiencesTitle?: string;
  audiencesIntro?: string;
  audiences?: InfoBlock[];
  servicesTitle?: string;
  servicesIntro?: string;
  services?: ServiceBlock[];
  whyTitle?: string;
  why?: InfoBlock[];
  stepsTitle?: string;
  stepsIntro?: string;
  steps?: InfoBlock[];
  extraTitle?: string;
  extra?: InfoBlock[];
  faqs?: { question: string; answer: string }[];
  ctaTitle: string;
  ctaCopy: string;
  ctaPrimary: CtaLink;
  ctaSecondary?: CtaLink;
}

export interface InquiryPayload {
  name: string;
  email: string;
  phone?: string;
  inquiryType: string;
  subject: string;
  message: string;
  preferredContact: "phone" | "email" | "whatsapp";
  preferredTime?: string;
  subscribe?: boolean;
  company?: string;
}

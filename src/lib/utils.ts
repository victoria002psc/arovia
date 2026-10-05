import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { company } from "@/lib/constants";

/** Merge Tailwind class names without conflicting utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const pillarStyles = {
  care: {
    text: "text-emerald-700",
    bg: "bg-emerald-50",
    solid: "bg-arovia-care",
    border: "border-emerald-200",
    gradient: "from-emerald-500 to-teal-500",
  },
  medicine: {
    text: "text-rose-700",
    bg: "bg-rose-50",
    solid: "bg-arovia-medicine",
    border: "border-rose-200",
    gradient: "from-red-400 to-rose-500",
  },
  equipment: {
    text: "text-blue-700",
    bg: "bg-blue-50",
    solid: "bg-arovia-equipment",
    border: "border-blue-200",
    gradient: "from-blue-500 to-cyan-500",
  },
  digital: {
    text: "text-violet-700",
    bg: "bg-violet-50",
    solid: "bg-arovia-digital",
    border: "border-violet-200",
    gradient: "from-violet-500 to-purple-600",
  },
} as const;

/** Map a pillar id to complete Tailwind class strings. */
export function pillarClasses(pillar: keyof typeof pillarStyles) {
  return pillarStyles[pillar];
}

/**
 * Replace content-master placeholders with confirmed company details.
 * Empty details stay explicit so unpublished contact data is not invented.
 */
export function fillCopy(input: string) {
  const phone = company.phone || "the phone number on our Contact page";
  const email = company.email || "the email on our Contact page";
  const address = company.address || "our address (to be confirmed)";
  const whatsapp = company.whatsapp || "WhatsApp (to be confirmed)";
  const hours = company.hours || "our published business hours";
  const emergency = company.emergencyPhone || "our emergency line (to be confirmed)";

  return input
    .replaceAll("[COMPANY NAME]", company.name)
    .replaceAll("[YEAR]", String(company.year))
    .replaceAll("[EMERGENCY PHONE]", emergency)
    .replaceAll("[EMERGENCY NUMBER]", emergency)
    .replaceAll("[AMBULANCE PHONE]", emergency)
    .replaceAll("[CARE TEAM PHONE]", phone)
    .replaceAll("[CARE EMAIL]", email)
    .replaceAll("[CARE WHATSAPP]", whatsapp)
    .replaceAll("[PHARMACY PHONE]", phone)
    .replaceAll("[PHARMACY EMAIL]", email)
    .replaceAll("[PHARMACY WHATSAPP]", whatsapp)
    .replaceAll("[EQUIPMENT PHONE]", phone)
    .replaceAll("[EQUIPMENT EMAIL]", email)
    .replaceAll("[EQUIPMENT WHATSAPP]", whatsapp)
    .replaceAll("[DIGITAL HEALTH PHONE]", phone)
    .replaceAll("[DIGITAL HEALTH EMAIL]", email)
    .replaceAll("[BUSINESS EMAIL]", email)
    .replaceAll("[BUSINESS PHONE]", phone)
    .replaceAll("[WHATSAPP]", whatsapp)
    .replaceAll("[BUSINESS HOURS]", hours)
    .replaceAll("[ADDRESS 1]", address)
    .replaceAll("[ADDRESS 2]", address)
    .replaceAll("[ADDRESS]", address)
    .replaceAll("[EMAIL]", email)
    .replaceAll("[PHONE]", phone)
    .replaceAll("[TIMEFRAME]", "one business day")
    .replaceAll("[TIME]", "a confirmed response window")
    .replaceAll("[SERVICE AREA]", "our current service area")
    .replaceAll("[APPOINTMENT FREQUENCY]", "scheduled")
    .replaceAll("[LOCATION]", "your area")
    .replaceAll("[COUNTRY CODE]", "");
}

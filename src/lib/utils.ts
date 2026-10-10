import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { company } from "@/lib/constants";

/** Merge Tailwind class names without conflicting utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const pillarStyles = {
  care: {
    text: "text-arovia-care-dark",
    bg: "bg-arovia-care-tint",
    solid: "bg-arovia-care-dark",
    border: "border-arovia-care/30",
  },
  medicine: {
    text: "text-arovia-pharmacy-dark",
    bg: "bg-arovia-pharmacy-tint",
    solid: "bg-arovia-pharmacy-dark",
    border: "border-arovia-pharmacy/30",
  },
  equipment: {
    text: "text-arovia-equipment-dark",
    bg: "bg-arovia-equipment-tint",
    solid: "bg-arovia-equipment-dark",
    border: "border-arovia-equipment/30",
  },
  digital: {
    text: "text-arovia-digital-dark",
    bg: "bg-arovia-digital-tint",
    solid: "bg-arovia-digital-dark",
    border: "border-arovia-digital/30",
  },
} as const;

/** Map a pillar id to complete Tailwind class strings. */
export function pillarClasses(pillar: keyof typeof pillarStyles) {
  return pillarStyles[pillar];
}

/**
 * Replace content-master placeholders with confirmed company details.
 * Never invent response times, WhatsApp availability, or registration numbers.
 */
export function fillCopy(input: string) {
  const phone = company.phone;
  const email = company.email;
  const address = company.address;
  let next = input
    .replaceAll("[COMPANY NAME]", company.name)
    .replaceAll("[YEAR]", String(new Date().getFullYear()))
    .replaceAll("[CARE TEAM PHONE]", phone)
    .replaceAll("[CARE EMAIL]", email)
    .replaceAll("[PHARMACY PHONE]", phone)
    .replaceAll("[PHARMACY EMAIL]", email)
    .replaceAll("[EQUIPMENT PHONE]", phone)
    .replaceAll("[EQUIPMENT EMAIL]", email)
    .replaceAll("[DIGITAL HEALTH PHONE]", phone)
    .replaceAll("[DIGITAL HEALTH EMAIL]", email)
    .replaceAll("[BUSINESS EMAIL]", email)
    .replaceAll("[BUSINESS PHONE]", phone)
    .replaceAll("[ADDRESS 1]", address)
    .replaceAll("[ADDRESS 2]", address)
    .replaceAll("[ADDRESS]", address)
    .replaceAll("[EMAIL]", email)
    .replaceAll("[PHONE]", phone)
    .replaceAll("[LOCATION]", "Guntur")
    // No unverified SLA — point to published business hours only.
    .replaceAll("[TIMEFRAME]", "business hours")
    .replaceAll("[SERVICE AREAS / DELIVERY COVERAGE]", "Coverage is confirmed per enquiry from our Guntur base.")
    .replaceAll("[EMERGENCY PHONE]", "local emergency services")
    .replaceAll("[AMBULANCE PHONE]", "local emergency services");

  if (company.whatsapp) {
    next = next
      .replaceAll("[WHATSAPP]", company.whatsapp)
      .replaceAll("[CARE WHATSAPP]", company.whatsapp)
      .replaceAll("[PHARMACY WHATSAPP]", company.whatsapp)
      .replaceAll("[EQUIPMENT WHATSAPP]", company.whatsapp);
  } else {
    next = next
      .replaceAll(", or via WhatsApp", "")
      .replaceAll(", via WhatsApp", "")
      .replaceAll(" or via WhatsApp", "")
      .replaceAll(" via WhatsApp", "")
      .replaceAll("via WhatsApp [WHATSAPP]", "through the Contact page")
      .replaceAll("WhatsApp [WHATSAPP]", "the Contact page")
      .replaceAll("[WHATSAPP]", "")
      .replaceAll("[CARE WHATSAPP]", "")
      .replaceAll("[PHARMACY WHATSAPP]", "")
      .replaceAll("[EQUIPMENT WHATSAPP]", "");
  }

  // Strip any remaining unpublished bracket tokens so they never render publicly.
  next = next.replace(/\[[A-Z][A-Z0-9 _/\-]{2,}\]/g, "").replace(/\s{2,}/g, " ").trim();

  return next;
}

import { z } from "zod";

export const enquiryTypes = ["healthcare", "equipment", "digital", "partnership", "general"] as const;

export const enquiryLabels: Record<(typeof enquiryTypes)[number], string> = {
  healthcare: "Healthcare",
  equipment: "Equipment",
  digital: "Digital Health",
  partnership: "Partnership",
  general: "General",
};

export function isIndianPhone(value: string) {
  const compact = value.replace(/[\s()-]/g, "");
  if (/^\+91[6-9]\d{9}$/.test(compact)) return true;
  if (/^91[6-9]\d{9}$/.test(compact)) return true;
  return /^[6-9]\d{9}$/.test(compact);
}

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().refine(isIndianPhone, "Enter an Indian mobile number, with +91 or as 10 digits."),
  enquiryType: z.enum(enquiryTypes, { message: "Choose an enquiry type." }),
  organization: z.string().trim().optional().default(""),
  message: z.string().trim().min(20, "Tell us a little more (at least 20 characters)."),
  preferredContact: z.enum(["phone", "email", "whatsapp"], { message: "Choose how we should reply." }),
  consent: z.literal(true, { message: "Consent is required before we can reply." }),
  company: z.string().optional().default(""),
  startedAt: z.number(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function enquiryFromQuery(value?: string) {
  if (!value) return "general" as const;
  const normalized = value.toLowerCase();
  if (normalized.includes("equip")) return "equipment" as const;
  if (normalized.includes("digital")) return "digital" as const;
  if (normalized.includes("partner")) return "partnership" as const;
  if (normalized.includes("health") || normalized.includes("care") || normalized.includes("medicine")) return "healthcare" as const;
  if ((enquiryTypes as readonly string[]).includes(normalized)) return normalized as (typeof enquiryTypes)[number];
  return "general" as const;
}

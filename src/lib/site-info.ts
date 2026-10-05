/**
 * Confirmed company details and unpublished placeholders.
 * Phone, email and the street address are written only in this file.
 */

export const companyName = "Arovia Group";

export const email = "arovia22@gmail.com";

export const phoneDisplay = "+91 96496 47850";

export const phoneTel = "tel:+919649647850";

export const address = {
  shop: "Shop No. 26, Ground Floor, Annapurna Complex",
  street: "Kakani Road",
  city: "Guntur",
  postalCode: "522 001",
  state: "Andhra Pradesh",
  country: "India",
} as const;

export const addressSingleLine =
  "Shop No. 26, Ground Floor, Annapurna Complex, Kakani Road, Guntur – 522 001, Andhra Pradesh, India";

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressSingleLine)}`;

/** Flip to true only after WhatsApp on the published phone number is confirmed. */
export const showWhatsApp = false;

export const whatsappHref = `https://wa.me/${phoneTel.replace("tel:+", "")}`;

export const businessHours = "[BUSINESS HOURS]";
export const logo = "[LOGO]";
export const tagline = "[TAGLINE]";
export const yearsOfExperience = "[YEARS OF EXPERIENCE]";
export const founderLeadership = "[FOUNDER / LEADERSHIP]";
export const certifications = "[CERTIFICATIONS]";
export const clinicRegistration = "[CLINIC REGISTRATION]";
export const pharmacyLicense = "[PHARMACY LICENSE]";
export const importExportRegistrations = "[IMPORT-EXPORT CODE / EQUIPMENT REGISTRATIONS]";
export const serviceAreas = "[SERVICE AREAS / DELIVERY COVERAGE]";
export const emergencyResponse = "[EMERGENCY RESPONSE DETAILS]";
export const socialMediaLinks = "[SOCIAL MEDIA LINKS]";
export const partners = "[PARTNERS]";

export const placeholders = {
  businessHours,
  logo,
  tagline,
  yearsOfExperience,
  founderLeadership,
  certifications,
  clinicRegistration,
  pharmacyLicense,
  importExportRegistrations,
  serviceAreas,
  emergencyResponse,
  socialMediaLinks,
  partners,
} as const;

export function isPlaceholder(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

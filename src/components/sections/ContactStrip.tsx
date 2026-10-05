import { addressSingleLine, email, mapLink, phoneDisplay, phoneTel } from "@/lib/site-info";
import { Section } from "@/components/ui/Section";

export function ContactStrip() {
  return (
    <Section background="mist" labelledBy="contact-strip-heading">
      <h2 id="contact-strip-heading" className="text-sm font-semibold uppercase tracking-[0.16em] text-arovia-navy">
        Contact
      </h2>
      <address className="mt-4 grid gap-3 text-sm not-italic text-slate-700 sm:grid-cols-3">
        <a href={`mailto:${email}`} className="underline-offset-4 hover:underline">
          {email}
        </a>
        <a href={phoneTel} className="underline-offset-4 hover:underline">
          {phoneDisplay}
        </a>
        <a href={mapLink} className="underline-offset-4 hover:underline">
          {addressSingleLine}
        </a>
      </address>
    </Section>
  );
}

import Link from "next/link";
import { footerColumns, legalLinks } from "@/lib/constants";
import {
  addressSingleLine,
  businessHours,
  companyName,
  email,
  isPlaceholder,
  mapLink,
  phoneDisplay,
  phoneTel,
  socialMediaLinks,
} from "@/lib/site-info";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const disclaimer =
  "Information on this website is general and does not replace advice from a qualified clinician. In a medical emergency, contact local emergency services.";

const description =
  "Arovia Group is a healthcare group in Guntur, Andhra Pradesh. Care, pharmacy, equipment trade, and digital health sit in one organisation.";

export function Footer() {
  const year = new Date().getFullYear();
  const brand = footerColumns.find((column) => column.title === "Company");
  const rest = footerColumns.filter((column) => column.title !== "Company");

  return (
    <footer className="bg-arovia-navy pb-24 text-white md:pb-0">
      <Container className="grid gap-10 py-16 md:grid-cols-2 xl:grid-cols-5">
        <div>
          <Logo inverted />
          <p className="mt-4 text-sm leading-relaxed text-white/80">{description}</p>
          <address className="mt-6 space-y-2 text-sm not-italic">
            <p>
              <a className="underline-offset-4 hover:underline" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
            <p>
              <a className="underline-offset-4 hover:underline" href={phoneTel}>
                {phoneDisplay}
              </a>
            </p>
            <p>
              <a className="underline-offset-4 hover:underline" href={mapLink}>
                {addressSingleLine}
              </a>
            </p>
            {!isPlaceholder(businessHours) && <p>{businessHours}</p>}
            {!isPlaceholder(socialMediaLinks) && <p>{socialMediaLinks}</p>}
          </address>
          {brand && (
            <ul className="mt-6 space-y-2">
              {brand.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 underline-offset-4 hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {rest.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="text-sm font-semibold tracking-wide">{column.title}</h2>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 underline-offset-4 hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>
      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-4 py-6">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="max-w-3xl text-sm leading-relaxed text-white/70">{disclaimer}</p>
          <p className="text-sm text-white/60">
            Copyright © {year} {companyName}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

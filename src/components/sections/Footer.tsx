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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-16">
        <Logo />
        <div className="mt-10 grid gap-10 sm:grid-cols-2 xl:grid-cols-5">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-sm font-semibold text-arovia-navy">{column.title}</h2>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-600 underline-offset-4 hover:text-arovia-navy hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <address className="mt-10 space-y-2 text-sm not-italic text-slate-700">
          <p>
            <a href={`mailto:${email}`} className="underline-offset-4 hover:underline">
              {email}
            </a>
          </p>
          <p>
            <a href={phoneTel} className="underline-offset-4 hover:underline">
              {phoneDisplay}
            </a>
          </p>
          <p>
            <a href={mapLink} className="underline-offset-4 hover:underline">
              {addressSingleLine}
            </a>
          </p>
          {!isPlaceholder(businessHours) && <p>{businessHours}</p>}
          {!isPlaceholder(socialMediaLinks) && <p>{socialMediaLinks}</p>}
        </address>
      </Container>
      <div className="border-t border-slate-200">
        <Container className="flex flex-col gap-4 py-6">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-600 underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600">{disclaimer}</p>
          <p className="text-sm text-slate-500">
            Copyright © {year} {companyName}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

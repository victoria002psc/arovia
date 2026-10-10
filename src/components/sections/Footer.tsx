import Link from "next/link";
import { companyName, email, phoneDisplay, phoneTel } from "@/lib/site-info";
import { Logo } from "@/components/ui/Logo";

const columns = [
  {
    title: "Care",
    links: [
      { label: "Homecare", href: "/care/homecare" },
      { label: "Diagnostics", href: "/care/diagnostics" },
      { label: "Ambulance", href: "/care/ambulance" },
      { label: "Clinic", href: "/care/clinic" },
    ],
  },
  {
    title: "Pharmacy",
    links: [{ label: "Pharmacy", href: "/pharmacy" }],
  },
  {
    title: "Equipment Trade",
    links: [
      { label: "Export", href: "/equipment-trade/export" },
      { label: "Medical Equipment", href: "/equipment-trade/medical-equipment" },
    ],
  },
  {
    title: "Digital Health",
    links: [
      { label: "Medical Apps", href: "/digital-health/apps" },
      { label: "Medical Websites", href: "/digital-health/websites" },
      { label: "Healthcare Platforms", href: "/digital-health/platforms" },
      { label: "Digital Solutions", href: "/digital-health/solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-arovia-navy text-white">
      <div className="mx-auto grid max-w-wide gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8 lg:px-10 lg:py-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Healthcare, pharmacy, equipment trade and digital health — connected through one healthcare ecosystem.
          </p>
          <p className="mt-4 space-y-1 text-sm text-white/70">
            <a href={`mailto:${email}`} className="block hover:text-white">
              {email}
            </a>
            <a href={phoneTel} className="block hover:text-white">
              {phoneDisplay}
            </a>
          </p>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="text-sm font-semibold text-white">{column.title}</h2>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-wide flex-col gap-2 px-5 py-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {year} {companyName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Notice
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/medical-disclaimer" className="hover:text-white">
                Medical Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

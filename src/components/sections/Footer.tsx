import Link from "next/link";
import { company, footerColumns } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const phone = company.phone || "Phone to be confirmed";
  const email = company.email || "Email to be confirmed";
  const address = company.address || "Address to be confirmed";
  const whatsapp = company.whatsapp || "WhatsApp to be confirmed";

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
            Arovia Group connects care, medicines, medical equipment, and digital health into one healthcare ecosystem for patients, families, and institutions.
          </p>
          <ul className="mt-4 space-y-1 text-sm text-slate-600">
            <li>{email}</li>
            <li>{phone}</li>
            <li>{address}</li>
            <li>{whatsapp}</li>
          </ul>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h2 className="text-sm font-semibold text-arovia-ink">{column.title}</h2>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-cyan-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 md:flex-row md:justify-between md:px-6">
          <p>Copyright © {company.year} Arovia Group. All rights reserved.</p>
          <p>Built on healthcare expertise. Committed to integration. Focused on outcomes.</p>
        </div>
      </div>
    </footer>
  );
}

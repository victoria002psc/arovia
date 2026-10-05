import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PageLayout } from "@/components/layouts/PageLayout";
import { company } from "@/lib/constants";
import { address, email, phoneTel } from "@/lib/site-info";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Arovia Group — Integrated Healthcare Ecosystem",
    template: "%s",
  },
  description:
    "Complete healthcare solutions in one place. Clinic care, home care, medicines, medical equipment, and healthcare technology. Integrated for better outcomes.",
  keywords: ["integrated healthcare solutions", "pharmacy services", "medical equipment trade", "healthcare technology"],
  openGraph: {
    title: "Arovia Group — Integrated Healthcare Ecosystem",
    description: "Care, medicines, equipment, and digital health connected in one place.",
    type: "website",
    locale: "en_US",
    siteName: "Arovia Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arovia Group — Integrated Healthcare Ecosystem",
    description: "Care, medicines, equipment, and digital health connected in one place.",
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  name: company.name,
  url: company.siteUrl,
  email,
  telephone: phoneTel.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${address.shop}, ${address.street}`,
    addressLocality: address.city,
    postalCode: address.postalCode,
    addressRegion: address.state,
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}

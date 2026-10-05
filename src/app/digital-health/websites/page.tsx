import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { websitesPage } from "@/content/digital";

export const metadata: Metadata = {
  title: websitesPage.seo.title,
  description: websitesPage.seo.description,
  keywords: websitesPage.seo.keywords,
  alternates: { canonical: websitesPage.path },
};

export default function Page() {
  return <ServicePageTemplate page={websitesPage} />;
}

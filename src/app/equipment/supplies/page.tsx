import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { suppliesPage } from "@/content/equipment";

export const metadata: Metadata = {
  title: suppliesPage.seo.title,
  description: suppliesPage.seo.description,
  keywords: suppliesPage.seo.keywords,
  alternates: { canonical: suppliesPage.path },
};

export default function Page() {
  return <ServicePageTemplate page={suppliesPage} />;
}

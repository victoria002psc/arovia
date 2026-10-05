import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { equipmentPage } from "@/content/equipment";

export const metadata: Metadata = {
  title: equipmentPage.seo.title,
  description: equipmentPage.seo.description,
  keywords: equipmentPage.seo.keywords,
  alternates: { canonical: equipmentPage.path },
};

export default function Page() {
  return <ServicePageTemplate page={equipmentPage} />;
}

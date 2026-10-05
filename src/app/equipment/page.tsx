import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { equipmentPage } from "@/content/equipment";

export const metadata: Metadata = {
  title: equipmentPage.seo.title,
  description: equipmentPage.seo.description,
  keywords: equipmentPage.seo.keywords,
  alternates: { canonical: equipmentPage.path },
};

export default function Page() {
  return <ServicePageView page={equipmentPage} />;
}

import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { equipmentSupplyPage } from "@/content/equipment";

export const metadata: Metadata = {
  title: equipmentSupplyPage.seo.title,
  description: equipmentSupplyPage.seo.description,
  keywords: equipmentSupplyPage.seo.keywords,
  alternates: { canonical: equipmentSupplyPage.path },
};

export default function Page() {
  return <ServicePageView page={equipmentSupplyPage} />;
}

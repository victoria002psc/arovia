import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { pharmacyPage } from "@/content/pharmacy";

export const metadata: Metadata = {
  title: pharmacyPage.seo.title,
  description: pharmacyPage.seo.description,
  keywords: pharmacyPage.seo.keywords,
  alternates: { canonical: pharmacyPage.path },
};

export default function Page() {
  return <ServicePageTemplate page={pharmacyPage} />;
}

import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { suppliesPage } from "@/content/equipment";

export const metadata: Metadata = {
  title: suppliesPage.seo.title,
  description: suppliesPage.seo.description,
  keywords: suppliesPage.seo.keywords,
  alternates: { canonical: suppliesPage.path },
};

export default function Page() {
  return <ServicePageView page={suppliesPage} />;
}

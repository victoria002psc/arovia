import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { importPage } from "@/content/equipment";

export const metadata: Metadata = {
  title: importPage.seo.title,
  description: importPage.seo.description,
  keywords: importPage.seo.keywords,
  alternates: { canonical: importPage.path },
};

export default function Page() {
  return <ServicePageTemplate page={importPage} />;
}

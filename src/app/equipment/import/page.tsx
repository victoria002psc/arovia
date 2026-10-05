import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { importPage } from "@/content/equipment";

export const metadata: Metadata = {
  title: importPage.seo.title,
  description: importPage.seo.description,
  keywords: importPage.seo.keywords,
  alternates: { canonical: importPage.path },
};

export default function Page() {
  return <ServicePageView page={importPage} />;
}

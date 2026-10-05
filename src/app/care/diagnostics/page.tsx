import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { diagnosticsPage } from "@/content/care";

export const metadata: Metadata = {
  title: diagnosticsPage.seo.title,
  description: diagnosticsPage.seo.description,
  keywords: diagnosticsPage.seo.keywords,
  alternates: { canonical: diagnosticsPage.path },
};

export default function Page() {
  return <ServicePageTemplate page={diagnosticsPage} />;
}

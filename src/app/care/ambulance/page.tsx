import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { ambulancePage } from "@/content/care";

export const metadata: Metadata = {
  title: ambulancePage.seo.title,
  description: ambulancePage.seo.description,
  keywords: ambulancePage.seo.keywords,
  alternates: { canonical: ambulancePage.path },
};

export default function Page() {
  return <ServicePageTemplate page={ambulancePage} />;
}

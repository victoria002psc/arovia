import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { solutionsPage } from "@/content/digital";

export const metadata: Metadata = {
  title: solutionsPage.seo.title,
  description: solutionsPage.seo.description,
  keywords: solutionsPage.seo.keywords,
  alternates: { canonical: solutionsPage.path },
};

export default function Page() {
  return <ServicePageTemplate page={solutionsPage} />;
}

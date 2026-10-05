import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { solutionsPage } from "@/content/digital";

export const metadata: Metadata = {
  title: solutionsPage.seo.title,
  description: solutionsPage.seo.description,
  keywords: solutionsPage.seo.keywords,
  alternates: { canonical: solutionsPage.path },
};

export default function Page() {
  return <ServicePageView page={solutionsPage} />;
}

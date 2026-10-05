import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { exportPage } from "@/content/equipment";

export const metadata: Metadata = {
  title: exportPage.seo.title,
  description: exportPage.seo.description,
  keywords: exportPage.seo.keywords,
  alternates: { canonical: exportPage.path },
};

export default function Page() {
  return <ServicePageView page={exportPage} />;
}

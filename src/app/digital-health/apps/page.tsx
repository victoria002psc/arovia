import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { appsPage } from "@/content/digital";

export const metadata: Metadata = {
  title: appsPage.seo.title,
  description: appsPage.seo.description,
  keywords: appsPage.seo.keywords,
  alternates: { canonical: appsPage.path },
};

export default function Page() {
  return <ServicePageView page={appsPage} />;
}

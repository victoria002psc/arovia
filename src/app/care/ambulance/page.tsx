import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { ambulancePage } from "@/content/care";

export const metadata: Metadata = {
  title: ambulancePage.seo.title,
  description: ambulancePage.seo.description,
  keywords: ambulancePage.seo.keywords,
  alternates: { canonical: ambulancePage.path },
};

export default function Page() {
  return <ServicePageView page={ambulancePage} />;
}

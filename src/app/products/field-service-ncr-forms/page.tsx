import type { Metadata } from "next";
import { SITE } from "@/config/siteData";
import NcrApplicationShowcasePage from "@/components/products/NcrApplicationShowcasePage";
import { requireNcrApplicationBySlug } from "../ncr-applications-data";

const application = requireNcrApplicationBySlug("field-service-ncr-forms");

export const metadata: Metadata = {
  title: application.metaTitle,
  description: application.metaDescription,
  keywords: application.keywords,
  alternates: { canonical: `${SITE.domain}/products/${application.slug}` },
};

export const revalidate = 86400; // 24 hours: static product/market content

export default function FieldServiceNcrFormsPage() {
  return <NcrApplicationShowcasePage application={application} />;
}

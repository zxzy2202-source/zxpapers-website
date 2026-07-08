import type { Metadata } from "next";
import { SITE } from "@/config/siteData";
import NcrApplicationShowcasePage from "@/components/products/NcrApplicationShowcasePage";
import { requireNcrApplicationBySlug } from "../ncr-applications-data";

const application = requireNcrApplicationBySlug("port-customs-air-cargo-ncr-forms");

export const metadata: Metadata = {
  title: application.metaTitle,
  description: application.metaDescription,
  keywords: application.keywords,
  alternates: { canonical: `${SITE.domain}/products/${application.slug}` },
};

export default function PortCustomsAirCargoNcrFormsPage() {
  return <NcrApplicationShowcasePage application={application} />;
}

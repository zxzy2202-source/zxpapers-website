import type { Metadata } from "next";
import NcrFormDetail from "@/components/products/NcrFormDetail";
import { getNcrPart } from "../ncr-forms-data";
import { SITE } from "@/config/siteData";

const part = getNcrPart("multi-part")!;

export const metadata: Metadata = {
  title: part.metaTitle,
  description: part.metaDescription,
  keywords: part.keywords,
  alternates: { canonical: `${SITE.domain}/products/ncr-forms/multi-part` },
};

export const revalidate = 86400; // 24 hours: static product/market content

export default function Page() {
  return <NcrFormDetail part={part} />;
}

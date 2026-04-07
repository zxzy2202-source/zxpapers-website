import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { CAN_LABELS_IMG, apps401x700 } from "../can-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "401×700 Can Labels | Large Format #10 Can & Industrial Labels",
  description:
    "401×700 can labels for #10 large food cans, paint cans, and industrial containers. GHS compliant, solvent-resistant. MOQ 5,000. ISO 9001 certified manufacturer.",
  alternates: { canonical: `${SITE.domain}/products/can-labels/401x700` },
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zhixinpaper.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://www.zhixinpaper.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Can Labels",
      "item": "https://www.zhixinpaper.com/products/can-labels"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "401×700",
      "item": "https://www.zhixinpaper.com/products/can-labels/401x700"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "401×700 Can Labels | Large Format #10 Can & Industrial Labels",
  "description": "401×700 can labels for #10 large food cans, paint cans, and industrial containers. GHS compliant, solvent-resistant. MOQ 5,000. ISO 9001 certified manufacturer.",
  "brand": {
    "@type": "Brand",
    "name": "ZhixinPaper"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "ZhixinPaper",
    "url": "https://www.zhixinpaper.com"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "ZhixinPaper"
    }
  },
  "url": "https://www.zhixinpaper.com/products/can-labels/401x700"
};
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      <SizeDetailPage
        type="labels"
        sizeLabel="401 × 700"
        slug="401x700"
        fullTitle="401×700 Can Labels (Large Format)"
        badge="Large Format"
        description="The 401×700 is a large-format label for #10 institutional food cans, 1-gallon paint cans, and industrial chemical containers. The large surface area supports comprehensive ingredient lists, GHS hazard communication, and full-bleed brand artwork. Available in food-safe, solvent-resistant, and GHS-compliant variants."
        specs={[
          { label: "Can Size", value: "401×700 (#10 food can / 1-gallon industrial)" },
          { label: "Label Dimensions", value: "Approx. 104mm × 178mm (full-wrap)" },
          { label: "Face Stock", value: "White gloss, matte, BOPP, or polyester" },
          { label: "Adhesive", value: "Permanent acrylic (food-safe or industrial)" },
          { label: "Print Method", value: "Flexo / offset CMYK + Pantone" },
          { label: "Coating", value: "Gloss, matte, or chemical-resistant lamination" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "12–20 days" },
          { label: "Certifications", value: "ISO 9001, GHS / HazCom 2012, FDA 21 CFR (food)" },
        ]}
        applications={apps401x700}
        markets={["Global", "Americas", "Europe"]}
        productImage={CAN_LABELS_IMG}
      />
    </>
  );
}

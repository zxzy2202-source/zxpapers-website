import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { CAN_LABELS_IMG, apps211x603 } from "../can-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "211×603 Can Labels | Tall 16oz Beverage",
  description:
    "211×603 can labels for 16oz tall beverage cans. Full-wrap, moisture-resistant. CMYK + Pantone printing. MOQ 5,000. ISO 9001 certified manufacturer.",
  alternates: { canonical: `${SITE.domain}/products/can-labels/211x603` },
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
      "name": "211×603",
      "item": "https://www.zhixinpaper.com/products/can-labels/211x603"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "211×603 Can Labels | Tall 16oz Beverage Can Labels",
  "description": "211×603 can labels for 16oz tall beverage cans. Full-wrap, moisture-resistant. CMYK + Pantone printing. MOQ 5,000. ISO 9001 certified manufacturer.",
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
  "url": "https://www.zhixinpaper.com/products/can-labels/211x603"
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
        sizeLabel="211 × 603"
        slug="211x603"
        fullTitle="211×603 Can Labels (Tall 16oz)"
        badge="Tall Can"
        description="The 211×603 is the standard full-wrap label for 16oz tall beverage cans — the premium format for craft beer, hard seltzers, sparkling water, and RTD cocktails. The taller profile provides more branding real estate for bold artwork and regulatory compliance text. Moisture-resistant and food-safe for refrigerated products."
        specs={[
          { label: "Can Size", value: "211×603 (16oz tall can)" },
          { label: "Label Dimensions", value: "Approx. 87mm × 153mm (full-wrap)" },
          { label: "Face Stock", value: "White gloss, matte, or clear BOPP" },
          { label: "Adhesive", value: "Permanent acrylic (food-safe)" },
          { label: "Print Method", value: "Flexo / offset CMYK + Pantone" },
          { label: "Coating", value: "Gloss or matte lamination" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "10–18 days" },
          { label: "Certifications", value: "ISO 9001, FDA 21 CFR, BPA-Free" },
        ]}
        applications={apps211x603}
        markets={["Americas", "Europe"]}
        productImage={CAN_LABELS_IMG}
      />
    </>
  );
}

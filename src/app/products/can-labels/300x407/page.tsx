import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { CAN_LABELS_IMG, apps300x407 } from "../can-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "300×407 Can Labels | #2 Food Can Labels",
  description:
    "300×407 can labels for standard #2 food cans — tomatoes, soups, seafood, pet food. Food-safe, moisture-resistant. CMYK printing. MOQ 5,000. ISO 9001 certified.",
  alternates: { canonical: `${SITE.domain}/products/can-labels/300x407` },
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
      "name": "300×407",
      "item": "https://www.zhixinpaper.com/products/can-labels/300x407"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "300×407 Can Labels | #2 Food Can Labels",
  "description": "300×407 can labels for standard #2 food cans — tomatoes, soups, seafood, pet food. Food-safe, moisture-resistant. CMYK printing. MOQ 5,000. ISO 9001 certified.",
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
  "url": "https://www.zhixinpaper.com/products/can-labels/300x407"
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
        sizeLabel="300 × 407"
        slug="300x407"
        fullTitle="300×407 Can Labels (#2 Food Standard)"
        badge="Food Standard"
        description="The 300×407 is the standard label size for #2 food cans — the most common format for canned tomatoes, soups, seafood, and pet food globally. Full-wrap coverage with food-safe permanent adhesive and moisture-resistant face stock. Compliant with FDA 21 CFR and EU food contact regulations."
        specs={[
          { label: "Can Size", value: "300×407 (#2 standard food can)" },
          { label: "Label Dimensions", value: "Approx. 76mm × 111mm (full-wrap)" },
          { label: "Face Stock", value: "White gloss, matte, or kraft" },
          { label: "Adhesive", value: "Permanent acrylic (food-safe, FDA 21 CFR)" },
          { label: "Print Method", value: "Flexo / offset CMYK + Pantone" },
          { label: "Coating", value: "Gloss or matte lamination" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "10–18 days" },
          { label: "Certifications", value: "ISO 9001, FDA 21 CFR, EU 10/2011, BPA-Free" },
        ]}
        applications={apps300x407}
        markets={["Global", "Americas", "Europe"]}
        productImage={CAN_LABELS_IMG}
      />
    </>
  );
}

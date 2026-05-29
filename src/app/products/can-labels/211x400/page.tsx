import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { CAN_LABELS_IMG, apps211x400 } from "../can-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "211×400 Can Labels | Standard 12oz Beverage",
  description:
    "211×400 can labels for standard 12oz beverage cans. Full-wrap, moisture-resistant, food-safe. CMYK printing, gloss/matte lamination. MOQ 5,000.",
  alternates: { canonical: `${SITE.domain}/products/can-labels/211x400` },
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zxpapers.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://www.zxpapers.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Can Labels",
      "item": "https://www.zxpapers.com/products/can-labels"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "211×400",
      "item": "https://www.zxpapers.com/products/can-labels/211x400"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "211×400 Can Labels | Standard 12oz Beverage Can Labels",
  "description": "211×400 can labels for standard 12oz beverage cans. Full-wrap, moisture-resistant, food-safe. CMYK printing, gloss/matte lamination. MOQ 5,000.",
  "brand": {
    "@type": "Brand",
    "name": "Zhixin Paper"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Zhixin Paper",
    "url": "https://www.zxpapers.com"
  },
  "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  "url": "https://www.zxpapers.com/products/can-labels/211x400"
,
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://www.zxpapers.com",
    "priceCurrency": "USD",
    "lowPrice": "0.50",
    "highPrice": "50.00",
    "offerCount": "100",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Zhixin Paper"
    }
  }
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
        sizeLabel="211 × 400"
        slug="211x400"
        fullTitle="211×400 Can Labels (Standard 12oz)"
        badge="Standard"
        description="The 211×400 is the standard full-wrap label size for 12oz slim and standard beverage cans — the most common format for craft beer, energy drinks, and carbonated beverages worldwide. Our labels feature moisture-resistant face stock, food-safe permanent adhesive, and vibrant CMYK printing for eye-catching retail shelf presence."
        specs={[
          { label: "Can Size", value: "211×400 (12oz standard / slim can)" },
          { label: "Label Dimensions", value: "Approx. 87mm × 99mm (full-wrap)" },
          { label: "Face Stock", value: "White gloss, matte, or clear BOPP" },
          { label: "Adhesive", value: "Permanent acrylic (food-safe)" },
          { label: "Print Method", value: "Flexo / offset CMYK + Pantone" },
          { label: "Coating", value: "Gloss or matte lamination" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "10–18 days" },
          { label: "Certifications", value: "ISO 9001, FDA 21 CFR, BPA-Free" },
        ]}
        applications={apps211x400}
        markets={["Global", "Americas", "Europe"]}
        productImage={CAN_LABELS_IMG}
        productImageSlot="can-labels"
      />
    </>
  );
}

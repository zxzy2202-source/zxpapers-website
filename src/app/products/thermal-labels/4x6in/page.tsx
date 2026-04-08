import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { LABELS_IMG, apps4x6 } from "../label-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: '4×6" Thermal Shipping Labels | E-commerce',
  description: "4x6 inch thermal labels (100x150mm). Standard shipping label size for UPS, FedEx, DHL, USPS. Direct thermal printing, strong adhesive.",
  alternates: { canonical: `${SITE.domain}/products/thermal-labels/4x6in` },
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
      "name": "Thermal Labels",
      "item": "https://www.zhixinpaper.com/products/thermal-labels"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "4×6In",
      "item": "https://www.zhixinpaper.com/products/thermal-labels/4x6in"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "4",
  "description": "4",
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
  "url": "https://www.zhixinpaper.com/products/thermal-labels/4x6in"
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
        sizeLabel='4" x 6"'
        slug="4x6in"
        fullTitle='4" x 6" Thermal Shipping Labels'
        badge="Most Popular"
        description='The 4" x 6" thermal shipping label is the global standard for e-commerce and logistics. Compatible with all major shipping carriers including UPS, FedEx, DHL, Amazon, and USPS. Our labels feature strong permanent adhesive and high-contrast printing for reliable barcode scanning.'
        specs={[
          { label: "Size", value: '4" x 6" (101.6mm x 152.4mm)' },
          { label: "Labels Per Roll", value: "250 / 500 / 1,000" },
          { label: "Core Size", value: '1" / 3"' },
          { label: "Adhesive", value: "Permanent" },
          { label: "Face Stock", value: "White Direct Thermal" },
          { label: "Image Life", value: "3–5 years" },
          { label: "Printer Compatibility", value: "Zebra, DYMO, Honeywell, Rollo" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps4x6}
        markets={["Global", "Americas", "Europe"]}
        productImage={LABELS_IMG}
      />
    </>
  );
}

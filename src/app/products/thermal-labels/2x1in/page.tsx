import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { LABELS_IMG, apps2x1 } from "../label-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: '2" x 1" Thermal Barcode Labels | Retail & Inventory Labels',
  description: '2" x 1" thermal barcode labels for retail price tags, inventory management, and product identification. Compatible with Zebra LP2824, GX420d. MOQ 5,000.',
  alternates: { canonical: `${SITE.domain}/products/thermal-labels/2x1in` },
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
      "name": "2×1In",
      "item": "https://www.zhixinpaper.com/products/thermal-labels/2x1in"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "2\" x 1\" Thermal Barcode Labels",
  "description": "2\" x 1\" thermal barcode labels for retail price tags, inventory management, and product identification. MOQ 5,000.",
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
  "url": "https://www.zhixinpaper.com/products/thermal-labels/2x1in"
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
        sizeLabel='2" x 1"'
        slug="2x1in"
        fullTitle='2" x 1" Thermal Barcode Labels'
        description='The 2" x 1" thermal barcode label is the most popular size for product identification, inventory management, and retail price tags. Compatible with Zebra desktop printers and all standard barcode label software.'
        specs={[
          { label: "Size", value: '2" x 1" (50.8mm x 25.4mm)' },
          { label: "Labels Per Roll", value: "500 / 1,000 / 2,000" },
          { label: "Core Size", value: '1" / 3"' },
          { label: "Adhesive", value: "Permanent / Removable" },
          { label: "Face Stock", value: "White Direct Thermal" },
          { label: "Image Life", value: "2–3 years" },
          { label: "Printer Compatibility", value: "Zebra LP2824, GX420d, ZD420" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps2x1}
        markets={["Americas", "Global"]}
        productImage={LABELS_IMG}
      />
    </>
  );
}

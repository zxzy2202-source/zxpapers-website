import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { LABELS_IMG, APP_IMAGES } from "../label-sizes-data";
import type { ApplicationItem } from "@/components/products/SizeDetailPage";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: '4" x 3" Thermal Labels | Square Shipping & Product Labels',
  description: '4" x 3" square thermal labels for shipping, product packaging, and compliance labeling. Strong adhesive, high-contrast print. MOQ 5,000.',
  keywords: '4x3 thermal labels, 4 x 3 inch labels, square labels, shipping labels, thermal label wholesale',
  alternates: { canonical: `${SITE.domain}/products/thermal-labels/4x3in` },
};

const apps4x3: ApplicationItem[] = [
  { name: "Square Shipping Labels", image: APP_IMAGES.shipping,   description: "Ideal for square or bulky packages requiring larger labels." },
  { name: "Product Packaging",      image: APP_IMAGES.packaging,  description: "Large format product labels for retail packaging." },
  { name: "Compliance Labels",      image: APP_IMAGES.product,    description: "Regulatory compliance and warning labels." },
  { name: "Large Barcodes",         image: APP_IMAGES.barcode,    description: "2D and large barcode labels for scanning accuracy." },
  { name: "Food Labeling",          image: APP_IMAGES.food,       description: "Food-safe labels for packaged food products." },
  { name: "Warehouse Logistics",    image: APP_IMAGES.warehouse,  description: "High-volume label printing in distribution centers." },
];


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
      "name": "4×3In",
      "item": "https://www.zhixinpaper.com/products/thermal-labels/4x3in"
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
  "url": "https://www.zhixinpaper.com/products/thermal-labels/4x3in"
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
        sizeLabel='4" x 3"'
        slug="4x3in"
        fullTitle='4" x 3" Thermal Labels'
        badge="Square Format"
        description='The 4" x 3" thermal label offers a near-square format that is perfect for product packaging, compliance labeling, and shipping applications where more vertical space is needed. The generous label area accommodates large barcodes, detailed product information, and regulatory text clearly and legibly.'
        specs={[
          { label: "Size", value: '4" x 3" (101.6mm x 76.2mm)' },
          { label: "Labels Per Roll", value: "500 / 1,000" },
          { label: "Core Size", value: '1" / 3"' },
          { label: "Adhesive", value: "Permanent" },
          { label: "Face Stock", value: "White Direct Thermal" },
          { label: "Image Life", value: "3–5 years" },
          { label: "Printer Compatibility", value: "Zebra, Honeywell, SATO, Rollo" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps4x3}
        markets={["Global", "Americas", "Europe"]}
        productImage={LABELS_IMG}
      />
    </>
  );
}

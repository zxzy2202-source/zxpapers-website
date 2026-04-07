import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { LABELS_IMG, APP_IMAGES } from "../label-sizes-data";
import type { ApplicationItem } from "@/components/products/SizeDetailPage";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: '3" x 2" Thermal Labels | Product & Retail Labels | ZhixinPaper',
  description: '3" x 2" thermal labels for product labeling, retail price tags, and inventory management. Compatible with Zebra, Honeywell, SATO. MOQ 5,000.',
  keywords: '3x2 thermal labels, 3 x 2 inch labels, product labels, retail labels, thermal label wholesale',
  alternates: { canonical: `${SITE.domain}/products/thermal-labels/3x2in` },
};

const apps3x2: ApplicationItem[] = [
  { name: "Product Labeling",    image: APP_IMAGES.product,   description: "Versatile product labels for retail and manufacturing." },
  { name: "Retail Price Tags",   image: APP_IMAGES.retail,    description: "Shelf and product price labeling in retail stores." },
  { name: "Inventory Tags",      image: APP_IMAGES.inventory, description: "Stock and asset tracking in warehouses." },
  { name: "Food Labeling",       image: APP_IMAGES.food,      description: "Food-safe labels for packaged food and deli products." },
  { name: "Pharmacy Labels",     image: APP_IMAGES.pharmacy,  description: "Prescription and OTC medication labeling." },
  { name: "Barcode Labels",      image: APP_IMAGES.barcode,   description: "Product barcode printing for retail and inventory." },
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
      "name": "3×2In",
      "item": "https://www.zhixinpaper.com/products/thermal-labels/3x2in"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "3",
  "description": "3",
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
  "url": "https://www.zhixinpaper.com/products/thermal-labels/3x2in"
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
        sizeLabel='3" x 2"'
        slug="3x2in"
        fullTitle='3" x 2" Thermal Labels'
        badge="Product Labels"
        description='The 3" x 2" thermal label is a versatile mid-size label widely used for product identification, retail price tags, and inventory management. Its balanced dimensions make it ideal for displaying product names, barcodes, and pricing information clearly. Compatible with all major desktop and industrial thermal printers.'
        specs={[
          { label: "Size", value: '3" x 2" (76.2mm x 50.8mm)' },
          { label: "Labels Per Roll", value: "500 / 1,000" },
          { label: "Core Size", value: '1" / 3"' },
          { label: "Adhesive", value: "Permanent" },
          { label: "Face Stock", value: "White Direct Thermal" },
          { label: "Image Life", value: "3–5 years" },
          { label: "Printer Compatibility", value: "Zebra, Honeywell, SATO, TSC" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps3x2}
        markets={["Global", "Americas", "Europe", "Asia"]}
        productImage={LABELS_IMG}
      />
    </>
  );
}

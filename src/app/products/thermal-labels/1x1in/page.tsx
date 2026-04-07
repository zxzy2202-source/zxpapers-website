import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { LABELS_IMG, APP_IMAGES } from "../label-sizes-data";
import type { ApplicationItem } from "@/components/products/SizeDetailPage";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: '1" x 1" Thermal Labels | Mini Barcode & Price Labels | ZhixinPaper',
  description: '1" x 1" mini thermal labels for small product barcodes, price tags, and jewelry labeling. High-density printing. Bulk wholesale from factory. MOQ 10,000 labels.',
  keywords: '1x1 thermal labels, 1 x 1 inch labels, mini labels, small barcode labels, jewelry labels',
  alternates: { canonical: `${SITE.domain}/products/thermal-labels/1x1in` },
};

const apps1x1: ApplicationItem[] = [
  { name: "Small Barcode Labels",  image: APP_IMAGES.barcode,    description: "Compact barcode labels for small products and components." },
  { name: "Jewelry Tags",          image: APP_IMAGES.retail,     description: "Mini price and product tags for jewelry and accessories." },
  { name: "Pharmacy Labels",       image: APP_IMAGES.pharmacy,   description: "Small medication and vial labeling in pharmacies." },
  { name: "Electronics Parts",     image: APP_IMAGES.inventory,  description: "Component identification in electronics manufacturing." },
  { name: "Asset Tracking",        image: APP_IMAGES.asset,      description: "Small IT asset and equipment tracking labels." },
  { name: "Food Date Labels",      image: APP_IMAGES.food,       description: "Expiry date and batch labels for small food items." },
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
      "name": "1×1In",
      "item": "https://www.zhixinpaper.com/products/thermal-labels/1x1in"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "1",
  "description": "1",
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
  "url": "https://www.zhixinpaper.com/products/thermal-labels/1x1in"
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
        sizeLabel='1" x 1"'
        slug="1x1in"
        fullTitle='1" x 1" Mini Thermal Labels'
        badge="Mini Size"
        description='The 1" x 1" mini thermal label is designed for applications where space is at a premium. Ideal for jewelry tags, small product barcodes, pharmacy vial labels, and electronics component identification. Despite its small size, our labels deliver crisp, high-contrast printing for reliable barcode scanning and clear text readability.'
        specs={[
          { label: "Size", value: '1" x 1" (25.4mm x 25.4mm)' },
          { label: "Labels Per Roll", value: "1,000 / 2,000" },
          { label: "Core Size", value: '1"' },
          { label: "Adhesive", value: "Permanent" },
          { label: "Face Stock", value: "White Direct Thermal" },
          { label: "Image Life", value: "3–5 years" },
          { label: "Printer Compatibility", value: "Zebra, DYMO, Honeywell, TSC" },
          { label: "MOQ", value: "10,000 labels" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps1x1}
        markets={["Global", "Americas", "Europe", "Asia"]}
        productImage={LABELS_IMG}
      />
    </>
  );
}

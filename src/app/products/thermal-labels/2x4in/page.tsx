import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { LABELS_IMG, APP_IMAGES } from "../label-sizes-data";
import type { ApplicationItem } from "@/components/products/SizeDetailPage";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: '2" x 4" Thermal Labels | Address & Shipping Labels | ZhixinPaper',
  description: '2" x 4" thermal address and shipping labels. Ideal for envelopes, small parcels, and address printing. Compatible with DYMO, Zebra. MOQ 5,000.',
  keywords: '2x4 thermal labels, 2 x 4 inch labels, address labels, shipping labels, narrow thermal labels',
  alternates: { canonical: `${SITE.domain}/products/thermal-labels/2x4in` },
};

const apps2x4: ApplicationItem[] = [
  { name: "Address Labels",       image: APP_IMAGES.shipping,   description: "Standard address label for envelopes and small parcels." },
  { name: "Return Shipping",      image: APP_IMAGES.ecommerce,  description: "Return merchandise labels for e-commerce platforms." },
  { name: "Small Package Labels", image: APP_IMAGES.logistics,  description: "Compact labels for small boxes and poly mailers." },
  { name: "Inventory Tags",       image: APP_IMAGES.inventory,  description: "Narrow inventory and asset tracking labels." },
  { name: "Product Tags",         image: APP_IMAGES.product,    description: "Hang tags and narrow product identification labels." },
  { name: "Barcode Labels",       image: APP_IMAGES.barcode,    description: "Narrow barcode labels for retail and inventory." },
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
      "name": "2×4In",
      "item": "https://www.zhixinpaper.com/products/thermal-labels/2x4in"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "2",
  "description": "2",
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
  "url": "https://www.zhixinpaper.com/products/thermal-labels/2x4in"
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
        sizeLabel='2" x 4"'
        slug="2x4in"
        fullTitle='2" x 4" Thermal Address Labels'
        badge="Address Labels"
        description='The 2" x 4" thermal label is a narrow-format label commonly used for address printing, return shipping, and small package labeling. Its compact width makes it ideal for envelopes, poly mailers, and small boxes. Compatible with DYMO LabelWriter and other desktop thermal printers commonly used in offices and small businesses.'
        specs={[
          { label: "Size", value: '2" x 4" (50.8mm x 101.6mm)' },
          { label: "Labels Per Roll", value: "500 / 1,000" },
          { label: "Core Size", value: '1" / 3"' },
          { label: "Adhesive", value: "Permanent" },
          { label: "Face Stock", value: "White Direct Thermal" },
          { label: "Image Life", value: "3–5 years" },
          { label: "Printer Compatibility", value: "DYMO, Zebra, Rollo, Munbyn" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps2x4}
        markets={["Americas", "Europe", "Global"]}
        productImage={LABELS_IMG}
        palletInfo={
          {
            rollsPerBox: 36,
            boxesPerPallet: 45,
            rollsPerPallet: 1620,
            weightKg: 1080,
            palletDim: "100×122×180 cm",
            palletsPer20ft: 11,
            palletsPer40ft: 25,
            rollsPer20ft: 17820,
            rollsPer40ft: 40500,
          }
        }
      />
    </>
  );
}

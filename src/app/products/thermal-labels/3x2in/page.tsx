import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { LABELS_IMG, APP_IMAGES } from "../label-sizes-data";
import type { ApplicationItem } from "@/components/products/SizeDetailPage";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: { absolute: '3" x 2" Thermal Labels | ZhixinPaper' },
  description: 'Review 3" x 2" direct thermal labels for products, retail, inventory, food and pharmacy workflows by printer, adhesive and packing.',
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


export const revalidate = 86400; // 24 hours: static product/market content

export default function Page() {
  return (
    <>
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
        productImageSlot="thermal-labels"
        palletInfo={
          {
            rollsPerBox: 24,
            boxesPerPallet: 60,
            rollsPerPallet: 1440,
            weightKg: 750,
            palletDim: "100×123×180 cm",
            palletsPer20ft: 11,
            palletsPer40ft: 24,
            rollsPer20ft: 15840,
            rollsPer40ft: 34560,
          }
        }
      />
    </>
  );
}

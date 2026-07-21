import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { LABELS_IMG, APP_IMAGES } from "../label-sizes-data";
import type { ApplicationItem } from "@/components/products/SizeDetailPage";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: { absolute: '1" x 1" Thermal Labels | ZhixinPaper' },
  description: 'Review 1" x 1" direct thermal labels for small barcodes, price tags, jewelry, pharmacy and component identification by printer and application.',
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


export const revalidate = 86400; // 24 hours: static product/market content

export default function Page() {
  return (
    <>
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
        productImageSlot="thermal-labels"
        palletInfo={
          {
            rollsPerBox: 70,
            boxesPerPallet: 36,
            rollsPerPallet: 2520,
            weightKg: 432,
            palletDim: "80×80×180 cm",
            palletsPer20ft: 21,
            palletsPer40ft: 47,
            rollsPer20ft: 52920,
            rollsPer40ft: 118440,
          }
        }
      />
    </>
  );
}

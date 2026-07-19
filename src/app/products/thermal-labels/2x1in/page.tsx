import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { LABELS_IMG, apps2x1 } from "../label-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: '2×1" Thermal Barcode Labels | Retail',
  description: '2" x 1" thermal barcode labels for retail price tags, inventory management, and product identification. Compatible with Zebra LP2824, GX420d. MOQ 5,000.',
  alternates: { canonical: `${SITE.domain}/products/thermal-labels/2x1in` },
};


export const revalidate = 86400; // 24 hours: static product/market content

export default function Page() {
  return (
    <>
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
        productImageSlot="thermal-labels"
        palletInfo={
          {
            rollsPerBox: 70,
            boxesPerPallet: 36,
            rollsPerPallet: 2520,
            weightKg: 576,
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

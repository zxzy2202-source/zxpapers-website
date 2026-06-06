import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { ROLLS_IMG, apps57x30 } from "../roll-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "57×30mm (2¼ inch) Thermal Paper Rolls | Compact Receipts",
  description: "57mm x 30mm (2 1/4 inch) ultra-compact thermal paper rolls for credit card terminals and small receipt printers. BPA-free. MOQ 1,000 rolls.",
  keywords: "57x30mm thermal paper rolls, 2 1/4 inch thermal paper, 2 1/4 thermal paper rolls, credit card terminal paper, 57mm receipt paper",
  alternates: { canonical: `${SITE.domain}/products/thermal-rolls/57x30mm` },
};


export default function Page() {
  return (
    <>
      <SizeDetailPage
        type="rolls"
        sizeLabel="57mm x 30mm"
        slug="57x30mm"
        fullTitle="57mm x 30mm Thermal Paper Rolls"
        description="The 57mm x 30mm thermal paper roll is used in credit card terminals, mobile payment devices, and small receipt printers. Compatible with most US and global payment terminal models."
        specs={[
          { label: "Width", value: "57mm (±0.5mm)" },
          { label: "Imperial Width", value: "2¼″ (2 1/4 inch)" },
          { label: "Roll Diameter", value: "30mm" },
          { label: "Paper Length", value: "15m / 12m" },
          { label: "Core Size", value: "12mm" },
          { label: "Paper Weight", value: "48g/m²" },
          { label: "Image Life", value: "3–5 years" },
          { label: "Coating", value: "BPA-Free / Standard" },
          { label: "MOQ", value: "1,000 rolls" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps57x30}
        markets={["Americas", "Global"]}
        productImage={ROLLS_IMG}
        productImageSlot="thermal-rolls"
        palletInfo={
          {
            rollsPerBox: 150,
            boxesPerPallet: 200,
            rollsPerPallet: 30000,
            weightKg: 600,
            palletDim: "105×120×180 cm",
            palletsPer20ft: 11,
            palletsPer40ft: 24,
            rollsPer20ft: 330000,
            rollsPer40ft: 720000,
          }
        }
      />
    </>
  );
}

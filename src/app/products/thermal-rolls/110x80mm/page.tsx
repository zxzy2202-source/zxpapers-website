import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { ROLLS_IMG, apps110x80 } from "../roll-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "110×80mm Thermal Paper Rolls | Wide Format POS",
  description: "110mm x 80mm wide-format thermal paper rolls for kiosk printers, restaurant systems, and wide POS receipts. BPA-free, ISO 9001 certified.",
  keywords: "110mm x 80mm thermal paper rolls, 110x80 receipt paper, wide format thermal paper, kiosk printer paper",
  alternates: { canonical: `${SITE.domain}/products/thermal-rolls/110x80mm` },
};


export default function Page() {
  return (
    <>
      <SizeDetailPage
        type="rolls"
        sizeLabel="110mm x 80mm"
        slug="110x80mm"
        fullTitle="110mm x 80mm Wide Format Thermal Paper Rolls"
        badge="Wide Format"
        description="The 110mm x 80mm thermal paper roll is a wide-format receipt paper designed for kiosk printers, full-service restaurant systems, and applications requiring detailed itemized receipts. The extra width accommodates more content per line, making it ideal for hotel billing, restaurant orders, and self-service kiosk ticketing."
        specs={[
          { label: "Width", value: "110mm (±0.5mm)" },
          { label: "Roll Diameter", value: "80mm" },
          { label: "Paper Length", value: "50m / 40m / 30m" },
          { label: "Core Size", value: "12mm / 25mm" },
          { label: "Paper Weight", value: "55g/m² / 65g/m²" },
          { label: "Image Life", value: "5–7 years" },
          { label: "Coating", value: "BPA-Free / Standard" },
          { label: "MOQ", value: "500 rolls" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps110x80}
        markets={["Americas", "Europe", "Global"]}
        productImage={ROLLS_IMG}
        productImageSlot="thermal-rolls"
        palletInfo={
          {
            rollsPerBox: 36,
            boxesPerPallet: 24,
            rollsPerPallet: 864,
            weightKg: 360,
            palletDim: "110×120×180 cm",
            palletsPer20ft: 10,
            palletsPer40ft: 23,
            rollsPer20ft: 8640,
            rollsPer40ft: 19872,
          }
        }
      />
    </>
  );
}

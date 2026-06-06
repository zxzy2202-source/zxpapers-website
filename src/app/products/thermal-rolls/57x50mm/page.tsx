import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { ROLLS_IMG, apps57x50 } from "../roll-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "57×50mm (2¼ inch) Thermal Paper Rolls | Mobile Printers",
  description: "57mm x 50mm (2 1/4 inch) thermal paper rolls for mobile printers, taxi meters, and small POS terminals. BPA-free, bulk wholesale. MOQ 1,000 rolls.",
  keywords: "57x50mm thermal paper rolls, 2 1/4 inch thermal paper, 2 1/4 x 50 thermal paper rolls, mobile printer paper, 57mm receipt paper",
  alternates: { canonical: `${SITE.domain}/products/thermal-rolls/57x50mm` },
};


export default function Page() {
  return (
    <>
      <SizeDetailPage
        type="rolls"
        sizeLabel="57mm x 50mm"
        slug="57x50mm"
        fullTitle="57mm x 50mm Thermal Paper Rolls"
        description="The 57mm x 50mm thermal paper roll is widely used in portable and mobile receipt printers, small POS terminals, and taxi meters. Popular across Asia and emerging markets for its compact size and cost efficiency."
        specs={[
          { label: "Width", value: "57mm (±0.5mm)" },
          { label: "Imperial Width", value: "2¼″ (2 1/4 inch)" },
          { label: "Roll Diameter", value: "50mm" },
          { label: "Paper Length", value: "30m / 25m" },
          { label: "Core Size", value: "12mm" },
          { label: "Paper Weight", value: "48g/m² / 55g/m²" },
          { label: "Image Life", value: "3–5 years" },
          { label: "Coating", value: "BPA-Free / Standard" },
          { label: "MOQ", value: "1,000 rolls" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps57x50}
        markets={["Asia", "Global"]}
        productImage={ROLLS_IMG}
        productImageSlot="thermal-rolls"
        palletInfo={
          {
            rollsPerBox: 100,
            boxesPerPallet: 63,
            rollsPerPallet: 6300,
            weightKg: 346,
            palletDim: "80×80×180 cm",
            palletsPer20ft: 21,
            palletsPer40ft: 47,
            rollsPer20ft: 132300,
            rollsPer40ft: 296100,
          }
        }
      />
    </>
  );
}

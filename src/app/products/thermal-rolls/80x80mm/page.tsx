import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { ROLLS_IMG, apps80x80 } from "../roll-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "80×80mm Thermal Paper Rolls | 80x80x12 POS Receipt Rolls",
  description: "80x80mm thermal paper rolls for POS, cash registers, and Italy 80x80x12 receipt demand. BPA-free, real meterage, 55g/60g options. Factory direct.",
  keywords: "80mm x 80mm thermal paper rolls, 80x80x12 thermal rolls, rotoli termici 80x80, carta termica 80x80, 3 1/8 inch thermal paper, POS receipt paper, thermal paper wholesale",
  alternates: { canonical: `${SITE.domain}/products/thermal-rolls/80x80mm` },
};


export default function Page() {
  return (
    <>
      <SizeDetailPage
        type="rolls"
        sizeLabel="80mm x 80mm"
        slug="80x80mm"
        fullTitle="80mm x 80mm Thermal Paper Rolls"
        badge="Most Popular"
        description="The 80mm x 80mm thermal paper roll is the world's most popular POS receipt size. It is also the priority format for Italy 80x80x12 receipt demand, registratore telematico use, restaurants, retail stores, supermarkets, and hospitality. Our BPA-free 80x80 rolls deliver sharp, long-lasting prints compatible with major POS printer brands."
        specs={[
          { label: "Width", value: "80mm (±0.5mm)" },
          { label: "Imperial Width", value: "3⅛″ (3 1/8 inch)" },
          { label: "Roll Diameter", value: "80mm" },
          { label: "Paper Length", value: "70m / 80m real meterage, custom available" },
          { label: "Core Size", value: "12mm for Italy 80x80x12 / 25mm optional" },
          { label: "Paper Weight", value: "55g/m² / 60g/m² / 65g/m²" },
          { label: "Image Life", value: "5–7 years / 10 years option" },
          { label: "Coating", value: "BPA-Free / BPS-Free / Phenol-Free option" },
          { label: "MOQ", value: "1,000 rolls" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps80x80}
        markets={["Global", "Italy / EU", "Asia", "Europe", "Americas"]}
        productImage={ROLLS_IMG}
        productImageSlot="thermal-rolls"
        palletInfo={
          {
            rollsPerBox: 50,
            boxesPerPallet: 36,
            rollsPerPallet: 1800,
            weightKg: 504,
            palletDim: "80×80×180 cm",
            palletsPer20ft: 21,
            palletsPer40ft: 47,
            rollsPer20ft: 37800,
            rollsPer40ft: 84600,
          }
        }
      />
    </>
  );
}

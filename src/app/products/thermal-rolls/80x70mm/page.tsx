import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { ROLLS_IMG, apps80x70 } from "../roll-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "80×70mm (3⅛ inch) Thermal Paper Rolls | European POS",
  description: "80mm x 70mm (3 1/8 inch) thermal paper rolls — the standard POS receipt size across European retail and hospitality. BPA-free, ISO 9001 certified.",
  keywords: "80mm x 70mm thermal paper rolls, 3 1/8 inch thermal paper, 3 1/8 thermal paper rolls, 80x70 receipt paper, European POS paper, thermal paper wholesale",
  alternates: { canonical: `${SITE.domain}/products/thermal-rolls/80x70mm` },
};


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
      "name": "Thermal Rolls",
      "item": "https://www.zhixinpaper.com/products/thermal-rolls"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "80×70Mm",
      "item": "https://www.zhixinpaper.com/products/thermal-rolls/80x70mm"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "80mm x 70mm Thermal Paper Rolls | European POS Standard",
  "description": "80mm x 70mm thermal paper rolls — the standard POS receipt size across European retail and hospitality. BPA-free, ISO 9001 certified.",
  "brand": {
    "@type": "Brand",
    "name": "Zhixin Paper"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Zhixin Paper",
    "url": "https://www.zxpapers.com"
  },
  "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp",
  "url": "https://www.zxpapers.com/products/thermal-rolls/80x70mm"
,
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://www.zxpapers.com",
    "priceCurrency": "USD",
    "lowPrice": "0.50",
    "highPrice": "50.00",
    "offerCount": "100",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Zhixin Paper"
    }
  }
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
        type="rolls"
        sizeLabel="80mm x 70mm"
        slug="80x70mm"
        fullTitle="80mm x 70mm Thermal Paper Rolls"
        badge="Europe Standard"
        description="The 80mm x 70mm thermal paper roll is the standard POS receipt size widely used across European retail, restaurant, and hospitality sectors. Slightly narrower than the 80x80mm, it offers a compact roll profile while maintaining full compatibility with European POS printer models. Our BPA-free 80x70 rolls meet EU regulatory requirements."
        specs={[
          { label: "Width", value: "80mm (±0.5mm)" },
          { label: "Imperial Width", value: "3⅛″ (3 1/8 inch)" },
          { label: "Roll Diameter", value: "70mm" },
          { label: "Paper Length", value: "60m / 50m / 40m" },
          { label: "Core Size", value: "12mm / 25mm" },
          { label: "Paper Weight", value: "55g/m² / 65g/m²" },
          { label: "Image Life", value: "5–7 years" },
          { label: "Coating", value: "BPA-Free / Standard" },
          { label: "MOQ", value: "1,000 rolls" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps80x70}
        markets={["Europe", "Global"]}
        productImage={ROLLS_IMG}
        productImageSlot="thermal-rolls"
        palletInfo={
          {
            rollsPerBox: 50,
            boxesPerPallet: 54,
            rollsPerPallet: 2700,
            weightKg: 594,
            palletDim: "112×120×180 cm",
            palletsPer20ft: 10,
            palletsPer40ft: 22,
            rollsPer20ft: 27000,
            rollsPer40ft: 59400,
          }
        }
      />
    </>
  );
}

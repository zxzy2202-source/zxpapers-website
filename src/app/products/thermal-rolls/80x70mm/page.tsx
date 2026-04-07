import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { ROLLS_IMG, apps80x70 } from "../roll-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "80mm x 70mm Thermal Paper Rolls | European POS Standard",
  description: "80mm x 70mm thermal paper rolls — the standard POS receipt size across European retail and hospitality. BPA-free, ISO 9001 certified.",
  keywords: "80mm x 70mm thermal paper rolls, 80x70 receipt paper, European POS paper, thermal paper wholesale",
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
  "url": "https://www.zhixinpaper.com/products/thermal-rolls/80x70mm"
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
      />
    </>
  );
}

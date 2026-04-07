import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { ROLLS_IMG, apps80x80 } from "../roll-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "80mm x 80mm Thermal Paper Rolls | Most Popular POS Receipt Size",
  description: "80mm x 80mm thermal paper rolls — the world's most popular POS receipt size. BPA-free, ISO 9001 certified. Bulk wholesale. MOQ 1,000 rolls.",
  keywords: "80mm x 80mm thermal paper rolls, 80x80 receipt paper, POS receipt paper, thermal paper wholesale",
  alternates: { canonical: `${SITE.domain}/products/thermal-rolls/80x80mm` },
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
      "name": "80×80Mm",
      "item": "https://www.zhixinpaper.com/products/thermal-rolls/80x80mm"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "80mm x 80mm Thermal Paper Rolls | Most Popular POS Receipt Size",
  "description": "80mm x 80mm thermal paper rolls — the world",
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
  "url": "https://www.zhixinpaper.com/products/thermal-rolls/80x80mm"
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
        sizeLabel="80mm x 80mm"
        slug="80x80mm"
        fullTitle="80mm x 80mm Thermal Paper Rolls"
        badge="Most Popular"
        description="The 80mm x 80mm thermal paper roll is the world's most popular POS receipt size. Used in restaurants, retail stores, supermarkets, and hospitality worldwide. Our BPA-free 80x80 rolls deliver sharp, long-lasting prints compatible with all major POS printer brands."
        specs={[
          { label: "Width", value: "80mm (±0.5mm)" },
          { label: "Roll Diameter", value: "80mm" },
          { label: "Paper Length", value: "80m / 60m / 50m" },
          { label: "Core Size", value: "12mm / 25mm" },
          { label: "Paper Weight", value: "55g/m² / 65g/m²" },
          { label: "Image Life", value: "5–7 years" },
          { label: "Coating", value: "BPA-Free / Standard" },
          { label: "MOQ", value: "1,000 rolls" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps80x80}
        markets={["Global", "Asia", "Europe", "Americas"]}
        productImage={ROLLS_IMG}
      />
    </>
  );
}

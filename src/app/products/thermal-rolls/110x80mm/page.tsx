import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { ROLLS_IMG, apps110x80 } from "../roll-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "110mm x 80mm Thermal Paper Rolls | Wide Format POS & Kiosk",
  description: "110mm x 80mm wide-format thermal paper rolls for kiosk printers, restaurant systems, and wide POS receipts. BPA-free, ISO 9001 certified.",
  keywords: "110mm x 80mm thermal paper rolls, 110x80 receipt paper, wide format thermal paper, kiosk printer paper",
  alternates: { canonical: `${SITE.domain}/products/thermal-rolls/110x80mm` },
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
      "name": "110×80Mm",
      "item": "https://www.zhixinpaper.com/products/thermal-rolls/110x80mm"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "110mm x 80mm Thermal Paper Rolls | Wide Format POS & Kiosk",
  "description": "110mm x 80mm wide-format thermal paper rolls for kiosk printers, restaurant systems, and wide POS receipts. BPA-free, ISO 9001 certified.",
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
  "url": "https://www.zhixinpaper.com/products/thermal-rolls/110x80mm"
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
      />
    </>
  );
}

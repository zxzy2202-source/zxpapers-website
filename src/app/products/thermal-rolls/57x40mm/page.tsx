import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { ROLLS_IMG, apps57x40 } from "../roll-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "57×40mm Thermal Rolls | Handheld Printers",
  description: "57mm x 40mm compact thermal paper rolls for handheld printers and mobile POS. BPA-free. MOQ 1,000 rolls.",
  alternates: { canonical: `${SITE.domain}/products/thermal-rolls/57x40mm` },
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
      "name": "57×40Mm",
      "item": "https://www.zhixinpaper.com/products/thermal-rolls/57x40mm"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "57mm x 40mm Thermal Paper Rolls | Compact Handheld Printer Rolls",
  "description": "57mm x 40mm compact thermal paper rolls for handheld printers and mobile POS. BPA-free. MOQ 1,000 rolls.",
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
  "url": "https://www.zhixinpaper.com/products/thermal-rolls/57x40mm"
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
        sizeLabel="57mm x 40mm"
        slug="57x40mm"
        fullTitle="57mm x 40mm Thermal Paper Rolls"
        description="The 57mm x 40mm thermal paper roll is a compact size for small portable printers and handheld devices. Ideal for mobile payment terminals and small receipt printers."
        specs={[
          { label: "Width", value: "57mm (±0.5mm)" },
          { label: "Roll Diameter", value: "40mm" },
          { label: "Paper Length", value: "20m / 15m" },
          { label: "Core Size", value: "12mm" },
          { label: "Paper Weight", value: "48g/m²" },
          { label: "Image Life", value: "3–5 years" },
          { label: "Coating", value: "BPA-Free / Standard" },
          { label: "MOQ", value: "1,000 rolls" },
          { label: "Lead Time", value: "7–15 days" },
        ]}
        applications={apps57x40}
        markets={["Asia", "Global"]}
        productImage={ROLLS_IMG}
      />
    </>
  );
}

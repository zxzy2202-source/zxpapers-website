import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { ROLLS_IMG, apps57x50 } from "../roll-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "57mm x 50mm Thermal Paper Rolls | Mobile & Portable Printer Paper",
  description: "57mm x 50mm thermal paper rolls for mobile printers, taxi meters, and small POS terminals. BPA-free, bulk wholesale. MOQ 1,000 rolls.",
  alternates: { canonical: `${SITE.domain}/products/thermal-rolls/57x50mm` },
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
      "name": "57×50Mm",
      "item": "https://www.zhixinpaper.com/products/thermal-rolls/57x50mm"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "57mm x 50mm Thermal Paper Rolls | Mobile & Portable Printer Paper",
  "description": "57mm x 50mm thermal paper rolls for mobile printers, taxi meters, and small POS terminals. BPA-free, bulk wholesale. MOQ 1,000 rolls.",
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
  "url": "https://www.zhixinpaper.com/products/thermal-rolls/57x50mm"
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
        sizeLabel="57mm x 50mm"
        slug="57x50mm"
        fullTitle="57mm x 50mm Thermal Paper Rolls"
        description="The 57mm x 50mm thermal paper roll is widely used in portable and mobile receipt printers, small POS terminals, and taxi meters. Popular across Asia and emerging markets for its compact size and cost efficiency."
        specs={[
          { label: "Width", value: "57mm (±0.5mm)" },
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
      />
    </>
  );
}

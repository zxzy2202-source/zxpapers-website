import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { ROLLS_IMG, apps57x30 } from "../roll-sizes-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "57×30mm Thermal Paper Rolls | Compact Receipts",
  description: "57mm x 30mm ultra-compact thermal paper rolls for credit card terminals and small receipt printers. BPA-free. MOQ 1,000 rolls.",
  alternates: { canonical: `${SITE.domain}/products/thermal-rolls/57x30mm` },
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
      "name": "57×30Mm",
      "item": "https://www.zhixinpaper.com/products/thermal-rolls/57x30mm"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "57mm x 30mm Thermal Paper Rolls | Ultra-Compact Receipt Rolls",
  "description": "57mm x 30mm ultra-compact thermal paper rolls for credit card terminals and small receipt printers. BPA-free. MOQ 1,000 rolls.",
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
  "url": "https://www.zhixinpaper.com/products/thermal-rolls/57x30mm"
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
        sizeLabel="57mm x 30mm"
        slug="57x30mm"
        fullTitle="57mm x 30mm Thermal Paper Rolls"
        description="The 57mm x 30mm thermal paper roll is used in credit card terminals, mobile payment devices, and small receipt printers. Compatible with most US and global payment terminal models."
        specs={[
          { label: "Width", value: "57mm (±0.5mm)" },
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
      />
    </>
  );
}

import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { DETERGENT_LABELS_IMG, apps70x200 } from "../detergent-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "70×200mm Detergent Labels | Wrap-Around Bottle Labels",
  description:
    "70×200mm wrap-around detergent labels for cylindrical bottles. Water-resistant, chemical-resistant. Full-wrap CMYK printing. MOQ 5,000.",
  alternates: { canonical: `${SITE.domain}/products/detergent-labels/70x200mm` },
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
      "name": "Detergent Labels",
      "item": "https://www.zhixinpaper.com/products/detergent-labels"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "70×200Mm",
      "item": "https://www.zhixinpaper.com/products/detergent-labels/70x200mm"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "70×200mm Detergent Labels | Wrap-Around Bottle Labels",
  "description": "70×200mm wrap-around detergent labels for cylindrical bottles. Water-resistant, chemical-resistant. Full-wrap CMYK printing. MOQ 5,000.",
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
  "url": "https://www.zhixinpaper.com/products/detergent-labels/70x200mm"
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
        type="labels"
        sizeLabel="70 × 200mm"
        slug="70x200mm"
        fullTitle="70×200mm Detergent Labels (Wrap-Around)"
        badge="Wrap-Around"
        description="The 70×200mm wrap-around format provides full 360-degree coverage for cylindrical detergent and cleaning product bottles. Ideal for bleach, floor cleaners, fabric care products, and industrial cleaning containers. The extended width accommodates comprehensive ingredient lists, usage instructions, and multilingual regulatory text on a single continuous label."
        specs={[
          { label: "Size", value: "70mm × 200mm (wrap-around)" },
          { label: "Face Stock", value: "White/clear BOPP, PE, or vinyl" },
          { label: "Adhesive", value: "Permanent acrylic (water & chemical resistant)" },
          { label: "Liner", value: "Silicone-coated PET" },
          { label: "Print Method", value: "Flexo / offset / digital CMYK + Pantone" },
          { label: "Coating", value: "Gloss or matte lamination" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "10–18 days" },
          { label: "Certifications", value: "ISO 9001, GHS / CLP compliant, REACH" },
        ]}
        applications={apps70x200}
        markets={["Global", "Americas", "Europe"]}
        productImage={DETERGENT_LABELS_IMG}
      />
    </>
  );
}

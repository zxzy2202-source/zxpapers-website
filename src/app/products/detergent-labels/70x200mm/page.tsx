import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { DETERGENT_LABELS_IMG, apps70x200 } from "../detergent-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "70×200mm Detergent Labels | Wrap-Around",
  description:
    "70×200mm wrap-around detergent labels for cylindrical bottles. Water-resistant, chemical-resistant. Full-wrap CMYK printing. MOQ 5,000.",
  alternates: { canonical: `${SITE.domain}/products/detergent-labels/70x200mm` },
};


export default function Page() {
  return (
    <>
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
        productImageSlot="detergent-labels"
      />
    </>
  );
}

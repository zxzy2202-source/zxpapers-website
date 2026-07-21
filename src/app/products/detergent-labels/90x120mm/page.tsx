import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { DETERGENT_LABELS_IMG, apps90x120 } from "../detergent-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "90×120mm Detergent Labels | Front Panel",
  description:
    "Review 90×120mm detergent bottle labels by container, film, adhesive, formula exposure, print process, artwork, application method and test evidence.",
  alternates: { canonical: `${SITE.domain}/products/detergent-labels/90x120mm` },
};


export const revalidate = 86400; // 24 hours: static product/market content

export default function Page() {
  return (
    <>
      <SizeDetailPage
        type="labels"
        sizeLabel="90 × 120mm"
        slug="90x120mm"
        fullTitle="90×120mm Detergent Labels (Bottle Front)"
        badge="Bottle Front"
        description="The 90×120mm is the standard front panel label size for 500ml–1L detergent and cleaning product bottles. Ideal for laundry detergent, dish soap, hand soap, and fabric softener. Water-resistant BOPP face stock with chemical-resistant permanent adhesive withstands exposure to surfactants and solvents."
        specs={[
          { label: "Size", value: "90mm × 120mm" },
          { label: "Face Stock", value: "White/clear BOPP, PE, or vinyl" },
          { label: "Adhesive", value: "Permanent acrylic (water & chemical resistant)" },
          { label: "Liner", value: "Silicone-coated PET" },
          { label: "Print Method", value: "Flexo / offset / digital CMYK + Pantone" },
          { label: "Coating", value: "Gloss or matte lamination" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "10–18 days" },
          { label: "Certifications", value: "ISO 9001, GHS / CLP compliant" },
        ]}
        applications={apps90x120}
        markets={["Global", "Americas", "Europe", "Asia"]}
        productImage={DETERGENT_LABELS_IMG}
        productImageSlot="detergent-labels"
      />
    </>
  );
}

import SizeDetailPage from "@/components/products/SizeDetailPage";
import { CAN_LABELS_IMG, apps211x400 } from "../can-labels-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "211×400 Filling Line Labels | 12oz Beverage",
  description:
    "Specify 211×400 machine-ready full-wrap labels for 12oz beverage containers by actual container dimensions, surface, application process, artwork, material, and roll setup.",
  path: "/products/can-labels/211x400",
});


export const revalidate = 86400; // 24 hours: static product/market content

export default function Page() {
  return (
    <>
      <SizeDetailPage
        type="labels"
        sizeLabel="211 × 400"
        slug="211x400"
        fullTitle="211×400 Filling Line Labels (Standard 12oz)"
        badge="Standard"
        description="The 211×400 route supports machine-ready full-wrap label planning for 12oz slim and standard beverage containers. Confirm production dimensions, coating, surface condition, application sequence, exposure, artwork and roll setup before approving a material and adhesive construction."
        specs={[
          { label: "Container Reference", value: "211×400 reference; verify the production container" },
          { label: "Label Dimensions", value: "Approx. 87mm × 99mm; confirm the available label panel" },
          { label: "Face Stock", value: "White gloss, matte, or clear film options by application" },
          { label: "Adhesive", value: "Selected after can surface and application review" },
          { label: "Print Method", value: "Flexo / offset CMYK + Pantone options" },
          { label: "Finish", value: "Gloss or matte options by exposure and artwork" },
          { label: "Order Quantity", value: "Confirmed by construction, artwork and SKU mix" },
          { label: "Production Timing", value: "Confirmed after proof, trial and order review" },
          { label: "Evidence Scope", value: "Material and market documents confirmed by project" },
        ]}
        applications={apps211x400}
        markets={["Global"]}
        productImage={CAN_LABELS_IMG}
        productImageSlot="can-labels"
      />
    </>
  );
}

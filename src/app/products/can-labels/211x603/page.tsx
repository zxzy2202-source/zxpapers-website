import SizeDetailPage from "@/components/products/SizeDetailPage";
import { CAN_LABELS_IMG, apps211x603 } from "../can-labels-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "211×603 Filling Line Labels | 16oz Beverage",
  description:
    "Specify 211×603 machine-ready full-wrap labels for tall 16oz beverage containers by container dimensions, surface, application sequence, artwork, material, and roll setup.",
  path: "/products/can-labels/211x603",
});


export const revalidate = 86400; // 24 hours: static product/market content

export default function Page() {
  return (
    <>
      <SizeDetailPage
        type="labels"
        sizeLabel="211 × 603"
        slug="211x603"
        fullTitle="211×603 Filling Line Labels (Tall 16oz)"
        badge="Tall Format"
        description="The 211×603 route supports machine-ready full-wrap label planning for tall 16oz beverage containers and provides additional artwork space. Confirm the production container, label panel, condensation timing, application sequence, exposure and roll setup before material approval."
        specs={[
          { label: "Container Reference", value: "211×603 reference; verify the production container" },
          { label: "Label Dimensions", value: "Approx. 87mm × 153mm; confirm the available label panel" },
          { label: "Face Stock", value: "White gloss, matte, or clear film options by application" },
          { label: "Adhesive", value: "Selected after container surface and condensation review" },
          { label: "Print Method", value: "Flexo / offset CMYK + Pantone options" },
          { label: "Finish", value: "Gloss or matte options by exposure and artwork" },
          { label: "Order Quantity", value: "Confirmed by construction, artwork and SKU mix" },
          { label: "Production Timing", value: "Confirmed after proof, trial and order review" },
          { label: "Evidence Scope", value: "Material and market documents confirmed by project" },
        ]}
        applications={apps211x603}
        markets={["Global"]}
        productImage={CAN_LABELS_IMG}
        productImageSlot="can-labels"
      />
    </>
  );
}

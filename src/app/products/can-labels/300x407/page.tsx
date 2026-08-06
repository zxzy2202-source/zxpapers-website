import SizeDetailPage from "@/components/products/SizeDetailPage";
import { CAN_LABELS_IMG, apps300x407 } from "../can-labels-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "300×407 Filling Line Labels | Food Containers",
  description:
    "Specify 300×407 machine-ready full-wrap labels for #2 food containers by production dimensions, surface coating, filling sequence, material, adhesive, and roll setup.",
  path: "/products/can-labels/300x407",
});


export const revalidate = 86400; // 24 hours: static product/market content

export default function Page() {
  return (
    <>
      <SizeDetailPage
        type="labels"
        sizeLabel="300 × 407"
        slug="300x407"
        fullTitle="300×407 Filling Line Labels (#2 Food Standard)"
        badge="Food Standard"
        description="The 300×407 route supports machine-ready full-wrap label planning for #2 food containers used for tomatoes, soups, seafood and pet food. Confirm the production container, coating, filling sequence, storage and label position. Direct food contact is a separate scope from an exterior label."
        specs={[
          { label: "Container Reference", value: "300×407 reference; verify the production container" },
          { label: "Label Dimensions", value: "Approx. 76mm × 111mm; confirm the available label panel" },
          { label: "Face Stock", value: "White gloss, matte, or kraft options by application" },
          { label: "Adhesive", value: "Selected after container surface and process review" },
          { label: "Print Method", value: "Flexo / offset CMYK + Pantone options" },
          { label: "Finish", value: "Gloss or matte options by exposure and artwork" },
          { label: "Order Quantity", value: "Confirmed by construction, artwork and SKU mix" },
          { label: "Production Timing", value: "Confirmed after proof, trial and order review" },
          { label: "Evidence Scope", value: "Packaging and market documents confirmed by project" },
        ]}
        applications={apps300x407}
        markets={["Global"]}
        productImage={CAN_LABELS_IMG}
        productImageSlot="can-labels"
      />
    </>
  );
}

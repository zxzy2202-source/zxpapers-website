import SizeDetailPage from "@/components/products/SizeDetailPage";
import { CAN_LABELS_IMG, apps401x700 } from "../can-labels-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "401×700 Filling Line Labels | Large Format",
  description:
    "Specify 401×700 machine-ready large-format labels for #10 food containers or industrial vessels by surface, exposure, artwork, material, adhesive, and roll setup.",
  path: "/products/can-labels/401x700",
});


export const revalidate = 86400; // 24 hours: static product/market content

export default function Page() {
  return (
    <>
      <SizeDetailPage
        type="labels"
        sizeLabel="401 × 700"
        slug="401x700"
        fullTitle="401×700 Filling Line Labels (Large Format)"
        badge="Large Format"
        description="The 401×700 route supports machine-ready large-format label planning for #10 food containers, paint containers and industrial vessels. The format can carry buyer-approved ingredient or hazard communication artwork; final material and compliance scope remain project-specific."
        specs={[
          { label: "Container Reference", value: "401×700 reference; verify the production container" },
          { label: "Label Dimensions", value: "Approx. 104mm × 178mm; confirm the available label panel" },
          { label: "Face Stock", value: "White gloss, matte, film, or polyester options by application" },
          { label: "Adhesive", value: "Selected after container surface and exposure review" },
          { label: "Print Method", value: "Flexo / offset CMYK + Pantone options" },
          { label: "Finish", value: "Selected and tested for the specified exposure" },
          { label: "Order Quantity", value: "Confirmed by construction, artwork and SKU mix" },
          { label: "Production Timing", value: "Confirmed after proof, trial and order review" },
          { label: "Evidence Scope", value: "Material, product and market documents confirmed by project" },
        ]}
        applications={apps401x700}
        markets={["Global"]}
        productImage={CAN_LABELS_IMG}
        productImageSlot="can-labels"
      />
    </>
  );
}

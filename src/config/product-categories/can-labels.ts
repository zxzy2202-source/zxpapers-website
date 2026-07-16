import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { canLabelSizes, CAN_LABELS_IMG } from "@/app/products/can-labels/can-labels-data";

const CUSTOM_IMAGE =
  "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=1200&q=82";
const FOOD_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=82";
const PET_FOOD_IMAGE =
  "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=1200&q=82";
const PAINT_IMAGE =
  "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&q=82";
const INDUSTRIAL_IMAGE =
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=82";
const COPACKER_IMAGE =
  "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1200&q=82";
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

const sizeUses: Record<string, string> = {
  "211x400": "Standard food and beverage cans",
  "211x603": "Tall beverage and specialty cans",
  "300x407": "Common food and pet-food cans",
  "307x510": "Wide food and industrial cans",
  "401x700": "Large food-service and industrial cans",
};

export const canLabelsCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/can-labels",
  categoryName: "Can Labels",
  alternateNames: [
    "Custom Can Labels",
    "Metal Can Labels",
    "Food Can Labels",
    "Beverage Can Labels",
  ],
  audience:
    "Food and beverage brands, private-label brands, food OEM and ODM manufacturers, co-packers, pet-food manufacturers, industrial product manufacturers, packaging procurement teams and label distributors",
  metadata: {
    title: "Custom Can Labels Manufacturer | Food, Beverage & OEM",
    description:
      "Source custom printed and blank can labels by container, size and application. Review metal surface, moisture, oil, material, finish, machine and OEM packing requirements.",
    keywords: [
      "custom can labels",
      "metal can labels",
      "food can labels",
      "beverage can labels",
      "printed can labels",
      "blank can labels",
      "can label manufacturer",
      "OEM can label supplier",
    ],
  },
  hero: {
    image: {
      slot: "can-labels:hero",
      fallback: CAN_LABELS_IMG,
      alt: "Custom printed labels applied to food beverage and metal cans",
    },
    badge: "B2B custom can label catalog",
    titleBefore: "Custom Can Labels for ",
    titleHighlight: "Food, Beverage and Metal Containers",
    description:
      "Start with the actual can, coating and label area. Then confirm cleaning, filling and labeling sequence, condensation or oil exposure, artwork, roll format, quantity and packing before quotation.",
    trustBadges: [
      "Custom printed and blank",
      "Paper and film routes",
      "Hand or machine applied",
      "OEM and multi-SKU review",
    ],
    facts: [
      { value: "2 routes", label: "Custom printed or blank" },
      { value: "5 sizes", label: "Existing can formats" },
      { value: "4 steps", label: "Qualification sequence" },
      { value: "B2B", label: "OEM supply review" },
    ],
    primaryCta: { label: "Browse Can Label Options", href: "#product-families" },
    secondaryCta: { label: "Request an OEM Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Products", href: "#product-families" },
    { label: "Sizes", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Selection", href: "#selection-guide" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  families: [
    {
      id: "custom-printed",
      label: "Primary OEM route",
      title: "Custom Printed Can Labels",
      description:
        "Printed can-label programs for approved artwork, color, finish, version control and repeat supply.",
      buyerFit:
        "Best for brands, co-packers and distributors that need finished labels aligned with the real can, application method, artwork versions and packing plan.",
      href: "/products/can-labels/custom-printed",
      linkLabel: "Review custom printed can labels",
      featured: true,
      image: {
        slot: "can-labels:custom-hero",
        fallback: CUSTOM_IMAGE,
        alt: "Custom printed can labels prepared for branded packaging",
      },
    },
    {
      id: "blank",
      label: "Secondary supply route",
      title: "Blank Can Labels",
      description:
        "Unprinted labels for buyers applying variable data or print in-house after material and can fit are reviewed.",
      buyerFit:
        "Best for internal printing workflows that already control the printer, label dimensions and required image durability.",
      href: "/products/can-labels/blank",
      linkLabel: "Review blank can labels",
      image: {
        slot: "can-labels:blank-hero",
        fallback: CAN_LABELS_IMG,
        alt: "Blank can label stock for in-house printing and application",
      },
    },
  ],
  sizes: canLabelSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug],
  })),
  applications: [
    {
      id: "food-cans",
      title: "Food cans",
      description:
        "Labels for canned vegetables, fruit, seafood, sauces and other foods with project-specific material review.",
      confirm:
        "can coating, filling and labeling sequence, oil or water exposure, storage and whether any direct food contact requirement is separate",
      href: "/products/can-labels/custom-printed",
      linkLabel: "Review a food-can project",
      image: {
        slot: "can-labels:applications:food",
        fallback: FOOD_IMAGE,
        alt: "Printed labels on canned food packaging",
      },
    },
    {
      id: "beverage-cans",
      title: "Beverage and craft cans",
      description:
        "Branded labels for chilled beverage, craft and seasonal can programs with controlled artwork versions.",
      confirm:
        "can shape, chilled condensation, application point, white ink, finish and acceptable label-edge appearance",
      href: "/products/can-labels/custom-printed",
      linkLabel: "Review a beverage-can program",
      image: {
        slot: "can-labels:applications:beverage",
        fallback: CUSTOM_IMAGE,
        alt: "Custom labels applied to chilled beverage cans",
      },
    },
    {
      id: "pet-food-cans",
      title: "Pet-food cans",
      description:
        "Multi-flavor and multi-format label programs for wet pet food and related retail packaging.",
      confirm:
        "oil or gravy exposure, can surface, SKU list, language, barcode, quantity by version and carton separation",
      href: "/products/can-labels/custom-printed",
      linkLabel: "Plan a pet-food label order",
      image: {
        slot: "can-labels:applications:pet-food",
        fallback: PET_FOOD_IMAGE,
        alt: "Pet-food cans with printed product labels",
      },
    },
    {
      id: "oil-paint-cans",
      title: "Oil, lubricant and paint cans",
      description:
        "Film and protected print routes for metal containers exposed to handling, leakage or wiping.",
      confirm:
        "metal coating, surface oil, actual product leakage, wiping method, abrasion, temperature and required life",
      href: "/products/can-labels/custom-printed",
      linkLabel: "Review an oil or paint can",
      image: {
        slot: "can-labels:applications:paint",
        fallback: PAINT_IMAGE,
        alt: "Printed labels on paint and coating cans",
      },
    },
    {
      id: "industrial-cans",
      title: "Industrial and chemical containers",
      description:
        "Durable identification selected against the real metal surface and operating conditions.",
      confirm:
        "actual liquid, concentration, splash or wipe method, contact time, temperature, abrasion and service life",
      href: "/products/can-labels/custom-printed",
      linkLabel: "Start a technical label review",
      image: {
        slot: "can-labels:applications:industrial",
        fallback: INDUSTRIAL_IMAGE,
        alt: "Labels on industrial metal cans and containers",
      },
    },
    {
      id: "copacker-programs",
      title: "Co-packer and multi-SKU programs",
      description:
        "Roll-label supply for filling and packing lines managing multiple approved brands, flavors or markets.",
      confirm:
        "applicator, line speed, core, outer diameter, winding, gap, version codes, quantities and carton controls",
      href: "/oem",
      linkLabel: "Review an OEM supply program",
      image: {
        slot: "can-labels:applications:canning",
        fallback: COPACKER_IMAGE,
        alt: "Can labeling line for co-packer and multi-SKU production",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Can and surface",
      description: "Identify the real container before choosing paper, film or adhesive.",
      inputs: [
        "Aluminum, steel or other metal",
        "Bare, coated, printed or varnished surface",
        "Can dimensions, label area and seam",
        "Dust, machining oil and cleaning process",
      ],
    },
    {
      step: "02",
      title: "Filling, labeling and exposure",
      description: "Record when the label is applied and what reaches it during use.",
      inputs: [
        "Before or after filling and cooling",
        "Application and storage temperature",
        "Condensation, water, oil or product leakage",
        "Wiping, abrasion and required service life",
      ],
    },
    {
      step: "03",
      title: "Material, adhesive and finish",
      description: "Shortlist the complete construction after the first two steps are known.",
      inputs: [
        "Coated paper, White BOPP, Clear BOPP or PET",
        "Adhesive selected for the actual surface",
        "Gloss, matte, varnish or lamination objective",
        "White ink, small text and barcode contrast",
      ],
    },
    {
      step: "04",
      title: "Artwork, roll and commercial",
      description: "Lock production and order inputs for a comparable quotation.",
      inputs: [
        "Artwork versions, colors and approval owner",
        "Core, outer diameter, winding, gap and line speed",
        "Quantity by SKU and replacement control",
        "Packing, destination, documents and delivery window",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "manufacturing:facility-line",
      fallback: QUALITY_IMAGE,
      alt: "Label printing and quality-control line for can-label production",
    },
    label: "Qualification and evidence",
    title: "Approve the complete label on the production can",
    description:
      "A material name alone cannot approve adhesion, appearance or durability. Record the selected face stock, adhesive, finish, can surface, exposure, artwork, roll construction and acceptance result.",
    checks: [
      {
        title: "Actual-can adhesion",
        description:
          "Test the production can after the real cleaning process and record initial, 24-hour and longer dwell observations.",
      },
      {
        title: "Exposure review",
        description:
          "Reproduce condensation, water, oil, wiping, abrasion or temperature conditions using defined contact and timing.",
      },
      {
        title: "Print approval",
        description:
          "Approve artwork version, color, white ink, finish, small text, die-cut position and barcode on the intended background.",
      },
      {
        title: "Machine-ready trial",
        description:
          "Confirm core, outer diameter, winding, gap, liner, sensor, line speed and first-roll feed on the intended applicator.",
      },
    ],
    note:
      "Use on the outside of food packaging and direct food contact are separate scopes. Confirm the selected material, destination requirements, evidence subject and approval responsibility for each project.",
  },
  faq: [
    {
      q: "Should can labels use paper or film?",
      a: "Coated paper can suit dry, controlled packaging and a paper appearance. White BOPP, Clear BOPP or PET may be better starting points when moisture, oil, abrasion or longer durability matters. The final route depends on the actual can, exposure, finish and cost target.",
    },
    {
      q: "Will one permanent adhesive work on every metal can?",
      a: "No. A can may be aluminum or steel with print, varnish or another coating, and the surface may carry dust, machining oil or condensation. Test the proposed construction on the production can after the real cleaning process.",
    },
    {
      q: "How should labels for chilled beverage cans be reviewed?",
      a: "Confirm whether labels are applied before or after filling and cooling, the can temperature at application, when condensation forms, storage conditions and acceptable edge appearance. Reproduce that sequence during sample approval.",
    },
    {
      q: "What should be tested for food or lubricant oil exposure?",
      a: "Record the actual oil or product, whether it contacts the face or cut edge, contact duration, wiping method and temperature. Material, print protection and adhesive must be assessed as one construction.",
    },
    {
      q: "Can Clear BOPP create a no-label look on cans?",
      a: "Clear BOPP can create a transparent appearance on a smooth surface, but white ink, can color, printed background, trapped air and label edges affect the result. Approve it on a representative filled can.",
    },
    {
      q: "What is needed for machine-applied can labels?",
      a: "Send the applicator model, line speed, core ID, maximum roll diameter, web width, label dimensions, gap, winding, liner and sensor method. A first-roll trial is the strongest approval step for a new construction.",
    },
    {
      q: "Can multiple flavors or artwork versions share one order?",
      a: "Multiple approved versions can be reviewed together when every SKU has a unique code, quantity and approval file. Roll labels, cartons and replacement records should use the same version code to reduce mixing risk.",
    },
    {
      q: "What information is needed for a useful can-label quotation?",
      a: "Provide the can material, coating, dimensions, label area, filling and labeling sequence, surface condition, exposure, material preference, artwork versions, roll specification, quantity by SKU, packing, destination, document scope and requested delivery window.",
    },
  ],
  inquiry: {
    label: "B2B can-label review",
    title: "Send the can, application and production inputs",
    description:
      "A complete request lets the team identify missing samples, tests, artwork controls and commercial inputs before quotation.",
    checklist: [
      "Can material, coating, dimensions, label area, seam and surface cleaning",
      "Filling and labeling sequence, temperature, condensation, oil and handling exposure",
      "Material, adhesive, finish, artwork, barcode and approval requirements",
      "Roll construction, applicator, SKU quantity, packing, destination and delivery window",
    ],
    productName: "Custom Can Labels",
    initialMessage:
      "Company and buyer type:\nCan application and product:\nCan material, coating and dimensions:\nLabel area, seam and curvature:\nFilling and labeling sequence:\nSurface cleaning and container temperature:\nCondensation, water, oil, chemical or abrasion exposure:\nMaterial, adhesive and finish preference:\nArtwork versions, colors, white ink and barcode:\nCore, outer diameter, winding, gap and applicator:\nEstimated quantity by SKU:\nPacking and private-label requirement:\nRequired samples, tests or documents:\nDestination country / port:\nRequested delivery window:\nCurrent supply problem:",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Can Labels", path: "/products/can-labels" },
  ],
  relatedPrograms: [
    { label: "Product Labels", href: "/products/product-labels" },
    { label: "Detergent and Chemical Container Labels", href: "/products/detergent-labels" },
    { label: "Thermal Labels", href: "/products/thermal-labels" },
    { label: "OEM and Private Label", href: "/oem" },
  ],
} satisfies ProductCategoryConfig;

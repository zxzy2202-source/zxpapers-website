import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { canLabelSizes } from "@/app/products/can-labels/can-labels-data";

const MACHINE_LINE_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const PRINTED_ROLL_IMAGE =
  "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&q=82";
const BLANK_ROLL_IMAGE =
  "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&q=82";
const BEVERAGE_IMAGE =
  "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=1200&q=82";
const FOOD_IMAGE =
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&q=82";
const PERSONAL_CARE_IMAGE =
  "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=1200&q=82";
const HOUSEHOLD_IMAGE =
  "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1200&q=82";
const INDUSTRIAL_IMAGE =
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=82";
const COPACKER_IMAGE =
  "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1200&q=82";

export const canLabelsCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/can-labels",
  categoryName: "Machine-Ready Roll Labels",
  alternateNames: [
    "Labels for Filling Lines",
    "Automatic Label Applicator Labels",
    "Machine-Applied Roll Labels",
    "Roll Labels for Bottling Lines",
  ],
  audience:
    "Beverage, food, personal-care, household-product and industrial filling plants; co-packers; OEM manufacturers; production engineers; packaging procurement teams; and label distributors",
  metadata: {
    title: "Machine-Ready Roll Labels for Filling Lines | B2B",
    description:
      "Specify machine-ready roll labels by applicator, core, roll diameter, web width, unwind, gap, liner, sensor, line speed and container condition.",
    keywords: [
      "machine ready roll labels",
      "labels for filling lines",
      "automatic label applicator labels",
      "bottling line labels",
      "machine applied pressure sensitive labels",
      "custom printed roll labels",
      "automatic labeling machine label rolls",
      "OEM roll label supplier",
    ],
  },
  hero: {
    image: {
      slot: "can-labels:hero",
      fallback: MACHINE_LINE_IMAGE,
      alt: "Machine-ready label rolls specified for an automatic filling and labeling line",
    },
    badge: "B2B filling-line label program",
    titleBefore: "Machine-Ready Roll Labels for ",
    titleHighlight: "Automatic Filling and Labeling Lines",
    description:
      "A label that looks right can still stop a production line. Qualify the applicator, roll construction, sensor method, target speed, container condition and application position before quotation and approve the first roll on the intended setup.",
    trustBadges: [
      "Applicator-specific review",
      "Controlled roll specification",
      "Printed and blank routes",
      "First-roll trial planning",
    ],
    facts: [
      { value: "2 routes", label: "Printed and blank product pages" },
      { value: "1 spec", label: "Quote-to-production control" },
      { value: "4 stages", label: "Line qualification" },
      { value: "B2B", label: "OEM and co-packer supply" },
    ],
    primaryCta: { label: "Review Line Requirements", href: "#selection-guide" },
    secondaryCta: { label: "Request a Roll-Label Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Supply Routes", href: "#product-families" },
    { label: "Sizes", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Line Checklist", href: "#selection-guide" },
    { label: "Trial", href: "#qualification" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Machine-ready product routes",
      title: "Choose printed or blank label supply",
      description:
        "The product series defines how labels are printed, sensed, dispensed and changed on the line. Final material, adhesive and roll construction are confirmed against the actual applicator and container.",
    },
    applications: {
      label: "Filling-line applications",
      title: "Match the series to the container and process",
      description:
        "Product type narrows the operating risk. Container geometry, filling sequence, surface condition, exposure and target speed still need project-specific confirmation.",
    },
    selection: {
      label: "Four-step line qualification",
      title: "Lock the machine specification before material approval",
      description:
        "Applicator geometry, roll construction and container presentation determine which label construction is worth testing on the first roll.",
    },
  },
  families: [
    {
      id: "custom-printed",
      label: "Printed product route",
      title: "Custom Printed Filling Line Labels",
      description:
        "Finished pressure-sensitive labels supplied to an approved artwork, material construction, die-cut and machine-ready roll specification.",
      buyerFit:
        "Best for brands, filling plants and co-packers that need repeatable color, finish, roll geometry, artwork revision and carton identification.",
      href: "/products/can-labels/custom-printed",
      linkLabel: "Explore custom printed filling line labels",
      featured: true,
      image: {
        slot: "can-labels:custom-hero",
        fallback: PRINTED_ROLL_IMAGE,
        alt: "Custom printed filling line labels prepared for automatic application",
      },
    },
    {
      id: "blank-variable-data",
      label: "Blank product route",
      title: "Blank Filling Line Labels for Variable Data",
      description:
        "Blank or preprinted rolls for adding batch, barcode, date or serial data before automatic application.",
      buyerFit:
        "Best for plants controlling data in-house. Printer, ribbon or direct-thermal method, DPI, sensor and downstream applicator must be reviewed together.",
      href: "/products/can-labels/blank",
      linkLabel: "Explore blank filling line labels",
      image: {
        slot: "can-labels:blank-hero",
        fallback: BLANK_ROLL_IMAGE,
        alt: "Blank filling line labels for variable-data printing and automatic application",
      },
    },
  ],
  sizes: canLabelSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets,
    badge: size.badge,
    use: size.use,
  })),
  applications: [
    {
      id: "beverage-lines",
      title: "Beverage bottling lines",
      description:
        "Roll labels for water, juice, tea, coffee and other beverage containers applied on controlled production lines.",
      confirm:
        "applicator, dry or wet bottle, empty or filled state, application temperature, condensation timing, line speed and label position",
      href: "#inquiry",
      linkLabel: "Review a beverage line",
      image: {
        slot: "can-labels:applications:beverage",
        fallback: BEVERAGE_IMAGE,
        alt: "Beverage bottles moving through a filling and labeling process",
      },
    },
    {
      id: "food-lines",
      title: "Food and sauce filling",
      description:
        "Machine-applied exterior labels for jars, bottles and rigid food containers with project-specific exposure review. Direct food contact is a separate scope.",
      confirm:
        "container material, filling temperature, surface contamination, oil or sauce contact, cleaning, storage and application position",
      href: "#inquiry",
      linkLabel: "Review a food filling line",
      image: {
        slot: "can-labels:applications:food",
        fallback: FOOD_IMAGE,
        alt: "Packaged food containers prepared for automatic labeling",
      },
    },
    {
      id: "personal-care-lines",
      title: "Personal-care filling lines",
      description:
        "Front, back or wraparound labels for cosmetics, shampoo, lotion and small curved containers.",
      confirm:
        "container stiffness and curvature, squeeze behavior, label panel, application position, product leakage and finish",
      href: "#inquiry",
      linkLabel: "Review a personal-care line",
      image: {
        slot: "can-labels:applications:pet-food",
        fallback: PERSONAL_CARE_IMAGE,
        alt: "Personal-care bottles using pressure-sensitive roll labels",
      },
    },
    {
      id: "household-lines",
      title: "Household-product filling",
      description:
        "Roll-label programs for cleaners, detergents and other household bottles using automatic applicators.",
      confirm:
        "HDPE or PET surface, bottle shape, splash or wipe exposure, chemical contact, line speed and required service life",
      href: "/products/detergent-labels",
      linkLabel: "Review household bottle labels",
      image: {
        slot: "can-labels:applications:paint",
        fallback: HOUSEHOLD_IMAGE,
        alt: "Household product bottles labeled on a filling line",
      },
    },
    {
      id: "industrial-lines",
      title: "Industrial liquid filling",
      description:
        "Machine-applied identification for lubricants, chemicals and industrial liquids after the real exposure is defined.",
      confirm:
        "liquid, concentration, splash or wipe method, contact time, temperature, abrasion, container surface and approval test",
      href: "#inquiry",
      linkLabel: "Start an industrial line review",
      image: {
        slot: "can-labels:applications:industrial",
        fallback: INDUSTRIAL_IMAGE,
        alt: "Industrial liquid containers prepared for automatic labeling",
      },
    },
    {
      id: "copacker-programs",
      title: "Co-packer and multi-SKU lines",
      description:
        "Controlled roll, artwork, carton and replacement identification for lines switching between brands, flavors or markets.",
      confirm:
        "shared construction, SKU list, quantity by version, revision code, roll ID, carton separation, changeover and obsolete-stock handling",
      href: "/oem",
      linkLabel: "Review an OEM supply program",
      image: {
        slot: "can-labels:applications:canning",
        fallback: COPACKER_IMAGE,
        alt: "Co-packer filling line managing multiple roll-label versions",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Container and surface",
      description: "Qualify adhesion and placement against the production container presented to the label head.",
      inputs: [
        "Container material, coating, shape, curvature and stiffness",
        "Actual container dimensions and available label panel",
        "Empty or filled; dry, wet, dusty or oily surface",
        "Application position and overlap allowance",
      ],
    },
    {
      step: "02",
      title: "Filling, labeling and exposure",
      description: "Define the production sequence and service conditions before selecting a construction.",
      inputs: [
        "Applicator brand, model, label head and sensor method",
        "Target and start-up line speed",
        "Filling, cooling, cleaning and handling sequence",
        "Application, storage and expected exposure conditions",
      ],
    },
    {
      step: "03",
      title: "Material, adhesive and finish",
      description: "Review each construction against the recorded container, process and exposure instead of assuming universal compatibility.",
      inputs: [
        "Paper, film or other face-stock preference",
        "Adhesive matched to the surface and application temperature",
        "Finish, print method and variable-data requirement",
        "Core, roll diameter, web, unwind, gap, liner and packing",
      ],
    },
    {
      step: "04",
      title: "Artwork, roll and commercial",
      description: "Use one approved specification from quotation through trial, production and reorders.",
      inputs: [
        "Artwork revision and quantity by SKU",
        "Proof, sample and first-roll trial requirement",
        "Acceptance criteria at target speed",
        "Minimum order, requested delivery window and destination",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "manufacturing:facility-line",
      fallback: MACHINE_LINE_IMAGE,
      alt: "Production line used to review machine-ready roll-label construction",
    },
    label: "Machine qualification",
    title: "Approve the first roll on the recorded applicator and container",
    description:
      "Applicator compatibility is a project-level result. Record the equipment, container, label construction, speed, continuous-run target and acceptance criteria instead of claiming one roll works on every machine.",
    checks: [
      {
        title: "Pre-installation check",
        description:
          "Verify core, outer diameter, web width, unwind, liner, splice, label orientation and the approved artwork revision.",
      },
      {
        title: "Low-speed setup",
        description:
          "Confirm sensing, release, placement and initial adhesion before increasing production speed.",
      },
      {
        title: "Target-speed run",
        description:
          "Record tension, skew, liner breaks, wrinkles, bubbles, stops and waste during a defined continuous run.",
      },
      {
        title: "Restart and approval",
        description:
          "Check positioning and sensor recovery after stopping, then record final settings, adjustments, samples and approver.",
      },
    ],
    note:
      "Changing the applicator, container, label size, face stock, adhesive, liner, unwind, gap, speed or sensor may require a new trial. Compatibility applies only to the recorded setup and conditions.",
  },
  faq: [
    {
      q: "What information is required for labels used on an automatic filling line?",
      a: "Provide the applicator brand and model, label position, target speed, core ID, maximum roll OD, web width, unwind, gap or pitch, liner, sensor method, container condition, label size and artwork. Photos of the roll path and an existing approved roll are also useful.",
    },
    {
      q: "Why is unwind direction important?",
      a: "The unwind direction determines which edge and artwork orientation reach the label head first. A wrong direction can place the label upside down, on the wrong panel or make the roll unusable without rewinding.",
    },
    {
      q: "How do core size and roll outer diameter affect the order?",
      a: "The core must fit the unwind shaft and the completed roll must stay within the machine's available diameter and weight. These values also affect labels per roll, changeover frequency, packing and freight.",
    },
    {
      q: "What causes a labeling machine to miss or stop on a roll?",
      a: "Common causes include an unsuitable gap or mark, transparent-label sensing, liner variation, excessive die-cut depth, wrong unwind, web-width mismatch, tension instability and container presentation. Diagnosis should use the recorded machine and roll setup.",
    },
    {
      q: "Can one roll-label construction work on every automatic applicator?",
      a: "No. Passing one setup does not prove universal compatibility. Applicator, sensor, liner, speed, web path, container and application position can change the result, so new setups may require another first-roll trial.",
    },
    {
      q: "Can labels be applied to cold or wet bottles after filling?",
      a: "That depends on the actual application temperature, water film, container material, adhesive and dwell time. Distinguish labels applied to a dry bottle before cooling from labels applied to a cold or wet bottle, then test the intended sequence.",
    },
    {
      q: "How are multiple SKUs controlled on a co-packer line?",
      a: "Give each artwork a controlled revision and quantity. Roll labels, cartons, replacement records and obsolete-stock handling should use the same version code to reduce mixing during line changeovers.",
    },
    {
      q: "What should a first-roll trial record?",
      a: "Record the equipment, container, roll construction, speed, run length, sensing, release, placement, adhesion, stops, waste, adjustments, final settings and approval result. The approved specification should then control production and reorders.",
    },
  ],
  inquiry: {
    label: "B2B filling-line label review",
    title: "Send the machine, roll and container inputs",
    description:
      "A complete line specification lets the team identify missing samples, trial requirements, construction risks and commercial inputs before quotation.",
    checklist: [
      "Applicator brand/model, label position, target speed and sensor method",
      "Core ID, maximum roll OD, web width, unwind, gap, liner and labels per roll",
      "Container material, shape, empty/filled state, surface condition and temperature",
      "Label construction, artwork versions, quantity by SKU, packing and destination",
      "Tender or technical-submission requirements, product data sheet, sample approval and acceptance criteria",
    ],
    productName: "Machine-Ready Roll Labels for Filling Lines",
    initialMessage:
      "Company and buyer type:\nProduct being filled:\nApplicator brand and model:\nLabel position and target line speed:\nContainer material, shape and dimensions:\nEmpty or filled at application:\nContainer surface: dry / wet / dusty / oily:\nApplication and storage temperature:\nLabel size, shape and material preference:\nCore ID and maximum roll OD:\nWeb width, gap/pitch and liner:\nUnwind direction and sensor method:\nLabels per roll and splice allowance:\nArtwork versions and quantity by SKU:\nFirst-roll trial and acceptance criteria:\nRoll/box and box/pallet packing:\nDestination country / port:\nRequested delivery window:\nCurrent line problem:",
    responseNote:
      "Compatibility, timing and evidence scope are confirmed after the line specification review.",
    successMessage:
      "We'll review your line specification, tender requirements and evidence needs, then reply with the next required step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Machine-Ready Roll Labels", path: "/products/can-labels" },
  ],
  relatedPrograms: [
    { label: "Custom Printed Thermal Labels", href: "/products/custom-printed-thermal-labels" },
    { label: "Bottle and Household Labels", href: "/products/detergent-labels" },
    { label: "Linerless Labels", href: "/products/linerless-labels" },
    { label: "OEM and Private Label", href: "/oem" },
  ],
} satisfies ProductCategoryConfig;

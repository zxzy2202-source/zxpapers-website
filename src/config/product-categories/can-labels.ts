import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";

const MACHINE_LINE_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const PRINTED_ROLL_IMAGE =
  "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&q=82";
const BLANK_ROLL_IMAGE =
  "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&q=82";
const CLEAR_FILM_IMAGE =
  "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=82";
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
      "Specify roll labels for automatic filling and labeling lines by applicator, core ID, roll OD, web width, unwind, gap, liner, sensor, speed and container condition.",
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
      { value: "6 series", label: "Machine-ready product routes" },
      { value: "1 spec", label: "Quote-to-production control" },
      { value: "4 stages", label: "Line qualification" },
      { value: "B2B", label: "OEM and co-packer supply" },
    ],
    primaryCta: { label: "Review Line Requirements", href: "#selection-guide" },
    secondaryCta: { label: "Request a Roll-Label Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Supply Routes", href: "#product-families" },
    { label: "Applications", href: "#applications" },
    { label: "Line Checklist", href: "#selection-guide" },
    { label: "Trial", href: "#qualification" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Machine-ready product series",
      title: "Choose by label format and production workflow",
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
      label: "Core product series",
      title: "Custom Printed Roll Labels for Automatic Applicators",
      description:
        "Finished pressure-sensitive labels supplied to an approved artwork, material construction, die-cut and machine-ready roll specification.",
      buyerFit:
        "Best for brands, filling plants and co-packers that need repeatable color, finish, roll geometry, artwork revision and carton identification.",
      href: "#inquiry",
      linkLabel: "Specify custom printed rolls",
      featured: true,
      image: {
        slot: "can-labels:custom-hero",
        fallback: PRINTED_ROLL_IMAGE,
        alt: "Custom printed roll labels prepared for automatic application",
      },
    },
    {
      id: "wraparound",
      label: "Single-label bottle format",
      title: "Wraparound Roll Labels",
      description:
        "Full-wrap or near-wrap labels for cylindrical bottles and jars, supplied with controlled overlap, gap, orientation and seam position.",
      buyerFit:
        "Best for stable round containers. Confirm across x around dimensions, bottle roundness, label stiffness, overlap or gap and wrap-belt setup.",
      href: "#inquiry",
      linkLabel: "Review a wraparound format",
      image: {
        slot: "can-labels:series:wraparound",
        fallback: BEVERAGE_IMAGE,
        alt: "Wraparound roll labels for cylindrical bottles on an automatic line",
      },
    },
    {
      id: "front-back",
      label: "Paired label format",
      title: "Front and Back Label Sets",
      description:
        "Coordinated front and back labels supplied as separate or paired rolls for applicators placing two panels on one container.",
      buyerFit:
        "Best for bottles needing a branded front panel and regulatory back panel. Confirm pitch, relative orientation, two-head setup and changeover controls.",
      href: "#inquiry",
      linkLabel: "Specify a front/back set",
      image: {
        slot: "can-labels:series:front-back",
        fallback: PERSONAL_CARE_IMAGE,
        alt: "Front and back bottle label set prepared for automatic application",
      },
    },
    {
      id: "clear-film",
      label: "Sensor-critical construction",
      title: "Clear Film Machine-Ready Labels",
      description:
        "Transparent film labels for a no-label-look appearance, qualified with the liner, gap or mark and the actual label sensor.",
      buyerFit:
        "Best for clear PET or glass packaging. White ink, barcode contrast, trapped air and sensing must be approved on the intended line.",
      href: "#inquiry",
      linkLabel: "Review clear-film sensing",
      image: {
        slot: "can-labels:series:clear-film",
        fallback: CLEAR_FILM_IMAGE,
        alt: "Clear film labels for transparent bottles and automatic label sensing",
      },
    },
    {
      id: "blank-variable-data",
      label: "On-demand print route",
      title: "Blank and Variable-Data Roll Labels",
      description:
        "Blank or preprinted rolls for adding batch, barcode, date or serial data before automatic application.",
      buyerFit:
        "Best for plants controlling data in-house. Printer, ribbon or direct-thermal method, DPI, sensor and downstream applicator must be reviewed together.",
      href: "#inquiry",
      linkLabel: "Confirm printer and applicator",
      image: {
        slot: "can-labels:blank-hero",
        fallback: BLANK_ROLL_IMAGE,
        alt: "Blank roll labels for variable-data printing and automatic application",
      },
    },
    {
      id: "multi-sku",
      label: "Version-controlled supply",
      title: "Multi-SKU Short-Run Roll Labels",
      description:
        "Controlled short runs for multiple flavors, capacities, languages or markets sharing compatible construction and roll specifications.",
      buyerFit:
        "Best for launches and co-packers reducing per-version inventory. SKU codes, quantities, revisions, roll IDs and carton separation are required.",
      href: "#inquiry",
      linkLabel: "Review a multi-SKU order",
      image: {
        slot: "can-labels:series:multi-sku",
        fallback: COPACKER_IMAGE,
        alt: "Multiple roll-label versions controlled for a co-packer filling line",
      },
    },
  ],
  sizes: [],
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
        "Machine-applied labels for jars, bottles and rigid food containers with project-specific exposure review.",
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
      title: "Applicator and line",
      description: "Identify the target equipment and operating condition before setting the roll format.",
      inputs: [
        "Applicator brand, model and label head",
        "Target and start-up line speed",
        "Front, back, wraparound or top application",
        "Gap, black-mark or other sensor method",
      ],
    },
    {
      step: "02",
      title: "Roll construction",
      description: "Match the roll to the machine's physical limits and web path.",
      inputs: [
        "Core ID and maximum roll outer diameter",
        "Web width, gap or pitch and labels per roll",
        "Unwind direction and label orientation",
        "Liner, splice allowance and roll packing",
      ],
    },
    {
      step: "03",
      title: "Container and process",
      description: "Qualify adhesion and placement against the real container presented to the label head.",
      inputs: [
        "Container material, shape, curvature and stiffness",
        "Empty or filled; dry, wet, dusty or oily surface",
        "Application and storage temperature",
        "Filling, cooling, cleaning and handling sequence",
      ],
    },
    {
      step: "04",
      title: "Artwork, trial and control",
      description: "Use one approved specification from quotation through production and reorders.",
      inputs: [
        "Artwork revision and SKU quantity",
        "Proof, sample and first-roll trial requirement",
        "Acceptance criteria at target speed",
        "Roll, carton and replacement identification",
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
    ],
    productName: "Machine-Ready Roll Labels for Filling Lines",
    initialMessage:
      "Company and buyer type:\nProduct being filled:\nApplicator brand and model:\nLabel position and target line speed:\nContainer material, shape and dimensions:\nEmpty or filled at application:\nContainer surface: dry / wet / dusty / oily:\nApplication and storage temperature:\nLabel size, shape and material preference:\nCore ID and maximum roll OD:\nWeb width, gap/pitch and liner:\nUnwind direction and sensor method:\nLabels per roll and splice allowance:\nArtwork versions and quantity by SKU:\nFirst-roll trial and acceptance criteria:\nRoll/box and box/pallet packing:\nDestination country / port:\nRequested delivery window:\nCurrent line problem:",
    responseNote:
      "Compatibility, timing and evidence scope are confirmed after the line specification review.",
    successMessage:
      "We'll review your line specification and reply with the next required step.",
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

import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { DETERGENT_LABELS_IMG, detergentLabelSizes } from "@/app/products/detergent-labels/detergent-labels-data";

const LAUNDRY_IMAGE = "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200&q=82";
const DISHWASH_IMAGE = "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1200&q=82";
const CLEANER_IMAGE = "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200&q=82";
const HANDSOAP_IMAGE = "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=1200&q=82";
const INDUSTRIAL_IMAGE = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=82";
const REFILL_IMAGE = "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=1200&q=82";
const PET_IMAGE = "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=82";
const MACHINE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

export const detergentLabelsCategoryConfig: ProductCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/detergent-labels",
  categoryName: "Detergent & Household Product Labels",
  alternateNames: [
    "Custom Cleaning Product Labels",
    "Laundry Detergent Labels",
    "Household Chemical Bottle Labels",
    "Cleaning Product Bottle Labels",
  ],
  audience:
    "Detergent and cleaning brands, OEM/ODM manufacturers, co-packers, packaging procurement teams, quality teams, and label distributors",
  metadata: {
    title: "Custom Detergent & Cleaning Product Labels | B2B",
    description:
      "Custom printed and blank labels for detergent, cleaner, disinfectant and personal-care bottles. Select by container, formula exposure, application method and required test evidence.",
    keywords: [
      "custom detergent labels",
      "cleaning product bottle labels",
      "laundry detergent labels",
      "household chemical labels",
      "HDPE bottle labels",
      "PET bottle labels",
      "OEM cleaning product labels",
      "private label detergent packaging",
    ],
  },
  hero: {
    image: {
      slot: "detergent-labels:hero",
      fallback: DETERGENT_LABELS_IMG,
      alt: "Custom labels specified for detergent and household cleaning product bottles",
    },
    badge: "B2B bottle-label program",
    titleBefore: "Custom Detergent & Household Labels for ",
    titleHighlight: "Bottles and Containers",
    description:
      "Choose a label route by bottle material, formula contact, wet handling and application method. We help brands, OEMs and co-packers define the construction, artwork and test plan before repeat production.",
    trustBadges: [
      "HDPE and PET fit review",
      "Formula-contact test planning",
      "Printed and blank routes",
      "Manual or machine application",
    ],
    facts: [
      { value: "7 series", label: "Product and supply routes" },
      { value: "5 formats", label: "Reference dimensions" },
      { value: "4 steps", label: "Specification sequence" },
      { value: "B2B", label: "OEM and co-packer sourcing" },
    ],
    primaryCta: { label: "Review Bottle Requirements", href: "#selection-guide" },
    secondaryCta: { label: "Request a Compatibility Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Product Series", href: "#product-families" },
    { label: "Formats", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Selection Guide", href: "#selection-guide" },
    { label: "Testing", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Bottle-label product series",
      title: "Choose by product and packaging workflow",
      description:
        "Start with the product family that matches the bottle, label job and supply route. Face stock, adhesive, finish, die-cut and packing are confirmed against the actual container and formula.",
    },
    sizes: {
      label: "Reference label formats",
      title: "Use dimensions as a starting point, not a performance approval",
      description:
        "These formats help a buyer compare front, tall, square, wraparound and back-panel jobs. Final size must leave the required panel, radius, copy and application tolerance on the real pack.",
    },
    applications: {
      label: "Container and use routes",
      title: "Match the label to the bottle, formula and handling",
      description:
        "HDPE squeeze bottles, PET containers, trigger sprays, refill packs and industrial jerrycans create different adhesion and handling risks. Select the closest route, then send the actual pack and formula conditions for review.",
    },
    selection: {
      label: "Four-step bottle qualification",
      title: "Build the specification in the order a quality team can approve",
      description:
        "Define the exposure and container first, then select the construction and finish. This keeps a sample, quotation and production reorder tied to the same evidence.",
    },
  },
  families: [
    {
      id: "custom-printed",
      label: "Core product series",
      title: "Custom Printed Detergent & Household Labels",
      description:
        "Printed pressure-sensitive labels for brand, usage, dosage, barcode and approved market information on bottles and rigid containers.",
      buyerFit:
        "Best for detergent brands, OEM/ODM programs and co-packers that need repeatable artwork, SKU control and a documented sample approval.",
      href: "#inquiry",
      linkLabel: "Specify a printed label program",
      featured: true,
      image: {
        slot: "detergent-labels:series:custom",
        fallback: DETERGENT_LABELS_IMG,
        alt: "Custom printed detergent labels arranged for a household cleaning product range",
      },
    },
    {
      id: "laundry-fabric",
      label: "Fabric care",
      title: "Laundry & Fabric Care Labels",
      description: "Front, back and wraparound labels for laundry detergent, softener, stain remover and fabric-care bottles.",
      buyerFit: "Confirm bottle squeeze, wet hands, leakage, repeated wiping, storage temperature and the actual formula before selecting adhesive and finish.",
      href: "#inquiry",
      linkLabel: "Review a laundry bottle",
      image: { slot: "detergent-labels:series:laundry", fallback: LAUNDRY_IMAGE, alt: "Laundry detergent and fabric-care bottles with printed labels" },
    },
    {
      id: "dish-kitchen",
      label: "Kitchen care",
      title: "Dishwashing & Kitchen Cleaner Labels",
      description: "Label constructions for dish soap, dishwasher products, degreasers and kitchen surface cleaners.",
      buyerFit: "Confirm oil or detergent splash, wet dispensing areas, curved surfaces and whether the label is applied before or after filling.",
      href: "#inquiry",
      linkLabel: "Review a kitchen-care label",
      image: { slot: "detergent-labels:series:dishwashing", fallback: DISHWASH_IMAGE, alt: "Dishwashing liquid and kitchen cleaner bottles with product labels" },
    },
    {
      id: "household-cleaner",
      label: "Household care",
      title: "Household Cleaner & Disinfectant Labels",
      description: "Front, back and wrap labels for sprays, trigger bottles and other household cleaning products.",
      buyerFit: "Formula concentration, splash or immersion, wiping method, bottle flexibility and required service life determine the test plan.",
      href: "#inquiry",
      linkLabel: "Review a cleaner label",
      image: { slot: "detergent-labels:series:household", fallback: CLEANER_IMAGE, alt: "Household cleaner and disinfectant bottles with labeled packaging" },
    },
    {
      id: "personal-care",
      label: "Adjacent bottle route",
      title: "Hand Soap & Personal-Care Bottle Labels",
      description: "Printed labels for hand soap, body wash, shampoo and other pump or squeeze bottle programs.",
      buyerFit: "Confirm repeated handling, pump clearance, squeeze recovery, moisture and cosmetic surface expectations before approval.",
      href: "#inquiry",
      linkLabel: "Review a personal-care label",
      image: { slot: "detergent-labels:series:personal-care", fallback: HANDSOAP_IMAGE, alt: "Hand soap and personal-care bottles prepared for printed labeling" },
    },
    {
      id: "industrial-chemical",
      label: "Industrial route",
      title: "Industrial Cleaner & Chemical Container Labels",
      description: "Identification and hazard-information label programs for industrial cleaners, lubricants and chemical containers.",
      buyerFit: "The container, concentration, temperature, abrasion, storage period and customer-approved classification text must be defined before material claims.",
      href: "#inquiry",
      linkLabel: "Start an industrial review",
      image: { slot: "detergent-labels:series:industrial", fallback: INDUSTRIAL_IMAGE, alt: "Industrial chemical container label program under specification review" },
    },
    {
      id: "blank-variable",
      label: "On-demand route",
      title: "Blank & Variable-Data Bottle Labels",
      description: "Blank or preprinted labels for adding batch, date, barcode, serial or market data in-house.",
      buyerFit: "Confirm the printer, ribbon or ink system, print resolution, sensor marks, label finish and downstream application method together.",
      href: "#inquiry",
      linkLabel: "Confirm the blank route",
      image: { slot: "detergent-labels:series:blank-variable", fallback: PET_IMAGE, alt: "Blank bottle labels prepared for variable data printing" },
    },
  ],
  sizes: detergentLabelSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: "Reference format",
    badge: size.badge,
    use:
      size.slug === "90x120mm"
        ? "Front panel for common detergent and cleaner bottles."
        : size.slug === "80x150mm"
          ? "Tall panel for larger bottles and spray formats."
          : size.slug === "100x100mm"
            ? "Square panel for tubs, cartons and compact packs."
            : size.slug === "70x200mm"
              ? "Wraparound starting point for cylindrical containers."
              : "Back panel for instructions, dosage and approved market copy.",
  })),
  applications: [
    {
      id: "hdpe-squeeze",
      title: "HDPE and LDPE squeeze bottles",
      description: "Laundry, dishwashing and cleaner bottles that flex during dispensing and are handled with wet hands.",
      confirm: "bottle grade, panel radius, squeeze recovery, leakage, wet handling, formula splash and wipe method",
      href: "#inquiry",
      linkLabel: "Review an HDPE bottle",
      image: { slot: "detergent-labels:applications:laundry", fallback: LAUNDRY_IMAGE, alt: "Flexible detergent bottle prepared for label compatibility review" },
    },
    {
      id: "pet-clear",
      title: "PET and clear rigid bottles",
      description: "Clear or rigid PET bottles where appearance, panel fit, barcode contrast and surface cleanliness matter.",
      confirm: "surface energy, curvature, clear-film or white-face route, air entrapment, barcode contrast and application temperature",
      href: "#inquiry",
      linkLabel: "Review a PET bottle",
      image: { slot: "detergent-labels:applications:pet", fallback: PET_IMAGE, alt: "Clear PET bottle prepared for printed label application" },
    },
    {
      id: "spray-trigger",
      title: "Spray and trigger bottles",
      description: "Bathroom, glass, kitchen and disinfectant sprays with a front panel that must clear the trigger and survive handling.",
      confirm: "trigger clearance, shoulder geometry, spray leakage, repeated wiping, formula exposure and label position",
      href: "#inquiry",
      linkLabel: "Review a spray bottle",
      image: { slot: "detergent-labels:applications:spray", fallback: CLEANER_IMAGE, alt: "Trigger spray cleaner bottle with a front label area" },
    },
    {
      id: "industrial-jerrycan",
      title: "Industrial jerrycans and rigid containers",
      description: "Larger-format cleaning and chemical containers requiring identification, handling and storage review.",
      confirm: "container texture, handle clearance, chemical contact, abrasion, outdoor or warehouse storage and approved text",
      href: "#inquiry",
      linkLabel: "Review an industrial container",
      image: { slot: "detergent-labels:applications:industrial", fallback: INDUSTRIAL_IMAGE, alt: "Industrial cleaner container prepared for label specification" },
    },
    {
      id: "refill-soft-pack",
      title: "Refill pouches and soft packs",
      description: "Refill and flexible packs where creasing, seal placement and changing pouch shape affect label performance.",
      confirm: "film structure, crease zones, seal edges, pouch fullness, formula contact, storage and manual or machine application",
      href: "#inquiry",
      linkLabel: "Review a refill pack",
      image: { slot: "detergent-labels:applications:refill", fallback: REFILL_IMAGE, alt: "Refill pouch packaging prepared for label review" },
    },
    {
      id: "filling-line",
      title: "Automatic filling and labeling lines",
      description: "For products that move through a line, label fit must be reviewed with the applicator, roll and container presentation.",
      confirm: "applicator model, core, roll OD, web width, unwind, gap, liner, sensor, speed and wet or dry container state",
      href: "/products/can-labels",
      linkLabel: "Review filling-line roll labels",
      image: { slot: "detergent-labels:applications:filling-line", fallback: MACHINE_IMAGE, alt: "Automatic filling and labeling line for household products" },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Product and exposure",
      description: "Describe what the label sees during filling, use, storage and cleaning.",
      inputs: ["Formula name and concentration", "Splash, wipe, immersion or leakage", "Contact time and temperature", "Expected service life and storage"],
    },
    {
      step: "02",
      title: "Container and surface",
      description: "Record the actual pack, not only the package category.",
      inputs: ["HDPE, LDPE, PET, glass or flexible film", "Panel width, radius and bottle flexibility", "Dry, wet, dusty or oily surface", "Bottle drawing, sample or clear photos"],
    },
    {
      step: "03",
      title: "Construction and finish",
      description: "Choose the material, adhesive and appearance route that is worth testing.",
      inputs: ["Paper, BOPP, PE, clear film or other face stock", "Adhesive route and initial tack target", "Gloss, matte, laminate or special finish", "Barcode, QR, copy density and die-cut"],
    },
    {
      step: "04",
      title: "Artwork, test and supply",
      description: "Connect the approved label to production, packing and repeat orders.",
      inputs: ["Customer-approved artwork and hazard text", "Manual or automatic application", "Sample and formula-contact test criteria", "Quantity, roll or sheet packing, destination and reorder control"],
    },
  ],
  evidence: {
    image: { slot: "manufacturing:facility-line", fallback: MACHINE_IMAGE, alt: "Label production and quality review for a B2B packaging program" },
    label: "Evidence before repeat supply",
    title: "Approve the actual bottle, formula and handling condition",
    description: "A material name or laminate does not prove resistance to every detergent or chemical. The useful result is a recorded test on the actual container, formula, contact method and time period required by the buyer.",
    checks: [
      { title: "Container adhesion", description: "Check initial tack, edge lift, bubbles and panel fit on the supplied HDPE, LDPE, PET, glass or film pack." },
      { title: "Formula contact", description: "Use the real formula and concentration for splash, wipe or immersion checks instead of a generic water-only test." },
      { title: "Wet and squeeze handling", description: "Repeat the use motion that matters: wet hands, bottle squeeze, trigger handling, wiping or leakage." },
      { title: "Machine trial", description: "For automatic application, record sensing, speed, placement, stoppages, start-up and restart behaviour on the intended line." },
    ],
    note: "The customer owns classification, hazard communication and market approval. We reproduce the approved artwork and can help organize the sample and test record for the specified use case.",
  },
  faq: [
    { q: "What information should I send for a detergent label quotation?", a: "Send the bottle material and drawing or photos, label panel size, formula or exposure type, application method, artwork status, quantity by SKU, finish, packing and destination. If the label runs on a machine, include the applicator model, roll core, roll OD, web width, unwind, gap and sensor method." },
    { q: "Are these labels automatically waterproof or chemical-resistant?", a: "No universal claim is appropriate. Resistance depends on the face stock, adhesive, finish, container, formula, concentration, contact time and handling. We can recommend a starting construction and define an actual formula-contact test." },
    { q: "Can you label HDPE and LDPE detergent bottles?", a: "Yes, they are common project surfaces, but low-surface-energy plastic, squeeze behaviour, mold release and wet handling can change adhesion. Provide the real bottle and usage condition so the construction can be tested rather than assumed." },
    { q: "Can you print GHS or other regulatory information?", a: "We can print customer-approved hazard, dosage, ingredient, barcode and market information. The customer or responsible brand owner must approve the classification, wording, symbols and target-market requirements before production." },
    { q: "Which label format is best for my bottle?", a: "Use 90 × 120mm as a front-panel starting point, 80 × 150mm for tall bottles, 100 × 100mm for square packs, 70 × 200mm for a wraparound starting point and 120 × 80mm for a back panel. Final dimensions depend on the usable panel, radius, copy and application tolerance." },
    { q: "Can you supply blank labels for in-house printing?", a: "Yes. Blank or preprinted routes can be reviewed for the printer, ribbon or ink system, resolution, sensor marks, face finish and downstream manual or automatic application. A blank label still needs to be qualified for the actual bottle and printer." },
    { q: "Do you support OEM, private label and co-packer programs?", a: "Yes. We can organize artwork revisions, SKU and language separation, samples, roll or sheet packing, carton identification and reorder controls. The quote should list each version and its quantity so obsolete or mixed stock is avoided." },
    { q: "What does a compatibility test prove?", a: "It proves the recorded label construction under the recorded bottle, formula, contact method, temperature, time and application process. A passed sample does not automatically cover a different formula, container, label size or machine setup." },
  ],
  inquiry: {
    label: "B2B quotation brief",
    title: "Send the bottle and formula details for a useful first review",
    description: "The more of the following you can share, the faster the discussion can move from a generic label quote to a construction and test plan your team can approve.",
    checklist: ["Product and formula or SDS/contact description", "Bottle material, drawing, photos and panel dimensions", "Label size, shape, face stock and finish preference", "Manual, semi-automatic or automatic application", "Artwork, barcode/QR and customer-approved market copy", "SKU quantity, packing, destination and timing"],
    productName: "Detergent & Household Product Labels",
    initialMessage: "Hello, I need B2B labels for detergent or household cleaning products. I can share the product/formula, bottle material and dimensions, label size, application method, artwork, quantity, packing and destination. Please advise a suitable starting construction and compatibility test plan.",
    responseNote: "We will use your information to confirm the route, identify missing test inputs and prepare the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Detergent & Household Labels", path: "/products/detergent-labels" },
  ],
  relatedPrograms: [
    { label: "Machine-Ready Filling Line Labels", href: "/products/can-labels" },
    { label: "Product Labels", href: "/products/product-labels" },
    { label: "Custom Printed Thermal Labels", href: "/products/custom-printed-thermal-labels" },
    { label: "OEM & Private Label Supply", href: "/oem" },
  ],
};

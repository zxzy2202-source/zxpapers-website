import { r2Image } from "@/lib/r2";

const FACTORY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";
const FACTORY_LINE_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const THERMAL_ROLLS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const THERMAL_LABELS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const SHIPPING_LABELS_HERO_IMAGE = THERMAL_LABELS_IMAGE;
const SHIPPING_LABELS_OVERVIEW_IMAGE =
  "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=1200&q=80";
const SHIPPING_LABELS_RISK_IMAGE =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80";
const SHIPPING_LABELS_ROLL_IMAGE = THERMAL_LABELS_IMAGE;
const SHIPPING_LABELS_FANFOLD_IMAGE = THERMAL_LABELS_IMAGE;
const SHIPPING_LABELS_APPLICATION_IMAGE =
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80";
const SHIPPING_LABELS_QUALITY_IMAGE = FACTORY_LINE_IMAGE;
const SHIPPING_LABELS_PACKING_IMAGE =
  "/uploads/images/1778755819135-456d030e-f44b-453b-86bb-69c736ef4e12-32b6c697519b48fc814b3a4712323de2.webp";
const CAN_LABELS_IMAGE =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80";
const DETERGENT_LABELS_IMAGE =
  "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800&q=80";
const NCR_FORMS_IMAGE =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80";
const NCR_OVERVIEW_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=82";
const NCR_BOOKS_IMAGE =
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1000&q=82";
const NCR_CONTINUOUS_IMAGE =
  "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1000&q=82";
const NCR_DELIVERY_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=82";
const NCR_RECEIPT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=82";
const NCR_RECEIPT_OVERVIEW_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=82";
const NCR_RECEIPT_RISK_IMAGE =
  "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1000&q=82";
const NCR_RECEIPT_2_PART_IMAGE =
  "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=1000&q=82";
const NCR_RECEIPT_3_PART_IMAGE =
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1000&q=82";
const NCR_RECEIPT_PRIVATE_LABEL_IMAGE =
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1000&q=82";
const NCR_RECEIPT_PACKING_IMAGE =
  "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1000&q=82";
const NCR_INVOICE_HERO_IMAGE =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=82";
const NCR_INVOICE_OVERVIEW_IMAGE =
  "/images/ncr-invoice-books/numbered-multipart-invoice-book.webp";
const NCR_INVOICE_RISK_IMAGE =
  "/images/ncr-invoice-books/numbered-multipart-invoice-book.webp";
const NCR_INVOICE_2_PART_IMAGE =
  "/images/ncr-invoice-books/custom-order-form-pad.webp";
const NCR_INVOICE_3_PART_IMAGE =
  "/images/ncr-invoice-books/triplicate-order-form-book.webp";
const NCR_INVOICE_PRIVATE_LABEL_IMAGE =
  "/images/ncr-invoice-books/custom-carbonless-invoice-book.webp";
const NCR_INVOICE_PACKING_IMAGE =
  "/uploads/images/1778755819135-456d030e-f44b-453b-86bb-69c736ef4e12-32b6c697519b48fc814b3a4712323de2.webp";
const AUTO_REPAIR_INSPECTION_IMAGE =
  "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1000&q=82";
const AUTO_REPAIR_ORDER_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=82";
const AUTO_REPAIR_DAMAGE_IMAGE =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=82";
const AUTO_REPAIR_AUTHORIZATION_IMAGE =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=82";
const AUTO_REPAIR_INVOICE_IMAGE =
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1000&q=82";
const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80";

const applicationDefaults: Record<string, string> = {
  "ncr-applications:government-ncr-forms:hero":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
  "ncr-applications:port-customs-air-cargo-ncr-forms:hero":
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80",
  "ncr-applications:field-service-ncr-forms:hero":
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80",
  "ncr-applications:auto-repair-ncr-forms:hero":
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80",
  "ncr-applications:logistics-warehouse-ncr-forms:hero":
    "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80",
  "ncr-applications:medical-pharmacy-ncr-forms:hero":
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
  "thermal-labels:applications:ecommerce":
    "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&q=80",
  "thermal-labels:applications:amazon":
    "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&q=80",
  "thermal-labels:applications:shipping":
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
  "thermal-labels:applications:logistics":
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
  "thermal-labels:applications:warehouse":
    "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
  "thermal-labels:applications:crossborder":
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
  "thermal-labels:applications:barcode":
    "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=600&q=80",
  "thermal-labels:applications:inventory":
    "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80",
  "thermal-labels:applications:retail":
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80",
  "thermal-labels:applications:product":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  "thermal-labels:applications:asset":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  "thermal-labels:applications:packaging":
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
  "thermal-labels:applications:food":
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
  "thermal-labels:applications:pharmacy":
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
  "thermal-labels:applications:europe":
    "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=600&q=80",

  "thermal-rolls:applications:pos":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  "thermal-rolls:applications:restaurant":
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  "thermal-rolls:applications:retail":
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80",
  "thermal-rolls:applications:supermarket":
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
  "thermal-rolls:applications:hotel":
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  "thermal-rolls:applications:taxi":
    "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600&q=80",
  "thermal-rolls:applications:parking":
    "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80",
  "thermal-rolls:applications:mobile":
    "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600&q=80",
  "thermal-rolls:applications:handheld":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  "thermal-rolls:applications:lottery":
    "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=600&q=80",
  "thermal-rolls:applications:hospitality":
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
  "thermal-rolls:applications:kiosk":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  "thermal-rolls:applications:credit-card":
    "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80",

  "can-labels:applications:beverage":
    "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80",
  "can-labels:applications:food":
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
  "can-labels:applications:canning":
    "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
  "can-labels:applications:retail":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  "can-labels:applications:pet-food":
    "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600&q=80",
  "can-labels:applications:industrial":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  "can-labels:applications:chemical":
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  "can-labels:applications:paint":
    "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80",
  "can-labels:applications:seafood":
    "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
  "can-labels:applications:vegetable":
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",

  "detergent-labels:applications:laundry":
    "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80",
  "detergent-labels:applications:dishwash":
    "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80",
  "detergent-labels:applications:cleaner":
    "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80",
  "detergent-labels:applications:handsoap":
    "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=600&q=80",
  "detergent-labels:applications:industrial":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  "detergent-labels:applications:retail":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  "detergent-labels:applications:fabric":
    "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&q=80",
  "detergent-labels:applications:bathroom":
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
  "detergent-labels:applications:kitchen":
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  "detergent-labels:applications:hotel":
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",

  "resources:application-cases-retail-pos":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  "resources:application-cases-food-service":
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  "resources:application-cases-logistics":
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  "resources:application-cases-healthcare":
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  "resources:application-cases-parking":
    "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80",
  "resources:application-cases-banking":
    "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80",
};

const marketDefaults: Record<string, string> = {
  "markets:southeast-asia-hero":
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1400&q=80",
  "markets:thailand-hero":
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1400&q=80",
  "markets:indonesia-hero":
    "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1400&q=80",
  "markets:vietnam-hero":
    "https://images.unsplash.com/photo-1528127269322-539801943592?w=1400&q=80",
  "markets:philippines-hero":
    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1400&q=80",
  "markets:malaysia-hero":
    "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=1400&q=80",
  "markets:singapore-hero":
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1400&q=80",
  "markets:middle-east-hero":
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80",
  "markets:middle-east-africa-hero":
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80",
  "markets:uae-hero":
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=60",
  "markets:saudi-arabia-hero":
    "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1400&q=80",
  "markets:egypt-hero":
    "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1400&q=80",
  "markets:turkey-hero":
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1400&q=80",
  "markets:africa-hero":
    "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1400&q=80",
  "markets:ghana-hero":
    "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1400&q=80",
  "markets:kenya-hero":
    "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1400&q=80",
  "markets:nigeria-hero":
    "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=1400&q=80",
  "markets:ethiopia-hero":
    "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1400&q=80",
  "markets:south-africa-hero":
    "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1400&q=80",
  "markets:tanzania-hero":
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1400&q=80",
};

const exactDefaults: Record<string, string> = {
  "about:factory-aerial": FACTORY_IMAGE,
  "about:factory-line": FACTORY_LINE_IMAGE,
  "contact:hero": CONTACT_IMAGE,
  "home:product-labels": THERMAL_LABELS_IMAGE,
  "home:product-rolls": THERMAL_ROLLS_IMAGE,
  "home:product-pos-receipt-rolls": THERMAL_ROLLS_IMAGE,
  "home:product-portable-mobile-printer-rolls": THERMAL_ROLLS_IMAGE,
  "home:product-phenol-free-thermal-paper": THERMAL_ROLLS_IMAGE,
  "home:product-custom-printed-rolls": THERMAL_ROLLS_IMAGE,
  "home:product-atm-banking-rolls": THERMAL_ROLLS_IMAGE,
  "home:product-blank-thermal-rolls": THERMAL_ROLLS_IMAGE,
  "home:product-blank-thermal-labels": THERMAL_LABELS_IMAGE,
  "home:product-4x6-shipping-labels": THERMAL_LABELS_IMAGE,
  "home:product-barcode-thermal-labels": THERMAL_LABELS_IMAGE,
  "home:product-custom-printed-labels": THERMAL_LABELS_IMAGE,
  "home:product-4x3-thermal-labels": THERMAL_LABELS_IMAGE,
  "home:product-2x4-thermal-labels": THERMAL_LABELS_IMAGE,
  "home:product-lottery-gaming-rolls": THERMAL_ROLLS_IMAGE,
  "home:product-colored-thermal-paper": THERMAL_ROLLS_IMAGE,
  "home:product-coreless-paper-roll": THERMAL_ROLLS_IMAGE,
  "home:product-multi-ply-carbonless-rolls": NCR_FORMS_IMAGE,
  "home:product-oem-printed-receipts": THERMAL_ROLLS_IMAGE,
  "home:category-thermal-rolls": THERMAL_ROLLS_IMAGE,
  "home:category-thermal-labels": THERMAL_LABELS_IMAGE,
  "home:category-can-labels": THERMAL_LABELS_IMAGE,
  "home:category-bottle-labels": THERMAL_LABELS_IMAGE,
  "home:category-carbonless": NCR_FORMS_IMAGE,
  "home:category-jumbo-rolls": FACTORY_LINE_IMAGE,
  "home:category-custom-rolls": THERMAL_ROLLS_IMAGE,
  "products:hero": FACTORY_IMAGE,
  "products:thermal-rolls": THERMAL_ROLLS_IMAGE,
  "products:thermal-labels": THERMAL_LABELS_IMAGE,
  "products:can-labels": CAN_LABELS_IMAGE,
  "products:detergent-labels": DETERGENT_LABELS_IMAGE,
  "products:ncr-forms": NCR_FORMS_IMAGE,
  "thermal-rolls:hero": THERMAL_ROLLS_IMAGE,
  "thermal-paper-rolls:blank-hero": THERMAL_ROLLS_IMAGE,
  "thermal-paper-rolls:custom-hero": THERMAL_ROLLS_IMAGE,
  "thermal-labels:hero": THERMAL_LABELS_IMAGE,
  "thermal-labels:blank-hero": THERMAL_LABELS_IMAGE,
  "thermal-labels:custom-hero": THERMAL_LABELS_IMAGE,
  "shipping-labels:hero": SHIPPING_LABELS_HERO_IMAGE,
  "shipping-labels:overview": SHIPPING_LABELS_OVERVIEW_IMAGE,
  "shipping-labels:failure-risks": SHIPPING_LABELS_RISK_IMAGE,
  "shipping-labels:rolls": SHIPPING_LABELS_ROLL_IMAGE,
  "shipping-labels:fanfold": SHIPPING_LABELS_FANFOLD_IMAGE,
  "shipping-labels:applications": SHIPPING_LABELS_APPLICATION_IMAGE,
  "shipping-labels:quality-control": SHIPPING_LABELS_QUALITY_IMAGE,
  "shipping-labels:packing": SHIPPING_LABELS_PACKING_IMAGE,
  "linerless-labels:hero": THERMAL_LABELS_IMAGE,
  "can-labels:hero": CAN_LABELS_IMAGE,
  "can-labels:blank-hero": CAN_LABELS_IMAGE,
  "can-labels:custom-hero": CAN_LABELS_IMAGE,
  "detergent-labels:hero": DETERGENT_LABELS_IMAGE,
  "detergent-labels:blank-hero": DETERGENT_LABELS_IMAGE,
  "detergent-labels:custom-hero": DETERGENT_LABELS_IMAGE,
  "ncr-forms:hero": NCR_FORMS_IMAGE,
  "ncr-forms:overview": NCR_OVERVIEW_IMAGE,
  "ncr-forms:books": NCR_BOOKS_IMAGE,
  "ncr-forms:continuous": NCR_CONTINUOUS_IMAGE,
  "ncr-forms:delivery": NCR_DELIVERY_IMAGE,
  "ncr-forms:production": FACTORY_IMAGE,
  "ncr-receipt-books:hero": NCR_RECEIPT_HERO_IMAGE,
  "ncr-receipt-books:overview": NCR_RECEIPT_OVERVIEW_IMAGE,
  "ncr-receipt-books:buyer-risk": NCR_RECEIPT_RISK_IMAGE,
  "ncr-receipt-books:2-part": NCR_RECEIPT_2_PART_IMAGE,
  "ncr-receipt-books:3-part": NCR_RECEIPT_3_PART_IMAGE,
  "ncr-receipt-books:private-label": NCR_RECEIPT_PRIVATE_LABEL_IMAGE,
  "ncr-receipt-books:production": FACTORY_IMAGE,
  "ncr-receipt-books:packing": NCR_RECEIPT_PACKING_IMAGE,
  "ncr-invoice-books:hero": NCR_INVOICE_HERO_IMAGE,
  "ncr-invoice-books:overview": NCR_INVOICE_OVERVIEW_IMAGE,
  "ncr-invoice-books:buyer-risk": NCR_INVOICE_RISK_IMAGE,
  "ncr-invoice-books:2-part": NCR_INVOICE_2_PART_IMAGE,
  "ncr-invoice-books:3-part": NCR_INVOICE_3_PART_IMAGE,
  "ncr-invoice-books:private-label": NCR_INVOICE_PRIVATE_LABEL_IMAGE,
  "ncr-invoice-books:production": FACTORY_IMAGE,
  "ncr-invoice-books:packing": NCR_INVOICE_PACKING_IMAGE,
  "auto-repair-ncr-forms:inspection": AUTO_REPAIR_INSPECTION_IMAGE,
  "auto-repair-ncr-forms:repair-order": AUTO_REPAIR_ORDER_IMAGE,
  "auto-repair-ncr-forms:damage-report": AUTO_REPAIR_DAMAGE_IMAGE,
  "auto-repair-ncr-forms:authorization": AUTO_REPAIR_AUTHORIZATION_IMAGE,
  "auto-repair-ncr-forms:invoice": AUTO_REPAIR_INVOICE_IMAGE,
  "auto-repair-ncr-forms:production": FACTORY_IMAGE,
  "oem:hero": FACTORY_IMAGE,
  "oem:case-studies-hero": FACTORY_IMAGE,
  "oem:custom-printing-hero": FACTORY_LINE_IMAGE,
  "oem:packaging-hero": FACTORY_IMAGE,
  "oem:design-support-hero": FACTORY_LINE_IMAGE,
  "oem:ip-protection-hero": FACTORY_IMAGE,
  "oem:quality-assurance-hero": FACTORY_LINE_IMAGE,
  "oem:factory": FACTORY_IMAGE,
  "manufacturing:hero": FACTORY_IMAGE,
  "manufacturing:facility-aerial": FACTORY_IMAGE,
  "manufacturing:facility-line": FACTORY_LINE_IMAGE,
  "manufacturing:certifications-hero": FACTORY_IMAGE,
  "manufacturing:equipment-hero": FACTORY_LINE_IMAGE,
  "manufacturing:quality-hero": FACTORY_LINE_IMAGE,
};

function getHeuristicDefault(slot: string): string | undefined {
  if (slot.startsWith("ncr-applications:")) return NCR_FORMS_IMAGE;
  if (slot.startsWith("till-rolls:size:")) return THERMAL_ROLLS_IMAGE;
  if (slot.startsWith("thermal-rolls:")) return THERMAL_ROLLS_IMAGE;
  if (slot.startsWith("thermal-labels:")) return THERMAL_LABELS_IMAGE;
  if (slot.startsWith("can-labels:")) return CAN_LABELS_IMAGE;
  if (slot.startsWith("detergent-labels:")) return DETERGENT_LABELS_IMAGE;
  return undefined;
}

export function getDefaultImageForSlot(slot: string): string | undefined {
  const image =
    exactDefaults[slot] ||
    applicationDefaults[slot] ||
    marketDefaults[slot] ||
    getHeuristicDefault(slot);

  return image ? r2Image(image) : undefined;
}

export function buildDefaultImagesForSlots(slots: readonly { slot: string }[]) {
  return Object.fromEntries(
    slots
      .map((slot) => [slot.slot, getDefaultImageForSlot(slot.slot)] as const)
      .filter((entry): entry is readonly [string, string] => Boolean(entry[1])),
  );
}

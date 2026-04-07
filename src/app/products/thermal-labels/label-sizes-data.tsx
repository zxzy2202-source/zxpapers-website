// Shared data for all thermal label size pages
import type { ApplicationItem } from "@/components/products/SizeDetailPage";

export const LABELS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

export const APP_IMAGES = {
  ecommerce:    "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&q=80",
  amazon:       "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&q=80",
  shipping:     "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
  warehouse:    "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
  logistics:    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
  barcode:      "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=600&q=80",
  inventory:    "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80",
  retail:       "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80",
  food:         "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
  pharmacy:     "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
  product:      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  crossborder:  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
  europe:       "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=600&q=80",
  asset:        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  packaging:    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
};

export const apps4x6: ApplicationItem[] = [
  { name: "E-commerce Shipping",  image: APP_IMAGES.ecommerce,   description: "The global standard label for online order fulfillment." },
  { name: "Amazon FBA",           image: APP_IMAGES.amazon,      description: "Compliant with Amazon FBA label requirements." },
  { name: "UPS / FedEx / DHL",    image: APP_IMAGES.shipping,    description: "Accepted by all major international carriers." },
  { name: "USPS Priority Mail",   image: APP_IMAGES.logistics,   description: "Standard format for USPS domestic shipping labels." },
  { name: "Warehouse Logistics",  image: APP_IMAGES.warehouse,   description: "High-volume label printing in distribution centers." },
  { name: "3PL Fulfillment",      image: APP_IMAGES.logistics,   description: "Third-party logistics and fulfillment center use." },
];

export const apps100x150: ApplicationItem[] = [
  { name: "International Shipping", image: APP_IMAGES.crossborder, description: "Metric equivalent of 4x6 for global logistics." },
  { name: "E-commerce",             image: APP_IMAGES.ecommerce,   description: "Online retail order shipping labels." },
  { name: "Logistics",              image: APP_IMAGES.logistics,   description: "Carrier and freight logistics labeling." },
  { name: "Warehouse Management",   image: APP_IMAGES.warehouse,   description: "WMS-integrated label printing in warehouses." },
  { name: "Cross-border Trade",     image: APP_IMAGES.crossborder, description: "Labels for international customs and trade compliance." },
];

export const apps2x1: ApplicationItem[] = [
  { name: "Barcode Labels",         image: APP_IMAGES.barcode,   description: "Product barcode printing for retail and inventory." },
  { name: "Inventory Tags",         image: APP_IMAGES.inventory, description: "Stock and asset tracking in warehouses." },
  { name: "Retail Price Tags",      image: APP_IMAGES.retail,    description: "Shelf and product price labeling in retail stores." },
  { name: "Product Identification", image: APP_IMAGES.product,   description: "SKU and product ID labels for manufacturing." },
  { name: "Asset Tracking",         image: APP_IMAGES.asset,     description: "IT asset and equipment tracking labels." },
];

export const apps4x4: ApplicationItem[] = [
  { name: "Product Packaging",  image: APP_IMAGES.packaging, description: "Large format product labels for retail packaging." },
  { name: "Food Labeling",      image: APP_IMAGES.food,      description: "Food-safe labels for packaged food products." },
  { name: "Large Barcodes",     image: APP_IMAGES.barcode,   description: "2D and large barcode labels for scanning accuracy." },
  { name: "Shipping Labels",    image: APP_IMAGES.shipping,  description: "Square shipping labels for bulky or square packages." },
  { name: "Compliance Labels",  image: APP_IMAGES.product,   description: "Regulatory compliance and warning labels." },
];

export const apps3x1: ApplicationItem[] = [
  { name: "Product Labels",  image: APP_IMAGES.product,  description: "Versatile product labels for retail and manufacturing." },
  { name: "Shelf Tags",      image: APP_IMAGES.retail,   description: "Retail shelf edge labels and price tags." },
  { name: "Pharmacy Labels", image: APP_IMAGES.pharmacy, description: "Prescription and OTC medication labeling." },
  { name: "Food Service",    image: APP_IMAGES.food,     description: "Food date and content labels for food service." },
  { name: "Small Item ID",   image: APP_IMAGES.barcode,  description: "Small item identification and tracking labels." },
];

export const apps101x152: ApplicationItem[] = [
  { name: "European E-commerce",   image: APP_IMAGES.europe,      description: "A6 format standard for European online retailers." },
  { name: "DPD / DHL Europe",      image: APP_IMAGES.shipping,    description: "Carrier-compliant labels for European parcel services." },
  { name: "Hermes / Evri",         image: APP_IMAGES.logistics,   description: "Compatible with Hermes/Evri UK shipping labels." },
  { name: "Cross-border Shipping", image: APP_IMAGES.crossborder, description: "International shipping labels for EU cross-border trade." },
  { name: "Logistics",             image: APP_IMAGES.warehouse,   description: "European warehouse and logistics labeling." },
];

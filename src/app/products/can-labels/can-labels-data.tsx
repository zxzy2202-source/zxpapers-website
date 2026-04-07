// Can Labels product data — sizes, application images, and application arrays
// Design: Global Trade Authority — consistent with thermal-labels data structure

import type { ApplicationItem } from "@/components/products/SizeDetailPage";

export const CAN_LABELS_IMG =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80";

// ── Application image pool ────────────────────────────────────────────────
const APP_IMAGES = {
  beverage:    "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80",
  food:        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
  canning:     "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
  retail:      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  pet_food:    "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600&q=80",
  industrial:  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  chemical:    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  paint:       "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80",
  seafood:     "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
  vegetable:   "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
};

// ── Size registry (used in navigation.ts) ────────────────────────────────
export const canLabelSizes = [
  { slug: "211x400",  label: "211 × 400",  badge: "Standard",      markets: "Global" },
  { slug: "211x603",  label: "211 × 603",  badge: "Tall Can",       markets: "Americas" },
  { slug: "300x407",  label: "300 × 407",  badge: "Food Standard",  markets: "Global" },
  { slug: "307x510",  label: "307 × 510",  badge: "Wide Body",      markets: "Global" },
  { slug: "401x700",  label: "401 × 700",  badge: "Large Format",   markets: "Global" },
];

// ── Application arrays per size ───────────────────────────────────────────
export const apps211x400: ApplicationItem[] = [
  { name: "Craft Beer Cans",       image: APP_IMAGES.beverage,  description: "Standard 12 oz slim-can label for craft breweries and beverage brands." },
  { name: "Energy Drinks",         image: APP_IMAGES.beverage,  description: "High-contrast printing for energy drink branding and compliance text." },
  { name: "Carbonated Beverages",  image: APP_IMAGES.beverage,  description: "Moisture-resistant labels for chilled carbonated drinks." },
  { name: "Canned Vegetables",     image: APP_IMAGES.vegetable, description: "Food-safe labels for canned vegetable products." },
  { name: "Retail Shelf Display",  image: APP_IMAGES.retail,    description: "Vibrant CMYK printing for eye-catching retail shelf presence." },
];

export const apps211x603: ApplicationItem[] = [
  { name: "Tall Beverage Cans",    image: APP_IMAGES.beverage,  description: "16 oz tall-can standard for premium beverages and hard seltzers." },
  { name: "Sparkling Water",       image: APP_IMAGES.beverage,  description: "Clean, minimalist labels for sparkling water and health drinks." },
  { name: "Cocktail Mixers",       image: APP_IMAGES.beverage,  description: "Premium label printing for RTD cocktail and mixer brands." },
  { name: "Protein Shakes",        image: APP_IMAGES.food,      description: "Durable labels for nutrition and protein drink cans." },
  { name: "Specialty Beverages",   image: APP_IMAGES.beverage,  description: "Custom tall-can labels for limited edition and seasonal releases." },
];

export const apps300x407: ApplicationItem[] = [
  { name: "Canned Tomatoes",       image: APP_IMAGES.vegetable, description: "Standard #2 can label for tomato and vegetable products." },
  { name: "Canned Seafood",        image: APP_IMAGES.seafood,   description: "Moisture-resistant labels for tuna, sardines, and seafood cans." },
  { name: "Canned Soups",          image: APP_IMAGES.food,      description: "Full-wrap labels for soup and stew cans with ingredient compliance." },
  { name: "Pet Food Cans",         image: APP_IMAGES.pet_food,  description: "Durable labels for wet pet food in standard #2 cans." },
  { name: "Food Service Cans",     image: APP_IMAGES.canning,   description: "Institutional food service labeling for bulk canned goods." },
];

export const apps307x510: ApplicationItem[] = [
  { name: "Canned Fruit",          image: APP_IMAGES.food,      description: "Wide-body labels for peach, pineapple, and mixed fruit cans." },
  { name: "Canned Beans",          image: APP_IMAGES.vegetable, description: "Full-wrap labels for kidney beans, chickpeas, and legume cans." },
  { name: "Industrial Lubricants", image: APP_IMAGES.industrial, description: "Chemical-resistant labels for lubricant and grease cans." },
  { name: "Paint Cans",            image: APP_IMAGES.paint,     description: "Solvent-resistant labels for paint and coating product cans." },
  { name: "Canned Meat",           image: APP_IMAGES.food,      description: "Food-safe labels for corned beef, spam, and processed meat cans." },
];

export const apps401x700: ApplicationItem[] = [
  { name: "Large Food Cans",       image: APP_IMAGES.canning,   description: "#10 large-format can labels for institutional and food service use." },
  { name: "Chemical Drums",        image: APP_IMAGES.chemical,  description: "GHS-compliant labels for chemical and industrial product containers." },
  { name: "Paint & Coatings",      image: APP_IMAGES.paint,     description: "Large-format labels for 1-gallon paint and coating cans." },
  { name: "Industrial Containers", image: APP_IMAGES.industrial, description: "Durable labels for industrial fluid and lubricant containers." },
  { name: "Bulk Food Packaging",   image: APP_IMAGES.food,      description: "Large-format labels for bulk food and catering supply cans." },
];

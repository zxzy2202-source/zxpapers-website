import type {
  ProductCategoryConfig,
  ResolvedProductCategoryImages,
} from "@/components/products/category/product-category-types";
import { getSlotImages } from "@/lib/imageSlotUtils";

export async function resolveProductCategoryImages(
  config: ProductCategoryConfig,
): Promise<ResolvedProductCategoryImages> {
  const images = await getSlotImages([
    config.hero.image,
    config.evidence.image,
    ...config.families.map((family) => family.image),
    ...config.applications.map((application) => application.image),
  ]);

  return {
    hero: images[config.hero.image.slot],
    quality: images[config.evidence.image.slot],
    families: Object.fromEntries(
      config.families.map((family) => [family.id, images[family.image.slot]]),
    ),
    applications: Object.fromEntries(
      config.applications.map((application) => [
        application.id,
        images[application.image.slot],
      ]),
    ),
  };
}

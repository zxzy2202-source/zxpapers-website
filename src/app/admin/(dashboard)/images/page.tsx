import { prisma } from "@/lib/prisma";
import ImageManager from "@/components/admin/ImageManager";
import { readdir, stat } from "fs/promises";
import path from "path";

async function getPublicImages() {
  const imagesDir = path.join(process.cwd(), "public", "images");
  const images: { filename: string; path: string; size: number }[] = [];

  async function scanDir(dir: string, prefix: string) {
    try {
      const entries = await readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const publicPath = `${prefix}/${entry.name}`;
        if (entry.isDirectory()) {
          await scanDir(fullPath, publicPath);
        } else if (/\.(jpg|jpeg|png|webp|gif|svg)$/i.test(entry.name)) {
          const s = await stat(fullPath);
          images.push({ filename: entry.name, path: publicPath, size: s.size });
        }
      }
    } catch {
      // Directory may not exist
    }
  }

  await scanDir(imagesDir, "/images");
  return images;
}

export default async function ImagesPage() {
  const [dbImages, publicImages] = await Promise.all([
    prisma.imageAsset.findMany({ orderBy: { createdAt: "desc" } }),
    getPublicImages(),
  ]);

  // Merge: DB images take priority, then add public images not in DB
  const dbPaths = new Set(dbImages.map((i) => i.path));
  const allImages = [
    ...dbImages,
    ...publicImages
      .filter((img) => !dbPaths.has(img.path))
      .map((img) => ({
        id: `public-${img.path}`,
        filename: img.filename,
        path: img.path,
        alt: null,
        page: null,
        width: null,
        height: null,
        size: img.size,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
  ];

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Images</h1>
        <p className="text-gray-500 text-sm mt-1">
          {allImages.length} images in /public/images/
        </p>
      </div>
      <ImageManager images={allImages} />
    </div>
  );
}

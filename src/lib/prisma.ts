import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

// Prisma 7 requires an adapter for database connections
// Using libsql adapter for SQLite (compatible with both local files and Turso)

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  dbInitialized: boolean;
};

function createPrismaClient() {
  const dbUrl = process.env.DATABASE_URL || "file:./prisma/admin.db";
  const authToken = process.env.TURSO_AUTH_TOKEN;

  // PrismaLibSql accepts a Config object directly (not a Client instance)
  // authToken is required for Turso cloud databases
  const config: { url: string; authToken?: string } = { url: dbUrl };
  if (authToken) {
    config.authToken = authToken;
  }

  const adapter = new PrismaLibSql(config);
  return new PrismaClient({ adapter });
}

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/**
 * 确保数据库表结构存在（用于 Turso 等不支持 prisma migrate 的场景）
 * 使用 CREATE TABLE IF NOT EXISTS，幂等安全
 */
export async function ensureDbSchema() {
  if (globalForPrisma.dbInitialized) return;

  try {
    await prisma.$executeRawUnsafe(`CREATE TABLE IF NOT EXISTS "Admin" ("id" TEXT NOT NULL PRIMARY KEY, "username" TEXT NOT NULL, "password" TEXT NOT NULL, "name" TEXT NOT NULL DEFAULT 'Admin', "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" DATETIME NOT NULL)`);
    await prisma.$executeRawUnsafe(`CREATE UNIQUE INDEX IF NOT EXISTS "Admin_username_key" ON "Admin"("username")`);
    await prisma.$executeRawUnsafe(`CREATE TABLE IF NOT EXISTS "Inquiry" ("id" TEXT NOT NULL PRIMARY KEY, "name" TEXT NOT NULL, "email" TEXT NOT NULL, "company" TEXT, "country" TEXT, "phone" TEXT, "product" TEXT, "message" TEXT NOT NULL, "status" TEXT NOT NULL DEFAULT 'NEW', "notes" TEXT, "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" DATETIME NOT NULL)`);
    await prisma.$executeRawUnsafe(`CREATE TABLE IF NOT EXISTS "Article" ("id" TEXT NOT NULL PRIMARY KEY, "title" TEXT NOT NULL, "slug" TEXT NOT NULL, "excerpt" TEXT, "content" TEXT NOT NULL, "category" TEXT NOT NULL DEFAULT 'INDUSTRY_INSIGHTS', "status" TEXT NOT NULL DEFAULT 'DRAFT', "coverImage" TEXT, "tags" TEXT DEFAULT '', "metaTitle" TEXT, "metaDesc" TEXT, "keywords" TEXT, "publishedAt" DATETIME, "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" DATETIME NOT NULL)`);
    await prisma.$executeRawUnsafe(`CREATE UNIQUE INDEX IF NOT EXISTS "Article_slug_key" ON "Article"("slug")`);
    await prisma.$executeRawUnsafe(`CREATE TABLE IF NOT EXISTS "ImageAsset" ("id" TEXT NOT NULL PRIMARY KEY, "filename" TEXT NOT NULL, "originalName" TEXT, "path" TEXT NOT NULL, "alt" TEXT, "page" TEXT, "label" TEXT, "tags" TEXT, "mimeType" TEXT, "storageType" TEXT NOT NULL DEFAULT 'local', "source" TEXT NOT NULL DEFAULT 'admin', "width" INTEGER, "height" INTEGER, "size" INTEGER, "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" DATETIME NOT NULL)`);
    await prisma.$executeRawUnsafe(`CREATE TABLE IF NOT EXISTS "ImageSlotRecord" ("id" TEXT NOT NULL PRIMARY KEY, "slotKey" TEXT NOT NULL, "pageKey" TEXT NOT NULL, "pageName" TEXT NOT NULL, "pagePath" TEXT NOT NULL, "sectionKey" TEXT NOT NULL, "sectionName" TEXT NOT NULL, "slotName" TEXT NOT NULL, "label" TEXT NOT NULL, "description" TEXT, "aspectRatio" TEXT NOT NULL DEFAULT '16:9', "sortOrder" INTEGER NOT NULL DEFAULT 0, "isActive" INTEGER NOT NULL DEFAULT 1, "imageAssetId" TEXT, "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" DATETIME NOT NULL, FOREIGN KEY ("imageAssetId") REFERENCES "ImageAsset" ("id") ON DELETE SET NULL ON UPDATE CASCADE)`);
    await prisma.$executeRawUnsafe(`CREATE UNIQUE INDEX IF NOT EXISTS "ImageSlotRecord_slotKey_key" ON "ImageSlotRecord"("slotKey")`);
    await prisma.$executeRawUnsafe(`CREATE INDEX IF NOT EXISTS "ImageSlotRecord_pageKey_sortOrder_idx" ON "ImageSlotRecord"("pageKey", "sortOrder")`);
    await prisma.$executeRawUnsafe(`CREATE INDEX IF NOT EXISTS "ImageSlotRecord_imageAssetId_idx" ON "ImageSlotRecord"("imageAssetId")`);
    globalForPrisma.dbInitialized = true;
  } catch (error) {
    const msg = String(error);
    if (!msg.includes("already exists") && !msg.includes("duplicate")) {
      console.error("[ensureDbSchema] Error:", error);
    }
    globalForPrisma.dbInitialized = true;
  }
}

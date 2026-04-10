-- CreateTable
CREATE TABLE IF NOT EXISTS "Admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Admin',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "Inquiry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "country" TEXT,
    "phone" TEXT,
    "product" TEXT,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "Article" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'INDUSTRY_INSIGHTS',
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "coverImage" TEXT,
    "tags" TEXT DEFAULT '',
    "metaTitle" TEXT,
    "metaDesc" TEXT,
    "keywords" TEXT,
    "publishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "ImageAsset" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "filename" TEXT NOT NULL,
    "originalName" TEXT,
    "path" TEXT NOT NULL,
    "alt" TEXT,
    "page" TEXT,
    "label" TEXT,
    "tags" TEXT,
    "mimeType" TEXT,
    "storageType" TEXT NOT NULL DEFAULT 'local',
    "source" TEXT NOT NULL DEFAULT 'admin',
    "width" INTEGER,
    "height" INTEGER,
    "size" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "ImageSlotRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slotKey" TEXT NOT NULL,
    "pageKey" TEXT NOT NULL,
    "pageName" TEXT NOT NULL,
    "pagePath" TEXT NOT NULL,
    "sectionKey" TEXT NOT NULL,
    "sectionName" TEXT NOT NULL,
    "slotName" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "aspectRatio" TEXT NOT NULL DEFAULT '16:9',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "imageAssetId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ImageSlotRecord_imageAssetId_fkey" FOREIGN KEY ("imageAssetId") REFERENCES "ImageAsset" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateUniqueIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Admin_username_key" ON "Admin"("username");

-- CreateUniqueIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Article_slug_key" ON "Article"("slug");

-- CreateUniqueIndex
CREATE UNIQUE INDEX IF NOT EXISTS "ImageSlotRecord_slotKey_key" ON "ImageSlotRecord"("slotKey");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ImageSlotRecord_pageKey_sortOrder_idx" ON "ImageSlotRecord"("pageKey", "sortOrder");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ImageSlotRecord_imageAssetId_idx" ON "ImageSlotRecord"("imageAssetId");

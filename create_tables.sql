-- 1. Inquiry Table
CREATE TABLE IF NOT EXISTS `Inquiry` (
  `id` VARCHAR(191) NOT NULL,
  `name` VARCHAR(191) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `company` VARCHAR(191),
  `country` VARCHAR(191),
  `phone` VARCHAR(191),
  `product` VARCHAR(191),
  `message` TEXT NOT NULL,
  `status` VARCHAR(191) NOT NULL DEFAULT 'NEW',
  `notes` TEXT,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Article Table
CREATE TABLE IF NOT EXISTS `Article` (
  `id` VARCHAR(191) NOT NULL,
  `title` VARCHAR(191) NOT NULL,
  `slug` VARCHAR(191) NOT NULL,
  `excerpt` TEXT,
  `content` LONGTEXT NOT NULL,
  `category` VARCHAR(191) NOT NULL DEFAULT 'INDUSTRY_INSIGHTS',
  `status` VARCHAR(191) NOT NULL DEFAULT 'DRAFT',
  `coverImage` VARCHAR(191),
  `tags` VARCHAR(191) DEFAULT '',
  `metaTitle` VARCHAR(191),
  `metaDesc` TEXT,
  `keywords` VARCHAR(191),
  `publishedAt` DATETIME(3),
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `Article_slug_key` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. ImageAsset Table
CREATE TABLE IF NOT EXISTS `ImageAsset` (
  `id` VARCHAR(191) NOT NULL,
  `filename` VARCHAR(191) NOT NULL,
  `originalName` VARCHAR(191),
  `path` VARCHAR(191) NOT NULL,
  `alt` VARCHAR(191),
  `page` VARCHAR(191),
  `label` VARCHAR(191),
  `tags Durand` VARCHAR(191),
  `mimeType` VARCHAR(191),
  `storageType` VARCHAR(191) NOT NULL DEFAULT 'local',
  `source` VARCHAR(191) NOT NULL DEFAULT 'admin',
  `width` INTEGER,
  `height` INTEGER,
  `size` INTEGER,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. ImageSlotRecord Table
CREATE TABLE IF NOT EXISTS `ImageSlotRecord` (
  `id` VARCHAR(191) NOT NULL,
  `slotKey` VARCHAR(191) NOT NULL,
  `pageKey` VARCHAR(191) NOT NULL,
  `pageName` VARCHAR(191) NOT NULL,
  `pagePath` VARCHAR(191) NOT NULL,
  `sectionKey` VARCHAR(191) NOT NULL,
  `sectionName` VARCHAR(191) NOT NULL,
  `slotName` VARCHAR(191) NOT NULL,
  `label` VARCHAR(191) NOT NULL,
  `description` TEXT,
  `aspectRatio` VARCHAR(191) NOT NULL DEFAULT '16:9',
  `sortOrder` INTEGER NOT NULL DEFAULT 0,
  `isActive` BOOLEAN NOT NULL DEFAULT true,
  `imageAssetId` VARCHAR(191),
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `ImageSlotRecord_slotKey_key` (`slotKey`),
  INDEX `ImageSlotRecord_pageKey_sortOrder_idx` (`pageKey`, `sortOrder`),
  INDEX `ImageSlotRecord_imageAssetId_idx` (`imageAssetId`),
  CONSTRAINT `ImageSlotRecord_imageAssetId_fkey` FOREIGN KEY (`imageAssetId`) REFERENCES `ImageAsset` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
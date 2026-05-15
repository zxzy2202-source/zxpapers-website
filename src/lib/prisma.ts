import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  dbInitialized: boolean;
  processGuardsInstalled: boolean;
};

/**
 * Install process-level guards so that a background MariaDB pool error
 * (e.g. lost TCP connection, server restart, idle timeout) cannot kill
 * the entire Next.js Node process. Without these, an unhandled 'error'
 * event from the mariadb pool's internal EventEmitter brings the
 * application down and Hostinger restarts it in a crash loop.
 */
function installProcessGuards() {
  if (globalForPrisma.processGuardsInstalled) return;
  globalForPrisma.processGuardsInstalled = true;

  process.on("unhandledRejection", (reason) => {
    console.error("[process] unhandledRejection (suppressed):", reason);
  });

  process.on("uncaughtException", (err) => {
    const message = err && (err as Error).message ? (err as Error).message : String(err);
    // Swallow MariaDB / pool / Prisma transient errors instead of crashing.
    if (
      /pool|mariadb|connection|ECONNRESET|ETIMEDOUT|ECONNREFUSED|EPIPE|read ECONN|write ECONN/i.test(
        message,
      )
    ) {
      console.error("[process] uncaughtException (db, suppressed):", message);
      return;
    }
    console.error("[process] uncaughtException:", err);
  });
}

function createPrismaClient() {
  installProcessGuards();

  const databaseUrl =
    process.env.DATABASE_URL || "mysql://root:password@127.0.0.1:3306/zxpapers";
  const parsed = new URL(databaseUrl);

  const adapter = new PrismaMariaDb({
    host: parsed.hostname,
    port: parsed.port ? Number(parsed.port) : 3306,
    user: decodeURIComponent(parsed.username),
    password: decodeURIComponent(parsed.password),
    database: parsed.pathname.replace(/^\//, ""),
    connectionLimit: 3,
    // Keep connections short-lived so Hostinger's MariaDB idle timeout
    // does not leave dead sockets in the pool.
    idleTimeout: 30,
    acquireTimeout: 8000,
    connectTimeout: 8000,
  });

  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

// Always cache the singleton to avoid creating a new pool on every hot
// import in production serverless-style environments.
globalForPrisma.prisma = prisma;

/**
 * Ensure MySQL schema exists in environments where Prisma migrations are not executed.
 * This keeps Hostinger deployments self-healing for first boot and small schema additions.
 */
export async function ensureDbSchema() {
  if (globalForPrisma.dbInitialized) return;

  try {
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS \`Admin\` (
        \`id\` VARCHAR(191) NOT NULL,
        \`username\` VARCHAR(191) NOT NULL,
        \`password\` VARCHAR(255) NOT NULL,
        \`name\` VARCHAR(191) NOT NULL DEFAULT 'Admin',
        \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
        PRIMARY KEY (\`id\`),
        UNIQUE KEY \`Admin_username_key\` (\`username\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS \`Inquiry\` (
        \`id\` VARCHAR(191) NOT NULL,
        \`name\` VARCHAR(191) NOT NULL,
        \`email\` VARCHAR(191) NOT NULL,
        \`company\` VARCHAR(191) NULL,
        \`country\` VARCHAR(191) NULL,
        \`phone\` VARCHAR(191) NULL,
        \`product\` VARCHAR(191) NULL,
        \`message\` LONGTEXT NOT NULL,
        \`status\` VARCHAR(191) NOT NULL DEFAULT 'NEW',
        \`notes\` LONGTEXT NULL,
        \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS \`Article\` (
        \`id\` VARCHAR(191) NOT NULL,
        \`title\` VARCHAR(191) NOT NULL,
        \`slug\` VARCHAR(191) NOT NULL,
        \`excerpt\` TEXT NULL,
        \`content\` LONGTEXT NOT NULL,
        \`category\` VARCHAR(191) NOT NULL DEFAULT 'INDUSTRY_INSIGHTS',
        \`status\` VARCHAR(191) NOT NULL DEFAULT 'DRAFT',
        \`coverImage\` TEXT NULL,
        \`tags\` TEXT NULL,
        \`metaTitle\` VARCHAR(191) NULL,
        \`metaDesc\` TEXT NULL,
        \`keywords\` TEXT NULL,
        \`publishedAt\` DATETIME(3) NULL,
        \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
        PRIMARY KEY (\`id\`),
        UNIQUE KEY \`Article_slug_key\` (\`slug\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS \`ImageAsset\` (
        \`id\` VARCHAR(191) NOT NULL,
        \`filename\` VARCHAR(191) NOT NULL,
        \`originalName\` VARCHAR(191) NULL,
        \`path\` TEXT NOT NULL,
        \`alt\` TEXT NULL,
        \`page\` VARCHAR(191) NULL,
        \`label\` VARCHAR(191) NULL,
        \`tags\` TEXT NULL,
        \`mimeType\` VARCHAR(191) NULL,
        \`storageType\` VARCHAR(191) NOT NULL DEFAULT 'local',
        \`source\` VARCHAR(191) NOT NULL DEFAULT 'admin',
        \`width\` INT NULL,
        \`height\` INT NULL,
        \`size\` INT NULL,
        \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    const imageAssetAlterStatements = [
      "ALTER TABLE `ImageAsset` ADD COLUMN `originalName` VARCHAR(191) NULL",
      "ALTER TABLE `ImageAsset` ADD COLUMN `label` VARCHAR(191) NULL",
      "ALTER TABLE `ImageAsset` ADD COLUMN `tags` TEXT NULL",
      "ALTER TABLE `ImageAsset` ADD COLUMN `mimeType` VARCHAR(191) NULL",
      "ALTER TABLE `ImageAsset` ADD COLUMN `storageType` VARCHAR(191) NOT NULL DEFAULT 'local'",
      "ALTER TABLE `ImageAsset` ADD COLUMN `source` VARCHAR(191) NOT NULL DEFAULT 'admin'",
      "ALTER TABLE `ImageAsset` ADD COLUMN `width` INT NULL",
      "ALTER TABLE `ImageAsset` ADD COLUMN `height` INT NULL",
      "ALTER TABLE `ImageAsset` ADD COLUMN `size` INT NULL",
    ];

    for (const sql of imageAssetAlterStatements) {
      try {
        await prisma.$executeRawUnsafe(sql);
      } catch {
        // Column already exists on upgraded databases.
      }
    }

    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS \`ImageSlotRecord\` (
        \`id\` VARCHAR(191) NOT NULL,
        \`slotKey\` VARCHAR(191) NOT NULL,
        \`pageKey\` VARCHAR(191) NOT NULL,
        \`pageName\` VARCHAR(191) NOT NULL,
        \`pagePath\` VARCHAR(191) NOT NULL,
        \`sectionKey\` VARCHAR(191) NOT NULL,
        \`sectionName\` VARCHAR(191) NOT NULL,
        \`slotName\` VARCHAR(191) NOT NULL,
        \`label\` VARCHAR(191) NOT NULL,
        \`description\` TEXT NULL,
        \`aspectRatio\` VARCHAR(191) NOT NULL DEFAULT '16:9',
        \`sortOrder\` INT NOT NULL DEFAULT 0,
        \`isActive\` BOOLEAN NOT NULL DEFAULT true,
        \`imageAssetId\` VARCHAR(191) NULL,
        \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
        PRIMARY KEY (\`id\`),
        UNIQUE KEY \`ImageSlotRecord_slotKey_key\` (\`slotKey\`),
        KEY \`ImageSlotRecord_pageKey_sortOrder_idx\` (\`pageKey\`, \`sortOrder\`),
        KEY \`ImageSlotRecord_imageAssetId_idx\` (\`imageAssetId\`),
        CONSTRAINT \`ImageSlotRecord_imageAssetId_fkey\`
          FOREIGN KEY (\`imageAssetId\`) REFERENCES \`ImageAsset\`(\`id\`)
          ON DELETE SET NULL ON UPDATE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    globalForPrisma.dbInitialized = true;
  } catch (error) {
    console.error("[ensureDbSchema] Fatal error, will retry on next request:", error);
  }
}

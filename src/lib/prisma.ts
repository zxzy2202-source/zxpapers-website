import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

// Prisma 7 requires an adapter for database connections
// Using libsql adapter for SQLite (compatible with both local files and Turso)

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const dbUrl = process.env.DATABASE_URL || "file:./prisma/admin.db";
  // PrismaLibSql accepts a Config object directly (not a Client instance)
  const adapter = new PrismaLibSql({ url: dbUrl });
  return new PrismaClient({ adapter });
}

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

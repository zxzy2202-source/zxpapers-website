import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

// Prisma 7 requires an adapter for database connections
// Using libsql adapter for SQLite (compatible with both local files and Turso)

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
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

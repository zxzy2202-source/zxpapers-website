import { prisma } from "./prisma";
import fs from "fs";
import path from "path";

/**
 * 在运行时执行数据库迁移（用于Turso等不支持标准prisma migrate的场景）
 * 读取migration.sql并通过$executeRawUnsafe执行
 */
export async function ensureDatabaseSchema() {
  try {
    // 检查表是否存在
    const tables = await prisma.$queryRaw<Array<{ name: string }>>`
      SELECT name FROM sqlite_master WHERE type='table' AND name='ImageSlotRecord'
    `;
    
    if (tables.length > 0) {
      // 表已存在，无需初始化
      return { initialized: false, message: "Database schema already exists" };
    }

    // 读取迁移SQL文件
    const migrationPath = path.join(
      process.cwd(),
      "prisma/migrations/20240101000000_init/migration.sql"
    );
    
    if (!fs.existsSync(migrationPath)) {
      throw new Error(`Migration file not found: ${migrationPath}`);
    }

    const migrationSQL = fs.readFileSync(migrationPath, "utf-8");
    
    // 分割SQL语句（按分号分割，忽略注释）
    const statements = migrationSQL
      .split(";")
      .map((stmt) => stmt.trim())
      .filter((stmt) => stmt && !stmt.startsWith("--"));

    // 逐条执行SQL
    for (const statement of statements) {
      if (statement) {
        await prisma.$executeRawUnsafe(statement);
      }
    }

    return { initialized: true, message: "Database schema initialized successfully" };
  } catch (error) {
    console.error("Database initialization error:", error);
    throw error;
  }
}

/**
 * 数据库图片路径迁移脚本
 *
 * 功能：将数据库中所有 ImageAsset 记录的 path 字段
 *       从旧版 /images/uploads/xxx 统一迁移为 /uploads/images/xxx
 *
 * 用法（在项目根目录执行）：
 *   node scripts/migrate-image-paths.mjs
 *
 * 注意：
 *   - 此脚本只更新数据库记录，不移动物理文件
 *   - 如果服务器上存在旧版物理文件，请在脚本执行完毕后
 *     手动将 public/images/uploads/ 目录下的文件移动到
 *     public/uploads/images/，然后删除旧目录
 */

import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

// 加载 .env 环境变量
const envPath = path.join(projectRoot, ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = val;
  }
  console.log("✅ 已加载 .env 环境变量\n");
}

// 动态引入 @prisma/client
const require = createRequire(import.meta.url);
let PrismaClient;
try {
  ({ PrismaClient } = require("@prisma/client"));
} catch {
  console.error("❌ 无法加载 @prisma/client，请先执行 pnpm install 或 npm install");
  process.exit(1);
}

const prisma = new PrismaClient();

async function main() {
  console.log("开始迁移图片路径...\n");

  // 查找所有使用旧版路径的记录
  const oldPathRecords = await prisma.imageAsset.findMany({
    where: {
      path: {
        startsWith: "/images/uploads/",
      },
    },
    select: {
      id: true,
      filename: true,
      path: true,
    },
  });

  if (oldPathRecords.length === 0) {
    console.log("✅ 未发现旧版路径记录，无需迁移。");
    return;
  }

  console.log(`发现 ${oldPathRecords.length} 条旧版路径记录，开始更新...\n`);

  let successCount = 0;
  let failCount = 0;

  for (const record of oldPathRecords) {
    const newPath = record.path.replace(/^\/images\/uploads\//, "/uploads/images/");
    try {
      await prisma.imageAsset.update({
        where: { id: record.id },
        data: { path: newPath, updatedAt: new Date() },
      });
      console.log(`  ✅ ${record.filename}`);
      console.log(`     ${record.path} → ${newPath}`);
      successCount++;
    } catch (error) {
      console.error(`  ❌ ${record.filename} 更新失败:`, error);
      failCount++;
    }
  }

  console.log(`\n迁移完成：成功 ${successCount} 条，失败 ${failCount} 条。`);

  if (successCount > 0) {
    console.log(`
⚠️  重要提示：数据库路径已更新，但物理文件尚未移动。
    如果服务器上存在旧版物理文件，请执行以下命令移动文件：

    mkdir -p public/uploads/images
    mv public/images/uploads/* public/uploads/images/ 2>/dev/null || true

    完成后可安全删除旧目录：
    rmdir public/images/uploads 2>/dev/null || true
`);
  }
}

main()
  .catch((error) => {
    console.error("迁移脚本执行失败:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

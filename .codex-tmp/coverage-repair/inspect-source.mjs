import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "D:/Backup/Downloads/zxpapers.com-Coverage-2026-07-17.xlsx";
const outputDir = "E:/website/zxpapers-website-main/.codex-tmp/coverage-repair/source-preview";

await fs.mkdir(outputDir, { recursive: true });

const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const sheets = await workbook.inspect({
  kind: "sheet",
  include: "id,name",
  maxChars: 12000,
});
console.log("SHEETS");
console.log(sheets.ndjson);

const overview = await workbook.inspect({
  kind: "workbook,sheet,table",
  maxChars: 30000,
  tableMaxRows: 12,
  tableMaxCols: 16,
  tableMaxCellChars: 240,
});
console.log("OVERVIEW");
console.log(overview.ndjson);

for (let i = 0; i < workbook.worksheets.items.length; i += 1) {
  const sheet = workbook.worksheets.getItemAt(i);
  const used = sheet.getUsedRange(true);
  const rangeAddress = used?.address ?? null;
  console.log(`USED_RANGE\t${sheet.name}\t${rangeAddress}`);

  const detail = await workbook.inspect({
    kind: "table",
    sheetId: sheet.name,
    range: rangeAddress ?? "A1:Z100",
    include: "values,formulas",
    maxChars: 100000,
    tableMaxRows: 5000,
    tableMaxCols: 30,
    tableMaxCellChars: 500,
  });
  console.log(`DETAIL\t${sheet.name}`);
  console.log(detail.ndjson);

  const preview = await workbook.render({
    sheetName: sheet.name,
    autoCrop: "all",
    scale: 1.5,
    format: "png",
  });
  const safeName = sheet.name.replace(/[<>:"/\\|?*]+/g, "_");
  await fs.writeFile(
    path.join(outputDir, `${String(i + 1).padStart(2, "0")}-${safeName}.png`),
    new Uint8Array(await preview.arrayBuffer()),
  );
}

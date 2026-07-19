import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const files = [
  {
    key: "validation",
    input: "D:/Backup/Downloads/谷歌优化/zxpapers.com-Coverage-Validation-2026-07-17.xlsx",
  },
  {
    key: "drilldown",
    input: "D:/Backup/Downloads/谷歌优化/zxpapers.com-Coverage-Drilldown-2026-07-17.xlsx",
  },
];

const outputDir = "E:/website/zxpapers-website-main/.codex-tmp/coverage-evidence";
const previewDir = path.join(outputDir, "previews");
await fs.mkdir(previewDir, { recursive: true });

const extracted = {};

for (const file of files) {
  const blob = await FileBlob.load(file.input);
  const workbook = await SpreadsheetFile.importXlsx(blob);
  extracted[file.key] = { input: file.input, sheets: {} };

  console.log(`WORKBOOK\t${file.key}`);
  const sheetSummary = await workbook.inspect({
    kind: "sheet",
    include: "id,name",
    maxChars: 12000,
  });
  console.log(sheetSummary.ndjson);

  for (let i = 0; i < workbook.worksheets.items.length; i += 1) {
    const sheet = workbook.worksheets.getItemAt(i);
    const used = sheet.getUsedRange(true);
    const values = used?.values ?? [];
    const formulas = used?.formulas ?? [];
    const address = used?.address ?? "A1";

    extracted[file.key].sheets[sheet.name] = { address, values, formulas };
    console.log(
      `SHEET\t${file.key}\t${sheet.name}\t${address}\trows=${values.length}\tcols=${values[0]?.length ?? 0}`,
    );

    const previewRows = Math.min(values.length, 25);
    const previewCols = Math.min(values[0]?.length ?? 1, 20);
    if (previewRows > 0 && previewCols > 0) {
      const detail = await workbook.inspect({
        kind: "table",
        sheetId: sheet.name,
        range: sheet.getRangeByIndexes(0, 0, previewRows, previewCols).address,
        include: "values,formulas",
        maxChars: 25000,
        tableMaxRows: 25,
        tableMaxCols: 20,
        tableMaxCellChars: 500,
      });
      console.log(detail.ndjson);
    }

    const preview = await workbook.render({
      sheetName: sheet.name,
      range: sheet.getRangeByIndexes(
        0,
        0,
        Math.min(values.length, 50),
        Math.min(values[0]?.length ?? 1, 20),
      ).address,
      scale: 1.25,
      format: "png",
    });
    const safeName = sheet.name.replace(/[<>:"/\\|?*]+/g, "_");
    await fs.writeFile(
      path.join(previewDir, `${file.key}-${String(i + 1).padStart(2, "0")}-${safeName}.png`),
      new Uint8Array(await preview.arrayBuffer()),
    );
  }
}

await fs.writeFile(
  path.join(outputDir, "extracted-workbooks.json"),
  JSON.stringify(extracted, null, 2),
  "utf8",
);

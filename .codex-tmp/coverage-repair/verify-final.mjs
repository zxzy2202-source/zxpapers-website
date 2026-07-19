import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const finalPath = "E:/website/zxpapers-website-main/output/coverage-repair-2026-07-17/zxpapers.com-Coverage-修复清单-2026-07-17.xlsx";
const input = await FileBlob.load(finalPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const sheets = await workbook.inspect({ kind: "sheet", include: "id,name", maxChars: 5000 });
console.log(sheets.ndjson);

const check = await workbook.inspect({
  kind: "table",
  sheetId: "修复看板",
  range: "A3:H15",
  include: "values,formulas",
  maxChars: 8000,
  tableMaxRows: 20,
  tableMaxCols: 8,
});
console.log(check.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "readback formula error scan",
});
console.log(errors.ndjson);

import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const sourcePath = "D:/Backup/Downloads/zxpapers.com-Coverage-2026-07-17.xlsx";
const outputDir = "E:/website/zxpapers-website-main/output/coverage-repair-2026-07-17";
const previewDir = path.join(outputDir, "previews");
const outputPath = path.join(outputDir, "zxpapers.com-Coverage-修复清单-2026-07-17.xlsx");

const COLORS = {
  navy: "#0F2B5B",
  blue: "#1D4ED8",
  paleBlue: "#EAF2FF",
  red: "#B91C1C",
  paleRed: "#FEE2E2",
  amber: "#B45309",
  paleAmber: "#FEF3C7",
  green: "#166534",
  paleGreen: "#DCFCE7",
  gray900: "#111827",
  gray700: "#374151",
  gray500: "#6B7280",
  gray300: "#D1D5DB",
  gray200: "#E5E7EB",
  gray100: "#F3F4F6",
  white: "#FFFFFF",
};

const sourceBlob = await FileBlob.load(sourcePath);
const sourceWorkbook = await SpreadsheetFile.importXlsx(sourceBlob);

const sourceSheets = [
  ["图表", "源数据-趋势"],
  ["严重问题", "源数据-严重问题"],
  ["非严重问题", "源数据-非严重问题"],
  ["元数据", "源数据-元数据"],
];

const workbook = Workbook.create();
const dashboard = workbook.worksheets.add("修复看板");
const checklist = workbook.worksheets.add("修复清单");

for (const [sourceName, targetName] of sourceSheets) {
  const sourceSheet = sourceWorkbook.worksheets.getItem(sourceName);
  const sourceRange = sourceSheet.getUsedRange(true);
  const targetSheet = workbook.worksheets.add(targetName);
  const values = sourceRange.values;
  const rows = values.length;
  const cols = values[0]?.length ?? 1;
  targetSheet.getRangeByIndexes(0, 0, rows, cols).values = values;
}

const trend = workbook.worksheets.getItem("源数据-趋势");
const severe = workbook.worksheets.getItem("源数据-严重问题");
const nonSevere = workbook.worksheets.getItem("源数据-非严重问题");
const metadata = workbook.worksheets.getItem("源数据-元数据");

// Dashboard
dashboard.showGridLines = false;
dashboard.getRange("A1:H2").merge();
dashboard.getRange("A1").values = [["zxpapers.com Google 收录修复看板"]];
dashboard.getRange("A1:H2").format = {
  fill: COLORS.navy,
  font: { bold: true, color: COLORS.white },
  horizontalAlignment: "left",
  verticalAlignment: "center",
};
dashboard.getRange("A3:H3").merge();
dashboard.getRange("A3").formulas = [["=\"数据截止：\"&'源数据-趋势'!A85&\"｜来源：Google Search Console Coverage 导出（2026-07-17）\""]];
dashboard.getRange("A3:H3").format = {
  fill: COLORS.gray100,
  font: { color: COLORS.gray700 },
  verticalAlignment: "center",
};

const cards = [
  ["A4:B4", "A5:B6", "当前未收录", "='源数据-趋势'!B85", "#,##0", COLORS.paleRed, COLORS.red],
  ["C4:D4", "C5:D6", "当前已收录", "='源数据-趋势'!C85", "#,##0", COLORS.paleGreen, COLORS.green],
  ["E4:F4", "E5:F6", "当前收录率", "=C5/(A5+C5)", "0.0%", COLORS.paleBlue, COLORS.blue],
  ["G4:H4", "G5:H6", "较 4 月 20 日变化", "=E5-('源数据-趋势'!C4/('源数据-趋势'!B4+'源数据-趋势'!C4))", "0.0%", COLORS.paleAmber, COLORS.amber],
];

for (const [labelRange, valueRange, label, formula, numberFormat, fill, color] of cards) {
  dashboard.getRange(labelRange).merge();
  dashboard.getRange(valueRange).merge();
  dashboard.getRange(labelRange.split(":")[0]).values = [[label]];
  dashboard.getRange(valueRange.split(":")[0]).formulas = [[formula]];
  dashboard.getRange(labelRange).format = {
    fill,
    font: { bold: true, color: COLORS.gray700 },
    horizontalAlignment: "center",
    verticalAlignment: "center",
    borders: { preset: "outside", style: "thin", color: COLORS.gray300 },
  };
  dashboard.getRange(valueRange).format = {
    fill,
    font: { bold: true, color },
    numberFormat,
    horizontalAlignment: "center",
    verticalAlignment: "center",
    borders: { preset: "outside", style: "thin", color: COLORS.gray300 },
  };
}

dashboard.getRange("A8:H8").merge();
dashboard.getRange("A8").values = [["解读：未收录量从 4 月 20 日的 5,613 个变为 7 月 10 日的 5,621 个，几乎未改善；同期已收录量由 2,602 个降至 236 个。先核对 URL 样本与站点迁移/属性口径，再批量修改。"]];
dashboard.getRange("A8:H8").format = {
  fill: COLORS.paleAmber,
  font: { color: COLORS.gray900 },
  wrapText: true,
  verticalAlignment: "center",
  borders: { preset: "outside", style: "thin", color: "#F59E0B" },
};

dashboard.getRange("A10:D10").values = [["优先级", "问题数", "涉及页面", "执行要求"]];
dashboard.getRange("A11:A14").values = [["P0"], ["P1"], ["P2"], ["P3"]];
dashboard.getRange("B11").formulas = [["=COUNTIF('修复清单'!$B$5:$B$18,A11)"]];
dashboard.getRange("B11:B14").fillDown();
dashboard.getRange("C11").formulas = [["=SUMIF('修复清单'!$B$5:$B$18,A11,'修复清单'!$E$5:$E$18)"]];
dashboard.getRange("C11:C14").fillDown();
dashboard.getRange("D11:D14").values = [
  ["立即排障，先恢复正确 HTTP 状态"],
  ["本周分批处理，先高价值/可索引 URL"],
  ["确认是否为预期排除，再做清理"],
  ["关闭或仅监控"],
];
dashboard.getRange("A15:D15").values = [["合计", null, null, "涉及页面含 15 个已收录但受 robots 屏蔽的 URL"]];
dashboard.getRange("B15").formulas = [["=SUM(B11:B14)"]];
dashboard.getRange("C15").formulas = [["=SUM(C11:C14)"]];
dashboard.getRange("A10:D15").format.borders = { preset: "inside", style: "thin", color: COLORS.gray200 };
dashboard.getRange("A10:D10").format = {
  fill: COLORS.navy,
  font: { bold: true, color: COLORS.white },
  horizontalAlignment: "center",
  verticalAlignment: "center",
};
dashboard.getRange("A15:D15").format = {
  fill: COLORS.gray100,
  font: { bold: true, color: COLORS.gray900 },
  borders: { preset: "outside", style: "thin", color: COLORS.gray300 },
};
dashboard.getRange("B11:C15").format.numberFormat = "#,##0";
dashboard.getRange("D11:D15").format.wrapText = true;

dashboard.getRange("F10:H10").merge();
dashboard.getRange("F10").values = [["首轮执行顺序"]];
dashboard.getRange("F10:H10").format = {
  fill: COLORS.navy,
  font: { bold: true, color: COLORS.white },
  horizontalAlignment: "left",
};
const actionNotes = [
  "1. 从 GSC 各问题页导出示例 URL；原文件没有 URL 明细。",
  "2. 先修 5xx、重定向错误和仍被内部链接/站点地图引用的 404。",
  "3. 清理站点地图和内部链接中的重定向、noindex、404 URL。",
  "4. 按模板聚类检查“已抓取未收录”，保留有独立搜索意图的页面。",
  "5. 部署后用 URL 检查抽样，再启动 GSC 验证并记录日期。",
];
for (let i = 0; i < actionNotes.length; i += 1) {
  const row = 11 + i;
  dashboard.getRange(`F${row}:H${row}`).merge();
  dashboard.getRange(`F${row}`).values = [[actionNotes[i]]];
  dashboard.getRange(`F${row}:H${row}`).format = {
    fill: i % 2 === 0 ? COLORS.gray100 : COLORS.white,
    font: { color: COLORS.gray900 },
    wrapText: true,
    verticalAlignment: "center",
    borders: { preset: "inside", style: "thin", color: COLORS.gray200 },
  };
}

const trendChart = dashboard.charts.add("line", trend.getRange("A1:C85"));
trendChart.title = "收录与未收录页面趋势（页面数）";
trendChart.hasLegend = true;
trendChart.xAxis = { axisType: "textAxis", textStyle: { fontSize: 9 } };
trendChart.yAxis = { numberFormatCode: "#,##0" };
trendChart.setPosition("A18", "H35");

dashboard.getRange("A37:H39").merge();
dashboard.getRange("A37").values = [["范围说明：本清单依据问题汇总生成，不能替代 URL 级诊断。404、robots、重定向与未收录问题必须先用 GSC 示例 URL 分批核对；不要把所有旧 URL 统一重定向到首页或 /products。代码落点依据本地仓库 E:\\website\\zxpapers-website-main 的 2026-07-17 快照。"]];
dashboard.getRange("A37:H39").format = {
  fill: COLORS.gray100,
  font: { color: COLORS.gray700 },
  wrapText: true,
  verticalAlignment: "top",
  borders: { preset: "outside", style: "thin", color: COLORS.gray300 },
};
dashboard.freezePanes.freezeRows(3);

// Checklist
checklist.showGridLines = false;
checklist.getRange("A1:Q2").merge();
checklist.getRange("A1").values = [["Google 收录问题修复清单"]];
checklist.getRange("A1:Q2").format = {
  fill: COLORS.navy,
  font: { bold: true, color: COLORS.white },
  verticalAlignment: "center",
};
checklist.getRange("A3:Q3").merge();
checklist.getRange("A3").values = [["先筛选“优先级”和“状态”。黄色字段为执行中可维护项；页面数与占比引用原始导出，更新源数据后会自动重算。"]];
checklist.getRange("A3:Q3").format = {
  fill: COLORS.paleAmber,
  font: { color: COLORS.gray700 },
  verticalAlignment: "center",
};

const headers = [
  "ID", "优先级", "GSC类别", "问题类型", "受影响页", "占未收录", "原验证状态",
  "处理结论", "第一动作", "具体修复步骤", "代码/配置落点", "验收标准",
  "负责人", "状态", "计划完成", "GSC复验", "风险/依赖",
];
checklist.getRange("A4:Q4").values = [headers];

const rows = [
  ["GSC-01", "P0", "严重问题", "服务器错误 (5xx)", "='源数据-严重问题'!D8", "失败", "必须修复", "导出 26 个示例 URL，按模板和时间聚类", "逐个复现；查部署日志、数据读取和动态路由异常；将响应修正为 200、单跳 301 或真实 404；禁止用 200 空页面掩盖错误", "src/app/**；src/middleware.ts；src/lib/postsStore.ts；部署日志", "抽样与全部已知 URL 不再返回 5xx；核心页面连续 48 小时无同类异常", "开发+运维", "待URL样本", "完成修复部署后启动验证", "需要线上日志与 URL 明细"],
  ["GSC-02", "P0", "严重问题", "重定向错误", "='源数据-严重问题'!D9", "已开始", "必须修复", "对 3 个 URL 画出完整跳转链", "消除循环、过长链、协议/主机来回跳转；终点必须一次跳转到 200；检查通配规则是否先于特定规则命中", "next.config.ts redirects()；CDN/Hostinger/Vercel 重定向配置", "每个 URL 最多 1 次永久跳转并到达可索引 200；无循环或无效 Location", "开发+运维", "待URL样本", "部署后 URL 检查并重新验证", "仓库中 /product/:slug* 位于 linerless 特定规则之前，需优先核对"],
  ["GSC-03", "P0", "严重问题", "未找到 (404)", "='源数据-严重问题'!D6", "已开始", "分流处理", "导出 2,412 个 URL，并标注来源：站点地图/内部链接/外链/历史 URL", "仍有价值且有明确替代页的 URL 做一对一 301；误删页面恢复；无价值旧 URL 保持 404/410；从站点地图和内部链接删除失效 URL；禁止全部跳首页", "src/app/sitemap.ts；src/config/navigation.ts；页面内 Link/href；next.config.ts", "站点地图与内部链接 0 个 404；重点外链旧 URL 单跳到语义匹配页面；其余返回真实 404/410", "SEO+开发", "待URL样本", "先按来源分批，再对已修批次启动验证", "数量最大；没有 URL 明细前不可批量重定向"],
  ["GSC-04", "P0", "非严重问题", "已编入索引，尽管遭到 robots.txt 屏蔽", "='源数据-非严重问题'!D2", "失败", "解决指令冲突", "逐个决定应收录还是应排除", "应收录：解除 robots 屏蔽并保留自规范；应排除：允许抓取后返回 noindex，或使用鉴权/401/403，再从站点地图与内部链接移除", "public/robots.txt；src/app/admin/layout.tsx；src/middleware.ts；响应头", "15 个 URL 的抓取、索引和访问控制信号一致；不再出现已索引但 robots 屏蔽", "SEO+开发", "待URL样本", "修改后先 URL 检查，再验证", "robots 会阻止 Google 读取 noindex；私有内容优先鉴权而非仅 robots"],
  ["GSC-05", "P1", "严重问题", "已抓取 - 尚未编入索引", "='源数据-严重问题'!D4", "失败", "按模板治理", "导出 1,752 个 URL，按产品/地区/博客/参数/旧语言路径聚类", "核对 200、canonical、可索引性和渲染内容；保留有独立搜索意图的页面并补独特规格、采购信息与内部链接；重复或薄弱页合并、noindex 或移出站点地图", "src/app/products/**；src/app/markets/**；src/app/blog/**；src/app/sitemap.ts；src/config/navigation.ts", "每个保留模板抽样 5-10 页具备自规范、唯一标题/H1、独特正文与 2 个以上相关内链；无价值页不再提交索引", "SEO/内容", "待URL样本", "每个模板单独提交验证，观察 2-4 周", "不能靠“请求编入索引”解决批量低价值或重复内容"],
  ["GSC-06", "P1", "严重问题", "已被 robots.txt 屏蔽", "='源数据-严重问题'!D7", "已开始", "核对是否预期", "按目录统计 418 个 URL 命中了哪条 robots 规则", "公开且应收录的页面解除屏蔽；私有/低价值 URL 从站点地图和内链移除，并采用 noindex、鉴权或正确状态码；检查参数 URL 与 WordPress 遗留路径", "public/robots.txt；src/app/sitemap.ts；src/config/navigation.ts", "应收录 URL 可抓取；不应收录 URL 不在站点地图/内链中且使用一致的排除方式", "SEO+开发", "待URL样本", "规则调整后抽样 URL 检查并验证", "robots 注释称旧 URL 应可抓取，但实际仍屏蔽 /wp-admin/ 与 /wp-login.php，需按真实目标统一"],
  ["GSC-07", "P1", "严重问题", "网页会自动重定向", "='源数据-严重问题'!D2", "失败", "清理发现来源", "导出 950 个 URL，区分预期历史迁移与错误内链", "保留必要的一对一永久重定向；把站点地图、导航、正文链接、图片管理页中的旧地址改为最终规范 URL；消除链式跳转", "next.config.ts；src/app/sitemap.ts；src/config/navigation.ts；src/config/imageSlots.ts；页面内 Link/href", "站点地图仅含最终 200 URL；内部链接直接指向终点；所有保留重定向为单跳", "SEO+开发", "待URL样本", "清理发现来源后启动验证", "重定向本身通常不是错误；重点是避免继续提交和内部发现旧 URL"],
  ["GSC-08", "P1", "严重问题", "重复网页，用户未选定规范网页", "='源数据-严重问题'!D5", "未启动", "统一规范信号", "对 13 组 URL 比较正文、参数、主机和尾斜杠差异", "选择唯一主 URL；首选页加自规范；替代页能跳转则 301；所有内链和站点地图只指向主 URL；参数页必要时 noindex", "src/lib/seo.ts；各 page.tsx metadata；next.config.ts；src/app/sitemap.ts", "每组只有 1 个可索引主 URL；canonical、站点地图、内链和重定向一致", "SEO+开发", "待URL样本", "URL 检查确认用户规范与 Google 规范一致后验证", "需要 URL 对照组，不能仅凭问题名称猜主 URL"],
  ["GSC-09", "P1", "严重问题", "重复网页，Google 选择的规范网页与用户指定的不同", "='源数据-严重问题'!D14", "已通过", "复核并保持", "导出 4 组 URL，对比用户规范与 Google 规范", "若 Google 选择更合理则统一声明；若用户规范正确，则强化 301、内部链接、站点地图和内容唯一性，移除冲突信号", "src/lib/seo.ts；各 page.tsx metadata；next.config.ts；src/app/sitemap.ts", "Google 选择的规范 URL 与站点声明一致；重复页不再接收相互冲突信号", "SEO+开发", "仅监控", "下次覆盖报告复查，无回归再关闭", "当前验证已通过，避免无必要改动"],
  ["GSC-10", "P1", "严重问题", "软 404", "='源数据-严重问题'!D11", "已通过", "确认真实意图", "检查该 URL 是否内容过少、空列表或错误返回 200", "有搜索价值则补完整内容与明确主标题；不存在则通过 notFound() 返回 404；不要用空模板或跳首页冒充有效页", "src/app/**/page.tsx；src/app/not-found.tsx", "有效页返回有实质内容的 200；无效页返回真实 404；结构化数据与可见内容一致", "开发+SEO/内容", "仅监控", "下次覆盖报告复查", "当前验证已通过，先确认是否仍存在"],
  ["GSC-11", "P2", "严重问题", "已发现 - 尚未编入索引", "='源数据-严重问题'!D13", "已通过", "观察与增强发现", "核对 27 个 URL 是否仍在站点地图且有内部入口", "对高价值页增加上下文内链、准确 lastmod 和独特内容；低价值页移出站点地图；只对少量关键页请求索引", "src/app/sitemap.ts；src/config/navigation.ts；相关分类/详情页", "高价值 URL 可从至少一个索引页点击到达；站点地图 lastmod 与真实更新一致", "SEO/内容", "仅监控", "下次覆盖报告复查", "src/app/sitemap.ts 的 STATIC_LAST_MOD 仍为 2026-06-06，后续更新应保持真实"],
  ["GSC-12", "P2", "严重问题", "备用网页（有适当的规范标记）", "='源数据-严重问题'!D3", "失败", "通常无需修正文", "确认 11 个替代 URL 的规范目标可索引且内容等价", "若规范目标正确，仅从站点地图和内部链接移除替代 URL；若替代 URL 不应存在且可安全合并，使用一对一 301", "src/app/sitemap.ts；页面 metadata canonical；页面内 Link/href；next.config.ts", "替代 URL 不在站点地图；内部链接只指向规范 URL；规范目标为 200 且已收录", "SEO+开发", "待URL样本", "清理发现来源后重新验证", "验证失败不等于 canonical 配置错误，先检查目标页状态"],
  ["GSC-13", "P2", "严重问题", "被“noindex”标记排除了", "='源数据-严重问题'!D10", "已通过", "确认是否预期", "检查 4 个 URL 的业务用途和站点地图状态", "预期排除：保留 noindex 并从站点地图/内链移除；应收录：去掉 noindex，加入自规范和内链后再提交", "src/lib/seo.ts；各 page.tsx metadata robots；src/app/sitemap.ts", "每个 URL 的 noindex、站点地图和内链信号一致；无误排除的商业页面", "SEO+开发", "仅监控", "下次覆盖报告复查", "当前验证已通过，先确认业务意图"],
  ["GSC-14", "P3", "严重问题", "由于禁止访问 (403) 而被屏蔽了", "='源数据-严重问题'!D12", "已通过", "关闭并监控", "确认计数持续为 0", "无需改动；若回归，区分正常鉴权资源与误拦截的公开页面", "src/middleware.ts；CDN/WAF/Hostinger/Vercel 访问控制", "后续报告继续为 0；公开页面无意外 403", "运维", "仅监控", "仅在回归时启动验证", "当前无受影响页面"],
];

const rowStart = 5;
for (let i = 0; i < rows.length; i += 1) {
  const sheetRow = rowStart + i;
  const [id, priority, category, issue, countFormula, originalValidation, decision, firstAction, steps, codeArea, acceptance, owner, status, gscValidation, risk] = rows[i];
  checklist.getRange(`A${sheetRow}:D${sheetRow}`).values = [[id, priority, category, issue]];
  checklist.getRange(`E${sheetRow}`).formulas = [[countFormula]];
  checklist.getRange(`F${sheetRow}`).formulas = [[category === "严重问题" ? `=E${sheetRow}/'源数据-趋势'!$B$85` : "=\"\""]];
  checklist.getRange(`G${sheetRow}:Q${sheetRow}`).values = [[originalValidation, decision, firstAction, steps, codeArea, acceptance, owner, status, null, gscValidation, risk]];
}

const table = checklist.tables.add("A4:Q18", true, "CoverageRepairTasks");
table.style = "TableStyleMedium2";
table.showBandedRows = true;
table.showFilterButton = true;

checklist.getRange("A4:Q4").format = {
  fill: COLORS.navy,
  font: { bold: true, color: COLORS.white },
  horizontalAlignment: "center",
  verticalAlignment: "center",
  wrapText: true,
};
checklist.getRange("A5:Q18").format = {
  verticalAlignment: "top",
  wrapText: true,
  font: { color: COLORS.gray900 },
};
checklist.getRange("E5:E18").format.numberFormat = "#,##0";
checklist.getRange("F5:F18").format.numberFormat = "0.0%";
checklist.getRange("O5:O18").format.numberFormat = "yyyy-mm-dd";
checklist.getRange("M5:O18").format.fill = COLORS.paleAmber;
checklist.getRange("B5:B18").dataValidation = { rule: { type: "list", values: ["P0", "P1", "P2", "P3"] } };
checklist.getRange("M5:M18").dataValidation = { rule: { type: "list", values: ["开发", "运维", "SEO/内容", "SEO+开发", "开发+运维", "开发+SEO/内容", "待分配"] } };
checklist.getRange("N5:N18").dataValidation = { rule: { type: "list", values: ["待URL样本", "未开始", "处理中", "待部署", "待GSC复验", "已完成", "仅监控"] } };

const priorityRange = checklist.getRange("B5:B18");
priorityRange.conditionalFormats.add("containsText", { text: "P0", format: { fill: COLORS.paleRed, font: { bold: true, color: COLORS.red } } });
priorityRange.conditionalFormats.add("containsText", { text: "P1", format: { fill: COLORS.paleAmber, font: { bold: true, color: COLORS.amber } } });
priorityRange.conditionalFormats.add("containsText", { text: "P2", format: { fill: COLORS.paleBlue, font: { bold: true, color: COLORS.blue } } });
priorityRange.conditionalFormats.add("containsText", { text: "P3", format: { fill: COLORS.gray100, font: { bold: true, color: COLORS.gray700 } } });

const statusRange = checklist.getRange("N5:N18");
statusRange.conditionalFormats.add("containsText", { text: "已完成", format: { fill: COLORS.paleGreen, font: { bold: true, color: COLORS.green } } });
statusRange.conditionalFormats.add("containsText", { text: "待URL样本", format: { fill: COLORS.paleAmber, font: { color: COLORS.amber } } });
statusRange.conditionalFormats.add("containsText", { text: "处理中", format: { fill: COLORS.paleBlue, font: { color: COLORS.blue } } });

checklist.freezePanes.freezeRows(4);
checklist.freezePanes.freezeColumns(4);

// Source sheets: preserve source values and add light, consistent readability formatting.
const sourceConfig = [
  [trend, "A1:D85", [15, 16, 16, 12]],
  [severe, "A1:D14", [48, 16, 14, 12]],
  [nonSevere, "A1:D2", [48, 16, 14, 12]],
  [metadata, "A1:B2", [18, 34]],
];

for (const [sheet, address, widths] of sourceConfig) {
  sheet.showGridLines = false;
  const used = sheet.getRange(address);
  used.format.verticalAlignment = "center";
  used.format.borders = { preset: "inside", style: "thin", color: COLORS.gray200 };
  const lastColumn = address.split(":")[1].replace(/[0-9]/g, "");
  sheet.getRange(`A1:${lastColumn}1`).format = {
    fill: COLORS.navy,
    font: { bold: true, color: COLORS.white },
    horizontalAlignment: "center",
    verticalAlignment: "center",
  };
  widths.forEach((width, index) => {
    sheet.getRangeByIndexes(0, index, 1, 1).format.columnWidth = width;
  });
  sheet.freezePanes.freezeRows(1);
}
trend.getRange("B2:D85").format.numberFormat = "#,##0";
severe.getRange("D2:D14").format.numberFormat = "#,##0";
nonSevere.getRange("D2:D2").format.numberFormat = "#,##0";

// Layout sizing
dashboard.getRange("A1:H39").format.font = { name: "Aptos" };
dashboard.getRange("A1:H2").format.font = { name: "Aptos Display", bold: true, color: COLORS.white };
dashboard.getRange("A1:A39").format.columnWidth = 15;
dashboard.getRange("B1:B39").format.columnWidth = 15;
dashboard.getRange("C1:C39").format.columnWidth = 15;
dashboard.getRange("D1:D39").format.columnWidth = 28;
dashboard.getRange("E1:E39").format.columnWidth = 4;
dashboard.getRange("F1:H39").format.columnWidth = 18;
dashboard.getRange("A1:H2").format.rowHeight = 26;
dashboard.getRange("A3:H3").format.rowHeight = 22;
dashboard.getRange("A4:H4").format.rowHeight = 22;
dashboard.getRange("A5:H6").format.rowHeight = 25;
dashboard.getRange("A8:H8").format.rowHeight = 42;
dashboard.getRange("A10:H15").format.rowHeight = 32;
dashboard.getRange("A37:H39").format.rowHeight = 26;

checklist.getRange("A1:Q18").format.font = { name: "Aptos" };
checklist.getRange("A1:Q2").format.font = { name: "Aptos Display", bold: true, color: COLORS.white };
const checklistWidths = [10, 8, 12, 36, 12, 12, 14, 16, 34, 58, 38, 48, 18, 16, 14, 36, 42];
checklistWidths.forEach((width, index) => {
  checklist.getRangeByIndexes(0, index, 1, 1).format.columnWidth = width;
});
checklist.getRange("A1:Q2").format.rowHeight = 27;
checklist.getRange("A3:Q3").format.rowHeight = 24;
checklist.getRange("A4:Q4").format.rowHeight = 36;
checklist.getRange("A5:Q18").format.rowHeight = 96;

// Reassert semantic colors after applying the workbook-wide font family.
dashboard.getRange("A1:H2").format.font = { name: "Aptos Display", bold: true, color: COLORS.white };
dashboard.getRange("A10:D10").format.font = { name: "Aptos", bold: true, color: COLORS.white };
dashboard.getRange("F10:H10").format.font = { name: "Aptos", bold: true, color: COLORS.white };
dashboard.getRange("A4:B4").format.font = { name: "Aptos", bold: true, color: COLORS.gray700 };
dashboard.getRange("A5:B6").format.font = { name: "Aptos", bold: true, color: COLORS.red };
dashboard.getRange("C4:D4").format.font = { name: "Aptos", bold: true, color: COLORS.gray700 };
dashboard.getRange("C5:D6").format.font = { name: "Aptos", bold: true, color: COLORS.green };
dashboard.getRange("E4:F4").format.font = { name: "Aptos", bold: true, color: COLORS.gray700 };
dashboard.getRange("E5:F6").format.font = { name: "Aptos", bold: true, color: COLORS.blue };
dashboard.getRange("G4:H4").format.font = { name: "Aptos", bold: true, color: COLORS.gray700 };
dashboard.getRange("G5:H6").format.font = { name: "Aptos", bold: true, color: COLORS.amber };
checklist.getRange("A1:Q2").format.font = { name: "Aptos Display", bold: true, color: COLORS.white };
checklist.getRange("A4:Q4").format.font = { name: "Aptos", bold: true, color: COLORS.white };

await fs.mkdir(previewDir, { recursive: true });

const keyInspect = await workbook.inspect({
  kind: "table",
  sheetId: "修复清单",
  range: "A4:Q18",
  include: "values,formulas",
  maxChars: 30000,
  tableMaxRows: 20,
  tableMaxCols: 17,
  tableMaxCellChars: 240,
});
console.log("CHECKLIST_INSPECT");
console.log(keyInspect.ndjson);

const dashboardInspect = await workbook.inspect({
  kind: "table",
  sheetId: "修复看板",
  range: "A1:H15",
  include: "values,formulas",
  maxChars: 12000,
  tableMaxRows: 20,
  tableMaxCols: 8,
  tableMaxCellChars: 300,
});
console.log("DASHBOARD_INSPECT");
console.log(dashboardInspect.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
console.log("FORMULA_ERRORS");
console.log(errors.ndjson);

for (let i = 0; i < workbook.worksheets.items.length; i += 1) {
  const sheet = workbook.worksheets.getItemAt(i);
  const preview = await workbook.render({
    sheetName: sheet.name,
    autoCrop: "all",
    scale: sheet.name === "修复清单" ? 0.8 : 1.25,
    format: "png",
  });
  const safeName = sheet.name.replace(/[<>:"/\\|?*]+/g, "_");
  await fs.writeFile(
    path.join(previewDir, `${String(i + 1).padStart(2, "0")}-${safeName}.png`),
    new Uint8Array(await preview.arrayBuffer()),
  );
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
console.log(`OUTPUT\t${outputPath}`);

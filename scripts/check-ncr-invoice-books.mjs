const baseUrl = process.argv[2] ?? "http://localhost:3001";
const url = new URL("/products/ncr-invoice-books", baseUrl);
const response = await fetch(url);
const html = await response.text();

const checks = [
  ["HTTP status", response.status === 200],
  ["channel H1", html.includes("Wholesale NCR Invoice Books")],
  ["repeat supply promise", html.includes("Controlled, Repeatable Supply")],
  ["direct answer", html.includes("What is an NCR invoice book?")],
  ["quote brief", html.includes("Invoice Book Quote Brief")],
  ["number control", html.includes("Number Control")],
  ["Product JSON-LD", html.includes('\"@type\":\"Product\"')],
  ["FAQ JSON-LD", html.includes('\"@type\":\"FAQPage\"')],
  ["HowTo JSON-LD", html.includes('\"@type\":\"HowTo\"')],
  ["canonical", html.includes("/products/ncr-invoice-books")],
];

const failed = checks.filter(([, passed]) => !passed);

for (const [name, passed] of checks) {
  console.log(`${passed ? "PASS" : "FAIL"} ${name}`);
}

if (failed.length) {
  process.exitCode = 1;
}

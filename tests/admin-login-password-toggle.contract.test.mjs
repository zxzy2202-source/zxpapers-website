import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("admin login password can be shown and hidden accessibly", async () => {
  const page = await read("src/app/admin/login/page.tsx");

  assert.match(page, /import \{ Eye, EyeOff \} from "lucide-react"/);
  assert.match(page, /const \[showPassword, setShowPassword\] = useState\(false\)/);
  assert.match(page, /type=\{showPassword \? "text" : "password"\}/);
  assert.match(page, /type="button"/);
  assert.match(page, /aria-label=\{showPassword \? "隐藏密码" : "显示密码"\}/);
  assert.match(page, /aria-pressed=\{showPassword\}/);
  assert.match(page, /autoComplete="current-password"/);
  assert.match(page, /focus-visible:ring-2/);
});

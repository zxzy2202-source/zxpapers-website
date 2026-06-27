/**
 * 轻量 Markdown -> HTML 渲染器
 * 零依赖，支持博客最常用的语法。如未来需要更强大的渲染，可换 react-markdown / remark。
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInline(text: string): string {
  // 转义首先
  let out = escapeHtml(text);

  // 代码（最高优先级，避免内部被解析）
  out = out.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-slate-100 text-pink-600 rounded text-sm">$1</code>');

  // 图片 ![alt](url)
  out = out.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" class="rounded-xl my-6 mx-auto max-w-full" loading="lazy" />'
  );

  // 链接 [text](url)
  out = out.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener nofollow">$1</a>'
  );

  // 加粗 **text**
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // 斜体 *text*
  out = out.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");

  return out;
}

export function renderMarkdown(md: string): string {
  if (!md) return "";
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // 空行
    if (!line.trim()) {
      i++;
      continue;
    }

    // 代码块
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        code.push(lines[i]);
        i++;
      }
      i++;
      out.push(
        `<pre class="bg-slate-900 text-slate-100 rounded-xl p-4 my-4 overflow-x-auto text-sm"><code data-lang="${escapeHtml(
          lang
        )}">${escapeHtml(code.join("\n"))}</code></pre>`
      );
      continue;
    }

    // 标题
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const sizes = ["", "text-4xl mt-12 mb-6", "text-3xl mt-10 mb-5", "text-2xl mt-8 mb-4", "text-xl mt-6 mb-3", "text-lg mt-5 mb-2", "text-base mt-4 mb-2"];
      out.push(`<h${level} class="font-bold text-slate-900 ${sizes[level]}">${renderInline(heading[2])}</h${level}>`);
      i++;
      continue;
    }

    // 引用
    if (line.startsWith("> ")) {
      const quotes: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quotes.push(lines[i].slice(2));
        i++;
      }
      out.push(
        `<blockquote class="border-l-4 border-blue-500 bg-blue-50 pl-4 py-2 my-4 italic text-slate-700">${renderInline(
          quotes.join(" ")
        )}</blockquote>`
      );
      continue;
    }

    // 无序列表
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(`<li class="mb-1">${renderInline(lines[i].replace(/^[-*]\s+/, ""))}</li>`);
        i++;
      }
      out.push(`<ul class="list-disc pl-6 my-4 text-slate-700">${items.join("")}</ul>`);
      continue;
    }

    // 有序列表
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(`<li class="mb-1">${renderInline(lines[i].replace(/^\d+\.\s+/, ""))}</li>`);
        i++;
      }
      out.push(`<ol class="list-decimal pl-6 my-4 text-slate-700">${items.join("")}</ol>`);
      continue;
    }

    // 水平线
    if (/^---+$/.test(line.trim())) {
      out.push('<hr class="my-8 border-slate-200" />');
      i++;
      continue;
    }

    // 段落（合并相邻非空行）
    const para: string[] = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !/^(#|>|```|[-*]\s|\d+\.\s|---)/.test(lines[i])) {
      para.push(lines[i]);
      i++;
    }
    out.push(`<p class="my-4 leading-relaxed text-slate-700">${renderInline(para.join(" "))}</p>`);
  }

  return out.join("\n");
}

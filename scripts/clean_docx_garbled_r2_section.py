from pathlib import Path
from docx import Document

path = next(Path.cwd().glob('B2B*.docx'))
doc = Document(str(path))
marker = '二十、R2 图片公网地址与代理失效复盘'
paras = doc.paragraphs
marker_idx = None
for i, p in enumerate(paras):
    if marker in (p.text or ''):
        marker_idx = i
        break
if marker_idx is None:
    raise SystemExit('marker not found')

for p in list(paras[max(0, marker_idx - 30):marker_idx]):
    text = p.text or ''
    if '??' in text:
        element = p._element
        element.getparent().remove(element)

doc.save(str(path))
print('cleaned')

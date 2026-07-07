"""Add Sitemap link to footer Explore section on all pages."""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FOOTER_MARKER = 'class="text-white/85 hover:text-white">Contact Us</a></li>'

for dirpath, _, files in os.walk(ROOT):
    if any(x in dirpath for x in (".git", "node_modules", "src", "scripts")):
        continue
    for name in files:
        if name != "index.html":
            continue
        path = os.path.join(dirpath, name)
        rel = os.path.relpath(os.path.dirname(path), ROOT)
        prefix = "" if rel == "." else "../" * len(rel.split(os.sep))
        with open(path, encoding="utf-8") as f:
            content = f.read()
        link = (
            f'{FOOTER_MARKER}'
            f'<li><a href="{prefix}sitemap.html" class="text-white/85 hover:text-white">Sitemap</a></li>'
        )
        if f'href="{prefix}sitemap.html" class="text-white/85 hover:text-white">Sitemap</a></li>' in content:
            continue
        if FOOTER_MARKER not in content:
            print("skip (no marker):", os.path.relpath(path, ROOT))
            continue
        content = content.replace(FOOTER_MARKER, link, 1)
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.write(content)
        print("added footer sitemap:", os.path.relpath(path, ROOT))

print("done")

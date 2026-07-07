"""Repair nested tel links and missing footer sitemap links."""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BAD = '<a href="tel:+15612031900" class="text-inherit hover:underline">(561) 203-1900</a>'

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
        original = content
        content = content.replace(BAD, "(561) 203-1900")
        link = f'<li><a href="{prefix}sitemap.html" class="text-white/85 hover:text-white">Sitemap</a></li>'
        if "sitemap.html" not in content:
            content = content.replace(
                "Contact Us</a></li></ul>",
                f"Contact Us</a></li>{link}</ul>",
                1,
            )
        if content != original:
            with open(path, "w", encoding="utf-8", newline="") as f:
                f.write(content)
            print("fixed", os.path.relpath(path, ROOT))

print("repair done")

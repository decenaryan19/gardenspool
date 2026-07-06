import os
import re
import shutil

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC_CSS = os.path.join(ROOT, "assets", "styles-DeSnDkLP.css")
DST_CSS = os.path.join(ROOT, "assets", "src_styles.css")

shutil.copyfile(SRC_CSS, DST_CSS)
print("css bytes", os.path.getsize(DST_CSS))

IMAGE_MAP = {
    "/assets/@imagetools_9b56a564a0ccc983cbd7b943d4ddb651a19441eb": "assets/hero-pool-Dva3d1dS.avif",
    "/@imagetools/bdcc458659ce949a108d336656aa41ab7b88e051": "assets/hero-pool-DTrz5V7i.webp",
    "/@imagetools/a6274ffabf789e917e4f39c385590c3ae728096f": "assets/hero-pool-DTrz5V7i.webp",
    "/assets/@imagetools_ad0c27addddb91e3f22c0416e47b029535af98f2": "assets/pool-tech-DLxCQHNp.webp",
    "/@imagetools/65272aa8472e12207d6188081ce9e2be6ce3a717": "assets/pool-tech-DLxCQHNp.webp",
}


def prefix_for(path: str) -> str:
    rel = os.path.relpath(os.path.dirname(path), ROOT)
    if rel == ".":
        return ""
    depth = len(rel.split(os.sep))
    return "../" * depth


def convert_href(href: str, prefix: str) -> str:
    if re.match(r"^(https?:|tel:|mailto:|#)", href):
        return href
    if href == "/":
        return f"{prefix}index.html"
    clean = href.strip("/")
    return f"{prefix}{clean}/index.html" if clean else f"{prefix}index.html"


count = 0
for dirpath, _, files in os.walk(ROOT):
    for name in files:
        if name != "index.html":
            continue
        path = os.path.join(dirpath, name)
        prefix = prefix_for(path)
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        content = content.replace(
            'href="/assets/src_styles.css"',
            f'href="{prefix}assets/src_styles.css"',
        )
        content = content.replace('href="/favicon.svg"', f'href="{prefix}favicon.svg"')
        for old, rel in IMAGE_MAP.items():
            content = content.replace(old, prefix + rel)
        content = re.sub(
            r'href="(/[^"]*)"',
            lambda m: f'href="{convert_href(m.group(1), prefix)}"',
            content,
        )
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.write(content)
        count += 1

print("updated", count, "html files")

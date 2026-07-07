"""Optimize static Gardens Pool Service site: rename assets, prune bloat, fix nav, add sitemaps."""
from __future__ import annotations

import os
import re
import shutil
from datetime import date
from xml.etree.ElementTree import Element, SubElement, tostring

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, "assets")
SITE_URL = "https://gardens-pool.vercel.app"

# SEO-friendly rename map (old filename -> new filename)
IMAGE_RENAMES = {
    "hero-pool-480.webp": "gardens-pool-service-hero-480.webp",
    "hero-pool-640.webp": "gardens-pool-service-hero-640.webp",
    "hero-pool-768.webp": "gardens-pool-service-hero-768.webp",
    "hero-pool-960.webp": "gardens-pool-service-hero-960.webp",
    "hero-pool-1280.webp": "gardens-pool-service-hero-1280.webp",
    "pool-tech-480.webp": "pool-cleaning-palm-beach-480.webp",
    "pool-tech-640.webp": "pool-cleaning-palm-beach-640.webp",
    "pool-tech-768.webp": "pool-cleaning-palm-beach-768.webp",
    "pool-tech-960.webp": "pool-cleaning-palm-beach-960.webp",
    "water-texture.webp": "palm-beach-gardens-pool-water-texture.webp",
    "src_styles.css": "gardens-pool-service.css",
}

KEEP_ASSETS = set(IMAGE_RENAMES.values())

MOBILE_MENU_SCRIPT = """<script>(function(){var b=document.querySelector('[aria-label="Toggle menu"]'),m=document.getElementById('mobile-menu');if(!b||!m)return;b.addEventListener('click',function(){var o=m.classList.contains('hidden');m.classList.toggle('hidden',!o);b.setAttribute('aria-expanded',o?'true':'false');});m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.add('hidden');b.setAttribute('aria-expanded','false');});});})();</script>"""


def page_prefix(html_path: str) -> str:
    rel_dir = os.path.relpath(os.path.dirname(html_path), ROOT)
    if rel_dir == ".":
        return ""
    return "../" * len(rel_dir.split(os.sep))


def page_canonical(html_path: str) -> str:
    rel = os.path.relpath(html_path, ROOT).replace("\\", "/")
    if rel == "index.html":
        return f"{SITE_URL}/"
    return f"{SITE_URL}/{rel.removesuffix('/index.html')}/"


def rename_assets() -> None:
    for old, new in IMAGE_RENAMES.items():
        src = os.path.join(ASSETS, old)
        dst = os.path.join(ASSETS, new)
        if os.path.isfile(src):
            if os.path.isfile(dst):
                os.remove(dst)
            os.rename(src, dst)
            print(f"renamed {old} -> {new}")


def prune_assets() -> None:
    removed = 0
    saved = 0
    for name in os.listdir(ASSETS):
        path = os.path.join(ASSETS, name)
        if not os.path.isfile(path):
            continue
        if name in KEEP_ASSETS:
            continue
        size = os.path.getsize(path)
        os.remove(path)
        removed += 1
        saved += size
    print(f"pruned {removed} unused asset files ({saved / 1024 / 1024:.2f} MB saved)")


def update_html_references(content: str) -> str:
    for old, new in IMAGE_RENAMES.items():
        content = content.replace(old, new)
    return content


def mobile_nav_html(prefix: str) -> str:
    return (
        f'<nav id="mobile-menu" class="hidden border-t border-border/60 bg-background px-4 py-4 lg:hidden" '
        f'aria-label="Mobile navigation">'
        f'<a href="{prefix}index.html" class="block rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary">Home</a>'
        f'<a href="{prefix}pool-service-palm-beach-gardens/index.html" class="block rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary">Pool Service</a>'
        f'<a href="{prefix}about-gardens-pool-service/index.html" class="block rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary">About Us</a>'
        f'<a href="{prefix}contact-gardens-pool-service/index.html" class="block rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary">Contact Us</a>'
        f'<a href="{prefix}sitemap.html" class="block rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary">Sitemap</a>'
        f'<a href="tel:+15612031900" class="mt-2 block rounded-full bg-primary-deep px-4 py-3 text-center text-sm font-semibold text-primary-foreground">Call (561) 203-1900</a>'
        f"</nav>"
    )


def inject_mobile_menu(content: str, prefix: str) -> str:
    if 'id="mobile-menu"' in content:
        content = re.sub(r'<nav id="mobile-menu".*?</nav>', mobile_nav_html(prefix), content, flags=re.DOTALL)
    else:
        content = content.replace("</header>", f"</header>{mobile_nav_html(prefix)}", 1)

    if MOBILE_MENU_SCRIPT not in content:
        content = content.replace(
            'aria-label="Toggle menu"',
            'id="mobile-menu-button" aria-expanded="false" aria-label="Toggle menu"',
            1,
        )
        content = content.replace("</body>", f"{MOBILE_MENU_SCRIPT}</body>", 1)
    return content


def inject_footer_sitemap(content: str, prefix: str) -> str:
    link = f'<li><a href="{prefix}sitemap.html" class="text-white/85 hover:text-white">Sitemap</a></li>'
    if "sitemap.html" in content:
        return content
    return content.replace(
        'Contact Us</a></li></ul>',
        'Contact Us</a></li>' + link + '</ul>',
        1,
    )


def fix_broken_phone_wrapping(content: str) -> str:
    """Undo accidental nested tel links and HTML inside meta attributes."""
    content = content.replace(
        '<a href="tel:+15612031900" class="text-inherit hover:underline">(561) 203-1900</a>',
        "(561) 203-1900",
    )
    return content


def collect_pages() -> list[tuple[str, str, str]]:
    pages: list[tuple[str, str, str]] = []
    for dirpath, _, files in os.walk(ROOT):
        if any(x in dirpath for x in (".git", "node_modules", "src", "scripts")):
            continue
        for name in files:
            if name != "index.html":
                continue
            path = os.path.join(dirpath, name)
            rel = os.path.relpath(path, ROOT).replace("\\", "/")
            title_m = re.search(r"<title>([^<]+)</title>", open(path, encoding="utf-8").read())
            title = title_m.group(1) if title_m else rel
            pages.append((rel, page_canonical(path), title))
    return sorted(pages, key=lambda x: x[0])


def write_sitemap_xml(pages: list[tuple[str, str, str]]) -> None:
    urlset = Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    today = date.today().isoformat()
    for rel, url, _ in pages:
        if rel == "sitemap.html":
            continue
        url_el = SubElement(urlset, "url")
        SubElement(url_el, "loc").text = url
        SubElement(url_el, "lastmod").text = today
        SubElement(url_el, "changefreq").text = "monthly"
        SubElement(url_el, "priority").text = "1.0" if rel == "index.html" else "0.7"
    xml_path = os.path.join(ROOT, "sitemap.xml")
    with open(xml_path, "wb") as f:
        f.write(b'<?xml version="1.0" encoding="UTF-8"?>\n')
        f.write(tostring(urlset, encoding="utf-8"))
    print(f"wrote {xml_path} ({len(pages)} URLs)")


def write_sitemap_html(pages: list[tuple[str, str, str]]) -> None:
    items = "\n".join(
        f'    <li><a href="{rel if rel != "index.html" else "./"}">{title}</a></li>'
        for rel, _, title in pages
        if rel != "sitemap.html"
    )
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sitemap | Gardens Pool Service</title>
  <meta name="description" content="HTML sitemap for Gardens Pool Service — Palm Beach Gardens pool cleaning and maintenance.">
  <link rel="canonical" href="{SITE_URL}/sitemap.html">
  <link rel="stylesheet" href="assets/gardens-pool-service.css">
</head>
<body class="bg-background text-foreground" style="font-family:system-ui,sans-serif;margin:0;padding:2rem">
  <main style="max-width:48rem;margin:0 auto">
    <h1 style="font-size:2rem;font-weight:700">Sitemap</h1>
    <p style="color:#475569;margin:1rem 0 2rem">All pages on Gardens Pool Service — Palm Beach Gardens, FL.</p>
    <ul style="line-height:2;padding-left:1.25rem">
{items}
    </ul>
    <p style="margin-top:2rem"><a href="index.html">← Back to Home</a> · <a href="tel:+15612031900">Call (561) 203-1900</a></p>
  </main>
</body>
</html>
"""
    path = os.path.join(ROOT, "sitemap.html")
    with open(path, "w", encoding="utf-8", newline="") as f:
        f.write(html)
    print(f"wrote {path}")


def patch_all_html() -> None:
    count = 0
    for dirpath, _, files in os.walk(ROOT):
        if any(x in dirpath for x in (".git", "node_modules", "src", "scripts")):
            continue
        for name in files:
            if name != "index.html":
                continue
            path = os.path.join(dirpath, name)
            prefix = page_prefix(path)
            with open(path, encoding="utf-8") as f:
                content = f.read()
            content = update_html_references(content)
            content = inject_mobile_menu(content, prefix)
            content = inject_footer_sitemap(content, prefix)
            content = fix_broken_phone_wrapping(content)
            with open(path, "w", encoding="utf-8", newline="") as f:
                f.write(content)
            count += 1
    print(f"patched {count} html files")


def add_sitemap_link_to_index() -> None:
    index_path = os.path.join(ROOT, "index.html")
    with open(index_path, encoding="utf-8") as f:
        content = f.read()
    if 'rel="sitemap"' not in content:
        content = content.replace(
            '<link rel="canonical"',
            '<link rel="sitemap" type="application/xml" href="sitemap.xml"><link rel="canonical"',
            1,
        )
        with open(index_path, "w", encoding="utf-8", newline="") as f:
            f.write(content)


def report_size() -> None:
    total = sum(
        os.path.getsize(os.path.join(dp, f))
        for dp, _, files in os.walk(ROOT)
        for f in files
        if not any(x in dp for x in (".git", "node_modules", "src", "scripts"))
    )
    assets_total = sum(os.path.getsize(os.path.join(ASSETS, f)) for f in os.listdir(ASSETS))
    print(f"\nDeployable size (excl. src/scripts): {total / 1024 / 1024:.2f} MB")
    print(f"assets/ size: {assets_total / 1024:.0f} KB ({len(os.listdir(ASSETS))} files)")


def main() -> None:
    print("=== Step 1: Rename images to SEO-friendly names ===")
    rename_assets()
    print("\n=== Step 2: Prune unused assets ===")
    prune_assets()
    print("\n=== Step 3: Patch all HTML files ===")
    patch_all_html()
    print("\n=== Step 4: Generate sitemaps ===")
    pages = collect_pages()
    write_sitemap_xml(pages)
    write_sitemap_html(pages)
    add_sitemap_link_to_index()
    report_size()
    print("\nDone.")


if __name__ == "__main__":
    main()

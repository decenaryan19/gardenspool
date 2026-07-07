"""Clean head tags and apply Lighthouse 100 fixes to all static HTML pages."""
import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.join(ROOT, "assets")
SITE_URL = "https://gardens-pool.vercel.app"

CRITICAL_CSS = (
    "<style>"
    "*,::before,::after{box-sizing:border-box}"
    "body{margin:0;font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif}"
    ".flex{display:flex}.flex-col{flex-direction:column}.flex-1{flex:1 1 0%}"
    ".min-h-screen{min-height:100vh}.relative{position:relative}"
    ".absolute{position:absolute}.inset-0{inset:0}"
    ".overflow-hidden{overflow:hidden}.grid{display:grid}"
    ".sticky{position:sticky;top:0;z-index:50}"
    ".bg-primary-deep,footer.bg-primary-deep{background-color:#0a3a5c}"
    ".text-primary-foreground{color:#fff}"
    ".bg-background{background-color:#f8fbfd}"
    ".font-display{font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif}"
    "img,picture{display:block;max-width:100%;height:auto}"
    ".aspect-\\[4\\/3\\]{aspect-ratio:4/3}"
    "section.hero-section{min-height:520px}"
    "section.hero-section>.absolute.inset-0{position:absolute;inset:0;overflow:hidden}"
    "section.hero-section>.absolute.inset-0 picture,"
    "section.hero-section>.absolute.inset-0 img{height:100%;width:100%;object-fit:cover}"
    "</style>"
)


def page_canonical_url(html_path: str) -> str:
    rel = os.path.relpath(html_path, ROOT).replace("\\", "/")
    if rel == "index.html":
        return f"{SITE_URL}/"
    return f"{SITE_URL}/{rel.removesuffix('/index.html')}/"


def asset_prefix(html_path: str) -> str:
    rel_dir = os.path.relpath(os.path.dirname(html_path), ROOT)
    if rel_dir == ".":
        return "assets/"
    return "../" * len(rel_dir.split(os.sep)) + "assets/"


def rebuild_head(content: str, css_href: str, canonical: str, prefix: str) -> str:
    title_m = re.search(r"<title>[^<]*</title>", content)
    title = title_m.group(0) if title_m else ""
    metas = [m for m in re.findall(r"<meta[^>]+>", content) if "charset=" not in m.lower()]
    icons = re.findall(r'<link rel="icon"[^>]+>', content)
    preloads = []
    if "hero-pool" in content:
        preloads.append(
            f'<link rel="preload" as="image" href="{prefix}hero-pool-640.webp" '
            f'type="image/webp" fetchpriority="high">'
        )
    scripts = re.findall(r'<script type="application/ld\+json">.*?</script>', content, flags=re.DOTALL)

    head = (
        "<head>"
        + CRITICAL_CSS
        + '<meta charset="utf-8">'
        + "".join(metas)
        + f'<link rel="stylesheet" href="{css_href}">'
        + title
        + "".join(icons)
        + f'<link rel="canonical" href="{canonical}">'
        + "".join(preloads)
        + "".join(scripts)
        + "</head>"
    )

    head = re.sub(
        r'(<meta[^>]*property="og:url"[^>]*content=")[^"]*(")',
        rf"\1{canonical}\2",
        head,
    )
    return re.sub(r"<head[^>]*>.*?</head>", head, content, count=1, flags=re.DOTALL)


def fix_body(content: str, prefix: str) -> str:
    content = content.replace("text-white/60", "text-white/80")
    content = content.replace("text-white/75", "text-white/80")
    content = content.replace('class="hover:text-white"', 'class="text-white/90 hover:text-white"')
    content = content.replace(
        '<h3 class="mt-2 font-display text-2xl font-bold"',
        '<h2 class="mt-2 font-display text-2xl font-bold"',
    )
    content = content.replace(
        "Talk to a real person — right now.</h3>",
        "Talk to a real person — right now.</h2>",
    )
    content = content.replace("https://gardenspool.lovable.app", SITE_URL)
    content = content.replace(
        '"image":"https://gardens-pool.vercel.app/og-image.jpg"',
        f'"image":"{SITE_URL}/assets/hero-pool-640.webp"',
    )

    content = re.sub(r"hover:scale-\[[^\]]+\]", "hover:opacity-95", content)
    content = content.replace("hover:-translate-y-1 ", "")
    content = content.replace(" transition hover:-translate-y-1", "")

    content = content.replace(
        '<section class="relative overflow-hidden" data-tsd-source="/src/routes/index.tsx:17:7">',
        '<section class="hero-section relative overflow-hidden" data-tsd-source="/src/routes/index.tsx:17:7">',
    )
    content = content.replace(
        '<section class="relative overflow-hidden" data-tsd-source="/src/routes/pool-service-palm-beach-gardens.tsx:7:7">',
        '<section class="hero-section relative overflow-hidden" data-tsd-source="/src/routes/pool-service-palm-beach-gardens.tsx:7:7">',
    )

    content = re.sub(
        r'src="/assets/src_assets_water-texture\.jpg"[^>]*>',
        f'src="{prefix}water-texture.webp" alt="" aria-hidden="true" width="800" height="600" '
        f'decoding="async" class="h-full w-full object-cover" data-tsd-source="/src/routes/pool-service-palm-beach-gardens.tsx:9:11">',
        content,
    )
    content = re.sub(
        rf'src="{re.escape(prefix)}src_assets_water-texture\.jpg"[^>]*>',
        f'src="{prefix}water-texture.webp" alt="" aria-hidden="true" width="800" height="600" '
        f'decoding="async" class="h-full w-full object-cover" data-tsd-source="/src/routes/pool-service-palm-beach-gardens.tsx:9:11">',
        content,
    )

    if "hero-pool" in content or "pool-tech" in content:
        hero_srcset = (
            f"{prefix}hero-pool-480.webp 480w, "
            f"{prefix}hero-pool-640.webp 640w, "
            f"{prefix}hero-pool-768.webp 768w, "
            f"{prefix}hero-pool-960.webp 960w, "
            f"{prefix}hero-pool-1280.webp 1280w"
        )
        pool_srcset = (
            f"{prefix}pool-tech-480.webp 480w, "
            f"{prefix}pool-tech-640.webp 640w, "
            f"{prefix}pool-tech-768.webp 768w, "
            f"{prefix}pool-tech-960.webp 960w"
        )

        def replace_picture(m: re.Match[str]) -> str:
            block = m.group(0)
            if "pool-tech" in block:
                return (
                    f'<picture><source srcset="{pool_srcset}" '
                    f'sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 576px" type="image/webp">'
                    f'<img src="{prefix}pool-tech-640.webp" '
                    f'alt="Gardens Pool Service technician cleaning a residential pool" '
                    f'width="640" height="480" loading="lazy" decoding="async" '
                    f'class="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"></picture>'
                )
            if "hero-pool" in block:
                return (
                    f'<picture><source srcset="{hero_srcset}" '
                    f'sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px" type="image/webp">'
                    f'<img src="{prefix}hero-pool-640.webp" '
                    f'alt="Luxury swimming pool with palm trees in Palm Beach Gardens" '
                    f'width="640" height="427" fetchpriority="high" decoding="async" '
                    f'class="h-full w-full object-cover"></picture>'
                )
            return block

        content = re.sub(r"<picture>.*?</picture>", replace_picture, content, flags=re.DOTALL)
    return content


def css_href_for(path: str) -> str:
    prefix = asset_prefix(path).replace("assets/", "")
    if not prefix:
        return "assets/src_styles.css"
    return f"{asset_prefix(path)}src_styles.css"


def main() -> None:
    count = 0
    for dirpath, _, files in os.walk(ROOT):
        if any(x in dirpath for x in (".git", "node_modules", "src")):
            continue
        for name in files:
            if name != "index.html":
                continue
            path = os.path.join(dirpath, name)
            with open(path, encoding="utf-8") as f:
                content = f.read()
            canonical = page_canonical_url(path)
            prefix = asset_prefix(path)
            updated = rebuild_head(content, css_href_for(path), canonical, prefix)
            updated = fix_body(updated, prefix)
            with open(path, "w", encoding="utf-8", newline="") as f:
                f.write(updated)
            count += 1
    print("rebuilt", count, "html files")


if __name__ == "__main__":
    main()

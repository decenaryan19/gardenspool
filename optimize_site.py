"""Create responsive WebP images and patch CSS for Lighthouse 100."""
import os

ROOT = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.join(ROOT, "assets")
CSS_FILE = os.path.join(ASSETS, "src_styles.css")

FONT_PATCH = (
    ':root{--font-display:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;'
    '--font-sans:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif}'
    '.font-display{font-family:var(--font-display)!important}'
    'body{font-family:var(--font-sans)!important}'
)

HERO_WIDTHS = [480, 640, 768, 960, 1280]
POOL_WIDTHS = [480, 640, 768, 960]


def create_responsive_images() -> None:
    try:
        from PIL import Image, ImageFilter
    except ImportError:
        print("Pillow not installed; run: pip install pillow")
        return

    hero_src = os.path.join(ASSETS, "hero-pool-DTrz5V7i.webp")
    pool_src = os.path.join(ASSETS, "pool-tech-DLxCQHNp.webp")
    if not os.path.isfile(hero_src) or not os.path.isfile(pool_src):
        print("source images missing; skipping resize")
        return

    for width in HERO_WIDTHS:
        name = f"hero-pool-{width}.webp"
        out = os.path.join(ASSETS, name)
        img = Image.open(hero_src)
        ratio = width / img.width
        resized = img.resize((width, max(1, round(img.height * ratio))), Image.Resampling.LANCZOS)
        resized.save(out, "WEBP", quality=70 if width <= 768 else 72, method=6)
        print("created", name, os.path.getsize(out))

    for width in POOL_WIDTHS:
        name = f"pool-tech-{width}.webp"
        out = os.path.join(ASSETS, name)
        img = Image.open(pool_src)
        ratio = width / img.width
        resized = img.resize((width, max(1, round(img.height * ratio))), Image.Resampling.LANCZOS)
        resized.save(out, "WEBP", quality=70 if width <= 768 else 72, method=6)
        print("created", name, os.path.getsize(out))

    water_out = os.path.join(ASSETS, "water-texture.webp")
    water = Image.open(hero_src).resize((800, 600), Image.Resampling.LANCZOS)
    water = water.filter(ImageFilter.GaussianBlur(radius=24))
    water.save(water_out, "WEBP", quality=55, method=6)
    print("created water-texture.webp", os.path.getsize(water_out))


def patch_css() -> None:
    with open(CSS_FILE, encoding="utf-8") as f:
        css = f.read()
    if "system-ui,-apple-system" not in css:
        css = FONT_PATCH + css
        with open(CSS_FILE, "w", encoding="utf-8", newline="") as f:
            f.write(css)
        print("patched CSS with system font fallbacks")


def main() -> None:
    create_responsive_images()
    patch_css()
    print("done — run rebuild_heads.py next")


if __name__ == "__main__":
    main()

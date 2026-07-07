"""Replace tel: links with WhatsApp Click-to-Chat across all static HTML."""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WA_URL = "https://wa.me/15616772311?text=Hi!%20I'm%20interested%20in%20your%20pool%20services"
WA_ATTRS = f'href="{WA_URL}" target="_blank" rel="noopener noreferrer"'

REPLACEMENTS = [
    ('href="tel:+15612031900"', WA_ATTRS),
    ("+1-561-203-1900", "+1-561-677-2311"),
    ("(561) 203-1900", "(561) 677-2311"),
    ("Call 24 hrs · (561) 677-2311", "WhatsApp Us"),
    ("Call 24 hours: (561) 677-2311", "WhatsApp Us"),
    ("Call 24 hours -", "WhatsApp us -"),
    ('class="mt-2 block rounded-full bg-primary-deep px-4 py-3 text-center text-sm font-semibold text-primary-foreground">Call (561) 677-2311</a>',
     'class="mt-2 block rounded-full bg-primary-deep px-4 py-3 text-center text-sm font-semibold text-primary-foreground">WhatsApp Us</a>'),
    (">📞 (561) 677-2311</a>", ">WhatsApp Us</a>"),
    ("Call (561) 677-2311", "WhatsApp Us"),
]

SKIP_DIRS = {".git", "node_modules", "src", "scripts"}


def patch(content: str) -> str:
    for old, new in REPLACEMENTS:
        content = content.replace(old, new)
    # Meta descriptions: keep readable contact line
    content = content.replace(
        "Same-day response. Call (561) 677-2311.",
        "Same-day response. Message us on WhatsApp.",
    )
    content = content.replace(
        "Same-day service. Call (561) 677-2311.",
        "Same-day service. Message us on WhatsApp.",
    )
    content = content.replace(
        "Call 24 hours: (561) 677-2311",
        "WhatsApp us anytime",
    )
    return content


def main() -> None:
    count = 0
    for dirpath, _, files in os.walk(ROOT):
        if any(part in SKIP_DIRS for part in dirpath.split(os.sep)):
            continue
        for name in files:
            if not name.endswith(".html"):
                continue
            path = os.path.join(dirpath, name)
            with open(path, encoding="utf-8") as f:
                original = f.read()
            updated = patch(original)
            if updated != original:
                with open(path, "w", encoding="utf-8", newline="") as f:
                    f.write(updated)
                count += 1
                print("updated", os.path.relpath(path, ROOT))
    print(f"done — {count} files")


if __name__ == "__main__":
    main()

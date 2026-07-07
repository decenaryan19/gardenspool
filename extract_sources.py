import json
import base64
import re
import os

ROOT = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.join(ROOT, "assets")
OUT = os.path.join(ROOT, "src")
TARGETS = ("SiteFooter", "index.tsx", "__root", "styles.css")

os.makedirs(OUT, exist_ok=True)

for fn in os.listdir(ASSETS):
    if not fn.endswith((".tsx", ".ts", ".css")):
        continue
    if not any(t in fn for t in TARGETS):
        continue
    path = os.path.join(ASSETS, fn)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    m = re.search(r"sourceMappingURL=data:application/json;base64,([A-Za-z0-9+/=]+)", content)
    if not m:
        print(f"skip (no map): {fn}")
        continue
    sm = json.loads(base64.b64decode(m.group(1)))
    src_path = sm.get("sources", [""])[0]
    sc = sm.get("sourcesContent", [None])[0]
    if not sc:
        print(f"skip (no content): {fn}")
        continue
    # Normalize path: /dev-server/src/... -> src/...
    rel = src_path.replace("/dev-server/", "").lstrip("/")
    if rel.startswith("src/"):
        rel = rel[4:]
    rel = rel.split("?")[0]
    out_path = os.path.join(OUT, rel.replace("/", os.sep))
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(sc)
    print(f"extracted: {rel}")

import json
import re
import sys

for label, path in [("DESKTOP", r"c:\Users\yangz\Downloads\DESKTOP.html"), ("MOBILE", r"c:\Users\yangz\Downloads\MOBILE.html")]:
    with open(path, encoding="utf-8") as f:
        html = f.read()
    m = re.search(r"window\.__LIGHTHOUSE_JSON__ = (\{.*?\});\s*</script>", html, re.DOTALL)
    if not m:
        print(label, "NO JSON")
        continue
    data = json.loads(m.group(1))
    print("===", label, "===")
    for k, v in data.get("categories", {}).items():
        score = v.get("score")
        print(" ", v.get("title", k) + ":", int(score * 100) if score is not None else "n/a")
    print(" FAILING:")
    for aid, a in data.get("audits", {}).items():
        s = a.get("score")
        if s is not None and s < 1:
            print("  [%s] %s: %s" % (int(s * 100) if s else 0, aid, a.get("title")))
            details = a.get("details") or {}
            for item in (details.get("items") or [])[:4]:
                node = item.get("node") or {}
                if node.get("snippet"):
                    print("    ->", node["snippet"][:140])
                elif item.get("url"):
                    print("    ->", item["url"][:120], "wasted", item.get("wastedBytes", ""))

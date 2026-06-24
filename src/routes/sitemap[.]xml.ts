import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CATEGORY_LABELS, LEGACY_POSTS } from "@/lib/legacy-posts";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/pool-service-palm-beach-gardens/", changefreq: "monthly", priority: "0.9" },
          { path: "/about-gardens-pool-service/", changefreq: "monthly", priority: "0.7" },
          { path: "/contact-gardens-pool-service/", changefreq: "monthly", priority: "0.8" },
          ...Object.keys(CATEGORY_LABELS).map((c) => ({
            path: `/${c}/`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          ...LEGACY_POSTS.map((p) => ({
            path: `/${p.category}/${p.slug}/`,
            changefreq: "monthly" as const,
            priority: "0.5",
          })),
        ];

        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

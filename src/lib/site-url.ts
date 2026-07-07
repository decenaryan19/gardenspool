/** Production site URL — used for canonical, Open Graph, and structured data. */
export const SITE_URL = "https://gardens-pool.vercel.app";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

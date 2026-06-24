import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { SiteLayout, CtaBand } from "@/components/SiteLayout";
import { LEGACY_POSTS, CATEGORY_LABELS } from "@/lib/legacy-posts";
import { LEGACY_TAGS } from "@/lib/legacy-tags";

export const Route = createFileRoute("/tag/$tag")({
  loader: ({ params }) => {
    const label = LEGACY_TAGS[params.tag];
    if (!label) throw notFound();
    return { label, tag: params.tag, posts: LEGACY_POSTS };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = `${loaderData.label} | Gardens Pool Service`;
    const desc = `Articles tagged ${loaderData.label} from Gardens Pool Service in Palm Beach Gardens, FL. Call (561) 203-1900.`;
    const url = `/tag/${loaderData.tag}/`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: TagPage,
});

function TagPage() {
  const { label, posts } = Route.useLoaderData();
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_30%_30%,white,transparent_45%),radial-gradient(circle_at_75%_70%,white,transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur">
            Tag
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-primary-foreground text-balance sm:text-5xl">
            {label}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            Browse pool service articles related to {label} from Gardens Pool Service.
          </p>
          <div className="mt-8">
            <a href="tel:+15612031900" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-primary-deep shadow-elegant">
              <Phone className="h-4 w-4" /> Call (561) 203-1900
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((p: typeof posts[number]) => (
            <Link
              key={`${p.category}-${p.slug}`}
              to="/$category/$slug"
              params={{ category: p.category, slug: p.slug }}
              className="group block rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">
                {CATEGORY_LABELS[p.category]}
              </p>
              <h2 className="mt-3 font-display text-xl font-bold text-foreground">{p.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.paragraphs[0]}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep">
                Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}

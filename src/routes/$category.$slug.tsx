import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Phone, Clock4 } from "lucide-react";
import { SiteLayout, CtaBand } from "@/components/SiteLayout";
import { CATEGORY_LABELS, getPost, getPostsByCategory } from "@/lib/legacy-posts";

export const Route = createFileRoute("/$category/$slug")({
  loader: ({ params }) => {
    const label = CATEGORY_LABELS[params.category];
    const post = label ? getPost(params.category, params.slug) : undefined;
    if (!label || !post) throw notFound();
    const related = getPostsByCategory(params.category)
      .filter((p) => p.slug !== params.slug)
      .slice(0, 3);
    return { label, post, related, category: params.category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post, category } = loaderData;
    const title = `${post.title} | Gardens Pool Service`;
    const desc =
      (post.paragraphs[0] ?? "").slice(0, 155) ||
      "Professional pool service in Palm Beach Gardens, FL. Call (561) 203-1900.";
    const url = `/${category}/${post.slug}/`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: post.title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: desc,
            articleSection: loaderData.label,
            author: { "@type": "Organization", name: "Gardens Pool Service" },
            publisher: {
              "@type": "Organization",
              name: "Gardens Pool Service",
            },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post, label, related, category } = Route.useLoaderData();
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_25%_30%,white,transparent_45%),radial-gradient(circle_at_80%_70%,white,transparent_45%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
          <Link
            to="/$category"
            params={{ category }}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur"
          >
            {label}
          </Link>
          <h1 className="mt-5 font-display text-3xl font-bold leading-[1.1] text-primary-foreground text-balance sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="tel:+15612031900"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-primary-deep shadow-elegant"
            >
              <Phone className="h-4 w-4" /> (561) 203-1900
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur">
              <Clock4 className="h-4 w-4" /> Same-day service
            </span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
          {post.paragraphs.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/pool-service-palm-beach-gardens"
            className="inline-flex items-center gap-2 rounded-full bg-primary-deep px-5 py-3 font-semibold text-primary-foreground shadow-card"
          >
            Our Pool Service <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact-gardens-pool-service"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 font-semibold text-foreground hover:bg-secondary"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-foreground">
              More {label} articles
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((r: typeof related[number]) => (
                <Link
                  key={r.slug}
                  to="/$category/$slug"
                  params={{ category, slug: r.slug }}
                  className="group block rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5"
                >
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {r.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep">
                    Read: {r.title} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </SiteLayout>
  );
}

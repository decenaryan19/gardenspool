import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  ShieldCheck,
  Sparkles,
  Clock4,
  Heart,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";
import { SiteLayout, CtaBand } from "@/components/SiteLayout";
// @ts-expect-error vite-imagetools query
import heroPoolAvif from "@/assets/hero-pool.jpg?format=avif&w=1920&quality=55";
// @ts-expect-error vite-imagetools query
import heroPoolWebp from "@/assets/hero-pool.jpg?format=webp&w=1920&quality=70";
// @ts-expect-error vite-imagetools query
import heroPool from "@/assets/hero-pool.jpg?format=jpg&w=1920&quality=70";
// @ts-expect-error vite-imagetools query
import poolTechWebp from "@/assets/pool-tech.jpg?format=webp&w=1280&quality=70";
// @ts-expect-error vite-imagetools query
import poolTech from "@/assets/pool-tech.jpg?format=jpg&w=1280&quality=70";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gardens Pool Service — Palm Beach Gardens Pool Cleaning & Maintenance" },
      {
        name: "description",
        content:
          "Family-owned pool service and weekly maintenance in Palm Beach Gardens, Jupiter & North Palm Beach. Call 24 hours — we show up the same day. (561) 203-1900.",
      },
      { property: "og:title", content: "Gardens Pool Service — Palm Beach Gardens, FL" },
      {
        property: "og:description",
        content:
          "Trusted weekly pool service and maintenance in Palm Beach Gardens, FL. Same-day service. Call (561) 203-1900.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Gardens Pool Service",
          image: "/og-image.jpg",
          telephone: "+1-561-203-1900",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4210 Randolph Way",
            addressLocality: "Palm Beach Gardens",
            addressRegion: "FL",
            postalCode: "33410",
            addressCountry: "US",
          },
          areaServed: ["Palm Beach Gardens", "Jupiter", "North Palm Beach"],
          openingHours: "Mo-Su 00:00-23:59",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroPool}
            alt="Luxury swimming pool with palm trees in Palm Beach Gardens"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/85 via-primary-deep/65 to-primary-deep/20" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:pb-28 lg:pt-24">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Palm Beach Gardens · Jupiter · NPB
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              Crystal clear pools, <span className="text-accent">worry-free</span> ownership.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Gardens Pool Service has provided pool service and maintenance to Palm Beach
              Gardens for years — with exceptional attention spent on the highest level of
              customer service.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="tel:+15612031900"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-primary-deep shadow-elegant transition hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" />
                Call 24 hrs · (561) 203-1900
              </a>
              <Link
                to="/pool-service-palm-beach-gardens"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Our Pool Service <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/85">
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-accent text-accent" /> Family owned & operated
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock4 className="h-4 w-4" /> Same-day service
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" /> Trained & certified techs
              </span>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative rounded-3xl border border-white/20 bg-white/10 p-6 text-primary-foreground backdrop-blur-xl shadow-elegant">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Free Quote
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold">
                Talk to a real person — right now.
              </h3>
              <p className="mt-3 text-sm text-white/80">
                No forms, no waiting. Skip the back-and-forth and get straight answers
                from our local team.
              </p>
              <a
                href="tel:+15612031900"
                className="mt-6 flex items-center justify-between gap-3 rounded-2xl bg-white px-5 py-4 font-display text-xl font-bold text-primary-deep shadow-card transition hover:scale-[1.01]"
              >
                <span>(561) 203-1900</span>
                <Phone className="h-5 w-5" />
              </a>
              <ul className="mt-5 space-y-2 text-sm text-white/85">
                {["Free, no-obligation estimate", "Same-day response", "Weekly service plans available"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "Gardens Pool Service",
              body: "Pool service and maintenance with exceptional attention spent on providing the highest level of customer service.",
              href: "/pool-service-palm-beach-gardens",
            },
            {
              icon: Heart,
              title: "Customer Service",
              body: "A highly trained, dedicated team with one objective: making sure every customer fully enjoys their pool.",
              href: "/about-gardens-pool-service",
            },
            {
              icon: ShieldCheck,
              title: "Customer Satisfaction",
              body: "Built on customer satisfaction — our pool service professionals guarantee the highest quality service.",
              href: "/contact-gardens-pool-service",
            },
          ].map(({ icon: Icon, title, body, href }) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-water-gradient text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 flex-1 text-muted-foreground">{body}</p>
              <Link
                to={href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep transition group-hover:gap-2.5"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICE AREA SPLIT */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative">
            <img
              src={poolTech}
              alt="Gardens Pool Service technician cleaning a residential pool"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-card p-5 shadow-elegant sm:block">
              <p className="font-display text-3xl font-bold text-primary-deep">24/7</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Always Available</p>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">
              Service Area
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Serving Palm Beach Gardens & surrounding areas
            </h2>
            <p className="mt-4 text-muted-foreground">
              As a pool owner, you want to be certain that the pool water you and your family
              swim in is safe and clean — and that the beauty of your pool is preserved.
            </p>
            <p className="mt-4 text-muted-foreground">
              Gardens Pool Service is family owned and operated. We pride ourselves in offering
              friendly, reliable and exceptional pool services to Palm Beach Gardens, FL and
              surrounding areas.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "Weekly pool cleaning",
                "Water chemistry & balancing",
                "Filter & pump service",
                "Same-day response",
                "Equipment repairs",
                "Trained, certified techs",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+15612031900"
                className="inline-flex items-center gap-2 rounded-full bg-primary-deep px-5 py-3 font-semibold text-primary-foreground shadow-card"
              >
                <Phone className="h-4 w-4" /> (561) 203-1900
              </a>
              <Link
                to="/contact-gardens-pool-service"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 font-semibold text-foreground hover:bg-secondary"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}

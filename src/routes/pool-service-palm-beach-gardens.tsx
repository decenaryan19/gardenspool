import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Clock4, Sparkles, ShieldCheck, Wrench, Droplets, ArrowRight } from "lucide-react";
import { SiteLayout, CtaBand } from "@/components/SiteLayout";
import waterTexture from "@/assets/water-texture.jpg";

export const Route = createFileRoute("/pool-service-palm-beach-gardens")({
  head: () => ({
    meta: [
      { title: "Pool Service Palm Beach Gardens | Gardens Pool Service" },
      {
        name: "description",
        content:
          "Professional pool service in Palm Beach Gardens, Jupiter and North Palm Beach. Trained, certified technicians and same-day service. Call (561) 203-1900.",
      },
      { property: "og:title", content: "Pool Service Palm Beach Gardens" },
      {
        property: "og:description",
        content:
          "Custom swimming pool care and service throughout the Palm Beach area. Same-day service. (561) 203-1900.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/pool-service-palm-beach-gardens/" },
    ],
    links: [{ rel: "canonical", href: "/pool-service-palm-beach-gardens/" }],
  }),
  component: PoolServicePage,
});

function PoolServicePage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={waterTexture} alt="" aria-hidden="true" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur">
            Our Service
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
            Pool Service Palm Beach Gardens
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            An unmatched combination of experience and dedication to customer care. Trust
            your pool to the local experts at Gardens Pool Service.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:+15612031900"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-primary-deep shadow-elegant"
            >
              <Phone className="h-4 w-4" /> Call (561) 203-1900
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
              <Clock4 className="h-4 w-4" /> We show up the same day
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              Gardens Pool Service offers swimming pool owners an unmatched combination of
              experience and dedication to customer care. Our trained and certified
              professional service technicians have provided custom swimming pool care and
              service throughout the Palm Beach area. You can trust your investment to the
              experts at Gardens Pool Service.
            </p>
            <p>
              Our service team is the most accessible and dependable in the business. We can
              have swimming pool technicians on site usually within hours anywhere in
              Jupiter, Palm Beach Gardens, or North Palm Beach.
            </p>
            <p>
              We have all the pool service supplies you need, all the time. We want our
              customers to be enjoying their pools — not worrying about them.
            </p>
            <p className="font-semibold text-foreground">Call us today at (561) 203-1900.</p>
            <p className="font-semibold text-primary-deep">We show up the same day!</p>
          </div>

          <aside className="space-y-4">
            {[
              {
                icon: Droplets,
                title: "Weekly Cleaning",
                body: "Skim, brush, vacuum, empty baskets and balance chemistry — every visit.",
              },
              {
                icon: Wrench,
                title: "Equipment Service",
                body: "Pumps, filters, heaters and salt systems — diagnosed and repaired by certified techs.",
              },
              {
                icon: Sparkles,
                title: "Chemical Balancing",
                body: "Pristine, safe water tuned to your pool — every single week, year round.",
              },
              {
                icon: ShieldCheck,
                title: "Trusted Local Pros",
                body: "Family owned and operated right here in Palm Beach Gardens.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-water-gradient text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/about-gardens-pool-service"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 font-semibold text-foreground hover:bg-secondary"
          >
            About Us <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact-gardens-pool-service"
            className="inline-flex items-center gap-2 rounded-full bg-primary-deep px-5 py-3 font-semibold text-primary-foreground shadow-card"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}

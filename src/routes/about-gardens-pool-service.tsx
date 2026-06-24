import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Heart, Users, Award, Clock4, ArrowRight } from "lucide-react";
import { SiteLayout, CtaBand } from "@/components/SiteLayout";

export const Route = createFileRoute("/about-gardens-pool-service")({
  head: () => ({
    meta: [
      { title: "About Gardens Pool Service | Palm Beach Gardens, FL" },
      {
        name: "description",
        content:
          "Family owned and operated. We make pool ownership worry-free with reliable service and maintenance throughout Palm Beach Gardens. Call (561) 203-1900.",
      },
      { property: "og:title", content: "About Gardens Pool Service" },
      {
        property: "og:description",
        content:
          "More than just service and maintenance — we take the worry out of pool ownership.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about-gardens-pool-service/" },
    ],
    links: [{ rel: "canonical", href: "/about-gardens-pool-service/" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_30%_30%,white,transparent_45%),radial-gradient(circle_at_75%_70%,white,transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur">
            About Us
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
            About Gardens Pool Service
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            More than just service and maintenance — our objective is to make your pool
            experience worry and hassle-free.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              Gardens Pool Service is more than just service and maintenance. Our objective
              is to make your pool experience worry and hassle-free. Our services will keep
              your pool sparkling clean and trouble free.
            </p>
            <p>
              We have been helping pool owners enjoy the pleasures of pool ownership. We
              strive to ensure that your pool operates at maximum efficiency all year long!
            </p>
            <p className="font-display text-2xl font-bold text-primary-deep">
              Gardens Pool Service aims to take the worry out of pool ownership.
            </p>
            <p className="font-semibold text-foreground">Call us today at (561) 203-1900.</p>
            <p className="font-semibold text-primary-deep">We show up the same day!</p>
            <div className="pt-2">
              <a
                href="tel:+15612031900"
                className="inline-flex items-center gap-2 rounded-full bg-primary-deep px-5 py-3 font-semibold text-primary-foreground shadow-card"
              >
                <Phone className="h-4 w-4" /> (561) 203-1900
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Heart, label: "Family Owned & Operated", value: "Local roots, real care" },
              { icon: Users, label: "Dedicated Team", value: "Trained pool pros" },
              { icon: Award, label: "Quality Guaranteed", value: "Built on satisfaction" },
              { icon: Clock4, label: "Always On Call", value: "24/7 same-day service" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-water-gradient text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display text-lg font-bold text-foreground">{label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/pool-service-palm-beach-gardens"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 font-semibold text-foreground hover:bg-secondary"
          >
            Our Pool Service <ArrowRight className="h-4 w-4" />
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

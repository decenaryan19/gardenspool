import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock4, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact-gardens-pool-service")({
  head: () => ({
    meta: [
      { title: "Contact Gardens Pool Service | (561) 203-1900" },
      {
        name: "description",
        content:
          "Contact Gardens Pool Service in Palm Beach Gardens, FL. Call 24 hours: (561) 203-1900. 4210 Randolph Way, Palm Beach Gardens, FL 33410.",
      },
      { property: "og:title", content: "Contact Gardens Pool Service" },
      {
        property: "og:description",
        content: "Call 24 hours: (561) 203-1900 — same-day pool service in Palm Beach Gardens.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact-gardens-pool-service/" },
    ],
    links: [{ rel: "canonical", href: "/contact-gardens-pool-service/" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_25%_30%,white,transparent_45%),radial-gradient(circle_at_80%_70%,white,transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur">
            Contact
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
            Contact Gardens Pool Service
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            Call 24 hours — we&apos;ll show up the same day with a free, no-obligation estimate.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="tel:+15612031900"
            className="group relative overflow-hidden rounded-3xl bg-primary-deep p-8 text-primary-foreground shadow-elegant transition hover:-translate-y-1"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
              <Phone className="h-6 w-6" />
            </span>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Call 24 Hours
            </p>
            <p className="mt-2 font-display text-3xl font-bold">(561) 203-1900</p>
            <p className="mt-3 text-sm text-white/80">
              Tap to call — talk to a real local team member, any time.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Call now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </a>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-water-gradient text-primary-foreground">
              <MapPin className="h-6 w-6" />
            </span>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Address
            </p>
            <p className="mt-2 font-display text-xl font-bold text-foreground">
              4210 Randolph Way
            </p>
            <p className="text-foreground/85">Palm Beach Gardens, FL 33410</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=4210+Randolph+Way+Palm+Beach+Gardens+FL+33410"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep"
            >
              Open in Maps <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sun-gradient text-foreground">
              <Clock4 className="h-6 w-6" />
            </span>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Hours
            </p>
            <p className="mt-2 font-display text-xl font-bold text-foreground">Available 24/7</p>
            <p className="text-foreground/85">Same-day pool service across Palm Beach Gardens.</p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-card">
          <iframe
            title="Gardens Pool Service location map"
            src="https://www.google.com/maps?q=4210+Randolph+Way,+Palm+Beach+Gardens,+FL+33410&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 font-semibold text-foreground hover:bg-secondary"
          >
            Home <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/pool-service-palm-beach-gardens"
            className="inline-flex items-center gap-2 rounded-full bg-primary-deep px-5 py-3 font-semibold text-primary-foreground shadow-card"
          >
            Our Pool Service <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

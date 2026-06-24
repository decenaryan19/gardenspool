import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_45%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_auto] md:items-center md:py-16">
        <div>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
            Ready for a sparkling clean pool?
          </h2>
          <p className="mt-3 max-w-2xl text-white/85">
            Call 24 hours for a free, no-obligation estimate. We show up the same day.
          </p>
        </div>
        <a
          href="tel:+15612031900"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-display text-lg font-semibold text-primary-deep shadow-elegant transition hover:scale-[1.02]"
        >
          📞 (561) 203-1900
        </a>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Waves } from "lucide-react";
import { useState } from "react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Pool Service", to: "/pool-service-palm-beach-gardens" },
  { label: "About Us", to: "/about-gardens-pool-service" },
  { label: "Contact Us", to: "/contact-gardens-pool-service" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-hero-gradient text-primary-foreground shadow-glow">
            <Waves className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-bold leading-tight text-foreground sm:text-xl">
              Gardens Pool Service
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Palm Beach Gardens, FL
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary-deep"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+15612031900"
            className="hidden items-center gap-2 rounded-full bg-primary-deep px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition hover:opacity-95 md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            <span>(561) 203-1900</span>
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/90 hover:bg-secondary [&.active]:bg-secondary [&.active]:text-primary-deep"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+15612031900"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary-deep px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Call (561) 203-1900
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

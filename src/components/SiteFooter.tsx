import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Waves } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:gap-16">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
              <Waves className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold">Gardens Pool Service</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            Family owned and operated. Reliable weekly pool service and maintenance
            throughout Palm Beach Gardens, Jupiter and North Palm Beach.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="text-white/85 hover:text-white">Home</Link></li>
            <li><Link to="/pool-service-palm-beach-gardens" className="text-white/85 hover:text-white">Pool Service</Link></li>
            <li><Link to="/about-gardens-pool-service" className="text-white/85 hover:text-white">About Us</Link></li>
            <li><Link to="/contact-gardens-pool-service" className="text-white/85 hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href="tel:+15612031900" className="hover:text-white">(561) 203-1900</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>4210 Randolph Way, Palm Beach Gardens, FL 33410</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Available 24 hours — same-day service</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:px-6">
          <p>© {new Date().getFullYear()} Gardens Pool Service — Palm Beach Gardens, FL</p>
          <p>#1 Pool Service Company in Palm Beach Gardens</p>
        </div>
      </div>
    </footer>
  );
}

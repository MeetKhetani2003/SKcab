import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import {
  ADDRESS_LINE,
  BUSINESS_NAME,
  PHONE_LINK,
  PHONE_NUMBER,
} from "@/lib/constants";
import { FOOTER_AREAS, FOOTER_LINK_GROUPS } from "@/lib/data";
import WhatsAppButton from "./WhatsAppButton";

const headingClass =
  "text-sm font-bold uppercase tracking-wider text-amber-400";
const linkClass =
  "inline-flex min-h-8 items-center text-slate-300 transition-colors hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {FOOTER_LINK_GROUPS.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className={headingClass}>{group.title}</h2>
            <ul className="mt-4 space-y-1">
              {group.links.map((link) => (
                <li key={`${group.title}-${link.label}`}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <section aria-labelledby="footer-areas">
          <h2 id="footer-areas" className={headingClass}>
            Ahmedabad Areas
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1">
            {FOOTER_AREAS.map((area) => (
              <li key={area} className="flex items-center gap-1.5 py-1">
                <MapPin
                  className="h-3.5 w-3.5 shrink-0 text-amber-500"
                  aria-hidden="true"
                />
                {area}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact" className={headingClass}>
            Contact
          </h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={PHONE_LINK}
                className="inline-flex min-h-8 items-center gap-2 text-lg font-bold text-white hover:text-amber-400"
              >
                <Phone className="h-5 w-5 text-amber-500" aria-hidden="true" />
                {PHONE_NUMBER}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                className="mt-1 h-5 w-5 shrink-0 text-amber-500"
                aria-hidden="true"
              />
              <span>{ADDRESS_LINE.replace(", India", "")}</span>
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-lg font-bold text-white">Need a Cab?</p>
            <p className="mt-1 text-amber-400">Call {PHONE_NUMBER}</p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={PHONE_LINK}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </a>
              <WhatsAppButton>WhatsApp Us</WhatsAppButton>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-sm text-slate-400 sm:px-6 lg:px-8">
          © {year} {BUSINESS_NAME}, {ADDRESS_LINE}. Airport, local &amp;
          outstation taxi service.
        </p>
      </div>
    </footer>
  );
}

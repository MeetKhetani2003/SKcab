"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { BUSINESS_NAME, PHONE_LINK, PHONE_NUMBER } from "@/lib/constants";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-4 mt-4 inset-x-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="pointer-events-auto flex h-16 items-center justify-between gap-3 rounded-full border border-white/10 bg-slate-950/60 px-4 sm:px-6 shadow-2xl backdrop-blur-xl">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-h-11 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          aria-label={`${BUSINESS_NAME} – Home`}
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-lg"
          />
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-wide text-white">
              SK CAB
            </span>
            <span className="block text-xs font-medium text-amber-400">
              Service · Ahmedabad
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center rounded-lg px-3.5 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-amber-400 ${
                      active
                        ? "bg-white/10 text-amber-400"
                        : "text-slate-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_LINK}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-amber-500 px-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span className="lg:hidden">Call</span>
            <span className="hidden lg:inline">{PHONE_NUMBER}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        hidden={!open}
        className="absolute left-4 right-4 top-24 pointer-events-auto mt-2 rounded-2xl border border-white/10 bg-slate-950/90 shadow-2xl backdrop-blur-xl lg:hidden"
      >
        <ul className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-12 items-center rounded-xl px-4 text-lg font-medium transition-colors ${
                    active
                      ? "bg-amber-500/15 text-amber-400"
                      : "text-slate-100 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

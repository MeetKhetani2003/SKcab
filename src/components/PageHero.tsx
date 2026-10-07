import type { ReactNode } from "react";
import { PHONE_NUMBER } from "@/lib/constants";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: ReactNode;
  whatsappMessage?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  whatsappMessage,
}: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-heading"
      className="relative overflow-hidden bg-slate-900"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.18),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-400">
          {eyebrow}
        </p>
        <h1
          id="page-heading"
          className="max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
        >
          {title}
        </h1>
        <div className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-slate-300">
          {description}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CallButton variant="amber" className="text-lg">
            Call {PHONE_NUMBER}
          </CallButton>
          <WhatsAppButton
            variant="glass"
            message={whatsappMessage}
            className="text-lg"
          >
            WhatsApp Us
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

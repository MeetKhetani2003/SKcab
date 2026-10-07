import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Feature } from "@/lib/data";
import WhatsAppButton from "./WhatsAppButton";

interface FeatureCardProps {
  feature: Feature;
  /** Hide CTAs for informational cards. */
  showCta?: boolean;
}

export default function FeatureCard({
  feature,
  showCta = true,
}: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-400">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-slate-600">
        {feature.description}
      </p>
      {showCta && feature.ctaLabel && (
        <div className="mt-6 flex flex-col gap-3">
          <WhatsAppButton message={feature.whatsappMessage} variant="amber">
            {feature.ctaLabel}
          </WhatsAppButton>
          {feature.learnMoreHref && (
            <Link
              href={feature.learnMoreHref}
              className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-slate-700 hover:text-amber-700"
            >
              Learn more
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      )}
    </article>
  );
}

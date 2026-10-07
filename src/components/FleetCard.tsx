import Image from "next/image";
import { CheckCircle2, Users } from "lucide-react";
import type { Vehicle } from "@/lib/data";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";

interface FleetCardProps {
  vehicle: Vehicle;
  ctaLabel?: string;
  showCall?: boolean;
  priority?: boolean;
}

export default function FleetCard({
  vehicle,
  ctaLabel = "Book This Cab",
  showCall = false,
  priority = false,
}: FleetCardProps) {
  const message = `Hi SK Cab, I want to book a ${vehicle.name} (${vehicle.category}). Please share the current fare and availability.`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[4/3] w-full bg-slate-200">
        <Image
          src={vehicle.image}
          alt={vehicle.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
        <span className="absolute left-3 top-3 rounded-lg bg-slate-900/90 px-3 py-1 text-sm font-semibold text-amber-400">
          {vehicle.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-slate-900">{vehicle.name}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
          <Users className="h-4 w-4 text-amber-700" aria-hidden="true" />
          {vehicle.capacity}
        </p>
        <p className="mt-3 flex-1 leading-relaxed text-slate-600">
          {vehicle.description}
        </p>
        <ul className="mt-4 space-y-1.5">
          {vehicle.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-slate-700"
            >
              <CheckCircle2
                className="h-4 w-4 shrink-0 text-green-600"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-2">
          <WhatsAppButton message={message} variant="amber">
            {ctaLabel}
          </WhatsAppButton>
          {showCall && (
            <CallButton variant="outline">Call to Confirm</CallButton>
          )}
        </div>
      </div>
    </article>
  );
}

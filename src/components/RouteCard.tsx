import { ArrowRight, Navigation } from "lucide-react";
import type { OutstationRoute } from "@/lib/data";
import WhatsAppButton from "./WhatsAppButton";

export default function RouteCard({ route }: { route: OutstationRoute }) {
  const message = `Hi SK Cab, I want a quotation for an outstation taxi: Ahmedabad to ${route.destination}.`;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <h3 className="flex flex-wrap items-center gap-x-2 text-lg font-bold text-slate-900">
        <span>Ahmedabad</span>
        <ArrowRight className="h-5 w-5 text-amber-600" aria-label="to" />
        <span>{route.destination}</span>
      </h3>
      <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
        <Navigation className="h-4 w-4 text-amber-700" aria-hidden="true" />
        {route.approx}
      </p>
      <p className="mt-3 flex-1 leading-relaxed text-slate-600">
        {route.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Trip types">
        {route.tripTypes.map((type) => (
          <li
            key={type}
            className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-800"
          >
            {type}
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <WhatsAppButton message={message} variant="amber" className="w-full">
          Get Quote
        </WhatsAppButton>
      </div>
    </article>
  );
}

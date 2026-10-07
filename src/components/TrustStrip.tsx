import { TRUST_ITEMS } from "@/lib/data";

export default function TrustStrip() {
  return (
    <section
      aria-label="Why riders choose SK Cab Service"
      className="border-b border-slate-200 bg-white"
    >
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-6 sm:px-6 md:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {TRUST_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={item.label}
              className={`flex items-center gap-3 ${
                index === TRUST_ITEMS.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-base font-semibold leading-snug text-slate-900">
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

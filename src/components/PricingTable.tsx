import type { AirportArea } from "@/lib/data";
import WhatsAppButton from "./WhatsAppButton";

interface PricingTableProps {
  rows: AirportArea[];
}

export default function PricingTable({ rows }: PricingTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left">
        <caption className="sr-only">
          Ahmedabad airport taxi fares by area. Contact SK Cab Service for the
          current fare.
        </caption>
        <thead className="bg-slate-900 text-white">
          <tr>
            <th scope="col" className="px-4 py-4 text-sm font-semibold sm:px-6">
              Airport transfer area
            </th>
            <th
              scope="col"
              className="hidden px-4 py-4 text-sm font-semibold sm:table-cell sm:px-6"
            >
              Vehicles
            </th>
            <th
              scope="col"
              className="px-4 py-4 text-right text-sm font-semibold sm:px-6"
            >
              Fare
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((row) => (
            <tr key={row.area} className="transition hover:bg-amber-50">
              <th
                scope="row"
                className="px-4 py-4 text-base font-semibold text-slate-900 sm:px-6"
              >
                <span className="block">{row.area}</span>
                <span className="mt-0.5 block text-sm font-normal text-slate-600 sm:hidden">
                  {row.vehicles}
                </span>
              </th>
              <td className="hidden px-4 py-4 text-slate-700 sm:table-cell sm:px-6">
                {row.vehicles}
              </td>
              <td className="px-4 py-3 text-right sm:px-6">
                <WhatsAppButton
                  variant="amber"
                  message={`Hi SK Cab, please share the current airport taxi fare between Ahmedabad Airport (SVPI) and ${row.area}.`}
                  className="px-3! py-2! text-sm sm:text-base"
                >
                  Get Current Fare
                </WhatsAppButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

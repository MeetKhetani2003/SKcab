"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CalendarDays, MapPin, MessageSquare, Navigation } from "lucide-react";
import {
  CAB_TYPES,
  buildWhatsAppUrl,
  sanitizeInput,
} from "@/lib/constants";
import FormField, { inputClass } from "./FormField";

type FieldName = "pickup" | "drop" | "date" | "cabType";
type Errors = Partial<Record<FieldName, string>>;

/** Formats a yyyy-mm-dd value as "10 October 2026" without timezone shifts. */
function formatDate(value: string): string {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function todayISO(): string {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

export default function BookingForm() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [cabType, setCabType] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  // Set after mount so server and client markup match (avoids hydration mismatch).
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  useEffect(() => {
    setMinDate(todayISO());
  }, []);

  function validate(): Errors {
    const next: Errors = {};
    if (!sanitizeInput(pickup)) next.pickup = "Please enter a pickup location.";
    if (!sanitizeInput(drop)) next.drop = "Please enter a drop location.";
    if (!date) {
      next.date = "Please select a travel date.";
    } else if (date < todayISO()) {
      next.date = "Travel date cannot be in the past.";
    }
    if (!(CAB_TYPES as readonly string[]).includes(cabType)) {
      next.cabType = "Please select a cab type.";
    }
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const message = `Hi SK Cab, I want to book a ride.

Pickup: ${sanitizeInput(pickup)}
Drop: ${sanitizeInput(drop)}
Date: ${formatDate(date)}
Cab Type: ${cabType}`;

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  const describedBy = (name: FieldName) =>
    errors[name] ? `${name}-error` : undefined;

  const customInputClass = "block w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-slate-400 backdrop-blur-md transition-all focus:border-amber-400 focus:bg-white/20 focus:outline-none focus:ring-1 focus:ring-amber-400 aria-invalid:border-red-500 aria-invalid:bg-red-500/10";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="booking-heading"
      className="rounded-3xl border border-white/20 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
    >
      <div className="text-center sm:text-left">
        <h2 id="booking-heading" className="text-2xl font-bold text-white tracking-tight">
          Get a Quick Booking Quote
        </h2>
        <p className="mt-2 text-slate-300 text-sm">
          Tell us your trip details and we will reply instantly on WhatsApp.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <FormField id="pickup" label="Pickup" required error={errors.pickup} labelClassName="text-slate-200">
          <div className="relative">
            <MapPin
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-400"
              aria-hidden="true"
            />
            <input
              id="pickup"
              name="pickup"
              type="text"
              autoComplete="off"
              maxLength={200}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location"
              aria-invalid={errors.pickup ? true : undefined}
              aria-describedby={describedBy("pickup")}
              className={`${customInputClass} pl-12 h-12`}
            />
          </div>
        </FormField>

        <FormField id="drop" label="Drop" required error={errors.drop} labelClassName="text-slate-200">
          <div className="relative">
            <Navigation
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-400"
              aria-hidden="true"
            />
            <input
              id="drop"
              name="drop"
              type="text"
              autoComplete="off"
              maxLength={200}
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              placeholder="Enter destination"
              aria-invalid={errors.drop ? true : undefined}
              aria-describedby={describedBy("drop")}
              className={`${customInputClass} pl-12 h-12`}
            />
          </div>
        </FormField>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField id="date" label="Travel Date" required error={errors.date} labelClassName="text-slate-200">
            <div className="relative">
              <CalendarDays
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-400"
                aria-hidden="true"
              />
              <input
                id="date"
                name="date"
                type="date"
                min={minDate}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                aria-invalid={errors.date ? true : undefined}
                aria-describedby={describedBy("date")}
                className={`${customInputClass} pl-12 h-12`}
                style={{ colorScheme: 'dark' }}
              />
            </div>
          </FormField>

          <FormField id="cabType" label="Cab Type" required error={errors.cabType} labelClassName="text-slate-200">
            <select
              id="cabType"
              name="cabType"
              value={cabType}
              onChange={(e) => setCabType(e.target.value)}
              aria-invalid={errors.cabType ? true : undefined}
              aria-describedby={describedBy("cabType")}
              className={`${customInputClass} h-12 [&>option]:bg-slate-900 [&>option]:text-white`}
            >
              <option value="">Select vehicle</option>
              {CAB_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </FormField>
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-4 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-500/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
      >
        <MessageSquare className="h-5 w-5" aria-hidden="true" />
        Get Quote on WhatsApp
      </button>
      <p className="mt-4 text-center text-xs font-medium text-slate-400">
        No app required • Quick WhatsApp booking
      </p>
    </form>
  );
}

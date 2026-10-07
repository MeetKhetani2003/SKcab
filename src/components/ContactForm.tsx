"use client";

import { useState, type FormEvent } from "react";
import { MessageSquare } from "lucide-react";
import { buildWhatsAppUrl, sanitizeInput } from "@/lib/constants";
import FormField, { inputClass } from "./FormField";

type FieldName = "name" | "phone";
type Errors = Partial<Record<FieldName, string>>;

const PHONE_PATTERN = /^\+?[0-9][0-9\s-]{6,15}$/;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found: Errors = {};
    if (!sanitizeInput(name, 80)) found.name = "Please enter your name.";
    const cleanPhone = sanitizeInput(phone, 20);
    if (!cleanPhone) {
      found.phone = "Please enter your phone number.";
    } else if (!PHONE_PATTERN.test(cleanPhone)) {
      found.phone = "Please enter a valid phone number.";
    }
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const lines = [
      "Hi SK Cab, I have a taxi enquiry.",
      "",
      `Name: ${sanitizeInput(name, 80)}`,
      `Phone: ${cleanPhone}`,
    ];
    if (sanitizeInput(pickup)) lines.push(`Pickup: ${sanitizeInput(pickup)}`);
    if (sanitizeInput(destination))
      lines.push(`Destination: ${sanitizeInput(destination)}`);
    if (sanitizeInput(message, 500))
      lines.push(`Message: ${sanitizeInput(message, 500)}`);

    window.open(
      buildWhatsAppUrl(lines.join("\n")),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="enquiry-heading"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 id="enquiry-heading" className="text-2xl font-extrabold text-slate-900">
        Send an Enquiry
      </h2>
      <p className="mt-1 text-slate-600">
        Fill in your trip details and we will continue the conversation on
        WhatsApp.
      </p>

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField id="name" label="Name" required error={errors.name}>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={80}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={inputClass}
            />
          </FormField>
          <FormField id="phone" label="Phone Number" required error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              maxLength={20}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 98765 43210"
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={inputClass}
            />
          </FormField>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField id="contact-pickup" label="Pickup">
            <input
              id="contact-pickup"
              name="pickup"
              type="text"
              maxLength={200}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Pickup location"
              className={inputClass}
            />
          </FormField>
          <FormField id="contact-destination" label="Destination">
            <input
              id="contact-destination"
              name="destination"
              type="text"
              maxLength={200}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where are you going?"
              className={inputClass}
            />
          </FormField>
        </div>
        <FormField id="contact-message" label="Message">
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            maxLength={500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Date, time, number of passengers or any special request"
            className={inputClass}
          />
        </FormField>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition duration-300 hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      >
        <MessageSquare className="h-5 w-5" aria-hidden="true" />
        Send Enquiry on WhatsApp
      </button>
      <p className="mt-3 text-center text-sm text-slate-600">
        No app required • Quick WhatsApp booking
      </p>
    </form>
  );
}

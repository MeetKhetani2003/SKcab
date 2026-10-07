import type { Metadata } from "next";
import { Info, Repeat, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import RouteCard from "@/components/RouteCard";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  CITY,
  PHONE_LINK,
  PHONE_NUMBER,
  SITE_URL,
  STATE,
} from "@/lib/constants";
import { FARE_DISCLAIMER, KM_RATES, OUTSTATION_ROUTES } from "@/lib/data";

const TITLE = "Outstation Taxi from Ahmedabad | One-Way & Round Trip Cabs";
const DESCRIPTION = `Outstation taxi from Ahmedabad to Statue of Unity, Mount Abu, Udaipur, Somnath, Dwarka, Diu, Vadodara and Surat. One-way and round-trip cabs. Call ${PHONE_NUMBER}.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/outstation-taxi" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/outstation-taxi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Outstation Taxi from Ahmedabad",
  serviceType: "Outstation taxi",
  description: DESCRIPTION,
  url: `${SITE_URL}/outstation-taxi`,
  provider: {
    "@type": "TaxiService",
    name: "SK Cab Service",
    telephone: "+917777919383",
  },
  areaServed: { "@type": "City", name: `${CITY}, ${STATE}` },
};

const TRIP_TYPES = [
  {
    icon: ArrowRight,
    title: "One-Way Taxi",
    description:
      "Travelling only one direction from Ahmedabad? Ask for a one-way cab quotation for your route.",
  },
  {
    icon: Repeat,
    title: "Round-Trip Taxi",
    description:
      "Plan a return journey with the same driver and cab, with flexible stops along the way.",
  },
];

export default function OutstationTaxiPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="One-Way & Round-Trip Cabs"
        title="Outstation Taxi from Ahmedabad"
        description="Travel from Ahmedabad to popular Gujarat and Rajasthan destinations in a clean, comfortable cab with an experienced driver. Call or WhatsApp for your route quotation."
        whatsappMessage="Hi SK Cab, I want to book an outstation taxi from Ahmedabad."
      />

      <section
        id="routes"
        aria-labelledby="routes-heading"
        className="bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="routes-heading"
            eyebrow="Popular Routes"
            title="Popular Outstation Taxi Routes"
            description="Distances and times are approximate and vary with traffic and stops."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OUTSTATION_ROUTES.map((route) => (
              <RouteCard key={route.destination} route={route} />
            ))}
          </div>
          <p className="mt-8 text-center text-slate-600">
            Don&apos;t see your destination? We can arrange taxis to other cities
            too.{" "}
            <a
              href={PHONE_LINK}
              className="font-semibold text-slate-900 underline decoration-amber-500 decoration-2 underline-offset-4"
            >
              Call {PHONE_NUMBER}
            </a>
          </p>
        </div>
      </section>

      <section
        aria-labelledby="trip-types"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="trip-types"
            eyebrow="Trip Types"
            title="One-Way or Round Trip — You Choose"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {TRIP_TYPES.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {type.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-slate-600">
                      {type.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="fares-heading"
        className="bg-slate-900 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="fares-heading"
            theme="dark"
            eyebrow="Outstation Fares"
            title="Starting Per-Km Rates"
            description="Example starting rates for outstation travel. Ask us for the current quotation for your trip."
          />
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {KM_RATES.map((rate) => (
              <div
                key={rate.vehicle}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg backdrop-blur"
              >
                <dt className="text-lg font-semibold text-slate-200">
                  {rate.vehicle}
                </dt>
                <dd className="mt-2 text-4xl font-extrabold text-amber-400">
                  {rate.rate}
                </dd>
                <dd className="mt-1 text-sm text-slate-300">{rate.note}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 text-slate-100">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
              aria-hidden="true"
            />
            <span>{FARE_DISCLAIMER}</span>
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              variant="amber"
              message="Hi SK Cab, please share the current outstation taxi fare from Ahmedabad."
              className="text-lg"
            >
              Request Current Quotation
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <CTASection
        title="Planning an Outstation Trip?"
        description="Tell us your destination, dates and number of passengers. We will share the right cab and the current fare."
        whatsappMessage="Hi SK Cab, I want to book an outstation taxi from Ahmedabad."
      />
    </>
  );
}

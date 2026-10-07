import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ChevronDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import PricingTable from "@/components/PricingTable";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CITY, PHONE_NUMBER, SITE_URL, STATE } from "@/lib/constants";
import {
  AIRPORT_AREAS,
  AIRPORT_FAQS,
  AIRPORT_SERVICES,
  AIRPORT_STEPS,
} from "@/lib/data";

const TITLE = "Ahmedabad Airport Taxi Service | SVPI Airport Cab";
const DESCRIPTION = `Book an Ahmedabad airport taxi for SVPI airport pickup and drop. Early morning and late night transfers across Ahmedabad and Gandhinagar. Call ${PHONE_NUMBER}.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/airport-taxi" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/airport-taxi",
    images: [{ url: "/images/airport-taxi.jpg", alt: "Airport taxi in Ahmedabad" }],
  },
};

const BENEFITS = [
  "Airport pickup and airport drop in Ahmedabad",
  "Early morning and late night airport cabs",
  "Sedan, SUV and Innova Crysta options for luggage and family travel",
  "Simple booking by phone call or WhatsApp",
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ahmedabad Airport Taxi Service",
    serviceType: "Airport taxi",
    description: DESCRIPTION,
    url: `${SITE_URL}/airport-taxi`,
    provider: {
      "@type": "TaxiService",
      name: "SK Cab Service",
      telephone: "+917777919383",
    },
    areaServed: { "@type": "City", name: `${CITY}, ${STATE}` },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AIRPORT_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function AirportTaxiPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="SVPI Airport Cab"
        title="Ahmedabad Airport Taxi Service"
        description="Reliable airport pickup and drop at Sardar Vallabhbhai Patel International Airport (SVPI). Book your Ahmedabad airport cab with SK Cab Service for comfortable, on-time transfers."
        whatsappMessage="Hi SK Cab, I want to book an airport taxi in Ahmedabad."
      />

      <section
        aria-labelledby="airport-intro"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/airport-taxi.jpg"
              alt="SK Cab Service airport taxi waiting at the Ahmedabad airport terminal"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              id="airport-intro"
              align="left"
              eyebrow="Airport Taxi Service Ahmedabad"
              title="Airport Pickup & Drop in Ahmedabad"
              description="Whether you are flying in or heading out, our airport taxi service in Ahmedabad takes the stress out of reaching SVPI airport. Book an airport cab for yourself, your family or your business guests."
            />
            <ul className="mt-6 space-y-3">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton>Call {PHONE_NUMBER}</CallButton>
              <WhatsAppButton message="Hi SK Cab, I want to book an airport pickup/drop at Ahmedabad Airport (SVPI).">
                Book on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="airport-services"
        className="bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="airport-services"
            eyebrow="Airport Transfers"
            title="Airport Taxi Services We Offer"
            description="Pick the transfer that matches your flight and your schedule."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AIRPORT_SERVICES.map((service) => (
              <FeatureCard
                key={service.title}
                showCta={false}
                feature={{ ...service, ctaLabel: "", whatsappMessage: "" }}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="airport-fares"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="airport-fares"
            eyebrow="Airport Taxi Fares"
            title="Airport Cab Fare from Major Areas"
            description="Fares depend on your area, vehicle and timing. Tap Get Current Fare to receive an up-to-date quote on WhatsApp, or call us."
          />
          <div className="mt-10">
            <PricingTable rows={AIRPORT_AREAS} />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="airport-steps"
        className="bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="airport-steps"
            eyebrow="How It Works"
            title="Book Your Airport Cab in 3 Steps"
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {AIRPORT_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-lg font-extrabold text-slate-950">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="airport-faq" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="airport-faq"
            eyebrow="FAQ"
            title="Ahmedabad Airport Taxi Questions"
          />
          <div className="mt-10 space-y-3">
            {AIRPORT_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 open:bg-white open:shadow-sm"
              >
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-amber-700 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need an Airport Cab in Ahmedabad?"
        description="Call or WhatsApp SK Cab Service with your flight timing and pickup location. We will confirm your cab and fare."
        whatsappMessage="Hi SK Cab, I want to book an airport taxi in Ahmedabad."
      />
    </>
  );
}

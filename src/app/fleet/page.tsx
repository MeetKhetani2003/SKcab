import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FleetCard from "@/components/FleetCard";
import CTASection from "@/components/CTASection";
import { PHONE_NUMBER } from "@/lib/constants";
import { FLEET_PAGE_VEHICLES } from "@/lib/data";

const TITLE = "Cab Fleet & Fares Ahmedabad | SK Cab Service";
const DESCRIPTION = `Explore the SK Cab Service fleet in Ahmedabad: Maruti Dzire, Toyota Etios, Maruti Ertiga, Toyota Innova Crysta and Tempo Traveller. Request current fares on ${PHONE_NUMBER}.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/fleet" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/fleet" },
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet & Fares"
        title="Our Cab Fleet & Fares"
        description="From a compact sedan to a Tempo Traveller for groups, pick the cab that suits your airport, local or outstation trip. Fares depend on route, vehicle and trip type, so request the current fare."
        whatsappMessage="Hi SK Cab, please share your cab fleet and current fares."
      />

      <section
        aria-labelledby="fleet-page-heading"
        className="bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="fleet-page-heading"
            eyebrow="Vehicles"
            title="Cabs for Every Journey"
            description="All vehicles are air-conditioned. Fares are quoted per trip so you always get the current rate."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FLEET_PAGE_VEHICLES.map((vehicle) => (
              <FleetCard
                key={vehicle.id}
                vehicle={vehicle}
                ctaLabel="Request Current Fare"
                showCall
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Cab to Choose?"
        description="Tell us how many passengers and how much luggage, and we will recommend the right vehicle and share the current fare."
        whatsappMessage="Hi SK Cab, please help me choose a cab and share the current fare."
      />
    </>
  );
}

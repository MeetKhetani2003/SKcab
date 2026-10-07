import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import TrustStrip from "@/components/TrustStrip";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import FleetCard from "@/components/FleetCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";
import { SERVICE_AREAS } from "@/lib/constants";
import {
  FEATURES,
  HOME_FLEET,
  TESTIMONIALS,
  WHY_CHOOSE_US,
  OUTSTATION_ROUTES,
} from "@/lib/data";

const TITLE = "SK Cab Service Ahmedabad | Airport, Local & Outstation Taxi";
const DESCRIPTION =
  "Book reliable cab service in Ahmedabad for airport transfers, local rides and outstation trips. Call SK Cab Service at +91 77779 19383 or WhatsApp to book.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero>
        <BookingForm />
      </Hero>
      
      <Marquee items={OUTSTATION_ROUTES.map(r => `${r.destination} - ${r.approx}`)} theme="dark" speed="slow" />

      <TrustStrip />

      <AnimatedSection
        id="services"
        aria-labelledby="services-heading"
        className="bg-slate-50 py-16 sm:py-24 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            id="services-heading"
            eyebrow="Our Services"
            title="Airport, City & Outstation Cabs in Ahmedabad"
            description="Whatever the trip, call or WhatsApp SK Cab Service and we will arrange the right cab."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        aria-labelledby="fleet-heading"
        className="bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="fleet-heading"
            eyebrow="Our Fleet"
            title="Choose the Right Cab for Your Trip"
            description="Clean, air-conditioned cars for solo travellers, families and groups."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_FLEET.map((vehicle) => (
              <FleetCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/fleet"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl"
            >
              View all vehicles &amp; request fares
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 text-amber-400" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        aria-labelledby="why-heading"
        className="bg-slate-900 py-16 sm:py-24 relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            id="why-heading"
            theme="dark"
            eyebrow="Why SK Cab Service"
            title="Simple Booking, Comfortable Rides"
            description="We focus on the basics that matter for a good cab experience."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item) => (
              <FeatureCard key={item.title} feature={item} showCta={false} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        aria-labelledby="areas-heading"
        className="bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="areas-heading"
            eyebrow="Service Areas"
            title="Taxi Service Across Ahmedabad & Gandhinagar"
            description="Pickups from every major Ahmedabad neighbourhood and nearby areas."
          />
          <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-4">
            {SERVICE_AREAS.map((area) => (
              <li
                key={area}
                className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-6 py-2 text-base font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-50 hover:shadow-md"
              >
                <MapPin className="h-5 w-5 text-amber-500" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection
        aria-labelledby="reviews-heading"
        className="bg-slate-50 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="reviews-heading"
            eyebrow="Rider Feedback"
            title="What Riders Value Most"
            description="Sample feedback illustrating the experience we aim to deliver."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.quote} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { ADDRESS_LINE, PHONE_LINK, PHONE_NUMBER } from "@/lib/constants";

const TITLE = "Contact SK Cab Service Ahmedabad | Call & WhatsApp";
const DESCRIPTION = `Contact SK Cab Service in Ahmedabad, Gujarat. Call ${PHONE_NUMBER} or send a WhatsApp enquiry for airport, local and outstation taxi booking.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact SK Cab Service"
        description="Need a cab in Ahmedabad? Call the dispatcher or message us on WhatsApp. We will help with your booking and share the current fare."
      />

      <section
        aria-labelledby="contact-details"
        className="bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
          <div>
            <SectionHeading
              id="contact-details"
              align="left"
              eyebrow="Book Directly"
              title="Speak to Our Dispatcher"
            />
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-400">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-600">Phone</p>
                  <a
                    href={PHONE_LINK}
                    className="text-2xl font-extrabold text-slate-900 hover:text-amber-700"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-400">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-600">Location</p>
                  <p className="text-lg font-bold text-slate-900">
                    {ADDRESS_LINE}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-400">
                  <Clock className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-600">Booking</p>
                  <p className="text-lg font-bold text-slate-900">
                    Call or WhatsApp to book your cab
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallButton className="text-lg">Call Now</CallButton>
              <WhatsAppButton className="text-lg">WhatsApp Us</WhatsAppButton>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section aria-labelledby="map-heading" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="map-heading"
            eyebrow="Find Us"
            title="Serving Ahmedabad & Gandhinagar"
          />
          <div className="mt-10">
            <MapEmbed />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

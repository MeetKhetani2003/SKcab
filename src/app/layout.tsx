import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import InquiryPopup from "@/components/InquiryPopup";
import JsonLd from "@/components/JsonLd";
import Marquee from "@/components/Marquee";
import {
  BUSINESS_NAME,
  CITY,
  COUNTRY,
  PHONE_NUMBER,
  SERVICE_AREAS,
  SITE_URL,
  STATE,
} from "@/lib/constants";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const DEFAULT_TITLE = "SK Cab Service | Ahmedabad Taxi & Cab Service";
const DEFAULT_DESCRIPTION = `Book reliable cab service in Ahmedabad for airport transfers, local rides and outstation trips. Call SK Cab Service at ${PHONE_NUMBER} or WhatsApp to book.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  applicationName: BUSINESS_NAME,
  keywords: [
    "Ahmedabad taxi",
    "Ahmedabad cab service",
    "Ahmedabad airport taxi",
    "outstation taxi Ahmedabad",
    "SK Cab Service",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: BUSINESS_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/hero-taxi.jpg",
        alt: "SK Cab Service taxi in Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/hero-taxi.jpg"],
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["TaxiService", "LocalBusiness"],
  name: BUSINESS_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: "+917777919383",
  image: `${SITE_URL}/images/hero-taxi.jpg`,
  logo: `${SITE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: CITY,
    addressRegion: STATE,
    addressCountry: "IN",
  },
  areaServed: SERVICE_AREAS.map((name) => ({
    "@type": "Place",
    name: `${name}, ${CITY}, ${STATE}, ${COUNTRY}`,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+917777919383",
    contactType: "reservations",
    areaServed: "IN",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-slate-950 text-slate-50 pb-[calc(4.5rem+env(safe-area-inset-bottom))] font-sans antialiased md:pb-0">
        <JsonLd data={localBusinessSchema} />
        <div className="relative z-50">
          <Marquee items={SERVICE_AREAS} theme="amber" speed="normal" />
          <Navbar />
        </div>
        <main className="relative -mt-[120px] z-0">{children}</main>
        <Footer />
        <StickyMobileBar />
        <InquiryPopup />
      </body>
    </html>
  );
}

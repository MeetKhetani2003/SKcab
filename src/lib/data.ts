import {
  BriefcaseBusiness,
  Car,
  Clock,
  IndianRupee,
  MapPin,
  MessageSquare,
  Moon,
  Plane,
  Sparkles,
  Sunrise,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { CabType } from "./constants";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  whatsappMessage: string;
  learnMoreHref?: string;
}

export interface TrustItem {
  icon: LucideIcon;
  label: string;
}

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  capacity: string;
  description: string;
  features: string[];
  suitableFor: string;
  image: string;
  imageAlt: string;
  cabType: CabType;
}

export interface OutstationRoute {
  destination: string;
  description: string;
  approx: string;
  tripTypes: string[];
}

export interface AirportService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AirportArea {
  area: string;
  vehicles: string;
}

export interface KmRate {
  vehicle: string;
  rate: string;
  note: string;
}

export interface Testimonial {
  quote: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Airport Taxi", href: "/airport-taxi" },
  { label: "Outstation Taxi", href: "/outstation-taxi" },
  { label: "Fleet & Fares", href: "/fleet" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About / Service", href: "/#services" },
      { label: "Fleet & Fares", href: "/fleet" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Taxi Services",
    links: [
      { label: "Airport Taxi", href: "/airport-taxi" },
      { label: "Local Cab", href: "/#services" },
      { label: "Outstation Taxi", href: "/outstation-taxi" },
      { label: "One-Way Taxi", href: "/outstation-taxi#routes" },
      { label: "Round-Trip Taxi", href: "/outstation-taxi#routes" },
    ],
  },
];

export const FOOTER_AREAS = [
  "SG Highway",
  "Bopal",
  "Prahlad Nagar",
  "Gota",
  "Satellite",
  "Vastrapur",
  "Thaltej",
  "Chandkheda",
  "Gandhinagar",
  "Maninagar",
] as const;

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const FEATURES: Feature[] = [
  {
    icon: Plane,
    title: "SVPI Airport Taxi",
    description:
      "Reliable airport pickup and drop service from Ahmedabad and nearby areas.",
    ctaLabel: "Book Airport Taxi",
    whatsappMessage: "Hi SK Cab, I want to book an airport taxi in Ahmedabad.",
    learnMoreHref: "/airport-taxi",
  },
  {
    icon: Car,
    title: "Local Ahmedabad Rides",
    description:
      "Comfortable cabs for meetings, shopping, family travel and city rides.",
    ctaLabel: "Book a Local Ride",
    whatsappMessage: "Hi SK Cab, I want to book a local ride in Ahmedabad.",
    learnMoreHref: "/fleet",
  },
  {
    icon: MapPin,
    title: "Outstation Trips",
    description:
      "One-way and round-trip taxi services from Ahmedabad to popular Gujarat and Rajasthan destinations.",
    ctaLabel: "Plan an Outstation Trip",
    whatsappMessage: "Hi SK Cab, I want to book an outstation taxi from Ahmedabad.",
    learnMoreHref: "/outstation-taxi",
  },
];

export const TRUST_ITEMS: TrustItem[] = [
  { icon: Clock, label: "24/7 Availability" },
  { icon: UserRound, label: "Professional Drivers" },
  { icon: Sparkles, label: "Clean Cars" },
  { icon: IndianRupee, label: "Transparent Pricing" },
  { icon: MessageSquare, label: "Easy WhatsApp Booking" },
];

export const WHY_CHOOSE_US: Feature[] = [
  {
    icon: MessageSquare,
    title: "Book in Minutes",
    description:
      "Share your pickup, drop and date on WhatsApp or call the dispatcher. No app download needed.",
    ctaLabel: "",
    whatsappMessage: "",
  },
  {
    icon: IndianRupee,
    title: "Clear Quotations",
    description:
      "Ask for the fare before you travel. We explain tolls, parking and driver allowance up front.",
    ctaLabel: "",
    whatsappMessage: "",
  },
  {
    icon: Car,
    title: "Right Car for the Trip",
    description:
      "From a sedan for airport runs to a Tempo Traveller for groups, choose what fits your party.",
    ctaLabel: "",
    whatsappMessage: "",
  },
  {
    icon: MapPin,
    title: "Local Ahmedabad Know-How",
    description:
      "Drivers who know SG Highway, Gandhinagar and the airport routes help you reach on time.",
    ctaLabel: "",
    whatsappMessage: "",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The airport pickup was smooth and the booking through WhatsApp was very easy.",
    label: "Customer Review",
  },
  {
    quote:
      "Clean car, polite driver and we reached our Udaipur hotel comfortably with the whole family.",
    label: "Customer Review",
  },
  {
    quote:
      "I called in the morning and the cab was arranged quickly for my meeting in Gandhinagar.",
    label: "Customer Review",
  },
];

/* ------------------------------------------------------------------ */
/* Fleet                                                               */
/* ------------------------------------------------------------------ */

export const HOME_FLEET: Vehicle[] = [
  {
    id: "sedan",
    name: "Maruti Dzire",
    category: "Sedan",
    capacity: "Up to 4 passengers",
    description: "Comfortable luggage space for airport, city and outstation rides.",
    features: ["AC", "Comfortable luggage space"],
    suitableFor: "Airport, local and outstation",
    image: "/images/sedan.jpg",
    imageAlt: "White Maruti Dzire sedan cab available in Ahmedabad",
    cabType: "Sedan",
  },
  {
    id: "suv",
    name: "Maruti Ertiga",
    category: "SUV",
    capacity: "Up to 6 passengers",
    description: "Spacious interior that suits families and small groups.",
    features: ["AC", "Spacious interior"],
    suitableFor: "Family and group travel",
    image: "/images/suv.jpg",
    imageAlt: "White Maruti Ertiga SUV cab for family travel from Ahmedabad",
    cabType: "SUV",
  },
  {
    id: "innova",
    name: "Toyota Innova Crysta",
    category: "Premium SUV",
    capacity: "Up to 6–7 passengers",
    description: "Premium comfort for long-distance and business travel.",
    features: ["AC", "Premium comfort"],
    suitableFor: "Long-distance and premium travel",
    image: "/images/innova-crysta.jpg",
    imageAlt: "White Toyota Innova Crysta premium SUV taxi in Ahmedabad",
    cabType: "Innova Crysta",
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    category: "Group Travel",
    capacity: "Multiple passengers",
    description: "Ideal for family and group trips, weddings and tours.",
    features: ["Group seating", "Luggage-friendly"],
    suitableFor: "Family and group trips",
    image: "/images/tempo-traveller.jpg",
    imageAlt: "White Tempo Traveller van for group travel from Ahmedabad",
    cabType: "Tempo Traveller",
  },
];

export const FLEET_PAGE_VEHICLES: Vehicle[] = [
  {
    id: "dzire",
    name: "Maruti Dzire",
    category: "Sedan",
    capacity: "Up to 4 passengers",
    description:
      "A comfortable, efficient sedan for solo travellers, couples and small families.",
    features: ["AC", "Airport, local & outstation"],
    suitableFor: "Airport, local and outstation",
    image: "/images/sedan.jpg",
    imageAlt: "White Maruti Dzire sedan cab available in Ahmedabad",
    cabType: "Sedan",
  },
  {
    id: "etios",
    name: "Toyota Etios",
    category: "Sedan",
    capacity: "Up to 4 passengers",
    description:
      "A dependable sedan with good boot space, well suited to airport and highway trips.",
    features: ["AC", "Airport & outstation"],
    suitableFor: "Airport and outstation",
    image: "/images/sedan.jpg",
    imageAlt: "Sedan cab for airport and outstation trips from Ahmedabad",
    cabType: "Sedan",
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    category: "SUV / MPV",
    capacity: "Up to 6 passengers",
    description:
      "Three-row seating with extra room for family and small group travel.",
    features: ["AC", "Family & group travel"],
    suitableFor: "Family and group travel",
    image: "/images/suv.jpg",
    imageAlt: "White Maruti Ertiga SUV cab for family travel from Ahmedabad",
    cabType: "SUV",
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Premium SUV",
    capacity: "Up to 6–7 passengers",
    description:
      "Premium comfort and space for long-distance journeys and business travel.",
    features: ["AC", "Long-distance & premium travel"],
    suitableFor: "Long-distance and premium travel",
    image: "/images/innova-crysta.jpg",
    imageAlt: "White Toyota Innova Crysta premium SUV taxi in Ahmedabad",
    cabType: "Innova Crysta",
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    category: "Group Travel",
    capacity: "Multiple passengers",
    description:
      "Roomy seating for large families, wedding parties and group tours.",
    features: ["Group seating", "Family & group trips"],
    suitableFor: "Family and group trips",
    image: "/images/tempo-traveller.jpg",
    imageAlt: "White Tempo Traveller van for group travel from Ahmedabad",
    cabType: "Tempo Traveller",
  },
];

/* ------------------------------------------------------------------ */
/* Airport                                                             */
/* ------------------------------------------------------------------ */

export const AIRPORT_SERVICES: AirportService[] = [
  {
    icon: Plane,
    title: "Airport Pickup",
    description:
      "Get picked up at SVPI Airport arrivals and driven to your home, hotel or office in Ahmedabad.",
  },
  {
    icon: Plane,
    title: "Airport Drop",
    description:
      "Reach the departures terminal on time with a cab booked for your exact pickup time.",
  },
  {
    icon: Sunrise,
    title: "Early Morning Airport Transfer",
    description:
      "Catching a dawn flight? Pre-book your cab so it is waiting before you are.",
  },
  {
    icon: Moon,
    title: "Late Night Airport Transfer",
    description:
      "Landing after midnight? Message us and we will arrange your late-night pickup.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Airport Transfer",
    description:
      "Dependable transfers for business travellers, guests and company teams.",
  },
  {
    icon: Users,
    title: "Family Airport Transfer",
    description:
      "SUVs and Innova Crysta with space for family members and luggage.",
  },
];

export const AIRPORT_AREAS: AirportArea[] = [
  { area: "SG Highway", vehicles: "Sedan, SUV, Innova Crysta" },
  { area: "Bopal", vehicles: "Sedan, SUV, Innova Crysta" },
  { area: "Prahlad Nagar", vehicles: "Sedan, SUV, Innova Crysta" },
  { area: "Chandkheda", vehicles: "Sedan, SUV, Innova Crysta" },
  { area: "Gandhinagar", vehicles: "Sedan, SUV, Innova Crysta" },
];

export const AIRPORT_STEPS = [
  {
    title: "Call or WhatsApp",
    description:
      "Share your pickup or drop location, date, time and number of passengers.",
  },
  {
    title: "Get Your Fare",
    description:
      "We confirm the vehicle and the current fare before you commit.",
  },
  {
    title: "Ride Comfortably",
    description:
      "Your driver arrives at the agreed time and takes you to your destination.",
  },
];

export const AIRPORT_FAQS: FaqItem[] = [
  {
    question: "How do I book an airport taxi in Ahmedabad?",
    answer:
      "Call SK Cab Service on +91 77779 19383 or send your pickup, drop, date and time on WhatsApp. We will confirm your cab and the current fare.",
  },
  {
    question: "Do you provide airport pickup and drop at SVPI Airport?",
    answer:
      "Yes. We arrange airport pickup and airport drop at Sardar Vallabhbhai Patel International Airport (SVPI) for Ahmedabad, Gandhinagar and nearby areas.",
  },
  {
    question: "Can I book an early morning or late night airport cab?",
    answer:
      "Yes. Early morning and late night airport transfers are available. Please book in advance and share your flight timing so we can plan your pickup.",
  },
  {
    question: "What is the fare for an Ahmedabad airport cab?",
    answer:
      "The fare depends on your pickup or drop area, vehicle type and timing. Message or call us to get the current fare for your trip.",
  },
];

/* ------------------------------------------------------------------ */
/* Outstation                                                          */
/* ------------------------------------------------------------------ */

export const OUTSTATION_ROUTES: OutstationRoute[] = [
  {
    destination: "Statue of Unity",
    description: "Kevadia day trip or overnight stay with sightseeing at Ekta Nagar.",
    approx: "Approx. 200 km · 3.5–4.5 hrs",
    tripTypes: ["One-way", "Round trip"],
  },
  {
    destination: "Mount Abu",
    description: "A scenic hill-station drive into the Aravalli range in Rajasthan.",
    approx: "Approx. 225 km · 4.5–5.5 hrs",
    tripTypes: ["One-way", "Round trip"],
  },
  {
    destination: "Udaipur",
    description: "Comfortable highway travel to the City of Lakes in Rajasthan.",
    approx: "Approx. 260 km · 4.5–5.5 hrs",
    tripTypes: ["One-way", "Round trip"],
  },
  {
    destination: "Somnath",
    description: "Pilgrimage trips to Somnath temple, often combined with Junagadh or Gir.",
    approx: "Approx. 410 km · 7–8 hrs",
    tripTypes: ["One-way", "Round trip"],
  },
  {
    destination: "Dwarka",
    description: "Long-distance temple travel to Dwarka, often combined with Somnath.",
    approx: "Approx. 450 km · 8–9 hrs",
    tripTypes: ["One-way", "Round trip"],
  },
  {
    destination: "Diu",
    description: "Beach getaway to the Union Territory of Diu on the Saurashtra coast.",
    approx: "Approx. 520 km · 9–10 hrs",
    tripTypes: ["One-way", "Round trip"],
  },
  {
    destination: "Vadodara",
    description: "Quick intercity trips for business, railway and family visits.",
    approx: "Approx. 110 km · 2–2.5 hrs",
    tripTypes: ["One-way", "Round trip"],
  },
  {
    destination: "Surat",
    description: "Intercity travel for business and family along the western corridor.",
    approx: "Approx. 265 km · 4–5 hrs",
    tripTypes: ["One-way", "Round trip"],
  },
];

export const KM_RATES: KmRate[] = [
  { vehicle: "Hatchback", rate: "₹11/km", note: "Starting rate" },
  { vehicle: "Sedan", rate: "₹12/km", note: "Starting rate" },
  { vehicle: "SUV", rate: "₹16/km", note: "Starting rate" },
];

export const FARE_DISCLAIMER =
  "Final fare may vary depending on vehicle, route, trip type, tolls, parking, driver allowance and other applicable charges. Contact SK Cab Service for the current quotation.";

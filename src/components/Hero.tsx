"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import { PHONE_NUMBER } from "@/lib/constants";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero({ children }: { children?: ReactNode }) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-slate-950"
    >
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/images/hero-taxi.jpg"
          alt="SK Cab Service taxi on an Ahmedabad city road at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
      </motion.div>
      
      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-44 pb-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-8 lg:pt-52 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }}
          className="flex flex-col items-start"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-300 backdrop-blur-md shadow-sm"
          >
            <Clock className="h-4 w-4" aria-hidden="true" />
            24/7 Premium Cab Service
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            id="hero-heading"
            className="mt-6 text-balance text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Ahmedabad&apos;s Best Cab,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              When You Need It
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl font-medium"
          >
            Airport transfers, local rides, and outstation journeys with
            comfortable cars, professional drivers, and easy booking.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row w-full sm:w-auto"
          >
            <WhatsAppButton variant="amber" className="text-lg py-4 px-8 rounded-full shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform w-full sm:w-auto justify-center">
              Book Your Cab
            </WhatsAppButton>
            <CallButton variant="glass" className="text-lg py-4 px-8 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-transform w-full sm:w-auto justify-center">
              Call {PHONE_NUMBER}
            </CallButton>
          </motion.div>
        </motion.div>

        {children && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="absolute inset-0 -z-10 bg-amber-500/20 blur-[100px] rounded-full" />
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

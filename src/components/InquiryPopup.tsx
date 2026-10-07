"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";
import { WHATSAPP_LINK, PHONE_LINK } from "@/lib/constants";

export default function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Show the popup automatically after 5 seconds if not closed previously
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-inquiry", handleOpen);

    const hasClosed = localStorage.getItem("inquiryPopupClosed");
    let timer: NodeJS.Timeout;
    if (!hasClosed) {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
    }

    return () => {
      window.removeEventListener("open-inquiry", handleOpen);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("inquiryPopupClosed", "true");
  };

  return (
    <>
      {/* Floating Action Buttons (if closed) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: 20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.8, opacity: 0, x: 20 }}
            className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3"
          >
            {/* Book Now Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center justify-end gap-3"
              aria-label="Book Now"
            >
              <span className="hidden rounded-lg bg-slate-900/80 px-3 py-1.5 text-sm font-semibold text-white shadow-md backdrop-blur-sm transition-opacity group-hover:opacity-100 md:block opacity-0">
                Book Now
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-slate-900 shadow-xl ring-4 ring-amber-500/30 transition-transform hover:scale-110">
                <span className="text-2xl">🚖</span>
              </div>
            </button>

            {/* WhatsApp Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-end gap-3"
              aria-label="WhatsApp Us"
            >
              <span className="hidden rounded-lg bg-slate-900/80 px-3 py-1.5 text-sm font-semibold text-white shadow-md backdrop-blur-sm transition-opacity group-hover:opacity-100 md:block opacity-0">
                WhatsApp Us
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-4 ring-[#25D366]/30 transition-transform hover:scale-110">
                <MessageCircle className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-green-200"></span>
                </span>
              </div>
            </a>

            {/* Call Button */}
            <a
              href={PHONE_LINK}
              className="group flex items-center justify-end gap-3"
              aria-label="Call Us"
            >
              <span className="hidden rounded-lg bg-slate-900/80 px-3 py-1.5 text-sm font-semibold text-white shadow-md backdrop-blur-sm transition-opacity group-hover:opacity-100 md:block opacity-0">
                Call Us
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-xl ring-4 ring-blue-500/30 transition-transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 p-4 backdrop-blur-sm sm:items-center"
          >
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200"
            >
              {/* Header Gradient */}
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-8 text-center text-slate-900">
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-slate-900 transition-colors hover:bg-white/40"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 shadow-inner">
                  <span className="text-3xl">🚖</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Need a Taxi Now?</h3>
                <p className="mt-2 text-sm font-medium text-slate-800">
                  Get an instant quote and reliable service for your journey.
                </p>
              </div>

              {/* Action Area */}
              <div className="p-6">
                <div className="flex flex-col space-y-3">
                  <WhatsAppButton 
                    className="w-full justify-center text-lg py-4 shadow-lg hover:shadow-xl transition-all" 
                    message="Hi, I want to book a taxi!"
                  >
                    Chat on WhatsApp
                  </WhatsAppButton>
                  <CallButton 
                    className="w-full justify-center text-lg py-4 shadow-lg hover:shadow-xl transition-all"
                  >
                    Call Us Now
                  </CallButton>
                </div>
                <p className="mt-4 text-center text-xs text-slate-500">
                  Available 24/7. No hidden charges.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

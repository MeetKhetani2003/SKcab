"use client";

import { MessageSquare, Phone } from "lucide-react";
import { PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function StickyMobileBar() {
  const openInquiry = () => {
    window.dispatchEvent(new Event("open-inquiry"));
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-900/95 px-2 pt-2 shadow-[0_-8px_24px_rgba(15,23,42,0.35)] backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={openInquiry}
          className="inline-flex min-h-12 flex-col items-center justify-center rounded-xl bg-slate-800 px-1 py-1 text-xs font-bold text-slate-200 transition hover:bg-slate-700 active:scale-95"
        >
          <span className="text-lg mb-0.5">🚖</span>
          Book Now
        </button>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 flex-col items-center justify-center rounded-xl bg-[#25D366] px-1 py-1 text-xs font-bold text-white transition hover:bg-green-500 active:scale-95 shadow-md shadow-[#25D366]/20"
        >
          <MessageSquare className="h-5 w-5 mb-0.5" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={PHONE_LINK}
          className="inline-flex min-h-12 flex-col items-center justify-center rounded-xl bg-blue-600 px-1 py-1 text-xs font-bold text-white transition hover:bg-blue-500 active:scale-95 shadow-md shadow-blue-600/20"
        >
          <Phone className="h-5 w-5 mb-0.5" aria-hidden="true" />
          Call Us
        </a>
      </div>
    </div>
  );
}

import { PHONE_NUMBER } from "@/lib/constants";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";

interface CTASectionProps {
  title?: string;
  description?: string;
  whatsappMessage?: string;
}

export default function CTASection({
  title = "Need a Cab in Ahmedabad?",
  description = "Book your ride in minutes through WhatsApp or speak directly with SK Cab Service.",
  whatsappMessage,
}: CTASectionProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-slate-900 py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-amber-600 via-amber-400 to-amber-600"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2
          id="cta-heading"
          className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
        >
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-slate-300">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <CallButton variant="amber" className="text-lg sm:min-w-64">
            Call {PHONE_NUMBER}
          </CallButton>
          <WhatsAppButton
            message={whatsappMessage}
            variant="green"
            className="text-lg sm:min-w-48"
          >
            WhatsApp Us
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

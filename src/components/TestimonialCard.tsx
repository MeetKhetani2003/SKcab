import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <Quote className="h-8 w-8 text-amber-400" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-white">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-white/10 pt-4 text-sm font-semibold text-amber-400">
        {testimonial.label}
      </figcaption>
    </figure>
  );
}

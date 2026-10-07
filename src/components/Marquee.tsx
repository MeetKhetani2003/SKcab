"use client";

import { MapPin } from "lucide-react";

interface MarqueeProps {
  items: readonly string[] | string[];
  speed?: "slow" | "normal" | "fast";
  theme?: "dark" | "light" | "amber";
}

export default function Marquee({ items, speed = "normal", theme = "amber" }: MarqueeProps) {
  // Use inline style for reliable speed control in Tailwind v4
  const duration = 
    speed === "slow" ? "60s" : 
    speed === "fast" ? "15s" : 
    "35s"; // default normal speed made slightly slower too

  const themeClasses = 
    theme === "dark" ? "bg-slate-950 text-slate-300 border-y border-white/10" :
    theme === "light" ? "bg-white text-slate-700 border-y border-slate-200" :
    "bg-amber-500 text-slate-950 font-semibold border-y border-amber-600";
    
  const iconColor = theme === "dark" ? "text-amber-500" : theme === "light" ? "text-amber-500" : "text-slate-900";

  return (
    <div className={`overflow-hidden whitespace-nowrap py-2 flex items-center ${themeClasses}`}>
      <div 
        className="flex w-max animate-marquee"
        style={{ animationDuration: duration }}
      >
        {/* Double the items to create an infinite scroll effect */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center px-4 md:px-8">
            <MapPin className={`h-4 w-4 mr-2 ${iconColor}`} aria-hidden="true" />
            <span className="text-sm md:text-base tracking-wide">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

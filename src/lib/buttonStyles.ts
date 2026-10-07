export type ButtonVariant =
  | "amber"
  | "green"
  | "glass"
  | "outline"
  | "dark";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 motion-safe:hover:-translate-y-0.5";

const variants: Record<ButtonVariant, string> = {
  amber:
    "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400",
  green:
    "bg-[#22C55E] text-slate-950 shadow-lg shadow-green-500/20 hover:bg-green-400",
  glass:
    "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20",
  outline:
    "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50",
  dark: "bg-slate-900 text-white hover:bg-slate-800",
};

export function buttonStyles(variant: ButtonVariant, className = ""): string {
  return `${base} ${variants[variant]} ${className}`.trim();
}

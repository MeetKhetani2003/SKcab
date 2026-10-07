import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { PHONE_LINK } from "@/lib/constants";
import { buttonStyles, type ButtonVariant } from "@/lib/buttonStyles";

interface CallButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export default function CallButton({
  children = "Call Now",
  variant = "amber",
  className = "",
}: CallButtonProps) {
  return (
    <a href={PHONE_LINK} className={buttonStyles(variant, className)}>
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

import type { ReactNode } from "react";
import { MessageSquare } from "lucide-react";
import { WHATSAPP_LINK, buildWhatsAppUrl } from "@/lib/constants";
import { buttonStyles, type ButtonVariant } from "@/lib/buttonStyles";

interface WhatsAppButtonProps {
  children?: ReactNode;
  /** Optional prefilled message. Falls back to the default booking message. */
  message?: string;
  variant?: ButtonVariant;
  className?: string;
}

export default function WhatsAppButton({
  children = "WhatsApp Us",
  message,
  variant = "green",
  className = "",
}: WhatsAppButtonProps) {
  const href = message ? buildWhatsAppUrl(message) : WHATSAPP_LINK;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonStyles(variant, className)}
    >
      <MessageSquare className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
      <span className="sr-only"> (opens WhatsApp in a new tab)</span>
    </a>
  );
}

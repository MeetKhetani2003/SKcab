import type { ReactNode } from "react";
import { CircleAlert } from "lucide-react";

export const inputClass =
  "block min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 transition focus:border-amber-500 focus:outline-2 focus:outline-amber-500 aria-invalid:border-red-600 aria-invalid:bg-red-50";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  labelClassName?: string;
  children: ReactNode;
}

export default function FormField({
  id,
  label,
  error,
  required = false,
  labelClassName = "text-slate-800",
  children,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={`mb-1.5 block text-sm font-semibold ${labelClassName}`}>
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-500"
        >
          <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

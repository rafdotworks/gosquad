import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "prominent";
}

export function Eyebrow({ children, className, variant = "default" }: EyebrowProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="h-px w-3 shrink-0 bg-line-soft" aria-hidden="true" />
      <span
        className={cn(
          "font-sans font-medium",
          variant === "prominent"
            ? "text-base text-foreground"
            : "text-sm text-muted-foreground"
        )}
      >
        {children}
      </span>
    </div>
  );
}

interface FieldLabelProps {
  children: ReactNode;
  className?: string;
}

export function FieldLabel({ children, className }: FieldLabelProps) {
  return (
    <div
      className={cn(
        "font-sans text-xs font-medium text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MetaItemProps {
  icon: LucideIcon;
  children: ReactNode;
  code?: boolean;
  className?: string;
}

export function MetaItem({ icon: Icon, children, code, className }: MetaItemProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[7px] text-[13.5px] text-muted-foreground",
        className
      )}
    >
      <Icon className="size-3.5 text-faint" strokeWidth={1.5} />
      <span
        className={cn(
          code ? "font-mono text-[13px]" : "tracking-[0.01em]"
        )}
      >
        {children}
      </span>
    </span>
  );
}

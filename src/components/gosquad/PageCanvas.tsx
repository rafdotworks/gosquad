import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageCanvasProps = {
  children: ReactNode;
  className?: string;
};

export const PageCanvas = forwardRef<HTMLDivElement, PageCanvasProps>(
  function PageCanvas({ children, className }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "relative min-h-screen page-gradient font-sans text-foreground",
          className
        )}
      >
        {children}
        <div aria-hidden className="scroll-invite-bottom" />
      </div>
    );
  }
);

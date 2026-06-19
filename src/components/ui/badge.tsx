import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 rounded-full border border-transparent font-medium whitespace-nowrap transition-colors [&>svg]:pointer-events-none [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-primary px-[11px] py-1 text-xs tracking-[0.02em] text-primary-foreground",
        priority:
          "bg-primary px-[11px] py-1 text-xs tracking-[0.02em] text-primary-foreground",
        role: "bg-secondary px-[11px] py-1 text-[12.5px] text-body",
        company:
          "gap-2 rounded-xl bg-secondary px-3.5 py-2 text-[13.5px] text-body",
        secondary: "bg-secondary px-[11px] py-1 text-[12.5px] text-body",
        outline: "border-border text-foreground",
        destructive: "bg-destructive/10 text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

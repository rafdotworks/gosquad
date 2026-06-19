import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardBandVariants = cva("border-t px-5 py-4", {
  variants: {
    tone: {
      default: "border-border bg-card",
      sage: "border-border bg-success-muted",
      clay: "border-border border-l-2 border-l-caution bg-caution-muted",
    },
  },
  defaultVariants: {
    tone: "default",
  },
})

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-[20px] border border-border bg-card text-card-foreground shadow-[0_1px_2px_rgba(22,21,15,0.03)]",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1 px-5 pt-[18px] pb-4", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-base font-semibold text-foreground", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-[13px] leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-content" className={cn("px-5 py-4", className)} {...props} />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("border-t border-border px-5 py-4", className)}
      {...props}
    />
  )
}

function CardBand({
  className,
  tone,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardBandVariants>) {
  return (
    <div
      data-slot="card-band"
      className={cn(cardBandVariants({ tone }), className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardBand,
}

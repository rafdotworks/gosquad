import { dealRows, interviewStages } from "@/features/role-page/data/role-page.data";
import { Eyebrow, FieldLabel } from "@/components/gosquad/Eyebrow";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function LogisticsGrid() {
  return (
    <section className="mb-[52px]">
      <Eyebrow>Logistics &amp; process</Eyebrow>
      <div className="mt-[18px] grid gap-4 md:grid-cols-[1fr_1.2fr] md:items-start">
        <Card className="rounded-[18px] px-5 py-4">
          <FieldLabel className="mb-2">The deal</FieldLabel>
          {dealRows.map((row) => (
            <div
              key={row.k}
              className="flex items-baseline justify-between gap-4 border-t border-line-soft py-2.5"
            >
              <span className="text-[13px] text-muted-foreground">{row.k}</span>
              <span
                className={cn(
                  "text-right text-[13.5px] font-medium text-foreground",
                  row.code && "font-mono"
                )}
              >
                {row.v}
              </span>
            </div>
          ))}
        </Card>

        <Card className="rounded-[18px] px-5 py-4">
          <FieldLabel className="mb-4">Interview process</FieldLabel>
          <div className="flex flex-col">
            {interviewStages.map((stage, index) => (
              <div
                key={stage.n}
                className={cn(
                  "relative flex items-start gap-3.5",
                  index < interviewStages.length - 1 && "pb-[18px]"
                )}
              >
                {index !== interviewStages.length - 1 && (
                  <span className="absolute top-7 bottom-0 left-[13px] w-[1.5px] bg-line-soft" />
                )}
                <span className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-secondary font-mono text-[12.5px] font-medium text-foreground">
                  {stage.n}
                </span>
                <div className="pt-1">
                  <div className="text-sm font-medium text-foreground">{stage.label}</div>
                  <div className="mt-0.5 text-[13px] text-muted-foreground">{stage.note}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

import { Check, ChevronDown, Flag } from "lucide-react";
import { useState } from "react";
import { criteriaByTier } from "@/features/role-brief/data/role-brief.data";
import { Card, CardBand } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function SectionHeader({
  title,
  hint,
  tone = "default",
}: {
  title: string;
  hint: string;
  tone?: "default" | "sage" | "clay";
}) {
  const titleClass =
    tone === "sage"
      ? "text-success"
      : tone === "clay"
        ? "text-caution"
        : "text-foreground";

  return (
    <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
      <h3 className={cn("text-sm font-semibold", titleClass)}>{title}</h3>
      <p className="text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}

export function FitGateList() {
  const mustHaves = criteriaByTier("must_have");

  return (
    <div>
      <SectionHeader title="Must-haves" hint="Gate. Miss one, likely out." />
      <ol className="flex flex-col">
        {mustHaves.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              "flex items-start gap-4 py-3",
              index > 0 && "border-t border-line-soft"
            )}
          >
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-xs font-medium text-muted-foreground">
              {index + 1}
            </span>
            <div>
              <span className="text-[14px] leading-normal text-body">{item.label}</span>
              {item.detail ? (
                <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function FitLiftList() {
  const greenFlags = criteriaByTier("green_flag");

  return (
    <CardBand tone="sage" className="rounded-none border-x-0">
      <SectionHeader
        title="Green flags"
        hint="Lift a borderline candidate."
        tone="sage"
      />
      <ul className="flex flex-col">
        {greenFlags.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              "flex items-start gap-[11px] py-2.5",
              index > 0 && "border-t border-success-line"
            )}
          >
            <Check className="mt-[3px] size-3.5 shrink-0 text-success" strokeWidth={2.5} />
            <div>
              <span className="text-[13.5px] leading-normal text-success-foreground">
                {item.label}
              </span>
              {item.detail ? (
                <p className="mt-0.5 text-xs text-success/80">{item.detail}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </CardBand>
  );
}

export function FitDisqualifiers() {
  const [open, setOpen] = useState(false);
  const disqualifiers = criteriaByTier("disqualifier");

  return (
    <CardBand tone="clay" className="rounded-none border-x-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 text-left"
      >
        <SectionHeader
          title="Rule out"
          hint="Disqualifiers for shortlisting"
          tone="clay"
        />
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-caution transition-transform",
            open && "rotate-180"
          )}
          strokeWidth={2}
        />
      </button>
      {open ? (
        <ul className="mt-1 flex flex-col">
          {disqualifiers.map((item, index) => (
            <li
              key={item.id}
              className={cn(
                "flex items-start gap-[11px] py-2.5",
                index > 0 && "border-t border-caution-line"
              )}
            >
              <Flag className="mt-[3px] size-3.5 shrink-0 text-caution" strokeWidth={2} />
              <span className="text-[13.5px] leading-normal text-caution-foreground">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </CardBand>
  );
}

export function FitSection() {
  return (
    <section id="brief-fit" className="scroll-mt-20">
      <h2 className="font-display mb-2 text-[28px] leading-[1.15] font-light tracking-[-0.02em] text-foreground">
        Spot a great fit
      </h2>
      <p className="mb-8 max-w-[520px] text-[15px] leading-relaxed text-muted-foreground">
        Pass all gates first. Green flags decide how hard to push a borderline profile.
      </p>

      <Card className="overflow-hidden rounded-[22px] shadow-[0_1px_3px_rgba(22,21,15,0.04)]">
        <div className="px-5 py-5">
          <FitGateList />
        </div>
        <FitLiftList />
        <FitDisqualifiers />
      </Card>
    </section>
  );
}

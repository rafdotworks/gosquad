import { Check, ChevronRight, Flag, Send } from "lucide-react";
import {
  disqualifiers,
  greenFlags,
  mustHaves,
  rejectionReasons,
} from "@/features/role-page/data/role-page.data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardBand,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldLabel } from "@/components/gosquad/Eyebrow";
import { cn } from "@/lib/utils";

interface WhoFitsPanelProps {
  className?: string;
  onOpenPipeline?: () => void;
}

function SectionLabel({
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
  const hintClass =
    tone === "sage" ? "text-success" : tone === "clay" ? "text-caution" : "text-faint";

  return (
    <div className="mb-1 flex items-baseline justify-between gap-2.5">
      <div className={cn("text-xs font-medium", titleClass)}>{title}</div>
      <div className={cn("text-xs", hintClass)}>{hint}</div>
    </div>
  );
}

export function WhoFitsPanel({ className, onOpenPipeline }: WhoFitsPanelProps) {
  return (
    <div className={cn("max-lg:static lg:sticky lg:top-6", className)}>
      <Card className="overflow-hidden rounded-[22px] shadow-[0_1px_3px_rgba(22,21,15,0.04)]">
        <CardHeader className="border-b border-line-soft pb-4">
          <CardTitle>Who fits</CardTitle>
          <CardDescription>
            Gates rule a candidate in or out. Green flags strengthen a call.
          </CardDescription>
        </CardHeader>

        <div className="px-5 py-4">
          <SectionLabel title="Must-have" hint="Gate. Miss one, likely out." />
          <div className="mt-2 flex flex-col">
            {mustHaves.map((item, index) => (
              <div
                key={item}
                className={cn(
                  "flex items-start gap-3 py-2.5",
                  index > 0 && "border-t border-line-soft"
                )}
              >
                <span className="mt-2 size-[5px] shrink-0 rounded-full bg-foreground" />
                <span className="text-[13.5px] leading-normal text-body">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <CardBand tone="sage">
          <SectionLabel
            title="Green flags"
            hint="Lift a borderline candidate."
            tone="sage"
          />
          <div className="mt-2 flex flex-col">
            {greenFlags.map((item, index) => (
              <div
                key={item}
                className={cn(
                  "flex items-start gap-[11px] py-2",
                  index > 0 && "border-t border-success-line"
                )}
              >
                <Check className="mt-[3px] size-3.5 shrink-0 text-success" strokeWidth={2.5} />
                <span className="text-[13.5px] leading-normal text-success-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </CardBand>

        <CardBand tone="clay">
          <div className="mb-2">
            <SectionLabel
              title="Rule out"
              hint="Disqualifiers for shortlisting"
              tone="clay"
            />
          </div>
          <div className="flex flex-col">
            {disqualifiers.map((item, index) => (
              <div
                key={item}
                className={cn(
                  "flex items-start gap-[11px] py-2.5",
                  index > 0 && "border-t border-caution-line"
                )}
              >
                <Flag className="mt-[3px] size-3.5 shrink-0 text-caution" strokeWidth={2} />
                <span className="text-[13.5px] leading-normal text-caution-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </CardBand>

        <div className="border-t border-border px-5 py-4">
          <FieldLabel className="mb-2">Why candidates get rejected</FieldLabel>
          <div className="flex flex-col gap-[7px]">
            {rejectionReasons.map((reason) => (
              <div key={reason} className="flex items-start gap-2">
                <span className="mt-[7px] size-1 shrink-0 rounded-full bg-faint" />
                <span className="text-[13px] leading-normal text-muted-foreground">
                  {reason}
                </span>
              </div>
            ))}
          </div>
          <Button
            variant="link"
            className="mt-3 text-[12.5px] font-medium"
            onClick={onOpenPipeline}
          >
            See all in Pipeline →
          </Button>
        </div>

        <CardFooter className="px-5 py-4">
          <Button size="lg" className="w-full">
            <Send className="size-4" strokeWidth={2} />
            Submit candidate
            <ChevronRight className="-ml-0.5 size-[15px]" strokeWidth={2} />
          </Button>
        </CardFooter>
      </Card>

      <p className="mt-3 text-center text-xs leading-normal text-faint">
        AI surfaces the signals. You make the call.
      </p>
    </div>
  );
}

import type { FitSignal } from "@/features/role-page/data/pipeline.data";
import { pipelineCandidates } from "@/features/role-page/data/pipeline.data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Eyebrow, FieldLabel } from "@/components/gosquad/Eyebrow";
import { cn } from "@/lib/utils";

function fitBadgeVariant(fit: FitSignal) {
  if (fit === "Strong") return "default";
  if (fit === "Borderline") return "secondary";
  return "outline";
}

export function PipelinePanel() {
  return (
    <section>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>Pipeline</Eyebrow>
          <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
            Sourced and shortlisted candidates for this role. Fit signals reflect
            must-haves, green flags, and disqualifiers.
          </p>
        </div>
        <span className="font-mono text-sm text-faint">
          {pipelineCandidates.length} candidates
        </span>
      </div>

      <Card className="overflow-hidden rounded-[18px]">
        <div className="grid grid-cols-[1.2fr_1.4fr_0.8fr_0.9fr_0.8fr] gap-4 border-b border-line-soft px-5 py-3">
          <FieldLabel>Name</FieldLabel>
          <FieldLabel>Current role</FieldLabel>
          <FieldLabel>Fit</FieldLabel>
          <FieldLabel>Source</FieldLabel>
          <FieldLabel className="text-right">Last touch</FieldLabel>
        </div>

        {pipelineCandidates.map((candidate, index) => (
          <div
            key={candidate.id}
            className={cn(
              "grid grid-cols-[1.2fr_1.4fr_0.8fr_0.9fr_0.8fr] items-center gap-4 px-5 py-3.5 transition-colors hover:bg-secondary/40",
              index > 0 && "border-t border-line-soft"
            )}
          >
            <div className="text-[14px] font-medium text-foreground">{candidate.name}</div>
            <div>
              <div className="text-[13.5px] text-body">{candidate.role}</div>
              <div className="text-[12.5px] text-muted-foreground">{candidate.company}</div>
            </div>
            <div>
              <Badge variant={fitBadgeVariant(candidate.fit)} className="text-[11.5px]">
                {candidate.fit}
              </Badge>
            </div>
            <div className="text-[13px] text-muted-foreground">{candidate.source}</div>
            <div className="text-right text-[13px] text-faint">{candidate.lastTouch}</div>
          </div>
        ))}
      </Card>
    </section>
  );
}

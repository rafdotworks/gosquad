import { activeCandidates } from "@/features/role-page/data/candidates.data";
import { interviewStages } from "@/features/role-page/data/role-page.data";
import { Card } from "@/components/ui/card";
import { Eyebrow, FieldLabel } from "@/components/gosquad/Eyebrow";
import { cn } from "@/lib/utils";

export function CandidatesInProcessPanel() {
  return (
    <section>
      <div className="mb-6">
        <Eyebrow>Candidates in process</Eyebrow>
        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
          Active candidates moving through the interview process for this role.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        {interviewStages.map((stage) => {
          const stageCandidates = activeCandidates.filter((c) => c.stage === stage.n);

          return (
            <div key={stage.n} className="min-w-0">
              <div className="mb-3">
                <FieldLabel className="mb-1">Stage {stage.n}</FieldLabel>
                <div className="text-[13.5px] font-medium text-foreground">{stage.label}</div>
                <div className="mt-0.5 text-[12.5px] text-muted-foreground">{stage.note}</div>
              </div>

              <div className="flex flex-col gap-2.5">
                {stageCandidates.length === 0 ? (
                  <Card className="rounded-[14px] border-dashed px-3.5 py-5 text-center text-[12.5px] text-faint">
                    No candidates
                  </Card>
                ) : (
                  stageCandidates.map((candidate) => (
                    <Card key={candidate.id} className="rounded-[14px] px-3.5 py-3">
                      <div className="text-[13.5px] font-medium text-foreground">
                        {candidate.name}
                      </div>
                      <div className="mt-0.5 text-[12.5px] text-muted-foreground">
                        {candidate.company}
                      </div>
                      <div
                        className={cn(
                          "mt-2.5 border-t border-line-soft pt-2.5",
                          "text-[12px] leading-normal text-muted-foreground"
                        )}
                      >
                        <span className="font-mono text-faint">{candidate.daysInStage}d</span> in
                        stage
                      </div>
                      <div className="mt-1 text-[12px] text-body">{candidate.nextStep}</div>
                    </Card>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

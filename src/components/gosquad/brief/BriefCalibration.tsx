import {
  briefArchetypes,
  greenFlagLabel,
  targetCompanies,
} from "@/features/role-brief/data/role-brief.data";
import { FieldLabel } from "@/components/gosquad/Eyebrow";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function BriefArchetypeGrid() {
  return (
    <section className="mt-14">
      <h3 className="mb-2 text-base font-semibold text-foreground">What good looks like</h3>
      <p className="mb-5 max-w-[560px] text-[13.5px] leading-relaxed text-muted-foreground">
        The shape to aim for, with a real example each. Green flags they typically hit are linked below.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {briefArchetypes.map((archetype) => (
          <Card
            key={archetype.tag}
            className="flex flex-col rounded-[18px] p-[18px]"
          >
            <Badge variant="role" className="mb-3.5 self-start px-[11px] py-[5px]">
              {archetype.tag}
            </Badge>
            <div className="flex-1 text-sm leading-relaxed text-body">{archetype.body}</div>
            <div className="mt-3.5 border-t border-line-soft pt-3.5">
              <FieldLabel className="mb-1.5">Example</FieldLabel>
              <div className="text-[13.5px] font-medium text-foreground">
                {archetype.example.role}
              </div>
              <div className="mt-[3px] font-mono text-xs leading-normal text-muted-foreground">
                {archetype.example.signals}
              </div>
            </div>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {archetype.greenFlagIds.map((id) => {
                const label = greenFlagLabel(id);
                if (!label) return null;
                return (
                  <Badge
                    key={id}
                    variant="outline"
                    className="border-success-line bg-success-muted px-2 py-0.5 text-[11px] font-normal text-success-foreground"
                  >
                    {label}
                  </Badge>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function BriefCompanyChips() {
  return (
    <section className="mt-14 pb-4">
      <h3 className="mb-2 text-base font-semibold text-foreground">Where they come from</h3>
      <p className="mb-5 max-w-[560px] text-[13.5px] leading-relaxed text-muted-foreground">
        Source pools worth mining first.
      </p>
      <div className="flex flex-wrap gap-2.5">
        {targetCompanies.map((company) => (
          <Badge key={company} variant="company">
            <span className="inline-flex size-[17px] items-center justify-center rounded-[5px] border border-border bg-card font-mono text-[10px] font-medium text-muted-foreground">
              {company[0]}
            </span>
            {company}
          </Badge>
        ))}
      </div>
    </section>
  );
}

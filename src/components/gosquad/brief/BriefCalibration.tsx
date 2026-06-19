import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  briefArchetypes,
  greenFlagLabel,
  targetCompanies,
  type BriefArchetype,
} from "@/features/role-brief/data/role-brief.data";
import { CompanyLogo } from "@/components/gosquad/CompanyLogo";
import { FieldLabel } from "@/components/gosquad/Eyebrow";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

function ArchetypePanel({ archetype }: { archetype: BriefArchetype }) {
  const [flagsOpen, setFlagsOpen] = useState(false);
  const flagCount = archetype.greenFlagIds.filter((id) => greenFlagLabel(id)).length;

  return (
    <Card className="rounded-[18px] p-5">
      <p className="text-[15px] leading-relaxed text-body">{archetype.body}</p>

      <div className="mt-5 border-t border-line-soft pt-5">
        <FieldLabel className="mb-1.5">Real example</FieldLabel>
        <div className="text-[14px] font-medium text-foreground">{archetype.example.role}</div>
        <div className="mt-1 font-mono text-xs leading-normal text-muted-foreground">
          {archetype.example.signals}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setFlagsOpen((open) => !open)}
        className="mt-5 flex w-full items-center justify-between gap-3 border-t border-line-soft pt-4 text-left"
        aria-expanded={flagsOpen}
      >
        <div>
          <FieldLabel>Green flags they hit</FieldLabel>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {flagCount} signals that typically show up
          </p>
        </div>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform",
            flagsOpen && "rotate-180"
          )}
          strokeWidth={2}
        />
      </button>

      {flagsOpen ? (
        <ul className="mt-3 flex flex-col gap-2.5">
          {archetype.greenFlagIds.map((id) => {
            const label = greenFlagLabel(id);
            if (!label) return null;
            return (
              <li key={id} className="flex items-start gap-2.5">
                <Check
                  className="mt-[3px] size-3.5 shrink-0 text-success"
                  strokeWidth={2.5}
                />
                <span className="text-[13.5px] leading-normal text-success-foreground">
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </Card>
  );
}

export function BriefArchetypeGrid() {
  return (
    <section className="mt-14">
      <h3 className="mb-2 text-base font-semibold text-foreground">What good looks like</h3>
      <p className="mb-5 max-w-[560px] text-[13.5px] leading-relaxed text-muted-foreground">
        Three candidate shapes to aim for. Pick one to read the profile, then expand green flags.
      </p>

      <Tabs defaultValue={briefArchetypes[0]?.tag} className="gap-4">
        <TabsList className="h-auto w-full justify-start sm:w-fit">
          {briefArchetypes.map((archetype) => (
            <TabsTrigger key={archetype.tag} value={archetype.tag} className="text-left">
              {archetype.tag}
            </TabsTrigger>
          ))}
        </TabsList>

        {briefArchetypes.map((archetype) => (
          <TabsContent key={archetype.tag} value={archetype.tag} className="mt-0">
            <ArchetypePanel archetype={archetype} />
          </TabsContent>
        ))}
      </Tabs>
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
            <CompanyLogo company={company} />
            {company}
          </Badge>
        ))}
      </div>
    </section>
  );
}

import { ExternalLink } from "lucide-react";
import { archetypes } from "@/features/role-page/data/role-page.data";
import { Eyebrow, FieldLabel } from "@/components/gosquad/Eyebrow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ArchetypeGrid() {
  return (
    <section className="mb-[52px]">
      <Eyebrow>What good looks like</Eyebrow>
      <p className="mt-3 mb-5 max-w-[560px] text-[13.5px] leading-relaxed text-muted-foreground">
        The shape to aim for, with a real example each. Calibrates faster than any checklist.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {archetypes.map((archetype) => (
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
              <Button
                variant="link"
                className="mt-2.5 inline-flex items-center gap-1 text-[12.5px] font-medium"
                asChild
              >
                <a href="#">
                  <ExternalLink className="size-[13px]" strokeWidth={2} />
                  View profile
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

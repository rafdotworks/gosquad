import { targetCompanies } from "@/features/role-page/data/role-page.data";
import { Eyebrow } from "@/components/gosquad/Eyebrow";
import { Badge } from "@/components/ui/badge";

export function CompanyChips() {
  return (
    <section>
      <Eyebrow>Where they come from</Eyebrow>
      <p className="mt-3 mb-5 max-w-[560px] text-[13.5px] leading-relaxed text-muted-foreground">
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

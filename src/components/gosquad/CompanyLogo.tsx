import { companyLogos } from "@/data/company-logos";
import { cn } from "@/lib/utils";

type CompanyLogoProps = {
  company: string;
  className?: string;
};

export function CompanyLogo({ company, className }: CompanyLogoProps) {
  const src = companyLogos[company];

  if (!src) {
    return (
      <span
        className={cn(
          "inline-flex size-[17px] items-center justify-center rounded-[5px] border border-border bg-card font-mono text-[10px] font-medium text-muted-foreground",
          className,
        )}
      >
        {company[0]}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      className={cn("size-[17px] shrink-0 rounded-[5px] object-contain", className)}
    />
  );
}

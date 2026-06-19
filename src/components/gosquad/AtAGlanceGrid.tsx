import type { TldrItem } from "@/features/role-page/data/role-page.data";
import { Eyebrow, FieldLabel } from "@/components/gosquad/Eyebrow";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AtAGlanceGridProps {
  items: TldrItem[];
}

export function AtAGlanceGrid({ items }: AtAGlanceGridProps) {
  return (
    <section className="mb-14">
      <Eyebrow variant="prominent">At a glance</Eyebrow>
      <Card className="mt-5 grid gap-x-10 gap-y-8 bg-secondary/30 px-8 py-9 sm:px-10 sm:py-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={cn(
              index > 0 && "lg:border-l lg:border-line-soft lg:pl-6"
            )}
          >
            <FieldLabel className="mb-2.5 text-[13px]">{item.label}</FieldLabel>
            <div className="text-[15px] leading-[1.65] text-body">{item.value}</div>
          </div>
        ))}
      </Card>
    </section>
  );
}

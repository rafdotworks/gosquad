import { responsibilities } from "@/features/role-page/data/role-page.data";
import { Eyebrow } from "@/components/gosquad/Eyebrow";

export function ResponsibilityList() {
  return (
    <section>
      <Eyebrow>What they&apos;ll own</Eyebrow>
      <div className="mt-5 flex flex-col gap-0.5">
        {responsibilities.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`flex gap-4 py-4 ${index > 0 ? "border-t border-line-soft" : ""}`}
            >
              <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[11px] bg-secondary">
                <Icon className="size-[17px] text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <div className="mb-1 text-[15.5px] font-semibold text-foreground">
                  {item.label}
                </div>
                <div className="max-w-[540px] text-[14.5px] leading-relaxed text-muted-foreground">
                  {item.body}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

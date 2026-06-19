import type { UpdateGroup } from "@/features/role-page/data/updates.data";
import { roleUpdates } from "@/features/role-page/data/updates.data";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/gosquad/Eyebrow";
import { cn } from "@/lib/utils";

const groupOrder: UpdateGroup[] = ["Today", "This week", "Earlier"];

export function UpdatesPanel() {
  return (
    <section>
      <div className="mb-6">
        <Eyebrow>Updates</Eyebrow>
        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
          Recent activity on this role — submissions, stage moves, and recruiter notes.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {groupOrder.map((group) => {
          const items = roleUpdates.filter((u) => u.group === group);
          if (items.length === 0) return null;

          return (
            <div key={group}>
              <div className="mb-3 text-xs font-medium text-muted-foreground">{group}</div>
              <Card className="overflow-hidden rounded-[18px]">
                {items.map((update, index) => (
                  <div
                    key={update.id}
                    className={cn(
                      "flex items-start gap-4 px-5 py-4",
                      index > 0 && "border-t border-line-soft"
                    )}
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-faint" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[13.5px] leading-normal text-body">
                        <span className="font-medium text-foreground">{update.actor}</span>{" "}
                        {update.action}
                        {update.candidate && (
                          <>
                            {" "}
                            —{" "}
                            <span className="font-medium text-foreground">{update.candidate}</span>
                          </>
                        )}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-[12px] text-faint">
                      {update.timestamp}
                    </span>
                  </div>
                ))}
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}

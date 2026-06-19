import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Overview", active: false, count: null },
  { label: "Candidates", active: false, count: 0 },
  { label: "Applications", active: false, count: 0 },
  { label: "Roles", active: true, count: 72 },
];

export function AppHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-[58px] max-w-[1180px] items-center justify-between px-7">
        <div className="flex items-center gap-2">
          <span className="inline-flex gap-[2.5px]" aria-hidden="true">
            <span className="h-[15px] w-[2.5px] rounded-[1px] bg-foreground" />
            <span className="h-[15px] w-[2.5px] rounded-[1px] bg-foreground" />
          </span>
          <span className="font-wordmark text-sm font-bold tracking-[0.05em] text-foreground">
            SQUAD
          </span>
        </div>

        <nav className="flex items-center gap-[26px] text-sm text-muted-foreground">
          {navItems.map((item) => (
            <span
              key={item.label}
              className={cn(item.active && "font-medium text-foreground")}
            >
              {item.label}{" "}
              {item.count !== null && (
                <span className="font-mono text-xs text-faint">{item.count}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Bell className="size-[18px] text-muted-foreground" strokeWidth={1.5} />
          <div className="flex items-center gap-2">
            <Avatar className="size-7 border border-border bg-secondary">
              <AvatarFallback className="bg-secondary text-[13px] font-semibold text-body">
                R
              </AvatarFallback>
            </Avatar>
            <div className="leading-tight">
              <div className="text-[13px] font-medium">raf</div>
              <div className="text-xs text-faint">Recruiter</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

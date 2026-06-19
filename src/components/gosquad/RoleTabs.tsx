import { roleTabs } from "@/features/role-page/data/role-page.data";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RoleTabsProps {
  counts?: Partial<Record<string, number>>;
}

export function RoleTabs({ counts }: RoleTabsProps) {
  return (
    <div className="my-7 mb-9">
      <TabsList>
        {roleTabs.map((tab) => {
          const count = counts?.[tab.value];

          return (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
              {count !== undefined && count > 0 && (
                <span className="ml-1.5 font-mono text-[11px] text-faint">{count}</span>
              )}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </div>
  );
}

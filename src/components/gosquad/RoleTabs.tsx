import { roleTabs } from "@/features/role-page/data/role-page.data";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RoleTabs() {
  const activeTab = roleTabs.find((tab) => tab.active)?.t ?? roleTabs[0].t;

  return (
    <div className="my-7 mb-9">
      <Tabs defaultValue={activeTab}>
        <TabsList>
          {roleTabs.map((tab) => (
            <TabsTrigger key={tab.t} value={tab.t}>
              {tab.t}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}

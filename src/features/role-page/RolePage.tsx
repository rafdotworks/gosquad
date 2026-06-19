import { useEffect, useRef, useState } from "react";
import { AppHeader } from "@/components/gosquad/AppHeader";
import { ArchetypeGrid } from "@/components/gosquad/ArchetypeGrid";
import { AtAGlanceGrid } from "@/components/gosquad/AtAGlanceGrid";
import { CandidatesInProcessPanel } from "@/components/gosquad/CandidatesInProcessPanel";
import { CommentPins } from "@/components/gosquad/CommentPins";
import { CompanyChips } from "@/components/gosquad/CompanyChips";
import { LogisticsGrid } from "@/components/gosquad/LogisticsGrid";
import { PipelinePanel } from "@/components/gosquad/PipelinePanel";
import { PitchSection } from "@/components/gosquad/PitchSection";
import { ProofGrid } from "@/components/gosquad/ProofGrid";
import { ResponsibilityList } from "@/components/gosquad/ResponsibilityList";
import { RoleHero } from "@/components/gosquad/RoleHero";
import { RoleTabs } from "@/components/gosquad/RoleTabs";
import { UpdatesPanel } from "@/components/gosquad/UpdatesPanel";
import { WhoFitsPanel } from "@/components/gosquad/WhoFitsPanel";
import { activeCandidates } from "@/features/role-page/data/candidates.data";
import { pipelineCandidates } from "@/features/role-page/data/pipeline.data";
import { DEFAULT_ROLE_TAB, tldr } from "@/features/role-page/data/role-page.data";
import { roleUpdates } from "@/features/role-page/data/updates.data";
import { useCommentPins } from "@/features/role-page/hooks/useCommentPins";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function RolePage() {
  const [mounted, setMounted] = useState(false);
  const [tab, setTab] = useState(DEFAULT_ROLE_TAB);
  const containerRef = useRef<HTMLDivElement>(null);
  const comments = useCommentPins({ containerRef });

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const tabCounts = {
    pipeline: pipelineCandidates.length,
    "candidates-in-process": activeCandidates.length,
    updates: roleUpdates.length,
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-background font-sans text-foreground"
    >
      <AppHeader />

      <main
        className={cn(
          "mount mx-auto max-w-[1180px] px-7 pt-[30px] pb-[110px]",
          mounted && "mount-in"
        )}
      >
        <RoleHero />

        <Tabs value={tab} onValueChange={setTab}>
          <RoleTabs counts={tabCounts} />

          <TabsContent value="role-information">
            <AtAGlanceGrid items={tldr} />

            <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-start">
              <div>
                <PitchSection />
                <ProofGrid />
                <ResponsibilityList />
              </div>
              <WhoFitsPanel onOpenPipeline={() => setTab("pipeline")} />
            </div>

            <div className="mt-14 border-t border-border pt-12">
              <LogisticsGrid />
              <ArchetypeGrid />
              <CompanyChips />
            </div>
          </TabsContent>

          <TabsContent value="pipeline">
            <PipelinePanel />
          </TabsContent>

          <TabsContent value="candidates-in-process">
            <CandidatesInProcessPanel />
          </TabsContent>

          <TabsContent value="updates">
            <UpdatesPanel />
          </TabsContent>
        </Tabs>
      </main>

      <CommentPins {...comments} />
    </div>
  );
}

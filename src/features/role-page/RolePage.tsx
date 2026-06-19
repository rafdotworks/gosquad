import { useEffect, useRef, useState } from "react";
import { AppHeader } from "@/components/gosquad/AppHeader";
import { ArchetypeGrid } from "@/components/gosquad/ArchetypeGrid";
import { AtAGlanceGrid } from "@/components/gosquad/AtAGlanceGrid";
import { CommentPins } from "@/components/gosquad/CommentPins";
import { CompanyChips } from "@/components/gosquad/CompanyChips";
import { LogisticsGrid } from "@/components/gosquad/LogisticsGrid";
import { PitchSection } from "@/components/gosquad/PitchSection";
import { ProofGrid } from "@/components/gosquad/ProofGrid";
import { ResponsibilityList } from "@/components/gosquad/ResponsibilityList";
import { RoleHero } from "@/components/gosquad/RoleHero";
import { RoleTabs } from "@/components/gosquad/RoleTabs";
import { WhoFitsPanel } from "@/components/gosquad/WhoFitsPanel";
import { tldr } from "@/features/role-page/data/role-page.data";
import { useCommentPins } from "@/features/role-page/hooks/useCommentPins";
import { cn } from "@/lib/utils";

export default function RolePage() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const comments = useCommentPins({ containerRef });

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

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
        <RoleTabs />
        <AtAGlanceGrid items={tldr} />

        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-start">
          <div>
            <PitchSection />
            <ProofGrid />
            <ResponsibilityList />
          </div>
          <WhoFitsPanel />
        </div>

        <div className="mt-14 border-t border-border pt-12">
          <LogisticsGrid />
          <ArchetypeGrid />
          <CompanyChips />
        </div>
      </main>

      <CommentPins {...comments} />
    </div>
  );
}

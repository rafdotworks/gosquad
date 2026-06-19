import { useEffect, useState } from "react";
import { AppHeader } from "@/components/gosquad/AppHeader";
import { BriefHero } from "@/components/gosquad/brief/BriefHero";
import {
  BriefArchetypeGrid,
  BriefCompanyChips,
} from "@/components/gosquad/brief/BriefCalibration";
import { ChapterNav, type BriefChapter } from "@/components/gosquad/brief/ChapterNav";
import { FitSection } from "@/components/gosquad/brief/FitSection";
import { PitchBlock } from "@/components/gosquad/brief/PitchBlock";
import { cn } from "@/lib/utils";

export default function RoleBriefPage() {
  const [mounted, setMounted] = useState(false);
  const [activeChapter, setActiveChapter] = useState<BriefChapter>("pitch");

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const pitchEl = document.getElementById("brief-pitch");
    const fitEl = document.getElementById("brief-fit");
    if (!pitchEl || !fitEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id === "brief-pitch" ? "pitch" : "fit");
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    observer.observe(pitchEl);
    observer.observe(fitEl);
    return () => observer.disconnect();
  }, []);

  function navigateToChapter(chapter: BriefChapter) {
    setActiveChapter(chapter);
    const id = chapter === "pitch" ? "brief-pitch" : "brief-fit";
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="relative min-h-screen bg-background font-sans text-foreground">
      <AppHeader />

      <main
        className={cn(
          "mount mx-auto max-w-[960px] px-7 pt-[30px] pb-[110px]",
          mounted && "mount-in"
        )}
      >
        <BriefHero />

        <div className="mt-10">
          <ChapterNav active={activeChapter} onNavigate={navigateToChapter} />
        </div>

        <div className="mt-12">
          <PitchBlock />
        </div>

        <div className="mt-20 border-t border-border pt-20">
          <FitSection />
          <BriefArchetypeGrid />
          <BriefCompanyChips />
        </div>
      </main>
    </div>
  );
}

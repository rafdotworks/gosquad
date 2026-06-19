import { cn } from "@/lib/utils";

export type BriefChapter = "pitch" | "fit";

interface ChapterNavProps {
  active: BriefChapter;
  onNavigate: (chapter: BriefChapter) => void;
  className?: string;
}

const chapters: { id: BriefChapter; label: string }[] = [
  { id: "pitch", label: "Pitch" },
  { id: "fit", label: "Fit" },
];

export function ChapterNav({ active, onNavigate, className }: ChapterNavProps) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-10 -mx-1 flex gap-1 border-b border-border bg-background/95 px-1 py-3 backdrop-blur-sm",
        className
      )}
      aria-label="Brief sections"
    >
      {chapters.map((chapter) => (
        <button
          key={chapter.id}
          type="button"
          onClick={() => onNavigate(chapter.id)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            active === chapter.id
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          )}
        >
          {chapter.label}
        </button>
      ))}
    </nav>
  );
}

import { Bookmark, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type RoleActionsProps = {
  layout?: "stack" | "bar";
  className?: string;
  id?: string;
};

export function RoleActions({ layout = "stack", className, id }: RoleActionsProps) {
  if (layout === "bar") {
    return (
      <div id={id} className={cn("flex items-center gap-2", className)}>
        <Button variant="outline" size="icon-sm" aria-label="Export JD">
          <Download className="size-[15px]" strokeWidth={1.5} />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Save role">
          <Bookmark className="size-[15px]" strokeWidth={1.5} />
        </Button>
        <Button size="lg" className="min-w-0 flex-1">
          <Send className="size-4" strokeWidth={2} />
          Submit candidate
        </Button>
      </div>
    );
  }

  return (
    <div id={id} className={cn("flex min-w-[210px] flex-col gap-2.5", className)}>
      <Button size="lg" className="w-full">
        <Send className="size-4" strokeWidth={2} />
        Submit candidate
      </Button>
      <div className="flex gap-2.5">
        <Button variant="outline" size="sm" className="flex-1">
          <Download className="size-[15px]" strokeWidth={1.5} />
          Export JD
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Bookmark className="size-[15px]" strokeWidth={1.5} />
          Save
        </Button>
      </div>
    </div>
  );
}

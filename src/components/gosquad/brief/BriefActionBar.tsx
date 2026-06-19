import { useEffect, useState } from "react";
import { RoleActions } from "@/components/gosquad/RoleActions";
import { cn } from "@/lib/utils";

export function BriefActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroActions = document.getElementById("brief-hero-actions");
    if (!heroActions) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(heroActions);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 px-7 py-3 backdrop-blur-sm transition-transform duration-300 ease-out",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      )}
      aria-hidden={!visible}
    >
      <div className="mx-auto max-w-[960px]">
        <RoleActions layout="bar" />
      </div>
    </div>
  );
}

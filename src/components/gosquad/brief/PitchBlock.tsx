import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import {
  hiringManagerVideo,
  pitchLines,
  pitchProof,
} from "@/features/role-brief/data/role-brief.data";
import { HmVideoEmbed } from "@/components/gosquad/brief/HmVideoEmbed";
import { Button } from "@/components/ui/button";

function CopyButton({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleCopy} className="gap-2">
      {copied ? (
        <Check className="size-[15px]" strokeWidth={2} />
      ) : (
        <Link2 className="size-[15px]" strokeWidth={2} />
      )}
      {copied ? "Copied" : label}
    </Button>
  );
}

export function PitchBlock() {
  const headline = pitchLines.find((l) => l.kind === "headline");
  const hook = pitchLines.find((l) => l.kind === "hook");
  const ownership = pitchLines.find((l) => l.kind === "ownership");

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const videoUrl = hiringManagerVideo.url || pageUrl;

  return (
    <section id="brief-pitch" className="scroll-mt-20">
      <h2 className="font-display mb-2 text-[28px] leading-[1.15] font-light tracking-[-0.02em] text-foreground">
        Pitch this role
      </h2>
      <p className="mb-8 max-w-[520px] text-[15px] leading-relaxed text-muted-foreground">
        Share the hiring manager&apos;s voice with candidates. This is the story to lead with.
      </p>

      <HmVideoEmbed video={hiringManagerVideo} />

      <div className="mt-4 flex flex-wrap gap-2.5">
        <CopyButton label="Copy page link" value={pageUrl} />
        {hiringManagerVideo.url ? (
          <CopyButton label="Copy video link" value={videoUrl} />
        ) : null}
      </div>

      <div className="mt-10 space-y-5">
        {headline ? (
          <p className="font-display max-w-[600px] text-[22px] leading-[1.4] font-light tracking-[-0.015em] text-foreground">
            {headline.text}
          </p>
        ) : null}
        {hook ? (
          <p className="font-display max-w-[560px] border-l-2 border-foreground pl-5 text-lg leading-[1.6] font-light text-body italic">
            {hook.text}
          </p>
        ) : null}
        {ownership ? (
          <p className="max-w-[560px] text-[15px] leading-[1.7] text-muted-foreground">
            {ownership.text}
          </p>
        ) : null}
      </div>

      <div className="mt-10 flex flex-col gap-5 border-y border-border py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        {pitchProof.map((stat) => (
          <div key={stat.k} className="flex items-center gap-3.5">
            <stat.icon className="size-[18px] shrink-0 text-muted-foreground" strokeWidth={1.5} />
            <div>
              <div className="text-xs text-muted-foreground">{stat.k}</div>
              <div className="mt-1 text-[15px] font-medium leading-snug text-foreground">{stat.v}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

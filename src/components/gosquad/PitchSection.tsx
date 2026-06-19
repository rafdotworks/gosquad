import { Play } from "lucide-react";
import { Eyebrow } from "@/components/gosquad/Eyebrow";

export function PitchSection() {
  return (
    <>
      <section className="mb-11">
        <Eyebrow>The pitch</Eyebrow>
        <p className="font-display mt-4 max-w-[600px] text-[25px] leading-[1.4] font-light tracking-[-0.015em] text-foreground">
          Senpi is building an AI crypto wallet that thinks, trades, and protects alongside
          its users.
        </p>
        <div className="mt-6 border-l-2 border-foreground pl-5">
          <p className="font-display max-w-[560px] text-lg leading-[1.6] font-light text-body italic">
            It runs autonomous trading agents on Hyperliquid. Downtime is not an error page.
            It means open positions are unprotected and capital is at risk.
          </p>
        </div>
        <p className="mt-[22px] max-w-[560px] text-[15px] leading-[1.7] text-muted-foreground">
          The hire owns the infrastructure that keeps those agents alive, fast, secure, and
          reliable at scale.
        </p>
      </section>

      <section className="mb-11">
        <Eyebrow>From the hiring manager</Eyebrow>
        <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-[20px] border border-border bg-gradient-to-br from-secondary to-background">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-16 items-center justify-center rounded-full border border-border bg-card shadow-float-md">
              <Play
                className="ml-[3px] size-[23px] fill-foreground text-foreground"
                strokeWidth={2}
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[rgba(22,21,15,0.55)] to-transparent px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex size-[30px] items-center justify-center rounded-full bg-card text-xs font-semibold text-body">
                S
              </div>
              <div className="leading-tight">
                <div className="text-[13px] font-semibold text-white">Why this role matters</div>
                <div className="text-xs text-white/85">Founder &amp; CTO</div>
              </div>
            </div>
            <span className="rounded-md bg-black/40 px-2 py-[3px] font-mono text-[11.5px] font-medium text-white">
              2:14
            </span>
          </div>
        </div>
        <p className="mt-3.5 max-w-[560px] text-[13.5px] leading-relaxed text-muted-foreground">
          Candidates hear the pitch in the hiring manager&apos;s own voice. Share this clip
          with anyone you put forward.
        </p>
      </section>
    </>
  );
}

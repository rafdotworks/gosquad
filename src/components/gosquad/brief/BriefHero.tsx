import { ArrowLeft, Briefcase, DollarSign, Hash, MapPin, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MetaItem } from "@/components/gosquad/MetaItem";

const roleTags = ["Site Reliability (SRE)", "DevOps"];

export function BriefHero() {
  return (
    <>
      <div className="mb-[26px] flex flex-wrap items-center justify-between gap-3">
        <Button variant="link" className="inline-flex items-center gap-2 text-sm" asChild>
          <a href="/">
            <ArrowLeft className="size-4" strokeWidth={1.5} />
            Full role page
          </a>
        </Button>
        <Badge variant="outline" className="font-normal text-muted-foreground">
          Experimental brief
        </Badge>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-7">
        <div className="min-w-[280px] flex-[1_1_440px]">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="priority">High priority</Badge>
            {roleTags.map((tag) => (
              <Badge key={tag} variant="role">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-display mb-[18px] text-[34px] leading-[1.12] font-light tracking-[-0.02em] text-foreground sm:text-[38px]">
            Senior DevOps / SRE Engineer
          </h1>

          <div className="flex flex-wrap items-center gap-5">
            <MetaItem icon={Briefcase}>Senpi</MetaItem>
            <MetaItem icon={Hash} code>
              1338
            </MetaItem>
            <MetaItem icon={MapPin}>Americas / EMEA</MetaItem>
            <MetaItem icon={DollarSign} code>
              Up to $150K
            </MetaItem>
          </div>
        </div>

        <Button size="lg" className="min-w-[210px] shrink-0">
          <Send className="size-4" strokeWidth={2} />
          Submit candidate
        </Button>
      </div>
    </>
  );
}

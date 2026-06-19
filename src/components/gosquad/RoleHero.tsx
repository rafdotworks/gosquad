import {
  ArrowLeft,
  Bookmark,
  Briefcase,
  DollarSign,
  Download,
  Hash,
  MapPin,
  Send,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MetaItem } from "@/components/gosquad/MetaItem";

const roleTags = ["Site Reliability (SRE)", "DevOps"];

export function RoleHero() {
  return (
    <>
      <Button variant="link" className="mb-[26px] inline-flex items-center gap-2 text-sm" asChild>
        <a href="#">
          <ArrowLeft className="size-4" strokeWidth={1.5} />
          Back to browse roles
        </a>
      </Button>

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

          <h1 className="font-display mb-[18px] text-[38px] leading-[1.1] font-light tracking-[-0.02em] text-foreground">
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

        <div className="flex min-w-[210px] flex-col gap-2.5">
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
      </div>
    </>
  );
}

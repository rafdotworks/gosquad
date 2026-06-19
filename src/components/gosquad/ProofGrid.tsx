import { backers, proof } from "@/features/role-page/data/role-page.data";
import { Eyebrow, FieldLabel } from "@/components/gosquad/Eyebrow";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function ProofGrid() {
  return (
    <section className="mb-12">
      <Eyebrow>The proof</Eyebrow>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {proof.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.k} className="rounded-2xl p-4">
              <FieldLabel className="mb-2 flex items-center gap-[7px]">
                <Icon className="size-3.5 text-muted-foreground" strokeWidth={1.5} />
                {stat.k}
              </FieldLabel>
              <div className="font-mono text-[15px] font-medium text-foreground">{stat.v}</div>
            </Card>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        <span className="text-[13px] text-muted-foreground">Backed by</span>
        {backers.map((backer) => (
          <Badge key={backer} variant="role" className="px-3 py-[5px]">
            {backer}
          </Badge>
        ))}
      </div>
    </section>
  );
}

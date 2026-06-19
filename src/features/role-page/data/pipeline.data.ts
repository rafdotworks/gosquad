export type FitSignal = "Strong" | "Borderline" | "Weak";

export interface PipelineCandidate {
  id: string;
  name: string;
  role: string;
  company: string;
  fit: FitSignal;
  source: string;
  lastTouch: string;
}

export const pipelineCandidates: PipelineCandidate[] = [
  {
    id: "p1",
    name: "Maya Chen",
    role: "Senior SRE",
    company: "Coinbase",
    fit: "Strong",
    source: "Squad search",
    lastTouch: "2 days ago",
  },
  {
    id: "p2",
    name: "James Okonkwo",
    role: "Platform Engineer",
    company: "dYdX",
    fit: "Strong",
    source: "Referral",
    lastTouch: "4 days ago",
  },
  {
    id: "p3",
    name: "Priya Sharma",
    role: "DevOps Lead",
    company: "Chainalysis",
    fit: "Borderline",
    source: "LinkedIn",
    lastTouch: "1 week ago",
  },
  {
    id: "p4",
    name: "Tomás Rivera",
    role: "Infra Engineer",
    company: "Alchemy",
    fit: "Strong",
    source: "Squad search",
    lastTouch: "3 days ago",
  },
  {
    id: "p5",
    name: "Elena Voss",
    role: "SRE Manager",
    company: "Stripe",
    fit: "Weak",
    source: "Inbound",
    lastTouch: "2 weeks ago",
  },
  {
    id: "p6",
    name: "Daniel Kim",
    role: "Founding Engineer",
    company: "Series A fintech",
    fit: "Borderline",
    source: "Referral",
    lastTouch: "5 days ago",
  },
];

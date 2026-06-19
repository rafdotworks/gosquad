import type { LucideIcon } from "lucide-react";
import { Coins, TrendingUp, Users } from "lucide-react";

export type FitTier = "must_have" | "green_flag" | "disqualifier";

export interface FitCriterion {
  id: string;
  label: string;
  detail?: string;
  tier: FitTier;
}

export type VideoProvider = "loom" | "youtube" | "vimeo" | "native";

export interface HiringManagerVideo {
  url: string;
  provider: VideoProvider;
  title: string;
  speaker: string;
  duration?: string;
  thumbnailUrl?: string;
}

export interface PitchLine {
  kind: "headline" | "hook" | "ownership";
  text: string;
}

export interface ProofStat {
  icon: LucideIcon;
  k: string;
  v: string;
}

export interface BriefArchetype {
  tag: string;
  body: string;
  example: {
    role: string;
    signals: string;
  };
  greenFlagIds: string[];
}

export const hiringManagerVideo: HiringManagerVideo = {
  url: "",
  provider: "loom",
  title: "Why this role matters",
  speaker: "Founder & CTO",
  duration: "2:14",
};

export const pitchLines: PitchLine[] = [
  {
    kind: "headline",
    text: "Senpi is building an AI crypto wallet that thinks, trades, and protects alongside its users.",
  },
  {
    kind: "hook",
    text: "It runs autonomous trading agents on Hyperliquid. Downtime is not an error page — open positions are unprotected and capital is at risk.",
  },
  {
    kind: "ownership",
    text: "The hire owns the infrastructure that keeps those agents alive, fast, secure, and reliable at scale.",
  },
];

export const pitchProof: ProofStat[] = [
  { icon: Coins, k: "Raised", v: "$5.5M seed" },
  { icon: TrendingUp, k: "Traction", v: "$40M+ monthly volume" },
  { icon: Users, k: "Team", v: "12, ex-Coinbase & Jane St." },
];

export const fitCriteria: FitCriterion[] = [
  {
    id: "infra-from-scratch",
    label: "DevOps, SRE, or infra plus backend — built from scratch",
    tier: "must_have",
  },
  {
    id: "k8s-production",
    label: "Strong Kubernetes in production, ideally EKS",
    tier: "must_have",
  },
  {
    id: "docker-helm",
    label: "Docker and Helm for packaging production services",
    tier: "must_have",
  },
  {
    id: "cicd",
    label: "CI/CD automation: GitHub Actions, ArgoCD, or similar",
    tier: "must_have",
  },
  {
    id: "aws",
    label: "Strong AWS infrastructure experience",
    tier: "must_have",
  },
  {
    id: "baseline-reliability",
    label: "Baseline reliability: on-call, incident response, monitoring",
    tier: "must_have",
  },
  {
    id: "mcp-deployment",
    label: "MCP server deployment experience",
    tier: "green_flag",
  },
  {
    id: "trading-domain",
    label: "Trading, fintech, or crypto domain exposure",
    detail: "Hyperliquid experience is a plus",
    tier: "green_flag",
  },
  {
    id: "agent-infra",
    label: "Agent and multi-agent infrastructure",
    detail: "OpenClaw experience is a plus",
    tier: "green_flag",
  },
  {
    id: "deep-observability",
    label: "Deep observability stack",
    detail: "Prometheus, Grafana, Datadog, OpenTelemetry",
    tier: "green_flag",
  },
  {
    id: "realtime-systems",
    label: "Real-time, latency-sensitive systems under load",
    tier: "green_flag",
  },
  {
    id: "advanced-reliability",
    label: "Advanced reliability practices",
    detail: "SLOs, DR, backup and recovery",
    tier: "green_flag",
  },
  {
    id: "iac-depth",
    label: "Infrastructure as code depth",
    detail: "Terraform, Ansible",
    tier: "green_flag",
  },
  {
    id: "pure-devops",
    label: "Pure devops, no development work",
    tier: "disqualifier",
  },
  {
    id: "manager-not-doer",
    label: "More of a manager than a doer",
    tier: "disqualifier",
  },
  {
    id: "routine-ops",
    label: "Routine ops focus only",
    tier: "disqualifier",
  },
  {
    id: "missing-reliability",
    label: "Missing reliability depth",
    tier: "disqualifier",
  },
  {
    id: "big-company-only",
    label: "Only big-company experience",
    tier: "disqualifier",
  },
];

export const briefArchetypes: BriefArchetype[] = [
  {
    tag: "Trading-infra operator",
    body: "Ran latency-sensitive systems at an exchange or prop shop. Comfortable when uptime maps straight to money.",
    example: {
      role: "Senior SRE, derivatives exchange",
      signals: "6 yrs. Matching-engine infra. On-call lead.",
    },
    greenFlagIds: ["realtime-systems", "trading-domain", "deep-observability"],
  },
  {
    tag: "Startup SRE builder",
    body: "Early at a seed or Series A. Built infra from scratch, owned on-call alone, made the reliability calls.",
    example: {
      role: "Founding infra engineer, Series A fintech",
      signals: "5 yrs. Built the platform 0 to 1. EKS, Terraform.",
    },
    greenFlagIds: ["iac-depth", "advanced-reliability", "deep-observability"],
  },
  {
    tag: "Crypto-native platform engineer",
    body: "Ran node infrastructure and blockchain-adjacent services. Already fluent in the domain, fast to ramp.",
    example: {
      role: "Platform engineer, crypto custody",
      signals: "7 yrs. Node and RPC infra. High-availability.",
    },
    greenFlagIds: ["trading-domain", "agent-infra", "realtime-systems"],
  },
];

export const targetCompanies: string[] = [
  "Coinbase",
  "Chainalysis",
  "Jump Crypto",
  "Alchemy",
  "Anchorage Digital",
  "dYdX",
];

export function criteriaByTier(tier: FitTier): FitCriterion[] {
  return fitCriteria.filter((c) => c.tier === tier);
}

export function greenFlagLabel(id: string): string | undefined {
  return fitCriteria.find((c) => c.id === id && c.tier === "green_flag")?.label;
}

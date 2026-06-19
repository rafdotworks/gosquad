import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Boxes,
  Coins,
  GitBranch,
  Server,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

export interface TldrItem {
  label: string;
  value: string;
}

export interface Responsibility {
  icon: LucideIcon;
  label: string;
  body: string;
}

export interface Archetype {
  tag: string;
  body: string;
  example: {
    role: string;
    signals: string;
  };
}

export interface InterviewStage {
  n: number;
  label: string;
  note: string;
}

export interface ProofStat {
  icon: LucideIcon;
  k: string;
  v: string;
}

export interface DealRow {
  k: string;
  v: string;
  code: boolean;
}

export interface RoleTab {
  value: string;
  label: string;
}

export const tldr: TldrItem[] = [
  {
    label: "What & why",
    value: "Senpi runs autonomous trading agents on Hyperliquid. The hire keeps them alive.",
  },
  {
    label: "The deal",
    value: "Up to $150K. Americas or EMEA. Full-time.",
  },
  {
    label: "Make-or-break",
    value: "Kubernetes in production, strong AWS, infra built from scratch.",
  },
  {
    label: "Who fits",
    value: "A startup SRE builder or a trading-infra operator.",
  },
];

export const mustHaves: string[] = [
  "DevOps, SRE, or infra plus backend, built from scratch",
  "Strong Kubernetes in production, ideally EKS",
  "Docker and Helm for packaging production services",
  "CI/CD automation: GitHub Actions, ArgoCD, or similar",
  "Strong AWS infrastructure experience",
  "Production reliability depth: on-call, incident response, monitoring",
];

export const greenFlags: string[] = [
  "MCP server deployment experience",
  "Trading, fintech, or crypto domain exposure (Hyperliquid a plus)",
  "Agent and multi-agent infrastructure (OpenClaw)",
  "Deep observability: Prometheus, Grafana, Datadog, OpenTelemetry",
  "Real-time, latency-sensitive systems under load",
  "Advanced reliability: SLOs, DR, backup and recovery",
  "Infrastructure as code: Terraform, Ansible",
];

export const disqualifiers: string[] = [
  "Pure devops, no development work",
  "More of a manager than a doer",
  "Routine ops focus only",
  "Missing reliability depth",
  "Only big-company experience",
];

export const rejectionReasons: string[] = [
  "Strong infra, never owned production reliability",
  "Senior title, mostly delegated the hands-on work",
  "Solid generalist, thin on AWS and Kubernetes depth",
];

export const responsibilities: Responsibility[] = [
  {
    icon: Boxes,
    label: "Run the agent fleet",
    body: "Keep dozens of concurrent trading agents alive, each with its own cron schedule, state file, and trailing-stop process. Deploy and manage OpenClaw environments.",
  },
  {
    icon: GitBranch,
    label: "Ship without stopping trades",
    body: "Build CI/CD for skills, plugins, and agent updates. Zero-downtime rollouts and safe rollback, with open positions protected through every change.",
  },
  {
    icon: Activity,
    label: "Catch failures before they cost money",
    body: "Monitoring, alerting, and observability across the stack. Surface agent failures, orphaned positions, state corruption, and MCP auth expiry early.",
  },
  {
    icon: Server,
    label: "Operate the core platform",
    body: "Kubernetes and EKS, Redis, Postgres, ClickHouse, Kafka, and blockchain-adjacent services. Run node infrastructure and reliable Hyperliquid connectivity.",
  },
  {
    icon: ShieldCheck,
    label: "Own reliability and security",
    body: "On-call, incident response, and postmortems. Access, secrets, and production hardening. Backup, recovery, and disaster-readiness.",
  },
];

export const archetypes: Archetype[] = [
  {
    tag: "Trading-infra operator",
    body: "Ran latency-sensitive systems at an exchange or prop shop. Comfortable when uptime maps straight to money. Knows what breaks under real load.",
    example: {
      role: "Senior SRE, derivatives exchange",
      signals: "6 yrs. Matching-engine infra. On-call lead.",
    },
  },
  {
    tag: "Startup SRE builder",
    body: "Early at a seed or Series A. Built infra from scratch, owned on-call alone, made the reliability calls. Ships, does not delegate.",
    example: {
      role: "Founding infra engineer, Series A fintech",
      signals: "5 yrs. Built the platform 0 to 1. EKS, Terraform.",
    },
  },
  {
    tag: "Crypto-native platform engineer",
    body: "Ran node infrastructure and blockchain-adjacent services. Already fluent in the domain, fast to ramp on agents and Hyperliquid.",
    example: {
      role: "Platform engineer, crypto custody",
      signals: "7 yrs. Node and RPC infra. High-availability.",
    },
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

export const interviewStages: InterviewStage[] = [
  { n: 1, label: "Recruiter screen", note: "Fit, motivation, logistics" },
  { n: 2, label: "Hiring manager", note: "Ownership and depth" },
  { n: 3, label: "Technical screen", note: "Infrastructure and reliability" },
  { n: 4, label: "System design", note: "Scaling a live trading platform" },
  { n: 5, label: "Team and values", note: "Collaboration and culture" },
];

export const proof: ProofStat[] = [
  { icon: Coins, k: "Raised", v: "$5.5M seed" },
  { icon: TrendingUp, k: "Traction", v: "$40M+ monthly volume" },
  { icon: Users, k: "Team", v: "12, ex-Coinbase & Jane St." },
];

export const backers: string[] = [
  "Multicoin Capital",
  "Dragonfly",
  "Robot Ventures",
];

export const roleTabs: RoleTab[] = [
  { value: "role-information", label: "Role information" },
  { value: "pipeline", label: "Pipeline" },
  { value: "candidates-in-process", label: "Candidates in process" },
  { value: "updates", label: "Updates" },
];

export const DEFAULT_ROLE_TAB = roleTabs[0].value;

export const dealRows: DealRow[] = [
  { k: "Location", v: "Americas or EMEA", code: false },
  { k: "Compensation", v: "Up to $150K", code: true },
  { k: "Role type", v: "Full-time", code: false },
  { k: "Openings", v: "1", code: true },
];

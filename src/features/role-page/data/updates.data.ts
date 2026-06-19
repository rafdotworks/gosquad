export type UpdateGroup = "Today" | "This week" | "Earlier";

export interface RoleUpdate {
  id: string;
  group: UpdateGroup;
  timestamp: string;
  actor: string;
  action: string;
  candidate?: string;
}

export const roleUpdates: RoleUpdate[] = [
  {
    id: "u1",
    group: "Today",
    timestamp: "10:42 AM",
    actor: "raf",
    action: "Moved to Technical screen",
    candidate: "Alex Mercer",
  },
  {
    id: "u2",
    group: "Today",
    timestamp: "9:15 AM",
    actor: "Squad AI",
    action: "Flagged strong fit — Kubernetes + trading infra signals",
    candidate: "Tomás Rivera",
  },
  {
    id: "u3",
    group: "This week",
    timestamp: "Wed",
    actor: "raf",
    action: "Submitted to hiring manager",
    candidate: "Sofia Lindström",
  },
  {
    id: "u4",
    group: "This week",
    timestamp: "Tue",
    actor: "Senpi HM",
    action: "Passed Technical screen — advance to system design",
    candidate: "Alex Mercer",
  },
  {
    id: "u5",
    group: "This week",
    timestamp: "Mon",
    actor: "raf",
    action: "Rejected — thin on production reliability depth",
    candidate: "Elena Voss",
  },
  {
    id: "u6",
    group: "Earlier",
    timestamp: "Jun 10",
    actor: "raf",
    action: "Added to pipeline from referral",
    candidate: "James Okonkwo",
  },
  {
    id: "u7",
    group: "Earlier",
    timestamp: "Jun 8",
    actor: "Squad AI",
    action: "Role brief updated — green flags expanded",
  },
];

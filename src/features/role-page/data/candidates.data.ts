export interface ActiveCandidate {
  id: string;
  name: string;
  company: string;
  stage: number;
  daysInStage: number;
  nextStep: string;
}

export const activeCandidates: ActiveCandidate[] = [
  {
    id: "c1",
    name: "Alex Mercer",
    company: "Jump Crypto",
    stage: 3,
    daysInStage: 4,
    nextStep: "System design — Thu 2pm",
  },
  {
    id: "c2",
    name: "Sofia Lindström",
    company: "Anchorage Digital",
    stage: 2,
    daysInStage: 6,
    nextStep: "HM debrief pending",
  },
  {
    id: "c3",
    name: "Marcus Webb",
    company: "Robot Ventures portfolio co.",
    stage: 4,
    daysInStage: 2,
    nextStep: "Team interview scheduled",
  },
];

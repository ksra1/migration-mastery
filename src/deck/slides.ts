import HeroSlide from "./slides/01-Hero";
import ProjectOverviewSlide from "./slides/02-ProjectOverview";
import ObjectivesSlide from "./slides/02-Objectives";
import RoleSlide from "./slides/03-Role";
import ComplexitySlide from "./slides/04-Complexity";
import ArchitectureSlide from "./slides/05-Architecture";
import PipelinesSlide from "./slides/06-Pipelines";
import StrategySlide from "./slides/06-Strategy";
import ChallengesSlide from "./slides/07-Challenges";
import TeamSlide from "./slides/08-Team";
import StakeholdersSlide from "./slides/09-Stakeholders";
import OutcomesSlide from "./slides/10-Outcomes";
import LessonsSlide from "./slides/11-Lessons";

export type SlideDef = {
  id: number;
  title: string;
  eyebrow?: string;
  Component: React.ComponentType;
};

export const SLIDES: SlideDef[] = [
  { id: 1, title: "Engineering Manager Interview", eyebrow: "Intro", Component: HeroSlide },
  { id: 2, title: "Enterprise AEM Cloud Migration", eyebrow: "Project Overview", Component: ProjectOverviewSlide },
  { id: 3, title: "Business Objectives & Value", eyebrow: "Why", Component: ObjectivesSlide },
  { id: 4, title: "My Role & Leadership", eyebrow: "Role", Component: RoleSlide },
  { id: 5, title: "Program Complexity", eyebrow: "Landscape", Component: ComplexitySlide },
  { id: 6, title: "Architecture Overview", eyebrow: "Technical", Component: ArchitectureSlide },
  { id: 7, title: "CI/CD + Monorepo Approach using Adobe Cloud Pipelines", eyebrow: "Delivery", Component: PipelinesSlide },
  { id: 8, title: "Migration Strategy", eyebrow: "Approach", Component: StrategySlide },
  { id: 9, title: "Key Challenges & Decisions", eyebrow: "Decisions", Component: ChallengesSlide },
  { id: 10, title: "Team & Culture", eyebrow: "People", Component: TeamSlide },
  { id: 11, title: "Stakeholder Management", eyebrow: "Alignment", Component: StakeholdersSlide },
  { id: 12, title: "Outcomes & Impact", eyebrow: "Results", Component: OutcomesSlide },
  { id: 13, title: "Lessons Learned", eyebrow: "Reflection", Component: LessonsSlide },
];

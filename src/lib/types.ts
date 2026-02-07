import type { TechIcons } from "@/components/icons";
import type { LucideIcon } from "lucide-react";

export type Skill = {
  name: string;
  icon: keyof typeof TechIcons | LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: {
    id: string;
    width: number;
    height: number;
  },
  liveLink: string;
  githubLink: string;
};

export type PortfolioData = {
  name: string;
  title: string;
  linkedin: string;
  email: string;
  github: string;
  intro: {
    blurb: string;
    keySkills: string[];
    experienceSummary: string;
  };
  skills: Skill[];
  projects: Project[];
};

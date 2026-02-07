import type { PortfolioData } from "@/lib/types";
import { Code, Component, Figma, Framer, GitBranch, TerminalSquare, Workflow, Zap } from "lucide-react";

export const portfolioData: PortfolioData = {
  name: "Shravani",
  title: "Creative Developer & UI/UX Designer",
  heroImageId: "hero",
  linkedin: "https://www.linkedin.com/",
  email: "mailto:hello@example.com",
  github: "https://github.com/",
  intro: {
    blurb: "As a design-focused developer, I specialize in creating intuitive and beautiful user experiences. My passion lies in the intersection of clean code and compelling design, transforming complex ideas into elegant digital solutions.",
    keySkills: ["UI/UX Design", "Next.js", "TypeScript", "Figma", "Web Development"],
    experienceSummary: "With over 5 years in the field, I've had the privilege of working on a diverse range of projects, from innovative startups to established tech companies. My experience spans the full product lifecycle, from initial concept and user research to final deployment and iteration. I'm driven by a desire to build products that not only function flawlessly but also delight and empower users."
  },
  skills: [
    { name: "Next.js", icon: "nextjs" },
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Figma", icon: Figma },
    { name: "Git", icon: GitBranch },
    { name: "Framer Motion", icon: Framer },
    { name: "Node.js", icon: "nodejs" },
    { name: "UI/UX Design", icon: Component },
    { name: "Prototyping", icon: Workflow },
    { name: "Web Sockets", icon: Zap },
  ],
  projects: [
    {
      title: "Zenith Landing Page",
      description: "A responsive and animated landing page for a fictional tech company, designed to capture user interest and drive conversions.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: { id: "project1", width: 600, height: 400 },
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "FlowBoard Task Manager",
      description: "A Kanban-style task management app with drag-and-drop functionality and real-time collaboration features.",
      techStack: ["React", "TypeScript", "Web Sockets"],
      image: { id: "project2", width: 600, height: 400 },
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio API",
      description: "A headless CMS and API backend to power this portfolio, built with Node.js and Express for easy content management.",
      techStack: ["Node.js", "Express", "PostgreSQL"],
      image: { id: "project3", width: 600, height: 400 },
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Chroma-UI Design System",
      description: "A comprehensive design system and component library built from scratch, ensuring brand consistency and development efficiency.",
      techStack: ["Figma", "React", "Storybook"],
      image: { id: "project4", width: 600, height: 400 },
      liveLink: "#",
      githubLink: "#",
    },
  ],
};

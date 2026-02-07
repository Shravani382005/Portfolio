import type { PortfolioData } from "@/lib/types";
import { Code, Component, Figma, Framer, GitBranch, TerminalSquare, Workflow, Zap } from "lucide-react";

export const portfolioData: PortfolioData = {
  name: "Shravani",
  title: "Full Stack Web Developer",
  linkedin: "https://www.linkedin.com/",
  email: "mailto:hello@example.com",
  github: "https://github.com/",
  intro: {
    blurb: "As a full-stack developer, I specialize in building robust and scalable web applications. My passion lies in crafting clean code and creating seamless user experiences, from the database to the browser.",
    keySkills: ["Full-Stack Development", "Next.js", "TypeScript", "Node.js", "Databases"],
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
      title: "Wanderlust Travels",
      description: "A booking platform for exotic getaways, featuring stunning visuals, user reviews, and an easy-to-use booking system.",
      techStack: ["Next.js", "TypeScript", "Mapbox"],
      image: { id: "project1", width: 600, height: 400 },
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "The Daily Grind",
      description: "A directory and review website for local coffee shops. Includes user accounts, review submissions, and a location-based search.",
      techStack: ["React", "Firebase", "Google Maps API"],
      image: { id: "project2", width: 600, height: 400 },
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "ShopSphere E-commerce",
      description: "A full-featured e-commerce platform with product management, shopping cart, and Stripe integration for payments.",
      techStack: ["Next.js", "PostgreSQL", "Stripe"],
      image: { id: "project3", width: 600, height: 400 },
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "ConnectSphere Chat",
      description: "A real-time chat application using WebSockets for instant messaging, user presence, and private channels.",
      techStack: ["Node.js", "Socket.IO", "React"],
      image: { id: "project4", width: 600, height: 400 },
      liveLink: "#",
      githubLink: "#",
    },
  ],
};

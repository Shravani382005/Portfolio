import type { PortfolioData } from "@/lib/types";
import { Bug, Code, Database, FileCode, Palette, Server } from "lucide-react";

export const portfolioData: PortfolioData = {
  name: "Shravani",
  title: "Full Stack Web Developer",
  linkedin: "https://www.linkedin.com/",
  email: "mailto:hello@example.com",
  github: "https://github.com/",
  intro: {
    blurb: "Full Stack Developer skilled in creating responsive web apps with React, Node.js, and MongoDB. Experienced in front-end, back-end, and database integration, with a focus on problem-solving and modern technologies. Proficient in SQL and AWS, particularly in fintech and e-commerce.",
    keySkills: ["React", "Node.js", "MongoDB", "SQL", "AWS"],
    experienceSummary: "Experienced in front-end, back-end, and database integration, with a focus on problem-solving and modern technologies. Proficient in SQL and AWS, particularly in fintech and e-commerce."
  },
  skills: [
    { name: "HTML", icon: Code },
    { name: "CSS", icon: Palette },
    { name: "JavaScript", icon: "javascript" },
    { name: "React.js", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "Java", icon: FileCode },
    { name: "Python", icon: FileCode },
    { name: "C++", icon: FileCode },
    { name: "Problem Solving", icon: Bug },
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

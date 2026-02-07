import type { PortfolioData } from "@/lib/types";
import { Bug, Code, Database, FileCode, Palette, Server, GitMerge, Users, Lightbulb } from "lucide-react";

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
  experience: [
    {
      title: "Full Stack Web Developer Intern",
      company: "TechnoHacks",
      location: "Nashik",
      date: "Jan 2026 - Feb 2026",
      description: [
        "Crafted engaging and dynamic user interfaces with HTML, CSS, JavaScript, and React.",
        "Developed backend APIs utilizing Node.js and seamlessly integrated them with MongoDB.",
        "Utilized Git and GitHub for version control and collaborative teamwork."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Bluestock Fintech Company",
      location: "Remote",
      date: "Oct 2025 - Nov 2025",
      description: [
        "Resolved bugs and enhanced current code with guidance from a senior developer.",
        "Developed technical documentation while adhering to Agile development practices.",
        "Utilized Git for effective code management and collaboration."
      ]
    },
    {
      title: "Data Analytics Intern",
      company: "Internzvalley",
      location: "Remote",
      date: "May 2025 - Jul 2025",
      description: [
        "Conducted comprehensive data analysis using Python and Excel.",
        "Cleaned and processed data to derive actionable insights.",
        "Developed detailed reports and visualizations to aid strategic decision-making.",
        "Enhanced analytical and problem-solving capabilities."
      ]
    }
  ],
  projects: [
    {
      title: "Wanderlust Travels",
      description: "A booking platform for exotic getaways, featuring stunning visuals, user reviews, and an easy-to-use booking system.",
      techStack: ["HTML", "CSS", "JS", "Node.js", "React"],
      image: { id: "project1", width: 600, height: 400 },
    },
    {
      title: "Coffee Shop",
      description: "A directory and review website for local coffee shops. Includes user accounts, review submissions, and a location-based search.",
      techStack: ["HTML", "CSS", "JS", "Node.js", "React"],
      image: { id: "project2", width: 600, height: 400 },
    },
    {
      title: "Developer Portfolio",
      description: "A personal portfolio to showcase my work and skills, featuring a modern design and animations.",
      techStack: ["HTML", "CSS", "JS", "Node.js", "React"],
      image: { id: "project3", width: 600, height: 400 },
    },
    {
      title: "Quiz Master",
      description: "An interactive quiz application with various categories and a real-time scoring system.",
      techStack: ["HTML", "CSS", "JS", "Node.js", "React"],
      image: { id: "project4", width: 600, height: 400 },
    },
    {
      title: "TaskFlow Manager",
      description: "A Kanban-style task management app to organize workflows and boost productivity.",
      techStack: ["HTML", "CSS", "JS", "Node.js", "React"],
      image: { id: "project5", width: 600, height: 400 },
    },
  ],
};

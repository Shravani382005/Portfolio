import { portfolioData } from "@/lib/data";
import { Button } from "./ui/button";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Button variant="ghost" size="icon" asChild>
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={portfolioData.email} aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

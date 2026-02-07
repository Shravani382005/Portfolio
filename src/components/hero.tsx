import Link from "next/link";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/data";
import AIIntroGenerator from "./ai-intro-generator";

export default function Hero() {
  return (
    <section id="hero" className="container mx-auto px-4 py-24 sm:py-32 text-center animation-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold tracking-tight text-foreground">
          Hi, I'm {portfolioData.name}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-muted-foreground font-medium">{portfolioData.title}</p>
        <div className="mt-8 flex items-center justify-center gap-2">
          <p className="text-lg text-muted-foreground max-w-2xl">
            {portfolioData.intro.blurb}
          </p>
          <AIIntroGenerator />
        </div>
        <div className="mt-10 flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

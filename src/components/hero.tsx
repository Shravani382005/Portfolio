import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import AIIntroGenerator from "./ai-intro-generator";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === portfolioData.heroImageId);

  return (
    <section id="hero" className="container mx-auto px-4 py-16 sm:py-24 animation-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold tracking-tight text-foreground">
            Hi, I'm {portfolioData.name}
          </h1>
          <p className="mt-2 text-xl text-primary font-medium font-headline">{portfolioData.title}</p>
          <div className="flex items-center gap-2 mt-6">
            <p className="text-lg text-muted-foreground max-w-xl">
              {portfolioData.intro.blurb}
            </p>
            <AIIntroGenerator />
          </div>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          {heroImage && (
            <div className="relative w-[300px] h-[400px] lg:w-[350px] lg:h-[466px] rounded-lg shadow-2xl overflow-hidden group">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                priority
                data-ai-hint={heroImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

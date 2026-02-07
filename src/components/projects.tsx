import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.image.id);
            return (
              <Card key={index} className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-2xl">
                {projectImage && (
                  <div className="overflow-hidden">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      width={project.image.width}
                      height={project.image.height}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}

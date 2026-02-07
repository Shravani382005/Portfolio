import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12">
          Work Experience
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-px bg-border"></div>
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative pl-12 pb-12">
              <div className="absolute left-[9px] top-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center ring-8 ring-background">
                <Briefcase className="h-3 w-3 text-primary-foreground" />
              </div>
              <Card className="transform transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-headline text-xl">{exp.title}</CardTitle>
                      <p className="font-semibold">{exp.company} &middot; {exp.location}</p>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

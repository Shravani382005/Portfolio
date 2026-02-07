import { portfolioData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { TechIcons } from "./icons";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {portfolioData.skills.map((skill) => {
            const Icon = typeof skill.icon === 'string' ? TechIcons[skill.icon as keyof typeof TechIcons] : skill.icon;
            return (
              <Card 
                key={skill.name} 
                className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  {Icon && <Icon className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />}
                  <p className="mt-4 text-sm font-medium text-center">{skill.name}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Loader2, Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { generateIntroAction } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";

export default function AIIntroGenerator() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedIntro, setGeneratedIntro] = useState("");
  const { toast } = useToast();

  async function handleGenerate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setGeneratedIntro("");

    const formData = new FormData(event.currentTarget);
    const keySkills = formData.get("keySkills") as string;
    const experienceSummary = formData.get("experienceSummary") as string;

    try {
      const result = await generateIntroAction({ keySkills, experienceSummary });
      if (result.success && result.introBlurb) {
        setGeneratedIntro(result.introBlurb);
      } else {
        throw new Error("Failed to get intro from action");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "Could not generate a new intro. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(generatedIntro);
    toast({
      title: "Copied to Clipboard!",
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="sr-only">Generate new intro</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <form onSubmit={handleGenerate}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-headline">
              <Sparkles className="h-5 w-5 text-primary" />
              Generate a New Intro
            </DialogTitle>
            <DialogDescription>
              Use AI to craft a fresh and engaging intro blurb based on your skills and experience.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="keySkills">Key Skills (comma-separated)</Label>
              <Input
                id="keySkills"
                name="keySkills"
                defaultValue={portfolioData.intro.keySkills.join(", ")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="experienceSummary">Experience Summary</Label>
              <Textarea
                id="experienceSummary"
                name="experienceSummary"
                defaultValue={portfolioData.intro.experienceSummary}
                className="min-h-[120px]"
              />
            </div>
            {generatedIntro && (
              <div className="grid gap-2 relative">
                <Label>Generated Intro</Label>
                <div className="rounded-md border bg-muted p-4 text-sm text-muted-foreground relative">
                  {generatedIntro}
                </div>
                 <Button type="button" variant="ghost" size="icon" className="absolute top-0 right-0" onClick={handleCopy}>
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy</span>
                </Button>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

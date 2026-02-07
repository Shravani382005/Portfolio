'use server';

/**
 * @fileOverview Generates a personalized introductory blurb for the hero section of a website.
 *
 * - generatePersonalizedIntro - A function that generates the introductory blurb.
 * - GeneratePersonalizedIntroInput - The input type for the generatePersonalizedIntro function.
 * - GeneratePersonalizedIntroOutput - The return type for the generatePersonalizedIntro function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedIntroInputSchema = z.object({
  keySkills: z.array(z.string()).describe('A list of key skills.'),
  experienceSummary: z.string().describe('A summary of professional experience.'),
});
export type GeneratePersonalizedIntroInput = z.infer<typeof GeneratePersonalizedIntroInputSchema>;

const GeneratePersonalizedIntroOutputSchema = z.object({
  introBlurb: z.string().describe('A personalized introductory blurb.'),
});
export type GeneratePersonalizedIntroOutput = z.infer<typeof GeneratePersonalizedIntroOutputSchema>;

export async function generatePersonalizedIntro(input: GeneratePersonalizedIntroInput): Promise<GeneratePersonalizedIntroOutput> {
  return generatePersonalizedIntroFlow(input);
}

const generatePersonalizedIntroPrompt = ai.definePrompt({
  name: 'generatePersonalizedIntroPrompt',
  input: {schema: GeneratePersonalizedIntroInputSchema},
  output: {schema: GeneratePersonalizedIntroOutputSchema},
  prompt: `You are a professional website copywriter.

  Based on the provided key skills and experience summary, generate an engaging introductory blurb for the hero section of a personal website.

  Key Skills:
  {{#each keySkills}}
  - {{{this}}}
  {{/each}}

  Experience Summary: {{{experienceSummary}}}

  Intro Blurb:`,
});

const generatePersonalizedIntroFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedIntroFlow',
    inputSchema: GeneratePersonalizedIntroInputSchema,
    outputSchema: GeneratePersonalizedIntroOutputSchema,
  },
  async input => {
    const {output} = await generatePersonalizedIntroPrompt(input);
    return output!;
  }
);

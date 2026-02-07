"use server";

import { z } from "zod";
import { generatePersonalizedIntro } from "@/ai/flows/generate-personalized-intro";

// Contact Form Action
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(data: { name: string; email: string; message: string }) {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    throw new Error(validatedFields.error.errors.map(e => e.message).join(', '));
  }

  // Simulate sending an email or saving to a database
  console.log("New message received:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: "Your message has been sent successfully!" };
}

// AI Intro Generation Action
const introSchema = z.object({
  keySkills: z.string(),
  experienceSummary: z.string(),
});

export async function generateIntroAction(data: { keySkills: string; experienceSummary: string }) {
  const validatedFields = introSchema.safeParse(data);

  if (!validatedFields.success) {
    throw new Error("Invalid input for generating intro.");
  }
  
  const skillsArray = validatedFields.data.keySkills.split(',').map(skill => skill.trim());

  try {
    const result = await generatePersonalizedIntro({
      keySkills: skillsArray,
      experienceSummary: validatedFields.data.experienceSummary,
    });
    return { success: true, introBlurb: result.introBlurb };
  } catch (error) {
    console.error("Error generating intro:", error);
    throw new Error("Failed to generate intro blurb.");
  }
}

'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a personalized career roadmap based on aptitude test results.
 *
 * The flow takes aptitude test results as input and returns a personalized action plan with compatible career options.
 *
 * - generatePersonalizedRoadmap - A function that generates the personalized roadmap.
 * - PersonalizedRoadmapInput - The input type for the generatePersonalizedRoadmap function.
 * - PersonalizedRoadmapOutput - The return type for the generatePersonalizedRoadmap function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRoadmapInputSchema = z.object({
  testResults: z
    .string()
    .describe(
      'The aptitude test results, formatted as a string containing key personality traits and areas of interest.'
    ),
});
export type PersonalizedRoadmapInput = z.infer<typeof PersonalizedRoadmapInputSchema>;

const PersonalizedRoadmapOutputSchema = z.object({
  careerOptions: z
    .array(z.string())
    .describe('A list of compatible career options based on the test results.'),
  actionPlan: z
    .string()
    .describe(
      'A personalized action plan with steps to pursue the recommended career options.'
    ),
});
export type PersonalizedRoadmapOutput = z.infer<typeof PersonalizedRoadmapOutputSchema>;

export async function generatePersonalizedRoadmap(
  input: PersonalizedRoadmapInput
): Promise<PersonalizedRoadmapOutput> {
  return personalizedRoadmapFlow(input);
}

const personalizedRoadmapPrompt = ai.definePrompt({
  name: 'personalizedRoadmapPrompt',
  input: {schema: PersonalizedRoadmapInputSchema},
  output: {schema: PersonalizedRoadmapOutputSchema},
  prompt: `Based on the following aptitude test results: {{{testResults}}}, please provide:

1.  A list of 2-3 compatible career options in engineering and technology.
2.  A detailed action plan outlining steps to pursue these career options, including relevant skills to acquire, educational paths, and potential job roles.

Ensure the action plan is practical, actionable, and tailored to the individual's strengths and interests as indicated in the test results.

Format the output as a JSON object with "careerOptions" and "actionPlan" fields. The careerOptions field should be an array of strings. The actionPlan field should be a string containing the detailed action plan.`,
});

const personalizedRoadmapFlow = ai.defineFlow(
  {
    name: 'personalizedRoadmapFlow',
    inputSchema: PersonalizedRoadmapInputSchema,
    outputSchema: PersonalizedRoadmapOutputSchema,
  },
  async input => {
    const {output} = await personalizedRoadmapPrompt(input);
    return output!;
  }
);

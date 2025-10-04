'use server';
/**
 * @fileOverview An AI-powered aptitude analysis flow.
 *
 * - aptitudeAIAnalysis - A function that processes user's answers and provides a compatibility analysis.
 * - AptitudeAIAnalysisInput - The input type for the aptitudeAIAnalysis function.
 * - AptitudeAIAnalysisOutput - The return type for the aptitudeAIAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AptitudeAIAnalysisInputSchema = z.object({
  answers: z
    .array(z.string())
    .describe('An array of answers provided by the user to the compatibility test questions.'),
});
export type AptitudeAIAnalysisInput = z.infer<typeof AptitudeAIAnalysisInputSchema>;

const AptitudeAIAnalysisOutputSchema = z.object({
  analysis: z
    .string()
    .describe(
      'An analysis of the users aptitude and personality traits based on their answers.'
    ),
  suggestedDomains: z
    .array(z.string())
    .describe(
      'An array of 2-3 engineering domains that are most compatible with the user, along with a short action plan.'
    ),
});
export type AptitudeAIAnalysisOutput = z.infer<typeof AptitudeAIAnalysisOutputSchema>;

export async function aptitudeAIAnalysis(
  input: AptitudeAIAnalysisInput
): Promise<AptitudeAIAnalysisOutput> {
  return aptitudeAIAnalysisFlow(input);
}

const aptitudePrompt = ai.definePrompt({
  name: 'aptitudeAIPrompt',
  input: {schema: AptitudeAIAnalysisInputSchema},
  output: {schema: AptitudeAIAnalysisOutputSchema},
  prompt: `You are an AI career coach specializing in helping students find the best engineering domains to study.

  Analyze the following answers from the aptitude test and provide the best suited engineering domains.
  Answers: {{{answers}}}

  Based on the provided answers, suggest 2-3 most compatible engineering domains and provide an action plan to pursue these domains. Return the response in JSON format.
  `,
});

const aptitudeAIAnalysisFlow = ai.defineFlow(
  {
    name: 'aptitudeAIAnalysisFlow',
    inputSchema: AptitudeAIAnalysisInputSchema,
    outputSchema: AptitudeAIAnalysisOutputSchema,
  },
  async input => {
    const {output} = await aptitudePrompt(input);
    return output!;
  }
);

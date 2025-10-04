'use server';

import { z } from 'zod';
import { aptitudeQuestions, domainMatrix } from '@/lib/content';

export type CompatibilityResult = {
  domain: string;
  score: number;
};

export type AnalysisResult = {
  results: CompatibilityResult[];
};

export type FormState = {
  data: AnalysisResult | null;
  error: string | null;
};

// Helper function to calculate dot product
function dotProduct(arr1: number[], arr2: number[]): number {
  return arr1.reduce((sum, val, index) => sum + val * arr2[index], 0);
}

export async function getAptitudeAnalysis(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const optionToScore: Record<string, number> = {
      "Not at all": 1,
      "Slightly": 2,
      "Moderately": 3,
      "Highly": 4,
      "Very Highly": 5
    };
    
    // Create a schema that expects the option text, not the score
    const schema = z.object({
      answers: z.array(z.string()).length(aptitudeQuestions.length, { message: 'All questions must be answered.' }),
    });

    const answerTexts = aptitudeQuestions.map((_, index) => formData.get(`question-${index}`) as string);
    
    const validation = schema.safeParse({ answers: answerTexts });

    if (!validation.success) {
      return { data: null, error: validation.error.errors[0].message };
    }

    // Convert text answers to scores
    const userScores = validation.data.answers.map(answer => {
      const score = optionToScore[answer];
      if (score === undefined) {
        throw new Error(`Invalid answer option provided: ${answer}`);
      }
      return score;
    });

    const scores: Record<string, number> = {};
    for (const domain in domainMatrix) {
      const weights = domainMatrix[domain];
      const weightedScore = dotProduct(userScores, weights);
      scores[domain] = weightedScore;
    }
    
    const compatibilityResults = Object.entries(scores)
        .map(([domain, score]) => ({ domain, score }))
        .sort((a, b) => b.score - a.score);

    return {
      data: {
        results: compatibilityResults,
      },
      error: null,
    };

  } catch (error) {
    console.error('Error in getAptitudeAnalysis:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred. Please try again.';
    return { data: null, error: errorMessage };
  }
}

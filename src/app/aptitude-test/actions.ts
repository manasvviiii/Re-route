'use server';

import { aptitudeAIAnalysis } from '@/ai/flows/aptitude-ai-analysis';
import { generatePersonalizedRoadmap } from '@/ai/flows/personalized-career-roadmap';
import { z } from 'zod';
import { aptitudeQuestions } from '@/lib/content';

export type AnalysisResult = {
  aptitudeAnalysis: Awaited<ReturnType<typeof aptitudeAIAnalysis>>;
  personalizedRoadmap: Awaited<ReturnType<typeof generatePersonalizedRoadmap>>;
}

export type FormState = {
  data: AnalysisResult | null;
  error: string | null;
};

export async function getAptitudeAnalysis(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const schema = z.object({
      answers: z.array(z.string()).length(aptitudeQuestions.length, { message: 'All questions must be answered.' }),
    });

    const answers = aptitudeQuestions.map((_, index) => formData.get(`question-${index}`) as string);

    const validation = schema.safeParse({ answers });
    if (!validation.success) {
      return { data: null, error: validation.error.errors[0].message };
    }

    const aptitudeResult = await aptitudeAIAnalysis({ answers: validation.data.answers });

    if (!aptitudeResult || !aptitudeResult.analysis) {
        throw new Error("Failed to get a valid response from the aptitude analysis AI.");
    }
    
    const roadmapResult = await generatePersonalizedRoadmap({ testResults: aptitudeResult.analysis });

    if (!roadmapResult || !roadmapResult.actionPlan) {
        throw new Error("Failed to get a valid response from the roadmap generation AI.");
    }

    return {
      data: {
        aptitudeAnalysis: aptitudeResult,
        personalizedRoadmap: roadmapResult,
      },
      error: null,
    };
  } catch (error) {
    console.error('Error in getAptitudeAnalysis:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred. Please try again.';
    return { data: null, error: errorMessage };
  }
}

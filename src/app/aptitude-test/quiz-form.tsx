'use client';

import React, { useState } from 'react';
import { aptitudeQuestions } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type QuizFormProps = {
  formAction: (formData: FormData) => void;
  formRef: React.RefObject<HTMLFormElement>;
};

export function QuizForm({ formAction, formRef }: QuizFormProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(aptitudeQuestions.length).fill(''));
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      setError('Please select an option before proceeding.');
      return;
    }
    setError(null);
    if (currentQuestion < aptitudeQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
    setError(null);
  };
  
  const progressValue = ((currentQuestion + 1) / aptitudeQuestions.length) * 100;

  return (
    <form action={formAction} ref={formRef}>
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-2xl">Question {currentQuestion + 1} of {aptitudeQuestions.length}</CardTitle>
        <div className="pt-4">
          <Progress value={progressValue} className="w-full" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-center text-lg font-medium mb-8 min-h-[56px]">
          {aptitudeQuestions[currentQuestion].question}
        </p>

        <RadioGroup
          name={`question-${currentQuestion}`}
          onValueChange={handleAnswerChange}
          value={answers[currentQuestion]}
          className="space-y-4"
        >
          {aptitudeQuestions[currentQuestion].options.map((option, index) => (
            <Label
              key={index}
              htmlFor={`option-${index}`}
              className={`flex items-center p-4 rounded-md border transition-all cursor-pointer hover:border-primary ${
                answers[currentQuestion] === option ? 'border-primary bg-primary/5' : ''
              }`}
            >
              <RadioGroupItem value={option} id={`option-${index}`} className="mr-4" />
              <span className="flex-1">{option}</span>
            </Label>
          ))}
        </RadioGroup>
        
        {/* Hidden inputs to carry over all answers on final submission */}
        {answers.map((answer, index) => (
            <input key={index} type="hidden" name={`question-${index}`} value={answer} />
        ))}
        
        {error && <p className="text-destructive text-sm mt-4 text-center">{error}</p>}

        <div className="flex justify-between mt-8">
          <Button type="button" variant="outline" onClick={handleBack} disabled={currentQuestion === 0}>
            Back
          </Button>
          {currentQuestion < aptitudeQuestions.length - 1 ? (
            <Button type="button" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={!answers[currentQuestion]}
              className="bg-gradient-to-r from-[#FFB347] to-[#FFDA63] text-accent-foreground font-semibold"
            >
              Get My Analysis
            </Button>
          )}
        </div>
      </CardContent>
    </form>
  );
}

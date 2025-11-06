'use client';

import React, { useState } from 'react';
import { aptitudeQuestions } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
  const currentQData = aptitudeQuestions[currentQuestion];
  const questionTextHtml = currentQData.q.replace(/\*(.*?)\*/g, '<strong class="text-primary">$1</strong>');


  return (
    <form action={formAction} ref={formRef}>
      <CardHeader className="text-center">
         <div className="flex justify-center">
          <Badge variant="outline">{currentQData.type}</Badge>
        </div>
        <CardTitle className="font-headline text-2xl pt-2">Question {currentQuestion + 1} of {aptitudeQuestions.length}</CardTitle>
        <div className="pt-4">
          <Progress value={progressValue} className="w-full" />
        </div>
      </CardHeader>
      <CardContent>
        <p 
            className="text-center text-lg font-medium mb-8 min-h-[56px]"
            dangerouslySetInnerHTML={{ __html: questionTextHtml }}
        />

        <RadioGroup
          name={`question-${currentQuestion}`}
          onValueChange={handleAnswerChange}
          value={answers[currentQuestion]}
          className="space-y-2"
        >
            <div className="flex justify-between items-center w-full max-w-lg mx-auto mb-4">
            {currentQData.options.map((option, index) => (
              <div key={index} className="flex flex-col items-center">
                <RadioGroupItem value={option} id={`option-${index}`} className="h-6 w-6" />
                <Label
                  htmlFor={`option-${index}`}
                  className="mt-2 text-xs text-muted-foreground cursor-pointer"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground max-w-lg mx-auto">
             <span>Not at all</span>
             <span>Absolute Passion</span>
          </div>
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

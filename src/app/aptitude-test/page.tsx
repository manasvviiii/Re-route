'use client';

import { useFormState } from 'react-dom';
import { getAptitudeAnalysis } from './actions';
import { QuizForm } from './quiz-form';
import { ResultsDisplay } from './results-display';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { Card } from '@/components/ui/card';

const initialState = {
  data: null,
  error: null,
};

export default function AptitudeTestPage() {
  const [state, formAction] = useFormState(getAptitudeAnalysis, initialState);
  const [quizStarted, setQuizStarted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleFormSubmit = (formData: FormData) => {
    setIsSubmitting(true);
    formAction(formData);
  };
  
  React.useEffect(() => {
    if (state.data || state.error) {
      setIsSubmitting(false);
    }
  }, [state]);

  const renderContent = () => {
    if (isSubmitting) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 text-center min-h-[400px]">
          <Loader2 className="h-16 w-16 animate-spin text-primary" />
          <h2 className="text-2xl font-bold font-headline">Analyzing your responses...</h2>
          <p className="text-muted-foreground">Our system is crafting your personalized report. This may take a moment.</p>
        </div>
      );
    }

    if (state.error) {
      return (
        <div className="text-center min-h-[400px] flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-destructive-foreground font-headline">An Error Occurred</h2>
            <p className="text-muted-foreground">{state.error}</p>
            <Button onClick={() => window.location.reload()} className="mt-4">Try Again</Button>
        </div>
      )
    }

    if (state.data) {
      return <ResultsDisplay result={state.data} />;
    }

    if (quizStarted) {
      return <QuizForm formAction={handleFormSubmit} formRef={formRef} />;
    }

    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline mb-4">Discover Your Engineering Persona</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          This short 10-question test will help you understand your strengths and match them with high-growth engineering domains. Answer honestly to get the most accurate results.
        </p>
        <Button size="lg" onClick={() => setQuizStarted(true)}>
          Start the Test
        </Button>
      </div>
    );
  };

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 text-center bg-card border-b">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4 font-headline">
            Aptitude & Compatibility Test
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Let's translate your unique abilities into a clear career direction in tech.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 md:p-10">
              {renderContent()}
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnalysisResult } from './actions';
import { Lightbulb, Check, FileText } from 'lucide-react';
import Link from 'next/link';

type ResultsDisplayProps = {
  result: AnalysisResult;
};

const MoodMeter = () => (
    <svg viewBox="0 0 100 50" className="w-48 mx-auto">
      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
      <path
        d="M 10 50 A 40 40 0 0 1 90 50"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#FFDA63" />
        </linearGradient>
      </defs>
      <path d="M 50 50 L 50 10" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" transform-origin="50 50" className="rotate-[75deg]"/>
       <circle cx="50" cy="50" r="3" fill="hsl(var(--foreground))" />
    </svg>
)

export function ResultsDisplay({ result }: ResultsDisplayProps) {
  const { aptitudeAnalysis, personalizedRoadmap } = result;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <MoodMeter />
        <h2 className="text-3xl font-bold font-headline mt-4">Your Personalized Report is Ready!</h2>
        <p className="text-muted-foreground mt-2">Based on your answers, here's a breakdown of your strengths and a roadmap for your future.</p>
      </div>

      <Card className="bg-background">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Lightbulb className="h-6 w-6 text-primary" />
            AI Personality & Aptitude Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{aptitudeAnalysis.analysis}</p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center font-headline">Recommended Engineering Domains</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {aptitudeAnalysis.suggestedDomains.map((domain, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg font-bold">{domain.split(':')[0]}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{domain.substring(domain.indexOf(':') + 1).trim()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
       <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center font-headline">Suggested Career Paths</h3>
        <div className="flex flex-wrap justify-center gap-2">
            {personalizedRoadmap.careerOptions.map((option, index) => (
                 <Badge key={index} className="text-base px-4 py-2 bg-primary/10 text-primary">
                    {option}
                </Badge>
            ))}
        </div>
      </div>

      <Card className="bg-background">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <FileText className="h-6 w-6 text-primary" />
            Your Personalized Action Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {personalizedRoadmap.actionPlan.split('\n').map((paragraph, index) => (
            paragraph.trim() && <p key={index} className="text-foreground/90">{paragraph}</p>
          ))}
        </CardContent>
      </Card>
      
       <div className="text-center pt-8">
            <h3 className="text-xl font-bold font-headline">Ready for the Next Step?</h3>
            <p className="text-muted-foreground mt-2 mb-4">Explore our resources to start building skills for your new path.</p>
            <Button asChild size="lg">
                <Link href="/resources">
                    Browse Learning Resources
                </Link>
            </Button>
       </div>
    </div>
  );
}

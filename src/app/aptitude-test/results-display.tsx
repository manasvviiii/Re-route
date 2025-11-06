'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnalysisResult } from './actions';
import { BarChart, FileText, Check } from 'lucide-react';
import Link from 'next/link';
import { domainDescriptions } from '@/lib/content';

type ResultsDisplayProps = {
  result: AnalysisResult;
};

const rankIcons = ["🥇", "🥈", "🥉"];

export function ResultsDisplay({ result }: ResultsDisplayProps) {
  const { results } = result;
  const topThree = results.slice(0, 3);
  const maxScore = results.length > 0 ? results[0].score : 1;
  
  const renderDescription = (description: string) => {
    const html = description.replace(/\*(.*?)\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
    return <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline mt-4">Your Deep-Dive Career Compatibility Results</h2>
        <p className="text-muted-foreground mt-2">Based on your problem-solving mindset, here is your detailed breakdown.</p>
      </div>

      <Card className="bg-background">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <BarChart className="h-6 w-6 text-primary" />
            Compatibility Score Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {results.map(({ domain, score }) => (
            <div key={domain}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-foreground">{domain}</span>
                <span className="text-sm font-bold text-primary">{score}</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-[#FFB347] to-[#FFDA63] h-2.5 rounded-full" 
                  style={{ width: `${(score / maxScore) * 100}%` }}>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center font-headline">Your Top 3 Most Precise Matches</h3>
        <div className="grid gap-6 md:grid-cols-1">
          {topThree.map(({ domain, score }, index) => (
            <Card key={index} className="flex flex-col border-2 border-transparent" data-rank={index+1}>
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <span className="text-3xl">{rankIcons[index]}</span>
                  <span>{domain}</span>
                   <span className="text-lg font-normal text-muted-foreground">(Score: {score})</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                {renderDescription(domainDescriptions[domain] || 'Explore this exciting field to learn more!')}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
       <div className="text-center pt-8">
            <h3 className="text-xl font-bold font-headline">Your responses suggest a strong, specialized path.</h3>
            <p className="text-muted-foreground mt-2 mb-4">Research the core skills listed for your top match to plan your next steps!</p>
            <Button asChild size="lg">
                <Link href="/domains">
                    Explore All Domains
                </Link>
            </Button>
       </div>
    </div>
  );
}

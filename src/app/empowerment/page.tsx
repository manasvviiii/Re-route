import { empowermentArticles } from '@/lib/content';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

export default function EmpowermentHub() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 text-center bg-card border-b">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4 font-headline">
            Empowerment Hub
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Stories of resilience, expert advice, and motivational insights to fuel your next chapter.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {empowermentArticles.map((article) => (
              <Card key={article.title} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                 {article.image && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={article.image.imageUrl}
                      alt={article.image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={article.image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex flex-col gap-2">
                     <Badge variant="secondary" className="w-fit">{article.category}</Badge>
                     <h2 className="text-xl font-bold font-headline leading-tight">{article.title}</h2>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="text-xs text-muted-foreground flex justify-between items-center border-t pt-4 mt-auto">
                     <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                     </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                     </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

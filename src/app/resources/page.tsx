import { resources } from '@/lib/content';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 text-center bg-card border-b">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4 font-headline">
            Curated Learning Resources
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A handpicked collection of the best free and paid resources to help you upskill and prepare for a career in tech.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resources.map((resource) => (
              <Card key={resource.title} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                 <Link href={resource.link} target="_blank" rel="noopener noreferrer" className="block">
                     {resource.image && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={resource.image.imageUrl}
                          alt={resource.image.description}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={resource.image.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex flex-col gap-2">
                         <Badge variant="secondary" className="w-fit">{resource.category}</Badge>
                         <h2 className="text-lg font-bold font-headline leading-tight">{resource.title}</h2>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {resource.description}
                      </p>
                       <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                        Visit Resource
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                 </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

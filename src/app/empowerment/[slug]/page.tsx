
import { empowermentArticles } from '@/lib/content';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return empowermentArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: Props) {
  const article = empowermentArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-background">
      <section className="relative w-full pt-24 pb-12 md:pt-32 md:pb-20 text-center bg-card">
        {article.image && (
            <div className="absolute inset-0">
                <Image
                    src={article.image.imageUrl}
                    alt={article.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={article.image.imageHint}
                    priority
                />
                <div className="absolute inset-0 bg-background/80 backdrop-blur-md"></div>
            </div>
        )}
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4 font-headline">
              {article.title}
            </h1>
            <div className="flex justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mt-4">
                <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: article.fullContent }}
            />
            <div className="mt-12 text-center">
                <Link href="/empowerment" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                    <ArrowLeft className="h-4 w-4"/>
                    Back to Empowerment Hub
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

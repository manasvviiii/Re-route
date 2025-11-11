import { empowermentArticles } from '@/lib/content';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return empowermentArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function EmpowermentArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = empowermentArticles.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <article className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          {article.image && (
            <div className="relative h-80 w-full mb-6">
              <Image
                src={article.image.imageUrl}
                alt={article.image.description}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">{article.title}</h1>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {article.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {article.date}
            </div>
          </div>
        </div>
        <div
          className="prose prose-neutral dark:prose-invert"
         dangerouslySetInnerHTML={{ __html: article.fullContent }}

        />
      </div>
    </article>
  );
}

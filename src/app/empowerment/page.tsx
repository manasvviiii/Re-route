import { empowermentArticles } from '@/lib/content';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

export default function EmpowermentHub() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header Section */}
      <section className="py-16 md:py-24 text-center bg-card border-b shadow-sm">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4 font-headline">
            Empowerment Hub 💫
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Stories of resilience, expert advice, and motivational insights to fuel your next chapter.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {empowermentArticles.map((article) => (
              <Link key={article.slug} href={`/empowerment/${article.slug}`} className="group block">
                <Card className="flex flex-col overflow-hidden border bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full rounded-2xl">
                  
                  {/* 🖼️ Image Section */}
                  {article.image && (
                    <div className="relative h-72 w-full overflow-hidden rounded-t-2xl">
                      <Image
                        src={article.image.imageUrl}
                        alt={article.image.description}
                        fill
                        className="object-cover object-center brightness-95 transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  )}

                  {/* 📰 Article Info */}
                  <CardHeader>
                    <div className="flex flex-col gap-2">
                      <Badge variant="secondary" className="w-fit px-3 py-1 text-xs">
                        {article.category}
                      </Badge>
                      <h2 className="text-xl font-bold font-headline leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                        {article.title}
                      </h2>
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

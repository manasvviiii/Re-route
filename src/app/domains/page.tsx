import Link from 'next/link';
import { engineeringDomains } from '@/lib/content';
import { Card, CardContent } from '@/components/ui/card';
import { DomainIcon } from '@/components/icons/domain-icons';
import { ArrowRight } from 'lucide-react';

export default function DomainsPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 text-center bg-card border-b">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4 font-headline">
            Engineering Domain Navigator
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore diverse fields in engineering and technology. Find detailed guides, skill requirements, and career outlooks to discover the path that's right for you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringDomains.map((domain) => (
              <Link key={domain.slug} href={`/domains/${domain.slug}`} className="group block">
                <Card className="h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-primary">
                  <CardContent className="p-6 flex flex-col items-start h-full">
                    <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <DomainIcon name={domain.icon} className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-headline">{domain.name}</h3>
                    <p className="text-muted-foreground text-sm flex-grow mb-4">
                      {domain.description.substring(0, 100)}...
                    </p>
                    <div className="mt-auto flex items-center text-sm font-semibold text-primary">
                      Explore Domain
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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

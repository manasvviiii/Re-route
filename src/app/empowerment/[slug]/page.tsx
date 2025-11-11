import { engineeringDomains } from '@/lib/content';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Briefcase, IndianRupee, BarChart } from 'lucide-react';
import { DomainIcon } from '@/components/icons/domain-icons';

// ✅ Next.js 15 requires async params
type Props = {
  params: Promise<{ slug: string }>;
};

// ✅ Pre-generates static paths for all domains
export function generateStaticParams() {
  return engineeringDomains.map((domain) => ({
    slug: domain.slug,
  }));
}

// ✅ Async function to properly await the new params API
export default async function DomainDetailPage({ params }: Props) {
  const { slug } = await params; // ⬅️ Required in Next.js 15+
  const domain = engineeringDomains.find((d) => d.slug === slug);

  if (!domain) {
    notFound();
  }

  const { heroImage } = domain;

  return (
    <div className="bg-background">
      {/* --- Hero Section --- */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 text-center bg-card overflow-hidden">
        <div className="absolute inset-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
              <DomainIcon name={domain.icon} className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4 font-headline">
              {domain.name}
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              {domain.description}
            </p>
          </div>
        </div>
      </section>

      {/* --- Summary Cards --- */}
      <div className="container -mt-12 relative z-20 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Job Outlook */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Job Outlook</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{domain.jobOutlook.title}</div>
              <p className="text-xs text-muted-foreground">{domain.jobOutlook.details}</p>
            </CardContent>
          </Card>

          {/* Salary */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Salary Range (Entry-Mid)</CardTitle>
              <IndianRupee className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{domain.salary}</div>
              <p className="text-xs text-muted-foreground">Based on industry reports</p>
            </CardContent>
          </Card>

          {/* Top Programs */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Programs</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1">
              {domain.programs.map((p) => (
                <Badge key={p} variant="secondary">{p}</Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* --- Skills Section --- */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                Required Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                These are the key technical skills you'll need to succeed in {domain.name}. Many of these can be learned through B.Tech programs and online courses.
              </p>
              <div className="flex flex-wrap gap-3">
                {domain.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="text-base px-4 py-2 bg-gradient-to-r from-[#FFB347] to-[#FFDA63] text-accent-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

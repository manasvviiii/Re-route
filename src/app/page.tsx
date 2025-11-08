import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BrainCircuit, Lightbulb, Compass } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    title: 'Empowerment Hub',
    description: 'Shift your focus from past challenges to future potential with inspiring stories and expert advice.',
    link: '/empowerment',
    icon: Lightbulb,
    image: PlaceHolderImages.find((img) => img.id === 'empowerment-card'),
  },
  {
    title: 'Engineering Domain Navigator',
    description: 'Explore comprehensive guides on engineering fields, from AI to Mechanical, and find your fit.',
    link: '/domains',
    icon: Compass,
    image: PlaceHolderImages.find((img) => img.id === 'domains-card'),
  },
  {
    title: 'Aptitude AI Tool',
    description: 'Take our compatibility test to align your unique strengths with the right engineering path.',
    link: '/aptitude-test',
    icon: BrainCircuit,
    image: PlaceHolderImages.find((img) => img.id === 'aptitude-card'),
  },
];

const wisdomNuggets = [
  "Your past preparation has built a foundation of discipline. Now, let's build a new future on it.",
  'The best engineers are not just smart; they are resilient. You have already proven your resilience.',
  "Failure is not the opposite of success; it's a part of it. Your journey is just beginning.",
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <div className="flex flex-col min-h-screen">
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
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Your New Path Awaits
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-4 font-headline">
              NEET Closed One Door.
              <br />
              <span className="text-foreground">
                Engineering Opens a Thousand.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              Re-route is your dedicated guide to transforming your hard-earned
              knowledge and resilience into a thriving career in technology and
              engineering.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/aptitude-test">
                start
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {feature.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={feature.image.imageUrl}
                      alt={feature.image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={feature.image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold font-headline">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground flex-grow mb-6">
                    {feature.description}
                  </p>
                  <Button variant="link" asChild className="p-0 justify-start self-start h-auto">
                    <Link href={feature.link} className="font-semibold text-primary group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Words of Wisdom
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A little encouragement for your journey.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {wisdomNuggets.map((nugget, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-background border border-border"
              >
                <p className="text-lg font-medium text-foreground">"{nugget}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

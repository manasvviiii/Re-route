import { forumTopics } from '@/lib/content';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageSquare, User, Clock, PlusCircle } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 text-center bg-card border-b">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4 font-headline">
            Community Forum
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            You are not alone. Connect with peers, share experiences, ask questions, and support each other on your new journey.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold font-headline">Latest Discussions</h2>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Start a New Topic
                </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <ul className="divide-y">
                  {forumTopics.map((topic) => (
                    <li key={topic.id} className="p-4 md:p-6 hover:bg-secondary/50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold mb-2 hover:text-primary cursor-pointer">{topic.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                            <Badge variant="outline">{topic.category}</Badge>
                            <div className="flex items-center gap-1.5">
                              <User className="h-4 w-4" />
                              <span>{topic.author}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4" />
                              <span>{topic.lastReply}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-4 text-sm text-muted-foreground shrink-0 md:w-32">
                           <div className="flex items-center gap-1.5">
                              <MessageSquare className="h-4 w-4" />
                              <span>{topic.replies} replies</span>
                            </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

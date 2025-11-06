'use client';

import React from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, serverTimestamp, addDoc } from 'firebase/firestore';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { MessageSquare, User, Clock, PlusCircle, Loader2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import Link from 'next/link';

const postSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long.'),
  content: z.string().min(20, 'Content must be at least 20 characters long.'),
  category: z.string().min(1, 'Please select a category.'),
});

type PostFormData = z.infer<typeof postSchema>;

type Post = {
  id: string;
  title: string;
  content: string;
  category: string;
  userId: string;
  authorUsername: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  replies: number;
};

const categories = ['Emotional Support', 'Domain Choice', 'Learning Resources', 'Success Stories', 'Admissions'];

function NewPostForm({ setOpen }: { setOpen: (open: boolean) => void }) {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const form = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      content: '',
      category: '',
    },
  });

  const onSubmit: SubmitHandler<PostFormData> = async (data) => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'Authentication Error',
        description: 'You must be signed in to create a post.',
      });
      return;
    }

    try {
      const postsCollection = collection(firestore, 'posts');
      await addDocumentNonBlocking(postsCollection, {
        ...data,
        userId: user.uid,
        authorUsername: user.isAnonymous ? 'Anonymous' : user.displayName || 'User',
        createdAt: serverTimestamp(),
        replies: 0,
      });

      toast({
        title: 'Post Created!',
        description: 'Your new discussion topic is now live.',
      });
      setOpen(false);
      form.reset();
    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Could not create your post. Please try again.',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic Title</FormLabel>
              <FormControl>
                <Input placeholder="What's the main idea?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Badge
                    key={cat}
                    variant={field.value === cat ? 'default' : 'secondary'}
                    onClick={() => field.onChange(cat)}
                    className="cursor-pointer"
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your thoughts and questions here..."
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Post
        </Button>
      </form>
    </Form>
  );
}


export default function CommunityPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const [open, setOpen] = React.useState(false);

  const postsQuery = useMemoFirebase(
    () => (firestore ? query(collection(firestore, 'posts'), orderBy('createdAt', 'desc')) : null),
    [firestore]
  );
  
  const { data: posts, isLoading, error } = useCollection<Post>(postsQuery);

  const renderContent = () => {
    if (isLoading || isUserLoading) {
        return (
            <div className="flex justify-center items-center h-40">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    if (error) {
        return <p className="text-center text-destructive">Error loading posts. Please try again later.</p>
    }

    if (!posts || posts.length === 0) {
        return <p className="text-center text-muted-foreground py-8">No discussions yet. Start a new one!</p>
    }

    return (
        <ul className="divide-y">
            {posts.map((topic) => (
            <li key={topic.id} className="p-4 md:p-6 hover:bg-secondary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2 hover:text-primary cursor-pointer">{topic.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <Badge variant="outline">{topic.category}</Badge>
                    <div className="flex items-center gap-1.5">
                        <User className="h-4 w-4" />
                        <span>{topic.authorUsername}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>
                            {topic.createdAt ? 
                            formatDistanceToNow(new Date(topic.createdAt.seconds * 1000)) + ' ago' : 
                            'just now'}
                        </span>
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
    );
  }

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
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                         <Button disabled={isUserLoading || !user}>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Start a New Topic
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create a New Discussion</DialogTitle>
                        </DialogHeader>
                        <NewPostForm setOpen={setOpen} />
                    </DialogContent>
                </Dialog>
            </div>
            <Card>
              <CardContent className="p-0">
                {renderContent()}
              </CardContent>
            </Card>
            {!user && !isUserLoading && (
                <div className="text-center mt-6 bg-secondary/50 p-4 rounded-lg">
                    <p className="text-muted-foreground">You are browsing as a guest. <Link href="/login" className="text-primary font-semibold hover:underline">Sign in or register</Link> to create posts and join the conversation.</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

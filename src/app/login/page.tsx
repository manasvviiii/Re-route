'use client';
import { useAuth, initiateEmailSignIn, initiateEmailSignUp } from '@/firebase';
import { useState, useEffect } from 'react';
import { useUser } from '@/firebase/provider';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { FirebaseError } from 'firebase/app';

export default function LoginPage() {
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const { toast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthInProgress, setIsAuthInProgress] = useState(false);

  useEffect(() => {
    if (user) {
      router.push('/community');
    }
  }, [user, router]);

  const handleAuthError = (error: any) => {
    let title = 'Authentication Failed';
    let description = 'An unexpected error occurred. Please try again.';

    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/invalid-credential':
          title = 'Login Failed';
          description = 'The email or password you entered is incorrect. Please check your credentials and try again.';
          break;
        case 'auth/email-already-in-use':
          title = 'Sign Up Failed';
          description = 'An account with this email address already exists. Please try logging in instead.';
          break;
        case 'auth/weak-password':
          title = 'Sign Up Failed';
          description = 'The password is too weak. Please use at least 6 characters.';
          break;
        case 'auth/invalid-email':
          title = 'Invalid Email';
          description = 'The email address you entered is not valid. Please check and try again.';
          break;
        default:
          description = error.message;
          break;
      }
    }

    toast({
      variant: 'destructive',
      title: title,
      description: description,
    });
    setIsAuthInProgress(false);
  };

  const handleAction = async (action: 'signIn' | 'signUp') => {
    setIsAuthInProgress(true);
    try {
      if (action === 'signIn') {
        await initiateEmailSignIn(auth, email, password);
      } else {
        await initiateEmailSignUp(auth, email, password);
      }
      // The onAuthStateChanged listener in FirebaseProvider will handle the redirect
    } catch (error: any) {
      handleAuthError(error);
    }
  };
  
  // This effect handles the non-blocking nature of the new auth calls
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      () => {}, 
      (error) => {
        handleAuthError(error);
      }
    );
    return () => unsubscribe();
  }, [auth]);

  if (isUserLoading || user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
        <Tabs defaultValue="login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome Back</CardTitle>
                        <CardDescription>
                            Sign in to continue to the community forum.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <Button onClick={() => handleAction('signIn')} disabled={isAuthInProgress} className="w-full">
                            {isAuthInProgress && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Login
                        </Button>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="signup">
                 <Card>
                    <CardHeader>
                        <CardTitle>Create an Account</CardTitle>
                        <CardDescription>
                           Join the conversation and start your new journey.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="signup-email">Email</Label>
                            <Input id="signup-email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="signup-password">Password</Label>
                            <Input id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                         <Button onClick={() => handleAction('signUp')} disabled={isAuthInProgress} className="w-full">
                            {isAuthInProgress && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Sign Up
                        </Button>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  );
}

import Link from 'next/link';
import { navLinks } from '@/lib/content';
import Logo from '@/components/icons/logo';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
             <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <Logo className="h-8 w-8 text-primary" />
                 <span className="font-headline">PivotPath</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Guiding you from NEET challenges to new opportunities in engineering and technology.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 font-headline">Explore</h4>
              <ul className="space-y-2">
                {navLinks.slice(0, 4).map((link) => (
                   <li key={link.href}>
                     <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                       {link.label}
                     </Link>
                   </li>
                ))}
              </ul>
            </div>
             <div>
              <h4 className="font-semibold mb-4 font-headline">Resources</h4>
              <ul className="space-y-2">
                 {navLinks.slice(4).map((link) => (
                   <li key={link.href}>
                     <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                       {link.label}
                     </Link>
                   </li>
                 ))}
                  <li>
                    <Link href="/aptitude-test" className="text-muted-foreground hover:text-primary transition-colors">
                      Aptitude Test
                    </Link>
                  </li>
              </ul>
            </div>
             <div>
              <h4 className="font-semibold mb-4 font-headline">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PivotPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

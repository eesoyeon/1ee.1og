'use client';

import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Blog', href: '/blog' },
  { name: 'Portfolio', href: '/portfolio' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 left-0 right-0 z-50 backdrop-blur-lg">
      <div className="mx-auto h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-extralight">
          1ee.1og
        </Link>
        <nav className="flex gap-6 text-sm">
          {navItems.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? 'text-rose-400 font-semibold'
                  : 'text-muted-foreground'
              }
            >
              {name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

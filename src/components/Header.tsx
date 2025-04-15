'use client';

import ThemeToggle from '@/components/theme/ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Posts', href: '/posts' },
  { name: 'AboutMe', href: '/portfolio' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`w-full px-4 bg-black/10 backdrop-blur-3xl dark:bg-[#121212]/70 dark:text-white/87  ${
        pathname === '/posts' && `fixed top-0 left-0 right-0 z-50 bg-white/80`
      }`}
    >
      <div className="flex items-center justify-between h-16 md:h-14 max-w-4xl m-auto relative">
        <Link
          href="/posts"
          className="text-xl font-extralight flex-center gap-1 md:text-lg"
        >
          {/* <Image src="/logo.svg" alt="logo" width={24} height={24} /> */}
          <h1>1ee.1og</h1>
        </Link>

        <nav className="flex gap-2 text-base font-light text-center md:text-sm">
          {navItems.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={`px-2 ${
                pathname === href
                  ? 'text-rose-900 border dark:text-white/87'
                  : 'dark:text-white/60'
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}

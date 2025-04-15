'use client';

import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-sm px-2 py-1 border bg-white border-gray-200 rounded-full hover:animate-spin focus:animate-out dark:border-white/30 dark:bg-inherit"
    >
      {theme === 'dark' ? '💡' : '🌙'}
    </button>
  );
}

'use client';

import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-sm px-3 py-1 border rounded"
    >
      {theme === 'dark' ? '💡' : '🌙'}
    </button>
  );
}

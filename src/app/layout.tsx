import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Thin.woff2',
      weight: '100',
      style: 'thin',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'extralight',
    },
    {
      path: '../../public/fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'extrabold',
    },
  ],
});

export const metadata: Metadata = {
  title: '1ee.1og',
  description: 'My log & Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <ThemeProvider>
          <Header />
          <main className="w-full min-h-screen mx-auto px-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

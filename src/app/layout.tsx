import React from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { Footer } from '@/app/_component/Footer';
import { GlobalNavigationBar } from '@/app/_component/GlobalNavigationBar';
import { Header } from '@/app/_component/Header';
import '../theme/theme.css';
import './globals.css';

const notoSans = Noto_Sans_KR({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '청약닷컴',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <GlobalNavigationBar />
      </body>
    </html>
  );
}

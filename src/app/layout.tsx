import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../theme/theme.css';
import './globals.css';
import { Header } from './_component/layout/Header';
import { Footer } from './_component/layout/Footer';
import { GlobalNavigationBar } from './_component/layout/GlobalNavigationBar';

const pretendard = localFont({
  src: './_asset/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
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
      <body className={`${pretendard.className}`}>
        <div id="layout">
          <div id="layout__container">
            <Header />
            <main id="layout__main">{children}</main>
            <Footer />
          </div>
          <GlobalNavigationBar />
        </div>
      </body>
    </html>
  );
}

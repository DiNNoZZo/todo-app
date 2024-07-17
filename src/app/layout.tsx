import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layoutComponents/Header';
import Main from '@/components/layoutComponents/Main';
import classNames from 'classnames';
import AppProvider from '@/context/AppContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'To-Do app',
  description:
    'This is a simple Todo List application built with React, TypeScript, and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClass = classNames(
    inter.className,
    'flex flex-col h-screen bg-background-light dark:bg-background-dark overflow-hidden'
  );

  const headerClass = classNames('h-[50px] w-full flex justify-between');

  const mainClass = classNames(
    'flex-1 overflow-auto w-full bg-background-light dark:bg-background-dark'
  );

  return (
    <html lang="en">
      <body className={bodyClass}>
        <AppProvider>
          <Header className={headerClass} />
          <Main className={mainClass}>{children}</Main>
          <div id="modal-root"></div>
        </AppProvider>
      </body>
    </html>
  );
}

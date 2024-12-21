import type { Metadata } from "next";
import { Providers } from './provider';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from "./component/Header";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Chhattishgarh Vidya",
  description: "This application is owned by Chhattishgarh Vidya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon meta tags */}
        <meta name="description" content="This application is owned by Chhattishgarh Vidya" />
        <link rel="icon" type="image/x-icon" href="../public/favicon_io/favicon.ico " />
        <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

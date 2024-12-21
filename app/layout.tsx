import type { Metadata } from "next";
import { Providers } from './provider';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from "./component/Header";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ['latin'] });

// Enhanced Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://chhattishgarhvidya.org'), // Replace with your actual domain
  title: {
    default: "Chhattishgarh Vidya - Educational Resources Platform",
    template: "%s | Chhattishgarh Vidya"
  },
  description: "Comprehensive educational platform providing learning resources, courses, and educational support for students in Chhattishgarh.",
  applicationName: "Chhattishgarh Vidya",
  keywords: [
    "education", 
    "Chhattishgarh", 
    "online learning", 
    "educational resources", 
    "student support"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://chhattishgarhvidya.org",
    title: "Chhattishgarh Vidya - Educational Resources Platform",
    description: "Comprehensive educational platform providing learning resources, courses, and educational support for students in Chhattishgarh.",
    siteName: "Chhattishgarh Vidya",
    images: [
      {
        url: "/og-image.png", // Create and replace with your og image
        width: 1200,
        height: 630,
        alt: "Chhattishgarh Vidya - Educational Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chhattishgarh Vidya - Educational Resources Platform",
    description: "Comprehensive educational platform providing learning resources, courses, and educational support for students in Chhattishgarh.",
    images: ["/twitter-image.png"] // Create and replace with your twitter card image
  },
  verification: {
    google: "your-google-site-verification-code", // Replace with actual verification code
    // yandex: "your-yandex-verification-code",
    // other search engine verifications if needed
  },
  alternates: {
    canonical: "https://chhattishgarhvidya.org"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      className="scroll-smooth" 
      lang="en" 
      suppressHydrationWarning
    >
      <head>
        {/* Core Web Vitals and Performance Optimization */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        {/* Favicon and Touch Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon_io/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        
        {/* Manifest and Theme Color */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Accessibility and Internationalization */}
        <meta name="content-language" content="en-IN" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Chhattishgarh Vidya Team" />
        <meta name="publisher" content="Chhattishgarh Vidya" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
        
        {/* Optional: Add schema.org JSON-LD for rich results */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Chhattishgarh Vidya",
              "url": "https://chhattishgarhvidya.org",
              "description": "Comprehensive educational platform providing learning resources, courses, and educational support for students in Chhattishgarh."
            })
          }}
        />
      </body>
    </html>
  );
}
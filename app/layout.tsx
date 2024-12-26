import type { Metadata } from "next";
import { Providers } from './provider';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from "./component/Header";
import Footer from "./component/Footer";
import { GlobalStateProvider } from "../context/GlobalContext";

const inter = Inter({ subsets: ['latin'] });

// Enhanced Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://chhattisgarhvidya.org'),
  title: {
    default: "Chhattishgarh Vidya - Educational Resources Platform",
    template: "%s | Chhattishgarh Vidya",
  },
  description: "Comprehensive educational platform providing learning resources, courses, and educational support for students in Chhattishgarh.",
  applicationName: "Chhattishgarh Vidya",
  keywords: [
    "education",
    "Chhattishgarh",
    "online learning",
    "educational resources",
    "student support",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://chhattisgarhvidya.org",
    title: "Chhattishgarh Vidya - Educational Resources Platform",
    description: "Comprehensive educational platform providing learning resources, courses, and educational support for students in Chhattishgarh.",
    siteName: "Chhattishgarh Vidya",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chhattishgarh Vidya - Educational Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chhattishgarh Vidya - Educational Resources Platform",
    description: "Comprehensive educational platform providing learning resources, courses, and educational support for students in Chhattishgarh.",
    images: ["/twitter-image.png"],
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://chhattisgarhvidya.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <head>
        {/* Core Web Vitals and Performance Optimization */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* og */}
        <meta property="og:title" content={'Chhattisgarh Vidya Education site'} />
        <meta property="og:description" content={'This site provide the conent for college notes and online courses'} />
        <meta property="og:image" content={'/cg-logo.svg'} />

        



        {/* Favicon and Touch Icons */}
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />


        {/* Manifest and Theme Color */}
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
      <body className={`${inter.className}  antialiased`}>
        <GlobalStateProvider>
        <Providers>
          <Header />
          <div className="h-16"></div>
          <main >{children}</main>
          <Footer />
        </Providers>
        </GlobalStateProvider>
        {/* Microsoft Clarity Analytics Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "phh0wrvpv9");
            `,
          }}
        />

        {/* Schema.org JSON-LD for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Chhattishgarh Vidya",
              url: "https://chhattisgarhvidya.org",
              description:
                "Comprehensive educational platform providing learning resources, courses, and educational support for students in Chhattishgarh.",
            }),
          }}
        />
      </body>
    </html>
  );
}

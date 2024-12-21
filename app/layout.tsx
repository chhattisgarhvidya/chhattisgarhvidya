import type { Metadata } from "next";
import { Providers } from './provider'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from "./component/Header";
import Footer from "./component/Footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Chhattishgarh Vidya",
  description: "This application is own by Chhattishgarh Vidya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header/>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
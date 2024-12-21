import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduSite - Transform Your Learning',
  description: 'Unlock your potential with our cutting-edge online learning platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark:bg-gray-900">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}


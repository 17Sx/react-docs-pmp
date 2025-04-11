import './globals.css'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Documentation pmp - Tutoriel',
  description: 'Apprenez React, Next.js et Node.js en français',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className} suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-[#0A0A0A] dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen">
            <Navbar />
            <main className="w-screen flex-1 px-6 lg:px-16 py-8 overflow-y-auto">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Documentation pmp - Tutoriel',
  description: 'Apprenez React, Next.js et Node.js en français',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="bg-white text-black dark:bg-[#0A0A0A] dark:text-white">
        <div className="flex min-h-screen">
          <Navbar />
          <main className="w-screen flex-1 px-6 lg:px-16 py-8 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}

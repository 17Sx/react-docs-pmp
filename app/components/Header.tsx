import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo PMP"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">/</span>
          <a target="_blank" href="https://github.com/17Sx">

          <Image
            src="/logosx.png"
            alt="Logo 17Sx"
            width={50}
            height={50}
          />

          </a>
        </Link>
      </div>
      <nav className="flex items-center space-x-6">
        <Link 
          href="/installation" 
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          Installation
        </Link>
        <Link 
          href="/signature-pmp" 
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          Signature PMP
        </Link>
        <Link 
          href="/pmp-sv" 
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          PMP Vitrine
        </Link>
      </nav>
    </header>
  )
} 
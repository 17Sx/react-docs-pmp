'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`block px-4 py-2 text-sm hover:text-gray-900 dark:hover:text-white transition-colors ${
        isActive ? 'text-blue-500 dark:text-blue-400 font-medium' : ''
      }`}
    >
      {children}
    </Link>
  );
};

const NavSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
      {title}
    </h3>
    <div className="space-y-1">
      {children}
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Bouton pour afficher/masquer la navbar, intégré visuellement à la navbar */}
      <div className={`fixed top-16 ${isOpen ? 'left-64' : 'left-0'} z-50 transition-all duration-300`}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-center w-6 h-20 
            bg-white dark:bg-[#0A0A0A]
            border-t border-r border-b border-gray-200 dark:border-gray-800
            rounded-r-md focus:outline-none
            transition-colors
            hover:bg-gray-100 dark:hover:bg-gray-900
          `}
          aria-label={isOpen ? "Fermer la navigation" : "Ouvrir la navigation"}
        >
          <div className="rotate-90 text-gray-500 dark:text-gray-400">
            {isOpen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Navbar */}
      <nav className={`fixed left-0 top-0 h-screen ${isOpen ? 'w-64' : 'w-0 -translate-x-full'} z-40 bg-white dark:bg-[#0A0A0A] border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300 overflow-hidden`}>
        <div className="flex-1 overflow-y-auto">
          <div className="py-8 px-4">
            <Link href="/" className="block mb-8">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Logo PMP"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <span className="text-2xl font-bold">/</span>
                <Image
                  src="/logosx.png"
                  alt="Logo 17Sx"
                  width={50}
                  height={50}
                />
              </div>
            </Link>

            <div className="space-y-8">
              <NavSection title="Démarrage">
                <NavLink href="/installation">
                  Installation
                </NavLink>
                <NavLink href="/a-savoir">
                  À savoir
                </NavLink>
                <NavLink href="/glossaire">
                  Glossaire Technique
                </NavLink>
              </NavSection>

              <NavSection title="Fondamentaux">
                <NavLink href="/react">
                  React
                </NavLink>
                <NavLink href="/nextjs">
                  Next.js
                </NavLink>
                <NavLink href="/typescript">
                  TypeScript
                </NavLink>
                <NavLink href="/prisma">
                  Prisma
                </NavLink>
              </NavSection>

              <NavSection title="Projet">
                <NavLink href="/signature-pmp">
                  Signature PMP
                </NavLink>
                <NavLink href="/pmp-sv">
                  PMP site vitrine
                </NavLink>
              </NavSection>
            </div>
          </div>
        </div>
      </nav>

      {/* Ajustement du contenu principal */}
      <style jsx global>{`
        main {
          transition: padding-left 0.3s ease;
          padding-left: ${isOpen ? '16rem' : '1rem'};
        }
      `}</style>
    </>
  );
};

export default Navbar; 
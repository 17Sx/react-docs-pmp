import Link from 'next/link';
import Image from 'next/image';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="block px-4 py-2 text-sm hover:text-gray-900 dark:hover:text-white transition-colors"
  >
    {children}
  </Link>
);

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
  return (
        <nav className="fixed left-0 top-0 h-screen w-64 z-100 bg-white dark:bg-[#0A0A0A] border-r border-gray-200 dark:border-gray-800 flex flex-col">
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
  );
};

export default Navbar; 
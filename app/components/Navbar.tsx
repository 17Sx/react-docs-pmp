import Link from 'next/link';

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
    <nav className="w-64 border-r border-gray-200 dark:border-gray-800 h-screen overflow-y-auto fixed">
      <div className="py-8 px-4">
        <Link href="/" className="block mb-8">
          <h1 className="text-xl font-bold">
            Documentation PMP
          </h1>
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
            <NavLink href="/nodejs">
              Node.js
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
    </nav>
  );
};

export default Navbar; 
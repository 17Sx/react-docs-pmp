import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Documentation React
          </Link>
          <div className="space-x-4">
            <Link href="/react" className="hover:text-gray-300">
              React
            </Link>
            <Link href="/nextjs" className="hover:text-gray-300">
              Next.js
            </Link>
            <Link href="/nodejs" className="hover:text-gray-300">
              Node.js
            </Link>
            <Link href="/installation" className="hover:text-gray-300">
              Installation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
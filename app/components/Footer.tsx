import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full p-2 text-center z-50 border-gray-200 bg-gray-950/80 backdrop-blur-sm">
        <p className="text-gray-300 text-xs">Si jamais vous avez des questions, n&apos;hésitez pas à me contacter sur discord : sx._. ou par <Link className='text-blue-500' href="mailto:noa.obringer@gmail.com">mail</Link></p>
    </footer>
  );
}

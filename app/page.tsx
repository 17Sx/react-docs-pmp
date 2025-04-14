import Link from 'next/link'
import Header from './components/Header'


export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-5xl font-bold tracking-tight">
                Documentation PMP
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ce site web a été crée pour vous aider à apprendre React, Next.js, typescript et Prisma pour les applications PMP crée par <Link target="_blank" href="https://github.com/17Sx" className="text-blue-600 dark:text-blue-400 hover:underline">17Sx</Link> (Noa)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <h2 className="text-2xl font-semibold">Qu&apos;allez-vous apprendre ?</h2>

              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  React - Une bibliothèque JavaScript pour créer des interfaces utilisateur
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Next.js - Un framework React pour la production
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  TypeScript - Un sur-ensemble typé de JavaScript qui ajoute des types statiques
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Prisma - Un ORM moderne pour Node.js et TypeScript
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <h2 className="text-2xl font-semibold">Comment commencer ?</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Suivez le guide étape par étape pour commencer :
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Commencez par la section Installation</li>
                  <li>Explorez les bases de React</li>
                  <li>Découvrez les fonctionnalités de Next.js</li>
                  <li>Approfondissez avec TypeScript</li>
                  <li>Apprenez à utiliser Prisma pour la gestion de base de données</li>
                  <li>Vous pouvez aussi vous rendre sur la page des projets pour voir les explications des applications PMP</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <div className="flex items-center space-x-3 mb-4">
              <h2 className="text-2xl font-semibold">Prêt à commencer ?</h2>

            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Cliquer sur le bouton ci-dessous pour commencer le tutoriel
            </p>
            <Link 
              href="/installation" 
              className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Commencer le tutoriel
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="space-y-4">
            <Link href="/signature-pmp" className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div className="flex items-center space-x-3 mb-2">
                <h2 className="text-2xl font-semibold">Signature PMP</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Documentation complète pour comprendre et utiliser l&apos;application Signature PMP
              </p>
            </Link>

            <Link href="/pmp-sv" className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div className="flex items-center space-x-3 mb-2">
                <h2 className="text-2xl font-semibold">PMP vitrine Website</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Guide complet pour comprendre et utiliser le site web PMP vitrine
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

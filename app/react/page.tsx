import Compteur from '../components/Compteur';
import Link from 'next/link';

export default function React() {
  return (
    <div className="w-full space-y-12">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Les bases de React
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Apprenez les concepts fondamentaux de React pour créer des interfaces utilisateur interactives
        </p>
      </div>

      <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Qu&apos;est-ce que React.js ?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            React.js est une bibliothèque JavaScript open-source développée par Facebook pour créer des interfaces utilisateur interactives. 
            Elle permet de construire des applications web modernes en utilisant une approche basée sur les composants réutilisables.
          </p>
          <a 
            href="https://react.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 block"
          >
            Documentation officielle React → 
          </a>
        </section>

      <div className="w-full space-y-8">
        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Les Composants</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Les composants sont les blocs de construction de React. Voici un exemple simple :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-sm text-gray-300">
                {`function MonComposant() {
  return (
    <div className="p-4 bg-blue-500 text-white">
      <h1>Bonjour !</h1>
      <p>Ceci est mon premier composant</p>
    </div>
  );
}`}
              </pre>
            </div>
            <div className="p-4 bg-blue-500 text-white rounded-lg">
              <h1 className="text-xl font-bold">Bonjour !</h1>
              <p>Ceci est mon premier composant</p>
            </div>
          </div>
          <a 
            href="https://react.dev/learn/your-first-component" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mt-4 block"
          >
            Documentation sur les composants →
          </a>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Les Props</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Les props permettent de passer des données à vos composants :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-sm text-gray-300">
                {`function Salutation({ nom }) {
  return (
    <div className="p-4 bg-green-500 text-white">
      <h1>Bonjour {nom} !</h1>
    </div>
  );
}

// Utilisation :
<Salutation nom="Alice" />`}
              </pre>
            </div>
            <div className="p-4 bg-green-500 text-white rounded-lg">
              <h1 className="text-xl font-bold">Bonjour Alice !</h1>
            </div>
          </div>
          <a 
            href="https://react.dev/learn/passing-props-to-a-component" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mt-4 block"
          >
            Documentation sur les props →
          </a>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Le State</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Le state permet de gérer les données qui peuvent changer dans un composant :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-sm text-gray-300">
                {`import { useState } from 'react';

function Compteur() {
  const [compte, setCompte] = useState(0);

  return (
    <div className="p-4 bg-purple-500 text-white">
      <p>Compteur : {compte}</p>
      <button 
        onClick={() => setCompte(compte + 1)}
        className="mt-2 px-4 py-2 bg-white text-purple-500 rounded"
      >
        Incrémenter
      </button>
    </div>
  );
}`}
              </pre>
            </div>
            <div>
              <Compteur />
            </div>
          </div>
          <a 
            href="https://react.dev/learn/state-a-components-memory" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mt-4 block"
          >
            Documentation sur le state →
          </a>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Documentation complète</h2>
          <div className="space-y-2">
            <a 
              href="https://react.dev/learn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 block"
            >
              Guide d&apos;apprentissage React →
            </a>
            <a 
              href="https://react.dev/reference" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 block"
            >
              Référence API React →
            </a>
          </div>
        </section>
      </div>

      <div className="flex justify-end mt-8">
        <Link 
          href="/nextjs" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Aller à la page suivante
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 
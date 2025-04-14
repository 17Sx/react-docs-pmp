import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À savoir | Documentation PMP',
  description: 'Informations importantes sur les projets PMP et la documentation',
};

export default function ASavoir() {
  return (
    <div className="w-full space-y-12">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          À savoir
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Informations importantes concernant les projets PMP et cette documentation
        </p>
      </div>

      <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Application pratique des concepts</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Tous les concepts présentés dans cette documentation (React, Next.js, TypeScript, Prisma) 
          sont directement appliqués dans les projets que j&apos;ai réalisés pour l&apos;entreprise PMP.
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium mb-2 text-blue-700 dark:text-blue-300">Projets réels</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Les projets Signature PMP et PMP Site Vitrine documentés ici utilisent l&apos;ensemble de 
            ces technologies dans un contexte de production. Chaque concept théorique a son 
            application concrète dans le code source de ces projets.
          </p>
        </div>
      </section>

      <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Documentation approfondie du code</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Pour faciliter la compréhension et la maintenance, j&apos;ai veillé à documenter 
          extensivement le code source des projets PMP :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Commentaires détaillés</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Le code contient des commentaires explicatifs pour les sections complexes, 
              les décisions d&apos;architecture et les logiques métier importantes.
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Types TypeScript</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Toutes les interfaces, types et fonctions sont typés avec précision, 
              servant ainsi de documentation supplémentaire sur l&apos;utilisation prévue.
            </p>
          </div>
        </div> 
      </section>

      <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Une introduction aux fondamentaux</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Cette documentation ne couvre qu&apos;une partie des connaissances nécessaires pour 
          maîtriser pleinement le développement d&apos;applications modernes avec la stack technologique que j&apos;utilise.
        </p>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium mb-2 text-yellow-700 dark:text-yellow-300">Au-delà de cette documentation</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Pour une maîtrise complète, il est recommandé d&apos;explorer :
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
            <li>Les patterns avancés de React (Server Components, Suspense, Context)</li>
            <li>La sécurité des applications web</li>
            <li>L&apos;optimisation des performances</li>
            <li>Les tests automatisés</li>
            <li>Et d&apos;autres...</li>
          </ul>
        </div>
      </section>

      <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Contact et assistance</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Si vous avez des questions spécifiques sur les projets ou besoin d&apos;assistance,
          n&apos;hésitez pas à me contacter :
        </p>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2 text-green-700 dark:text-green-300">Support</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Pour toute question technique ou demande d&apos;explication sur un aspect particulier
            du code, vous pouvez me contacter directement sur Discord : <span className="font-semibold">sx._.</span> ou
            par <Link href="mailto:noa.obringer@gmail.com" className="text-blue-500 hover:underline">email</Link>.
          </p>
        </div>
      </section>

      <div className="flex justify-end mt-8">
        <Link 
          href="/react" 
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

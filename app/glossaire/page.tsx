import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glossaire Technique | Documentation PMP',
  description: 'Définitions des termes techniques utilisés dans les projets PMP',
};

export default function Glossaire() {
  return (
    <div className="w-full space-y-12">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Glossaire Technique
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Définitions des termes techniques utilisés dans les projets PMP
        </p>
      </div>

      <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Technologies Fondamentales</h2>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400">React</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Bibliothèque JavaScript utilisée pour construire les interfaces utilisateur. 
              Dans les projets PMP, React est utilisé comme base pour tous les composants 
              d&apos;interface, permettant une approche modulaire et réutilisable.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400">Next.js</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Framework React qui offre des fonctionnalités avancées comme le rendu côté serveur (SSR),
              la génération de sites statiques (SSG) et le routage automatique. Dans PMP Site Vitrine, 
              Next.js est utilisé pour optimiser le référencement et les performances, tandis que dans 
              Signature PMP, il sert à créer une application sécurisée avec authentification.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400">TypeScript</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sur-ensemble typé de JavaScript qui ajoute des vérifications de type statiques. 
              Utilisé dans tous les projets PMP pour améliorer la fiabilité du code et la 
              détection précoce des erreurs, particulièrement crucial pour le projet Signature PMP 
              où la sécurité est primordiale.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400">Prisma</h3>
            <p className="text-gray-600 dark:text-gray-400">
              ORM (Object-Relational Mapping) pour Node.js et TypeScript, utilisé pour interagir 
              avec la base de données PostgreSQL dans les projets PMP. Dans Signature PMP, Prisma 
              gère les données des utilisateurs, des documents et des signatures.
            </p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400">Tailwind CSS</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Framework CSS utilitaire utilisé pour le style dans les projets PMP. Permet un développement 
              rapide et cohérent des interfaces utilisateur avec une approche &quot;utility-first&quot;.
            </p>
          </div>
        </div>
      </section>

      <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Concepts de Développement</h2>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-green-600 dark:text-green-400">SSR (Server-Side Rendering)</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Technique de rendu où les pages HTML sont générées sur le serveur à chaque requête.
              Utilisée dans le site vitrine PMP pour optimiser le référencement et améliorer 
              les performances initiales de chargement des pages.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-green-600 dark:text-green-400">SSG (Static Site Generation)</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Méthode qui pré-génère des pages HTML statiques lors de la compilation. Dans PMP Site Vitrine, 
              utilisée pour les pages de contenu qui changent rarement, améliorant ainsi la vitesse de chargement.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-green-600 dark:text-green-400">API Routes</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Points d&apos;entrée serveur définis dans Next.js qui permettent de créer des API RESTful.
              Dans Signature PMP, utilisées pour implémenter des fonctionnalités sécurisées comme 
              l&apos;authentification et la gestion des signatures électroniques.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-green-600 dark:text-green-400">JWT (JSON Web Tokens)</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Standard utilisé pour l&apos;authentification et l&apos;échange sécurisé d&apos;informations.
              Implémenté dans Signature PMP pour gérer les sessions utilisateur et l&apos;accès aux ressources protégées.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-green-600 dark:text-green-400">Hooks React</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Fonctions permettant d&apos;utiliser l&apos;état et d&apos;autres fonctionnalités React sans écrire de classes.
              Les projets PMP utilisent principalement useState, useEffect, useContext et des hooks personnalisés
              pour la gestion d&apos;état locale et la logique réutilisable.
            </p>
          </div>
        </div>
      </section>

      <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Termes Spécifiques aux Projets PMP</h2>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-purple-600 dark:text-purple-400">NextAuth.js</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Bibliothèque d&apos;authentification utilisée dans Signature PMP pour gérer les connexions 
              utilisateurs, les sessions et diverses stratégies d&apos;authentification (email, OAuth, etc.).
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-purple-600 dark:text-purple-400">React Hook Form</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Bibliothèque utilisée pour la gestion des formulaires dans les projets PMP. Offre une 
              solution performante avec validation, gestion des erreurs et soumission des formulaires.
              Utilisée notamment pour le formulaire de signature dans Signature PMP.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-purple-600 dark:text-purple-400">Prisma Client</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Interface générée automatiquement par Prisma qui permet d&apos;interagir avec la base de données
              de manière type-safe. Dans les projets PMP, utilisé pour toutes les opérations CRUD 
              (Create, Read, Update, Delete) sur les données.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-purple-600 dark:text-purple-400">Migrations Prisma</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Système utilisé pour versionner et déployer les changements de schéma de base de données
              dans les projets PMP. Permet de maintenir la cohérence entre les environnements de développement 
              et de production.
            </p>
          </div>
        </div>
      </section>

      <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Déploiement et Infrastructure</h2>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-red-600 dark:text-red-400">Vercel</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Plateforme de déploiement et d&apos;hébergement optimisée pour les applications Next.js.
              Utilisée pour déployer le site vitrine PMP (temporairement) avec des fonctionnalités comme les 
              prévisualisations automatiques pour chaque pull request. Trés utile pour les tests.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-red-600 dark:text-red-400">PostgreSQL</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Système de gestion de base de données relationnel utilisé dans les projets PMP.
              Choisi pour sa fiabilité, ses performances et son support des fonctionnalités avancées
              comme les transactions et les contraintes d&apos;intégrité.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-red-600 dark:text-red-400">CI/CD</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Intégration Continue / Déploiement Continu - Pratique qui automatise les tests et le 
              déploiement du code. Dans les projets PMP, implémentée via GitHub Actions pour
              garantir la qualité et la stabilité des applications.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-medium text-red-600 dark:text-red-400">Environment Variables</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Variables d&apos;environnement utilisées pour stocker des informations sensibles comme
              les clés API et les configurations de base de données. Dans les projets PMP, gérées
              via les fichiers .env avec différentes configurations pour le développement et la production.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-end mt-8">
        <Link 
          href="/a-savoir" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Retour à &quot;À savoir&quot;
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 
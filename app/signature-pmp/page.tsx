"use client";

import Link from "next/link";
import CommitGraph from "../components/CommitGraph";

export default function SignaturePMP() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-bold tracking-tight">
            Documentation Signature PMP
          </h1>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/17Sx/signature-pmp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Voir sur GitHub</span>
            </Link>

          </div>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Guide complet pour comprendre et utiliser le système de signature PMP
        </p>
      </div>

      <CommitGraph repoName="signature-pmp" />


      <div className="space-y-8">
        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Installation et Configuration</h2>
          
          <div className="space-y-4">
            <details className="group">
              <summary className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer">
                <h3 className="text-lg font-medium">1. Prérequis</h3>
                <svg className="w-5 h-5 transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-b-lg">
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Node.js (version 18 ou supérieure)</li>
                  <li>• npm (version 8 ou supérieure)</li>
                  <li>• PostgreSQL (version 14 ou supérieure)</li>
                  <li>• Git</li>
                </ul>
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer">
                <h3 className="text-lg font-medium">2. Cloner le Projet</h3>
                <svg className="w-5 h-5 transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-b-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <pre className="text-sm text-gray-300 font-mono">
                      {`# Cloner le repository
git clone https://github.com/17Sx/signature-pmp.git

# Se déplacer dans le dossier
cd signature-pmp`}
                    </pre>
                  </div>
                  <div className="p-4 bg-blue-500 text-white rounded-lg">
                    <h4 className="font-semibold mb-2">Branches disponibles</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• main : version stable</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer">
                <h3 className="text-lg font-medium">3. Configuration de l&apos;Environnement</h3>
                <svg className="w-5 h-5 transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-b-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <pre className="text-sm text-gray-300 font-mono">
                      {`# Installer les dépendances
npm install

# Copier le fichier .env.example
cp .env.example .env.local

# Configurer les variables d'environnement
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="votre-secret"
NEXTAUTH_URL="http://localhost:3000"
EMAIL_SERVER_HOST="smtp.example.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="user"
EMAIL_SERVER_PASSWORD="password"
EMAIL_FROM="noreply@example.com"`}
                    </pre>
                  </div>
                  <div className="p-4 bg-green-500 text-white rounded-lg">
                    <h4 className="font-semibold mb-2">Variables importantes</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• DATABASE_URL : URL de connexion à PostgreSQL</li>
                      <li>• NEXTAUTH_SECRET : Clé secrète pour l&apos;authentification</li>
                      <li>• EMAIL_* : Configuration du serveur SMTP</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer">
                <h3 className="text-lg font-medium">4. Initialisation de la Base de Données</h3>
                <svg className="w-5 h-5 transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-b-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <pre className="text-sm text-gray-300 font-mono">
                      {`# Générer le client Prisma
npx prisma generate

# Appliquer les migrations
npx prisma db push

# Charger les données initiales
npx prisma db seed`}
                    </pre>
                  </div>
                  <div className="p-4 bg-purple-500 text-white rounded-lg">
                    <h4 className="font-semibold mb-2">Vérification</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• La base de données est créée</li>
                      <li>• Les tables sont initialisées</li>
                      <li>• Les données de test sont chargées</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer">
                <h3 className="text-lg font-medium">5. Démarrage du Projet</h3>
                <svg className="w-5 h-5 transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-b-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <pre className="text-sm text-gray-300 font-mono">
                      {`# Terminal 1 - Client
cd client
npm install
npm start

# Terminal 2 - Serveur
cd server
npm install
npm start`}
                    </pre>
                  </div>
                  <div className="p-4 bg-yellow-500 text-white rounded-lg">
                    <h4 className="font-semibold mb-2">Accès</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Client : http://localhost:3001</li>
                      <li>• Serveur : http://localhost:3000</li>
                    </ul>
                    <div className="mt-4 p-3 bg-yellow-600 rounded">
                      <p className="text-sm font-medium">⚠️ Important</p>
                      <p className="text-xs mt-1">
                        Les deux terminaux doivent être ouverts simultanément pour que l&apos;application fonctionne correctement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Présentation du Projet</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Signature PMP est une application web permettant de gérer les signatures électroniques
            pour les documents PMP. Elle offre une interface intuitive et sécurisée pour la
            gestion des signatures.
          </p>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            L&apos;application est construite avec :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[300px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`// Structure du projet
signature-pmp/
├── app/
│   ├── api/           # Routes API
│   ├── components/    # Composants React
│   ├── lib/          # Utilitaires
│   └── pages/        # Pages de l'application
├── prisma/           # Configuration de la base de données
├── public/           # Fichiers statiques
└── styles/           # Styles CSS

// Technologies principales
- Next.js 14
- Prisma (PostgreSQL)
- Scss
- NextAuth.js
- React Hook Form`}
              </pre>
            </div>
            <div className="p-8 bg-blue-500 text-white rounded-lg min-h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Fonctionnalités</h3>
              <div className="space-y-4">
                <div className="bg-blue-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Authentification</h4>
                  <p className="text-sm">Système de connexion sécurisé avec NextAuth.js</p>
                </div>
                <div className="bg-blue-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Gestion des Documents</h4>
                  <p className="text-sm">Upload et stockage sécurisé des documents</p>
                </div>
                <div className="bg-blue-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Signatures</h4>
                  <p className="text-sm">Système de signature électronique</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Utilisation</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Guide d&apos;utilisation de l&apos;application :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[300px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`# Connexion
1. Accédez à /login
2. Entrez vos identifiants
3. Validez votre email

# Gestion des documents
1. Accédez à /documents
2. Cliquez sur "Nouveau document"
3. Téléversez votre fichier
4. Ajoutez les signataires

# Signatures
1. Les signataires reçoivent un email
2. Ils cliquent sur le lien
3. Ils signent le document
4. Le statut est mis à jour`}
              </pre>
            </div>
            <div className="p-8 bg-purple-500 text-white rounded-lg min-h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Fonctionnalités Avancées</h3>
              <div className="space-y-4">
                <div className="bg-purple-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Workflow</h4>
                  <p className="text-sm">Gestion des étapes de signature</p>
                </div>
                <div className="bg-purple-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Notifications</h4>
                  <p className="text-sm">Système d&apos;alertes par email</p>
                </div>
                <div className="bg-purple-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Historique</h4>
                  <p className="text-sm">Suivi des actions sur les documents</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Ne pas hesiter a aller voir le README.md</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Documentation complète pour comprendre et utiliser l&apos;application :  
            
            <Link className="ml-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300" href="https://github.com/17Sx/signature-pmp/blob/main/README.md" target="_blank" rel="noopener noreferrer">
               Lien vers le README.md
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
} 
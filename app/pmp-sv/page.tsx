import Link from "next/link";

export default function PMPSV() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-bold tracking-tight">
            Documentation PMP vitrine Website
          </h1>
          <Link
            href="https://github.com/17Sx/pmp-sv"
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
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Guide complet pour comprendre et utiliser le site web PMP vitrine
        </p>
      </div>

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
                  <li>• Node.js 16.x ou supérieur</li>
                  <li>• MySQL 8.0</li>
                  <li>• npm ou yarn</li>
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
git clone https://github.com/17Sx/pmp-sv.git
cd pmp-sv`}
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
cp .env.example .env

# Configurer les variables d'environnement
DB_HOST=localhost
DB_PORT=3310
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=pmpwebsite
NEXTAUTH_SECRET=votre_secret
NEXTAUTH_URL=http://localhost:3000
SMTP_HOST=votre_hote_smtp
SMTP_PORT=25
SMTP_USER=votre_utilisateur_smtp
SMTP_PASSWORD=votre_mot_de_passe_smtp
SMTP_SENDER=no-reply@votredomaine.com
NEXT_PUBLIC_TINYMCE_API_KEY=votre_cle_api`}
                    </pre>
                  </div>
                  <div className="p-4 bg-green-500 text-white rounded-lg">
                    <h4 className="font-semibold mb-2">Variables importantes</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• DB_* : Configuration de la base de données MySQL</li>
                      <li>• NEXTAUTH_* : Configuration de l&apos;authentification</li>
                      <li>• SMTP_* : Configuration du serveur d&apos;emails</li>
                      <li>• NEXT_PUBLIC_TINYMCE_API_KEY : Clé API pour l&apos;éditeur de texte</li>
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
                      {`# Appliquer les migrations
npx prisma migrate dev`}
                    </pre>
                  </div>
                  <div className="p-4 bg-purple-500 text-white rounded-lg">
                    <h4 className="font-semibold mb-2">Vérification</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• La base de données est créée</li>
                      <li>• Les tables sont initialisées</li>
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
                      {`# Démarrer le serveur de développement
npm run dev`}
                    </pre>
                  </div>
                  <div className="p-4 bg-yellow-500 text-white rounded-lg">
                    <h4 className="font-semibold mb-2">Accès</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Site web : http://localhost:3000</li>
                      <li>• Admin : http://localhost:3000/admin/articles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Présentation du Projet</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            PMP vitrine Website est une application web moderne construite avec Next.js, TypeScript et Prisma.
            Elle offre une interface complète pour la gestion de contenu, les newsletters et l&apos;administration.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Lien vers le site demo hebergé sur Vercel :  
            
            <Link className="ml-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300" href="https://pmp-sv.vercel.app/" target="_blank" rel="noopener noreferrer">
               Site Vitrine PMP
            </Link>
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
pmp-sv/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin panel
│   ├── api/               # API routes
│   ├── articles/          # Article pages
│   └── components/        # React components
├── lib/                   # Utility functions
├── prisma/                # Database schema
└── public/                # Static assets

// Technologies principales
- Next.js 13
- TypeScript
- Prisma
- MySQL
- Tailwind CSS`}
              </pre>
            </div>
            <div className="p-8 bg-blue-500 text-white rounded-lg min-h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Fonctionnalités</h3>
              <div className="space-y-4">
                <div className="bg-blue-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Gestion de Contenu</h4>
                  <p className="text-sm">Création et édition d&apos;articles avec TinyMCE</p>
                </div>
                <div className="bg-blue-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Newsletter</h4>
                  <p className="text-sm">Système d&apos;abonnement et d&apos;envoi de newsletters</p>
                </div>
                <div className="bg-blue-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Administration</h4>
                  <p className="text-sm">Interface d&apos;administration sécurisée</p>
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
                {`# Administration
1. Accédez à /admin
2. Connectez-vous avec vos identifiants
3. Gérez les articles et newsletters

# Articles
1. Créez un nouvel article
2. Utilisez l'éditeur TinyMCE
3. Publiez l'article

# Newsletter
1. Gérez les abonnés
2. Créez une newsletter
3. Envoyez aux abonnés`}
              </pre>
            </div>
            <div className="p-8 bg-purple-500 text-white rounded-lg min-h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Fonctionnalités Avancées</h3>
              <div className="space-y-4">
                <div className="bg-purple-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Images</h4>
                  <p className="text-sm">Gestion des images avec positionnement</p>
                </div>
                <div className="bg-purple-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Authentification</h4>
                  <p className="text-sm">Système sécurisé d&apos;accès admin</p>
                </div>
                <div className="bg-purple-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Responsive</h4>
                  <p className="text-sm">Design adaptatif pour tous les appareils</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Ne pas hesiter a aller voir le README.md</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Documentation complète pour comprendre et utiliser l&apos;application :  
            
            <Link className="ml-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300" href="https://github.com/17Sx/pmp-sv/blob/main/README.md#-pmp-solutions-website-version-fran%C3%A7aise" target="_blank" rel="noopener noreferrer">
               Lien vers le README.md
            </Link>
          </p>
        </section>
        
      </div>
    </div>
  )
} 
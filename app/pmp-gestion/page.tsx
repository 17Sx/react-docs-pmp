import Link from "next/link";

async function getLastCommit() {
  try {
    console.log('Token:', process.env.GITHUB_TOKEN ? 'Present' : 'Missing');
    console.log('Token length:', process.env.GITHUB_TOKEN?.length);
    
    const res = await fetch('https://api.github.com/repos/17Sx/pmp-gestion/commits/main', {
      next: { revalidate: 3600 }, // Revalider toutes les heures
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    console.log('API Response Status:', res.status);
    console.log('API Response Headers:', Object.fromEntries(res.headers.entries()));
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error('API Error:', errorText);
      return null;
    }
    
    const data = await res.json();
    console.log('API Response Data:', data);
    
    return {
      date: new Date(data.commit.author.date).toLocaleDateString('fr-FR'),
      message: data.commit.message
    };
  } catch (error) {
    console.error('Error fetching last commit:', error);
    return null;
  }
}

async function getTotalCommits() {
  try {
    const res = await fetch('https://api.github.com/repos/17Sx/pmp-gestion/commits?per_page=1', {
      next: { revalidate: 3600 },
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (!res.ok) {
      return null;
    }
    
    const linkHeader = res.headers.get('link');
    if (!linkHeader) return 1;
    
    const lastPageMatch = linkHeader.match(/page=(\d+)>; rel="last"/);
    if (!lastPageMatch) return 1;
    
    return parseInt(lastPageMatch[1]);
  } catch (error) {
    console.error('Error fetching total commits:', error);
    return null;
  }
}

export default async function PMPGestion() {
  const [lastCommit, totalCommits] = await Promise.all([
    getLastCommit(),
    getTotalCommits()
  ]);
  console.log('Last Commit Data:', lastCommit);

  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-bold tracking-tight">
            Documentation PMP Gestion
          </h1>
          <div className="flex items-center space-x-4">
            {lastCommit ? (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>Dernière mise à jour : {lastCommit.date}</p>
                <p className="text-xs">&apos;{lastCommit.message}&apos;</p>
                {totalCommits && (
                  <p className="text-xs mt-1">Commits totaux : {totalCommits}</p>
                )}
              </div>
            ) : (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>Impossible de charger les informations de mise à jour</p>
              </div>
            )}
            <Link
              href="https://github.com/17Sx/pmp-gestion"
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
          Guide complet pour comprendre et utiliser l&apos;application de gestion PMP
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
                  <li>• Node.js (v18 ou supérieur)</li>
                  <li>• MySQL (v8 ou MariaDB 10+)</li>
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
                      {`# Cloner le dépôt
git clone https://github.com/17Sx/pmp-gestion.git
cd pmp-gestion`}
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
cd frontend && npm install
cd ../backend && npm install

# Copier le fichier .env.example
cp .env.example .env.local

# Configurer les variables d'environnement
DATABASE_URL="mysql://..."
NEXTAUTH_SECRET="votre-secret"
NEXTAUTH_URL="http://localhost:3000"`}
                    </pre>
                  </div>
                  <div className="p-4 bg-green-500 text-white rounded-lg">
                    <h4 className="font-semibold mb-2">Variables importantes</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• DATABASE_URL : URL de connexion à MySQL</li>
                      <li>• NEXTAUTH_SECRET : Clé secrète pour l&apos;authentification</li>
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
                      {`# À la racine du projet
npm run dev`}
                    </pre>
                  </div>
                  <div className="p-4 bg-yellow-500 text-white rounded-lg">
                    <h4 className="font-semibold mb-2">Accès</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Application : http://localhost:3000</li>
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
            PMP-Gestion est une application web complète dédiée à la gestion des utilisateurs et des licences pour les systèmes PMP (Plate-forme de Mobilité Professionnelle). Ce système permet aux administrateurs et super-administrateurs de superviser efficacement les licences logicielles, de gérer les utilisateurs et de visualiser les statistiques d&apos;utilisation des fonctionnalités à travers différentes sociétés.
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
pmp-gestion/
├── frontend/                # Application Next.js
│   ├── src/
│   │   ├── app/             # Pages et composants
│   │   │   ├── contexts/        # Contextes React
│   │   │   └── middleware.ts    # Middleware d'auth
│   │   ├── public/              # Ressources statiques
│   │   └── package.json         # Dépendances frontend
│   ├── backend/                 # API Node.js
│   │   ├── src/
│   │   │   ├── controllers/     # Contrôleurs
│   │   │   ├── routes/          # Routes API
│   │   │   ├── middlewares/     # Middlewares
│   │   │   ├── utils/           # Utilitaires
│   │   │   ├── config/          # Configuration
│   │   │   ├── app.ts           # Application Express
│   │   │   └── server.ts        # Point d'entrée
│   │   ├── prisma/              # Configuration Prisma
│   │   └── package.json         # Dépendances backend
│   ├── schema.sql               # Schéma de base de données
│   └── package.json             # Scripts et dépendances`}
              </pre>
            </div>
            <div className="p-8 bg-blue-500 text-white rounded-lg min-h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Technologies</h3>
              <div className="space-y-4">
                <div className="bg-blue-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Next.js (React)</li>
                    <li>• TypeScript</li>
                    <li>• Chart.js</li>
                    <li>• React Hot Toast</li>
                  </ul>
                </div>
                <div className="bg-blue-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Express.js</li>
                    <li>• TypeScript</li>
                    <li>• MySQL</li>
                    <li>• Prisma</li>
                  </ul>
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
                {`# Gestion des Utilisateurs
1. Accédez à /users
2. Créez un nouvel utilisateur
3. Attribuez les licences
4. Gérez les permissions

# Gestion des Licences
1. Accédez à /licenses
2. Consultez l'utilisation
3. Gérez les alertes
4. Suivez les statistiques

# Tableaux de Bord
1. Accédez à /dashboard
2. Visualisez les graphiques
3. Exportez les rapports
4. Configurez les vues`}
              </pre>
            </div>
            <div className="p-8 bg-purple-500 text-white rounded-lg min-h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Fonctionnalités Avancées</h3>
              <div className="space-y-4">
                <div className="bg-purple-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Multi-Société</h4>
                  <p className="text-sm">Gestion des utilisateurs et licences par société</p>
                </div>
                <div className="bg-purple-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Notifications</h4>
                  <p className="text-sm">Alertes en temps réel pour les dépassements de licences</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Ne pas hésiter à aller voir le README.md</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Documentation complète pour comprendre et utiliser l&apos;application :  
            
            <Link 
              className="ml-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300" 
              href="https://github.com/17Sx/pmp-gestion/blob/main/README.md" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Lien vers le README.md
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
} 
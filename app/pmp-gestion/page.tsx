import Link from "next/link";

export default function PMPGestion() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Documentation PMP Gestion
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Guide complet pour comprendre et utiliser l'application de gestion PMP
        </p>
      </div>

      <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Présentation du Projet</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          PMP-Gestion est une application web complète dédiée à la gestion des utilisateurs et des licences pour les systèmes PMP (Plate-forme de Mobilité Professionnelle). Ce système permet aux administrateurs et super-administrateurs de superviser efficacement les licences logicielles, de gérer les utilisateurs et de visualiser les statistiques d'utilisation des fonctionnalités à travers différentes sociétés.
        </p>
      </section>

      <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          L'application est construite avec :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-8 rounded-lg min-h-[300px]">
            <pre className="text-sm text-gray-300 font-mono leading-relaxed">
              {`// Structure du projet
pmp-gestion/
├── frontend/                # Application Next.js
│   ├── src/
│   │   ├── app/             # Pages et composants
│   │   ├── contexts/        # Contextes React
│   │   └── middleware.ts    # Middleware d'auth
│   ├── public/              # Ressources statiques
│   └── package.json         # Dépendances frontend
│
├── backend/                 # API Node.js
│   ├── src/
│   │   ├── controllers/     # Contrôleurs
│   │   ├── routes/          # Routes API
│   │   ├── middlewares/     # Middlewares
│   │   ├── utils/           # Utilitaires
│   │   ├── config/          # Configuration
│   │   ├── app.ts           # Application Express
│   │   └── server.ts        # Point d'entrée
│   ├── prisma/              # Configuration Prisma
│   └── package.json         # Dépendances backend
│
├── schema.sql               # Schéma de base de données
└── package.json             # Scripts et dépendances`}
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
          Guide d'utilisation de l'application :
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
          Documentation complète pour comprendre et utiliser l'application :  
          
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
  );
} 
export default function Prisma() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Les bases de Prisma
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Apprenez à utiliser Prisma, l&apos;ORM moderne pour Node.js
        </p>
      </div>

      <div className="space-y-8">
        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Qu&apos;est-ce que Prisma ?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Prisma est un ORM (Object-Relational Mapping) moderne qui simplifie l&apos;accès aux bases de données
            en fournissant une API type-safe et intuitive.
          </p>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Installation et Configuration</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Configuration initiale de Prisma :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[300px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`# Installation
npm install prisma @prisma/client

# Initialisation
npx prisma init

# Configuration de la base de données
// schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

# Génération du client
npx prisma generate`}
              </pre>
            </div>
            <div className="p-8 bg-blue-500 text-white rounded-lg min-h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Structure du Projet</h3>
              <div className="space-y-4">
                <div className="bg-blue-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">prisma/</h4>
                  <p className="text-sm">Dossier contenant la configuration</p>
                </div>
                <div className="bg-blue-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">schema.prisma</h4>
                  <p className="text-sm">Définition du schéma de la base de données</p>
                </div>
                <div className="bg-blue-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">.env</h4>
                  <p className="text-sm">Variables d&apos;environnement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Modèles et Relations</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Définition des modèles et relations dans le schéma :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[300px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`// Définition des modèles
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
}

// Types de relations
// 1-1 : Un utilisateur a un profil
// 1-n : Un utilisateur a plusieurs posts
// n-n : Un post peut avoir plusieurs tags`}
              </pre>
            </div>
            <div className="p-8 bg-green-500 text-white rounded-lg min-h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Types de Relations</h3>
              <div className="space-y-4">
                <div className="bg-green-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">One-to-One</h4>
                  <p className="text-sm">Relation entre User et Profile</p>
                </div>
                <div className="bg-green-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">One-to-Many</h4>
                  <p className="text-sm">Relation entre User et Posts</p>
                </div>
                <div className="bg-green-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Many-to-Many</h4>
                  <p className="text-sm">Relation entre Posts et Tags</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Requêtes et Opérations</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Exemples d&apos;opérations CRUD avec Prisma :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[300px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`// Création
const user = await prisma.user.create({
  data: {
    email: 'alice@prisma.io',
    name: 'Alice',
  },
});

// Lecture
const users = await prisma.user.findMany({
  where: {
    email: {
      contains: 'prisma.io',
    },
  },
});

// Mise à jour
const user = await prisma.user.update({
  where: { email: 'alice@prisma.io' },
  data: { name: 'Alicia' },
});

// Suppression
const user = await prisma.user.delete({
  where: { email: 'alice@prisma.io' },
});`}
              </pre>
            </div>
            <div className="p-8 bg-purple-500 text-white rounded-lg min-h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Fonctionnalités Avancées</h3>
              <div className="space-y-4">
                <div className="bg-purple-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Transactions</h4>
                  <p className="text-sm">Opérations atomiques</p>
                </div>
                <div className="bg-purple-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Pagination</h4>
                  <p className="text-sm">Gestion des résultats paginés</p>
                </div>
                <div className="bg-purple-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">Relations</h4>
                  <p className="text-sm">Requêtes avec jointures</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 
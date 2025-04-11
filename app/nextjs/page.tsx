export default function NextJS() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Les bases de Next.js
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Apprenez à créer des applications web modernes avec Next.js
        </p>
      </div>

      <div className="space-y-8">
        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Qu&apos;est-ce que Next.js ?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Next.js est un framework React qui offre des fonctionnalités avancées comme le rendu côté serveur (SSR),
            la génération de sites statiques (SSG), le routage automatique, et bien plus encore.
          </p>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Le Routage</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Next.js utilise un système de routage basé sur les fichiers :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-sm text-gray-300">
                {`app/
  page.tsx         // Route: /
  about/
    page.tsx       // Route: /about
  blog/
    [slug]/
      page.tsx     // Route: /blog/:slug`}
              </pre>
            </div>
            <div className="p-4 bg-blue-500 text-white rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Structure des routes</h3>
              <ul className="space-y-2">
                <li>• / → page.tsx</li>
                <li>• /about → about/page.tsx</li>
                <li>• /blog/[slug] → blog/[slug]/page.tsx</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Les Composants Serveur</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Next.js 13+ introduit les composants serveur par défaut :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-sm text-gray-300">
                {`// Ce composant s'exécute côté serveur
export default async function Page() {
  const data = await fetch('https://api.exemple.com/data');
  const posts = await data.json();

  return (
    <ul className="space-y-2">
      {posts.map(post => (
        <li key={post.id} className="p-2 bg-gray-100 rounded">
          {post.title}
        </li>
      ))}
    </ul>
  );
}`}
              </pre>
            </div>
            <div className="p-4 bg-green-500 text-white rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Résultat</h3>
              <ul className="space-y-2">
                <li className="p-2 bg-green-600 rounded">Article 1</li>
                <li className="p-2 bg-green-600 rounded">Article 2</li>
                <li className="p-2 bg-green-600 rounded">Article 3</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">API Routes</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Créez des API routes directement dans votre application :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-sm text-gray-300">
                {`// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: 'Bonjour !' })
}

export async function POST(request: Request) {
  const body = await request.json()
  return Response.json({ reçu: body })
}`}
              </pre>
            </div>
            <div className="p-4 bg-purple-500 text-white rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Exemple de réponse</h3>
              <pre className="text-sm bg-purple-600 p-2 rounded">
                {`{
  "message": "Bonjour !"
}`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 
import Link from "next/link";

export default function Installation() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Guide d&apos;installation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Installez tous les outils nécessaires pour commencer à développer
        </p>
      </div>

      <div className="space-y-8">
        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Node.js et npm</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Installation de Node.js et npm (gestionnaire de paquets) :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[300px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`# Windows
1. Téléchargez l'installateur depuis nodejs.org
2. Exécutez l'installateur
3. Suivez les instructions d'installation

# macOS
brew install node

# Linux (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Vérification de l'installation
node --version
npm --version`}
              </pre>
            </div>
            <div className="p-8 bg-yellow-500 text-white rounded-lg min-h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Résultat attendu</h3>
              <div className="space-y-4">
                <div className="bg-yellow-600 p-4 rounded font-mono">
                  v20.11.1
                </div>
                <div className="bg-yellow-600 p-4 rounded font-mono">
                  10.2.4
                </div>
              </div>
            </div>
          </div>

          <Link 
            href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm " 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 block mt-5 "
          >
            En savoir plus → 
          </Link>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Git</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Installation de Git pour le contrôle de version :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[250px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`# Windows
1. Téléchargez l'installateur depuis git-scm.com
2. Exécutez l'installateur
3. Suivez les instructions d'installation

# macOS
brew install git

# Linux (Ubuntu/Debian)
sudo apt-get install git

# Vérification de l'installation
git --version`}
              </pre>
            </div>
            <div className="p-8 bg-blue-500 text-white rounded-lg min-h-[250px]">
              <h3 className="text-lg font-semibold mb-2">Résultat attendu</h3>
              <div className="bg-blue-600 p-4 rounded font-mono">
                git version 2.42.0
              </div>
            </div>
          </div>

          <Link 
            href="https://git-scm.com/downloads" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 block mt-5 "
          >
            Lien de téléchargement → 
          </Link>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">GitHub Desktop</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Alternative graphique à Git en ligne de commande. GitHub Desktop offre une interface utilisateur intuitive pour gérer vos dépôts :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[250px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`# Windows/macOS
1. Téléchargez l'installateur depuis desktop.github.com
2. Exécutez l'installateur
3. Connectez-vous à votre compte GitHub

# Cloner un projet avec GitHub Desktop
1. Cliquez sur "File" > "Clone repository"
2. Sélectionnez le dépôt à partir de votre compte
   ou entrez l'URL du dépôt GitHub
3. Choisissez le dossier local de destination
4. Cliquez sur "Clone"`}
              </pre>
            </div>
            <div className="p-8 bg-blue-500 text-white rounded-lg min-h-[250px]">
              <h3 className="text-lg font-semibold mb-2">Principales fonctionnalités</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Interface visuelle pour les commits, branches et push/pull
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Visualisation des changements de fichiers
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gestion simplifiée des conflits de fusion
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ouverture facile dans votre éditeur de code
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-yellow-700 dark:text-yellow-300">Guide rapide d&apos;utilisation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-medium mb-2">Cloner un dépôt</h4>
                <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-400">
                  <li>Cliquez sur &quot;File&quot; &gt; &quot;Clone repository&quot;</li>
                  <li>Sélectionnez le dépôt ou entrez l&apos;URL</li>
                  <li>Choisissez l&apos;emplacement local</li>
                  <li>Cliquez sur &quot;Clone&quot;</li>
                </ol>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-medium mb-2">Faire un commit</h4>
                <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-400">
                  <li>Modifiez des fichiers dans votre projet</li>
                  <li>Cochez les fichiers à inclure dans le commit</li>
                  <li>Ajoutez un titre et une description</li>
                  <li>Cliquez sur &quot;Commit to main&quot;</li>
                </ol>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-medium mb-2">Push vers GitHub</h4>
                <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-400">
                  <li>Après avoir fait un commit</li>
                  <li>Cliquez sur &quot;Push origin&quot;</li>
                  <li>Vérifiez que vos changements apparaissent sur GitHub</li>
                </ol>
              </div>
            </div>
          </div>

          <Link 
            href="https://desktop.github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 block mt-5"
          >
            Télécharger GitHub Desktop →
          </Link>
          
          <Link 
            href="https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 block mt-2"
          >
            Guide officiel GitHub Desktop →
          </Link>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Visual Studio Code</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Installation de l&apos;éditeur de code recommandé :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[200px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`# Windows
1. Téléchargez l'installateur depuis code.visualstudio.com
2. Exécutez l'installateur
3. Suivez les instructions d'installation

# macOS
brew install --cask visual-studio-code

# Linux (Ubuntu/Debian)
sudo snap install --classic code`}
              </pre>
            </div>
            <div className="p-8 bg-green-500 text-white rounded-lg min-h-[200px]">
              <h3 className="text-lg font-semibold mb-2">Extensions recommandées</h3>
              <div className="space-y-4">
                <div className="bg-green-600 p-4 rounded font-mono">
                  ESLint
                </div>
                <div className="bg-green-600 p-4 rounded font-mono">
                  Prettier
                </div>
                <div className="bg-green-600 p-4 rounded font-mono">
                  Tailwind CSS IntelliSense
                </div>
              </div>
            </div>
          </div>

          <Link 
            href="https://code.visualstudio.com/download " 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 block mt-5 "
          >
            Lien de téléchargement → 
          </Link>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Cloner et Configurer un Projet</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Comment cloner et configurer un projet depuis GitHub :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[300px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`# Cloner le projet
git clone https://github.com/17Sx/nom-du-projet.git

# Se déplacer dans le dossier du projet
cd nom-du-projet

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer le fichier .env.local avec vos configurations

# Démarrer le serveur de développement
npm run dev`}
              </pre>
            </div>
            <div className="p-8 bg-purple-500 text-white rounded-lg min-h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Résultat attendu</h3>
              <div className="space-y-4">
                <div className="bg-purple-600 p-4 rounded font-mono">
                  Cloning into &apos;nom-du-projet&apos;...
                </div>
                <div className="bg-purple-600 p-4 rounded font-mono">
                  added 1234 packages in 45s
                </div>
                <div className="bg-purple-600 p-4 rounded font-mono">
                  ready - started server on 0.0.0.0:3000
                </div>
              </div>
            </div>
          </div>

          <Link 
            href="https://www.youtube.com/watch?v=XXCPDzv5p2U  " 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 block mt-5 "
          >
            Vidéo explicative → 
          </Link>
        </section>

        <div className="flex justify-end mt-8">
        <Link 
          href="/a-savoir" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Aller à la page suivante
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      </div>
    </div>
  )
} 
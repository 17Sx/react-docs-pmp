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

# Configurer les variables d&apos;environnement
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
        </section>
      </div>
    </div>
  )
} 
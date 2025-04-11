export default function NodeJS() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Les bases de Node.js
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Apprenez à créer des applications serveur avec Node.js
        </p>
      </div>

      <div className="space-y-8">
        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Installation de Node.js</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Voici comment installer Node.js sur votre système :
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
          <h2 className="text-2xl font-semibold mb-4">Qu&apos;est-ce que Node.js ?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Node.js est un environnement d&apos;exécution JavaScript côté serveur qui permet d&apos;exécuter du code JavaScript
            en dehors du navigateur. Il est basé sur le moteur V8 de Chrome et permet de créer des applications
            web scalables.
          </p>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Modules et NPM</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Node.js utilise un système de modules pour organiser le code :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[200px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`// monModule.js
module.exports = {
  direBonjour: function() {
    console.log('Bonjour !');
  }
};

// index.js
const monModule = require('./monModule');
monModule.direBonjour();`}
              </pre>
            </div>
            <div className="p-8 bg-blue-500 text-white rounded-lg min-h-[200px]">
              <h3 className="text-lg font-semibold mb-2">Résultat dans la console</h3>
              <div className="bg-blue-600 p-4 rounded font-mono">
                Bonjour !
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Système de fichiers</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Node.js permet de manipuler les fichiers facilement :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[250px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`const fs = require('fs');

// Lecture d'un fichier
fs.readFile('fichier.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Écriture dans un fichier
fs.writeFile('nouveau.txt', 'Contenu', (err) => {
  if (err) throw err;
  console.log('Fichier créé !');
});`}
              </pre>
            </div>
            <div className="p-8 bg-green-500 text-white rounded-lg min-h-[250px]">
              <h3 className="text-lg font-semibold mb-2">Résultat</h3>
              <div className="space-y-4">
                <div className="bg-green-600 p-4 rounded font-mono">
                  Contenu du fichier
                </div>
                <div className="bg-green-600 p-4 rounded font-mono">
                  Fichier créé !
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Serveur HTTP</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Créez un serveur web simple avec Node.js :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg min-h-[300px]">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`const http = require('http');

const serveur = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Bonjour depuis le serveur Node.js !');
});

serveur.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});`}
              </pre>
            </div>
            <div className="p-8 bg-purple-500 text-white rounded-lg min-h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Résultat</h3>
              <div className="space-y-4">
                <div className="bg-purple-600 p-4 rounded font-mono">
                  Serveur démarré sur le port 3000
                </div>
                <div className="bg-purple-600 p-4 rounded font-mono">
                  Bonjour depuis le serveur Node.js !
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Configuration Système</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Configuration des différents aspects d&apos;une application Node.js :
          </p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-8 rounded-lg min-h-[300px]">
                <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                  {`// Configuration de la base de données
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mon-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware d'authentification
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Accès refusé');
  
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Token invalide');
  }
};

// Configuration des routes
const express = require('express');
const router = express.Router();

router.post('/upload', 
  multer({ 
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB
  }).single('file'),
  (req, res) => {
    // Gestion du fichier uploadé
  }
);

// Utils
const crypto = require('crypto');

const generateToken = () => {
  return crypto.randomBytes(32).toString('hex');
};`}
                </pre>
              </div>
              <div className="p-8 bg-indigo-500 text-white rounded-lg min-h-[300px]">
                <h3 className="text-lg font-semibold mb-2">Fonctionnalités</h3>
                <div className="space-y-4">
                  <div className="bg-indigo-600 p-4 rounded">
                    <h4 className="font-semibold mb-2">Base de données</h4>
                    <p className="text-sm">Connexion à MongoDB avec Mongoose</p>
                  </div>
                  <div className="bg-indigo-600 p-4 rounded">
                    <h4 className="font-semibold mb-2">Middleware</h4>
                    <p className="text-sm">Authentification avec JWT</p>
                  </div>
                  <div className="bg-indigo-600 p-4 rounded">
                    <h4 className="font-semibold mb-2">Routes</h4>
                    <p className="text-sm">Upload de fichiers avec limite de taille</p>
                  </div>
                  <div className="bg-indigo-600 p-4 rounded">
                    <h4 className="font-semibold mb-2">Utils</h4>
                    <p className="text-sm">Génération de tokens sécurisés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 
import Link from "next/link";
import { Metadata } from 'next';
import CodeEditor from "../components/CodeEditor";

export const metadata: Metadata = {
  title: 'TypeScript Documentation | PMP',
  description: 'Documentation sur TypeScript pour le projet PMP',
};

export default function TypeScript() {
  return (
    <div className="w-full space-y-12">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          TypeScript
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Apprenez les concepts fondamentaux de TypeScript pour un développement plus robuste
        </p>
      </div>

      <div className="w-full space-y-8">
        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Qu&apos;est-ce que TypeScript ?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            TypeScript est un sur-ensemble typé de JavaScript qui se compile en JavaScript simple. 
            Il ajoute des types statiques optionnels à JavaScript, ce qui permet de détecter les erreurs 
            plus tôt dans le processus de développement.
          </p>
          <a 
            href="https://www.typescriptlang.org/docs/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Documentation officielle TypeScript →
          </a>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Types de base</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Voici les types de base en TypeScript :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-sm text-gray-300">
                {`// Types primitifs
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;

// Tableaux
let numbers: number[] = [1, 2, 3];
let names: string[] = ["John", "Jane"];

// Tuples
let person: [string, number] = ["John", 30];

// Objets
interface User {
  name: string;
  age: number;
  isActive?: boolean; // Propriété optionnelle
}

const user: User = {
  name: "John",
  age: 30
};`}
              </pre>
            </div>
            <div className="p-4 bg-blue-500 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-4">Exemple d&apos;utilisation</h3>
              <p>Les types permettent de :</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Détecter les erreurs à la compilation</li>
                <li>Améliorer l&apos;autocomplétion</li>
                <li>Documenter le code</li>
                <li>Faciliter le refactoring</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Essayez par vous-même !</h3>
            <CodeEditor 
              initialCode={`// Expérimentez avec différents types TypeScript
// (Ce code est une simulation car TypeScript est normalement compilé)

// Définir des variables de différents types
let nom = "Alice";
let age = 30;
let estActif = true;

// Créer un objet structuré
const utilisateur = {
  nom: nom,
  age: age,
  estActif: estActif
};

// En JavaScript normal, les vérifications de type se font à l'exécution
function verifierType(valeur) {
  return typeof valeur;
}

// Afficher les résultats
return "Nom: " + nom + " (" + verifierType(nom) + ")\\n" +
       "Âge: " + age + " (" + verifierType(age) + ")\\n" +
       "Actif: " + estActif + " (" + verifierType(estActif) + ")\\n" +
       "Utilisateur: " + JSON.stringify(utilisateur);`} 
              language="javascript" 
              title="Explorer les types de base" 
            />
          </div>
          <a 
            href="https://www.typescriptlang.org/docs/handbook/basic-types.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mt-4 block"
          >
            Documentation sur les types de base →
          </a>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Fonctions</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Les fonctions en TypeScript peuvent être typées de plusieurs manières :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-sm text-gray-300">
                {`// Fonction avec types
function add(a: number, b: number): number {
  return a + b;
}

// Fonction fléchée
const multiply = (a: number, b: number): number => a * b;

// Fonction avec paramètres optionnels
function greet(name: string, greeting?: string): string {
  return \`\${greeting || &apos;Hello&apos;} \${name}\`;
}`}
              </pre>
            </div>
            <div className="p-4 bg-green-500 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-4">Avantages</h3>
              <ul className="list-disc pl-6">
                <li>Types de retour explicites</li>
                <li>Paramètres typés</li>
                <li>Paramètres optionnels</li>
                <li>Meilleure documentation</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Essayez par vous-même !</h3>
            <CodeEditor 
              initialCode={`// Essayez différentes fonctions avec validation de type
// (Version JavaScript simplifiée)

// Fonction qui vérifie si l'argument est un nombre
function estNombre(valeur) {
  return typeof valeur === 'number' && !isNaN(valeur);
}

// Fonction d'addition avec vérification de type
function addition(a, b) {
  // Vérification des types (similaire à TypeScript)
  if (!estNombre(a) || !estNombre(b)) {
    return "Erreur: Les deux arguments doivent être des nombres";
  }
  return a + b;
}

// Fonction avec paramètre optionnel
function saluer(nom, salutation = "Bonjour") {
  return salutation + " " + nom + " !";
}

// Test des fonctions
const resultat1 = addition(5, 3);
const resultat2 = addition("5", 3);
const resultat3 = saluer("Alice");
const resultat4 = saluer("Bob", "Salut");

// Afficher les résultats
return "Addition(5, 3): " + resultat1 + "\\n" +
       "Addition('5', 3): " + resultat2 + "\\n" +
       "Saluer('Alice'): " + resultat3 + "\\n" +
       "Saluer('Bob', 'Salut'): " + resultat4;`} 
              language="javascript" 
              title="Expérimenter avec les fonctions typées" 
            />
          </div>
          <a 
            href="https://www.typescriptlang.org/docs/handbook/functions.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mt-4 block"
          >
            Documentation sur les fonctions →
          </a>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Génériques</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Les génériques permettent de créer des composants réutilisables :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-sm text-gray-300">
                {`// Fonction générique
function identity<T>(arg: T): T {
  return arg;
}

// Interface générique
interface Response<T> {
  data: T;
  status: number;
}

// Classe générique
class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}`}
              </pre>
            </div>
            <div className="p-4 bg-purple-500 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cas d&apos;utilisation</h3>
              <ul className="list-disc pl-6">
                <li>Fonctions réutilisables</li>
                <li>Conteneurs de données</li>
                <li>APIs génériques</li>
                <li>Composants React réutilisables</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Essayez par vous-même !</h3>
            <CodeEditor 
              initialCode={`// Simulons des génériques en JavaScript
// (Version simplifiée du concept de génériques)

// Fonction "générique" qui retourne son argument
function identite(arg) {
  return arg;
}

// Classe "générique" qui encapsule une valeur
class Conteneur {
  constructor(valeur) {
    this.valeur = valeur;
  }
  
  getValeur() {
    return this.valeur;
  }
  
  setValeur(nouvelleValeur) {
    this.valeur = nouvelleValeur;
    return this;
  }
}

// Créer un conteneur de nombre
const conteneurNombre = new Conteneur(42);

// Créer un conteneur de chaîne
const conteneurChaine = new Conteneur("Hello");

// Créer un conteneur d'objet
const conteneurObjet = new Conteneur({ id: 1, nom: "Alice" });

// Afficher les résultats
return "Identité(42): " + identite(42) + "\\n" +
       "Identité('Hello'): " + identite("Hello") + "\\n" +
       "Conteneur nombre: " + conteneurNombre.getValeur() + "\\n" +
       "Conteneur chaîne: " + conteneurChaine.getValeur() + "\\n" +
       "Conteneur objet: " + JSON.stringify(conteneurObjet.getValeur());`} 
              language="javascript" 
              title="Explorer le concept de génériques" 
            />
          </div>
          <a 
            href="https://www.typescriptlang.org/docs/handbook/generics.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mt-4 block"
          >
            Documentation sur les génériques →
          </a>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Utilisation avec React</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            TypeScript apporte une grande valeur à React :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-sm text-gray-300">
                {`// Composant fonctionnel avec props typées
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// Hook personnalisé typé
function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}`}
              </pre>
            </div>
            <div className="p-4 bg-red-500 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-4">Bénéfices</h3>
              <ul className="list-disc pl-6">
                <li>Props typées</li>
                <li>Hooks typés</li>
                <li>Meilleure autocomplétion</li>
                <li>Détection précoce des erreurs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Documentation complète</h2>
          <div className="mt-4 space-y-2">
            <a 
              href="https://www.typescriptlang.org/docs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 block"
            >
              Documentation officielle TypeScript →
            </a>
            <a 
              href="https://react.dev/learn/typescript" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 block"
            >
              TypeScript avec React →
            </a>
            <a 
              href="https://www.typescriptlang.org/play" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 block"
            >
              TypeScript Playground →
            </a>
          </div>
        </section>
      </div>
      
      <div className="flex justify-end mt-8">
        <Link 
          href="/prisma" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Aller à la page suivante
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 
'use client';

import React, { useState } from 'react';

interface CodeEditorProps {
  initialCode: string;
  language: 'javascript' | 'jsx' | 'html' | 'css' | 'typescript';
  title?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode,
  language,
  title = 'Exemple interactif'
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const executeCode = () => {
    setError(null);
    setOutput('');
    
    try {
      if (language === 'javascript') {
        const executionFunction = new Function('setOutput', `
          try {
            const result = (function() { 
              ${code}
            })();
            setOutput(typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result));
          } catch (e) {
            throw e;
          }
        `);
        
        executionFunction(setOutput);
      } else if (language === 'jsx' || language === 'html') {
        setOutput("Aperçu interactif du code JSX/HTML n'est pas disponible dans cette démo");
      } else {
        setOutput(`L'exécution du code ${language} n'est pas encore prise en charge.`);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setError(null);
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
      {title && (
        <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-800">
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="bg-gray-900 p-4">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={10}
            className="w-full bg-gray-900 text-gray-300 font-mono text-sm p-2 focus:outline-none border border-gray-700 rounded-md"
            spellCheck="false"
          />
          
          <div className="flex space-x-2 mt-2">
            <button
              onClick={executeCode}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
            >
              Exécuter
            </button>
            <button
              onClick={resetCode}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors text-sm"
            >
              Réinitialiser
            </button>
          </div>
        </div>
        
        <div className="bg-gray-800 p-4">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Résultat:</h4>
          {error ? (
            <div className="text-red-400 font-mono text-sm whitespace-pre-wrap p-2 border border-red-500 rounded-md bg-red-900/20">
              {error}
            </div>
          ) : output ? (
            <div className="text-green-400 font-mono text-sm whitespace-pre-wrap p-2 border border-green-500 rounded-md bg-green-900/20">
              {output}
            </div>
          ) : (
            <div className="text-gray-400 font-mono text-sm p-2">
              Cliquez sur &quot;Exécuter&quot; pour voir le résultat du code
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor; 
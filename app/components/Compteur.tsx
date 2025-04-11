'use client';

import { useState } from 'react';

export default function Compteur() {
  const [compte, setCompte] = useState(0);

  return (
    <div className="p-4 bg-purple-500 text-white rounded-lg">
      <p className="text-xl">Compteur : {compte}</p>
      <button 
        onClick={() => setCompte(compte + 1)}
        className="mt-2 px-4 py-2 bg-white text-purple-500 rounded hover:bg-purple-100 transition-colors"
      >
        Incrémenter
      </button>
    </div>
  );
} 
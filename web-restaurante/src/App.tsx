// src/App.tsx
import React from 'react';
import Header from './components/Header'; // Importa el nuevo componente
import './index.css'; // Asegúrate de que tu CSS principal esté importado

const App: React.FC = () => {
  return (
    // <React.Fragment> o simplemente <>
    <>
      <Header />
      
      {/* Contenido principal de la página, por ejemplo, una sección Hero */}
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-700">¡Bienvenidos al Restaurante!</h1>
      </main>
    </>
  );
};

export default App;
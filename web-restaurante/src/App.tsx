// src/App.tsx
import React from 'react';
import Header from './components/Header'; 
import HeroSection from './components/HeroSection'; 
import FeaturedSection from './components/FeaturedSection'; // ¡Nuevo!
import CtaSection from './components/CtaSection';         // ¡Nuevo!
import Footer from './components/Footer';                 // ¡Nuevo!
import './index.css'; 

const App: React.FC = () => {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection />
        
        {/* 1. SECCIÓN DE ESPECIALIDADES */}
        <FeaturedSection />
        
        {/* 2. BLOQUE DE LLAMADA A LA ACCIÓN */}
        <CtaSection />
        
        {/* Aquí puedes añadir más secciones, como Testimonios o Sobre Nosotros */}
      </main>
      
      {/* 3. PIE DE PÁGINA */}
      <Footer />
    </>
  );
};

export default App;
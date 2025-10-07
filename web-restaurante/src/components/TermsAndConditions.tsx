// src/pages/TermsAndConditions.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TermsAndConditionsContent from '../components/TermsAndConditionsContent';


const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Contenido de los Términos y Condiciones */}
        <TermsAndConditionsContent />
      </main>
      
      <Footer />
    </>
  );
};

export default TermsAndConditions;
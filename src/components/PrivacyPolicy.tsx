// src/pages/PrivacyPolicy.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrivacyPolicyContent from '../components/PrivacyPolicyContent'; 

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Contenido de la Política de Privacidad */}
        <PrivacyPolicyContent />
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
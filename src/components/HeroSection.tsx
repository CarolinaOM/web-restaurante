// src/components/HeroSection.tsx
import React from 'react';
import logoCupcake from '../assets/logo.png'; 

const HeroSection: React.FC = () => {
  const buttonBaseBg = 'bg-pink-600';     
  const buttonHoverBg = 'hover:bg-pink-700'; 
  const fuchsiaAccent = 'text-fuchsia-700'; 

  return (
    <section 
      className="relative h-[45vh] md:h-[55vh] bg-pink-50 flex items-center justify-center p-2" 
    >
      {/* CONTENIDO PRINCIPAL CENTRADO */}
      <div className="relative z-10 text-center max-w-4xl w-full">
        
        {/* LOGO DE CUPCAKE CENTRAL */}
        <img 
          src={logoCupcake} 
          alt="MacarmiDeli Logo Cupcake" 
          className="mx-auto h-40 md:h-52 mb-1" 
        />
        
        {/* TÍTULO PRINCIPAL */}
        <h1 
          className={`text-4xl md:text-6xl font-extrabold mb-2 leading-tight ${fuchsiaAccent}`}
        > 
          El Dulce Arte de la Felicidad
        </h1>
        
        {/* SUBTÍTULO */}
        <p className="text-sm md:text-lg text-gray-700 mb-4"> 
          Descubre nuestra exquisita pastelería, postres artesanales y delicias que endulzan el alma.
        </p>
        
        {/* BOTÓN DE EXPLORAR POSTRES */}
        <a 
          href="/menu" 
          className={`inline-block px-6 py-2 text-md font-bold uppercase tracking-wider rounded-full transition duration-300 shadow-xl 
                    ${buttonBaseBg} ${buttonHoverBg} text-white transform hover:scale-105`}
        >
          EXPLORAR NUESTROS POSTRES
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
// src/components/Header.tsx
import React, { useState } from 'react';
import logoImage from '../assets/logo.png'; 

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Colores de marca unificados (Rosa/Fucsia)
  const hoverColor = 'hover:text-pink-700';    
  const buttonBaseBg = 'bg-pink-600';     
  const buttonHoverBg = 'hover:bg-pink-700'; 

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Menú', href: '/menu' },
    { name: 'Galería', href: '/galeria' },
    { name: 'Ubicación/Contacto', href: '/contacto' },
    { name: 'Reservas', href: '/reservas', isMobileButton: true }, 
  ];

  return (
    // CLAVE: Usamos bg-pink-50 para que el fondo coincida con la Sección Hero
    <header className="bg-pink-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32"> 
          
          {/* LOGO DEL RESTAURANTE (IMAGEN) */}
          <a href="/" className="flex items-center space-x-2">
            <img 
              src={logoImage} 
              alt="MacarmiDeli Logo" 
              className="h-28 w-auto" 
            />
            <span className="sr-only">MacarmiDeli</span> 
          </a>

          {/* ENLACES A SECCIONES (Escritorio) */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.filter(link => !link.isMobileButton).map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-gray-600 ${hoverColor} transition duration-300 font-medium text-lg`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* BOTÓN DE RESERVAS (ESCRITORIO) Y BOTÓN HAMBURGUESA (MÓVIL) */}
          <div className="flex items-center">
            {/* Botón de "Reservar una Mesa" */}
            <a 
              href="/reservas" 
              className={`hidden md:block ${buttonBaseBg} ${buttonHoverBg} text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow-lg text-sm`}
            >
              Reservas
            </a>

            {/* Menú Hamburguesa para Móviles */}
            <button 
              className={`md:hidden p-2 text-gray-600 ${hoverColor} ml-4`} 
              aria-label="Toggle Menu"
              onClick={() => setIsOpen(!isOpen)} 
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* MENÚ DESPLEGABLE MÓVIL */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200 shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition duration-150 ${
                link.isMobileButton 
                  ? `${buttonBaseBg} text-white ${buttonHoverBg} text-center mt-2` 
                  : `text-gray-700 hover:bg-pink-100 ${hoverColor}` 
              }`}
              onClick={() => setIsOpen(false)} 
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
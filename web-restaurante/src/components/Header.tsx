// src/components/Header.tsx
import React, { useState } from 'react';
import logoImage from '../assets/logo.png'; // Asegúrate de que este path sea correcto

const Header: React.FC = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Enlaces de navegación. Añadimos 'Reservas' con una marca especial para el menú móvil
  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Menú', href: '/menu' },
    { name: 'Galería', href: '/galeria' },
    { name: 'Ubicación/Contacto', href: '/contacto' },
    { name: 'Reservas', href: '/reservas', isMobileButton: true }, 
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO DEL RESTAURANTE (IMAGEN) */}
          <a href="/" className="flex items-center space-x-2">
            <img 
              src={logoImage} 
              alt="MacarmiDeli Logo" 
              className="h-20 w-auto" // ALTURA AUMENTADA para hacerlo más grande (puedes probar h-16, h-24, etc.)
            />
            {/* Texto auxiliar de SEO para accesibilidad */}
            <span className="sr-only">MacarmiDeli</span> 
          </a>

          {/* ENLACES A SECCIONES (Sólo visibles en escritorio: md:flex) */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.filter(link => !link.isMobileButton).map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-red-600 transition duration-300 font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* BOTÓN DE RESERVAS (ESCRITORIO) Y BOTÓN HAMBURGUESA (MÓVIL) */}
          <div className="flex items-center">
            {/* Botón de "Reservar una Mesa" (Sólo visible en escritorio) */}
            <a 
              href="/reservas" 
              className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow-lg text-sm"
            >
              Reservas
            </a>

            {/* Menú Hamburguesa para Móviles (Visible sólo en móvil) */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-red-600 ml-4" 
              aria-label="Toggle Menu"
              onClick={() => setIsOpen(!isOpen)} // Alterna el estado al hacer click
            >
              {/* Ícono de Hamburguesa (X o Hamburguesa) */}
              {isOpen ? (
                // Ícono de la X (Menú Abierto)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                // Ícono de Hamburguesa (Menú Cerrado)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* MENÚ DESPLEGABLE MÓVIL */}
      {/* La clase 'hidden' u 'block' es controlada por el estado 'isOpen' */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-50 border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-red-100 hover:text-red-600 ${link.isMobileButton ? 'bg-red-600 text-white hover:bg-red-700 text-center mt-2' : ''}`}
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
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
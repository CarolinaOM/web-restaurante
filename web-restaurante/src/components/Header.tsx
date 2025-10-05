// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  // 1. Enlaces a secciones (los haremos fijos por ahora)
  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Menú', href: '/menu' },
    { name: 'Galería', href: '/galeria' },
    { name: 'Ubicación/Contacto', href: '/contacto' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO DEL RESTAURANTE */}
          <a href="/" className="text-2xl font-serif font-bold text-gray-800 tracking-wider">
            [LOGO] El Rincón de Caro
          </a>

          {/* ENLACES A SECCIONES (Sólo visibles en escritorio) */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-red-600 transition duration-300 font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* BOTÓN DE RESERVAS Y MENÚ MÓVIL (Por ahora solo el botón) */}
          <div className="flex items-center">
            {/* Botón de "Reservar una Mesa" */}
            <a 
              href="/reservas" 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow-lg text-sm"
            >
              Reservas
            </a>

            {/* Menú Hamburguesa para Móviles (Se implementará después) */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-red-600 ml-4" 
              aria-label="Toggle Menu"
            >
              {/* Aquí irá un ícono de hamburguesa */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
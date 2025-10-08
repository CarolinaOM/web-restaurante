// src/App.tsx (CÓDIGO FINAL DE ENRUTAMIENTO COMPLETO)

import React, { useEffect, useState } from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer'; 

// Importación de Componentes de la HOME (si los usas, son solo para la página principal)
import HeroSection from './components/HeroSection'; 
import FeaturedSection from './components/FeaturedSection'; 
import CtaSection from './components/CtaSection'; 

// Importación de Páginas Completas (con Header y Footer internos)
import Pedidos from './components/Pedidos';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact'; // ⬅️ ¡AÑADIDO!
import PrivacyPolicy from './components/PrivacyPolicy'; 
import TermsAndConditions from './components/TermsAndConditions'; 

import './index.css'; 


// -----------------------------------------------------------
// Componente Local para el Contenido COMPLETO de la Página de Inicio (Home)
// Las páginas internas (Menu, Pedidos, Gallery, Contact) tienen su propio Header y Footer.
const HomePageContent: React.FC = () => (
     <>
          <Header />
               <main>
                    <HeroSection />
                    <FeaturedSection />
                    <CtaSection />
               </main>
          <Footer />
     </>
);
// -----------------------------------------------------------

// Obtiene la ruta actual de la URL
const getCurrentPath = () => window.location.pathname;

const App: React.FC = () => {
    const [currentPath, setCurrentPath] = useState(getCurrentPath());
     
    // Función de navegación interna (simula la navegación SPA)
    const navigate = (path: string) => {
         window.history.pushState({}, '', path);
         setCurrentPath(path);
         window.scrollTo(0, 0); 
     };

     useEffect(() => {
         // Lógica para interceptar clics en <a> y usar la función 'navigate'
         const handleAnchorClick = (e: MouseEvent) => {
             const target = e.target as HTMLAnchorElement;
             const targetPath = target.getAttribute('href');
             
             // Solo navega internamente si el enlace empieza con '/' y no es un mailto
             if (targetPath && targetPath.startsWith('/') && !targetPath.startsWith('mailto:')) {
                 e.preventDefault();
                 navigate(targetPath);
             }
         };

         // Lógica para manejar los botones de 'atrás'/'adelante' del navegador
         const handlePopState = () => setCurrentPath(getCurrentPath());

         document.addEventListener('click', handleAnchorClick);
         window.addEventListener('popstate', handlePopState);

         return () => {
             document.removeEventListener('click', handleAnchorClick);
             window.removeEventListener('popstate', handlePopState);
         };
    }, []);

    let ComponentToRender; 
    
    // 🔑 LÓGICA DE ENRUTAMIENTO FINAL:
    if (currentPath === '/pedidos') { 
        ComponentToRender = Pedidos;
    } else if (currentPath === '/menu') {
        ComponentToRender = Menu;
    } else if (currentPath === '/galeria') {
        ComponentToRender = Gallery;
    } else if (currentPath === '/contacto') { // ⬅️ RUTA DE CONTACTO
        ComponentToRender = Contact;
    } else if (currentPath === '/privacidad') {
        ComponentToRender = PrivacyPolicy;
    } else if (currentPath === '/terminos') {
        ComponentToRender = TermsAndConditions; 
    } else {
        // Por defecto, renderiza la página de inicio completa (HomePageContent)
        ComponentToRender = HomePageContent; 
    }

    return (
        // Renderiza el componente de página seleccionado
        <ComponentToRender />
    );
};

export default App;
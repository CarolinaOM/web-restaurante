// src/App.tsx (CÓDIGO FINAL DE ENRUTAMIENTO CONSISTENTE)

import React, { useEffect, useState } from 'react';
import Header from './components/Header'; 
import HeroSection from './components/HeroSection'; 
import FeaturedSection from './components/FeaturedSection'; 
import CtaSection from './components/CtaSection'; 
import Footer from './components/Footer'; 
import PrivacyPolicy from './components/PrivacyPolicy'; 
import TermsAndConditions from './components/TermsAndConditions'; 
import './index.css'; 
import Pedidos from './components/Pedidos';
// import FloatingCta from './components/FloatingCta'; 
import Gallery from './components/Gallery';
import Menu from './components/Menu'; // Asegúrate de que Menu esté importado

// Componente Local para el Contenido COMPLETO de la Página de Inicio (Header + Main + Footer)
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

// Obtiene la ruta actual 
const getCurrentPath = () => window.location.pathname;

const App: React.FC = () => {
     const [currentPath, setCurrentPath] = useState(getCurrentPath());
      const navigate = (path: string) => {
         window.history.pushState({}, '', path);
         setCurrentPath(path);
         window.scrollTo(0, 0); 
     };

     useEffect(() => {
        // Lógica para la navegación manual... (sin cambios)
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLAnchorElement;
            const targetPath = target.getAttribute('href');
            if (targetPath && targetPath.startsWith('/') && !targetPath.startsWith('mailto:')) {
                e.preventDefault();
                navigate(targetPath);
             }
        };

        const handlePopState = () => setCurrentPath(getCurrentPath());

        document.addEventListener('click', handleAnchorClick);
        window.addEventListener('popstate', handlePopState);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    let ComponentToRender; 
    
    // 🔑 LÓGICA DE ENRUTAMIENTO: Ahora las páginas internas se renderizan solas.
    if (currentPath === '/pedidos') { 
       ComponentToRender = Pedidos;
    } else if (currentPath === '/menu') { // ⬅️ AÑADIDO: Renderiza el Menu
       ComponentToRender = Menu;
    } else if (currentPath === '/privacidad') {
        ComponentToRender = PrivacyPolicy;
    } else if (currentPath === '/terminos') {
          ComponentToRender = TermsAndConditions; 
   } else {
          ComponentToRender = HomePageContent; // Usa la Home COMPLETA
   }

    return (
         <> 
            {/* Solo renderizamos el componente seleccionado. 
                Si ComponentToRender (Menu, Pedidos, Home) incluye su propia estructura, 
                el problema de duplicación desaparece. */}
            <ComponentToRender />
         </>
   );
};

export default App;
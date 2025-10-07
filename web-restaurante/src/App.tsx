// src/App.tsx
import React, { useEffect, useState } from 'react';
import Header from './components/Header'; 
import HeroSection from './components/HeroSection'; 
import FeaturedSection from './components/FeaturedSection'; 
import CtaSection from './components/CtaSection'; 
import Footer from './components/Footer'; 
import PrivacyPolicy from './components/PrivacyPolicy'; 
import TermsAndConditions from './components/TermsAndConditions'; // ¡NUEVO: Importamos la página T&C!
import './index.css'; 

// -----------------------------------------------------------
// Componente Local para el Contenido de la Página de Inicio
// Este es el contenido de tu antigua App.tsx
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

// Obtiene la ruta actual (ej: '/', '/privacidad', '/terminos')
const getCurrentPath = () => window.location.pathname;

const App: React.FC = () => {
    const [currentPath, setCurrentPath] = useState(getCurrentPath());
    
    const navigate = (path: string) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
        window.scrollTo(0, 0); 
    };
    
    useEffect(() => {
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

    // Lógica de Renderizado: Decide qué componente mostrar
    let ComponentToRender;
    
    if (currentPath === '/privacidad') {
        ComponentToRender = PrivacyPolicy;
    } else if (currentPath === '/terminos') {
        // ¡NUEVO: Renderizamos la página de Términos!
        ComponentToRender = TermsAndConditions; 
    } else {
        // Para cualquier otra ruta (Home)
        ComponentToRender = HomePageContent;
    }

   return (
     <ComponentToRender />
   );
};

export default App;
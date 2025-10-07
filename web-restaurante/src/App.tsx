// src/App.tsx (Código Final Corregido)
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
import FloatingCta from './components/FloatingCta'; 
import Gallery from './components/Gallery';


// -----------------------------------------------------------
// Componente Local para el Contenido de la Página de Inicio
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
     if (currentPath === '/pedidos') { 
       ComponentToRender = Pedidos;
     } else if (currentPath === '/privacidad') {
         ComponentToRender = PrivacyPolicy;
     } else if (currentPath === '/terminos') {
         ComponentToRender = TermsAndConditions; 
   } else {
         // Para cualquier otra ruta (Home)
         ComponentToRender = HomePageContent;
    }

    return (
        <> {/* CLAVE: Usamos Fragmento para agrupar */}
            <ComponentToRender />
            <FloatingCta /> {/* CLAVE: El botón flotante se renderiza aquí */}
        </>
   );
};

export default App;
// src/components/FloatingCta.tsx
import React from 'react';

const FloatingCta: React.FC = () => {
    // URL de WhatsApp para iniciar un chat 
    const whatsappUrl = "https://wa.me/600123456"; 
    const buttonBaseBg = 'bg-pink-600'; 
    const buttonHoverBg = 'hover:bg-pink-700'; 

    return (
        // Contenedor fijo en la esquina inferior derecha
        <div className="fixed bottom-6 right-6 z-50">
            <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-center 
                            ${buttonBaseBg} ${buttonHoverBg} 
                            text-white 
                            font-bold 
                            py-3 px-3 
                            rounded-full 
                            shadow-xl 
                            transition duration-300 
                            transform hover:scale-105`}
                aria-label="Contactar por WhatsApp para hacer un pedido"
            >
                {/* Ícono de WhatsApp (SVG) */}
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.77.47 3.45 1.37 4.9L2 22l5.24-1.39c1.45.82 3.12 1.25 4.8 1.25 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.74 15.22c-.22.61-.83 1.27-1.42 1.34-.55.07-1.42.02-2.31-.56-.98-.65-2.22-1.85-3.17-3.32-.95-1.48-1.04-3.08-.43-3.69.54-.54 1.25-.92 1.54-.73.28.19.46.59.62.94.18.39.38.83.54.99.16.16.27.34.46.58.19.24.44.52.75.75.31.24.63.49.97.74.34.25.75.52 1.18.59.43.07.87.03 1.25-.13.38-.17.65-.45.92-.73.27-.27.5-.5.75-.75.25-.25.5-.47.76-.7.26-.23.51-.43.83-.55.32-.12.63-.16.94-.09.3.06.63.16.94.33.31.17.59.45.83.75.24.3.44.6.6.9.16.3.26.65.33 1.05.07.4-.04.77-.26 1.15z"/>
                </svg>
            </a>
        </div>
    );
};

export default FloatingCta;
// src/components/CtaSection.tsx
import React from 'react';

const CtaSection: React.FC = () => {
    // Colores de marca unificados
    const buttonBaseBg = 'bg-white';     
    const buttonBaseText = 'text-pink-600';
    const buttonHoverBg = 'hover:bg-gray-100'; 
    const fuchsiaBg = 'bg-fuchsia-700';

    return (
        <section className={`py-20 text-center ${fuchsiaBg}`}>
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    ¿Listo para Endulzar tu Día?
                </h2>
                <p className="text-xl text-pink-100 mb-8">
                    Visítanos hoy mismo en nuestra ubicación o reserva tu mesa para un momento especial.
                </p>
                
                <a 
                    href="/reservas" 
                    className={`inline-block px-10 py-3 text-lg font-bold uppercase tracking-wider rounded-full transition duration-300 shadow-xl 
                              ${buttonBaseBg} ${buttonBaseText} ${buttonHoverBg} transform hover:scale-105`}
                >
                    Ver Ubicación y Reservar
                </a>
            </div>
        </section>
    );
};

export default CtaSection;
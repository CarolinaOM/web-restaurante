// src/components/CallToAction.tsx
import React from 'react';

const CallToAction: React.FC = () => {
    const fuchsiaAccent = 'text-fuchsia-700';
    const pinkBg = 'bg-pink-600';
    const hoverBg = 'hover:bg-pink-700';

    return (
        <section className="py-20 md:py-32 bg-pink-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                
                {/* Título y Subtítulo */}
                <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${fuchsiaAccent}`}>
                    ¿Listo para Endulzar tu Día?
                </h2>
                <p className="text-xl text-gray-700 mb-10">
                    Desde un antojo rápido hasta el pastel de tu próximo gran evento. ¡La felicidad está a un clic de distancia!
                </p>
                
                {/* Botones de Acción */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    
                    {/* Botón Principal (Menú) */}
                    <a 
                        href="/menu" 
                        className={`inline-block px-10 py-3 text-lg font-bold rounded-full text-white shadow-xl transition duration-300 ${pinkBg} ${hoverBg}`}
                    >
                        Explorar Menú Completo
                    </a>
                    
                    {/* Botón Secundario (Contacto/Pedido Especial) */}
                    <a 
                        href="/contacto" 
                        className={`inline-block px-10 py-3 text-lg font-bold rounded-full ${fuchsiaAccent} bg-white border-2 border-fuchsia-700 transition duration-300 hover:bg-fuchsia-50`}
                    >
                        Pedir un Encargo Personalizado
                    </a>
                </div>

            </div>
        </section>
    );
};

export default CallToAction;
// src/components/Menu.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Menu: React.FC = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-4xl text-fuchsia-700 font-bold mb-8 text-center">Nuestro Menú Completo</h1>
                    
                    {/* Placeholder para la futura sección del menú */}
                    <div className="mt-10 p-8 bg-white border-l-4 border-fuchsia-400 rounded-lg shadow-md text-center">
                        <p className="text-xl font-semibold text-gray-800 mb-4">¡Diseñaremos aquí todas nuestras categorías!</p>
                        <p className="text-gray-600">Incluiremos Macarons, Tartas, Cupcakes y Postres de Temporada con sus precios y descripciones.</p>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
};

export default Menu;
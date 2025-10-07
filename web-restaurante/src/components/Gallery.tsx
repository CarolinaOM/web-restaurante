// src/components/Gallery.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Gallery: React.FC = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-4xl text-fuchsia-700 font-bold mb-8 text-center">Nuestra Galería de Dulces</h1>
                    
                    {/* Placeholder para la futura sección de la galería */}
                    <div className="mt-10 p-8 bg-pink-50 border-l-4 border-fuchsia-400 rounded-lg shadow-md text-center">
                        <p className="text-xl font-semibold text-gray-800 mb-4">¡Aquí mostraremos todas nuestras hermosas creaciones!</p>
                        <p className="text-gray-600">Usaremos esta sección para mostrar fotos de nuestros mejores macarons, tartas personalizadas y cupcakes.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Gallery;
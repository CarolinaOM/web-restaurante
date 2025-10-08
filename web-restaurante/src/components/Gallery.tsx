// src/components/Gallery.tsx

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import cupcakeImage from '../assets/cupcake.png'; 
import rosquetesImage from '../assets/rosquetes.png'; 
import golfeadoImage from '../assets/golfeado.png';

const galleryImages = [
    { src: cupcakeImage, alt: "Delicioso Cupcake", category: "Cupcakes" }, 
    { src: rosquetesImage, alt: "Rosquetes Caseros", category: "Panadería" }, 
    { src: golfeadoImage, alt: "Golfeado Esponjoso", category: "Panadería" },
];


const Gallery: React.FC = () => {
    return (
        <>
            <Header />

            <div className="bg-pink-50 min-h-screen py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Título y Subtítulo */}
                    <header className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-fuchsia-700 mb-4">
                            Nuestra Galería de Postres
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Una muestra visual de la calidad y el arte que ponemos en cada bocado.
                        </p>
                    </header>

                    {/* CUADRÍCULA DE IMÁGENES (Gallery Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300 group cursor-pointer"
                            >
                                {/* Contenedor de la Imagen con Efecto Hover */}
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={image.src} // <-- ¡Usando tu archivo importado!
                                        alt={image.alt} 
                                        className="w-full h-72 object-cover transition duration-500 group-hover:opacity-80" 
                                    />
                                    {/* Overlay con Título al hacer hover */}
                                    <div className="absolute inset-0 bg-fuchsia-600 bg-opacity-0 group-hover:bg-opacity-20 transition duration-500 flex items-center justify-center">
                                        <p className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-500 p-4 bg-black bg-opacity-50 rounded-lg">
                                            {image.alt}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Leyenda que Muestra el Nombre y la Categoría */}
                                <div className="p-4 flex justify-between items-center">
                                    {/* Muestra el nombre del postre */}
                                    <p className="text-lg font-bold text-gray-800">{image.alt}</p>
                                    
                                    {/* Muestra la categoría */}
                                    <span className="text-xs font-semibold uppercase text-fuchsia-600 bg-fuchsia-100 px-3 py-1 rounded-full">
                                        {image.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Botón CTA */}
                    <div className="text-center mt-16">
                        <h2 className="text-3xl font-bold text-fuchsia-700 mb-4">
                            ¿Listo para hacer tu encargo?
                        </h2>
                        <a href="/pedidos" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-xl text-lg">
                            ¡Pide el Tuyo Ahora!
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Gallery;
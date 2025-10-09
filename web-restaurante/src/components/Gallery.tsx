// src/components/Gallery.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

import cupcakeImage from '../assets/cupcake.png'; 
import rosquetesImage from '../assets/rosquetes.png'; 
import golfeadoImage from '../assets/golfeado.png'; 
import bizcochoImage from '../assets/bizcocho.jpg'; 
import tartaImage from '../assets/tarta.jpg'; 
import tartafrutaImage from '../assets/tartafruta.jpg'; 
import tartafruta2Image from '../assets/tartafruta2.png'; 
import quesoImage from '../assets/queso.png'; 
// 🚨 NUEVAS IMPORTACIONES AÑADIDAS
import panImage from '../assets/pan.png'; 
import jamonImage from '../assets/jamon.png'; 

// 🔑 DEFINICIÓN DE TODOS LOS PRODUCTOS DISPONIBLES
const allProducts = [
    {
        id: 'bizcocho-abuela',
        title: 'El Sueño Clásico: Bizcocho de la Abuela', 
        description: 'Tierno, cremoso y coronado por nubes de merengue que se deshacen en la boca. El chocolate rallado le da ese punto travieso que no puede faltar.',
        image: bizcochoImage,
        link: '/menu#bizcocho',
        cardClasses: 'shadow-xl shadow-pink-300/60 hover:shadow-fuchsia-400/80', 
        titleColor: 'text-white', 
        textBg: 'bg-pink-600', 
        descriptionColor: 'text-white',
    },
    {
        id: 'tarta-pirulin',
        title: 'La Montaña Rusa de Chocolate: Tarta Pirulín', 
        description: 'Esta tarta es puro chocolate, coronado con una cascada crujiente de pirulitos y boleros. ¡Un postre ruidoso, divertido y que no pide permiso para ser delicioso!',
        image: tartaImage,
        link: '/menu#pirulin',
        cardClasses: 'shadow-xl shadow-fuchsia-300/60 hover:shadow-pink-400/80',
        titleColor: 'text-white', 
        textBg: 'bg-fuchsia-700', 
        descriptionColor: 'text-white',
    },
    {
        id: 'bizcocho-frutal',
        title: 'El Jardín de los Dulces: Bizcocho Frutal', 
        description: 'Tarta de un suave bizcocho con una exquisita crema pastelera y decorada con merengue y una variedad de frutas para los adictos a la explosión de sabor',
        image: tartafrutaImage, 
        link: '/menu#bizcocho-frutal',
        cardClasses: 'shadow-xl shadow-indigo-300/60 hover:shadow-purple-400/80',
        titleColor: 'text-white', 
        textBg: 'bg-purple-600', 
        descriptionColor: 'text-white',
    },
    {
        id: 'bizcocho-alegria',
        title: 'Éxtasis Frutal: El Bizcocho de la Alegría', 
        description: 'Fresco bizcocho en capas, cubierto con una suave crema de vainilla, merengue suizo y un surtido vibrante de frutas de temporada para un sensación de sabores única .',
        image: tartafruta2Image, 
        link: '/menu#bizcocho-alegria',
        cardClasses: 'shadow-xl shadow-amber-300/60 hover:shadow-yellow-400/80',
        titleColor: 'text-white', 
        textBg: 'bg-yellow-600', 
        descriptionColor: 'text-white',
    },
    {
        id: 'tarta-queso',
        title: 'Operación Crunch: Tarta de Queso Filipina', 
        description: 'El postre más audaz. Cremosa tarta de queso, cubierta con una capa de chocolate y la crocancia adictiva de los famosos Filipinos. ¡La mezcla que no sabías que necesitabas!',
        image: quesoImage, 
        link: '/menu#tarta-queso',
        cardClasses: 'shadow-xl shadow-red-300/60 hover:shadow-red-400/80',
        titleColor: 'text-white', 
        textBg: 'bg-red-600', 
        descriptionColor: 'text-white',
    },
    {
        id: 'cupcake-sabor',
        title: 'Explosión de Sabor: Cupcakes', 
        description: 'Pequeñas obras de arte horneadas individualmente, perfectas para un capricho dulce y personal.',
        image: cupcakeImage, 
        link: '/menu#cupcakes',
        cardClasses: 'shadow-xl shadow-fuchsia-300/60 hover:shadow-pink-400/80',
        titleColor: 'text-white', 
        textBg: 'bg-fuchsia-700', 
        descriptionColor: 'text-white',
    },
    {
        id: 'golfeados-leyenda',
        title: '¡La Leyenda Dulce! Golfeados', 
        description: 'La única emergencia que querrás tener. Este rollo de pan es tan pegajoso y lleno de queso y papelón que garantiza una sonrisa. El anís es el cómplice que lo hace inolvidable.',
        image: golfeadoImage,
        link: '/menu#golfeados',
        cardClasses: 'shadow-xl shadow-pink-300/60 hover:shadow-fuchsia-400/80', 
        titleColor: 'text-white', 
        textBg: 'bg-pink-600', 
        descriptionColor: 'text-white',
    },
    {
        id: 'rosquetes-tradicion',
        title: 'Rosquetes Caseros: Tradición y Sabor', 
        description: 'Crujiente al inicio, tierno al final. Este no es un simple aro; es un dulce tradicional con personalidad. Su glaseado es la alfombra roja que te lleva directamente al corazón del sabor.',
        image: rosquetesImage, 
        link: '/menu#rosquetes',
        cardClasses: 'shadow-xl shadow-indigo-300/60 hover:shadow-purple-400/80',
        titleColor: 'text-white', 
        textBg: 'bg-purple-600', 
        descriptionColor: 'text-white',
    },
    // 🚨 NUEVOS PRODUCTOS DE PANADERÍA VENEZOLANA
    {
        id: 'pan-leche',
        title: '¡El Pan más Suave del Universo!', 
        description: 'Tan tierno que parece una nube. Este pan de leche es ideal para los más pequeños (y los no tan pequeños) que buscan un bocado dulce y esponjoso para empezar o terminar el día.',
        image: panImage, 
        link: '/menu#pan-leche',
        cardClasses: 'shadow-xl shadow-blue-300/60 hover:shadow-cyan-400/80',
        titleColor: 'text-white', 
        textBg: 'bg-cyan-600', 
        descriptionColor: 'text-white',
    },
    {
        id: 'pan-jamon',
        title: 'Pan de Jamón: Tradición que Rueda', 
        description: '¡No es Navidad si no hay Pan de Jamón! Masa dulce rellena del mejor jamón ahumado, tocino, aceitunas y pasas. El bocado salado y dulce que define el sabor venezolano.',
        image: jamonImage, 
        link: '/menu#pan-jamon',
        cardClasses: 'shadow-xl shadow-red-500/60 hover:shadow-red-600/80',
        titleColor: 'text-white', 
        textBg: 'bg-red-800', 
        descriptionColor: 'text-white',
    },
];

// 🔑 DEFINICIÓN DE CATEGORÍAS USANDO LOS PRODUCTOS
const categorizedItems = [
    {
        title: "Tartas de Ensueño",
        color: "text-pink-600",
        // 5 elementos
        items: [
            allProducts[0], 
            allProducts[1], 
            allProducts[2], 
            allProducts[3],
            allProducts[4], 
        ]
    },
    {
        title: "Cupcakes",
        color: "text-fuchsia-700",
        // Solo 1 elemento
        items: [
            allProducts[5], // Cupcakes
        ]
    },
    {
        title: "Panadería Venezolana",
        color: "text-purple-600",
        // 🚨 CAMBIO CLAVE: Ahora 4 elementos (Golfeado, Rosquetes, Pan de Leche, Pan de Jamón)
        items: [
            allProducts[6], // Golfeados
            allProducts[7], // Rosquetes
            allProducts[8], // ¡Nuevo Pan de Leche!
            allProducts[9], // ¡Nuevo Pan de Jamón!
        ]
    },
];


const Gallery: React.FC = () => {
    return (
        <>
            <Header />

            <div className="bg-pink-50 min-h-screen py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Título y Subtítulo de la Página */}
                    <header className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-fuchsia-700 mb-4">
                            Nuestra Galería de Postres
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Una muestra visual de la calidad y el arte que ponemos en cada bocado.
                        </p>
                    </header>

                    {/* Mapeo de Categorías */}
                    {categorizedItems.map((categoryGroup, groupIndex) => (
                        <div key={groupIndex} className="mb-16">
                            
                            {/* TÍTULO DE LA SECCIÓN (Tartas de Ensueño, Cupcakes, etc.) */}
                            <h2 className={`text-4xl font-extrabold ${categoryGroup.color} mb-8 text-center`}>
                                {categoryGroup.title}
                            </h2>
                            
                            {/* CUADRÍCULA DE IMÁGENES (Gallery Grid) */}
                            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
                                
                                {categoryGroup.items.map((item, itemIndex) => (
                                    <a 
                                        key={item.id || itemIndex}
                                        href={item.link}
                                        className={`group block rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 overflow-hidden ${item.cardClasses}`}
                                    >
                                        {/* Bloque de Imagen */}
                                        <div 
                                            className={`relative h-60 w-full overflow-hidden flex items-center justify-center`}
                                        >
                                            <img 
                                                src={item.image}
                                                alt={item.title} 
                                                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Contenedor de Texto */}
                                        <div className={`py-4 px-6 text-center ${item.textBg}`}>
                                            <h3 className={`text-2xl font-bold mb-1 ${item.titleColor} group-hover:text-pink-200`}>
                                                {item.title}
                                            </h3>
                                            <p className={`text-sm ${item.descriptionColor}`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                    
                    {/* Botón CTA - Se mantiene como un llamado a la acción principal */}
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
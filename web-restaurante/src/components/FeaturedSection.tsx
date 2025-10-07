// src/components/FeaturedSection.tsx
import React from 'react';

import golfeadoImage from '../assets/golfeado.png'; 
import cupcakeImage from '../assets/cupcake.png'; 
import rosqueteImage from '../assets/rosquetes.png'; 

const FeaturedSection: React.FC = () => {
  const pinkHoverColor = 'hover:text-pink-600';
  const fuchsiaAccent = 'text-fuchsia-700';
  
  const features = [
    {
      title: '¡La Leyenda Dulce! Golfeados', 
      description: 'Rollo de pan dulce venezolano, pegajoso y horneado con queso blanco, papelón y un toque de anís.',
      image: golfeadoImage,
      link: '/menu#golfeados',
      cardClasses: 'bg-white shadow-xl shadow-pink-300/60 hover:shadow-fuchsia-400/80', 
      titleColor: 'text-white', 
      textBg: 'bg-pink-600', 
      descriptionColor: 'text-white',
      // CLAVE: Color de texto del botón
      buttonTextColor: 'text-pink-600', 
      buttonHoverBg: 'hover:bg-pink-100'
    },
    {
      title: 'Explosión de Sabor: Cupcakes', 
      description: 'Pequeñas obras de arte horneadas individualmente, perfectas para un capricho dulce y personal.',
      image: cupcakeImage, 
      link: '/menu#cupcakes',
      cardClasses: 'bg-white shadow-xl shadow-fuchsia-300/60 hover:shadow-pink-400/80',
      titleColor: 'text-white', 
      textBg: 'bg-fuchsia-700', 
      descriptionColor: 'text-white',
      // CLAVE: Color de texto del botón
      buttonTextColor: 'text-fuchsia-700', 
      buttonHoverBg: 'hover:bg-fuchsia-100'
    },
    {
      title: 'Rosquetes Canarios: Tradición y Sabor', 
      description: 'Dulce tradicional con forma de rosca, crujiente por fuera y tierno por dentro, con un glaseado delicioso.',
      image: rosqueteImage, 
      link: '/menu#rosquetes',
      cardClasses: 'bg-white shadow-xl shadow-indigo-300/60 hover:shadow-purple-400/80',
      titleColor: 'text-white', 
      textBg: 'bg-purple-600', 
      descriptionColor: 'text-white',
      // CLAVE: Color de texto del botón
      buttonTextColor: 'text-purple-600',
      buttonHoverBg: 'hover:bg-purple-100'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TÍTULO DE LA SECCIÓN */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-extrabold ${fuchsiaAccent} mb-4`}>
            Nuestras Delicias Destacadas
          </h2>
          <p className="text-lg text-gray-600">
            Descubre por qué MacarmiDeli es el lugar más dulce de la ciudad.
          </p>
        </div>
        
        {/* TARJETAS DE ESPECIALIDADES (3 COLUMNAS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <a 
              key={index}
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
              <div className={`p-6 text-center ${item.textBg}`}>
                <h3 className={`text-2xl font-bold mb-2 ${item.titleColor} group-hover:text-pink-200`}>
                  {item.title}
                </h3>
                <p className={`${item.descriptionColor}`}>
                  {item.description}
                </p>
                {/* CLAVE: Botón blanco con texto de color */}
                <button 
                    className={`mt-4 w-full bg-white ${item.buttonTextColor} font-semibold py-2 rounded-lg transition duration-300 ${item.buttonHoverBg} shadow-md`}>
                    ¡Pedir Ahora!
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
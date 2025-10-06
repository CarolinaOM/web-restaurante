// src/components/FeaturedSection.tsx
import React from 'react';

// Asegúrate de que este archivo exista en src/assets/
import golfeadoImage from '../assets/golfeado.png'; 

const FeaturedSection: React.FC = () => {
  const pinkHoverColor = 'hover:text-pink-600';
  const fuchsiaAccent = 'text-fuchsia-700';
  const buttonBaseBg = 'bg-pink-600';
  
  const features = [
    {
      title: '¡La Leyenda Dulce! Golfeados', 
      description: 'Prueba nuestro pan dulce venezolano: suaves, pegajosos, con queso y papelón. ¡Una delicia inolvidable!',
      image: golfeadoImage,
      link: '/menu#golfeados',
      // CLAVE 1: Fondo de la tarjeta en blanco para limpieza
      cardClasses: 'bg-white shadow-xl shadow-pink-300/60 hover:shadow-fuchsia-400/80', 
      // CLAVE 2: Texto blanco sobre el fondo rosa vibrante
      titleColor: 'text-white', 
      // CLAVE 3: Fondo vibrante para el texto (¡Usamos el rosa de tu marca!)
      textBg: 'bg-pink-600', 
      descriptionColor: 'text-white' // La descripción también debe ser blanca
    },
    {
      title: 'Pasteles Personalizados',
      description: 'Diseña el pastel perfecto para tu celebración. Frescura y calidad en cada capa.',
      placeholderBg: 'bg-fuchsia-200', 
      link: '/galeria',
      cardClasses: 'bg-white', 
      titleColor: fuchsiaAccent,
      textBg: 'bg-white',
      descriptionColor: 'text-gray-600'
    },
    {
      title: 'El Momento Perfecto',
      description: 'Acompaña tu postre con nuestro café artesanal o un delicioso batido cremoso.',
      placeholderBg: 'bg-yellow-200',
      link: '/menu#bebidas',
      cardClasses: 'bg-white', 
      titleColor: fuchsiaAccent,
      textBg: 'bg-white',
      descriptionColor: 'text-gray-600'
    },
  ];

  return (
    // Fondo general se mantiene en bg-pink-100 para la armonía
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
              // Aplicamos clases de la tarjeta
              className={`group block rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 overflow-hidden ${item.cardClasses}`}
            >
              {/* Bloque de Imagen/Placeholder */}
              <div 
                className={`relative h-60 w-full overflow-hidden flex items-center justify-center ${item.image ? '' : item.placeholderBg}`}
              >
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-6xl" role="img" aria-label="placeholder icon">
                        🎂 
                    </span>
                  )}
              </div>

              {/* Contenedor de Texto */}
              {/* CLAVE: El fondo es el rosa vibrante */}
              <div className={`p-6 text-center ${item.textBg}`}>
                <h3 className={`text-2xl font-bold mb-2 ${item.titleColor} group-hover:text-pink-200`}>
                  {item.title}
                </h3>
                <p className={`${item.descriptionColor}`}>
                  {item.description}
                </p>
                {/* Botón Call to Action solo para Golfeados */}
                {index === 0 && (
                    <button className={`mt-4 w-full bg-white text-pink-600 font-semibold py-2 rounded-lg transition duration-300 hover:bg-pink-100 shadow-md`}>
                        ¡Pedir Ahora!
                    </button>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
// src/components/Menu.tsx 
import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 

interface MenuItem {
    name: string;
    description: string;
    price: string;
    featured: boolean;
}
interface MenuSection {
    title: string;
    icon: string; 
    items: MenuItem[];
}

const menuData: MenuSection[] = [
    {
        title: "Tartas de Ensueño",
        icon: "🎂",
        items: [
           {
               name: "Bizcocho Clásico",
               description: "Delicado y esponjoso, este bizcocho es la base perfecta para cualquier celebración. Su textura suave y aireada lo convierte en un placer simple e irresistible.",
               featured: true,
               price: ''
           },
           {
               name: "Tarta de Queso (Cheesecake)",
               description: "La tarta de queso es un postre cremoso y untuoso a base de queso y nata sobre una capa de galletas trituradas. Es la combinación perfecta de dulce y ácido.",
               featured: true,
               price: ''
           },
            {
                name: "Tarta Fría (Maracuyá o Guanábana)",
                description: "Una opción refrescante que no requiere horno. Consiste en una base de galleta triturada con una sedosa crema a base de leche condensada y el sabor tropical intenso del maracuyá o la suave dulzura de la guanábana.",
                featured: false,
                price: ''
            },
            {
                name: "Tarta de Frutas",
                description: "Bizcocho suave coronado con una vibrante selección de frutas frescas de temporada, aportando un equilibrio perfecto entre la dulzura de la masa y la acidez natural de la fruta.",
                featured: false,
                price: ''
            },
            {
                name: "Marquesa de Chocolate",
                description: "La marquesa es la tarta venezolana de galletas y chocolate. Se hace sin horno y consiste en capas alternas de galletas María mojadas en café y una crema aterciopelada de chocolate.",
                featured: false,
                price: ''
            },
        ]
    },
    {
        title: "Cupcakes",
        icon: "🧁",
        items: [
            {
                 name: "Cupcake de Vainilla",
                 description: "Clásico bizcocho de vainilla.",
                 featured: false,
                 price: ''
             },
            {
                name: "Cupcake de Chocolate",
                description: "Intenso bizcocho de chocolate.",
                featured: true,
                price: ''
            },
            {
                name: "Cupcake de Chocolate y Vainilla",
                description: "Clásico bizcocho de vainilla y chocolate formando un cupcake marmoleado.",
                featured: false,
                price: ''
            },
            {
                name: "Cupcake Decorados",
                description: "Clásico bizcocho del sabor escogido y déjanos elevarlo con una pequeña decoración personalizada.",
                featured: false,
                price: ''
            },
        ]
    },
    {
        title: "Panadería Venezolana",
        icon: "🍞",
        items: [
            {
                name: "Golfeados con Queso",
                description: "Pan dulce enrollado con papelón y anís, acompañado de queso.",
                featured: false,
                price: ''
            },
            {
                name: "Rols de Canela",
                description: "Pan dulce enrollado con papelón y canela.",
                featured: false,
                price: ''
            },
            {
                name: "Rosquetes Canarios",
                description: "Rosquillas blandas por dentro y crujiente por fuera.",
                featured: true,
                price: ''
            },
            {
                name: "Pan de Jamón",
                description: "Pan relleno de jamón, tocineta, aceitunas y pasas.",
                featured: true,
                price: ''
            },
            {
                name: "Pan de Leche",
                description: "Pan tierno y esponjoso.",
                featured: true,
                price: ''
            },
            {
                name: "Tequeños",
                description: "Bastones de queso envueltos en masa.",
                featured: true,
                price: ''
            },
        ]
    }
];

const Menu: React.FC = () => {
    
    const orderButtonStyle = "inline-block mt-3 text-sm font-semibold text-white bg-fuchsia-600 hover:bg-fuchsia-700 py-1.5 px-4 rounded-full transition duration-300";

    return (
       
        <>
            <Header />
             
            <div className="bg-pink-50 min-h-screen py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <header className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-fuchsia-700 mb-4">
                            Nuestras Creaciones Dulces
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explora la variedad de postres y panes de MacarmiDeli. Haz clic en "Pedir" para iniciar tu encargo.
                        </p>
                    </header>

                    <div className="space-y-12">
                        {menuData.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
                                
                                {/* Título de la Sección */}
                                <h2 className="text-3xl font-bold text-fuchsia-700 mb-6 border-b-2 border-pink-200 pb-2 flex items-center">
                                    <span className="mr-3 text-3xl">{section.icon}</span>
                                    {section.title}
                                </h2>

                                {/* Artículos de la Sección */}
                                <div className="space-y-6">
                                    {section.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className={`flex flex-col sm:flex-row justify-between items-start border-l-4 pl-4 py-2 transition duration-300 ${item.featured ? 'border-fuchsia-500 bg-pink-50' : 'border-gray-100 hover:bg-gray-50'}`}>
                                            <div className="flex-1 pr-4 mb-2 sm:mb-0">
                                                <h3 className="text-xl font-semibold text-gray-800">
                                                    {item.name}
                                                    {item.featured && (
                                                        <span className="ml-2 text-xs font-bold text-fuchsia-700 bg-fuchsia-200 px-2 py-0.5 rounded-full uppercase">
                                                            Popular
                                                        </span>
                                                    )}
                                                </h3>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    {item.description}
                                                </p>
                                            </div>
                                            
                                            <div className="text-left sm:text-right flex-shrink-0">
                                                <p className="text-lg font-bold text-fuchsia-900 mb-2">{item.price}</p>
                                                {/* Botón de Pedido que enlaza al formulario */}
                                                <a href="/pedidos" className={orderButtonStyle}>
                                                    Pedir este &rarr;
                                                </a>
                                            </div>
                                        </div>
                                ))}
                            </div>
                            
                            
                            
                            
                        </div>
                    ))}
                </div>

                {/* AVISO PARA PEDIDOS PERSONALIZADOS */}
                <div className="text-center mt-16 p-6 bg-fuchsia-100 border border-fuchsia-300 rounded-xl shadow-inner">
                    <h3 className="text-2xl font-bold text-fuchsia-800 mb-3">
                        ¿Buscas algo Único?
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                        Si el postre de tus sueños no está en nuestra lista, no te preocupes. ¡Podemos hacerlo!
                    </p>
                    <a href="/pedidos" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-xl text-lg">
                        Haz tu Pedido Personalizado Aquí
                    </a>
                    <p className="text-base text-gray-700 mt-4 font-medium"> {/* Aumenta el margen (mt-4) y el tamaño del texto */}
                        Especifica el postre en la sección de 'Comentarios Adicionales'.
                    </p>
                </div>

            

            </div>
            
        </div>
        
        <Footer />
     </>
    );
};

export default Menu;
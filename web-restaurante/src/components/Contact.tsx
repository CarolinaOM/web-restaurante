// src/components/Contact.tsx
import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 

// 🔑 Componente Auxiliar para los Íconos de Redes Sociales
const SocialIcons: React.FC = () => (
    <div className="flex justify-center lg:justify-start space-x-6 mt-4">
        {/* Instagram */}
        <a 
            href="https://www.instagram.com/macarmideli/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-fuchsia-700 hover:text-pink-600 transition duration-300 transform hover:scale-110"
            aria-label="Instagram"
        >
            <i className="fab fa-instagram text-4xl"></i>
        </a>
        
        {/* Facebook */}
        <a 
            href="https://www.facebook.com/macarmideli.macarmideli" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-fuchsia-700 hover:text-pink-600 transition duration-300 transform hover:scale-110"
            aria-label="Facebook"
        >
            <i className="fab fa-facebook-f text-4xl"></i>
        </a>
    </div>
);


const Contact: React.FC = () => {
    return (
        <>
            <Header />

            <div className="bg-pink-50 min-h-screen py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Título de la Sección */}
                    <header className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-fuchsia-700 mb-4">
                            ¡Hablemos de Dulces!
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            ¿Tienes un encargo especial, una pregunta o simplemente quieres saludar? Estamos aquí para ti.
                        </p>
                    </header>

                    {/* Contenedor de Dos Columnas (Formulario e Info) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        
                        {/* COLUMNA 1: FORMULARIO DE CONTACTO */}
                        <div className="bg-white p-8 rounded-xl shadow-2xl border border-pink-200 hover:shadow-pink-400/70 transition duration-300">
                            <h2 className="text-3xl font-bold text-pink-600 mb-6 border-b pb-2">
                                Envíanos un Mensaje Rápido
                            </h2>
                            <form className="space-y-6">
                                {/* Campos de Formulario (sin cambios) */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        placeholder="Tu Nombre"
                                        className="mt-1 block w-full px-4 py-2 border border-pink-300 rounded-lg shadow-sm focus:border-fuchsia-600 focus:ring-fuchsia-600 transition duration-150 focus:ring-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder="ejemplo@correo.com"
                                        className="mt-1 block w-full px-4 py-2 border border-pink-300 rounded-lg shadow-sm focus:border-fuchsia-600 focus:ring-fuchsia-600 transition duration-150 focus:ring-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tu Mensaje</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        rows={4} 
                                        placeholder="¿Cuál es tu pregunta o comentario?"
                                        className="mt-1 block w-full px-4 py-2 border border-pink-300 rounded-lg shadow-sm focus:border-fuchsia-600 focus:ring-fuchsia-600 transition duration-150 focus:ring-2"
                                        required
                                    ></textarea>
                                </div>
                                {/* Botón de Envío */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 text-white font-extrabold py-4 px-6 rounded-full transition duration-300 shadow-xl shadow-fuchsia-500/50 transform hover:scale-[1.01]"
                                >
                                    Enviar Dulce Mensaje
                                </button>
                            </form>
                        </div>

                        {/* COLUMNA 2: INFORMACIÓN SIMPLIFICADA */}
                        <div className="bg-white p-8 rounded-xl shadow-2xl border border-pink-200 hover:shadow-fuchsia-400/70 transition duration-300 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-fuchsia-700 mb-6">
                                Conéctate con Nosotros
                            </h2>
                            
                            {/* Correo Electrónico */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Correo Directo</h3>
                                <a 
                                    href="mailto:macarmideli@gmail.com" 
                                    className="text-pink-600 hover:text-fuchsia-700 text-lg font-medium underline"
                                >
                                    macarmideli@gmail.com
                                </a>
                            </div>

                            {/* Redes Sociales */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Síguenos</h3>
                                <SocialIcons />
                            </div>
                        </div>

                    </div>

                    {/* ➡️ CTA A PEDIDOS: REEMPLAZADO POR UN BOTÓN GRANDE Y CENTRAL */}
                    <div className="mt-12 text-center max-w-lg mx-auto">
                        <h3 className="text-2xl font-bold text-gray-700 mb-4">
                            ¿Listo para hacer tu encargo?
                        </h3>
                        <a 
                            href="/pedidos" 
                            className="inline-block w-full bg-gradient-to-r from-fuchsia-600 to-pink-500 hover:from-fuchsia-700 hover:to-pink-600 text-white font-extrabold text-xl py-4 px-8 rounded-full transition duration-300 shadow-2xl shadow-fuchsia-500/50 transform hover:scale-[1.02]"
                        >
                            Ir a Pedidos
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
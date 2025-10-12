// src/components/Contact.tsx
import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import { useForm, ValidationError } from '@formspree/react';
//Importación de la ID del formulario 
import { FORMSPREE_CONTACT_ID } from '../config/environment'; 

const Contact: React.FC = () => {
    //USO DE LA CONSTANTE: useForm obtiene la ID del archivo environment.ts
    const [state, handleSubmit] = useForm(FORMSPREE_CONTACT_ID);  

    // Función para manejar la pulsación de teclas y permitir solo letras y espacio
    const handleNameKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // Expresión regular que coincide con caracteres que NO son letras o espacio
        const isNotLetterOrSpace = !/[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]/.test(event.key);
        
        if (event.key.length > 1) {
            return;
        }

        if (isNotLetterOrSpace) {
            event.preventDefault(); // Detiene la entrada si no es una letra o espacio
        }
    };
    
    // Muestra un mensaje de éxito si el formulario se envió correctamente
    if (state.succeeded) {
        return (
            <>
                <Header />
                <div className="bg-pink-50 min-h-screen py-32 text-center">
                    <div className="max-w-xl mx-auto p-10 bg-white rounded-xl shadow-2xl">
                        <h2 className="text-4xl font-extrabold text-fuchsia-700 mb-4">¡Mensaje Enviado!</h2>
                        <p className="text-xl text-gray-600">
                            Gracias por contactarnos. Te responderemos a la brevedad.
                        </p>
                        <a href="/" className="mt-8 inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                            Volver a la Home
                        </a>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

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
                        
                        {/* COLUMNA 1: FORMULARIO DE CONTACTO (Integrado con Formspree) */}
                        <div className="bg-white p-8 rounded-xl shadow-2xl border border-pink-200 hover:shadow-pink-400/70 transition duration-300">
                            <h2 className="text-3xl font-bold text-pink-600 mb-6 border-b pb-2">
                                Envíanos un Mensaje Rápido
                            </h2>
                            {/* Uso de handleSubmit de Formspree */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                
                                {/* Campo Nombre - MODIFICADO para aceptar solo letras */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        placeholder="Tu Nombre"
                                        // Validación en tiempo real para evitar números/símbolos
                                        onKeyPress={handleNameKeyPress}
                                        // Patrón de validación HTML5 (solo letras y espacios)
                                        pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
                                        title="Solo se permiten letras y espacios."
                                        className="mt-1 block w-full px-4 py-2 border border-pink-300 rounded-lg shadow-sm focus:border-fuchsia-600 focus:ring-fuchsia-600 transition duration-150 focus:ring-2"
                                        required
                                    />
                                </div>
                                
                                {/* Campo Email (sin cambios) */}
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
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                </div>
                                
                                {/* Campo Mensaje (sin cambios) */}
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
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                </div>
                                
                                {/* Botón de Envío */}
                                <button
                                    type="submit"
                                    disabled={state.submitting} 
                                    className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 text-white font-extrabold py-4 px-6 rounded-full transition duration-300 shadow-xl shadow-fuchsia-500/50 transform hover:scale-[1.01] disabled:opacity-50"
                                >
                                    {state.submitting ? 'Enviando...' : 'Enviar Dulce Mensaje'}
                                </button>
                            </form>
                        </div>

                      
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
                                <div className="flex justify-center lg:justify-start space-x-6 mt-4">
                                    {/* Instagram (SVG) */}
                                    <a 
                                        href="https://www.instagram.com/macarmideli/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-fuchsia-700 hover:text-pink-600 transition duration-300 transform hover:scale-110"
                                        aria-label="Instagram"
                                    >
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.74 2h8.52C18.66 2 21 4.34 21 7.74v8.52c0 3.4-2.34 5.74-4.74 5.74H7.74C4.34 22 2 19.66 2 16.26V7.74C2 4.34 4.34 2 7.74 2zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm4.8-6.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"/>
                                        </svg>
                                    </a>
                                    
                                    {/* Facebook (SVG) */}
                                    <a 
                                        href="https://www.facebook.com/macarmideli.macarmideli" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-fuchsia-700 hover:text-pink-600 transition duration-300 transform hover:scale-110"
                                        aria-label="Facebook"
                                    >
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.63 9.15 8.36 9.87V15H7.72v-3h2.64V9.75c0-2.61 1.59-4.04 3.92-4.04 1.12 0 2.08.08 2.36.12v2.7h-1.65c-1.29 0-1.54.61-1.54 1.51V12h3.04l-.49 3h-2.55v6.87C18.37 21.15 22 16.99 22 12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* CTA A PEDIDOS */}
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
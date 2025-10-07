// src/components/Footer.tsx
import React from 'react';
import logoImage from '../assets/logo.png'; 

const Footer: React.FC = () => {
    // Colores de marca unificados
    const fuchsiaAccent = 'text-fuchsia-700';
    const pinkBg = 'bg-pink-100'; // Un fondo que armoniza
    const hoverColor = 'hover:text-pink-600';

    return (
        <footer className={`py-12 ${pinkBg} border-t border-pink-200`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                
                {/* Columna 1: Logo y Contacto */}
                <div>
                    <a href="/">
                        <img src={logoImage} alt="MacarmiDeli Logo" className="h-20 mb-3" />
                    </a>
                    <p className="text-sm text-gray-600">
                        El dulce arte de la felicidad.
                    </p>
                    
                    {/* CLAVE: Hemos eliminado las líneas del teléfono (línea 17 y 18 originales) */}
                    
                    {/* El Email ocupa ahora el lugar principal de contacto */}
                    <p className="mt-4 text-sm text-gray-700">
                        <span className="font-semibold">Contactanos por:</span> <a href="mailto:macarmideli@gmail.com" className={hoverColor}>macarmideli@gmail.com</a>
                    </p>
                </div>

                {/* Columna 2: Navegación Rápida */}
                <div>
                    <h3 className={`text-lg font-bold mb-4 ${fuchsiaAccent}`}>Navegación</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><a href="/" className={hoverColor}>Inicio</a></li>
                        <li><a href="/menu" className={hoverColor}>Menú Completo</a></li>
                        <li><a href="/galeria" className={hoverColor}>Galería</a></li>
                        <li><a href="/contacto" className={hoverColor}>Contacto</a></li>
                    </ul>
                </div>

                {/* Columna 3: Horario */}
                <div>
                    <h3 className={`text-lg font-bold mb-4 ${fuchsiaAccent}`}>Pedidos y Encargos</h3>

                    <p className="text-sm text-gray-700 font-semibold mb-2">
                    Todo se elabora bajo pedido.
                    </p>

                    <p className="text-sm text-gray-600">
                    Aseguramos la máxima frescura y calidad en cada dulce.
                    </p>

                    <p className="mt-3 text-sm text-gray-700 font-semibold">
                    Tiempo de preparación:
                    </p>
                    <p className="text-sm text-gray-600">
                    **Mínimo 48 horas** (dependiendo del producto).
                    </p>

                    <p className="mt-3 text-sm text-gray-700">
                    <a href="/contacto" className={`${hoverColor} font-semibold`}>¡Haz tu encargo hoy!</a>
                    </p>
                </div>

                {/* Columna 4: Legal y Redes Sociales */}
                <div>
                    <h3 className={`text-lg font-bold mb-4 ${fuchsiaAccent}`}>Legal</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><a href="/privacidad" className={hoverColor}>Política de Privacidad</a></li>
                        <li><a href="/terminos" className={hoverColor}>Términos y Condiciones</a></li>
                    </ul>
                    
                    <h3 className={`text-lg font-bold mt-6 mb-3 ${fuchsiaAccent}`}>Síguenos</h3>
                    
                    {/* ENLACES DE REDES SOCIALES (ICONOS) */}
                    <div className="flex space-x-4">
                        {/* Instagram */}
                        <a 
                            href="https://www.instagram.com/macarmideli/" 
                            className={`text-gray-500 ${hoverColor} transition duration-300`} 
                            aria-label="Instagram de MacarmiDeli"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.74 2h8.52C18.66 2 21 4.34 21 7.74v8.52c0 3.4-2.34 5.74-4.74 5.74H7.74C4.34 22 2 19.66 2 16.26V7.74C2 4.34 4.34 2 7.74 2zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm4.8-6.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"/>
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a 
                            href="https://www.facebook.com/macarmideli.macarmideli" 
                            className={`text-gray-500 ${hoverColor} transition duration-300`} 
                            aria-label="Facebook de MacarmiDeli"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.63 9.15 8.36 9.87V15H7.72v-3h2.64V9.75c0-2.61 1.59-4.04 3.92-4.04 1.12 0 2.08.08 2.36.12v2.7h-1.65c-1.29 0-1.54.61-1.54 1.51V12h3.04l-.49 3h-2.55v6.87C18.37 21.15 22 16.99 22 12z"/>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
            <div className="mt-8 pt-4 border-t border-pink-300 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} MacarmiDeli. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
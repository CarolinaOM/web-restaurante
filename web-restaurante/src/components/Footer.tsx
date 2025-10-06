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
                    <img src={logoImage} alt="MacarmiDeli Logo" className="h-20 mb-3" />
                    <p className="text-sm text-gray-600">
                        El dulce arte de la felicidad.
                    </p>
                    <p className="mt-4 text-sm text-gray-700">
                        <span className="font-semibold">Tel:</span> +34 555 123 456
                    </p>
                    <p className="text-sm text-gray-700">
                        <span className="font-semibold">Email:</span> <a href="mailto:macarmideli@gmail.com" className={hoverColor}>macarmideli@gmail.com</a>
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
                    <h3 className={`text-lg font-bold mb-4 ${fuchsiaAccent}`}>Horario</h3>
                    <p className="text-sm text-gray-700 font-semibold">Martes - Sábado:</p>
                    <p className="text-sm text-gray-600">10:00 - 20:00</p>
                    <p className="mt-2 text-sm text-gray-700 font-semibold">Domingo:</p>
                    <p className="text-sm text-gray-600">10:00 - 14:00</p>
                    <p className="mt-2 text-sm text-gray-700 font-semibold">Lunes:</p>
                    <p className="text-sm text-gray-600">Cerrado</p>
                </div>

                {/* Columna 4: Legal y Redes Sociales */}
                <div>
                    <h3 className={`text-lg font-bold mb-4 ${fuchsiaAccent}`}>Legal</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><a href="/privacidad" className={hoverColor}>Política de Privacidad</a></li>
                        <li><a href="/terminos" className={hoverColor}>Términos y Condiciones</a></li>
                    </ul>
                    
                    <h3 className={`text-lg font-bold mt-6 mb-3 ${fuchsiaAccent}`}>Síguenos</h3>
                    
                    {/* ENLACE DE INSTAGRAM (SOLO ICONO RECONOCIBLE) */}
                    <div className="flex space-x-4">
                        <a 
                            href="https://www.instagram.com/macarmideli/" 
                            className={`text-gray-500 ${hoverColor} transition duration-300`} 
                            aria-label="Instagram de MacarmiDeli"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {/* Icono SVG de Instagram (Más reconocible) */}
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.071 1.17.055 1.83.245 2.39.467.57.228.98.532 1.42.973.44.44.74.85.97 1.42.22 0 .41.31.47 1.48.06 1.26.07 1.64.07 4.84v3.13c0 3.2-.01 3.58-.07 4.85-.06 1.17-.25 1.83-.47 2.39-.23.57-.53.98-.97 1.42-.44.44-.85.74-1.42.97-.56.22-1.22.41-2.39.47-1.26.06-1.64.07-4.85.07h-3.13c-3.2 0-3.58-.01-4.85-.07-1.17-.06-1.83-.25-2.39-.47-.57-.23-.98-.53-1.42-.97-.44-.44-.74-.85-.97-1.42-.22-.56-.41-1.22-.47-2.39-.06-1.27-.07-1.64-.07-4.85v-3.13c0-3.2.01-3.58.07-4.85.06-1.17.25-1.83.47-2.39.23-.57.53-.98.97-1.42.44-.44.85-.74 1.42-.97.56-.22 1.22-.41 2.39-.47 1.26-.06 1.64-.07 4.85-.07h3.13zm-1.05 3.32h-1.03c-2.45 0-2.73 0-3.68.04-1.07.05-1.78.23-2.28.43-.5.2-.87.48-1.2.81-.33.33-.61.7-.81 1.2-.2.5-.38 1.21-.43 2.28-.04.95-.04 1.23-.04 3.68v1.03c0 2.45 0 2.73.04 3.68.05 1.07.23 1.78.43 2.28.2.5.48.87.81 1.2.33.33.7.61 1.2.81.5.2 1.21.38 2.28.43.95.04 1.23.04 3.68.04h1.03c2.45 0 2.73 0 3.68-.04 1.07-.05 1.78-.23 2.28-.43.5-.2.87-.48 1.2-.81.33-.33.61-.7.81-1.2.2-.5.38-1.21.43-2.28.04-.95.04-1.23.04-3.68v-1.03c0-2.45 0-2.73-.04-3.68-.05-1.07-.23-1.78-.43-2.28-.2-.5-.48-.87-.81-1.2-.33-.33-.7-.61-1.2-.81-.5-.2-1.21-.38-2.28-.43-.95-.04-1.23-.04-3.68-.04zM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7.3a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm4.8-6.9a1.04 1.04 0 1 0 0 2.08 1.04 1.04 0 0 0 0-2.08z"/>
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
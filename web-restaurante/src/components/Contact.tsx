// src/components/Contact.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact: React.FC = () => {
    const fuchsiaAccent = 'text-fuchsia-700';
    
    return (
        <>
            <Header />
            <main className="min-h-screen pt-16 bg-white"> 
                <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <h1 className={`text-4xl font-bold mb-6 ${fuchsiaAccent}`}>Hablemos</h1>
                    <p className="text-xl text-gray-700 mb-10">
                        Si tienes preguntas generales, dudas de disponibilidad o simplemente quieres saludarnos, ¡contáctanos!
                    </p>

                    <div className="space-y-8">
                        <div className="p-6 border rounded-xl shadow-lg bg-pink-50">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Correo Electrónico</h2>
                            <p className="text-lg">
                                <a href="mailto:macarmideli@gmail.com" className="text-pink-600 hover:text-pink-700 font-medium">macarmideli@gmail.com</a>
                            </p>
                        </div>

                        <div className="p-6 border rounded-xl shadow-lg bg-pink-50">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Teléfono y WhatsApp</h2>
                            <p className="text-lg">
                                Llámanos o envíanos un mensaje: <a href="tel:600123456" className="text-pink-600 hover:text-pink-700 font-medium">600 123 456</a>
                            </p>
                        </div>
                        
                        <div className="p-6 border rounded-xl shadow-lg bg-pink-50">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Redes Sociales</h2>
                            <p className="text-lg text-gray-700">
                                Síguenos en Instagram y Facebook para ver nuestras creaciones diarias.
                            </p>
                            {/* Los enlaces a redes sociales irían aquí */}
                        </div>
                    </div>
                    
                    <p className="mt-12 text-gray-800 text-xl font-bold">
                        ¿Listo para encargar? <a href="/pedidos" className="text-fuchsia-600 hover:text-fuchsia-700 underline">Ve al formulario de Pedidos aquí.</a>
                    </p>

                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
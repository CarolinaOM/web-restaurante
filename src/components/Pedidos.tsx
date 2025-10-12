// src/components/Pedidos.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PedidoForm from './PedidoForm.tsx'; 

const Pedidos: React.FC = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-pink-50"> 
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-4xl text-fuchsia-700 font-bold mb-4 text-center">¡Tu Pedido Personalizado!</h1>
                    <p className="text-center text-xl text-gray-700 mb-10">
                        Cuéntanos qué dulce sueño quieres que hagamos realidad.
                    </p>
                    
                    {/* Renderizamos el formulario aquí */}
                    <PedidoForm />
                    
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Pedidos;
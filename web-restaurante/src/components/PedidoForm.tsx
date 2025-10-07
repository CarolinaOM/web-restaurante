// src/components/PedidoForm.tsx
import React, { useState } from 'react';

const PedidoForm: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        producto: 'tartas', 
        cantidad: 12,
        sabor: '',
        fechaEntrega: '',
        comentarios: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // **IMPORTANTE:** Aquí es donde enviarías los datos del formulario.
        console.log('Datos del pedido:', formData);

        alert('¡Tu pedido ha sido enviado! Nos pondremos en contacto contigo pronto.');
    };

    const inputStyle = "w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition duration-150 shadow-sm";
    const labelStyle = "block text-sm font-medium text-gray-700 mb-1";
    const fuchsiaAccent = 'bg-fuchsia-600 hover:bg-fuchsia-700';

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-xl">
            <h2 className="text-3xl font-bold text-fuchsia-700 mb-6 text-center">Detalles del Encargo</h2>
            
            <div className="space-y-6">
                
                {/* 1. Información Personal */}
                <fieldset className="p-4 border border-pink-200 rounded-lg bg-pink-50/50">
                    <legend className="text-lg font-semibold text-gray-800 px-2">Tu Información</legend>
                    
                    <div>
                        <label htmlFor="nombre" className={labelStyle}>Nombre Completo:</label>
                        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className={inputStyle} />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label htmlFor="email" className={labelStyle}>Correo Electrónico:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputStyle} />
                        </div>
                        <div>
                            <label htmlFor="telefono" className={labelStyle}>Teléfono (WhatsApp, si es posible):</label>
                            <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required className={inputStyle} />
                        </div>
                    </div>
                </fieldset>

                {/* 2. Detalles del Pedido */}
                <fieldset className="p-4 border border-pink-200 rounded-lg bg-pink-50/50">
                    <legend className="text-lg font-semibold text-gray-800 px-2">El Pedido</legend>

                    {/* Tipo de Producto (Macarons Eliminados) */}
                    <div>
                        <label htmlFor="producto" className={labelStyle}>¿Qué deseas encargar?</label>
                        <select id="producto" name="producto" value={formData.producto} onChange={handleChange} required className={inputStyle}>
                            <option value="tartas">Tartas</option>
                            <option value="cupcakes">Cupcakes</option>
                            {/* <option value="macarons">Macarons</option> <-- ELIMINADO */}
                            <option value="galletas">Galletas</option>
                            <option value="rosquetes">Rosquetes</option>
                            <option value="golfeado">Golfeado</option>
                            <option value="pan_de_leche">Pan de Leche</option>
                            <option value="pan_de_jamon">Pan de Jamón</option>
                            <option value="otro">Otro Postre</option>
                        </select>
                    </div>

                    {/* Cantidad y Sabor */}
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label htmlFor="cantidad" className={labelStyle}>Cantidad (Unidades o Raciones):</label>
                            <input type="number" id="cantidad" name="cantidad" value={formData.cantidad} onChange={handleChange} required min="1" className={inputStyle} />
                        </div>
                        <div>
                            <label htmlFor="sabor" className={labelStyle}>Sabor y/o Diseño:</label>
                            <input type="text" id="sabor" name="sabor" value={formData.sabor} onChange={handleChange} placeholder="Ej: Chocolate, Vainilla con flores, etc." required className={inputStyle} />
                        </div>
                    </div>

                    {/* Fecha de Entrega */}
                    <div className="mt-4">
                        <label htmlFor="fechaEntrega" className={labelStyle}>Fecha de Entrega/Recogida Deseada:</label>
                        <input type="date" id="fechaEntrega" name="fechaEntrega" value={formData.fechaEntrega} onChange={handleChange} required className={inputStyle} />
                        <p className="text-xs text-gray-500 mt-1">Por favor, realiza tu pedido con al menos 7 días de antelación.</p>
                    </div>
                </fieldset>
                
                {/* 3. Comentarios Adicionales */}
                <div>
                    <label htmlFor="comentarios" className={labelStyle}>Comentarios Adicionales o Detalles Especiales:</label>
                    <textarea 
                        id="comentarios" 
                        name="comentarios" 
                        value={formData.comentarios} 
                        onChange={handleChange} 
                        rows={4} 
                        placeholder="Cualquier alergia, preferencia de color, o referencia de diseño."
                        className={inputStyle} 
                    />
                </div>

                {/* Botón de Enviar */}
                <button 
                    type="submit" 
                    className={`w-full py-3 mt-4 text-white font-semibold rounded-full transition duration-200 ${fuchsiaAccent} shadow-lg text-lg`}
                >
                    Enviar Solicitud de Pedido
                </button>
                <p className="text-center text-sm text-gray-600 mt-3">
                    Nota: Esto es una solicitud. Te contactaremos para confirmar disponibilidad y el precio final.
                </p>

            </div>
        </form>
    );
};

export default PedidoForm;
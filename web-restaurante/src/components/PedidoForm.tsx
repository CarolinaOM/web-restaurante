// src/components/PedidoForm.tsx (VERSIÓN CON VALIDACIONES DE FORMATO - CORRECCIÓN NOMBRE)
import React, { useState } from 'react';

// Define la estructura del estado de errores de validación
interface ValidationErrors {
    nombre?: string;
    _replyto?: string;
    telefono?: string;
    [key: string]: string | undefined; // Permite acceder por cualquier string
}

const PedidoForm: React.FC = () => {
    
    // ⚠️ ¡IMPORTANTE! MANTÉN TU URL REAL DE FORMSPREE AQUÍ
    const FORMSPREE_URL = 'https://formspree.io/f/mldpwwkg'; // <--- ¡Asegúrate de que esta es tu URL!
    
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({}); // Nuevo estado para errores

    const [formData, setFormData] = useState({
        nombre: '',
        _replyto: '',
        telefono: '',
        producto: 'tartas', 
        cantidad: 12,
        sabor: '',
        fechaEntrega: '',
        comentarios: ''
    });

    // Función de validación
    const validate = () => {
        const errors: ValidationErrors = {};
        let isValid = true;

        // 1. Validación del Nombre (SOLO LETRAS Y ESPACIOS)
        // \p{L} = Cualquier tipo de letra en cualquier idioma. \s = espacio.
        const nameRegex = /^[\p{L}\s]+$/u; 

        if (!formData.nombre.trim()) {
            errors.nombre = 'El nombre no puede estar vacío.';
            isValid = false;
        } else if (!nameRegex.test(formData.nombre)) {
            errors.nombre = 'El nombre solo puede contener letras y espacios (sin números ni caracteres especiales).';
            isValid = false;
        }

        // 2. Validación del Correo Electrónico (Patrón básico: user@dominio.com)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData._replyto || !emailRegex.test(formData._replyto)) {
            errors._replyto = 'El correo electrónico no tiene un formato válido (ej: nombre@dominio.com).';
            isValid = false;
        }

        // 3. Validación del Teléfono (Solo Números)
        const phoneRegex = /^[0-9]+$/;
        if (!formData.telefono.trim() || !phoneRegex.test(formData.telefono)) {
            errors.telefono = 'El teléfono solo puede contener números.';
            isValid = false;
        }

        setValidationErrors(errors);
        return isValid;
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Opcional: Limpiar el error cuando el usuario empieza a escribir
        if (validationErrors[e.target.name]) {
            setValidationErrors(prev => ({ ...prev, [e.target.name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            setStatus('idle'); // No enviar si la validación falla
            return; 
        }

        setStatus('sending');

        const form = e.target as HTMLFormElement;
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ 
                    nombre: '', _replyto: '', telefono: '', producto: 'tartas', 
                    cantidad: 12, sabor: '', fechaEntrega: '', comentarios: ''
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.error('Error al enviar el pedido:', error);
        }
    };

    // Estilos
    const inputStyle = "w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition duration-150 shadow-sm";
    const errorInputStyle = "w-full p-3 border border-red-500 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-150 shadow-sm";
    const labelStyle = "block text-sm font-medium text-gray-700 mb-1";
    const errorTextStyle = "text-sm text-red-600 mt-1";
    const buttonBase = 'bg-fuchsia-600 hover:bg-fuchsia-700';

    return (
        <form 
            onSubmit={handleSubmit} 
            action={FORMSPREE_URL} 
            method="POST" 
            className="max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-xl"
        >
            <h2 className="text-3xl font-bold text-fuchsia-700 mb-6 text-center">Detalles del Encargo</h2>
            
            {/* Mensajes de feedback */}
            {status === 'success' && (
                <div className="p-4 mb-4 rounded-lg bg-green-500 text-white font-semibold text-center">
                    ¡Tu solicitud se envió! Revisa tu correo, te contactaremos pronto.
                </div>
            )}
            {status === 'error' && (
                <div className="p-4 mb-4 rounded-lg bg-red-500 text-white font-semibold text-center">
                    Hubo un error al enviar. Por favor, inténtalo de nuevo.
                </div>
            )}

            <div className="space-y-6">
                
                {/* 1. Información Personal */}
                <fieldset className="p-4 border border-pink-200 rounded-lg bg-pink-50/50">
                    <legend className="text-lg font-semibold text-gray-800 px-2">Tu Información</legend>
                    
                    {/* NOMBRE */}
                    <div>
                        <label htmlFor="nombre" className={labelStyle}>Nombre Completo:</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            value={formData.nombre} 
                            onChange={handleChange} 
                            required 
                            className={validationErrors.nombre ? errorInputStyle : inputStyle} 
                        />
                        {/* El mensaje de error ahora se activará cuando haya números al intentar enviar */}
                        {validationErrors.nombre && <p className={errorTextStyle}>{validationErrors.nombre}</p>}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        
                        {/* CORREO ELECTRÓNICO */}
                        <div>
                            <label htmlFor="_replyto" className={labelStyle}>Correo Electrónico:</label>
                            <input 
                                type="email" 
                                id="_replyto" 
                                name="_replyto" 
                                value={formData._replyto} 
                                onChange={handleChange} 
                                required 
                                className={validationErrors._replyto ? errorInputStyle : inputStyle} 
                            />
                            {validationErrors._replyto && <p className={errorTextStyle}>{validationErrors._replyto}</p>}
                        </div>
                        
                        {/* TELÉFONO */}
                        <div>
                            <label htmlFor="telefono" className={labelStyle}>Teléfono (WhatsApp, si es posible):</label>
                            <input 
                                type="tel" 
                                id="telefono" 
                                name="telefono" 
                                value={formData.telefono} 
                                onChange={handleChange} 
                                required 
                                className={validationErrors.telefono ? errorInputStyle : inputStyle} 
                            />
                            {validationErrors.telefono && <p className={errorTextStyle}>{validationErrors.telefono}</p>}
                        </div>
                    </div>
                </fieldset>

                {/* 2. Detalles del Pedido */}
                <fieldset className="p-4 border border-pink-200 rounded-lg bg-pink-50/50">
                    <legend className="text-lg font-semibold text-gray-800 px-2">El Pedido</legend>

                    {/* Tipo de Producto */}
                    <div>
                        <label htmlFor="producto" className={labelStyle}>¿Qué deseas encargar?</label>
                        <select id="producto" name="producto" value={formData.producto} onChange={handleChange} required className={inputStyle}>
                            <option value="tartas">Tartas</option>
                            <option value="cupcakes">Cupcakes</option>
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
                    disabled={status === 'sending'} 
                    className={`w-full py-3 mt-4 text-white font-semibold rounded-full transition duration-200 shadow-lg text-lg 
                                ${status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : buttonBase}`}
                >
                    {status === 'sending' ? 'Enviando Solicitud...' : 'Enviar Solicitud de Pedido'}
                </button>
                <p className="text-center text-sm text-gray-600 mt-3">
                    Nota: Esto es una solicitud. Te contactaremos para confirmar disponibilidad y el precio final.
                </p>

            </div>
        </form>
    );
};

export default PedidoForm;
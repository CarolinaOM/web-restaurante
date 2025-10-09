// src/components/TermsAndConditionsContent.tsx
import React from 'react';

const TermsAndConditionsContent: React.FC = () => {
    const fuchsiaAccent = 'text-fuchsia-700';

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className={`text-4xl md:text-5xl font-extrabold mb-8 ${fuchsiaAccent} border-b-2 border-pink-300 pb-3`}>
                Términos y Condiciones
            </h1>
            
            <p className="text-gray-600 mb-6">
                **Fecha de vigencia: 7 de Octubre de 2025**
            </p>

            {/* ACEPTACIÓN DE LOS TÉRMINOS */}
            <h2 className={`text-3xl font-bold mt-8 mb-4 ${fuchsiaAccent}`}>
                1. Aceptación de los Términos
            </h2>
            <p className="text-gray-700 mb-6">
                Al acceder y utilizar el sitio web de **MacarmiDeli**, usted acepta estar sujeto a estos Términos y Condiciones, nuestra Política de Privacidad y todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido utilizar o acceder a este sitio.
            </p>

            {/* PEDIDOS Y ENCARGOS */}
            <h2 className={`text-3xl font-bold mt-8 mb-4 ${fuchsiaAccent}`}>
                2. Pedidos y Encargos
            </h2>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-6 space-y-3">
                <li>
                    **Plazo de Preparación:** Todos los productos se preparan bajo pedido. El tiempo mínimo de preparación es de **48 horas** desde la confirmación del pago.
                </li>
                <li>
                    **Cancelaciones:** Las cancelaciones de pedidos solo se aceptarán dentro de las 12 horas siguientes a la confirmación. Después de este plazo, MacarmiDeli puede retener hasta el 50% del importe total.
                </li>
                <li>
                    **Precios:** Los precios de los productos están sujetos a cambios sin previo aviso.
                </li>
            </ul>

            {/* PROPIEDAD INTELECTUAL */}
            <h2 className={`text-3xl font-bold mt-8 mb-4 ${fuchsiaAccent}`}>
                3. Propiedad Intelectual
            </h2>
            <p className="text-gray-700 mb-6">
                Todo el contenido de este sitio web (incluyendo textos, gráficos, logotipos, iconos, imágenes y software) es propiedad de MacarmiDeli o sus proveedores de contenido y está protegido por las leyes de derechos de autor.
            </p>
            
            {/* LIMITACIÓN DE RESPONSABILIDAD */}
            <h2 className={`text-3xl font-bold mt-8 mb-4 ${fuchsiaAccent}`}>
                4. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-700 mb-6">
                MacarmiDeli no será responsable por ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad de usar los productos adquiridos o la información proporcionada en este sitio.
            </p>

        </div>
    );
};

export default TermsAndConditionsContent;
// src/components/PrivacyPolicyContent.tsx
import React from 'react';

const PrivacyPolicyContent: React.FC = () => {
    const fuchsiaAccent = 'text-fuchsia-700';

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className={`text-4xl md:text-5xl font-extrabold mb-8 ${fuchsiaAccent} border-b-2 border-pink-300 pb-3`}>
                Política de Privacidad
            </h1>
            
            <p className="text-gray-600 mb-6">
                **Fecha de última actualización: 7 de Octubre de 2025**
            </p>

            {/* INTRODUCCIÓN */}
            <h2 className={`text-3xl font-bold mt-8 mb-4 ${fuchsiaAccent}`}>
                1. Introducción
            </h2>
            <p className="text-gray-700 mb-6">
                En **MacarmiDeli**, valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que usted nos proporciona a través de este sitio web.
            </p>

            {/* INFORMACIÓN QUE RECOPILAMOS */}
            <h2 className={`text-3xl font-bold mt-8 mb-4 ${fuchsiaAccent}`}>
                2. Información Recopilada
            </h2>
            <p className="text-gray-700 mb-4">
                Recopilamos información personal que usted nos proporciona voluntariamente cuando:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-6 space-y-2">
                <li>Realiza un pedido o encargo.</li>
                <li>Se suscribe a nuestro boletín de noticias.</li>
                <li>Utiliza nuestro formulario de contacto o pedidos.</li>
            </ul>
            <p className="text-gray-700 mb-6">
                Esta información puede incluir su **nombre, dirección de correo electrónico, número de teléfono y detalles de su pedido/encargo.**
            </p>

            {/* USO DE LA INFORMACIÓN */}
            <h2 className={`text-3xl font-bold mt-8 mb-4 ${fuchsiaAccent}`}>
                3. Uso de la Información
            </h2>
            <p className="text-gray-700 mb-6">
                Utilizamos la información recopilada para los siguientes propósitos:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-6 space-y-2">
                <li>Procesar y gestionar sus pedidos y encargos.</li>
                <li>Comunicarnos con usted sobre el estado de su pedido.</li>
                <li>Responder a sus consultas y proporcionar servicio al cliente.</li>
                <li>Mejorar nuestros productos y servicios.</li>
            </ul>

            {/* COOKIES */}
            <h2 className={`text-3xl font-bold mt-8 mb-4 ${fuchsiaAccent}`}>
                4. Cookies
            </h2>
            <p className="text-gray-700 mb-6">
                Este sitio web utiliza cookies técnicas para garantizar el correcto funcionamiento del sitio y cookies analíticas para entender cómo los visitantes usan nuestro sitio web (por ejemplo, Google Analytics). Usted puede ajustar la configuración de su navegador para rechazar cookies, aunque esto podría afectar la funcionalidad de algunas partes del sitio.
            </p>
            
            {/* ENLACES A TERCEROS */}
            <h2 className={`text-3xl font-bold mt-8 mb-4 ${fuchsiaAccent}`}>
                5. Enlaces a Sitios de Terceros
            </h2>
            <p className="text-gray-700 mb-6">
                Nuestro sitio web puede contener enlaces a otros sitios web (como Instagram o Facebook). No somos responsables de las prácticas de privacidad de estos sitios web. Le recomendamos leer sus políticas de privacidad.
            </p>
            
            {/* SUS DERECHOS */}
            <h2 className={`text-3xl font-bold mt-8 mb-4 ${fuchsiaAccent}`}>
                6. Sus Derechos
            </h2>
            <p className="text-gray-700 mb-6">
                De acuerdo con el Reglamento General de Protección de Datos (RGPD), usted tiene derecho a acceder, rectificar, limitar el tratamiento y suprimir sus datos personales. Puede ejercer estos derechos contactándonos a través de nuestro correo electrónico: <a href="mailto:macarmideli@gmail.com" className="text-pink-600 hover:text-pink-700 font-semibold">macarmideli@gmail.com</a>.
            </p>

        </div>
    );
};

export default PrivacyPolicyContent;
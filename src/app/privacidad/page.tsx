import type { Metadata } from "next";
import { LegalLayout, Section, SubSection, P, UL, LI, Strong, Notice } from "@/widgets/legal/legal-layout";

export const metadata: Metadata = {
  title: "Política de Privacidad - Vendfy",
  description:
    "Conoce cómo Vendfy recopila, usa, almacena y protege tus datos personales. Tu privacidad es nuestra prioridad.",
};

export default function PrivacidadPage() {
  return (
    <LegalLayout
      title="Política de Privacidad"
      subtitle="Cómo recopilamos, usamos y protegemos tu información personal en Vendfy."
      lastUpdated="Abril 2026"
    >
      <Section number="1" title="Introducción">
        <P>
          En <Strong>Vendfy S.R.L.</Strong> (en adelante, &quot;Vendfy&quot;, &quot;nosotros&quot; o &quot;el
          Operador&quot;), respetamos y protegemos la privacidad de todos los usuarios de nuestra
          plataforma. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y
          compartimos su información personal cuando utiliza nuestros servicios.
        </P>
        <P>
          Al registrarse o utilizar Vendfy, usted acepta las prácticas descritas en esta Política. Si no
          está de acuerdo con alguna parte, le recomendamos no utilizar la Plataforma.
        </P>
        <Notice>
          Esta Política cumple con la legislación vigente del Estado Plurinacional de Bolivia en materia
          de protección de datos personales.
        </Notice>
      </Section>

      <Section number="2" title="Información que Recopilamos">
        <SubSection title="2.1 Información proporcionada directamente">
          <P>Cuando se registra o utiliza la Plataforma, podemos recopilar:</P>
          <UL>
            <LI>
              <Strong>Datos de identificación:</Strong> nombre completo, número de documento, fecha de
              nacimiento.
            </LI>
            <LI>
              <Strong>Datos de contacto:</Strong> correo electrónico, número de teléfono, dirección
              física.
            </LI>
            <LI>
              <Strong>Datos de la cuenta:</Strong> nombre de usuario, contraseña encriptada,
              preferencias.
            </LI>
            <LI>
              <Strong>Datos comerciales (Comerciantes):</Strong> nombre de la tienda, NIT, datos
              fiscales, información del catálogo de productos.
            </LI>
            <LI>
              <Strong>Datos de pago:</Strong> información sobre métodos de pago configurados (procesados
              por terceros certificados).
            </LI>
          </UL>
        </SubSection>
        <SubSection title="2.2 Información recopilada automáticamente">
          <UL>
            <LI>
              <Strong>Datos de navegación:</Strong> dirección IP, tipo de navegador, sistema operativo,
              páginas visitadas, tiempo de permanencia.
            </LI>
            <LI>
              <Strong>Datos de dispositivo:</Strong> identificadores del dispositivo, modelo, sistema
              operativo, configuración regional.
            </LI>
            <LI>
              <Strong>Datos de geolocalización:</Strong> ubicación aproximada para mejorar la
              experiencia del marketplace (con su consentimiento).
            </LI>
            <LI>
              <Strong>Cookies y tecnologías similares:</Strong> para recordar sus preferencias y mejorar
              el rendimiento.
            </LI>
          </UL>
        </SubSection>
        <SubSection title="2.3 Información de WhatsApp y Asistente de IA">
          <P>
            Cuando interactúa con nuestro asistente de IA a través de WhatsApp, recopilamos los mensajes
            enviados para procesarlos y generar respuestas relevantes. No almacenamos contraseñas ni
            datos financieros sensibles a través de este canal.
          </P>
        </SubSection>
      </Section>

      <Section number="3" title="Cómo Usamos su Información">
        <P>Utilizamos la información recopilada para los siguientes fines:</P>
        <UL>
          <LI>Crear y gestionar su cuenta de usuario.</LI>
          <LI>Permitir el funcionamiento de tiendas virtuales y procesar pedidos.</LI>
          <LI>Conectar Clientes con Comerciantes a través del marketplace.</LI>
          <LI>Proporcionar respuestas a través del Asistente de IA.</LI>
          <LI>Mejorar la experiencia del usuario y personalizar el contenido.</LI>
          <LI>Enviar notificaciones sobre el estado de pedidos y novedades de la Plataforma.</LI>
          <LI>Detectar y prevenir fraudes, abusos o actividades ilegales.</LI>
          <LI>Cumplir con obligaciones legales y regulatorias aplicables.</LI>
          <LI>Realizar análisis estadísticos y mejoras al servicio.</LI>
        </UL>
      </Section>

      <Section number="4" title="Compartir Información">
        <SubSection title="4.1 Con otros usuarios">
          <P>
            Cuando un Cliente realiza una compra, sus datos de contacto y dirección de entrega son
            compartidos con el Comerciante correspondiente para concretar la transacción. Asimismo, el
            nombre de la Tienda y la información pública del Comerciante son visibles para los Clientes
            en el marketplace.
          </P>
        </SubSection>
        <SubSection title="4.2 Con proveedores de servicios">
          <P>
            Compartimos información con proveedores de confianza que nos ayudan a operar la Plataforma:
          </P>
          <UL>
            <LI>Servicios de hosting y almacenamiento en la nube.</LI>
            <LI>Pasarelas de pago y procesadores de transacciones.</LI>
            <LI>Servicios de mensajería (WhatsApp, correo electrónico).</LI>
            <LI>Herramientas de análisis y métricas.</LI>
            <LI>Proveedores de inteligencia artificial.</LI>
          </UL>
          <P>
            Todos los proveedores están obligados contractualmente a proteger su información y solo
            pueden usarla para los fines específicos para los que fueron contratados.
          </P>
        </SubSection>
        <SubSection title="4.3 Por requerimiento legal">
          <P>
            Podemos divulgar información personal cuando sea requerido por ley, orden judicial o
            autoridad competente del Estado Plurinacional de Bolivia, o cuando consideremos de buena fe
            que es necesario para proteger derechos, propiedad o seguridad.
          </P>
        </SubSection>
        <SubSection title="4.4 No vendemos sus datos">
          <Notice>
            Vendfy NO vende, alquila ni comercializa su información personal a terceros con fines
            publicitarios o de marketing.
          </Notice>
        </SubSection>
      </Section>

      <Section number="5" title="Seguridad de la Información">
        <P>
          Implementamos medidas técnicas, administrativas y físicas razonables para proteger su
          información personal contra acceso no autorizado, alteración, divulgación o destrucción.
          Algunas de estas medidas incluyen:
        </P>
        <UL>
          <LI>Encriptación de datos sensibles en tránsito y en reposo (HTTPS/TLS).</LI>
          <LI>Hash seguro de contraseñas mediante algoritmos modernos.</LI>
          <LI>Controles de acceso basados en roles y autenticación.</LI>
          <LI>Monitoreo continuo de la infraestructura para detectar incidentes.</LI>
          <LI>Copias de seguridad periódicas de la información.</LI>
        </UL>
        <P>
          Aunque tomamos todas las precauciones razonables, ningún sistema es 100% seguro. En caso de un
          incidente de seguridad que afecte sus datos, le notificaremos en el plazo establecido por la
          legislación vigente.
        </P>
      </Section>

      <Section number="6" title="Retención de Datos">
        <P>
          Conservamos su información personal durante el tiempo necesario para cumplir con los fines
          descritos en esta Política, salvo que la ley exija o permita un período de retención mayor.
        </P>
        <UL>
          <LI>
            <Strong>Cuentas activas:</Strong> mientras la cuenta permanezca activa.
          </LI>
          <LI>
            <Strong>Cuentas inactivas:</Strong> hasta 24 meses después de la última actividad.
          </LI>
          <LI>
            <Strong>Datos de transacciones:</Strong> conforme al período exigido por la legislación
            fiscal y mercantil boliviana.
          </LI>
          <LI>
            <Strong>Datos de soporte:</Strong> hasta 12 meses después de la última interacción.
          </LI>
        </UL>
      </Section>

      <Section number="7" title="Sus Derechos">
        <P>
          Usted tiene los siguientes derechos sobre su información personal, conforme a la legislación
          vigente:
        </P>
        <UL>
          <LI>
            <Strong>Acceso:</Strong> solicitar una copia de los datos personales que tenemos sobre usted.
          </LI>
          <LI>
            <Strong>Rectificación:</Strong> corregir datos inexactos o incompletos.
          </LI>
          <LI>
            <Strong>Eliminación:</Strong> solicitar la eliminación de sus datos cuando ya no sean
            necesarios.
          </LI>
          <LI>
            <Strong>Oposición:</Strong> oponerse al tratamiento de sus datos para fines específicos.
          </LI>
          <LI>
            <Strong>Portabilidad:</Strong> recibir sus datos en un formato estructurado y legible.
          </LI>
          <LI>
            <Strong>Revocación del consentimiento:</Strong> retirar su consentimiento en cualquier
            momento.
          </LI>
        </UL>
        <P>
          Para ejercer cualquiera de estos derechos, puede contactarnos a través de los canales
          indicados en la sección de Contacto. Responderemos a su solicitud en un plazo razonable.
        </P>
      </Section>

      <Section number="8" title="Cookies y Tecnologías Similares">
        <P>
          Utilizamos cookies y tecnologías similares para mejorar la experiencia de navegación, recordar
          preferencias y analizar el uso de la Plataforma. Las cookies pueden ser:
        </P>
        <UL>
          <LI>
            <Strong>Esenciales:</Strong> necesarias para el funcionamiento básico de la Plataforma.
          </LI>
          <LI>
            <Strong>De rendimiento:</Strong> para entender cómo los usuarios interactúan con el sitio.
          </LI>
          <LI>
            <Strong>De funcionalidad:</Strong> para recordar sus preferencias y configuraciones.
          </LI>
        </UL>
        <P>
          Puede gestionar las cookies desde la configuración de su navegador. Tenga en cuenta que
          deshabilitar ciertas cookies puede afectar el funcionamiento de la Plataforma.
        </P>
      </Section>

      <Section number="9" title="Menores de Edad">
        <P>
          La Plataforma no está dirigida a menores de edad. No recopilamos intencionalmente información
          personal de personas menores de 18 años. Si detectamos que hemos recopilado datos de un menor
          sin el consentimiento adecuado, los eliminaremos de forma inmediata.
        </P>
      </Section>

      <Section number="10" title="Transferencias Internacionales">
        <P>
          Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Estado
          Plurinacional de Bolivia. En estos casos, nos aseguramos de que existan garantías adecuadas
          para proteger su información conforme a estándares internacionales de privacidad.
        </P>
      </Section>

      <Section number="11" title="Modificaciones a esta Política">
        <P>
          Vendfy puede actualizar esta Política de Privacidad periódicamente. Las modificaciones serán
          notificadas a través de la Plataforma o por correo electrónico, con una antelación razonable
          antes de su entrada en vigor. El uso continuado de la Plataforma después de la publicación
          constituirá la aceptación de los cambios.
        </P>
      </Section>

      <Section number="12" title="Contacto">
        <P>
          Si tiene preguntas, inquietudes o desea ejercer sus derechos sobre sus datos personales, puede
          contactarnos a través de:
        </P>
        <UL>
          <LI>
            <Strong>Correo electrónico:</Strong> privacidad@vendfy.shop
          </LI>
          <LI>
            <Strong>WhatsApp:</Strong> +591 71890091
          </LI>
          <LI>
            <Strong>Dirección:</Strong> Santa Cruz, Bolivia
          </LI>
        </UL>
        <Notice>
          Su privacidad es nuestra prioridad. Estamos comprometidos a proteger sus datos y a tratarlos
          con el máximo respeto y transparencia.
        </Notice>
      </Section>
    </LegalLayout>
  );
}

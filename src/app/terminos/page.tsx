import type { Metadata } from "next";
import { LegalLayout, Section, SubSection, P, UL, LI, Strong, Notice } from "@/widgets/legal/legal-layout";

export const metadata: Metadata = {
  title: "Términos y Condiciones - Vendfy",
  description:
    "Términos y condiciones de uso de la plataforma Vendfy. Conoce las reglas que rigen el uso del marketplace, las tiendas virtuales y los servicios asociados.",
};

export default function TerminosPage() {
  return (
    <LegalLayout
      title="Términos y Condiciones de Uso"
      subtitle="Plataforma Vendfy — Las reglas que rigen el uso de nuestro servicio."
      lastUpdated="Abril 2026"
    >
      <Section number="1" title="Introducción y Aceptación">
        <P>
          El presente documento establece los Términos y Condiciones de Uso (en adelante, &quot;los
          Términos&quot;) que regulan el acceso y uso de la plataforma tecnológica <Strong>Vendfy</Strong>{" "}
          (en adelante, &quot;la Plataforma&quot;), incluyendo el sitio web, las aplicaciones móviles y
          todos los servicios asociados, operados por <Strong>Vendfy S.R.L.</Strong> (en adelante,
          &quot;Vendfy&quot;, &quot;nosotros&quot; o &quot;el Operador&quot;), con domicilio en La Paz, Estado
          Plurinacional de Bolivia.
        </P>
        <P>
          Al registrarse, acceder o utilizar la Plataforma en cualquiera de sus modalidades, ya sea como{" "}
          <Strong>Comerciante</Strong>, <Strong>Cliente</Strong> o <Strong>Visitante</Strong>, usted
          declara haber leído, comprendido y aceptado de manera expresa e inequívoca la totalidad de estos
          Términos, así como nuestra Política de Privacidad.
        </P>
        <Notice>
          SI NO ESTÁ DE ACUERDO CON ESTOS TÉRMINOS, NO DEBERÁ REGISTRARSE NI UTILIZAR LA PLATAFORMA.
        </Notice>
      </Section>

      <Section number="2" title="Definiciones">
        <P>Para efectos de estos Términos, se entenderá por:</P>
        <UL>
          <LI>
            <Strong>Plataforma:</Strong> El conjunto de herramientas tecnológicas de Vendfy, incluyendo el
            sitio web, las aplicaciones móviles, las APIs y todos los servicios digitales asociados.
          </LI>
          <LI>
            <Strong>Comerciante:</Strong> Toda persona natural o jurídica que se registra en la Plataforma
            para crear, administrar y operar una o más tiendas virtuales.
          </LI>
          <LI>
            <Strong>Cliente:</Strong> Toda persona natural que accede a la Plataforma a través del
            marketplace o las tiendas públicas para explorar y adquirir productos.
          </LI>
          <LI>
            <Strong>Tienda:</Strong> El espacio virtual creado y personalizado por un Comerciante dentro
            de la Plataforma.
          </LI>
          <LI>
            <Strong>Marketplace:</Strong> La funcionalidad que permite a los Clientes explorar productos
            de múltiples Tiendas de forma centralizada.
          </LI>
          <LI>
            <Strong>Catálogo Global:</Strong> El conjunto unificado de productos donde cada producto
            existe como registro único y puede ser ofrecido por múltiples Tiendas.
          </LI>
          <LI>
            <Strong>Asistente de IA:</Strong> El sistema de inteligencia artificial integrado con WhatsApp
            que permite a los Clientes realizar consultas automatizadas.
          </LI>
        </UL>
      </Section>

      <Section number="3" title="Naturaleza del Servicio">
        <SubSection title="3.1 Rol de Vendfy como Intermediario Tecnológico">
          <P>
            Vendfy es una <Strong>plataforma tecnológica de intermediación</Strong> que conecta a
            Comerciantes con Clientes. Vendfy <Strong>NO es</Strong> el vendedor, propietario ni
            distribuidor de los productos ofrecidos en sus Tiendas.
          </P>
          <P>
            La responsabilidad sobre los productos, su descripción, imágenes, precios, stock, entrega y
            servicio postventa recae exclusivamente en el Comerciante titular de la Tienda.
          </P>
        </SubSection>
        <SubSection title="3.2 Servicios Ofrecidos">
          <UL>
            <LI>Creación y administración de tiendas virtuales para Comerciantes.</LI>
            <LI>Marketplace centralizado para que los Clientes exploren productos de múltiples Tiendas.</LI>
            <LI>Sistema de gestión de inventario, pedidos y ventas.</LI>
            <LI>Catálogo global de productos con comparación de precios entre Tiendas.</LI>
            <LI>Integración con asistente de IA vía WhatsApp para atención al cliente automatizada.</LI>
            <LI>Herramientas de personalización visual para las Tiendas.</LI>
            <LI>Sistema de notificaciones sobre estados de pedidos.</LI>
          </UL>
        </SubSection>
      </Section>

      <Section number="4" title="Cuentas de Usuario">
        <SubSection title="4.1 Registro">
          <P>
            Para acceder a las funcionalidades de la Plataforma, los usuarios deben crear una Cuenta
            proporcionando información veraz, completa y actualizada. Vendfy se reserva el derecho de
            verificar la información y de rechazar registros con datos falsos.
          </P>
        </SubSection>
        <SubSection title="4.2 Uso Personal e Intransferible">
          <P>
            Las Cuentas son personales e intransferibles. Los usuarios no están autorizados a ceder,
            transferir o compartir sus credenciales con terceros. El titular es el único responsable de
            todas las actividades que se realicen bajo su cuenta.
          </P>
        </SubSection>
        <SubSection title="4.3 Suspensión y Cancelación">
          <P>Vendfy se reserva el derecho de suspender o cancelar Cuentas que:</P>
          <UL>
            <LI>Infrinjan estos Términos o cualquier normativa aplicable.</LI>
            <LI>Realicen actividades fraudulentas o perjudiciales para otros usuarios.</LI>
            <LI>Publiquen productos prohibidos o ilegales.</LI>
            <LI>Manipulen calificaciones o el sistema de posicionamiento del marketplace.</LI>
          </UL>
        </SubSection>
      </Section>

      <Section number="5" title="Términos para Comerciantes">
        <SubSection title="5.1 Publicación de Productos">
          <P>Al publicar productos en la Plataforma, el Comerciante declara y garantiza que:</P>
          <UL>
            <LI>Tiene el derecho legal de vender los productos ofrecidos.</LI>
            <LI>Las descripciones, imágenes y precios son veraces y no inducen a error.</LI>
            <LI>Los productos cumplen con la legislación vigente del Estado Plurinacional de Bolivia.</LI>
            <LI>No ofrecerá productos prohibidos, ilegales, falsificados o que infrinjan derechos de terceros.</LI>
          </UL>
        </SubSection>
        <SubSection title="5.2 Catálogo Global">
          <P>
            Los productos forman parte de un Catálogo Global. Cuando un producto ya existe, el Comerciante
            debe vincularse al registro existente y definir su propio precio, disponibilidad e imágenes
            personalizadas. La información base del producto es compartida para beneficio de todos los
            usuarios.
          </P>
        </SubSection>
        <SubSection title="5.3 Posicionamiento en el Marketplace">
          <P>
            La visibilidad de los productos se determina mediante un algoritmo que combina proximidad
            geográfica, calificación de la tienda, disponibilidad de stock, relevancia y rotación
            equitativa.
          </P>
          <P>
            Vendfy se compromete a mantener un sistema justo y transparente. Queda estrictamente prohibido
            manipular el sistema mediante productos duplicados, calificaciones falsas o cuentas ficticias.
          </P>
        </SubSection>
        <SubSection title="5.4 Precios y Pagos">
          <P>
            Los Comerciantes son los únicos responsables de establecer los precios de sus productos. Todos
            los precios deben incluir impuestos aplicables. Vendfy no interviene en la fijación de
            precios.
          </P>
        </SubSection>
        <SubSection title="5.5 Planes y Suscripciones">
          <P>
            El acceso a las funcionalidades para Comerciantes está sujeto a los planes de suscripción
            vigentes, publicados en la Plataforma y actualizables con previo aviso.
          </P>
        </SubSection>
      </Section>

      <Section number="6" title="Términos para Clientes">
        <SubSection title="6.1 Uso del Marketplace">
          <P>
            Los Clientes pueden explorar el Marketplace, comparar precios y realizar compras. Al efectuar
            una compra, el Cliente entiende que la relación comercial se establece directamente con el
            Comerciante, no con Vendfy.
          </P>
        </SubSection>
        <SubSection title="6.2 Calificaciones y Reseñas">
          <P>
            Las reseñas deben ser honestas, basadas en experiencias reales y respetuosas. Vendfy se
            reserva el derecho de eliminar reseñas falsas, ofensivas, difamatorias o spam.
          </P>
        </SubSection>
        <SubSection title="6.3 Cancelaciones y Devoluciones">
          <P>
            Las políticas de cancelación, devolución y reembolso son establecidas por cada Comerciante de
            acuerdo con la legislación de protección al consumidor. Vendfy podrá intervenir como mediador
            en caso de controversias.
          </P>
        </SubSection>
      </Section>

      <Section number="7" title="Asistente de Inteligencia Artificial">
        <P>
          La Plataforma ofrece un asistente virtual basado en IA que opera a través de WhatsApp para
          responder consultas sobre productos, precios y disponibilidad. Las respuestas se basan en la
          información proporcionada por los Comerciantes.
        </P>
        <P>
          El Asistente de IA es una herramienta de apoyo. Vendfy no garantiza que las respuestas sean
          siempre precisas o actualizadas en tiempo real. Los Clientes deben verificar la información
          directamente con el Comerciante antes de tomar decisiones de compra.
        </P>
      </Section>

      <Section number="8" title="Propiedad Intelectual">
        <P>
          Los derechos de propiedad intelectual sobre la Plataforma, incluyendo software, código fuente,
          diseño, logotipos, marcas, algoritmos y sistemas de IA, son propiedad exclusiva de Vendfy S.R.L.
          La Plataforma está protegida por las Leyes de Derechos de Autor del Estado Plurinacional de
          Bolivia.
        </P>
        <P>
          Los Comerciantes conservan la propiedad de las imágenes y contenido que publican, pero otorgan a
          Vendfy una licencia no exclusiva, gratuita y mundial para utilizar dicho contenido dentro de la
          Plataforma.
        </P>
      </Section>

      <Section number="9" title="Conductas Prohibidas">
        <P>Los usuarios se comprometen a NO:</P>
        <UL>
          <LI>Utilizar la Plataforma para fines ilegales, fraudulentos o no autorizados.</LI>
          <LI>Publicar productos falsificados, robados o ilegales.</LI>
          <LI>Crear cuentas falsas o suplantar la identidad de terceros.</LI>
          <LI>Manipular el sistema de calificaciones, reseñas o posicionamiento.</LI>
          <LI>Duplicar productos intencionalmente para obtener ventaja indebida.</LI>
          <LI>Extraer o recopilar datos de otros usuarios sin consentimiento.</LI>
          <LI>Interferir o acceder de forma no autorizada a los sistemas de la Plataforma.</LI>
          <LI>Utilizar bots o scrapers sin autorización expresa.</LI>
          <LI>Publicar contenido ofensivo, discriminatorio o difamatorio.</LI>
          <LI>Contactar a Clientes de otros Comerciantes con fines de captación fuera de la Plataforma.</LI>
        </UL>
      </Section>

      <Section number="10" title="Limitación de Responsabilidad">
        <P>
          Vendfy hará esfuerzos razonables para mantener la Plataforma disponible, pero no garantiza que
          el servicio sea ininterrumpido o libre de errores. Vendfy no es responsable de las transacciones
          realizadas entre Comerciantes y Clientes, incluyendo calidad de productos, cumplimiento de
          entregas o cualquier disputa derivada de la relación comercial entre las partes.
        </P>
      </Section>

      <Section number="11" title="Modificaciones">
        <P>
          Vendfy se reserva el derecho de modificar estos Términos en cualquier momento. Las
          modificaciones serán notificadas a través de la Plataforma con antelación razonable. El uso
          continuado constituirá la aceptación de los nuevos Términos.
        </P>
      </Section>

      <Section number="12" title="Legislación Aplicable">
        <P>
          Estos Términos se rigen por las leyes del Estado Plurinacional de Bolivia. Cualquier
          controversia será sometida a la jurisdicción de los tribunales competentes de la ciudad de La
          Paz, renunciando las partes a cualquier otro fuero.
        </P>
      </Section>

      <Section number="13" title="Contacto">
        <P>
          Para consultas, reclamos o comunicaciones relacionadas con estos Términos, los usuarios pueden
          contactarnos a través de:
        </P>
        <UL>
          <LI>
            <Strong>Correo electrónico:</Strong> soporte@vendfy.shop
          </LI>
          <LI>
            <Strong>WhatsApp:</Strong> +591 71890091
          </LI>
          <LI>
            <Strong>Dirección:</Strong> Santa Cruz, Bolivia
          </LI>
        </UL>
        <Notice>
          AL REGISTRARSE O UTILIZAR LA PLATAFORMA, USTED DECLARA QUE HA LEÍDO, COMPRENDIDO Y ACEPTADO LA
          TOTALIDAD DE ESTOS TÉRMINOS Y CONDICIONES.
        </Notice>
      </Section>
    </LegalLayout>
  );
}

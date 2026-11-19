/**
 * Lo que la landing dice de Vendfy, en un solo lugar: lo usan las secciones de
 * precios, preguntas y novedades, y también el asistente del chat (que responde
 * SOLO con esto). Si cambia un precio o una función, se cambia aquí.
 */
import { DESCARGAS } from "./descargas";

export const CONTACTO = {
  whatsapp: "+591 71890091",
  correo: "andres.03.12.2003@gmail.com",
  ciudad: "Santa Cruz, Bolivia",
};

export const PLANES = [
  {
    nombre: "Emprendedor",
    precio: "149",
    texto: "Para el negocio que recién se digitaliza.",
    destacado: false,
    incluye: ["1 tienda online", "Caja completa", "Inventario sin límite de productos", "Reportes", "Apps de Windows y Android", "Clientes", "Soporte por WhatsApp"],
  },
  {
    nombre: "Profesional",
    precio: "299",
    texto: "Para el negocio que crece y quiere más herramientas.",
    destacado: true,
    incluye: ["Hasta 3 tiendas online", "Todo lo del plan Emprendedor", "Productos con IA", "Descripciones y etiquetas con IA", "WhatsApp con IA", "Temas para tu tienda", "Delivery con costo de envío", "Soporte prioritario"],
  },
  {
    nombre: "Empresarial",
    precio: null,
    texto: "A medida, para empresas con varias sucursales.",
    destacado: false,
    incluye: ["Tiendas sin límite", "Todo lo del plan Profesional", "Varios usuarios con roles", "API personalizada", "Integraciones a medida", "Capacitación del equipo", "Gerente de cuenta dedicado", "SLA garantizado"],
  },
] as const;

export const EXTRAS = [
  { nombre: "WhatsApp con IA", precio: "99", texto: "Respuestas automáticas a cualquier hora con tu inventario." },
  { nombre: "IA Premium", precio: "79", texto: "Carga y mejora de productos con IA sin límite." },
] as const;

export const PREGUNTAS = [
  {
    p: "¿Tengo que instalar algo?",
    r: "No. Vendfy funciona en el navegador: entras con tu correo y listo. Las apps de Windows y Android suman lo que el navegador no puede: abrirse solas con la computadora, el atajo F9 desde cualquier programa y «Oye Vendfy» con la app minimizada o la pantalla apagada.",
  },
  {
    p: "¿En qué equipos funciona?",
    r: "En la web (Chrome, Edge, Safari o Firefox, en cualquier computadora), en Windows 10 y 11, en Android 7 o superior, y en iPhone y iPad desde Safari. Es la misma cuenta en todos.",
  },
  {
    p: "¿Cómo funciona «Oye Vendfy»? ¿Me escucha todo el tiempo?",
    r: "Solo si prendes manos libres. El detector de la palabra corre en tu propio equipo y nada se envía hasta que oye «Oye Vendfy». Después manda lo que dijiste para entenderlo, y antes de cobrar o cambiar el stock te pide un «sí».",
  },
  {
    p: "¿Qué hace el agente de WhatsApp?",
    r: "Responde a tus clientes a cualquier hora con tu catálogo, tus precios y tu stock reales, arma el carrito y crea el pedido. Tú ves cada conversación en el tablero de chats y puedes tomarla cuando quieras.",
  },
  {
    p: "¿Puedo hacer anuncios en Facebook e Instagram desde Vendfy?",
    r: "Sí. En Marketing, Vendfy mira tus ventas y tu stock, te propone qué anunciar y cuánto invertir, y publica la campaña en Meta como anuncio de «clic a WhatsApp». Después te muestra cuántas personas escribieron, cuántas compraron y cuánto vendió cada campaña.",
  },
  {
    p: "¿Puedo usar un lector de código de barras?",
    r: "Sí. En la caja y en el inventario puedes buscar escribiendo o escaneando con un lector de código de barras.",
  },
  {
    p: "¿Cómo cargo mis productos?",
    r: "Uno por uno, o de golpe desde un Excel, un PDF o una foto: la IA arma la lista con nombres, precios y categorías, y la revisas antes de crearla.",
  },
  {
    p: "¿Cómo empiezo?",
    r: "Crea tu cuenta desde esta página, o escríbenos por WhatsApp y te ayudamos a configurar tu tienda y a cargar tus productos.",
  },
] as const;

export const NOVEDADES = [
  {
    fecha: "19/11/2026",
    titulo: "Guía de uso con capturas",
    texto: "Cada pantalla del panel con su captura real y cada botón explicado. Se abre sin iniciar sesión.",
    enlace: { texto: "Ver la guía", href: "https://app.vendfy.shop/guia" },
  },
  {
    fecha: "19/11/2026",
    titulo: "Marketing, WhatsApp e Integraciones en un solo módulo",
    texto: "Las campañas, sus chats de WhatsApp y lo que vendieron, en un mismo lugar, con las conexiones a la vista.",
  },
  {
    fecha: "18/11/2026",
    titulo: "Campañas en Meta y tablero de chats",
    texto: "Ideas de campaña con tus datos, anuncios de «clic a WhatsApp» en Facebook e Instagram y cada persona avanzando por etapas hasta la compra.",
  },
  {
    fecha: "18/11/2026",
    titulo: "La bola de Vendfy, con subtítulos y voz de hombre",
    texto: "El piloto por voz se renovó: suena al activarse, habla con una voz más natural y escribe lo que dice al ritmo de la voz.",
    enlace: { texto: "Descargar la app", href: "/descargar" },
  },
  {
    fecha: "18/11/2026",
    titulo: "Ventas a cuotas y presentaciones en la Caja",
    texto: "Cobra en cuotas, vende por presentación (unidad, caja, paquete) y exporta a Excel. En el Live, cuenta regresiva de las subastas.",
  },
  {
    fecha: "17/11/2026",
    titulo: "«Oye Vendfy» manos libres en Windows y Android",
    texto: `Vende y cobra hablando, con la app minimizada o la pantalla apagada. Windows ${DESCARGAS.windows.version} y Android ${DESCARGAS.android.version}.`,
    enlace: { texto: "Descargar", href: "/descargar" },
  },
  {
    fecha: "16/11/2026",
    titulo: "Equipo, roles y sucursales",
    texto: "Agrega a tu cajero o a tu encargado de inventario: cada uno entra con su usuario y ve solo lo suyo. Y un asistente de IA para diseñar tu tienda.",
  },
] as const;

/** El texto que recibe el asistente del chat: todo lo que puede decir de Vendfy. */
export function conocimiento() {
  const planes = PLANES.map((p) => `- ${p.nombre}: ${p.precio ? `Bs ${p.precio} al mes` : "precio a medida"}. ${p.texto} Incluye: ${p.incluye.join(", ")}.`).join("\n");
  const extras = EXTRAS.map((e) => `- ${e.nombre}: Bs ${e.precio} al mes. ${e.texto}`).join("\n");
  const preguntas = PREGUNTAS.map((q) => `P: ${q.p}\nR: ${q.r}`).join("\n");
  const novedades = NOVEDADES.map((n) => `- ${n.fecha}: ${n.titulo}. ${n.texto}`).join("\n");
  return `QUÉ ES VENDFY
Vendfy es una plataforma de gestión comercial para comercios pequeños y medianos de Bolivia (tiendas de barrio, minimarkets, boutiques, perfumerías, ferreterías, farmacias). Junta en una sola cuenta: caja (punto de venta), inventario, compras a proveedores, pedidos, clientes, tienda online, WhatsApp con un agente de IA, marketing con anuncios de Meta, venta en vivo (Modo Live) y reportes. Tiene un asistente al que le escribes o le hablas («vendí 2 cocas», «¿cuánto vendí ayer?») y que antes de guardar un cambio muestra el antes y el después.

MÓDULOS
- Asistente: escribes o dictas; responde con los datos de tu tienda y prepara ventas, compras y cambios de precio para que los confirmes.
- Caja: vende en el mostrador tocando productos, escaneando o por voz; cobra en efectivo, QR, tarjeta o dólares (con el dólar del día); ventas rápidas, a cuotas o con delivery.
- Inventario y productos: stock en tiempo real, movimientos, avisos de lo que se acaba, venta por medida y presentaciones; alta de productos con IA desde una foto, un Excel o un PDF.
- Compras: registra lo que compras a proveedores; la IA lee la factura y arma la compra; al recibir, sube el stock.
- Pedidos: tablero por estado (por confirmar, pendiente, en proceso, en camino, completado) con los pedidos de la tienda web, WhatsApp y el Live.
- Clientes: datos e historial de compras, y reseñas para mostrar en la tienda.
- Tienda online: página pública personalizable (plantillas por rubro, colores, letras), catálogo con precios y pedidos; también se puede construir con asistentes de IA externos por el conector MCP.
- WhatsApp con IA: el agente responde a tus clientes con tu catálogo real, arma el carrito y crea el pedido; puedes tomar el chat.
- Marketing: ideas de campaña con tus datos, anuncios de «clic a WhatsApp» en Facebook e Instagram, tablero de chats por etapas y cuánto vendió cada campaña.
- Modo Live: vende en vivo por redes con un enlace; compra directa o subastas con pujas en tiempo real.
- Promociones: descuentos con fecha de inicio y fin, con página propia para compartir.
- Reportes: ingresos, inversión, ganancia, margen y pedidos por período, con gráficos y exportación a Excel.
- Equipo: usuarios con roles (administrador, cajero, encargado de inventario o roles propios) y sucursales.
- «Oye Vendfy»: piloto por voz manos libres; en Windows y Android escucha la palabra aunque la app esté minimizada. Responde con voz y subtítulos.

EQUIPOS Y DESCARGAS
Web (app.vendfy.shop, sin instalar), Windows 10/11 (${DESCARGAS.windows.peso}, versión ${DESCARGAS.windows.version}), Android 7 o superior (${DESCARGAS.android.peso}, versión ${DESCARGAS.android.version}), iPhone y iPad desde Safari (Agregar a inicio). Las descargas están en vendfy.shop/descargar. La guía de uso con capturas está en app.vendfy.shop/guia.

PRECIOS (en bolivianos, por mes)
${planes}
Complementos:
${extras}

PREGUNTAS FRECUENTES
${preguntas}

NOVEDADES
${novedades}

CONTACTO
WhatsApp ${CONTACTO.whatsapp}; correo ${CONTACTO.correo}; ${CONTACTO.ciudad}. Para crear la cuenta: app.vendfy.shop/register.`;
}

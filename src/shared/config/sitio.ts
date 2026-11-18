/**
 * Direcciones y datos del sitio en un solo lugar.
 *
 * El panel vive en la cuenta de Vercel andyqdev (vendfy-panel.vercel.app).
 * Cuando app.vendfy.shop apunte ahí, basta con NEXT_PUBLIC_APP_URL.
 */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://vendfy-panel.vercel.app";

export const URL_LOGIN = `${APP_URL}/login`;
export const URL_REGISTRO = `${APP_URL}/register`;

const WA_NUMERO = "59171890091";
export const whatsapp = (texto = "Hola, me interesa Vendfy") =>
  `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent(texto)}`;

export const SITIO_URL = "https://vendfy.shop";

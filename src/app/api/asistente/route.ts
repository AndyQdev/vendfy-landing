import { CONTACTO, PREGUNTAS, conocimiento } from "@/shared/config/vendfy";

/**
 * POST /api/asistente — el asistente del chat de la landing.
 *
 * Responde solo con lo que la landing dice de Vendfy (`conocimiento()`), con
 * Gemini por Vertex AI (la misma API que usa el backend de Vendfy). La clave
 * vive en el servidor (GEMINI_API_KEY); el navegador nunca la ve. Sin clave, o
 * si Gemini falla, contesta con la pregunta frecuente que más se parece y
 * ofrece el WhatsApp del equipo.
 */
type Mensaje = { rol: "usuario" | "asistente"; texto: string };

const MODELO = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";
const BASE = process.env.GEMINI_BASE_URL || "https://aiplatform.googleapis.com/v1/publishers/google";
const MAX_MENSAJES = 12;
const MAX_LARGO = 800;

// Un tope simple por IP: 20 preguntas cada 10 minutos (por instancia del servidor).
const usos = new Map<string, number[]>();
function permitido(ip: string) {
  const ahora = Date.now();
  const recientes = (usos.get(ip) ?? []).filter((t) => ahora - t < 10 * 60_000);
  if (recientes.length >= 20) return false;
  recientes.push(ahora);
  usos.set(ip, recientes);
  if (usos.size > 5000) usos.clear();
  return true;
}

const INSTRUCCIONES = `Eres el asistente de la página web de Vendfy. Atiendes a dueños de negocios que están conociendo Vendfy.
Reglas:
- Responde SIEMPRE en español, tuteando (tú, tienes, puedes), NUNCA con voseo (nada de "vos", "tenés", "podés", "querés").
- Responde solo con la información de abajo. Si no está, dilo con honestidad y ofrece el WhatsApp ${CONTACTO.whatsapp} o el correo ${CONTACTO.correo}. No inventes precios, funciones, plazos, descuentos ni pruebas gratuitas.
- Sé breve: 1 a 4 oraciones o una lista corta. Texto plano; puedes usar guiones para listas. Sin títulos ni tablas.
- Solo si la persona pregunta cómo empezar, contratar o hablar con alguien, indícale crear su cuenta en app.vendfy.shop/register o escribir por WhatsApp. No lo repitas en cada respuesta.
- Nunca pidas contraseñas, datos de tarjetas ni documentos. Si alguien comparte datos personales, no los repitas.
- Si te preguntan algo que no tiene que ver con Vendfy o con vender en un comercio, vuelve con amabilidad al tema.

INFORMACIÓN DE VENDFY:
${conocimiento()}`;

function normalizar(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/** Sin IA: la pregunta frecuente con más palabras en común. */
function respaldo(pregunta: string) {
  const palabras = new Set(normalizar(pregunta).split(/[^a-z0-9ñ]+/).filter((p) => p.length > 3));
  let mejor: { r: string; puntos: number } = { r: "", puntos: 0 };
  for (const q of PREGUNTAS) {
    const texto = normalizar(q.p + " " + q.r);
    let puntos = 0;
    for (const p of palabras) if (texto.includes(p)) puntos++;
    if (puntos > mejor.puntos) mejor = { r: q.r, puntos };
  }
  if (/precio|cuesta|costo|plan|pagar|mensual/.test(normalizar(pregunta)))
    return "Hay tres planes por mes: Emprendedor Bs 149, Profesional Bs 299 y Empresarial a medida. Además, WhatsApp con IA (Bs 99) e IA Premium (Bs 79) como complementos. Si me cuentas tu negocio, te ayudo a elegir.";
  if (mejor.puntos >= 2) return mejor.r;
  return `No tengo esa respuesta a mano. Escríbenos por WhatsApp al ${CONTACTO.whatsapp} o al correo ${CONTACTO.correo} y te respondemos.`;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!permitido(ip)) {
    return Response.json({ texto: `Hiciste muchas preguntas seguidas. Espera unos minutos o escríbenos por WhatsApp al ${CONTACTO.whatsapp}.` }, { status: 429 });
  }

  let mensajes: Mensaje[];
  try {
    const cuerpo = (await request.json()) as { mensajes?: unknown };
    mensajes = (Array.isArray(cuerpo.mensajes) ? cuerpo.mensajes : [])
      .filter((m): m is Mensaje => !!m && typeof m === "object" && ((m as Mensaje).rol === "usuario" || (m as Mensaje).rol === "asistente") && typeof (m as Mensaje).texto === "string")
      .slice(-MAX_MENSAJES)
      .map((m) => ({ rol: m.rol, texto: m.texto.slice(0, MAX_LARGO) }));
  } catch {
    return Response.json({ texto: "No entendí el mensaje. ¿Me lo escribes de nuevo?" }, { status: 400 });
  }
  const ultima = [...mensajes].reverse().find((m) => m.rol === "usuario");
  if (!ultima || !ultima.texto.trim()) return Response.json({ texto: "¿En qué te ayudo?" }, { status: 400 });

  const clave = process.env.GEMINI_API_KEY;
  if (!clave) return Response.json({ texto: respaldo(ultima.texto), respaldo: true });

  try {
    const r = await fetch(`${BASE}/models/${MODELO}:generateContent`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": clave },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: INSTRUCCIONES }] },
        contents: mensajes.map((m) => ({ role: m.rol === "usuario" ? "user" : "model", parts: [{ text: m.texto }] })),
        generationConfig: { temperature: 0.3, maxOutputTokens: 400 },
      }),
      signal: AbortSignal.timeout(20_000),
    });
    if (!r.ok) throw new Error(`Gemini ${r.status}`);
    const datos = (await r.json()) as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
    const texto = datos.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("").trim();
    if (!texto) throw new Error("respuesta vacía");
    return Response.json({ texto });
  } catch (e) {
    console.error("asistente:", e instanceof Error ? e.message : e);
    return Response.json({ texto: respaldo(ultima.texto), respaldo: true });
  }
}

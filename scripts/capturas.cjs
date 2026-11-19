// Capturas del panel para la landing (src/shared/assets/capturas), con la tienda de
// demostración. Solo lee: el carrito del piloto vive en el navegador; no se cobra nada.
// Uso: CAP_CORREO=... CAP_CLAVE=... node scripts/capturas.cjs [nombre1,nombre2]
const path = require("path");
const fs = require("fs");
const { chromium } = require("C:/Trabajos/Ecommerce/ecommerce-frontend/node_modules/playwright");

const SAL = path.join(__dirname, "..", "src", "shared", "assets", "capturas");
const BASE = "https://vendfy-panel.vercel.app";
const TIENDA = { id: "86f9ea0a-312f-43ff-9416-54883661fddc", name: "Abarrotes Don Juan", slug: "abarrotes-don-juan" };
const SOLO = process.argv[2] ? process.argv[2].split(",") : null;
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

async function entrar(page) {
  for (let i = 0; i < 3; i++) {
    await page.goto(BASE + "/login", { waitUntil: "networkidle" }).catch(() => {});
    await espera(1500);
    if (!/\/login/.test(page.url())) return;
    await page.locator("input[type=email]:visible").first().fill(process.env.CAP_CORREO);
    await page.locator("input[type=password]:visible").first().fill(process.env.CAP_CLAVE);
    await page.locator("button[type=submit]:visible").first().click();
    for (let k = 0; k < 30 && /\/login/.test(page.url()); k++) await espera(500);
    if (!/\/login/.test(page.url())) return;
  }
}
async function ir(page, ruta, ms = 3000) {
  await page.goto(BASE + ruta, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
  await espera(ms);
  if (/\/login/.test(page.url())) { await entrar(page); await page.goto(BASE + ruta, { waitUntil: "networkidle" }).catch(() => {}); await espera(ms); }
  for (let k = 0; k < 20 && (await page.getByText(/Cargando tu espacio/).count()); k++) await espera(500);
}
async function piloto(page, texto) {
  await page.getByTestId("piloto-lanzador").click();
  await espera(1200);
  await page.getByTestId("piloto-teclado").click().catch(() => {});
  await espera(500);
  const campo = page.getByTestId("piloto-campo");
  await campo.fill(texto);
  await campo.press("Enter");
  for (let k = 0; k < 40; k++) { await espera(700); if ((await page.getByTestId("piloto-linea").innerText().catch(() => "")).length > 8) break; }
  await espera(6500);
}

const PASOS = {
  async "caja-voz"(page) {
    await ir(page, "/caja", 4000);
    await piloto(page, "agrega dos huevos frescos y un café nescafé");
    await page.mouse.move(1430, 300);
    await page.screenshot({ path: path.join(SAL, "caja-voz.png") });
    // Recortes para la sección «Vendfy por voz»: el carrito y la franja de subtítulos.
    const carrito = await page.locator("aside, [data-testid=caja-carrito]").last().boundingBox().catch(() => null);
    await page.screenshot({ path: path.join(SAL, "voz-carrito.png"), clip: carrito && carrito.width > 200 ? carrito : { x: 1010, y: 90, width: 425, height: 790 } });
    const tarjeta = await page.getByTestId("piloto-tarjeta").boundingBox().catch(() => null);
    if (tarjeta) await page.screenshot({ path: path.join(SAL, "voz-tarjeta.png"), clip: { x: Math.max(0, tarjeta.x - 16), y: Math.max(0, tarjeta.y - 16), width: tarjeta.width + 32, height: tarjeta.height + 32 } });
  },
  async asistente(page) {
    // La respuesta la escribe la IA: si sale con voseo, se pregunta otra cosa.
    const VOSEO = /(tenés|podés|querés|decís|hacé|fijate|mirá|tenés|sabés|necesitás)/i;
    for (const pregunta of ["¿Qué productos tienen poco stock?", "¿Cuánto vale mi inventario?", "¿Qué productos debería reponer?"]) {
      await ir(page, "/omnibox");
      const caja = page.getByLabel("Qué necesitás").first();
      await caja.click();
      await caja.fill(pregunta);
      await caja.press("Enter");
      await espera(4000);
      for (let k = 0; k < 60 && (await page.getByText(/Pensando|Analizando|Buscando/).count()); k++) await espera(1000);
      await espera(3000);
      const texto = await page.locator("main").innerText().catch(() => "");
      if (VOSEO.test(texto.replace(/Escribí o dictá lo que necesitás/g, ""))) { console.log("  voseo en:", pregunta); continue; }
      await page.mouse.move(1430, 300);
      await page.screenshot({ path: path.join(SAL, "asistente.png") });
      return;
    }
    throw new Error("todas las respuestas salieron con voseo");
  },
  async inventario(page) {
    await ir(page, "/inventory", 4000);
    await page.screenshot({ path: path.join(SAL, "inventario.png") });
  },
  async marketing(page) {
    await ir(page, "/marketing", 4000);
    await page.screenshot({ path: path.join(SAL, "marketing.png") });
  },
};

(async () => {
  if (!process.env.CAP_CORREO || !process.env.CAP_CLAVE) throw new Error("Faltan CAP_CORREO y CAP_CLAVE");
  const browser = await chromium.launch();
  const opciones = { locale: "es-BO", timezoneId: "America/La_Paz" };
  const fijarTienda = (t) => { if (location.hostname.endsWith("vercel.app")) localStorage.setItem("selectedStore", JSON.stringify(t)); };

  const ctx = await browser.newContext({ ...opciones, viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  await ctx.addInitScript(fijarTienda, TIENDA);
  const page = await ctx.newPage();
  await entrar(page);
  for (const [nombre, paso] of Object.entries(PASOS)) {
    if (SOLO && !SOLO.includes(nombre)) continue;
    try { await paso(page); console.log("ok", nombre); } catch (e) { console.log("FALLÓ", nombre, e.message.split("\n")[0]); }
  }

  if (!SOLO || SOLO.includes("movil")) {
    const movil = await browser.newContext({ ...opciones, viewport: { width: 390, height: 664 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
    await movil.addInitScript(fijarTienda, TIENDA);
    const m = await movil.newPage();
    await entrar(m);
    await ir(m, "/inventory", 4000);
    await m.screenshot({ path: path.join(SAL, "movil-inicio.png") });
    console.log("ok movil");
  }
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });

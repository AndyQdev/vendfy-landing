"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Boxes, ChartColumn, Globe, ScanBarcode, Sparkles, Truck, Users } from "lucide-react";
import { SectionHeading } from "@/shared/ui/section-heading";
import { MarcoNavegador } from "@/shared/ui/marcos";
import cajaVoz from "@/shared/assets/capturas/caja-voz.png";
import inicio from "@/shared/assets/capturas/inicio.png";
import inventario from "@/shared/assets/capturas/inventario.png";

const funciones = [
  { Icono: ScanBarcode, titulo: "Caja rápida", texto: "Cobra en efectivo, QR, tarjeta o dólares. Busca o escanea con lector de código de barras." },
  { Icono: Boxes, titulo: "Inventario al día", texto: "Stock, compras y movimientos. Te avisa qué productos están por agotarse." },
  { Icono: Truck, titulo: "Pedidos y delivery", texto: "Ventas al contado, en cuotas o con envío. Sigue cada pedido hasta que llega." },
  { Icono: Globe, titulo: "Tienda online", texto: "Tu catálogo en la web para que tus clientes vean precios y te hagan pedidos." },
  { Icono: Bot, titulo: "WhatsApp con IA", texto: "Responde a tus clientes a cualquier hora con los precios y el stock reales." },
  { Icono: Sparkles, titulo: "Productos con IA", texto: "Carga tu catálogo desde una foto, un Excel o un PDF, sin escribir uno por uno." },
  { Icono: Users, titulo: "Clientes", texto: "Cada cliente con sus datos y su historial de compras." },
  { Icono: ChartColumn, titulo: "Reportes claros", texto: "Ventas, ganancia, ticket promedio y lo que más se vende, de un vistazo." },
];

const recorrido = [
  { id: "caja", nombre: "Caja", imagen: cajaVoz, texto: "Vende en segundos, con el teclado, el lector o la voz.", alt: "La Caja con una venta de 2 Sprite y el asistente Vendfy" },
  { id: "inicio", nombre: "Inicio", imagen: inicio, texto: "Cómo va tu negocio hoy y qué necesita tu atención.", alt: "El inicio con ventas, ganancia estimada y avisos" },
  { id: "inventario", nombre: "Inventario", imagen: inventario, texto: "Todo tu stock, con su valor y lo que está por agotarse.", alt: "El inventario con productos, precios y stock" },
] as const;

export function Features() {
  const [actual, setActual] = useState<(typeof recorrido)[number]["id"]>("caja");
  const vista = recorrido.find((r) => r.id === actual) ?? recorrido[0];

  return (
    <section id="funciones" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Funciones"
          title="Todo lo que usas para vender,"
          highlight="en un solo lugar"
          description="Sin cuadernos, sin planillas sueltas y sin cinco aplicaciones distintas. Empiezas en minutos."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {funciones.map((f) => (
            <div key={f.titulo} className="bg-white p-6 sm:p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-marca-palida text-marca">
                <f.Icono className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-tinta">{f.titulo}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex flex-col items-center gap-4">
            <div role="tablist" aria-label="Pantallas de Vendfy" className="inline-flex rounded-xl border border-slate-200 bg-superficie p-1">
              {recorrido.map((r) => (
                <button
                  key={r.id}
                  role="tab"
                  type="button"
                  aria-selected={actual === r.id}
                  aria-controls="recorrido-vista"
                  onClick={() => setActual(r.id)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors sm:px-6 ${
                    actual === r.id ? "bg-white text-tinta shadow-sm" : "text-slate-500 hover:text-tinta"
                  }`}
                >
                  {r.nombre}
                </button>
              ))}
            </div>
            <p className="text-center text-slate-600">{vista.texto}</p>
          </div>
          <div id="recorrido-vista" role="tabpanel" className="relative mx-auto mt-8 max-w-6xl">
            <AnimatePresence mode="wait">
              <motion.div key={vista.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                <MarcoNavegador src={vista.imagen} alt={vista.alt} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

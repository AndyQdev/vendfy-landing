"use client";

import Image from "next/image";
import { Check, Mic } from "lucide-react";
import tarjeta from "@/shared/assets/capturas/voz-tarjeta.png";
import carrito from "@/shared/assets/capturas/voz-carrito.png";

const frases = ["«Oye Vendfy, vende dos Sprite»", "«¿A cuánto está el dólar?»", "«El stock de la Coca está mal, hay 30»", "«Cobra con QR»"];

const puntos = [
  "Te lleva a la pantalla que corresponde y llena los datos por ti.",
  "Antes de cobrar o cambiar el stock te muestra lo que va a hacer y espera tu «sí».",
  "Manos libres: en Windows y Android escucha «Oye Vendfy» aunque la app esté minimizada o la pantalla apagada.",
  "El oído corre en tu equipo: nada sale de él hasta que dices «Oye Vendfy».",
];

export function Voz() {
  return (
    <section id="voz" className="relative overflow-hidden bg-tinta py-24 lg:py-32">
      <div className="absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-marca/25 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cian-claro">Vendfy por voz</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] text-balance">
            Dilo, y Vendfy lo hace. <span className="text-cian-claro">Con las manos ocupadas.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300 text-pretty">
            Mientras atiendes, empacas o cobras, di «Oye Vendfy» y lo que necesitas. El asistente maneja la misma caja que usas tú: no
            es un chat aparte.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Ejemplos de lo que puedes decir">
            {frases.map((f) => (
              <li key={f} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-slate-200">
                {f}
              </li>
            ))}
          </ul>

          <ul className="mt-9 space-y-4">
            {puntos.map((p) => (
              <li key={p} className="flex gap-3 text-slate-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cian/20 text-cian-claro">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          {/* Recortes de una captura real: la Caja y la tarjeta de Vendfy encima. */}
          <div className="relative mx-auto max-w-lg pb-10 pt-14 lg:ml-auto">
            <div className="ml-auto w-[68%] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/40">
              <Image src={carrito} alt="La Caja con 2 Sprite 2 l y el total de Bs 26,00" sizes="(min-width: 1024px) 340px, 60vw" placeholder="blur" className="block h-auto w-full" />
            </div>
            <div className="absolute bottom-0 left-0 w-[74%] overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10">
              <Image
                src={tarjeta}
                alt="Vendfy oyó «vende dos sprite» y contesta «Listo: 2 Sprite 2 l. Total Bs 26,00. ¿Algo más?»"
                sizes="(min-width: 1024px) 400px, 75vw"
                placeholder="blur"
                className="block h-auto w-full"
              />
            </div>
            <div className="absolute left-0 top-0 flex items-center gap-2 rounded-full bg-cian px-4 py-2 text-sm font-semibold text-tinta shadow-lg">
              <Mic className="h-4 w-4" aria-hidden="true" />
              «Oye Vendfy, vende dos Sprite»
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

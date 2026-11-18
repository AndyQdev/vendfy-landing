"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { DESCARGAS } from "@/shared/config/descargas";
import { URL_LOGIN } from "@/shared/config/sitio";
import { usePlataforma, type Plataforma } from "@/shared/lib/plataforma";
import { SectionHeading } from "@/shared/ui/section-heading";
import { IconoAndroid, IconoApple, IconoWeb, IconoWindows } from "@/shared/ui/iconos-plataforma";

export interface Tarjeta {
  id: "windows" | "android" | "iphone" | "web";
  nombre: string;
  Icono: (p: { className?: string }) => React.ReactNode;
  requisitos: string;
  texto: string;
  boton: { texto: string; href: string; descarga?: boolean };
  para: Plataforma[];
}

export const TARJETAS: Tarjeta[] = [
  {
    id: "windows",
    nombre: "Windows",
    Icono: IconoWindows,
    requisitos: `${DESCARGAS.windows.requisitos} · ${DESCARGAS.windows.peso}`,
    texto: "Su propia ventana, arranca con la computadora, F9 desde cualquier programa y manos libres con la ventana minimizada.",
    boton: { texto: "Descargar para Windows", href: DESCARGAS.windows.archivo, descarga: true },
    para: ["windows"],
  },
  {
    id: "android",
    nombre: "Android",
    Icono: IconoAndroid,
    requisitos: `${DESCARGAS.android.requisitos} · ${DESCARGAS.android.peso}`,
    texto: "La caja en tu celular o tablet, con la cámara y «Oye Vendfy» aunque la pantalla esté apagada.",
    boton: { texto: "Descargar para Android", href: DESCARGAS.android.archivo, descarga: true },
    para: ["android"],
  },
  {
    id: "iphone",
    nombre: "iPhone y iPad",
    Icono: IconoApple,
    requisitos: "Desde Safari, sin App Store",
    texto: "Agrégalo a tu pantalla de inicio y se abre como una app, a pantalla completa.",
    boton: { texto: "Ver cómo instalar", href: "/descargar#iphone" },
    para: ["ios"],
  },
  {
    id: "web",
    nombre: "Web",
    Icono: IconoWeb,
    requisitos: "Chrome, Edge, Safari o Firefox",
    texto: "Mac, Linux o cualquier computadora: entra desde el navegador, sin instalar nada.",
    boton: { texto: "Abrir Vendfy", href: URL_LOGIN },
    para: ["mac", "linux", "otro"],
  },
];

export function TarjetaPlataforma({ t, recomendada }: { t: Tarjeta; recomendada: boolean }) {
  return (
    <div
      data-testid={`tarjeta-${t.id}`}
      data-recomendada={recomendada ? "si" : "no"}
      className={`relative flex flex-col rounded-2xl border bg-white p-6 transition-shadow ${
        recomendada ? "max-sm:order-first border-marca shadow-lg shadow-marca/10 ring-1 ring-marca" : "border-slate-200 hover:shadow-md"
      }`}
    >
      {recomendada && (
        <span className="absolute -top-3 left-6 rounded-full bg-marca px-3 py-1 text-xs font-semibold text-white">Para tu equipo</span>
      )}
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-superficie text-tinta">
        <t.Icono className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-tinta">{t.nombre}</h3>
      <p className="mt-1 text-xs font-medium text-slate-500">{t.requisitos}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{t.texto}</p>
      <a
        href={t.boton.href}
        {...(t.boton.descarga ? { download: "" } : {})}
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
          recomendada ? "bg-marca text-white hover:bg-marca-oscura" : "bg-tinta text-white hover:bg-tinta-2"
        }`}
      >
        {t.boton.descarga ? <Download className="h-4 w-4" aria-hidden="true" /> : null}
        {t.boton.texto}
      </a>
    </div>
  );
}

export function Descargas() {
  const plataforma = usePlataforma();
  return (
    <section id="descargar" className="bg-superficie py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Descargar"
          title="Vendfy donde"
          highlight="trabajas"
          description="La misma cuenta y los mismos datos en la caja, en la oficina y en el bolsillo. Entras con tu correo y contraseña en cada equipo."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TARJETAS.map((t) => (
            <TarjetaPlataforma key={t.id} t={t} recomendada={plataforma != null && t.para.includes(plataforma)} />
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link href="/descargar" className="inline-flex items-center gap-1.5 font-semibold text-marca hover:text-marca-oscura">
            Cómo instalar paso a paso
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}

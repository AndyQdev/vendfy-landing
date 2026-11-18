"use client";

import { Download, ArrowRight } from "lucide-react";
import { DESCARGAS } from "@/shared/config/descargas";
import { URL_LOGIN } from "@/shared/config/sitio";
import { usePlataforma, type Plataforma } from "@/shared/lib/plataforma";
import { IconoAndroid, IconoApple, IconoWeb, IconoWindows } from "@/shared/ui/iconos-plataforma";

interface Opcion {
  texto: string;
  detalle: string;
  href: string;
  descarga?: boolean;
  Icono: (p: { className?: string }) => React.ReactNode;
}

/** Qué ofrecerle a cada equipo (como la página de descarga de Claude). */
export function opcionPara(p: Plataforma | null): Opcion {
  switch (p) {
    case "windows":
      return { texto: "Descargar para Windows", detalle: `${DESCARGAS.windows.peso} · ${DESCARGAS.windows.requisitos}`, href: DESCARGAS.windows.archivo, descarga: true, Icono: IconoWindows };
    case "android":
      return { texto: "Descargar para Android", detalle: `${DESCARGAS.android.peso} · ${DESCARGAS.android.requisitos}`, href: DESCARGAS.android.archivo, descarga: true, Icono: IconoAndroid };
    case "ios":
      return { texto: "Instalar en iPhone o iPad", detalle: "Desde Safari, en un minuto", href: "/descargar#iphone", Icono: IconoApple };
    case "mac":
    case "linux":
      return { texto: "Abrir Vendfy en el navegador", detalle: "No necesitas instalar nada", href: URL_LOGIN, Icono: IconoWeb };
    default:
      return { texto: "Descargar la app", detalle: "Windows, Android, iPhone y web", href: "/descargar", Icono: () => <Download className="h-5 w-5" aria-hidden="true" /> };
  }
}

export function BotonDescarga({ variante = "claro", tamano = "normal" }: { variante?: "claro" | "oscuro" | "marca"; tamano?: "normal" | "grande" }) {
  const plataforma = usePlataforma();
  const o = opcionPara(plataforma);
  const estilos = {
    claro: "bg-white text-tinta border border-slate-300 hover:border-slate-400 hover:bg-slate-50",
    oscuro: "bg-white/10 text-white border border-white/20 hover:bg-white/15",
    marca: "bg-marca text-white hover:bg-marca-oscura shadow-lg shadow-marca/20",
  }[variante];
  const grande = tamano === "grande";
  return (
    <a
      href={o.href}
      {...(o.descarga ? { download: "" } : {})}
      data-testid="boton-descarga"
      data-plataforma={plataforma ?? "?"}
      className={`group inline-flex items-center gap-3 rounded-xl font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marca ${estilos} ${
        grande ? "px-7 py-4 text-lg" : "px-5 py-3 text-base"
      }`}
    >
      <o.Icono className={grande ? "h-6 w-6" : "h-5 w-5"} />
      <span className="flex flex-col items-start leading-tight">
        <span>{o.texto}</span>
        {grande && <span className="text-xs font-medium opacity-70 mt-0.5">{o.detalle}</span>}
      </span>
      {!o.descarga && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
    </a>
  );
}

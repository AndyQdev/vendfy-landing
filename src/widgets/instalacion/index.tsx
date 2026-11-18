"use client";

import { Download, ExternalLink, ShieldCheck } from "lucide-react";
import { BotonDescarga } from "@/features/descarga/boton-descarga";
import { DESCARGAS } from "@/shared/config/descargas";
import { APP_URL, URL_LOGIN, whatsapp } from "@/shared/config/sitio";
import { usePlataforma } from "@/shared/lib/plataforma";
import { TARJETAS, TarjetaPlataforma } from "@/widgets/descargas";
import { IconoAndroid, IconoApple, IconoWeb, IconoWindows } from "@/shared/ui/iconos-plataforma";

const dominioApp = APP_URL.replace(/^https?:\/\//, "");

interface Guia {
  id: string;
  titulo: string;
  Icono: (p: { className?: string }) => React.ReactNode;
  resumen: string;
  pasos: React.ReactNode[];
  nota?: React.ReactNode;
  accion: React.ReactNode;
}

const guias: Guia[] = [
  {
    id: "windows",
    titulo: "Windows",
    Icono: IconoWindows,
    resumen: `${DESCARGAS.windows.requisitos}. Versión ${DESCARGAS.windows.version}, ${DESCARGAS.windows.peso}.`,
    pasos: [
      <>Descarga el instalador <strong>Vendfy-Windows-setup.exe</strong>.</>,
      <>Ábrelo. Si Windows muestra «Windows protegió tu PC», toca <strong>Más información</strong> y después <strong>Ejecutar de todas formas</strong>.</>,
      <>Termina la instalación: Vendfy queda en el menú Inicio y se abre solo al prender la computadora. Si no lo quieres así, haz clic derecho en su ícono junto al reloj y elige <strong>No abrir al iniciar Windows</strong>.</>,
      <>Inicia sesión con tu correo y contraseña de Vendfy.</>,
      <>Para usarlo con la voz, toca el ícono de la oreja junto al botón Vendfy y permite el micrófono. <strong>F9</strong> lo llama desde cualquier programa.</>,
    ],
    nota: <>Al cerrar la ventana, Vendfy sigue junto al reloj para oírte. Para salir del todo: clic derecho en su ícono → <strong>Salir de Vendfy</strong>.</>,
    accion: (
      <a href={DESCARGAS.windows.archivo} download className="inline-flex items-center gap-2 rounded-xl bg-tinta px-5 py-3 text-sm font-semibold text-white hover:bg-tinta-2">
        <Download className="h-4 w-4" aria-hidden="true" /> Descargar para Windows
      </a>
    ),
  },
  {
    id: "android",
    titulo: "Android",
    Icono: IconoAndroid,
    resumen: `${DESCARGAS.android.requisitos}. Versión ${DESCARGAS.android.version}, ${DESCARGAS.android.peso}.`,
    pasos: [
      <>Desde el celular o la tablet, descarga <strong>Vendfy-Android.apk</strong>.</>,
      <>Ábrelo desde las notificaciones o desde Descargas. Si Android lo pide, permite <strong>Instalar apps desconocidas</strong> para tu navegador y vuelve atrás.</>,
      <>Toca <strong>Instalar</strong>. Si aparece un aviso de Play Protect, toca <strong>Más detalles</strong> → <strong>Instalar de todas formas</strong>. Después, <strong>Abrir</strong>.</>,
      <>Permite el micrófono, la cámara y las notificaciones, e inicia sesión.</>,
      <>Para «Oye Vendfy» con la pantalla apagada, toca el ícono de la oreja y activa <strong>Mostrar sobre otras apps</strong> cuando Vendfy te lo ofrezca.</>,
    ],
    nota: (
      <>
        Con manos libres prendido verás una notificación fija «Vendfy te escucha»; desde ahí mismo lo apagas. Con el teléfono bloqueado,
        Vendfy enciende la pantalla y lo ves al desbloquear.
      </>
    ),
    accion: (
      <a href={DESCARGAS.android.archivo} download className="inline-flex items-center gap-2 rounded-xl bg-tinta px-5 py-3 text-sm font-semibold text-white hover:bg-tinta-2">
        <Download className="h-4 w-4" aria-hidden="true" /> Descargar para Android
      </a>
    ),
  },
  {
    id: "iphone",
    titulo: "iPhone y iPad",
    Icono: IconoApple,
    resumen: "Se instala desde Safari, sin pasar por la App Store.",
    pasos: [
      <>Abre <strong>Safari</strong> y entra a <strong>{dominioApp}</strong>.</>,
      <>Toca el botón <strong>Compartir</strong> (el cuadrado con la flecha hacia arriba).</>,
      <>Elige <strong>Agregar a pantalla de inicio</strong> y toca <strong>Agregar</strong>.</>,
      <>Abre Vendfy desde el ícono nuevo e inicia sesión: se abre a pantalla completa, como una app.</>,
    ],
    nota: <>En iPhone todavía no hay app en la App Store: esta es la forma de tenerlo en tu pantalla de inicio.</>,
    accion: (
      <a href={URL_LOGIN} className="inline-flex items-center gap-2 rounded-xl bg-tinta px-5 py-3 text-sm font-semibold text-white hover:bg-tinta-2">
        <ExternalLink className="h-4 w-4" aria-hidden="true" /> Abrir {dominioApp}
      </a>
    ),
  },
  {
    id: "web",
    titulo: "Web (Mac, Linux o cualquier computadora)",
    Icono: IconoWeb,
    resumen: "Chrome, Edge, Safari o Firefox actualizados.",
    pasos: [
      <>Entra a <strong>{dominioApp}</strong> e inicia sesión.</>,
      <>Si quieres una ventana propia, en Chrome o Edge toca el ícono <strong>Instalar</strong> de la barra de direcciones.</>,
      <>Para hablarle, usa el botón Vendfy o la tecla <strong>F9</strong> con la pestaña abierta.</>,
    ],
    accion: (
      <a href={URL_LOGIN} className="inline-flex items-center gap-2 rounded-xl bg-tinta px-5 py-3 text-sm font-semibold text-white hover:bg-tinta-2">
        <ExternalLink className="h-4 w-4" aria-hidden="true" /> Abrir Vendfy
      </a>
    ),
  },
];

export function Instalacion() {
  const plataforma = usePlataforma();
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div className="fondo-puntos absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-display text-4xl font-bold tracking-tight text-tinta sm:text-6xl text-balance">Descarga Vendfy</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600 text-pretty">
            Una sola cuenta en la web, en Windows y en tu celular. Instálalo en cada equipo e inicia sesión con tu correo.
          </p>
          <div className="mt-9 flex justify-center">
            <BotonDescarga variante="marca" tamano="grande" />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {TARJETAS.map((t) => (
            <TarjetaPlataforma key={t.id} t={t} recomendada={plataforma != null && t.para.includes(plataforma)} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-superficie py-20">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold tracking-tight text-tinta sm:text-3xl">Cómo instalar, paso a paso</h2>
          {guias.map((g) => (
            <article key={g.id} id={g.id} className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8" data-testid={`guia-${g.id}`}>
              <header className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-superficie text-tinta">
                  <g.Icono className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-tinta">{g.titulo}</h3>
                  <p className="mt-1 text-sm text-slate-500">{g.resumen}</p>
                </div>
              </header>
              <ol className="mt-6 space-y-4">
                {g.pasos.map((p, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-marca-palida text-sm font-semibold text-marca-oscura">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 leading-relaxed text-slate-700">{p}</span>
                  </li>
                ))}
              </ol>
              {g.nota && <p className="mt-6 rounded-xl bg-superficie px-4 py-3 text-sm leading-relaxed text-slate-600">{g.nota}</p>}
              <div className="mt-6">{g.accion}</div>
            </article>
          ))}

          <div className="flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-marca" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-slate-600">
                ¿Algo no funcionó al instalar? Escríbenos y te ayudamos en el momento.
              </p>
            </div>
            <a
              href={whatsapp("Hola, necesito ayuda para instalar Vendfy")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-tinta hover:bg-slate-50"
            >
              Pedir ayuda por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

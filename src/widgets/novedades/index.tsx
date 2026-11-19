import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { DESCARGAS } from "@/shared/config/descargas";
import { NOVEDADES } from "@/shared/config/vendfy";
import { SectionHeading } from "@/shared/ui/section-heading";
import { IconoAndroid, IconoWindows } from "@/shared/ui/iconos-plataforma";

/** Lo último que salió, con las versiones de las apps para descargar. */
export function Novedades() {
  return (
    <section id="novedades" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Novedades"
          title="Vendfy mejora"
          highlight="cada semana"
          description="Lo último que agregamos. La web se actualiza sola; si usas las apps de Windows o Android, aquí está la versión más nueva."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <ol className="relative space-y-6 border-l border-slate-200 pl-6">
            {NOVEDADES.map((n) => (
              <li key={n.titulo} className="relative">
                <span className="absolute top-1.5 -left-[31px] flex size-3.5 items-center justify-center rounded-full border-2 border-white bg-marca ring-4 ring-marca-palida" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-wide text-marca">{n.fecha}</p>
                <h3 className="mt-1 font-display text-base font-semibold text-tinta">{n.titulo}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">{n.texto}</p>
                {"enlace" in n && n.enlace ? (
                  n.enlace.href.startsWith("http") ? (
                    <a href={n.enlace.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-marca hover:text-marca-oscura">
                      {n.enlace.texto} <ArrowRight className="size-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link href={n.enlace.href} className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-marca hover:text-marca-oscura">
                      {n.enlace.texto} <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  )
                ) : null}
              </li>
            ))}
          </ol>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-superficie p-6 lg:sticky lg:top-24">
            <span className="flex size-10 items-center justify-center rounded-lg bg-marca text-white">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-tinta">Las últimas versiones</h3>
            <p className="mt-1 text-sm text-slate-600">La web se actualiza sola. Estas son las apps para instalar.</p>
            <div className="mt-5 space-y-3">
              <a href={DESCARGAS.windows.archivo} download className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-marca">
                <IconoWindows className="size-5 text-tinta" />
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-tinta">Windows {DESCARGAS.windows.version}</span>
                  <span className="block text-xs text-slate-500">{DESCARGAS.windows.requisitos} · {DESCARGAS.windows.peso}</span>
                </span>
                <Download className="size-4 text-marca" aria-hidden="true" />
              </a>
              <a href={DESCARGAS.android.archivo} download className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-marca">
                <IconoAndroid className="size-5 text-tinta" />
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-tinta">Android {DESCARGAS.android.version}</span>
                  <span className="block text-xs text-slate-500">{DESCARGAS.android.requisitos} · {DESCARGAS.android.peso}</span>
                </span>
                <Download className="size-4 text-marca" aria-hidden="true" />
              </a>
            </div>
            <Link href="/descargar" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-marca hover:text-marca-oscura">
              iPhone, iPad y cómo instalar <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { IconoAndroid, IconoApple, IconoWeb, IconoWindows } from "@/shared/ui/iconos-plataforma";

const plataformas = [
  { nombre: "Web", Icono: IconoWeb, href: "/descargar#web" },
  { nombre: "Windows", Icono: IconoWindows, href: "/descargar#windows" },
  { nombre: "Android", Icono: IconoAndroid, href: "/descargar#android" },
  { nombre: "iPhone y iPad", Icono: IconoApple, href: "/descargar#iphone" },
];

/** La franja de "funciona en": una cuenta, todos tus equipos. */
export function Plataformas() {
  return (
    <section className="border-y border-slate-200 bg-superficie/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-8 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <p className="text-sm font-medium text-slate-600 text-center md:text-left">
          Una sola cuenta en todos tus equipos: lo que vendes en la caja también lo ves desde tu celular.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {plataformas.map((p) => (
            <li key={p.nombre}>
              <Link href={p.href} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-marca">
                <p.Icono className="h-5 w-5" />
                {p.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { URL_LOGIN, URL_REGISTRO } from "@/shared/config/sitio";
import { VendfyLogo } from "@/shared/ui/vendfy-logo";

const columnas = [
  {
    titulo: "Producto",
    enlaces: [
      { label: "Funciones", href: "/#funciones" },
      { label: "Vendfy por voz", href: "/#voz" },
      { label: "Precios", href: "/#precios" },
      { label: "Novedades", href: "/#novedades" },
      { label: "Preguntas", href: "/#preguntas" },
      { label: "Contacto", href: "/#contacto" },
      { label: "Guía de uso", href: "https://app.vendfy.shop/guia" },
    ],
  },
  {
    titulo: "Descargar",
    enlaces: [
      { label: "Windows", href: "/descargar#windows" },
      { label: "Android", href: "/descargar#android" },
      { label: "iPhone y iPad", href: "/descargar#iphone" },
      { label: "Web", href: "/descargar#web" },
    ],
  },
  {
    titulo: "Cuenta",
    enlaces: [
      { label: "Iniciar sesión", href: URL_LOGIN },
      { label: "Crear cuenta", href: URL_REGISTRO },
      { label: "Términos y condiciones", href: "/terminos" },
      { label: "Política de privacidad", href: "/privacidad" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <VendfyLogo size={32} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Caja, inventario, tienda online y WhatsApp con IA para vender más en tu negocio.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-600">
              <li>
                <a href="mailto:andres.03.12.2003@gmail.com" className="inline-flex items-center gap-2.5 hover:text-tinta">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  andres.03.12.2003@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/59171890091" className="inline-flex items-center gap-2.5 hover:text-tinta">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +591 71890091
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Santa Cruz, Bolivia
              </li>
            </ul>
          </div>
          {columnas.map((c) => (
            <div key={c.titulo}>
              <h4 className="text-sm font-semibold text-tinta">{c.titulo}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.enlaces.map((e) => (
                  <li key={e.label}>
                    {e.href.startsWith("http") ? (
                      <a href={e.href} className="text-sm text-slate-600 hover:text-tinta">
                        {e.label}
                      </a>
                    ) : (
                      <Link href={e.href} className="text-sm text-slate-600 hover:text-tinta">
                        {e.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Vendfy. Hecho en Bolivia.</p>
          <p>Vende, cobra y controla tu tienda en un solo lugar.</p>
        </div>
      </div>
    </footer>
  );
}

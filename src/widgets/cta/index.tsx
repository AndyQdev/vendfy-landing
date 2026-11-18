import { ArrowRight, MessageCircle } from "lucide-react";
import { BotonDescarga } from "@/features/descarga/boton-descarga";
import { URL_REGISTRO, whatsapp } from "@/shared/config/sitio";
import { VendfyLogo } from "@/shared/ui/vendfy-logo";

export function CTA() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-tinta px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-marca/30 blur-[100px]" aria-hidden="true" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cian/20 blur-[100px]" aria-hidden="true" />
        <div className="relative">
          <VendfyLogo variant="icon" size={52} className="inline-block" />
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Tu próxima venta, <span className="text-cian-claro">ya con Vendfy</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
            Crea tu cuenta en minutos o escríbenos y te ayudamos a empezar hoy mismo.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={URL_REGISTRO} className="group inline-flex items-center gap-2 rounded-xl bg-cian px-6 py-3 font-semibold text-tinta transition-colors hover:bg-cian-claro">
              Crear mi cuenta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <BotonDescarga variante="oscuro" />
          </div>
          <a
            href={whatsapp("Hola, quiero empezar con Vendfy")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Prefiero que me ayuden por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

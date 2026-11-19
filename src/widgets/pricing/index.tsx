import { Check } from "lucide-react";
import { whatsapp } from "@/shared/config/sitio";
import { EXTRAS, PLANES } from "@/shared/config/vendfy";
import { SectionHeading } from "@/shared/ui/section-heading";

// Los planes viven en shared/config/vendfy.ts: los usa también el asistente del chat.
const planes = PLANES;
const extras = EXTRAS.map((e) => ({ ...e, precio: `Bs ${e.precio}/mes` }));

export function Pricing() {
  return (
    <section id="precios" className="bg-superficie py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Precios"
          title="Un plan para cada"
          highlight="etapa de tu negocio"
          description="Precios en bolivianos, por mes. Escríbenos y te ayudamos a elegir y a cargar tus productos."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {planes.map((p) => (
            <div
              key={p.nombre}
              className={`relative flex flex-col rounded-2xl p-8 ${
                p.destacado ? "bg-tinta text-white shadow-xl shadow-tinta/20" : "border border-slate-200 bg-white"
              }`}
            >
              {p.destacado && (
                <span className="absolute -top-3 left-8 rounded-full bg-cian px-3 py-1 text-xs font-semibold text-tinta">Recomendado</span>
              )}
              <h3 className="font-display text-xl font-semibold">{p.nombre}</h3>
              <p className={`mt-1 text-sm ${p.destacado ? "text-slate-300" : "text-slate-600"}`}>{p.texto}</p>
              <p className="mt-6 flex items-baseline gap-1">
                {p.precio ? (
                  <>
                    <span className={`text-sm ${p.destacado ? "text-slate-400" : "text-slate-500"}`}>Bs</span>
                    <span className="font-display text-5xl font-bold tracking-tight">{p.precio}</span>
                    <span className={`text-sm ${p.destacado ? "text-slate-400" : "text-slate-500"}`}>/mes</span>
                  </>
                ) : (
                  <span className="font-display text-3xl font-bold tracking-tight">A medida</span>
                )}
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {p.incluye.map((i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.destacado ? "text-cian-claro" : "text-marca"}`} aria-hidden="true" />
                    <span className={p.destacado ? "text-slate-200" : "text-slate-700"}>{i}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsapp(`Hola, me interesa el plan ${p.nombre} de Vendfy`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                  p.destacado ? "bg-cian text-tinta hover:bg-cian-claro" : "bg-tinta text-white hover:bg-tinta-2"
                }`}
              >
                {p.precio ? "Lo quiero" : "Hablemos"}
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {extras.map((e) => (
            <div key={e.nombre} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-tinta">
                {e.nombre} <span className="font-medium text-marca">· {e.precio}</span>
              </p>
              <p className="mt-1 text-sm text-slate-600">{e.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/shared/ui/section-heading";

const preguntas = [
  {
    p: "¿Tengo que instalar algo?",
    r: "No. Vendfy funciona en el navegador: entras con tu correo y listo. Las apps de Windows y Android suman lo que el navegador no puede: abrirse solas con la computadora, el atajo F9 desde cualquier programa y «Oye Vendfy» con la app minimizada o la pantalla apagada.",
  },
  {
    p: "¿En qué equipos funciona?",
    r: "En la web (Chrome, Edge, Safari o Firefox, en cualquier computadora), en Windows 10 y 11, en Android 7 o superior, y en iPhone y iPad desde Safari. Es la misma cuenta en todos.",
  },
  {
    p: "¿Cómo funciona «Oye Vendfy»? ¿Me escucha todo el tiempo?",
    r: "Solo si prendes manos libres. El detector de la palabra corre en tu propio equipo y nada se envía hasta que oye «Oye Vendfy». Después manda lo que dijiste para entenderlo, y antes de cobrar o cambiar el stock te pide un «sí».",
  },
  {
    p: "¿Puedo usar un lector de código de barras?",
    r: "Sí. En la caja y en el inventario puedes buscar escribiendo o escaneando con un lector de código de barras.",
  },
  {
    p: "¿Cómo cargo mis productos?",
    r: "Uno por uno, o de golpe desde un Excel, un PDF o una foto: la IA arma la lista con nombres, precios y categorías.",
  },
  {
    p: "¿Cómo empiezo?",
    r: "Crea tu cuenta desde esta página, o escríbenos por WhatsApp y te ayudamos a configurar tu tienda y a cargar tus productos.",
  },
];

export function Preguntas() {
  return (
    <section id="preguntas" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Preguntas frecuentes" title="Lo que más nos" highlight="preguntan" />
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-base font-semibold text-tinta sm:text-lg">
                {q.p}
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

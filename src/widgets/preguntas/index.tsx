import { ChevronDown } from "lucide-react";
import { PREGUNTAS } from "@/shared/config/vendfy";
import { SectionHeading } from "@/shared/ui/section-heading";

// Las preguntas viven en shared/config/vendfy.ts: el asistente del chat responde con ellas.
const preguntas = PREGUNTAS;

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

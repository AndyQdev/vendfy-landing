import { SectionHeading } from "@/shared/ui/section-heading";

const pasos = [
  { n: "1", titulo: "Crea tu cuenta", texto: "Con tu correo, en un par de minutos. Le pones nombre a tu tienda y listo." },
  { n: "2", titulo: "Carga tus productos", texto: "Desde un Excel, un PDF o una foto, y la IA los ordena por ti. O agrégalos a mano." },
  { n: "3", titulo: "Empieza a vender", texto: "Cobra en la caja, recibe pedidos de tu tienda online y deja que WhatsApp responda." },
];

export function HowItWorks() {
  return (
    <section id="como-empezar" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Cómo empezar" title="De cero a vender," highlight="hoy mismo" />
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pasos.map((p) => (
            <li key={p.n} className="relative rounded-2xl border border-slate-200 bg-white p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-marca-palida font-display text-lg font-bold text-marca-oscura" aria-hidden="true">
                {p.n}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-tinta">{p.titulo}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

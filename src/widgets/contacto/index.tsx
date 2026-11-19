"use client";

import { useState } from "react";
import { BookOpen, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { APP_URL, whatsapp } from "@/shared/config/sitio";
import { CONTACTO } from "@/shared/config/vendfy";
import { SectionHeading } from "@/shared/ui/section-heading";
import { abrirAsistente } from "@/widgets/asistente";

/**
 * Las formas de hablar con nosotros: el asistente (al instante), WhatsApp, el
 * correo (el formulario arma el mensaje en la app de correo de quien escribe:
 * nada pasa por un servidor intermedio) y la guía de uso.
 */
export function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [negocio, setNegocio] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const asunto = `Consulta desde vendfy.shop${negocio ? ` · ${negocio}` : ""}`;
    const cuerpo = `${mensaje}\n\n—\n${nombre}${correo ? `\n${correo}` : ""}${negocio ? `\nNegocio: ${negocio}` : ""}`;
    window.location.href = `mailto:${CONTACTO.correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    setEnviado(true);
  }

  const canales = [
    {
      Icono: Sparkles,
      titulo: "Asistente de Vendfy",
      texto: "Responde al instante tus dudas sobre precios, funciones y equipos.",
      accion: (
        <button type="button" onClick={() => abrirAsistente()} className="inline-flex items-center gap-2 rounded-lg bg-marca px-4 py-2 text-sm font-semibold text-white transition hover:bg-marca-oscura">
          Preguntarle ahora
        </button>
      ),
    },
    {
      Icono: MessageCircle,
      titulo: "WhatsApp",
      texto: `Hablas con el equipo: ${CONTACTO.whatsapp}. Te ayudamos a configurar tu tienda y a cargar tus productos.`,
      accion: (
        <a href={whatsapp("Hola, vengo de vendfy.shop y quiero saber más")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-tinta px-4 py-2 text-sm font-semibold text-white transition hover:bg-tinta-2">
          Escribir por WhatsApp
        </a>
      ),
    },
    {
      Icono: BookOpen,
      titulo: "Guía de uso",
      texto: "Cada pantalla del panel con su captura y cada botón explicado, sin iniciar sesión.",
      accion: (
        <a href={`${APP_URL}/guia`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-tinta transition hover:border-marca hover:text-marca">
          Ver la guía
        </a>
      ),
    },
  ];

  return (
    <section id="contacto" className="bg-superficie py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Contacto" title="Hablemos de" highlight="tu negocio" description="Elige cómo prefieres: al instante con el asistente, con una persona por WhatsApp o por correo." />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid gap-4">
            {canales.map((c) => (
              <div key={c.titulo} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-marca-palida text-marca">
                  <c.Icono className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col items-start gap-3">
                  <div>
                    <h3 className="font-display text-base font-semibold text-tinta">{c.titulo}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{c.texto}</p>
                  </div>
                  {c.accion}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={enviar} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="titulo-correo">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-marca-palida text-marca">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 id="titulo-correo" className="font-display text-base font-semibold text-tinta">Escríbenos un correo</h3>
                <p className="text-sm text-slate-600">Se abre tu correo con el mensaje listo para enviar a {CONTACTO.correo}.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Campo id="c-nombre" etiqueta="Tu nombre" valor={nombre} cambiar={setNombre} requerido />
              <Campo id="c-correo" etiqueta="Tu correo" tipo="email" valor={correo} cambiar={setCorreo} />
              <div className="sm:col-span-2">
                <Campo id="c-negocio" etiqueta="Tu negocio (opcional)" valor={negocio} cambiar={setNegocio} placeholder="Ej.: minimarket, boutique, ferretería" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-mensaje" className="text-sm font-medium text-tinta">
                  ¿En qué te ayudamos?
                </label>
                <textarea
                  id="c-mensaje"
                  required
                  rows={5}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="mt-1.5 w-full resize-y rounded-xl border border-slate-300 px-3.5 py-2.5 text-base text-tinta outline-none placeholder:text-slate-400 focus:border-marca focus:ring-2 focus:ring-marca/20 sm:text-sm"
                  placeholder="Cuéntanos qué vendes y qué te gustaría resolver."
                />
              </div>
            </div>
            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-tinta px-5 py-3 text-sm font-semibold text-white transition hover:bg-tinta-2 sm:w-auto">
              <Send className="size-4" aria-hidden="true" /> Preparar el correo
            </button>
            {enviado ? (
              <p className="mt-3 text-sm text-slate-600" role="status">
                Si no se abrió tu app de correo, escríbenos directo a <a className="font-semibold text-marca" href={`mailto:${CONTACTO.correo}`}>{CONTACTO.correo}</a>.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function Campo({ id, etiqueta, valor, cambiar, tipo = "text", requerido, placeholder }: { id: string; etiqueta: string; valor: string; cambiar: (v: string) => void; tipo?: string; requerido?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-tinta">
        {etiqueta}
      </label>
      <input
        id={id}
        type={tipo}
        required={requerido}
        value={valor}
        placeholder={placeholder}
        onChange={(e) => cambiar(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-base text-tinta outline-none placeholder:text-slate-400 focus:border-marca focus:ring-2 focus:ring-marca/20 sm:text-sm"
      />
    </div>
  );
}

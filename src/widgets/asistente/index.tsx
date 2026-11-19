"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, MessageCircle, RotateCcw, Sparkles, X } from "lucide-react";
import { whatsapp } from "@/shared/config/sitio";

/**
 * El asistente del sitio: una burbuja abajo a la derecha que responde dudas
 * sobre Vendfy (precios, funciones, equipos, cómo empezar) con /api/asistente.
 * Cualquier botón de la página lo abre con `abrirAsistente()`; si la persona
 * prefiere a alguien del equipo, pasa la conversación a WhatsApp.
 *
 * La conversación vive en esta pestaña (sessionStorage): es una ayuda, no un
 * registro.
 */
type Mensaje = { rol: "usuario" | "asistente"; texto: string };

const EVENTO = "vendfy:abrir-asistente";
const CLAVE = "vendfy.asistente";
const SALUDO: Mensaje = {
  rol: "asistente",
  texto: "¡Hola! Soy el asistente de Vendfy. Pregúntame lo que quieras: precios, qué hace cada módulo, en qué equipos funciona o cómo empezar.",
};
const SUGERENCIAS = ["¿Cuánto cuesta?", "¿Qué hace el agente de WhatsApp?", "¿Funciona en mi celular?", "¿Cómo empiezo?"];

export function abrirAsistente(pregunta?: string) {
  window.dispatchEvent(new CustomEvent(EVENTO, { detail: pregunta }));
}

function leerGuardado(): Mensaje[] {
  try {
    const v = JSON.parse(sessionStorage.getItem(CLAVE) ?? "null");
    return Array.isArray(v) && v.length ? v : [SALUDO];
  } catch {
    return [SALUDO];
  }
}

export function Asistente() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([SALUDO]);
  const [texto, setTexto] = useState("");
  const [pensando, setPensando] = useState(false);
  const lista = useRef<HTMLDivElement>(null);
  const campo = useRef<HTMLTextAreaElement>(null);
  const enviarRef = useRef<(t: string) => void>(() => {});

  useEffect(() => {
    setMensajes(leerGuardado());
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(CLAVE, JSON.stringify(mensajes.slice(-30)));
    } catch {
      /* sin almacenamiento: la conversación dura lo que la página */
    }
    lista.current?.scrollTo({ top: lista.current.scrollHeight, behavior: "smooth" });
  }, [mensajes, pensando]);

  useEffect(() => {
    const abrir = (e: Event) => {
      setAbierto(true);
      const pregunta = (e as CustomEvent<string | undefined>).detail;
      if (pregunta) enviarRef.current(pregunta);
      setTimeout(() => campo.current?.focus(), 150);
    };
    window.addEventListener(EVENTO, abrir);
    return () => window.removeEventListener(EVENTO, abrir);
  }, []);

  async function enviar(t: string) {
    const pregunta = t.trim();
    if (!pregunta || pensando) return;
    const nuevos: Mensaje[] = [...mensajes, { rol: "usuario", texto: pregunta }];
    setMensajes(nuevos);
    setTexto("");
    setPensando(true);
    try {
      const r = await fetch("/api/asistente", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ mensajes: nuevos.filter((m) => m !== SALUDO).slice(-12) }),
      });
      const datos = (await r.json()) as { texto?: string };
      setMensajes((m) => [...m, { rol: "asistente", texto: datos.texto || "No pude responder ahora. ¿Lo intentas de nuevo?" }]);
    } catch {
      setMensajes((m) => [...m, { rol: "asistente", texto: "Se cortó la conexión. Revisa tu internet y vuelve a preguntar, o escríbenos por WhatsApp." }]);
    } finally {
      setPensando(false);
    }
  }
  enviarRef.current = enviar;

  const resumenWhatsapp = () => {
    const ultimas = mensajes.filter((m) => m.rol === "usuario").slice(-3).map((m) => `• ${m.texto}`);
    return whatsapp(ultimas.length ? `Hola, vengo de la web de Vendfy. Mis preguntas:\n${ultimas.join("\n")}` : "Hola, vengo de la web de Vendfy y quiero saber más.");
  };

  return (
    <>
      {abierto ? (
        <div
          role="dialog"
          aria-label="Asistente de Vendfy"
          className="fixed inset-x-3 bottom-3 z-50 flex max-h-[min(640px,calc(100dvh-1.5rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[380px]"
        >
          <header className="flex items-center gap-3 bg-tinta px-4 py-3 text-white">
            <span className="relative flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-cian to-marca">
              <Sparkles className="size-4" aria-hidden />
              <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-tinta bg-emerald-400" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-semibold">Asistente de Vendfy</p>
              <p className="text-xs text-slate-300">Responde al instante, con IA</p>
            </div>
            <button
              type="button"
              onClick={() => setMensajes([SALUDO])}
              className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Empezar de nuevo"
              title="Empezar de nuevo"
            >
              <RotateCcw className="size-4" />
            </button>
            <button type="button" onClick={() => setAbierto(false)} className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="Cerrar el asistente">
              <X className="size-4" />
            </button>
          </header>

          <div ref={lista} className="flex-1 space-y-3 overflow-y-auto bg-superficie px-4 py-4" aria-live="polite">
            {mensajes.map((m, i) => (
              <div key={i} className={m.rol === "usuario" ? "flex justify-end" : "flex justify-start"}>
                <p
                  className={
                    m.rol === "usuario"
                      ? "max-w-[85%] rounded-2xl rounded-br-md bg-marca px-3.5 py-2 text-sm text-white"
                      : "max-w-[90%] whitespace-pre-line rounded-2xl rounded-bl-md border border-slate-200 bg-white px-3.5 py-2 text-sm leading-relaxed text-slate-700"
                  }
                >
                  {m.texto}
                </p>
              </div>
            ))}
            {pensando ? (
              <div className="flex justify-start" aria-label="Escribiendo">
                <span className="flex gap-1 rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3">
                  {[0, 1, 2].map((k) => (
                    <span key={k} className="size-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: `${k * 120}ms` }} />
                  ))}
                </span>
              </div>
            ) : null}
            {mensajes.length === 1 ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGERENCIAS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => enviar(s)}
                    className="rounded-full border border-marca/30 bg-white px-3 py-1.5 text-xs font-medium text-marca transition hover:border-marca hover:bg-marca-palida"
                  >
                    {s}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              enviar(texto);
            }}
            className="border-t border-slate-200 bg-white p-3"
          >
            <div className="flex items-end gap-2">
              <label htmlFor="asistente-campo" className="sr-only">
                Tu pregunta
              </label>
              <textarea
                id="asistente-campo"
                ref={campo}
                rows={1}
                value={texto}
                maxLength={800}
                onChange={(e) => setTexto(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    enviar(texto);
                  }
                }}
                placeholder="Escribe tu pregunta…"
                className="max-h-28 min-h-[42px] flex-1 resize-none rounded-xl border border-slate-300 px-3 py-2.5 text-base text-tinta outline-none placeholder:text-slate-400 focus:border-marca focus:ring-2 focus:ring-marca/20 sm:text-sm"
              />
              <button
                type="submit"
                disabled={!texto.trim() || pensando}
                className="flex size-[42px] shrink-0 items-center justify-center rounded-xl bg-marca text-white transition hover:bg-marca-oscura disabled:opacity-40"
                aria-label="Enviar"
              >
                <ArrowUp className="size-4" />
              </button>
            </div>
            <a
              href={resumenWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-1.5 text-xs font-medium text-slate-500 transition hover:text-marca"
            >
              <MessageCircle className="size-3.5" aria-hidden /> Prefiero hablar con una persona por WhatsApp
            </a>
          </form>
        </div>
      ) : null}

      {!abierto ? (
        <button
          type="button"
          onClick={() => {
            setAbierto(true);
            setTimeout(() => campo.current?.focus(), 150);
          }}
          className="group fixed right-4 bottom-4 z-50 flex items-center gap-2.5 rounded-full bg-tinta py-2 pr-4 pl-2 text-white shadow-xl shadow-slate-900/25 transition hover:-translate-y-0.5 sm:right-5 sm:bottom-5"
          aria-label="Abrir el asistente de Vendfy"
          data-testid="asistente-burbuja"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-cian to-marca">
            <Sparkles className="size-4" aria-hidden />
          </span>
          <span className="text-sm font-semibold">¿Dudas? Pregúntame</span>
        </button>
      ) : null}
    </>
  );
}

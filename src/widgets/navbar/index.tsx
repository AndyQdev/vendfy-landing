"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { URL_LOGIN, URL_REGISTRO } from "@/shared/config/sitio";
import { VendfyLogo } from "@/shared/ui/vendfy-logo";

const enlaces = [
  { href: "/#funciones", label: "Funciones" },
  { href: "/#voz", label: "Vendfy por voz" },
  { href: "/descargar", label: "Descargar" },
  { href: "/#precios", label: "Precios" },
  { href: "/#novedades", label: "Novedades" },
  { href: "/#contacto", label: "Contacto" },
];

export function Navbar() {
  const [conScroll, setConScroll] = useState(false);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const alMover = () => setConScroll(window.scrollY > 8);
    alMover();
    window.addEventListener("scroll", alMover, { passive: true });
    return () => window.removeEventListener("scroll", alMover);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        conScroll || abierto ? "bg-white/90 backdrop-blur-xl border-b border-slate-200" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Principal">
        <Link href="/" className="shrink-0" aria-label="Vendfy, inicio">
          <VendfyLogo size={30} />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {enlaces.map((e) => (
            <Link key={e.href} href={e.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-tinta hover:bg-slate-100">
              {e.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <a href={URL_LOGIN} className="rounded-lg px-4 py-2 text-sm font-semibold text-tinta transition-colors hover:bg-slate-100" data-testid="nav-login">
            Iniciar sesión
          </a>
          <a href={URL_REGISTRO} className="rounded-lg bg-tinta px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-tinta-2">
            Crear cuenta
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-lg p-2 text-tinta hover:bg-slate-100"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        >
          {abierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {abierto && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-slate-200 bg-white"
          >
            <div className="space-y-1 px-4 py-4">
              {enlaces.map((e) => (
                <Link key={e.href} href={e.href} onClick={() => setAbierto(false)} className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50">
                  {e.label}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-3">
                <a href={URL_LOGIN} className="rounded-xl border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-tinta">
                  Iniciar sesión
                </a>
                <a href={URL_REGISTRO} className="rounded-xl bg-tinta px-4 py-3 text-center text-sm font-semibold text-white">
                  Crear cuenta
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

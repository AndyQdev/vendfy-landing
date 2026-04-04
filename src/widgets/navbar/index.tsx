"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { VendfyLogo } from "@/shared/ui/vendfy-logo";

const navLinks = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#ia", label: "IA" },
  { href: "#precios", label: "Precios" },
  { href: "#testimonios", label: "Testimonios" },
];

const WA_LINK = "https://wa.me/59171890091?text=Hola%2C%20me%20interesa%20Vendfy";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex-shrink-0">
            <VendfyLogo size={32} />
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#0F172A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://app.vendfy.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#0F172A] hover:text-[#10B981] transition-colors px-4 py-2"
            >
              Iniciar Sesion
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] px-5 py-2.5 rounded-xl transition-all hover:shadow-lg"
            >
              Contactar Ventas
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://app.vendfy.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm font-semibold text-[#0F172A] border border-gray-200 px-5 py-3 rounded-xl"
                >
                  Iniciar Sesion
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm font-semibold text-white bg-[#0F172A] px-5 py-3 rounded-xl"
                >
                  Contactar Ventas
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

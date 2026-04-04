"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { VendfyLogo } from "@/shared/ui/vendfy-logo";

const WA_LINK = "https://wa.me/59171890091?text=Hola%2C%20me%20interesa%20Vendfy";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10B981]/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#ECFDF5] border border-[#10B981]/20 text-[#059669] px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Potenciado con Inteligencia Artificial
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Tu tienda completa{" "}
            <span className="gradient-text">en 2 clicks</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Inventario, punto de venta, tienda online, bot de WhatsApp y reportes.
            Todo lo que necesitas para vender mas, sin complicaciones.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-[#0F172A]/20 hover:-translate-y-0.5"
            >
              Contactar Ventas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-3 text-gray-600 hover:text-[#0F172A] font-semibold text-lg px-8 py-4 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all hover:bg-gray-50"
            >
              <Play className="w-5 h-5" />
              Ver como funciona
            </a>
          </motion.div>

          {/* Hero image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-b from-[#10B981]/10 to-transparent rounded-3xl blur-xl" />
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/50 overflow-hidden">
              {/* TODO: Reemplazar con screenshot real del dashboard */}
              <div className="aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <VendfyLogo variant="icon" size={64} className="mx-auto mb-4" />
                  {/* <p className="text-gray-400 text-sm">Screenshot del dashboard - reemplazar con imagen real</p> */}
                  {/* <p className="text-gray-300 text-xs mt-1">Tamano recomendado: 1920x1080</p> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

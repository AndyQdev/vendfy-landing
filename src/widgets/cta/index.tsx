"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { VendfyLogo } from "@/shared/ui/vendfy-logo";

const WA_LINK = "https://wa.me/59171890091?text=Hola%2C%20quiero%20empezar%20con%20Vendfy";

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <VendfyLogo variant="icon" size={56} className="mx-auto mb-8" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Listo para digitalizar{" "}
            <span className="text-[#10B981]">tu negocio?</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Unete a los negocios que ya venden mas con Vendfy.
            Contactanos y te ayudamos a empezar hoy mismo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-[#10B981]/20"
            >
              <MessageCircle className="w-5 h-5" />
              Escribenos por WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://app.vendfy.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-semibold text-lg px-8 py-4 rounded-2xl border border-white/20 hover:border-white/40 transition-all"
            >
              Ir a la app
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
